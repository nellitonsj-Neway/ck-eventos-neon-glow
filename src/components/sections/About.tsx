import { images } from '@/config/images';
import LazyImage from '@/components/ui/lazy-image';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Award, label: 'Excelência em cada detalhe' },
  { icon: Heart, label: 'Paixão pelo que fazemos' },
  { icon: Users, label: 'Equipe especializada' },
  { icon: Sparkles, label: 'Eventos personalizados' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">Sobre a CK Eventos</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              Transformando Sonhos em Realidade Há 5 Anos
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Fundada em 2020 por <strong className="text-foreground">Karine e Philipe</strong>, 
                a CK Eventos nasceu do sonho de criar experiências memoráveis e únicas. 
                Começamos com pequenas festas de aniversário e hoje somos referência em 
                Bar de Drinks, Experiências Interativas e Estações Gourmet em Belo Horizonte.
              </p>
              <p className="text-lg font-medium text-foreground italic border-l-4 border-primary pl-4">
                "Aqui você não contrata apenas drinks, contrata tranquilidade."
              </p>
              <p>
                Nossa missão é transformar cada evento em uma experiência inesquecível, 
                cuidando de todos os detalhes com dedicação e profissionalismo. Nossa 
                Plataforma 360° utiliza iPhone 14 Plus para gravações de altíssima qualidade.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-neon border border-primary/20 rounded-lg">
              <Award className="w-6 h-6 text-primary" />
              <span className="font-semibold">Empresa Referência em BH</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <LazyImage
                src={images.team.karine}
                alt="Karine - Co-fundadora da CK Eventos"
                className="rounded-lg"
                aspectRatio="3/4"
              />
              <LazyImage
                src={images.team.team1}
                alt="Philipe e Karine - CK Eventos"
                className="rounded-lg"
                aspectRatio="4/3"
              />
            </div>
            <div className="space-y-4 mt-8">
              <LazyImage
                src={images.team.philipe}
                alt="Philipe - Co-fundador da CK Eventos"
                className="rounded-lg"
                aspectRatio="3/4"
              />
              <LazyImage
                src={images.team.equipe_15anos}
                alt="Equipe CK Eventos em festa de 15 Anos"
                className="rounded-lg"
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
