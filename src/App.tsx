import { useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'motion/react';
import { Camera, Sparkles, Trophy, ChevronDown, Check } from 'lucide-react';
import iconImg from './assets/images/fittier_icon.png';
import shotHome from './assets/images/shot_home.jpg';
import shotTier from './assets/images/shot_tier.jpg';
import shotSnap from './assets/images/shot_snap.jpg';
import shotCoach from './assets/images/shot_coach.jpg';
import shotFood from './assets/images/shot_food.jpg';

const APP_STORE_URL = 'https://apps.apple.com/us/app/fittier-daily-tier-score/id6799959086';
const PRIVACY_URL = 'https://fittier.app/privacy.html';
const SUPPORT_URL = 'https://fittier.app/support.html';
const TERMS_URL = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

const TIERS = [
  { t: 'S', c: '#F7D54A', fg: '#1B1606' },
  { t: 'A', c: '#5DB65C', fg: '#08130A' },
  { t: 'B', c: '#4DA3FF', fg: '#06101C' },
  { t: 'C', c: '#E5B842', fg: '#1B1606' },
  { t: 'D', c: '#F0883E', fg: '#1C0E04' },
  { t: 'E', c: '#E5534B', fg: '#1C0605' },
  { t: 'F', c: '#8E8E98', fg: '#111114' },
];

const STEPS = [
  { icon: Camera, title: 'Log your day', text: 'Snap your meal, add a workout, slide sleep & mood.' },
  { icon: Sparkles, title: 'AI grades it', text: 'Your whole day scored 0–100 against your own plan.' },
  { icon: Trophy, title: 'Climb the tiers', text: 'Get S to F, keep the streak, level up.' },
];

const SHOTS = [shotHome, shotTier, shotSnap, shotCoach, shotFood];

const PLANS = [
  { name: 'Pro', price: '$7.99', per: '/ month', note: '15 AI requests a day', best: false },
  { name: 'Pro Annual', price: '$39.99', per: '/ year', note: '7 days free · ≈ $3.33/mo', best: true },
  { name: 'Unlimited', price: '$24.99', per: '/ month', note: 'For power users', best: false },
];

const FAQ = [
  { q: 'Is there a free trial?', a: 'Yes — Pro Annual starts with 7 days free. Cancel anytime in your Apple ID settings.' },
  { q: 'Which devices?', a: 'iPhone with iOS 15 or later.' },
  { q: 'How does the AI grade my day?', a: 'It looks at food, training, sleep and mood together, scores the day 0–100 and gives you a tier with a short explanation.' },
  { q: 'Is my data private?', a: 'Your logs stay private to your account and are never sold.' },
];

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease },
};

function AppleLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
    </svg>
  );
}

