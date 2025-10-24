import { images } from './images';

export interface Testimonial {
  id: number;
  name: string;
  eventType: string;
  rating: number;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Paula',
    eventType: 'Casamento',
    rating: 5,
    text: 'A CK Eventos fez meu casamento ser perfeito! Equipe atenciosa e tudo saiu como planejado. O bar de drinks foi incrível e a decoração superou nossas expectativas. Recomendo de olhos fechados!',
    image: images.testimonials.client1,
  },
  {
    id: 2,
    name: 'Júlia Silva',
    eventType: 'Festa de 15 Anos',
    rating: 5,
    text: 'Minha festa de 15 anos foi incrível graças à CK! A decoração ficou linda demais e a cabine de fotos 360° foi o sucesso da noite. Todos os meus amigos adoraram! Muito obrigada por realizarem meu sonho.',
    image: images.testimonials.client5,
  },
  {
    id: 3,
    name: 'Ricardo Santos',
    eventType: 'Evento Corporativo',
    rating: 5,
    text: 'Contratamos a CK para nossa confraternização de fim de ano e superou todas as expectativas. Profissionalismo total, pontualidade e qualidade impecável. Já fechamos para o próximo ano!',
    image: images.testimonials.client2,
  },
  {
    id: 4,
    name: 'Marcos Oliveira',
    eventType: 'Aniversário 40 Anos',
    rating: 5,
    text: 'Meu aniversário de 40 anos foi inesquecível! O bar de drinks estava maravilhoso, o carrinho de fondue foi uma delícia e a cabine de fotos animou a festa inteira. Equipe super atenciosa!',
    image: images.testimonials.client4,
  },
  {
    id: 5,
    name: 'Carla Mendes',
    eventType: 'Bodas de Prata',
    rating: 5,
    text: 'A equipe da CK fez as bodas de prata dos meus pais serem especiais. Cada detalhe foi pensado com carinho e tudo estava perfeito. Meus pais ficaram emocionados! Muito obrigada!',
    image: images.testimonials.client3,
  },
  {
    id: 6,
    name: 'Patrícia Costa',
    eventType: 'Aniversário Infantil',
    rating: 5,
    text: 'Festa infantil do meu filho de 8 anos foi perfeita! A organização foi impecável, o carrinho de açaí foi muito divertido e as crianças amaram tudo. Super recomendo para festas infantis!',
    image: images.testimonials.client6,
  },
];
