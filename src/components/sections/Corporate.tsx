import { corporateServices, corporateClients } from '@/config/corporate';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function Corporate() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de solicitar uma proposta corporativa para meu evento.'
    );
    window.open(`https://wa.me/5531993436059?text=${message}`, '_blank');
  };

  return (
    <section id="corporativo" className="py-20 bg-gradient-warm scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-warm">
            Eventos Corporativos de Impacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confraternizações, Convenções, Lançamentos e muito mais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {corporateServices.map((service, index) => (
            <div
              key={service.id}
              className="p-8 rounded-lg border border-border bg-card hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Empresas que confiam na CK Eventos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
            {corporateClients.map((client) => (
              <div
                key={client.name}
                className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 md:h-12 w-auto"
                />
              </div>
            ))}
          </div>

          <Button onClick={handleWhatsApp} size="lg" className="glow-primary">
            <MessageCircle className="w-5 h-5 mr-2" />
            Solicitar Proposta Corporativa
          </Button>
        </div>
      </div>
    </section>
  );
}