function StoreButton({ big = false }: { big?: boolean }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-3 rounded-2xl bg-white text-black font-semibold transition-transform active:scale-[0.97] hover:scale-[1.02] ${
        big ? 'px-6 py-3.5' : 'px-4 py-2.5'
      }`}
    >
      <AppleLogo className={big ? 'w-6 h-6' : 'w-5 h-5'} />
      <span className="flex flex-col leading-none text-left">
        <span className="text-[10px] font-medium opacity-70">Download on the</span>
        <span className={big ? 'text-lg' : 'text-base'}>App Store</span>
      </span>
    </a>
  );
}

function Phone({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-[2.2rem] border border-white/10 bg-black p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.6)] ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="block w-full rounded-[1.8rem]" />
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0B0B0F] text-[#F5F5F8] antialiased">
        {/* Nav */}
        <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#0B0B0F]/75 border-b border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2.5">
              <img src={iconImg} alt="FitTier" className="w-8 h-8 rounded-[9px]" />
              <span className="text-[17px] font-semibold tracking-tight">FitTier</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
              <a href="#how" className="hover:text-white">How it works</a>
              <a href="#screens" className="hover:text-white">App</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
            </nav>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#7C6CF0] px-4 py-2 text-sm font-semibold text-white active:scale-[0.97] transition-transform"
            >
              Get the app
            </a>
          </div>
        </header>

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-40 h-[560px] bg-[radial-gradient(ellipse_at_center,rgba(124,108,240,0.28),transparent_65%)]"
            />
            <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp} className="text-center md:text-left">
                <h1 className="text-[44px] leading-[1.02] md:text-[72px] font-bold tracking-[-0.035em]">
                  You can&apos;t <span className="text-[#F7D54A]">larp</span> a tier.
                </h1>
                <p className="mt-5 text-lg md:text-xl text-white/60">
                  Your whole day, graded S to F.
                </p>
                <div className="mt-8 flex justify-center md:justify-start">
                  <StoreButton big />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
                className="flex justify-center"
              >
                <Phone src={shotTier} alt="FitTier tier screen" className="w-[260px] md:w-[320px]" />
              </motion.div>
            </div>
          </section>

          {/* How it works */}
          <section id="how" className="mx-auto max-w-6xl px-5 py-14 md:py-24">
            <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-center">
              Two minutes a day.
            </motion.h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  className="flex md:flex-col items-start gap-4 rounded-3xl bg-white/[0.04] border border-white/[0.06] p-5 md:p-7"
                >
                  <div className="shrink-0 grid place-items-center w-11 h-11 rounded-2xl bg-[#7C6CF0]/15 text-[#A99CFF]">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-1 text-[15px] text-white/55 leading-relaxed">{s.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tier strip */}
            <motion.div {...fadeUp} className="mt-12 flex justify-center gap-2 md:gap-3">
              {TIERS.map((x, i) => (
                <motion.div
                  key={x.t}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                  className="grid place-items-center w-11 h-11 md:w-14 md:h-14 rounded-2xl text-lg md:text-xl font-bold"
                  style={{ background: x.c, color: x.fg, boxShadow: x.t === 'S' ? `0 0 28px ${x.c}88` : undefined }}
                >
                  {x.t}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Screens */}
          <section id="screens" className="py-14 md:py-24 border-y border-white/[0.06] bg-white/[0.015]">
            <motion.h2 {...fadeUp} className="px-5 text-3xl md:text-5xl font-bold tracking-[-0.03em] text-center">
              Snap. Score. Level up.
            </motion.h2>
            <div className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory px-5 pb-4 md:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {SHOTS.map((s, i) => (
                <div key={i} className="snap-center shrink-0">
                  <Phone src={s} alt="FitTier app screen" className="w-[220px] md:w-[230px]" />
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="mx-auto max-w-6xl px-5 py-14 md:py-24">
            <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-center">
              Simple pricing.
            </motion.h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3 md:items-stretch">
              {PLANS.map((p) => (
                <motion.div
                  key={p.name}
                  {...fadeUp}
                  className={`relative rounded-3xl p-6 md:p-7 border ${
                    p.best
                      ? 'bg-[#7C6CF0]/[0.12] border-[#7C6CF0] md:-translate-y-2'
                      : 'bg-white/[0.04] border-white/[0.07]'
                  } ${p.best ? 'order-first md:order-none' : ''}`}
                >
                  {p.best && (
                    <span className="absolute -top-3 left-6 rounded-full bg-[#7C6CF0] px-3 py-1 text-xs font-semibold">
                      Best value
                    </span>
                  )}
                  <div className="text-[15px] font-semibold text-white/80">{p.name}</div>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold tracking-tight tabular-nums">{p.price}</span>
                    <span className="text-white/50">{p.per}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-white/60">
                    <Check className="w-4 h-4 text-[#5DB65C]" /> {p.note}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <StoreButton big />
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mx-auto max-w-3xl px-5 pb-16 md:pb-24">
            <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-center">
              FAQ
            </motion.h2>
            <div className="mt-8 divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {FAQ.map((f, i) => (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left text-[17px] font-medium"
                  >
                    {f.q}
                    <ChevronDown className={`w-5 h-5 shrink-0 text-white/40 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease }}
                        className="overflow-hidden pb-5 text-white/55 leading-relaxed"
                      >
                        {f.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-white/45">
            <div className="flex items-center gap-2.5">
              <img src={iconImg} alt="" className="w-6 h-6 rounded-[7px]" />
              <span>© {new Date().getFullYear()} FitTier</span>
            </div>
            <div className="flex gap-6">
              <a href={PRIVACY_URL} className="hover:text-white">Privacy</a>
              <a href={TERMS_URL} className="hover:text-white">Terms</a>
              <a href={SUPPORT_URL} className="hover:text-white">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
