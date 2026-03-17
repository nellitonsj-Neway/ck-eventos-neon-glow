import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, Lightbulb } from 'lucide-react';
import { formatDateLong, getDayOfWeek } from '@/utils/formatters';
import { cn } from '@/lib/utils';

interface Step4DateProps {
  selectedDate?: Date;
  onDateSelect: (date: Date | undefined) => void;
}

export default function Step4Date({ selectedDate, onDateSelect }: Step4DateProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-gradient-primary">
          Quando será o evento?
        </h2>
        <p className="text-muted-foreground">
          A data nos ajuda a calcular disponibilidade e valores
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {selectedDate && (
          <div className="text-center p-6 rounded-lg bg-gradient-neon border border-primary/20">
            <CalendarIcon className="w-10 h-10 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold text-gradient-primary mb-1">
              {formatDateLong(selectedDate)}
            </div>
            <div className="text-muted-foreground capitalize">
              {getDayOfWeek(selectedDate)}
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onDateSelect}
            disabled={(date) => date < new Date()}
            initialFocus
            className={cn(
              "p-4 rounded-lg border border-border bg-card pointer-events-auto"
            )}
          />
        </div>

        <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1.5">
          <Lightbulb className="w-4 h-4" />
          Selecione apenas datas futuras
        </p>
      </div>
    </div>
  );
}
