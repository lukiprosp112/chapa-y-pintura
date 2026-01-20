import { Paintbrush, Wrench, Car, Sparkles, Shield, Hammer } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Pintura Completa',
    description: 'Pintado integral del vehículo con acabados de fábrica. Colores originales o personalizados.',
  },
  {
    icon: Hammer,
    title: 'Reparación de Chapa',
    description: 'Enderezado y reparación de abolladuras, golpes y deformaciones en la carrocería.',
  },
  {
    icon: Car,
    title: 'Reparación de Golpes',
    description: 'Restauración completa tras accidentes. Trabajamos con todas las compañías de seguros.',
  },
  {
    icon: Sparkles,
    title: 'Pulido y Abrillantado',
    description: 'Eliminación de arañazos superficiales y restauración del brillo original de la pintura.',
  },
  {
    icon: Wrench,
    title: 'Enderezado de Chasis',
    description: 'Reparación estructural con bancada y medición computerizada para máxima precisión.',
  },
  {
    icon: Shield,
    title: 'Tratamientos Especiales',
    description: 'Protección cerámica, tratamientos anticorrosión y sellado de pintura profesional.',
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="section-title">
            Servicios de <span className="text-primary">Chapa y Pintura</span>
          </h2>
          <p className="section-subtitle">
            Ofrecemos soluciones completas para la carrocería de tu vehículo con los mejores materiales y técnicas profesionales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contacto" className="btn-primary inline-flex items-center gap-2">
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
