import { Clock, MapPin, Phone, Mail } from 'lucide-react';

const schedule = [
  { day: 'Lunes', hours: '09:00 - 18:00', open: true },
  { day: 'Martes', hours: '09:00 - 18:00', open: true },
  { day: 'Miércoles', hours: '09:00 - 18:00', open: true },
  { day: 'Jueves', hours: '09:00 - 18:00', open: true },
  { day: 'Viernes', hours: '09:00 - 18:00', open: true },
  { day: 'Sábado', hours: '09:00 - 13:00', open: true },
  { day: 'Domingo', hours: 'Cerrado', open: false },
];

const Schedule = () => {
  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="horarios" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Schedule */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Horarios
            </span>
            <h2 className="section-title text-left mb-8">
              Cuándo <span className="text-primary">visitarnos</span>
            </h2>

            <div className="bg-card rounded-xl border border-border overflow-hidden">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between px-6 py-4 border-b border-border last:border-0 ${
                    index === dayIndex ? 'bg-primary/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {index === dayIndex && (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                    <span className={`font-medium ${index === dayIndex ? 'text-primary' : 'text-foreground'}`}>
                      {item.day}
                    </span>
                  </div>
                  <span className={item.open ? 'text-muted-foreground' : 'text-destructive'}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info & Map */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Ubicación
            </span>
            <h2 className="section-title text-left mb-8">
              Cómo <span className="text-primary">encontrarnos</span>
            </h2>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-card rounded-xl p-4 border border-border flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Dirección</span>
                  <span className="font-medium text-foreground">La Muela, Zaragoza</span>
                </div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Teléfono</span>
                  <a href="tel:+34976000000" className="font-medium text-foreground hover:text-primary transition-colors">
                    976 000 000
                  </a>
                </div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border flex items-center gap-4 sm:col-span-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Email</span>
                  <a href="mailto:info@ghchapapintura.es" className="font-medium text-foreground hover:text-primary transition-colors">
                    info@ghchapapintura.es
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.456446337168!2d-0.9350153!3d41.6387735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd596b2bd65bd0a3%3A0x8187011bb77431a6!2sGH%20Chapa%20y%20Pintura!5e0!3m2!1ses!2ses!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación GH Chapa y Pintura"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
