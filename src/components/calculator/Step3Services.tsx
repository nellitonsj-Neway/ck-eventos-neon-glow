import { services, getRecommendedServices, getServicesByCategory, serviceCategories, ServiceCategory } from '@/config/services';
import { barMenus, BarType, getPriceForService } from '@/config/pricing';
import { ServiceSelection } from '@/utils/calculator';
import { Checkbox } from '@/components/ui/checkbox';
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
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-gradient-primary">
          Quais serviços você deseja?
        </h2>
        <p className="text-muted-foreground">
          Selecione todos os serviços que deseja incluir no seu evento
        </p>
      </div>

      {categories.map((category) => {
        const categoryServices = getServicesByCategory(category);
        const categoryInfo = serviceCategories[category];
        
        return (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-border">
              <categoryInfo.icon className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-xl font-bold">{categoryInfo.name}</h3>
                <p className="text-sm text-muted-foreground">{categoryInfo.description}</p>
              </div>
            </div>

            <div className="space-y-4 pl-2">
              {categoryServices.map((service) => {
                const isSelected = isServiceSelected(service.id);
                const selection = getServiceSelection(service.id);
                const isRecommended = recommendedServiceIds.includes(service.id);
                const Icon = service.icon;
                const estimatedPrice = isSelected ? getEstimatedPrice(service.id, guests, selection) : null;

                return (
                  <div key={service.id} className="space-y-3">
                    <div
                      className={cn(
                        "relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer",
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border bg-card hover:border-primary/50"
                      )}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      {/* Badges */}
                      <div className="absolute top-2 right-2 flex flex-wrap gap-1 sm:gap-2 max-w-[50%] justify-end">
                        {isSelected && estimatedPrice !== null && (
                          <Badge variant="default" className="bg-primary text-primary-foreground font-bold">
                            {formatCurrency(estimatedPrice)}
                          </Badge>
                        )}
                        {isSelected && estimatedPrice === null && (
                          <Badge variant="outline" className="border-amber-500 text-amber-500">
                            Sob consulta
                          </Badge>
                        )}
                        {service.badge && !isSelected && (
                          <Badge variant="default" className="bg-accent text-accent-foreground">
                            {service.badge}
                          </Badge>
                        )}
                        {isRecommended && (
                          <Badge variant="outline" className="border-primary text-primary">
                            RECOMENDADO
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-start gap-4">
                        <Checkbox
                          id={service.id}
                          checked={isSelected}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                          className="mt-1"
                        />
                        
                        <div className="flex-1 pr-2 sm:pr-24">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-5 h-5 text-primary" />
                            <Label
                              htmlFor={service.id}
                              className="text-lg font-semibold cursor-pointer"
                            >
                              {service.name}
                            </Label>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                          {service.isUnderConsultation && (
                            <p className="text-xs text-amber-500 mt-1 font-medium">
                              Preço sob consulta (baseado no número de convidados)
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Opção de tipo de Bar */}
                    {isSelected && service.hasBarTypeOption && (
                      <div className="ml-12 p-4 rounded-lg bg-muted/50 space-y-4">
                        <Label className="text-sm font-medium">Qual cardápio você prefere?</Label>
                        <RadioGroup
                          value={selection?.barType || 'exclusive'}
                          onValueChange={(value) => onServiceOptionChange(service.id, { barType: value as BarType })}
                        >
                          {barMenus.map((menu) => (
                            <div key={menu.type} className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                              <RadioGroupItem value={menu.type} id={`bar-${menu.type}`} className="mt-1" />
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <Label htmlFor={`bar-${menu.type}`} className="cursor-pointer font-semibold">
                                    {menu.name}
                                  </Label>
                                  {menu.badge && (
                                    <Badge variant="default" className="text-xs">{menu.badge}</Badge>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {menu.drinks.slice(0, 5).join(', ')}{menu.drinks.length > 5 ? ` +${menu.drinks.length - 5} drinks` : ''}
                                </p>
                                <p className="text-xs text-muted-foreground/80 mt-1">
                                  Marcas: {menu.brands}
                                </p>
                              </div>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    )}

                    {/* Opção de horas para experiências */}
                    {isSelected && service.hasHoursOption && (
                      <div className="ml-12 p-4 rounded-lg bg-muted/50 space-y-3">
                        <Label className="text-sm font-medium">Por quantas horas?</Label>
                        <Select
                          value={selection?.hours?.toString() || '3'}
                          onValueChange={(value) => onServiceOptionChange(service.id, { hours: Number(value) })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a duração" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4].map((hour) => (
                              <SelectItem key={hour} value={hour.toString()}>
                                {hour} {hour === 1 ? 'hora' : 'horas'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Rodapé com subtotal */}
      <div className="rounded-lg border border-border bg-card p-4 text-center space-y-1">
        <p className="text-sm text-muted-foreground">
          {selectedServices.length} {selectedServices.length === 1 ? 'serviço selecionado' : 'serviços selecionados'}
        </p>
        {selectedServices.length > 0 && (
          <p className="text-lg font-bold text-primary">
            Estimativa: {formatCurrency(subtotal)}
            {hasConsultation && <span className="text-sm font-normal text-muted-foreground ml-2">+ itens sob consulta</span>}
          </p>
        )}
      </div>
    </div>
  );
}
