export interface CorporateService {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const corporateServices: CorporateService[] = [
  {
    id: 'confraternization',
    icon: '🎯',
    title: 'Confraternizações de Fim de Ano',
    description: 'Celebre o sucesso da sua equipe com um evento memorável. Bar premium, decoração temática e serviços completos.',
  },
  {
    id: 'conventions',
    icon: '📊',
    title: 'Convenções e Palestras',
    description: 'Estrutura profissional para eventos corporativos: coffee break, almoço executivo e suporte completo.',
  },
  {
    id: 'launches',
    icon: '🚀',
    title: 'Lançamentos de Produtos',
    description: 'Impressione seus clientes com um evento impactante. Catering sofisticado e ambientação personalizada.',
  },
];

export const corporateClients = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Ambev',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Ambev_logo.svg',
  },
  {
    name: 'Localiza',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Localiza_logo.svg',
  },
];
