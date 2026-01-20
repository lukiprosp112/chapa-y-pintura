import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import GraffitiLogo from './GraffitiLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = '665969361';
  const whatsappUrl = `https://wa.me/34${phoneNumber}?text=${encodeURIComponent('Hola, quiero presupuesto para chapa y pintura')}`;

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#resenas', label: 'Reseñas' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#horarios', label: 'Horarios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Grafiti */}
          <a href="#" className="relative flex-shrink-0">
            <GraffitiLogo size="sm" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-sm xl:text-base">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Phone - Desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a 
              href={`tel:+34${phoneNumber}`} 
              className="flex items-center gap-2 text-primary font-semibold text-sm lg:text-base"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">665 969 361</span>
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-semibold 
                         px-3 lg:px-4 py-2 rounded-lg hover:bg-[#20BA5C] transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
            <a href="#contacto" className="btn-primary text-sm py-2 px-3 lg:px-4">
              Presupuesto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-foreground hover:text-primary transition-colors touch-manipulation"
            style={{ minHeight: '48px', minWidth: '48px' }}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ease-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        style={{ background: 'hsl(0 0% 4% / 0.98)' }}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors 
                         py-3 touch-manipulation"
              style={{ minHeight: '48px' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-6 border-t border-border space-y-4">
            <a 
              href={`tel:+34${phoneNumber}`} 
              className="flex items-center justify-center gap-3 text-primary text-xl font-semibold 
                         py-4 rounded-lg border border-primary touch-manipulation"
              style={{ minHeight: '56px' }}
            >
              <Phone className="w-5 h-5" />
              <span>665 969 361</span>
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white text-xl 
                         font-semibold py-4 rounded-lg touch-manipulation"
              style={{ minHeight: '56px' }}
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="#contacto" 
              className="btn-primary block text-center text-lg py-4 touch-manipulation"
              style={{ minHeight: '56px' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Pedir Presupuesto Gratis
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
