import { useState } from 'react';
import { images } from '@/config/images';
import LazyImage from '@/components/ui/lazy-image';
import Lightbox from '@/components/ui/lightbox';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type GalleryFilter = 'all' | 'wedding' | 'sweet15' | 'corporate' | 'birthday' | 'bar';

interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryFilter[];
}

const galleryImages: GalleryImage[] = [
  { src: images.gallery.wedding1, alt: 'Casamento 1', category: ['wedding'] },
  { src: images.gallery.wedding2, alt: 'Casamento 2', category: ['wedding'] },
  { src: images.gallery.wedding3, alt: 'Casamento 3', category: ['wedding'] },
  { src: images.gallery.sweet151, alt: 'Festa de 15 Anos 1', category: ['sweet15'] },
  { src: images.gallery.sweet152, alt: 'Festa de 15 Anos 2', category: ['sweet15'] },
  { src: images.gallery.sweet153, alt: 'Festa de 15 Anos 3', category: ['sweet15'] },
  { src: images.gallery.corporate1, alt: 'Evento Corporativo 1', category: ['corporate'] },
  { src: images.gallery.corporate2, alt: 'Evento Corporativo 2', category: ['corporate'] },
  { src: images.gallery.birthday1, alt: 'Aniversário 1', category: ['birthday'] },
  { src: images.gallery.birthday2, alt: 'Aniversário 2', category: ['birthday'] },
  { src: images.gallery.booth, alt: 'Cabine de Fotos', category: ['sweet15', 'birthday'] },
  // Bar de Drinks
  { src: images.gallery.bar1, alt: 'Bar de Drinks - Ambiente', category: ['bar', 'wedding', 'birthday'] },
  { src: images.gallery.bar2, alt: 'Bar de Drinks - Letreiro Iluminado', category: ['bar', 'wedding'] },
  { src: images.gallery.bar3, alt: 'Bar de Drinks - Cliente com Drink', category: ['bar', 'wedding'] },
  { src: images.gallery.bar4, alt: 'Bar de Drinks - Coqueteleira e Frutas', category: ['bar'] },
  { src: images.gallery.bar5, alt: 'Bar de Drinks - Morangos', category: ['bar'] },
  { src: images.gallery.bar6, alt: 'Bar de Drinks - Cliente com Drink 2', category: ['bar', 'birthday'] },
  { src: images.gallery.bar7, alt: 'Bar de Drinks - Banheirinha Azul', category: ['bar', 'birthday'] },
  { src: images.gallery.bar9, alt: 'CK Eventos - Folder', category: ['bar', 'wedding', 'birthday'] },
  { src: images.gallery.bar10, alt: 'Bar de Drinks - Drink na Mão', category: ['bar', 'wedding'] },
  { src: images.gallery.bar11, alt: 'Bar de Drinks - Cliente com Drink 3', category: ['bar'] },
  { src: images.gallery.bar12, alt: 'Bar de Drinks - Balcão', category: ['bar', 'wedding'] },
  { src: images.gallery.bar13, alt: 'Bar de Drinks - Balcão 2', category: ['bar', 'wedding', 'birthday'] },
  // Experiências Interativas
  { src: images.gallery.exp1, alt: 'Cabine de Fotos - Debutante', category: ['sweet15'] },
  { src: images.gallery.exp2, alt: 'Plataforma 360 - Meninas', category: ['sweet15', 'birthday'] },
  { src: images.gallery.exp3, alt: 'Plataforma 360 - Rapazes com Adereços', category: ['birthday'] },
  { src: images.gallery.exp4, alt: 'Plataforma 360 - Casal de Noivos', category: ['wedding'] },
  { src: images.gallery.exp5, alt: 'Plataforma 360 - Setup', category: ['wedding', 'sweet15'] },
  { src: images.gallery.exp6, alt: 'Adereços para Fotos', category: ['sweet15', 'birthday'] },
  { src: images.gallery.exp7, alt: 'Setup Completo CK Eventos', category: ['wedding', 'sweet15', 'birthday'] },
];

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>('all');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredImages = galleryImages.filter(
    (img) => filter === 'all' || img.category.includes(filter)
  );

  return (
    <section id="galeria" className="py-20 bg-gradient-subtle scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            Nossos Eventos em Fotos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos momentos especiais que ajudamos a criar
          </p>
        </div>

        <Tabs value={filter} onValueChange={(v) => setFilter(v as GalleryFilter)} className="mb-12">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="bar">Bar</TabsTrigger>
            <TabsTrigger value="wedding">Casamentos</TabsTrigger>
            <TabsTrigger value="sweet15">15 Anos</TabsTrigger>
            <TabsTrigger value="corporate">Corporativo</TabsTrigger>
            <TabsTrigger value="birthday">Aniversários</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setLightboxImage(image)}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <LazyImage
                src={image.src}
                alt={image.alt}
                aspectRatio="4/3"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {lightboxImage && (
          <Lightbox
            isOpen={!!lightboxImage}
            onClose={() => setLightboxImage(null)}
            imageSrc={lightboxImage.src}
            imageAlt={lightboxImage.alt}
          />
        )}
      </div>
    </section>
  );
}
