import { eventTypes } from '@/config/eventTypes';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step1EventTypeProps {
  selectedEventType: string;
  onSelect: (eventTypeId: string) => void;
}

export default function Step1EventType({ selectedEventType, onSelect }: Step1EventTypeProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-gradient-primary">
          Que tipo de evento você está planejando?
        </h2>
        <p className="text-muted-foreground">
          Selecione o tipo de evento para calcularmos seu orçamento
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventTypes.map((eventType) => {
          const Icon = eventType.icon;
          return (
            <button
              key={eventType.id}
              onClick={() => onSelect(eventType.id)}
              className={cn(
                "relative p-6 rounded-lg border-2 transition-all duration-300 text-left",
                "hover:scale-105 hover:shadow-lg",
                selectedEventType === eventType.id
                  ? "border-primary bg-primary/10 glow-primary"
                  : "border-border bg-card hover:border-primary/50"
              )}
            >
              {eventType.popular && (
                <span className="absolute top-2 right-2 px-2 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                  POPULAR
                </span>
              )}
              
              <div className="flex items-start gap-3">
                <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{eventType.name}</h3>
                  <p className="text-sm text-muted-foreground">{eventType.description}</p>
                </div>
                
                {selectedEventType === eventType.id && (
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
