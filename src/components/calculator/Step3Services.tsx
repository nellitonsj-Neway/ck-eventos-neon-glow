import { services, getRecommendedServices } from '@/config/services';
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

interface Step3ServicesProps {
  selectedServices: string[];
  eventTypeId: string;
  barWithAlcohol?: boolean;
  photoBoothHours?: number;
  onServicesChange: (services: string[]) => void;
  onBarAlcoholChange: (withAlcohol: boolean) => void;
  onPhotoBoothHoursChange: (hours: number) => void;
}

export default function Step3Services({
  selectedServices,
  eventTypeId,
  barWithAlcohol,
  photoBoothHours,
  onServicesChange,
  onBarAlcoholChange,
  onPhotoBoothHoursChange,
}: Step3ServicesProps) {
  const recommendedServiceIds = getRecommendedServices(eventTypeId).map(s => s.id);

  const handleServiceToggle = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onServicesChange(selectedServices.filter((id) => id !== serviceId));
    } else {
      onServicesChange([...selectedServices, serviceId]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-gradient-primary">
          Quais serviços você deseja?
        </h2>
        <p className="text-muted-foreground">
          Selecione todos os serviços que deseja incluir no seu evento
        </p>
      </div>

      <div className="space-y-4">
        {services.map((service) => {
          const isSelected = selectedServices.includes(service.id);
          const isRecommended = recommendedServiceIds.includes(service.id);
          const Icon = service.icon;

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
                {isRecommended && (
                  <span className="absolute top-2 right-2 px-2 py-1 text-xs font-bold bg-accent text-accent-foreground rounded-full">
                    RECOMENDADO
                  </span>
                )}

                <div className="flex items-start gap-4">
                  <Checkbox
                    id={service.id}
                    checked={isSelected}
                    onCheckedChange={() => handleServiceToggle(service.id)}
                    className="mt-1"
                  />
                  
                  <div className="flex-1">
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
                  </div>
                </div>
              </div>

              {/* Perguntas condicionais */}
              {isSelected && service.hasAlcoholOption && (
                <div className="ml-12 p-4 rounded-lg bg-muted/50 space-y-3">
                  <Label className="text-sm font-medium">Incluir bebidas alcoólicas?</Label>
                  <RadioGroup
                    value={barWithAlcohol ? 'yes' : 'no'}
                    onValueChange={(value) => onBarAlcoholChange(value === 'yes')}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="alcohol-yes" />
                      <Label htmlFor="alcohol-yes" className="cursor-pointer">
                        Sim, com álcool
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="alcohol-no" />
                      <Label htmlFor="alcohol-no" className="cursor-pointer">
                        Não, sem álcool
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {isSelected && service.hasHoursOption && (
                <div className="ml-12 p-4 rounded-lg bg-muted/50 space-y-3">
                  <Label className="text-sm font-medium">Por quantas horas?</Label>
                  <Select
                    value={photoBoothHours?.toString()}
                    onValueChange={(value) => onPhotoBoothHoursChange(Number(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a duração" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((hour) => (
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

      <div className="text-center text-sm text-muted-foreground">
        {selectedServices.length} {selectedServices.length === 1 ? 'serviço selecionado' : 'serviços selecionados'}
      </div>
    </div>
  );
}
