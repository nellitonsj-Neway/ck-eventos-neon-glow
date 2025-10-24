import { Budget, CalculatorData } from '@/utils/calculator';
import { getEventTypeById } from '@/config/eventTypes';
import { getServiceById } from '@/config/services';
import { formatCurrency, formatDate, getDayOfWeek } from '@/utils/formatters';
import { sendCalculatorToWhatsApp } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';
import { MessageCircle, RefreshCcw } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ResultScreenProps {
  data: CalculatorData;
  budget: Budget;
  onReset: () => void;
}

export default function ResultScreen({ data, budget, onReset }: ResultScreenProps) {
  const [animatedMin, setAnimatedMin] = useState(0);
  const [animatedMax, setAnimatedMax] = useState(0);
  
  const eventType = getEventTypeById(data.eventType);
  const dateStr = formatDate(data.date);
  const dayOfWeek = getDayOfWeek(data.date);

  // Animação de contador
  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setAnimatedMin(Math.round(budget.min * progress));
      setAnimatedMax(Math.round(budget.max * progress));
      
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [budget]);

  const handleWhatsAppClick = () => {
    sendCalculatorToWhatsApp(data, budget);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Título */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2 text-gradient-primary">
          🎉 Seu Orçamento Estimado
        </h2>
        <p className="text-muted-foreground">
          Veja a estimativa para o seu evento
        </p>
      </div>

      {/* Box do orçamento */}
      <div className="max-w-2xl mx-auto p-8 rounded-lg bg-gradient-neon border-2 border-primary glow-primary">
        <div className="text-center space-y-4">
          <div className="text-lg font-medium text-muted-foreground">
            💰 Investimento Estimado
          </div>
          
          <div className="text-5xl md:text-6xl font-bold text-gradient-primary">
            {formatCurrency(animatedMin)} - {formatCurrency(animatedMax)}
          </div>
          
          <div className="pt-4 border-t border-primary/20">
            <p className="text-sm text-muted-foreground flex items-start gap-2 justify-center">
              <span>⚠️</span>
              <span className="max-w-md">
                <strong>Valores aproximados.</strong> Para um orçamento detalhado e personalizado, 
                converse com nossa equipe pelo WhatsApp!
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Resumo do evento */}
      <div className="max-w-2xl mx-auto p-6 rounded-lg bg-card border border-border">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          📋 Resumo do Evento
        </h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{eventType?.emoji}</span>
            <span className="font-semibold">{eventType?.name}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>👥</span>
            <span>{data.guests} convidados</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>📅</span>
            <span>{dateStr} ({dayOfWeek})</span>
          </div>
          
          <div className="pt-3 border-t border-border">
            <div className="font-semibold mb-2 flex items-center gap-2">
              🎯 Serviços Selecionados:
            </div>
            <ul className="space-y-1 ml-6">
              {data.services.map((serviceId) => {
                const service = getServiceById(serviceId);
                let serviceName = service?.name || serviceId;
                
                if (serviceId === 'bar' && data.barWithAlcohol !== undefined) {
                  serviceName += data.barWithAlcohol ? ' (com álcool)' : ' (sem álcool)';
                }
                if (serviceId === 'photo-booth' && data.photoBoothHours) {
                  serviceName += ` (${data.photoBoothHours}h)`;
                }
                
                return (
                  <li key={serviceId} className="text-muted-foreground">
                    • {serviceName}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Botões de ação */}
      <div className="max-w-2xl mx-auto space-y-4">
        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="w-full h-16 text-lg gap-3 glow-primary"
        >
          <MessageCircle className="w-6 h-6" />
          Solicitar Orçamento Detalhado no WhatsApp
        </Button>

        <button
          onClick={onReset}
          className="w-full text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCcw className="w-4 h-4" />
          Refazer Cálculo
        </button>
      </div>
    </div>
  );
}
