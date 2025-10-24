import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { images } from '@/config/images';

export default function Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src={images.logos.main} 
              alt="CK Eventos" 
              className="h-32 md:h-40 w-auto"
            />
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            <span className="text-gradient-primary">
              Transformamos Momentos
            </span>
            <br />
            <span className="text-foreground">
              em Memórias Inesquecíveis
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Casamentos, festas de 15 anos, eventos corporativos e muito mais. 
            Planejamento completo para o seu evento dos sonhos.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm animate-fade-in">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Mais de 500 eventos realizados
            </div>
            <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Equipe especializada
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              onClick={scrollToCalculator}
              className="text-lg px-8 py-6 glow-primary group"
            >
              Calcular Orçamento Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Social proof */}
          <p className="text-sm text-muted-foreground animate-fade-in">
            ⭐⭐⭐⭐⭐ Avaliação média de 4.9/5 com mais de 200 reviews
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
