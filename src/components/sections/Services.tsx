import { services, serviceCategories, ServiceCategory } from '@/config/services';
import { images } from '@/config/images';
import LazyImage from '@/components/ui/lazy-image';
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

export default function Services() {
  const categories: ServiceCategory[] = ['bar', 'experiencias', 'gourmet'];

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
                {categoryServices.map((service, index) => (
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
                      
                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute top-3 right-3">
                          <Badge variant="default" className="bg-accent text-accent-foreground">
                            {service.badge}
                          </Badge>
                        </div>
                      )}
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

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity glow-primary pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
