import { useState } from 'react';
import { Send, Check, AlertCircle, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const phoneNumber = '665969361';
  const whatsappUrl = `https://wa.me/34${phoneNumber}?text=${encodeURIComponent('Hola, quiero presupuesto para chapa y pintura')}`;
  
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    matricula: '',
    mensaje: '',
    privacidad: false,
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacidad) {
      setStatus('error');
      return;
    }

    console.log('Form submitted:', formData);
    setStatus('success');
    
    setTimeout(() => {
      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        matricula: '',
        mensaje: '',
        privacidad: false,
      });
      setStatus('idle');
    }, 3000);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Contacto
            </span>
            <h2 className="section-title">
              Pide tu <span className="text-primary">presupuesto gratis</span>
            </h2>
            <p className="section-subtitle">
              Cuéntanos qué necesitas y te respondemos en menos de 24 horas.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 md:mb-12">
            <a 
              href={`tel:+34${phoneNumber}`}
              className="bg-card rounded-xl p-5 border border-border flex items-center gap-4 
                         hover:border-primary transition-colors touch-manipulation group"
              style={{ minHeight: '80px' }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 
                              group-hover:bg-primary transition-colors">
                <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground block">Teléfono</span>
                <span className="font-bold text-foreground text-lg">665 969 361</span>
              </div>
            </a>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/10 rounded-xl p-5 border border-[#25D366]/30 flex items-center gap-4 
                         hover:bg-[#25D366]/20 transition-colors touch-manipulation group"
              style={{ minHeight: '80px' }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground block">WhatsApp</span>
                <span className="font-bold text-[#25D366] text-lg">Escríbenos</span>
              </div>
            </a>
            
            <a 
              href="mailto:info@ghchapapintura.es"
              className="bg-card rounded-xl p-5 border border-border flex items-center gap-4 
                         hover:border-primary transition-colors touch-manipulation group"
              style={{ minHeight: '80px' }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 
                              group-hover:bg-primary transition-colors">
                <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground block">Email</span>
                <span className="font-medium text-foreground text-sm">info@ghchapapintura.es</span>
              </div>
            </a>
            
            <div 
              className="bg-card rounded-xl p-5 border border-border flex items-center gap-4"
              style={{ minHeight: '80px' }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground block">Dirección</span>
                <span className="font-medium text-foreground">La Muela, Zaragoza</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-5 md:p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="input-field touch-manipulation"
                  style={{ minHeight: '48px' }}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="input-field touch-manipulation"
                  style={{ minHeight: '48px' }}
                  placeholder="600 000 000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field touch-manipulation"
                  style={{ minHeight: '48px' }}
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="matricula" className="block text-sm font-medium text-foreground mb-2">
                  Matrícula (opcional)
                </label>
                <input
                  type="text"
                  id="matricula"
                  name="matricula"
                  value={formData.matricula}
                  onChange={handleChange}
                  className="input-field touch-manipulation"
                  style={{ minHeight: '48px' }}
                  placeholder="0000 XXX"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field resize-none touch-manipulation"
                  placeholder="Describe el trabajo que necesitas..."
                />
              </div>
            </div>

            {/* Privacy Checkbox */}
            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer touch-manipulation">
                <input
                  type="checkbox"
                  name="privacidad"
                  checked={formData.privacidad}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded border-border bg-input text-primary 
                             focus:ring-primary focus:ring-2 touch-manipulation"
                />
                <span className="text-sm text-muted-foreground">
                  He leído y acepto la{' '}
                  <a href="#privacidad" className="text-primary hover:underline">
                    Política de Privacidad
                  </a>{' '}
                  *
                </span>
              </label>
            </div>

            {/* Status Messages */}
            {status === 'error' && (
              <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/30 
                              flex items-center gap-3 text-destructive">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>Debes aceptar la Política de Privacidad para continuar.</span>
              </div>
            )}

            {status === 'success' && (
              <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30 
                              flex items-center gap-3 text-green-400">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>¡Mensaje enviado! Te contactaremos pronto.</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full mt-6 flex items-center justify-center gap-2 touch-manipulation"
              style={{ minHeight: '56px' }}
            >
              <Send className="w-5 h-5" />
              Enviar Solicitud
            </button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Tus datos están protegidos según el RGPD. No compartimos tu información con terceros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
