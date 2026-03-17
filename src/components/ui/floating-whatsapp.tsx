import { Button } from './button';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Olá! Vim pelo site e gostaria de mais informações sobre os serviços da CK Eventos!'
    );
    window.open(`https://wa.me/5531993436059?text=${message}`, '_blank');
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
