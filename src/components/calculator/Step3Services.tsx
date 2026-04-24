import { services, getRecommendedServices, getServicesByCategory, serviceCategories, ServiceCategory } from '@/config/services';
import { barMenus, BarType, getPriceForService } from '@/config/pricing';
import { ServiceSelection } from '@/utils/calculator';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/utils/formatters';
import { Check } from 'lucide-react';

interface Step3ServicesProps {
  selectedServices: ServiceSelection[];
  eventTypeId: string;
  guests: number;
  onServicesChange: (services: ServiceSelection[]) => void;
  onServiceOptionChange: (serviceId: string, options: { barType?: BarType; hours?: number }) => void;
}

function getEstimatedPrice(serviceId: string, guests: number, selection?: ServiceSelection): number | null {
  return getPriceForService(serviceId, {
    guests,
    year: new Date().getFullYear(),
    barType: selection?.barType,
    experienceHours: selection?.hours,
  });
}

export default function Step3Services({
  selectedServices,
  eventTypeId,
  guests,
  onServicesChange,
  onServiceOptionChange,
}: Step3ServicesProps) {
  const recommendedServiceIds = getRecommendedServices(eventTypeId).map(s => s.id);
  const categories: ServiceCategory[] = ['bar', 'experiencias', 'gourmet'];

  const isServiceSelected = (serviceId: string) =>
    selectedServices.some(s => s.serviceId === serviceId);

  const getServiceSelection = (serviceId: string) =>
    selectedServices.find(s => s.serviceId === serviceId);

  const handleServiceToggle = (serviceId: string) => {
    if (isServiceSelected(serviceId)) {
      onServicesChange(selectedServices.filter((s) => s.serviceId !== serviceId));
    } else {
      const service = services.find(s => s.id === serviceId);
      const newSelection: ServiceSelection = { serviceId };

      if (service?.hasBarTypeOption) {
        newSelection.barType = 'exclusive';
      }
      if (service?.hasHoursOption) {
        newSelection.hours = 3;
      }

      onServicesChange([...selectedServices, newSelection]);
    }
  };

  // Calcular subtotal
  const subtotal = selectedServices.reduce((acc, sel) => {
    const price = getEstimatedPrice(sel.serviceId, guests, sel);
    return acc + (price ?? 0);
  }, 0);

  const hasConsultation = selectedServices.some(sel => getEstimatedPrice(sel.serviceId, guests, sel) === null);

  return (
    <div className="space-y-12 py-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient-primary">
          Experiências Neon
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Escolha as atrações que farão seu evento brilhar. Selecione múltiplos itens para uma experiência completa.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category, catIdx) => {
          const categoryServices = getServicesByCategory(category);
          const categoryInfo = serviceCategories[category];

          return (
            <div 
              key={category} 
              className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000"
              style={{ animationDelay: `${catIdx * 200}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <categoryInfo.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight uppercase text-primary/90">{categoryInfo.name}</h3>
                  <p className="text-muted-foreground">{categoryInfo.description}</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {categoryServices.map((service) => {
                  const isSelected = isServiceSelected(service.id);
                  const selection = getServiceSelection(service.id);
                  const isRecommended = recommendedServiceIds.includes(service.id);
                  const Icon = service.icon;
                  const estimatedPrice = isSelected ? getEstimatedPrice(service.id, guests, selection) : null;

                  return (
                    <div 
                      key={service.id} 
                      className={cn(
                        "group relative glass-card overflow-hidden transition-all duration-500",
                        isSelected 
                          ? "border-primary/50 bg-primary/5 shadow-[0_0_40px_hsl(var(--primary)/0.1)]" 
                          : "hover:border-primary/30 hover:bg-white/[0.02]"
                      )}
                    >
                      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                        <div className="flex-1 space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className={cn(
                                "w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-500",
                                isSelected ? "bg-primary text-primary-foreground" : "bg-white/5 text-primary group-hover:bg-primary/20"
                              )}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-xl font-bold">{service.name}</h4>
                                <div className="flex gap-2 mt-1">
                                  {isRecommended && (
                                    <Badge variant="outline" className="border-primary/50 text-primary text-[10px] uppercase font-bold py-0">
                                      Recomendado
                                    </Badge>
                                  )}
                                  {service.badge && (
                                    <Badge variant="secondary" className="bg-white/10 text-white text-[10px] uppercase font-bold py-0">
                                      {service.badge}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleServiceToggle(service.id)}
                              className={cn(
                                "h-12 w-12 rounded-xl flex items-center justify-center border-2 transition-all duration-300",
                                isSelected 
                                  ? "bg-primary border-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary))]" 
                                  : "border-white/10 text-white/40 hover:border-primary/50 hover:text-primary"
                              )}
                            >
                              <Check className={cn("w-6 h-6 transition-transform", isSelected ? "scale-100" : "scale-0")} />
                              {!isSelected && <Plus className="w-6 h-6" />}
                            </button>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>

                          {isSelected && (
                            <div className="flex items-center gap-4 pt-2">
                              <div className="text-2xl font-bold text-gradient-primary">
                                {estimatedPrice !== null ? formatCurrency(estimatedPrice) : "Sob consulta"}
                              </div>
                              {service.isUnderConsultation && (
                                <span className="text-xs text-amber-500 font-medium px-2 py-1 bg-amber-500/10 rounded-md border border-amber-500/20">
                                  Ajustado para {guests} convidados
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Configurações Extra (Bar / Horas) */}
                        {isSelected && (service.hasBarTypeOption || service.hasHoursOption) && (
                          <div className="md:w-80 space-y-6 pt-6 md:pt-0 md:pl-8 md:border-l border-white/5 animate-in fade-in zoom-in-95 duration-500">
                            {service.hasBarTypeOption && (
                              <div className="space-y-3">
                                <Label className="text-xs font-bold uppercase tracking-tighter text-primary">Cardápio de Drinks</Label>
                                <RadioGroup
                                  value={selection?.barType || 'exclusive'}
                                  onValueChange={(value) => onServiceOptionChange(service.id, { barType: value as BarType })}
                                  className="grid gap-2"
                                >
                                  {barMenus.map((menu) => (
                                    <div 
                                      key={menu.type} 
                                      className={cn(
                                        "flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer",
                                        selection?.barType === menu.type 
                                          ? "border-primary/40 bg-primary/10" 
                                          : "border-white/5 bg-white/5 hover:border-white/20"
                                      )}
                                      onClick={() => onServiceOptionChange(service.id, { barType: menu.type })}
                                    >
                                      <RadioGroupItem value={menu.type} id={`bar-${menu.type}-${service.id}`} className="sr-only" />
                                      <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                          <span className="text-sm font-bold">{menu.name}</span>
                                          {menu.badge && <span className="text-[10px] bg-primary/20 text-primary px-1.5 rounded">{menu.badge}</span>}
                                        </div>
                                        <p className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">{menu.drinks.join(', ')}</p>
                                      </div>
                                    </div>
                                  ))}
                                </RadioGroup>
                              </div>
                            )}

                            {service.hasHoursOption && (
                              <div className="space-y-3">
                                <Label className="text-xs font-bold uppercase tracking-tighter text-primary">Duração da Experiência</Label>
                                <Select
                                  value={selection?.hours?.toString() || '3'}
                                  onValueChange={(value) => onServiceOptionChange(service.id, { hours: Number(value) })}
                                >
                                  <SelectTrigger className="bg-white/5 border-white/10 h-10">
                                    <SelectValue placeholder="Duração" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                                    {[1, 2, 3, 4, 5, 6].map((hour) => (
                                      <SelectItem key={hour} value={hour.toString()}>
                                        {hour} {hour === 1 ? 'hora' : 'horas'} de show
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Resumo flutuante / Rodapé */}
      <div className="sticky bottom-4 z-20 max-w-2xl mx-auto px-4">
        <div className="glass-card p-6 border-primary/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Resumo Parcial</div>
            <div className="text-xs text-primary/80">{selectedServices.length} {selectedServices.length === 1 ? 'item selecionado' : 'itens selecionados'}</div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="text-3xl font-bold text-gradient-primary">
              {subtotal > 0 ? formatCurrency(subtotal) : (hasConsultation ? "Sob consulta" : formatCurrency(0))}
            </div>
            {hasConsultation && subtotal > 0 && <span className="text-[10px] text-amber-500 font-bold uppercase tracking-tighter">+ Itens sob consulta</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

