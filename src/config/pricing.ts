export type BarType = 'essencial' | 'exclusive';

export interface BarMenu {
  type: BarType;
  name: string;
  drinks: string[];
  brands: string;
  badge?: string;
}

export const barMenus: BarMenu[] = [
  {
    type: 'essencial',
    name: 'CK Essencial',
    drinks: ['Piña Colada', 'Caipirinha', 'Caipifruta', 'Sex on the Beach', 'Gin Fruits', 'Pink Limonade', 'Gin Energy'],
    brands: 'Orloff, 51, Intencion, Kislla',
  },
  {
    type: 'exclusive',
    name: 'CK Exclusive',
    drinks: ['Piña Colada', 'Caipirinha', 'Caipifruta', 'Sex on the Beach', 'Gin Fruits', 'Pink Limonade', 'Gin Energy', 'Gin Tropical', 'Green Apple Vibe', 'Moscow Mule', 'CK Cream', 'CK Sensation', 'Cuba Libre', 'Kids Dream'],
    brands: 'Smirnoff, 51, Gordon\'s/O Gin',
    badge: 'Best-Seller',
  },
];

export interface PricingData {
  guests: number;
  year: number;
  barType?: BarType;
  experienceHours?: number;
}

export interface PricingRule {
  serviceId: string;
  calculate: (data: PricingData) => number | null; // null = sob consulta
}

export const pricingRules: PricingRule[] = [
  // Bar de Drinks
  {
    serviceId: 'bar',
    calculate: ({ guests, barType = 'essencial' }) => {
      if (barType === 'essencial') {
        if (guests <= 100) return 2700;
        if (guests <= 200) return 4800;
        // Interpolação linear para mais de 200
        return Math.round(guests * 24);
      } else {
        // Exclusive
        if (guests <= 100) return 3300;
        if (guests <= 200) return 5800;
        // Interpolação linear para mais de 200
        return Math.round(guests * 29);
      }
    },
  },
  // Plataforma 360°
  {
    serviceId: 'plataforma-360',
    calculate: ({ experienceHours = 1 }) => {
      const prices = [750, 850, 1050, 1250];
      return prices[Math.min(experienceHours - 1, 3)] || 750;
    },
  },
  // Cabine de Fotos
  {
    serviceId: 'cabine-fotos',
    calculate: ({ experienceHours = 1 }) => {
      const prices = [800, 900, 1100, 1300];
      return prices[Math.min(experienceHours - 1, 3)] || 800;
    },
  },
  // Totem Fotográfico
  {
    serviceId: 'totem-fotografico',
    calculate: ({ experienceHours = 1 }) => {
      const prices = [700, 800, 1000, 1200];
      return prices[Math.min(experienceHours - 1, 3)] || 700;
    },
  },
  // Estação Gourmet - Sob consulta
  {
    serviceId: 'carrinho-acai',
    calculate: () => null,
  },
  {
    serviceId: 'carrinho-milkshake',
    calculate: () => null,
  },
  {
    serviceId: 'carrinho-fondue',
    calculate: () => null,
  },
];

// Adicionais opcionais
export interface AdditionalService {
  id: string;
  name: string;
  price: number;
  description: string;
  relatedTo?: string[]; // IDs de serviços relacionados
}

export const additionalServices: AdditionalService[] = [
  {
    id: 'hora-shot',
    name: 'Hora do Shot',
    price: 250,
    description: 'Intervenção performática com personagens temáticos',
    relatedTo: ['bar'],
  },
  {
    id: 'bartender-extra',
    name: 'Bartender Extra',
    price: 250,
    description: 'Profissional adicional para eventos maiores',
    relatedTo: ['bar'],
  },
  {
    id: 'balcao-madeira',
    name: 'Balcão de Madeira Rústico',
    price: 120,
    description: 'Adicional decorativo para o bar',
    relatedTo: ['bar'],
  },
  {
    id: 'guestbook',
    name: 'Guestbook',
    price: 200,
    description: 'Álbum de recordações para seus convidados',
    relatedTo: ['cabine-fotos', 'totem-fotografico'],
  },
];

export function getPriceForService(
  serviceId: string,
  data: PricingData
): number | null {
  const rule = pricingRules.find((r) => r.serviceId === serviceId);
  return rule ? rule.calculate(data) : null;
}

export function getBarMenu(type: BarType): BarMenu | undefined {
  return barMenus.find((menu) => menu.type === type);
}
