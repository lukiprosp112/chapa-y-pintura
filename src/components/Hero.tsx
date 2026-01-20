import { ArrowRight, Shield, Clock, Award, Phone, MessageCircle } from 'lucide-react';
import GraffitiLogo from './GraffitiLogo';
import heroImage from '@/assets/hero-workshop.jpg';

const Hero = () => {
  const phoneNumber = '665969361';
  const whatsappUrl = `https://wa.me/34${phoneNumber}?text=${encodeURIComponent('Hola, quiero presupuesto para chapa y pintura')}`;

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, hsl(0 0% 4% / 0.85) 0%, hsl(0 0% 4% / 0.75) 50%, hsl(0 0% 4% / 0.9) 100%)',
          }}
        />
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Grafiti Hero */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <GraffitiLogo size="hero" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 md:mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Taller Profesional en Zaragoza</span>
          </div>

          {/* Main Title */}
          <h1 
            className="font-extrabold text-foreground mb-4 md:mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 4rem)' }}
          >
            Chapa y Pintura{' '}
            <span className="text-primary orange-glow">Profesional</span>
            <br />
            <span style={{ fontSize: 'clamp(1.25rem, 3.5vw, 3rem)' }}>
              en La Muela – Zaragoza
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
          >
            Reparaciones de alta calidad, pintura perfecta y servicio rápido.{' '}
            <strong className="text-foreground">Tu coche como nuevo.</strong>
          </p>

          {/* Phone Number - Prominent */}
          <a 
            href={`tel:+34${phoneNumber}`}
            className="inline-flex items-center gap-3 text-primary font-bold mb-6 md:mb-8 
                       hover:scale-105 transition-transform touch-manipulation"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
          >
            <Phone className="w-6 h-6 md:w-8 md:h-8" />
            <span>665 969 361</span>
          </a>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12 px-4">
            <a 
              href={`tel:+34${phoneNumber}`} 
              className="btn-primary text-base md:text-lg flex items-center justify-center gap-2 
                         animate-pulse-glow touch-manipulation"
              style={{ minHeight: '56px' }}
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold 
                         px-8 py-4 rounded-lg transition-all duration-300 hover:bg-[#20BA5C] 
                         hover:scale-105 active:scale-95 touch-manipulation"
              style={{ minHeight: '56px' }}
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
            <a 
              href="#contacto" 
              className="btn-outline text-base md:text-lg flex items-center justify-center gap-2 touch-manipulation"
              style={{ minHeight: '56px' }}
            >
              Pedir Presupuesto
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto px-4">
            <div className="flex items-center justify-center gap-2 md:gap-3 text-muted-foreground">
              <Award className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <span className="font-medium text-sm md:text-base">+15 años experiencia</span>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-3 text-muted-foreground">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <span className="font-medium text-sm md:text-base">Garantía en trabajos</span>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-3 text-muted-foreground">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <span className="font-medium text-sm md:text-base">Entrega rápida</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
