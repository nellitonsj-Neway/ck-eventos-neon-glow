import { Button } from '@/components/ui/button';
import { MessageCircle, Calculator, Sparkles, LucideIcon } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';
import { sendSimpleWhatsAppMessage } from '@/lib/whatsapp';

interface CTABannerProps {
  variant: 'calculator' | 'services' | 'testimonials';
}

interface VariantConfig {
  title: string;
  description: string;
  icon: LucideIcon;
  action: string;
  href?: string;
  whatsapp?: boolean;
}

const variants: Record<string, VariantConfig> = {
  calculator: {
    title: 'Pronto para calcular seu orçamento?',
    description: 'Use nossa calculadora gratuita e descubra o investimento ideal para seu evento',
    icon: Calculator,
    action: 'Calcular Agora',
    href: '#calculadora',
  },
  services: {
    title: 'Transforme seu evento em realidade!',
    description: 'Entre em contato e receba um orçamento personalizado sem compromisso',
    icon: Sparkles,
    action: 'Falar com Especialista',
    whatsapp: true,
  },
  testimonials: {
    title: 'Fale com um especialista agora!',
    description: 'Nossa equipe está pronta para tirar suas dúvidas e criar o evento perfeito',
    icon: MessageCircle,
    action: 'Chamar no WhatsApp',
    whatsapp: true,
  },
};

export default function CTABanner({ variant }: CTABannerProps) {
  const offset = useParallax(0.3);
  const config = variants[variant];
  const Icon = config.icon;

  const handleClick = () => {
    if (config.whatsapp) {
      sendSimpleWhatsAppMessage('Olá! Gostaria de mais informações sobre os serviços da CK Eventos.');
    } else if (config.href) {
      document.querySelector(config.href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"
        style={{ transform: `translateY(${offset}px)` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Icon className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
            {config.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {config.description}
          </p>
          <Button onClick={handleClick} size="lg" className="glow-primary text-lg px-8">
            {config.action}
          </Button>
        </div>
      </div>
    </section>
  );
}
