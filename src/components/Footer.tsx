import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import GraffitiLogo from './GraffitiLogo';

interface FooterProps {
  onOpenLegal: (type: 'aviso' | 'privacidad' | 'cookies') => void;
}

const Footer = ({ onOpenLegal }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '665969361';
  const whatsappUrl = `https://wa.me/34${phoneNumber}?text=${encodeURIComponent('Hola, quiero presupuesto para chapa y pintura')}`;

  return (
    <footer className="bg-card border-t border-border py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <GraffitiLogo size="md" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Taller especializado en chapa y pintura en La Muela (Zaragoza). 
              Más de 15 años de experiencia, materiales premium y atención personalizada.
            </p>
          </div>

          {/* Contact - NAP */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>La Muela, Zaragoza, España</span>
              </li>
              <li>
                <a 
                  href={`tel:+34${phoneNumber}`} 
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors font-semibold text-foreground"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>665 969 361</span>
                </a>
              </li>
              <li>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#25D366] text-sm hover:text-[#20BA5C] transition-colors font-medium"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:ghchapaypintura@hotmail.es" 
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>ghchapaypintura@hotmail.es</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-muted-foreground text-sm hover:text-primary transition-colors">Pintura Completa</a></li>
              <li><a href="#servicios" className="text-muted-foreground text-sm hover:text-primary transition-colors">Reparación de Chapa</a></li>
              <li><a href="#servicios" className="text-muted-foreground text-sm hover:text-primary transition-colors">Reparación de Golpes</a></li>
              <li><a href="#servicios" className="text-muted-foreground text-sm hover:text-primary transition-colors">Pulido y Abrillantado</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenLegal('aviso')}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors touch-manipulation"
                >
                  Aviso Legal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacidad')}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors touch-manipulation"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('cookies')}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors touch-manipulation"
                >
                  Política de Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom - NAP completo */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p><strong className="text-foreground">GH Chapa y Pintura</strong></p>
              <p>La Muela, Zaragoza, España</p>
              <p>Tel: <a href={`tel:+34${phoneNumber}`} className="hover:text-primary">665 969 361</a></p>
              <p>NIF: [Pendiente de añadir]</p>
            </div>
            <p className="text-center">© {currentYear} GH Chapa y Pintura. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
