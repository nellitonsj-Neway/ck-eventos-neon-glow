import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProgressBar from '@/components/calculator/ProgressBar';
import Step1EventType from '@/components/calculator/Step1EventType';
import Step2Guests from '@/components/calculator/Step2Guests';
import Step3Services from '@/components/calculator/Step3Services';
import Step4Date from '@/components/calculator/Step4Date';
import ResultScreen from '@/components/calculator/ResultScreen';
import { CalculatorData, calculateBudget, Budget } from '@/utils/calculator';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Calculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [budget, setBudget] = useState<Budget | null>(null);
  
  const [calculatorData, setCalculatorData] = useState<Partial<CalculatorData>>({
    eventType: '',
    guests: 100,
    services: [],
    barWithAlcohol: true,
    photoBoothHours: 3,
  });

  const totalSteps = 4;

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return calculatorData.eventType !== '';
      case 2:
        return calculatorData.guests! >= 20;
      case 3:
        return calculatorData.services!.length > 0;
      case 4:
        return calculatorData.date !== undefined;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep === totalSteps && canProceed()) {
      // Calcular orçamento e mostrar resultado
      const budget = calculateBudget(calculatorData as CalculatorData);
      setBudget(budget);
      setShowResult(true);
    } else if (canProceed()) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setShowResult(false);
    setBudget(null);
    setCalculatorData({
      eventType: '',
      guests: 100,
      services: [],
      barWithAlcohol: true,
      photoBoothHours: 3,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showResult && budget) {
    return (
      <section id="calculadora" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <ResultScreen
            data={calculatorData as CalculatorData}
            budget={budget}
            onReset={handleReset}
          />
        </div>
      </section>
    );
  }

  return (
    <section id="calculadora" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <div className="min-h-[500px]">
          {currentStep === 1 && (
            <Step1EventType
              selectedEventType={calculatorData.eventType || ''}
              onSelect={(eventType) =>
                setCalculatorData({ ...calculatorData, eventType })
              }
            />
          )}

          {currentStep === 2 && (
            <Step2Guests
              guests={calculatorData.guests || 100}
              onGuestsChange={(guests) =>
                setCalculatorData({ ...calculatorData, guests })
              }
            />
          )}

          {currentStep === 3 && (
            <Step3Services
              selectedServices={calculatorData.services || []}
              eventTypeId={calculatorData.eventType || ''}
              barWithAlcohol={calculatorData.barWithAlcohol}
              photoBoothHours={calculatorData.photoBoothHours}
              onServicesChange={(services) =>
                setCalculatorData({ ...calculatorData, services })
              }
              onBarAlcoholChange={(barWithAlcohol) =>
                setCalculatorData({ ...calculatorData, barWithAlcohol })
              }
              onPhotoBoothHoursChange={(photoBoothHours) =>
                setCalculatorData({ ...calculatorData, photoBoothHours })
              }
            />
          )}

          {currentStep === 4 && (
            <Step4Date
              selectedDate={calculatorData.date}
              onDateSelect={(date) =>
                setCalculatorData({ ...calculatorData, date })
              }
            />
          )}
        </div>

        {/* Botões de navegação */}
        <div className="flex justify-between mt-8 gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Voltar
          </Button>

          <Button
            size="lg"
            onClick={handleNext}
            disabled={!canProceed()}
            className="gap-2 glow-primary"
          >
            {currentStep === totalSteps ? 'Ver Orçamento' : 'Continuar'}
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
