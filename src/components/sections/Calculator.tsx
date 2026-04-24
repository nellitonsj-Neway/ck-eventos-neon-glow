import { useState, useMemo, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Step1EventType from '@/components/calculator/Step1EventType';
import Step2Guests from '@/components/calculator/Step2Guests';
import Step3Services from '@/components/calculator/Step3Services';
import Step4Date from '@/components/calculator/Step4Date';
import ResultScreen from '@/components/calculator/ResultScreen';
import { CalculatorData, ServiceSelection, calculateBudget, Budget } from '@/utils/calculator';
import { Sparkles, AlertCircle, Calculator as CalcIcon } from 'lucide-react';
import { BarType } from '@/config/pricing';

interface CalculatorState {
  eventType: string;
  guests: number;
  services: ServiceSelection[];
  date?: Date;
}

const INITIAL_STATE: CalculatorState = {
  eventType: '',
  guests: 100,
  services: [],
  date: undefined,
};

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>(INITIAL_STATE);
  const [budget, setBudget] = useState<Budget | null>(null);
  const [showErrors, setShowErrors] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const errors = useMemo(() => {
    const e: string[] = [];
    if (!state.eventType) e.push('Selecione o tipo de evento');
    if (state.services.length === 0) e.push('Selecione pelo menos 1 serviço');
    if (!state.date) e.push('Selecione a data do evento');
    return e;
  }, [state]);

  const isValid = errors.length === 0;

  const handleCalculate = () => {
    if (!isValid) {
      setShowErrors(true);
      return;
    }
    const data: CalculatorData = {
      eventType: state.eventType,
      guests: state.guests,
      services: state.services,
      date: state.date!,
    };
    const result = calculateBudget(data);
    setBudget(result);
    setShowErrors(false);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleReset = () => {
    setState(INITIAL_STATE);
    setBudget(null);
    setShowErrors(false);
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Limpa erros assim que o usuário corrige tudo
  useEffect(() => {
    if (showErrors && isValid) setShowErrors(false);
  }, [isValid, showErrors]);

  const handleServicesChange = (services: ServiceSelection[]) => {
    setState((prev) => ({ ...prev, services }));
  };

  const handleServiceOptionChange = (
    serviceId: string,
    options: { barType?: BarType; hours?: number }
  ) => {
    setState((prev) => ({
      ...prev,
      services: prev.services.map((s) =>
        s.serviceId === serviceId ? { ...s, ...options } : s
      ),
    }));
  };

  if (budget) {
    const data: CalculatorData = {
      eventType: state.eventType,
      guests: state.guests,
      services: state.services,
      date: state.date!,
    };
    return (
      <section id="calculadora" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl" ref={resultRef}>
          <ResultScreen data={data} budget={budget} onReset={handleReset} />
        </div>
      </section>
    );
  }

  return (
    <section id="calculadora" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl space-y-12">
        {/* Cabeçalho */}
        <div className="text-center">
          <CalcIcon className="w-10 h-10 mx-auto mb-3 text-primary" />
          <h2 className="text-4xl font-bold mb-2 text-gradient-primary">
            Calcule seu Orçamento
          </h2>
          <p className="text-muted-foreground">
            Personalize seu evento e veja uma estimativa instantânea
          </p>
        </div>

        {/* Etapa 1: Tipo de evento */}
        <div className="space-y-2">
          <SectionLabel index={1} label="Tipo de evento" done={!!state.eventType} />
          <Step1EventType
            selectedEventType={state.eventType}
            onSelect={(eventType) => setState((prev) => ({ ...prev, eventType }))}
          />
        </div>

        {/* Etapa 2: Convidados */}
        <div className="space-y-2">
          <SectionLabel index={2} label="Número de convidados" done={state.guests >= 20} />
          <Step2Guests
            guests={state.guests}
            onGuestsChange={(guests) => setState((prev) => ({ ...prev, guests }))}
          />
        </div>

        {/* Etapa 3: Serviços */}
        <div className="space-y-2">
          <SectionLabel index={3} label="Serviços" done={state.services.length > 0} />
          <Step3Services
            selectedServices={state.services}
            eventTypeId={state.eventType}
            guests={state.guests}
            onServicesChange={handleServicesChange}
            onServiceOptionChange={handleServiceOptionChange}
          />
        </div>

        {/* Etapa 4: Data */}
        <div className="space-y-2">
          <SectionLabel index={4} label="Data do evento" done={!!state.date} />
          <Step4Date
            selectedDate={state.date}
            onDateSelect={(date) => setState((prev) => ({ ...prev, date }))}
          />
        </div>

        {/* Erros visíveis */}
        {showErrors && errors.length > 0 && (
          <div className="rounded-lg border-2 border-destructive bg-destructive/10 p-4 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-destructive">
              <AlertCircle className="w-5 h-5" />
              Para calcular, complete:
            </div>
            <ul className="text-sm text-destructive ml-7 list-disc space-y-1">
              {errors.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA único */}
        <div className="flex flex-col items-center gap-3 pt-4">
          <Button
            type="button"
            size="lg"
            onClick={handleCalculate}
            className="gap-2 glow-primary text-base px-8 h-14"
          >
            <Sparkles className="w-5 h-5" />
            Ver meu orçamento
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Estimativa rápida e sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ index, label, done }: { index: number; label: string; done: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={
          done
            ? 'flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm'
            : 'flex h-8 w-8 items-center justify-center rounded-full border-2 border-border text-muted-foreground font-bold text-sm'
        }
      >
        {index}
      </div>
      <span className={done ? 'font-semibold text-primary' : 'font-semibold text-muted-foreground'}>
        {label}
      </span>
    </div>
  );
}
