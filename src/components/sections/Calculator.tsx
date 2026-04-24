import { useState, useMemo, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Step1EventType from '@/components/calculator/Step1EventType';
import Step2Guests from '@/components/calculator/Step2Guests';
import Step3Services from '@/components/calculator/Step3Services';
import Step4Date from '@/components/calculator/Step4Date';
import ResultScreen from '@/components/calculator/ResultScreen';
import ProgressBar from '@/components/calculator/ProgressBar';
import { CalculatorData, ServiceSelection, calculateBudget, Budget } from '@/utils/calculator';
import { Sparkles, ChevronLeft, ChevronRight, Calculator as CalcIcon } from 'lucide-react';
import { BarType } from '@/config/pricing';
import { cn } from '@/lib/utils';

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
  const [currentStep, setCurrentStep] = useState(1);
  const [state, setState] = useState<CalculatorState>(INITIAL_STATE);
  const [budget, setBudget] = useState<Budget | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: (document.getElementById('calculadora')?.offsetTop ?? 0) - 100, behavior: 'smooth' });
    } else {
      handleCalculate();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: (document.getElementById('calculadora')?.offsetTop ?? 0) - 100, behavior: 'smooth' });
    }
  };

  const isStepValid = useMemo(() => {
    switch (currentStep) {
      case 1: return !!state.eventType;
      case 2: return state.guests >= 20;
      case 3: return state.services.length > 0;
      case 4: return !!state.date;
      default: return false;
    }
  }, [currentStep, state]);

  const handleCalculate = () => {
    const data: CalculatorData = {
      eventType: state.eventType,
      guests: state.guests,
      services: state.services,
      date: state.date!,
    };
    const result = calculateBudget(data);
    setBudget(result);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleReset = () => {
    setState(INITIAL_STATE);
    setBudget(null);
    setCurrentStep(1);
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
  };

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
      <div className="container mx-auto max-w-4xl space-y-8">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <CalcIcon className="w-10 h-10 mx-auto mb-3 text-primary" />
          <h2 className="text-4xl font-bold mb-2 text-gradient-primary">
            Calcule seu Orçamento
          </h2>
          <p className="text-muted-foreground">
            Personalize seu evento e veja uma estimativa instantânea em poucos passos
          </p>
        </div>

        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-xl min-h-[400px] flex flex-col">
          <div className="flex-1">
            {currentStep === 1 && (
              <Step1EventType
                selectedEventType={state.eventType}
                onSelect={(eventType) => {
                  setState((prev) => ({ ...prev, eventType }));
                  setTimeout(handleNext, 300);
                }}
              />
            )}

            {currentStep === 2 && (
              <Step2Guests
                guests={state.guests}
                onGuestsChange={(guests) => setState((prev) => ({ ...prev, guests }))}
              />
            )}

            {currentStep === 3 && (
              <Step3Services
                selectedServices={state.services}
                eventTypeId={state.eventType}
                guests={state.guests}
                onServicesChange={handleServicesChange}
                onServiceOptionChange={handleServiceOptionChange}
              />
            )}

            {currentStep === 4 && (
              <Step4Date
                selectedDate={state.date}
                onDateSelect={(date) => {
                  setState((prev) => ({ ...prev, date }));
                }}
              />
            )}
          </div>

          {/* Navegação */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar
            </Button>

            <Button
              onClick={handleNext}
              disabled={!isStepValid}
              className={cn(
                "gap-2 px-8 h-12 text-base",
                currentStep === totalSteps ? "glow-primary" : ""
              )}
            >
              {currentStep === totalSteps ? (
                <>
                  <Sparkles className="w-5 h-5" />
                  Calcular Orçamento
                </>
              ) : (
                <>
                  Próximo
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

