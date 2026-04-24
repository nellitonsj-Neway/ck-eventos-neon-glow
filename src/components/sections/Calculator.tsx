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
    <section id="calculadora" className="relative py-24 px-4 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative">
        {/* Cabeçalho */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <CalcIcon className="w-3 h-3" />
            Simulador Instantâneo
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-primary tracking-tight">
            Seu Evento, <br />Seu Orçamento.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personalize cada detalhe da sua experiência neon e receba uma estimativa em tempo real.
          </p>
        </div>

        <div className="mb-12">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        <div className="min-h-[500px] flex flex-col">
          <div className="flex-1">
            {currentStep === 1 && (
              <Step1EventType
                selectedEventType={state.eventType}
                onSelect={(eventType) => {
                  setState((prev) => ({ ...prev, eventType }));
                  setTimeout(handleNext, 400);
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
          <div className={cn(
            "flex items-center justify-between mt-12 pt-8 border-t border-white/5",
            currentStep === 3 ? "md:sticky md:bottom-28 bg-background/80 backdrop-blur-md rounded-t-3xl p-4 md:-mx-4 z-10" : ""
          )}>
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2 h-14 px-8 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-2xl transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-widest text-xs">Anterior</span>
            </Button>

            <Button
              onClick={handleNext}
              disabled={!isStepValid}
              className={cn(
                "gap-3 px-10 h-14 text-base font-bold rounded-2xl transition-all duration-500",
                currentStep === totalSteps 
                  ? "bg-primary text-white glow-primary hover:scale-105" 
                  : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50"
              )}
            >
              {currentStep === totalSteps ? (
                <>
                  <Sparkles className="w-5 h-5" />
                  FINALIZAR ORÇAMENTO
                </>
              ) : (
                <>
                  <span className="uppercase tracking-widest text-xs">Continuar</span>
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


