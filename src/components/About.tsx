import { CheckCircle } from 'lucide-react';

const features = [
  'Más de 15 años de experiencia en el sector',
  'Materiales y pinturas de primera calidad',
  'Técnicos especializados y formación continua',
  'Trabajamos con todas las compañías de seguros',
  'Garantía en todos nuestros trabajos',
  'Vehículo de sustitución disponible',
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="section-title text-left mb-6">
              Tu taller de confianza en{' '}
              <span className="text-primary">La Muela, Zaragoza</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              <strong className="text-foreground">GH Chapa y Pintura</strong> es un taller especializado
              en reparación de carrocería ubicado en La Muela (Zaragoza). Con más de 15 años de experiencia
              en el sector, ofrecemos servicios de chapa y pintura de máxima calidad con materiales premium
              y atención personalizada.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nuestro equipo de profesionales trabaja con las últimas tecnologías y técnicas del sector
              para garantizar acabados perfectos que devuelven a tu vehículo su aspecto original.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl metallic-bg overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">GH</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">GH Chapa y Pintura</h3>
                  <p className="text-muted-foreground">Profesionales de confianza</p>
                  <div className="mt-6 flex justify-center gap-4 text-center">
                    <div>
                      <span className="text-3xl font-bold text-primary block">+15</span>
                      <span className="text-sm text-muted-foreground">Años</span>
                    </div>
                    <div className="w-px bg-border" />
                    <div>
                      <span className="text-3xl font-bold text-primary block">+2000</span>
                      <span className="text-sm text-muted-foreground">Clientes</span>
                    </div>
                    <div className="w-px bg-border" />
                    <div>
                      <span className="text-3xl font-bold text-primary block">100%</span>
                      <span className="text-sm text-muted-foreground">Garantía</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
