export interface EventType {
  id: string;
  name: string;
  emoji: string;
  description: string;
  popular?: boolean;
}

export const eventTypes: EventType[] = [
  {
    id: 'casamento',
    name: 'Casamento',
    emoji: '💍',
    description: 'O dia mais especial de suas vidas',
    popular: true,
  },
  {
    id: '15anos',
    name: '15 Anos',
    emoji: '👑',
    description: 'Celebração inesquecível da debutante',
    popular: true,
  },
  {
    id: 'aniversario-adulto',
    name: 'Aniversário Adulto',
    emoji: '🎂',
    description: 'Comemore sua data especial com estilo',
    popular: true,
  },
  {
    id: 'aniversario-infantil',
    name: 'Aniversário Infantil',
    emoji: '🎈',
    description: 'Diversão garantida para os pequenos',
  },
  {
    id: 'bodas',
    name: 'Bodas',
    emoji: '💐',
    description: 'Renove seus votos com elegância',
  },
  {
    id: 'batizado',
    name: 'Batizado',
    emoji: '👼',
    description: 'Momento sagrado e especial',
  },
  {
    id: 'cha-bebe',
    name: 'Chá de Bebê',
    emoji: '🍼',
    description: 'Celebre a chegada do bebê',
  },
  {
    id: 'cha-revelacao',
    name: 'Chá Revelação',
    emoji: '🎀',
    description: 'Descubra o sexo do bebê com emoção',
  },
  {
    id: 'aniversario-pet',
    name: 'Aniversário de Pet',
    emoji: '🐾',
    description: 'Festa especial para seu melhor amigo',
  },
  {
    id: 'confraternizacao',
    name: 'Confraternização',
    emoji: '🎊',
    description: 'Reunião especial entre amigos',
  },
  {
    id: 'evento-corporativo',
    name: 'Evento Corporativo',
    emoji: '💼',
    description: 'Profissionalismo e sofisticação',
  },
  {
    id: 'formatura',
    name: 'Formatura',
    emoji: '🎓',
    description: 'Celebre sua conquista acadêmica',
  },
  {
    id: 'noivado',
    name: 'Noivado',
    emoji: '💕',
    description: 'Oficialize seu compromisso',
  },
  {
    id: 'cha-panela',
    name: 'Chá de Panela',
    emoji: '🫖',
    description: 'Monte sua casa com seus amigos',
  },
  {
    id: 'outros',
    name: 'Outro Evento',
    emoji: '🎉',
    description: 'Eventos personalizados',
  },
];

export function getEventTypeById(id: string): EventType | undefined {
  return eventTypes.find((event) => event.id === id);
}
