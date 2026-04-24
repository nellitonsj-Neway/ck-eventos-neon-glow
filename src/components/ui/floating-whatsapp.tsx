import { sendSimpleWhatsAppMessage } from '@/lib/whatsapp';
import { pixelEvent } from '@/lib/pixel';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    pixelEvent('Contact', {
      content_name: 'Botão Flutuante WhatsApp',
    });
    sendSimpleWhatsAppMessage(
      'Olá! Vim pelo site e gostaria de mais informações sobre os serviços da CK Eventos!'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full p-0 shadow-2xl hover:scale-110 transition-transform duration-300 border-none bg-transparent cursor-pointer"
      aria-label="Fale Conosco no WhatsApp"
    >
      <img src="/images/icons/whatsapp.png" alt="WhatsApp" className="h-16 w-16 rounded-full" />
    </button>
  );
}
