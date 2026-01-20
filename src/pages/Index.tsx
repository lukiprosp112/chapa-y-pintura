import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import LegalModal from '@/components/LegalModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  const [legalModalType, setLegalModalType] = useState<'aviso' | 'privacidad' | 'cookies' | null>(null);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <About />
        <Schedule />
        <Contact />
      </main>
      <Footer onOpenLegal={setLegalModalType} />
      <CookieBanner />
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
