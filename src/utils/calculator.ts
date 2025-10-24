import { getPriceForService } from '@/config/pricing';

export interface CalculatorData {
  eventType: string;
  guests: number;
  services: string[];
  date: Date;
  barWithAlcohol?: boolean;
  photoBoothHours?: number;
}

export interface Budget {
  min: number;
  max: number;
  base: number;
}

export function calculateBudget(data: CalculatorData): Budget {
  const year = new Date(data.date).getFullYear();
  let total = 0;

  data.services.forEach((serviceId) => {
    const price = getPriceForService(serviceId, {
      guests: data.guests,
      year,
      barWithAlcohol: data.barWithAlcohol,
      photoBoothHours: data.photoBoothHours,
    });
    total += price;
  });

  return {
    base: total,
    min: Math.round(total * 0.9),
    max: Math.round(total * 1.2),
  };
}
