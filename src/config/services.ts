import { 
  Wine, 
  Camera, 
  Video,
  Smartphone,
  IceCream,
  CakeSlice,
  Milk,
  ChefHat,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type ServiceCategory = 'bar' | 'experiencias' | 'gourmet';

export interface Service {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  category: ServiceCategory;
  recommended?: string[];
  hasBarTypeOption?: boolean;
  hasHoursOption?: boolean;
  isUnderConsultation?: boolean;
  badge?: string;
}

export const serviceCategories: Record<ServiceCategory, { name: string; icon: LucideIcon; description: string }> = {
  bar: {
    name: 'Bar de Drinks',
    icon: Wine,
    description: 'Drinks autorais e clássicos com atendimento profissional',
  },
  experiencias: {
    name: 'Experiências Interativas',
    icon: Camera,
    description: 'Momentos únicos e recordações instantâneas',
  },
  gourmet: {
    name: 'Estação Gourmet',
    icon: ChefHat,
    description: 'Carrinhos temáticos como ilhas de sobremesa volantes',
  },
};

export const services: Service[] = [
  {
    id: 'bar',
    name: 'Bar de Drinks',
    icon: Wine,
    description: 'Bar personalizado com drinks autorais e clássicos. 5h de atendimento, bartenders, taças, copos, gelo e todos os insumos inclusos.',
    category: 'bar',
    recommended: ['casamento', '15anos', 'aniversario-adulto', 'bodas', 'confraternizacao', 'evento-corporativo', 'formatura'],
    hasBarTypeOption: true,
    badge: 'Best-Seller',
  },
  {
    id: 'plataforma-360',
    name: 'Plataforma 360°',
    icon: Video,
    description: 'Vídeos incríveis gravados com iPhone 14 Plus. Plataforma LED, 1 monitor, vídeos ilimitados e arte personalizada inclusos.',
    category: 'experiencias',
    recommended: ['casamento', '15anos', 'aniversario-adulto', 'evento-corporativo', 'formatura'],
    hasHoursOption: true,
  },
  {
    id: 'cabine-fotos',
    name: 'Cabine de Fotos',
    icon: Camera,
    description: 'Fotos impressas na hora com 2 monitores, fotos ilimitadas, impressão instantânea e adereços divertidos.',
    category: 'experiencias',
    recommended: ['casamento', '15anos', 'aniversario-adulto', 'aniversario-infantil', 'evento-corporativo'],
    hasHoursOption: true,
  },
  {
    id: 'totem-fotografico',
    name: 'Totem Fotográfico',
    icon: Smartphone,
    description: 'Versão compacta com 1 monitor, fotos ilimitadas e impressão instantânea. Ideal para espaços menores.',
    category: 'experiencias',
    recommended: ['aniversario-adulto', 'aniversario-infantil', 'confraternizacao'],
    hasHoursOption: true,
    badge: 'Compacto',
  },
  {
    id: 'carrinho-acai',
    name: 'Carrinho de Açaí',
    icon: IceCream,
    description: 'Refrescante e personalizável com diversos toppings. Ideal para casamentos diurnos e formaturas.',
    category: 'gourmet',
    recommended: ['casamento', 'formatura', 'aniversario-infantil', 'confraternizacao'],
    isUnderConsultation: true,
    badge: 'Novidade',
  },
  {
    id: 'carrinho-milkshake',
    name: 'Carrinho de Milk Shake',
    icon: Milk,
    description: 'Visual retrô que atrai o público jovem e cria fotos divertidas. Perfeito para eventos descontraídos.',
    category: 'gourmet',
    recommended: ['15anos', 'aniversario-infantil', 'confraternizacao'],
    isUnderConsultation: true,
    badge: 'Novidade',
  },
  {
    id: 'carrinho-fondue',
    name: 'Carrinho de Fondue',
    icon: CakeSlice,
    description: 'Elegância para eventos noturnos ou de inverno. Frutas frescas com chocolate nobre.',
    category: 'gourmet',
    recommended: ['casamento', '15anos', 'bodas', 'evento-corporativo'],
    isUnderConsultation: true,
    badge: 'Novidade',
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

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}
