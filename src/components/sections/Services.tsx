import { services } from '@/config/services';
import { images } from '@/config/images';
import LazyImage from '@/components/ui/lazy-image';
import { ArrowRight } from 'lucide-react';

const serviceImages: Record<string, string> = {
  bar: images.services.bar,
  'photo-booth': images.services.photoBooth,
  ceremony: images.services.ceremony,
  'acai-cart': images.services.acai,
  'fondue-cart': images.services.fondue,
  sound: images.services.sound,
  decoration: images.services.decoration,
  buffet: images.services.buffet,
};

export default function Services() {
  return (
    <section id="servicos" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar seu evento em uma experiência inesquecível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover-scale cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Background */}
              <div className="relative h-48">
                <LazyImage
                  src={serviceImages[service.id] || images.services.bar}
                  alt={service.name}
                  aspectRatio="16/9"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <service.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2 text-gradient-primary">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                <button 
                  onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
                >
                  Saiba mais 
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity glow-primary pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
