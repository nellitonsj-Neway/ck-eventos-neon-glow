import { Slider } from '@/components/ui/slider';
import { Users, Lightbulb } from 'lucide-react';

interface Step2GuestsProps {
  guests: number;
  onGuestsChange: (value: number) => void;
}

export default function Step2Guests({ guests, onGuestsChange }: Step2GuestsProps) {
  const markers = [50, 100, 200, 300, 400];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-gradient-primary">
          Quantos convidados você espera?
        </h2>
        <p className="text-muted-foreground">
          O número de convidados ajuda a personalizar seu orçamento
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        {/* Display do número */}
        <div className="text-center p-8 rounded-lg bg-gradient-neon border border-primary/20">
          <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
          <div className="text-6xl font-bold text-gradient-primary mb-2">
            {guests}
          </div>
          <div className="text-muted-foreground">convidados</div>
        </div>

        {/* Slider */}
        <div className="space-y-4">
          <Slider
            value={[guests]}
            onValueChange={(value) => onGuestsChange(value[0])}
            min={20}
            max={500}
            step={10}
            className="w-full"
          />
          
          {/* Marcadores */}
          <div className="flex justify-between text-xs text-muted-foreground px-2">
            <span>20</span>
            {markers.map((marker) => (
              <span key={marker}>{marker}</span>
            ))}
            <span>500+</span>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1.5">
          <Lightbulb className="w-4 h-4" />
          Faixas de preço variam de acordo com o número de convidados
        </p>
      </div>
    </div>
  );
}
