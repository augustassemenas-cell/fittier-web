import React, { useRef, useState } from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import uiTierImg from '../assets/images/ui_1_tier.png';
import { AppStoreBadge, FitTierAppIcon } from './AppStoreBadge';

export { AppStoreBadge, AppleLogo, FitTierAppIcon } from './AppStoreBadge';

export const HeroSection: React.FC = () => {
  const [heroImgError, setHeroImgError] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const shiftX = useMotionValue(0);
  const shiftY = useMotionValue(0);

  const rotateX = useSpring(tiltX, { stiffness: 140, damping: 20 });
  const rotateY = useSpring(tiltY, { stiffness: 140, damping: 20 });
  const parallaxX = useSpring(shiftX, { stiffness: 120, damping: 22 });
  const parallaxY = useSpring(shiftY, { stiffness: 120, damping: 22 });

  const inverseX = useTransform(parallaxX, (v) => -v * 0.7);
  const inverseY = useTransform(parallaxY, (v) => -v * 0.7);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;

    tiltY.set((nx - 0.5) * 10);
    tiltX.set((0.5 - ny) * 8);
    shiftX.set((nx - 0.5) * 18);
    shiftY.set((ny - 0.5) * 14);
  };

  const handleHeroMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    shiftX.set(0);
    shiftY.set(0);
  };

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative pt-12 pb-0 md:pt-20 md:pb-0 border-b border-[#24242D] overflow-hidden"
    >
      <div className="bg-hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Staggered Editorial Intro */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 pb-8 lg:pb-24"
          >
            <div className="flex items-center gap-3.5 mb-7">
              <FitTierAppIcon size="md" />
              <div>
                <div className="font-display text-sm font-bold text-[#F5F5F8]">
                  FitTier: Daily Tier Score
                </div>
                <div className="text-xs font-medium text-[#9A9AA8]">
                  iPhone · iOS 15+ · US App Store
                </div>
              </div>
            </div>

            <h1
              className="font-display font-extrabold tracking-tight text-[#F5F5F8] leading-[1.02]"
              style={{ fontSize: 'clamp(2.75rem, 5.2vw, 4.3rem)', textWrap: 'balance' }}
            >
              You can&apos;t{' '}
              <span className="bg-gradient-to-r from-[#F7D54A] via-[#FFE98A] to-[#7C6CF0] bg-clip-text text-transparent">
                larp
              </span>{' '}
              a tier.
            </h1>

            <p className="mt-5 text-base md:text-lg text-[#9A9AA8] leading-relaxed max-w-[46ch]">
              FitTier grades your whole day – food, gym, sleep, mood – from S to F.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreBadge size="lg" />

              <motion.a
                href="#how-it-works"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16 }}
                className="inline-flex items-center px-5 py-3.5 rounded-xl bg-[#18181E] border border-[#282832] hover:border-[#7C6CF0]/60 text-[#F5F5F8] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                See how it works
              </motion.a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#24242D] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#9A9AA8]">
              <span>Log in 1–2 minutes</span>
              <span aria-hidden="true">·</span>
              <span>Free to download</span>
              <span aria-hidden="true">·</span>
              <span>7-day free trial on annual</span>
            </div>
          </motion.div>

          {/* Right Column: Seamless Transparent iPhone + Floating Glass Telemetry */}
          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end self-end relative"
            style={{ perspective: '1200px' }}
          >
            {/* Floating Telemetry Badge Top Left (Subtle Parallax) */}
            <motion.div
              aria-hidden="true"
              style={{ x: inverseX, y: inverseY }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex items-center gap-3 absolute left-2 lg:-left-2 top-16 z-20 px-4 py-3 rounded-2xl bg-[#18181E]/88 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F7D54A]/15 border border-[#F7D54A]/50 flex items-center justify-center font-display font-extrabold text-lg text-[#F7D54A] shadow-[0_0_18px_rgba(247,213,74,0.3)]">
                S
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-[#F5F5F8] tabular-nums">
                  95 / 100
                </div>
                <div className="text-[11px] text-[#9A9AA8]">Daily Tier Locked</div>
              </div>
            </motion.div>

            {/* Floating Telemetry Badge Bottom Left (Cleanly outside bezel, zero UI overlap) */}
            <motion.div
              aria-hidden="true"
              style={{ x: parallaxX, y: parallaxY }}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex items-center gap-2.5 absolute left-2 lg:left-0 bottom-36 z-20 px-3.5 py-2.5 rounded-2xl bg-[#18181E]/88 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <Flame className="w-4 h-4 text-[#F0883E] animate-flame-subtle" />
              <div className="text-xs font-semibold text-[#F5F5F8]">
                <span className="font-mono text-[#5DB65C]">Calories A</span> ·{' '}
                <span className="font-mono text-[#F7D54A]">Sleep S</span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-[#7C6CF0]" />
            </motion.div>

            <motion.div
              className="relative w-full max-w-[310px] sm:max-w-[335px] lg:max-w-[355px]"
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Soft S-Tier Gold & Violet Radial Ambient Glow */}
              <div
                className="absolute -inset-12 rounded-full pointer-events-none opacity-70 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle at 50% 38%, rgba(247, 213, 74, 0.30), rgba(124, 108, 240, 0.28) 50%, transparent 74%)',
                }}
                aria-hidden="true"
              />

              {!heroImgError ? (
                <div
                  className="relative"
                  style={{
                    WebkitMaskImage:
                      'linear-gradient(to bottom, #000 0%, #000 84%, transparent 100%)',
                    maskImage:
                      'linear-gradient(to bottom, #000 0%, #000 84%, transparent 100%)',
                  }}
                >
                  <img
                    src={uiTierImg}
                    alt="FitTier iPhone app Tier screen showing glowing S tier, 95 out of 100 score, Today's tier Outstanding day, and Sleep S, Workout S, Mood S, Calories A grades"
                    onError={() => setHeroImgError(true)}
                    className="w-full h-auto block select-none drop-shadow-[0_28px_60px_rgba(0,0,0,0.85)]"
                  />
                </div>
              ) : (
                <div className="p-8 text-center space-y-3 bg-[#18181E] rounded-3xl aspect-[9/19] flex flex-col items-center justify-center">
                  <div className="font-display text-7xl font-extrabold text-[#F7D54A] animate-tier-glow">
                    S
                  </div>
                  <div className="font-mono text-2xl font-bold tabular-nums text-[#F5F5F8]">
                    95 / 100
                  </div>
                  <div className="text-sm text-[#9A9AA8]">Today&apos;s tier · Outstanding day!</div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
