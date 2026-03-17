import { useState } from 'react';
import { services, serviceCategories, ServiceCategory } from '@/config/services';
import { images } from '@/config/images';
import LazyImage from '@/components/ui/lazy-image';
import Lightbox from '@/components/ui/lightbox';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const serviceImages: Record<string, string> = {
  bar: images.services.bar,
  'plataforma-360': images.services.plataforma360,
  'cabine-fotos': images.services.cabineFotos,
  'totem-fotografico': images.services.totem,
  'carrinho-acai': images.services.acai,
  'carrinho-milkshake': images.services.milkshake,
  'carrinho-fondue': images.services.fondue,
};

const barGalleryImages = [
  { src: images.gallery.bar1, alt: 'Bar - Ambiente' },
  { src: images.gallery.bar2, alt: 'Bar - Letreiro Iluminado' },
  { src: images.gallery.bar3, alt: 'Bar - Cliente com Drink' },
  { src: images.gallery.bar4, alt: 'Bar - Coqueteleira e Frutas' },
  { src: images.gallery.bar5, alt: 'Bar - Morangos' },
  { src: images.gallery.bar6, alt: 'Bar - Cliente com Drink 2' },
  { src: images.gallery.bar7, alt: 'Bar - Banheirinha Azul' },
  { src: images.gallery.bar9, alt: 'CK Eventos - Folder' },
  { src: images.gallery.bar10, alt: 'Bar - Drink na Mão' },
  { src: images.gallery.bar11, alt: 'Bar - Cliente com Drink 3' },
  { src: images.gallery.bar12, alt: 'Bar - Balcão' },
  { src: images.gallery.bar13, alt: 'Bar - Balcão 2' },
];

const experienciasGalleryImages = [
  { src: images.gallery.exp1, alt: 'Cabine de Fotos - Debutante' },
  { src: images.gallery.exp2, alt: 'Plataforma 360 - Meninas' },
  { src: images.gallery.exp3, alt: 'Plataforma 360 - Rapazes com Adereços' },
  { src: images.gallery.exp4, alt: 'Plataforma 360 - Casal de Noivos' },
  { src: images.gallery.exp5, alt: 'Plataforma 360 - Setup' },
  { src: images.gallery.exp6, alt: 'Adereços - Close' },
  { src: images.gallery.exp7, alt: 'Setup Completo CK Eventos' },
];

export default function Services() {
  const categories: ServiceCategory[] = ['bar', 'experiencias', 'gourmet'];
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const getCategoryGallery = (category: ServiceCategory) => {
    if (category === 'bar') return barGalleryImages;
    if (category === 'experiencias') return experienciasGalleryImages;
    return null;
  };

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

        {categories.map((category) => {
          const categoryInfo = serviceCategories[category];
          const categoryServices = services.filter(s => s.category === category);
          const galleryForCategory = getCategoryGallery(category);
          const hasGallery = !!galleryForCategory;

          return (
            <div key={category} className="mb-16 last:mb-0">
              {/* Header da categoria */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{categoryInfo.icon}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary">
                    {categoryInfo.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {categoryInfo.description}
                  </p>
                </div>
                {category === 'gourmet' && (
                  <Badge variant="default" className="ml-auto">Novidade</Badge>
                )}
              </div>

              {/* Grid de serviços */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service, index) => {
                  const isGalleryCard = hasGallery && (
                    (category === 'bar' && service.id === 'bar') ||
                    (category === 'experiencias' && index === 0)
                  );

                  return (
                    <div
                      key={service.id}
                      className={`group relative overflow-hidden rounded-lg border border-border bg-card hover-scale cursor-pointer animate-slide-up ${isGalleryCard ? 'md:col-span-2 lg:col-span-3' : ''}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Image / Gallery */}
                      {isGalleryCard && galleryForCategory ? (
                        <div className="p-4 pb-0">
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                            {galleryForCategory.map((img, i) => (
                              <div
                                key={i}
                                className="relative overflow-hidden rounded-md cursor-pointer group/thumb"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLightboxImage(img);
                                }}
                              >
                                <LazyImage
                                  src={img.src}
                                  alt={img.alt}
                                  aspectRatio="1/1"
                                  className="w-full transition-transform duration-300 group-hover/thumb:scale-110"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : !isGalleryCard ? (
                        <div className="relative h-48">
                          <LazyImage
                            src={serviceImages[service.id] || images.services.bar}
                            alt={service.name}
                            aspectRatio="16/9"
                            className="w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                          
                          {service.badge && (
                            <div className="absolute top-3 right-3">
                              <Badge variant="default" className="bg-accent text-accent-foreground">
                                {service.badge}
                              </Badge>
                            </div>
                          )}
                        </div>
                      ) : null}

                      {/* Content */}
                      <div className="p-6 relative">
                        {isGalleryCard && service.badge && (
                          <Badge variant="default" className="bg-accent text-accent-foreground mb-3">
                            {service.badge}
                          </Badge>
                        )}
                        <service.icon className="w-10 h-10 text-primary mb-3" />
                        <h3 className="text-xl font-bold mb-2 text-gradient-primary">
                          {service.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {service.description}
                        </p>
                        
                        {service.isUnderConsultation && (
                          <p className="text-xs text-amber-500 font-medium mb-4">
                            💰 Preço sob consulta
                          </p>
                        )}
                        
                        <button 
                          onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
                          className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
                        >
                          Saiba mais 
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity glow-primary pointer-events-none" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {lightboxImage && (
        <Lightbox
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
          imageSrc={lightboxImage.src}
          imageAlt={lightboxImage.alt}
        />
      )}
    </section>
  );
}
