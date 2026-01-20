import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const rejectAll = () => {
    const rejected = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('cookie-consent', JSON.stringify(rejected));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowConfig(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="container mx-auto">
        {!showConfig ? (
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <Cookie className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Usamos cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación y analizar el tráfico.
                  Puedes aceptar todas, rechazarlas o configurar tus preferencias.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <button onClick={() => setShowConfig(true)} className="btn-outline text-sm py-2 px-4 flex-1 lg:flex-none">
                Configurar
              </button>
              <button onClick={rejectAll} className="btn-outline text-sm py-2 px-4 flex-1 lg:flex-none">
                Rechazar
              </button>
              <button onClick={acceptAll} className="btn-primary text-sm py-2 px-4 flex-1 lg:flex-none">
                Aceptar todas
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-card rounded-xl p-6 border border-border max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-foreground">Configurar cookies</h3>
              <button onClick={() => setShowConfig(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div>
                  <span className="font-medium text-foreground">Cookies necesarias</span>
                  <p className="text-sm text-muted-foreground">Esenciales para el funcionamiento del sitio.</p>
                </div>
                <input type="checkbox" checked disabled className="w-5 h-5 accent-primary" />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div>
                  <span className="font-medium text-foreground">Cookies analíticas</span>
                  <p className="text-sm text-muted-foreground">Nos ayudan a mejorar el sitio web.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-5 h-5 accent-primary"
                />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div>
                  <span className="font-medium text-foreground">Cookies de marketing</span>
                  <p className="text-sm text-muted-foreground">Permiten mostrarte publicidad personalizada.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="w-5 h-5 accent-primary"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={rejectAll} className="btn-outline flex-1 text-sm py-2">
                Rechazar todas
              </button>
              <button onClick={savePreferences} className="btn-primary flex-1 text-sm py-2">
                Guardar preferencias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
