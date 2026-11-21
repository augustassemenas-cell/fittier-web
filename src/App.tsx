import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { PointerAura } from './components/PointerAura';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorksAndScale } from './components/HowItWorksAndScale';
import { LiveTierSimulator } from './components/LiveTierSimulator';
import { FeaturesAndScreens } from './components/FeaturesAndScreens';
import { PricingFaqFooter } from './components/PricingFaqFooter';
import { AppStoreKitModal } from './components/AppStoreKitModal';

export default function App() {
  const [kitOpen, setKitOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#0D0D11] text-[#F5F5F8]">
        <ScrollProgressBar />
        <PointerAura />
        <div className="relative z-10">
          <Navbar onNavigate={handleNavigate} />

          <main>
            <HeroSection />
            <HowItWorksAndScale />
            <LiveTierSimulator />
            <FeaturesAndScreens onOpenKit={() => setKitOpen(true)} />
            <PricingFaqFooter onOpenKit={() => setKitOpen(true)} />
          </main>
        </div>

        <AppStoreKitModal open={kitOpen} onClose={() => setKitOpen(false)} />
      </div>
    </MotionConfig>
  );
}
