import React, { useState } from 'react';
import {
  CalendarDays,
  Globe,
  MessageSquare,
  SlidersHorizontal,
  SunMoon,
  Utensils,
} from 'lucide-react';
import { motion } from 'motion/react';
import uiHomeImg from '../assets/images/ui_2_home.png';
import uiFoodImg from '../assets/images/ui_3_food.png';
import uiWorkoutImg from '../assets/images/ui_4_workout.png';
import uiCheckinImg from '../assets/images/ui_5_checkin.png';
import { FOOD_EXAMPLES, estimateFoodFromText } from '../data/fittierData';
import { GlowCard } from './GlowCard';

interface AppScreenshotCard {
  id: string;
  src: string;
  label: string;
  title: string;
  description: string;
  alt: string;
  glow: string;
}

const APP_SCREENSHOTS: AppScreenshotCard[] = [
  {
    id: 'home',
    src: uiHomeImg,
    label: '01 · Home & streak',
    title: 'Your day, at a glance.',
    description:
      'Keep your flame streak lit, check your 7-day strip, and jump straight into Tier Coach whenever you need a course correction.',
    alt: 'FitTier Home screen showing current streak flame, Tier Coach card, and weekly tier summary',
    glow: 'rgba(240, 136, 62, 0.24)',
  },
  {
    id: 'food',
    src: uiFoodImg,
    label: '02 · Food & supplements',
    title: 'Log meals in seconds.',
    description:
      'Skip slow barcode scanning. Type what you ate like "chicken, rice, salad" for instant AI macros, plus 1-tap protein, creatine, and magnesium.',
    alt: 'FitTier Food screen logging beef, rice, salad with AI calories and supplements like protein powder, creatine, and magnesium',
    glow: 'rgba(124, 108, 240, 0.28)',
  },
  {
    id: 'workout',
    src: uiWorkoutImg,
    label: '03 · Workout tracking',
    title: 'Track every workout.',
    description:
      'Log Cardio, Strength, Flexibility, or Sports in seconds—with optional AI calorie-burn estimation based on your session duration.',
    alt: 'FitTier Workout screen logging lifting weights with Cardio, Strength, Flexibility, Sports types and Estimate with AI button',
    glow: 'rgba(124, 108, 240, 0.28)',
  },
  {
    id: 'checkin',
    src: uiCheckinImg,
    label: '04 · Sleep & mood check-in',
    title: 'Sleep & mood, tracked too.',
    description:
      'Slide sleep hours and quality, optionally log body weight, and tap your mood and energy levels so recovery directly shapes your tier.',
    alt: 'FitTier Check-in screen tracking 8 hours sleep, sleep quality, optional weight, mood, and energy levels',
    glow: 'rgba(93, 182, 92, 0.24)',
  },
];

interface FeaturesAndScreensProps {
  onOpenKit?: () => void;
}

