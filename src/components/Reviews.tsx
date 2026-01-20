import { Star, ExternalLink } from 'lucide-react';

const reviews = [
  {
    name: 'Carlos M.',
    rating: 5,
    text: 'Excelente trabajo de chapa y pintura. Mi coche quedó como nuevo después de un golpe importante. Muy profesionales y el precio muy competitivo.',
    date: 'Hace 2 meses',
  },
  {
    name: 'María L.',
    rating: 5,
    text: 'Muy contenta con el resultado. Llevé el coche por unos arañazos y quedó perfecto. Trato muy amable y cumplieron con el plazo de entrega.',
    date: 'Hace 3 meses',
  },
  {
    name: 'Javier R.',
    rating: 5,
    text: 'Gran profesionalidad. Reparararon un golpe lateral y la pintura quedó perfecta, igualada al resto del coche. Lo recomiendo sin duda.',
    date: 'Hace 1 mes',
  },
  {
    name: 'Ana P.',
    rating: 4,
    text: 'Buen servicio y atención. Arreglaron varias abolladuras de granizo. El resultado es muy bueno, aunque tardaron un poco más de lo previsto.',
    date: 'Hace 4 meses',
  },
  {
    name: 'Pedro G.',
    rating: 5,
    text: 'El mejor taller de chapa y pintura de la zona. Trabajo impecable y precios justos. Ya he llevado dos coches y siempre satisfecho.',
    date: 'Hace 2 semanas',
  },
  {
    name: 'Laura S.',
    rating: 5,
    text: 'Fantástico resultado en la reparación del paragolpes. Gestionaron todo con el seguro sin problemas. Muy recomendable.',
    date: 'Hace 1 mes',
  },
];

const Reviews = () => {
  const averageRating = 4.8;
  const totalReviews = 47;

  return (
    <section id="resenas" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Opiniones de Clientes
          </span>
          <h2 className="section-title">
            Lo que dicen de <span className="text-primary">nosotros</span>
          </h2>
          
          {/* Google Rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <span className="text-5xl font-bold text-foreground">{averageRating}</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${star <= Math.round(averageRating) ? 'text-primary fill-primary' : 'text-muted-foreground'}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">{totalReviews} reseñas en Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="card-review">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{review.name[0]}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block">{review.name}</span>
                  <span className="text-muted-foreground text-sm">{review.date}</span>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= review.rating ? 'text-primary fill-primary' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Google Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/GH+Chapa+y+Pintura/@41.6387775,-0.9375956,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            Ver todas las reseñas en Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
