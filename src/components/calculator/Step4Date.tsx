import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, Lightbulb } from 'lucide-react';
import { formatDateLong, getDayOfWeek } from '@/utils/formatters';
import { cn } from '@/lib/utils';

interface Step4DateProps {
  selectedDate?: Date;
  onDateSelect: (date: Date | undefined) => void;
}

export default function Step4Date({ selectedDate, onDateSelect }: Step4DateProps) {
  // Comparação por dia (sem horas) para não bloquear o dia atual
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="space-y-10 py-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient-primary">
          Reserve a Data
        </h2>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto">
          Escolha o dia em que o brilho do neon vai tomar conta da sua festa.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-8">
        <div className="glass-card p-6 md:p-8 space-y-8 relative overflow-hidden group">
          {/* Decorative glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          
          {selectedDate ? (
            <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20 animate-in zoom-in-95 duration-500">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <CalendarIcon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gradient-primary mb-1">
                {formatDateLong(selectedDate)}
              </div>
              <div className="text-sm font-medium text-primary/80 uppercase tracking-widest">
                {getDayOfWeek(selectedDate)}
              </div>
            </div>
          ) : (
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-dashed border-white/10">
              <p className="text-muted-foreground">Nenhuma data selecionada</p>
            </div>
          )}

          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onDateSelect}
              disabled={(date) => {
                const d = new Date(date);
                d.setHours(0, 0, 0, 0);
                return d < today;
              }}
              initialFocus
              className="rounded-xl border border-white/5 bg-black/40 p-3"
              classNames={{
                day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground glow-primary",
                day_today: "bg-accent/20 text-accent font-bold",
              }}
            />
          </div>

          <div className="pt-6 border-t border-white/5">
            <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              A disponibilidade pode variar em datas comemorativas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

