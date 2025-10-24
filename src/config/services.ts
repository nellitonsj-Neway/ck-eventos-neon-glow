import { 
  Wine, 
  Camera, 
  Utensils, 
  Music, 
  Sparkles, 
  Users,
  IceCream,
  CakeSlice,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  recommended?: string[]; // IDs dos tipos de eventos recomendados
  hasAlcoholOption?: boolean;
  hasHoursOption?: boolean;
}

export const services: Service[] = [
  {
    id: 'bar',
    name: 'Bar de Drinks',
    icon: Wine,
    description: 'Bar personalizado com drinks autorais e clássicos',
    recommended: ['casamento', '15anos', 'aniversario-adulto', 'bodas', 'confraternizacao'],
    hasAlcoholOption: true,
  },
  {
    id: 'photo-booth',
    name: 'Cabine de Fotos 360°',
    icon: Camera,
    description: 'Cabine interativa com fotos instantâneas e personalizadas',
    recommended: ['casamento', '15anos', 'aniversario-adulto', 'aniversario-infantil'],
    hasHoursOption: true,
  },
  {
    id: 'buffet',
    name: 'Buffet Completo',
    icon: Utensils,
    description: 'Cardápio personalizado com opções variadas',
    recommended: ['casamento', 'bodas', 'evento-corporativo', 'formatura'],
  },
  {
    id: 'sound',
    name: 'Som e Iluminação',
    icon: Music,
    description: 'Sistema profissional de som e iluminação cênica',
    recommended: ['casamento', '15anos', 'aniversario-adulto', 'evento-corporativo'],
  },
  {
    id: 'decoration',
    name: 'Decoração Temática',
    icon: Sparkles,
    description: 'Decoração personalizada para seu evento',
    recommended: ['casamento', '15anos', 'aniversario-infantil', 'batizado'],
  },
  {
    id: 'ceremony',
    name: 'Cerimonial',
    icon: Users,
    description: 'Equipe profissional para coordenação do evento',
    recommended: ['casamento', 'bodas', 'formatura', 'evento-corporativo'],
  },
  {
    id: 'acai-cart',
    name: 'Carrinho de Açaí',
    icon: IceCream,
    description: 'Açaí premium com diversos complementos',
    recommended: ['aniversario-infantil', 'aniversario-adulto', 'confraternizacao'],
  },
  {
    id: 'fondue-cart',
    name: 'Carrinho de Fondue',
    icon: CakeSlice,
    description: 'Fondue de chocolate artesanal',
    recommended: ['casamento', '15anos', 'aniversario-adulto', 'bodas'],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getRecommendedServices(eventTypeId: string): Service[] {
  return services.filter((service) => 
    service.recommended?.includes(eventTypeId)
  );
}
