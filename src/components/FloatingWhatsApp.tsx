import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const phoneNumber = '34665969361';
  const message = encodeURIComponent('Hola, quiero presupuesto para chapa y pintura');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white 
                 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
                 hover:scale-105 active:scale-95 md:hidden touch-manipulation"
      style={{ 
        padding: '14px 20px',
        minHeight: '56px',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
      }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-semibold text-sm">WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
