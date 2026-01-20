import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'aviso' | 'privacidad' | 'cookies' | null;
  onClose: () => void;
}

const legalContent = {
  aviso: {
    title: 'Aviso Legal',
    content: `
      <h3>1. Datos identificativos</h3>
      <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa:</p>
      <ul>
        <li><strong>Denominación social:</strong> GH Chapa y Pintura</li>
        <li><strong>Domicilio:</strong> La Muela, Zaragoza, España</li>
        <li><strong>NIF:</strong> [Pendiente de añadir]</li>
        <li><strong>Teléfono:</strong> 976 000 000</li>
        <li><strong>Email:</strong> info@ghchapapintura.es</li>
        <li><strong>Actividad:</strong> Taller de chapa y pintura de automóviles</li>
      </ul>

      <h3>2. Objeto</h3>
      <p>El presente sitio web tiene como finalidad informar sobre los servicios de chapa y pintura ofrecidos por GH Chapa y Pintura, así como facilitar el contacto con potenciales clientes.</p>

      <h3>3. Propiedad intelectual e industrial</h3>
      <p>Todos los contenidos del sitio web, incluyendo textos, imágenes, diseño gráfico, código fuente, logos, marcas y demás elementos, son propiedad de GH Chapa y Pintura o de terceros que han autorizado su uso, quedando protegidos por la legislación sobre propiedad intelectual e industrial.</p>

      <h3>4. Responsabilidad</h3>
      <p>GH Chapa y Pintura no se hace responsable de los daños y perjuicios que pudieran derivarse del uso del sitio web por parte del usuario, incluyendo errores u omisiones en los contenidos, falta de disponibilidad o transmisión de virus.</p>

      <h3>5. Legislación aplicable</h3>
      <p>Las presentes condiciones se rigen por la legislación española. Para cualquier controversia que pudiera surgir, las partes se someten a los Juzgados y Tribunales de Zaragoza.</p>
    `,
  },
  privacidad: {
    title: 'Política de Privacidad',
    content: `
      <h3>1. Responsable del tratamiento</h3>
      <ul>
        <li><strong>Responsable:</strong> GH Chapa y Pintura</li>
        <li><strong>Dirección:</strong> La Muela, Zaragoza, España</li>
        <li><strong>Email:</strong> info@ghchapapintura.es</li>
      </ul>

      <h3>2. Finalidad del tratamiento</h3>
      <p>Los datos personales que nos facilites a través del formulario de contacto serán tratados con las siguientes finalidades:</p>
      <ul>
        <li>Gestionar tu solicitud de presupuesto o consulta</li>
        <li>Enviarte información comercial sobre nuestros servicios (solo si das tu consentimiento)</li>
        <li>Cumplir con las obligaciones legales que nos sean aplicables</li>
      </ul>

      <h3>3. Base legal</h3>
      <p>La base legal para el tratamiento de tus datos es:</p>
      <ul>
        <li>Tu consentimiento al enviar el formulario de contacto</li>
        <li>El interés legítimo en responder a tus consultas</li>
        <li>El cumplimiento de obligaciones legales</li>
      </ul>

      <h3>4. Destinatarios</h3>
      <p>No cederemos tus datos a terceros salvo obligación legal. No realizamos transferencias internacionales de datos.</p>

      <h3>5. Conservación</h3>
      <p>Conservaremos tus datos durante el tiempo necesario para gestionar tu solicitud y, posteriormente, durante los plazos legales de prescripción.</p>

      <h3>6. Derechos</h3>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un email a info@ghchapapintura.es, indicando el derecho que deseas ejercer y adjuntando copia de tu DNI.</p>
      <p>También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>

      <h3>7. Seguridad</h3>
      <p>Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos personales.</p>
    `,
  },
  cookies: {
    title: 'Política de Cookies',
    content: `
      <h3>1. ¿Qué son las cookies?</h3>
      <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten al sitio recordar tus acciones y preferencias durante un periodo de tiempo.</p>

      <h3>2. Cookies que utilizamos</h3>
      
      <h4>Cookies necesarias</h4>
      <p>Son esenciales para el funcionamiento del sitio web. Incluyen:</p>
      <ul>
        <li><strong>cookie-consent:</strong> Almacena tus preferencias de cookies. Duración: 1 año.</li>
      </ul>

      <h4>Cookies analíticas (opcionales)</h4>
      <p>Nos permiten analizar el uso del sitio web para mejorarlo:</p>
      <ul>
        <li><strong>_ga, _gid:</strong> Google Analytics. Recogen información anónima sobre navegación. Duración: 2 años / 24 horas.</li>
      </ul>

      <h4>Cookies de marketing (opcionales)</h4>
      <p>Se utilizan para mostrarte publicidad relevante:</p>
      <ul>
        <li><strong>_fbp:</strong> Facebook Pixel. Permite medir la efectividad de la publicidad. Duración: 3 meses.</li>
      </ul>

      <h3>3. ¿Cómo gestionar las cookies?</h3>
      <p>Puedes configurar tus preferencias de cookies en cualquier momento a través del banner de cookies que aparece en el sitio web.</p>
      <p>También puedes configurar tu navegador para bloquear o eliminar cookies. Consulta la ayuda de tu navegador para más información.</p>

      <h3>4. Actualización de esta política</h3>
      <p>Esta política de cookies puede ser actualizada en cualquier momento. Te recomendamos revisarla periódicamente.</p>

      <p><strong>Última actualización:</strong> Enero 2026</p>
    `,
  },
};

const LegalModal = ({ type, onClose }: LegalModalProps) => {
  if (!type) return null;

  const content = legalContent[type];

  return (
    <div className="legal-modal" onClick={onClose}>
      <div className="legal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">{content.title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div
          className="prose prose-invert prose-sm max-w-none text-muted-foreground
            [&>h3]:text-foreground [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-lg
            [&>h4]:text-foreground [&>h4]:font-medium [&>h4]:mt-4 [&>h4]:mb-2
            [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mb-1"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
      </div>
    </div>
  );
};

export default LegalModal;