export const FeaturesAndScreens: React.FC<FeaturesAndScreensProps> = ({ onOpenKit }) => {
  const [foodQuery, setFoodQuery] = useState('chicken, rice, salad');
  const [foodResult, setFoodResult] = useState(() => estimateFoodFromText('chicken, rice, salad'));
  const [estimateNonce, setEstimateNonce] = useState(0);
  const [foodError, setFoodError] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const runEstimate = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) {
      setFoodError('Type a meal first (e.g. "200g salmon, rice, avocado").');
      return;
    }
    setFoodError(null);
    setFoodResult(estimateFoodFromText(trimmed));
    setEstimateNonce((n) => n + 1);
  };

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    runEstimate(foodQuery);
  };

  const macroTotal = Math.max(1, foodResult.protein + foodResult.carbs + foodResult.fats);

  return (
    <>
      {/* 4. Features with Spacious 2x2 Integrated Device Showcase */}
      <section id="features" className="py-16 md:py-24 border-b border-[#24242D]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div className="text-xs font-medium text-[#7C6CF0]">Inside FitTier</div>
              <h2
                className="mt-2 font-display font-bold tracking-tight text-[#F5F5F8]"
                style={{ fontSize: 'clamp(1.85rem, 3.3vw, 2.6rem)', textWrap: 'balance' }}
              >
                Built to feel like leveling up, not filling spreadsheets.
              </h2>
              <p className="mt-2.5 text-sm md:text-base text-[#9A9AA8]">
                Every screen blends food, training, recovery, and AI coaching into one honest score.
              </p>
            </div>

            {onOpenKit && (
              <button
                type="button"
                onClick={onOpenKit}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#18181E] border border-[#2C2C38] hover:border-[#7C6CF0] text-xs font-semibold text-[#F5F5F8] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Export App Store PNGs (1290×2796)
              </button>
            )}
          </div>

          {/* Spacious 2x2 Real Screen Bento Grid (Never Cramped, Never Empty) */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {APP_SCREENSHOTS.map((shot, idx) => (
              <motion.div
                key={shot.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlowCard
                  glowColor={shot.glow}
                  className="h-full rounded-3xl bg-[#18181E] border border-[#262630] p-7 pb-0 overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end h-full">
                    <div className="sm:col-span-6 pb-7 self-start">
                      <div className="text-xs font-mono font-semibold text-[#7C6CF0]">
                        {shot.label}
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-bold text-[#F5F5F8] leading-snug">
                        {shot.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-[#9A9AA8] leading-relaxed">
                        {shot.description}
                      </p>
                    </div>

                    <div className="sm:col-span-6 flex justify-center sm:justify-end">
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-[235px]"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute -inset-6 rounded-full blur-2xl opacity-65 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at 50% 40%, ${shot.glow}, transparent 72%)`,
                          }}
                        />
                        {!failedImages[shot.id] ? (
                          <div
                            className="relative"
                            style={{
                              WebkitMaskImage:
                                'linear-gradient(to bottom, #000 0%, #000 80%, transparent 100%)',
                              maskImage:
                                'linear-gradient(to bottom, #000 0%, #000 80%, transparent 100%)',
                            }}
                          >
                            <img
                              src={shot.src}
                              alt={shot.alt}
                              onError={() =>
                                setFailedImages((prev) => ({ ...prev, [shot.id]: true }))
                              }
                              className="w-full h-auto block select-none drop-shadow-[0_18px_36px_rgba(0,0,0,0.75)]"
                            />
                          </div>
                        ) : (
                          <div className="aspect-[9/16] rounded-2xl bg-[#0D0D11] border border-[#262630] flex items-center justify-center p-6 text-center text-xs text-[#9A9AA8]">
                            {shot.title}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* Spacious Interactive Food Estimator + Coach/Plan Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <GlowCard className="lg:col-span-7 rounded-3xl bg-[#18181E] border border-[#262630] p-7 md:p-8">
              <div>
                <div className="flex items-center gap-2.5 text-[#7C6CF0]">
                  <Utensils className="w-4 h-4" aria-hidden="true" />
                  <span className="text-xs font-semibold">Try AI food logging</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-[#F5F5F8]">
                  Type what you ate. Get calories &amp; macros in seconds.
                </h3>
                <p className="mt-2 text-sm text-[#9A9AA8] leading-relaxed max-w-[54ch]">
                  Type a quick description like &ldquo;chicken, rice, salad&rdquo; or &ldquo;200g salmon, oats, berries&rdquo; and see instant AI calorie and macro estimates.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {FOOD_EXAMPLES.map((ex) => (
                    <button
                      key={ex.text}
                      type="button"
                      onClick={() => {
                        setFoodQuery(ex.text);
                        setFoodError(null);
                        setFoodResult(ex);
                        setEstimateNonce((n) => n + 1);
                      }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                        foodQuery === ex.text
                          ? 'bg-[#7C6CF0]/20 border-[#7C6CF0]/60 text-[#F5F5F8]'
                          : 'bg-[#0D0D11] border-[#262630] text-[#9A9AA8] hover:text-[#F5F5F8]'
                      }`}
                    >
                      {ex.text}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#262630]">
                <form onSubmit={handleEstimate} className="flex flex-col sm:flex-row gap-2.5">
                  <label htmlFor="food-estimator" className="sr-only">
                    Try AI food description
                  </label>
                  <input
                    id="food-estimator"
                    type="text"
                    value={foodQuery}
                    onChange={(e) => {
                      setFoodQuery(e.target.value);
                      if (foodError) setFoodError(null);
                    }}
                    placeholder="Try: 3 eggs, toast, avocado"
                    className="flex-1 rounded-xl bg-[#0D0D11] border border-[#262630] px-4 py-2.5 text-sm text-[#F5F5F8] focus:outline-none focus:ring-2 focus:ring-[#7C6CF0]"
                  />
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      runEstimate(foodQuery);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#7C6CF0] hover:bg-[#6c5ce7] active:scale-95 text-white text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Estimate
                  </button>
                </form>

                {foodError && (
                  <p className="mt-2.5 text-xs text-[#F0883E]">{foodError}</p>
                )}

                <motion.div
                  key={estimateNonce}
                  initial={{ opacity: 0.65, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4 rounded-2xl bg-[#0D0D11] border border-[#262630] p-4 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-[#9A9AA8]">{foodResult.note}</span>
                    <span className="font-mono text-sm font-bold tabular-nums text-[#F5F5F8]">
                      {foodResult.calories} kcal
                    </span>
                  </div>

                  {/* Visual Macro Distribution Bar */}
                  <div className="grid grid-cols-3 gap-3 pt-1">
                    <div>
                      <div className="flex justify-between text-[11px] font-mono mb-1">
                        <span className="text-[#9A9AA8]">Protein</span>
                        <span className="text-[#5DB65C] font-semibold">{foodResult.protein}g</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#18181E] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#5DB65C] transition-all duration-300"
                          style={{ width: `${Math.min(100, (foodResult.protein / macroTotal) * 100)}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-mono mb-1">
                        <span className="text-[#9A9AA8]">Carbs</span>
                        <span className="text-[#7C6CF0] font-semibold">{foodResult.carbs}g</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#18181E] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#7C6CF0] transition-all duration-300"
                          style={{ width: `${Math.min(100, (foodResult.carbs / macroTotal) * 100)}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-mono mb-1">
                        <span className="text-[#9A9AA8]">Fats</span>
                        <span className="text-[#F7D54A] font-semibold">{foodResult.fats}g</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#18181E] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#F7D54A] transition-all duration-300"
                          style={{ width: `${Math.min(100, (foodResult.fats / macroTotal) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </GlowCard>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <GlowCard className="flex-1 rounded-3xl bg-[#18181E] border border-[#262630] p-7">
                <div>
                  <div className="flex items-center gap-2.5 text-[#7C6CF0]">
                    <MessageSquare className="w-4 h-4" aria-hidden="true" />
                    <span className="text-xs font-semibold">Tier Coach AI</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#F5F5F8]">
                    Personal AI coach in your pocket.
                  </h3>
                  <p className="mt-2 text-sm text-[#9A9AA8] leading-relaxed">
                    Ask for quick high-protein meal ideas, workout adjustments, or straight advice on how to turn today&apos;s B into tomorrow&apos;s S.
                  </p>
                </div>
                <div className="mt-5 rounded-xl bg-[#0D0D11] border border-[#262630] px-4 py-3 text-xs text-[#F5F5F8]">
                  <span className="font-mono text-[#7C6CF0]">Coach:</span>{' '}
                  &ldquo;Hit 40g protein tonight and 8h sleep to lock in S tomorrow.&rdquo;
                </div>
              </GlowCard>

              <GlowCard className="flex-1 rounded-3xl bg-[#18181E] border border-[#262630] p-7">
                <div>
                  <div className="flex items-center gap-2.5 text-[#7C6CF0]">
                    <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
                    <span className="text-xs font-semibold">Personal plan from onboarding</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#F5F5F8]">
                    Calibrated to your real goals.
                  </h3>
                  <p className="mt-2 text-sm text-[#9A9AA8] leading-relaxed">
                    Quick onboarding questions build your calorie, macro, sleep, and training targets around your actual schedule—never generic presets.
                  </p>
                </div>
              </GlowCard>
            </div>
          </div>

          {/* 3 Spacious Supporting Capability Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard className="rounded-3xl bg-[#18181E] border border-[#262630] p-7">
              <div>
                <div className="flex items-center gap-2.5 text-[#7C6CF0]">
                  <CalendarDays className="w-4 h-4" aria-hidden="true" />
                  <span className="text-xs font-semibold">Weekly &amp; monthly history</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-[#F5F5F8]">
                  Weekly view &amp; tier calendar.
                </h3>
                <p className="mt-2 text-sm text-[#9A9AA8] leading-relaxed">
                  Spot patterns across every week and full month in one clean tier history calendar.
                </p>
              </div>
              <div className="mt-5 flex items-center gap-1.5">
                {['S', 'A', 'S', 'B', 'A', 'S', 'S'].map((g, i) => (
                  <div
                    key={i}
                    className="flex-1 h-8 rounded-lg bg-[#0D0D11] border border-[#262630] flex items-center justify-center font-display text-xs font-bold"
                    style={{
                      color: g === 'S' ? '#F7D54A' : g === 'A' ? '#5DB65C' : '#4DA3FF',
                    }}
                  >
                    {g}
                  </div>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="rounded-3xl bg-[#18181E] border border-[#262630] p-7">
              <div>
                <div className="flex items-center gap-2.5 text-[#7C6CF0]">
                  <SunMoon className="w-4 h-4" aria-hidden="true" />
                  <span className="text-xs font-semibold">Light &amp; dark mode</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-[#F5F5F8]">
                  Crisp in any lighting.
                </h3>
                <p className="mt-2 text-sm text-[#9A9AA8] leading-relaxed">
                  Built natively for iPhone with both signature dark mode and clean light mode.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2.5 text-xs font-mono">
                <div className="rounded-lg bg-[#0D0D11] border border-[#7C6CF0]/45 px-3 py-2 text-[#F5F5F8] text-center">
                  Dark
                </div>
                <div className="rounded-lg bg-[#EAEAF2] border border-white/40 px-3 py-2 text-[#121218] font-semibold text-center">
                  Light
                </div>
              </div>
            </GlowCard>

            <GlowCard className="rounded-3xl bg-[#18181E] border border-[#262630] p-7">
              <div>
                <div className="flex items-center gap-2.5 text-[#7C6CF0]">
                  <Globe className="w-4 h-4" aria-hidden="true" />
                  <span className="text-xs font-semibold">6 languages</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-[#F5F5F8]">
                  Built for your language.
                </h3>
                <p className="mt-2 text-sm text-[#9A9AA8] leading-relaxed">
                  Switch seamlessly between English, Spanish, German, French, Portuguese, and Lithuanian.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-6 gap-1.5 text-center font-mono text-[11px] text-[#9A9AA8]">
                {['EN', 'ES', 'DE', 'FR', 'PT', 'LT'].map((lang) => (
                  <div
                    key={lang}
                    className="rounded-lg bg-[#0D0D11] border border-[#262630] py-1.5 font-semibold text-[#F5F5F8]"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* 5. Why it works */}
      <section className="py-16 md:py-24 border-b border-[#24242D]">
        <div className="max-w-[1140px] mx-auto px-6">
          <GlowCard className="rounded-3xl bg-[#18181E] border border-[#262630] p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="text-xs font-medium text-[#7C6CF0]">Why it works</div>
                <h2
                  className="mt-2 font-display font-extrabold tracking-tight text-[#F5F5F8]"
                  style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.75rem)', textWrap: 'balance' }}
                >
                  Your tier doesn&apos;t care what you post.
                </h2>
                <p className="mt-4 text-sm md:text-base text-[#9A9AA8] leading-relaxed max-w-[54ch]">
                  Stop larping. Start leveling. Anyone can post a gym mirror pic, but FitTier only scores what you actually did—food, training, sleep, mood, and supplements. Turning your day into one honest grade from S to F makes locking in feel like beating yesterday&apos;s high score.
                </p>
              </div>

              <div className="lg:col-span-5 lg:border-l border-[#262630] lg:pl-8 space-y-5">
                <div className="rounded-xl bg-[#0D0D11] border border-[#262630] p-4">
                  <div className="text-xs font-mono text-[#8E8E98]">Typical fitness apps</div>
                  <ul className="mt-2 space-y-1.5 text-xs text-[#9A9AA8]">
                    <li>10-minute barcode scanning for every meal</li>
                    <li>5 separate apps for gym, macros, and sleep</li>
                    <li>Guilt-tripping red warning bars</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#0D0D11] border border-[#7C6CF0]/45 p-4">
                  <div className="text-xs font-mono text-[#F7D54A]">FitTier</div>
                  <ul className="mt-2 space-y-1.5 text-xs text-[#F5F5F8]">
                    <li>Type &ldquo;chicken, rice, salad&rdquo; and move on</li>
                    <li>Food, gym, sleep, mood, and stack in one score</li>
                    <li>Honest S–F tier + constructive coaching tip</li>
                  </ul>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>
    </>
  );
};
