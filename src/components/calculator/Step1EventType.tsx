import { eventTypes } from '@/config/eventTypes';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Step1EventTypeProps {
  selectedEventType: string;
  onSelect: (eventTypeId: string) => void;
}

export default function Step1EventType({ selectedEventType, onSelect }: Step1EventTypeProps) {
  const selectedType = eventTypes.find(t => t.id === selectedEventType);

  return (
    <div className="space-y-10 py-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient-primary">
          Qual a sua celebração?
        </h2>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto">
          Cada evento é único. Escolha o tipo para que possamos personalizar sua experiência neon.
        </p>
      </div>

      <div className="max-w-md mx-auto relative group">
        {/* Glow effect behind select */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative glass-card p-8 space-y-4">
          <label className="text-sm font-medium text-primary uppercase tracking-widest ml-1">
            Tipo de Evento
          </label>
          
          <Select value={selectedEventType} onValueChange={onSelect}>
            <SelectTrigger className="w-full h-16 text-lg bg-white/5 border-white/10 hover:border-primary/50 focus:ring-primary/40 rounded-xl transition-all duration-300">
              <SelectValue placeholder="Selecione o tipo de evento">
                {selectedType && (
                  <div className="flex items-center gap-3">
                    <selectedType.icon className="w-6 h-6 text-primary" />
                    <span>{selectedType.name}</span>
                  </div>
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl">
              {eventTypes.map((eventType) => (
                <SelectItem 
                  key={eventType.id} 
                  value={eventType.id}
                  className="py-3 focus:bg-primary/20 focus:text-white cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <eventType.icon className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">{eventType.name}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1">{eventType.description}</div>
                    </div>
                    {eventType.popular && (
                      <span className="ml-auto px-2 py-0.5 text-[10px] font-bold bg-primary/20 text-primary border border-primary/30 rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

