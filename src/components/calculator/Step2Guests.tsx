import { Slider } from '@/components/ui/slider';
import { Users, Lightbulb, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Step2GuestsProps {
  guests: number;
  onGuestsChange: (value: number) => void;
}

export default function Step2Guests({ guests, onGuestsChange }: Step2GuestsProps) {
  const min = 20;
  const max = 500;

  const handleIncrement = () => {
    if (guests < max) onGuestsChange(Math.min(max, guests + 10));
  };

  const handleDecrement = () => {
    if (guests > min) onGuestsChange(Math.max(min, guests - 10));
  };

  return (
    <div className="space-y-10 py-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient-primary">
          Tamanho do Evento
        </h2>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto">
          O número de convidados é fundamental para dimensionar a estrutura e o staff necessário.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="glass-card p-8 md:p-12 space-y-12 relative overflow-hidden group">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700"></div>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <Users className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex items-center justify-center gap-6">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleDecrement}
                disabled={guests <= min}
                className="h-12 w-12 rounded-full border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 text-primary transition-all"
              >
                <Minus className="h-6 w-6" />
              </Button>
              
              <div className="relative flex flex-col items-center">
                <input
                  type="number"
                  value={guests}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val)) onGuestsChange(Math.min(max, Math.max(0, val)));
                  }}
                  className="w-32 bg-transparent text-center text-6xl md:text-7xl font-bold text-gradient-primary focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mt-2">
                  Convidados
                </span>
              </div>

              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleIncrement}
                disabled={guests >= max}
                className="h-12 w-12 rounded-full border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 text-primary transition-all"
              >
                <Plus className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Slider
              value={[guests]}
              onValueChange={(value) => onGuestsChange(value[0])}
              min={min}
              max={max}
              step={5}
              className="w-full py-4"
            />
            
            <div className="flex justify-between text-xs font-medium text-muted-foreground uppercase tracking-tighter">
              <span>Mín {min}</span>
              <span>Médio 250</span>
              <span>Máx {max}+</span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5">
            <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              Estrutura otimizada para o brilho perfeito da sua festa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

