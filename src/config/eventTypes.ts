import { LucideIcon, Heart, Crown, Cake, PartyPopper, Flower2, Church, Baby, Gift, PawPrint, Users, Briefcase, GraduationCap, HeartHandshake, CookingPot, Sparkles } from 'lucide-react';

export interface EventType {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  popular?: boolean;
}

export const eventTypes: EventType[] = [
  {
    id: 'casamento',
    name: 'Casamento',
    icon: Heart,
    description: 'O dia mais especial de suas vidas',
    popular: true,
  },
  {
    id: '15anos',
    name: '15 Anos',
    icon: Crown,
    description: 'Celebração inesquecível da debutante',
    popular: true,
  },
  {
    id: 'aniversario-adulto',
    name: 'Aniversário Adulto',
    icon: Cake,
    description: 'Comemore sua data especial com estilo',
    popular: true,
  },
  {
    id: 'aniversario-infantil',
    name: 'Aniversário Infantil',
    icon: PartyPopper,
    description: 'Diversão garantida para os pequenos',
  },
  {
    id: 'bodas',
    name: 'Bodas',
    icon: Flower2,
    description: 'Renove seus votos com elegância',
  },
  {
    id: 'batizado',
    name: 'Batizado',
    icon: Church,
    description: 'Momento sagrado e especial',
  },
  {
    id: 'cha-bebe',
    name: 'Chá de Bebê',
    icon: Baby,
    description: 'Celebre a chegada do bebê',
  },
  {
    id: 'cha-revelacao',
    name: 'Chá Revelação',
    icon: Gift,
    description: 'Descubra o sexo do bebê com emoção',
  },
  {
    id: 'aniversario-pet',
    name: 'Aniversário de Pet',
    icon: PawPrint,
    description: 'Festa especial para seu melhor amigo',
  },
  {
    id: 'confraternizacao',
    name: 'Confraternização',
    icon: Users,
    description: 'Reunião especial entre amigos',
  },
  {
    id: 'evento-corporativo',
    name: 'Evento Corporativo',
    icon: Briefcase,
    description: 'Profissionalismo e sofisticação',
  },
  {
    id: 'formatura',
    name: 'Formatura',
    icon: GraduationCap,
    description: 'Celebre sua conquista acadêmica',
  },
  {
    id: 'noivado',
    name: 'Noivado',
    icon: HeartHandshake,
    description: 'Oficialize seu compromisso',
  },
  {
    id: 'cha-panela',
    name: 'Chá de Panela',
    icon: CookingPot,
    description: 'Monte sua casa com seus amigos',
  },
  {
    id: 'outros',
    name: 'Outro Evento',
    icon: Sparkles,
    description: 'Eventos personalizados',
  },
];

export function getEventTypeById(id: string): EventType | undefined {
  return eventTypes.find((event) => event.id === id);
}
