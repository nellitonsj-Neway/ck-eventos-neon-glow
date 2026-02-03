import { getPriceForService, BarType } from '@/config/pricing';

export interface ServiceSelection {
  serviceId: string;
  barType?: BarType;
  hours?: number;
}

export interface CalculatorData {
  eventType: string;
  guests: number;
  services: ServiceSelection[];
  date: Date;
}

export interface BudgetItem {
  serviceId: string;
  serviceName: string;
  price: number | null; // null = sob consulta
  details?: string;
}

export interface Budget {
  items: BudgetItem[];
  total: number;
  hasConsultationItems: boolean;
  min: number;
  max: number;
}

export function calculateBudget(data: CalculatorData): Budget {
  const year = new Date(data.date).getFullYear();
  const items: BudgetItem[] = [];
  let total = 0;
  let hasConsultationItems = false;

  data.services.forEach((selection) => {
    const price = getPriceForService(selection.serviceId, {
      guests: data.guests,
      year,
      barType: selection.barType,
      experienceHours: selection.hours,
    });

    if (price === null) {
      hasConsultationItems = true;
    } else {
      total += price;
    }

    items.push({
      serviceId: selection.serviceId,
      serviceName: selection.serviceId, // Will be resolved by component
      price,
      details: selection.barType 
        ? `Cardápio ${selection.barType === 'essencial' ? 'CK Essencial' : 'CK Exclusive'}`
        : selection.hours 
          ? `${selection.hours}h`
          : undefined,
    });
  });

  return {
    items,
    total,
    hasConsultationItems,
    min: Math.round(total * 0.9),
    max: Math.round(total * 1.2),
  };
}
