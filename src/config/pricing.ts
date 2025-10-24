export interface PricingRule {
  serviceId: string;
  calculate: (data: {
    guests: number;
    year: number;
    barWithAlcohol?: boolean;
    photoBoothHours?: number;
  }) => number;
}

export const pricingRules: PricingRule[] = [
  // Bar de Drinks
  {
    serviceId: 'bar',
    calculate: ({ guests, year, barWithAlcohol = true }) => {
      if (guests <= 80) {
        return barWithAlcohol ? 1900 : 1800;
      } else if (guests <= 90) {
        return barWithAlcohol ? 2000 : 1800;
      } else {
        const pricePerPerson = barWithAlcohol
          ? (year === 2025 ? 23 : 25)
          : (year === 2025 ? 21 : 23);
        return guests * pricePerPerson;
      }
    },
  },
  // Cabine de Fotos 360°
  {
    serviceId: 'photo-booth',
    calculate: ({ photoBoothHours = 1 }) => {
      const prices = [800, 900, 1100, 1300, 1500];
      return prices[photoBoothHours - 1] || 800;
    },
  },
  // Cerimonial
  {
    serviceId: 'ceremony',
    calculate: () => 1490,
  },
  // Carrinho de Açaí
  {
    serviceId: 'acai-cart',
    calculate: () => 800,
  },
  // Carrinho de Fondue
  {
    serviceId: 'fondue-cart',
    calculate: ({ guests }) => {
      if (guests >= 100) {
        return guests * 15;
      }
      return 1200;
    },
  },
  // Serviços com preço estimado
  {
    serviceId: 'buffet',
    calculate: ({ guests }) => guests * 35, // Estimativa média
  },
  {
    serviceId: 'sound',
    calculate: () => 1800, // Estimativa
  },
  {
    serviceId: 'decoration',
    calculate: ({ guests }) => Math.max(2000, guests * 12), // Estimativa baseada no tamanho
  },
];

export function getPriceForService(
  serviceId: string,
  data: {
    guests: number;
    year: number;
    barWithAlcohol?: boolean;
    photoBoothHours?: number;
  }
): number {
  const rule = pricingRules.find((r) => r.serviceId === serviceId);
  return rule ? rule.calculate(data) : 0;
}
