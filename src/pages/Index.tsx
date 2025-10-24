import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Calculator from '@/components/sections/Calculator';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';
import Footer from '@/components/sections/Footer';
import ScrollProgress from '@/components/ui/scroll-progress';
import FloatingWhatsApp from '@/components/ui/floating-whatsapp';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ScrollProgress />
      <FloatingWhatsApp />
      
      <main>
        <Hero />
        <Stats />
        <div id="calculadora" className="scroll-mt-20">
          <Calculator />
        </div>
        <CTABanner variant="calculator" />
        <Services />
        <CTABanner variant="services" />
        <Gallery />
        <Testimonials />
        <CTABanner variant="testimonials" />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
