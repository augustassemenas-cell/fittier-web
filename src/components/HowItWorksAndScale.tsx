import React, { useState } from 'react';
import { Check, Flame, Sparkles, Utensils } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { TIER_SCALE, TierLetter } from '../data/fittierData';
import { GlowCard } from './GlowCard';

export const HowItWorksAndScale: React.FC = () => {
  const [activeTier, setActiveTier] = useState<TierLetter>('S');

  const selectedTierData =
    TIER_SCALE.find((item) => item.tier === activeTier) ?? TIER_SCALE[0];

  return (
    <>
      {/* 2. How it works (Animated 3-Step Pipeline) */}
      <section id="how-it-works" className="py-16 md:py-24 border-b border-[#24242D] relative overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div className="text-xs font-medium text-[#7C6CF0]">How it works</div>
              <h2
                className="mt-2 font-display font-bold tracking-tight text-[#F5F5F8]"
                style={{ fontSize: 'clamp(1.85rem, 3.3vw, 2.6rem)', textWrap: 'balance' }}
              >
                Three steps. Two minutes a day.
              </h2>
            </div>
            <div className="font-mono text-xs text-[#9A9AA8]">
              Log · Grade · Level Up
            </div>
          </div>

          <div className="relative mt-12">
            {/* Animated connecting energy line behind desktop grid */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-11 left-[12%] right-[12%] h-[2px] bg-[#24242E] overflow-hidden rounded-full"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#7C6CF0] to-[#F7D54A]"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlowCard className="h-full rounded-2xl bg-[#18181E] border border-[#262630] p-6 md:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#7C6CF0]/15 border border-[#7C6CF0]/45 flex items-center justify-center font-mono text-xs font-bold text-[#7C6CF0]">
                        01
                      </div>
                      <span className="font-mono text-[11px] text-[#9A9AA8]">~90 sec / day</span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-[#F5F5F8]">
                      Log your day in 1–2 minutes
                    </h3>
                    <p className="mt-2 text-sm text-[#9A9AA8] leading-relaxed">
                      Type what you ate, log your workout, slide sleep &amp; mood, and check off supplements.
                    </p>
                  </div>

                  {/* Animated Mini Checkoff Widget */}
                  <div className="mt-6 pt-5 border-t border-[#24242E] space-y-2">
                    {[
                      { icon: Utensils, label: 'chicken, rice, salad', tag: '560 kcal' },
                      { icon: Check, label: 'Strength training', tag: '55 min' },
                      { icon: Check, label: 'Sleep & Creatine', tag: '8h · Done' },
                    ].map((row, idx) => (
                      <motion.div
                        key={row.label}
                        whileHover={{ x: 3 }}
                        className="rounded-xl bg-[#0D0D11] border border-[#262630] px-3 py-2 flex items-center justify-between gap-2 text-xs"
                      >
                        <span className="flex items-center gap-2 text-[#F5F5F8] truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5DB65C] shrink-0" />
                          <span className="truncate">{row.label}</span>
                        </span>
                        <span
                          className="font-mono text-[11px] text-[#7C6CF0] shrink-0 tabular-nums"
                          style={{ animationDelay: `${idx * 150}ms` }}
                        >
                          {row.tag}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlowCard
                  glowColor="rgba(124, 108, 240, 0.22)"
                  className="h-full rounded-2xl bg-[#18181E] border border-[#262630] p-6 md:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#7C6CF0]/20 border border-[#7C6CF0]/60 flex items-center justify-center font-mono text-xs font-bold text-[#BDB3FF]">
                        02
                      </div>
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#7C6CF0]">
                        <Sparkles className="w-3 h-3" aria-hidden="true" />
                        AI Engine
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-[#F5F5F8]">
                      AI grades it 0–100
                    </h3>
                    <p className="mt-2 text-sm text-[#9A9AA8] leading-relaxed">
                      FitTier scores your day against your personal plan and writes a crisp breakdown per category.
                    </p>
                  </div>

                  {/* Mini Animated AI Breakdown Widget */}
                  <div className="mt-6 pt-5 border-t border-[#24242E] space-y-2.5">
                    <div className="rounded-xl bg-[#0D0D11] border border-[#7C6CF0]/35 px-3.5 py-2.5 flex items-center justify-between">
                      <span className="text-xs text-[#9A9AA8]">Daily composite</span>
                      <span className="font-mono text-base font-bold text-[#F5F5F8] tabular-nums">
                        95 <span className="text-xs font-normal text-[#9A9AA8]">/ 100</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {[
                        { k: 'Sleep', v: 'S', c: '#F7D54A' },
                        { k: 'Gym', v: 'S', c: '#F7D54A' },
                        { k: 'Kcal', v: 'A', c: '#5DB65C' },
                      ].map((pill) => (
                        <div
                          key={pill.k}
                          className="rounded-xl bg-[#0D0D11] border border-[#262630] py-2 px-1"
                        >
                          <div className="text-[10px] text-[#9A9AA8]">{pill.k}</div>
                          <div className="font-display text-sm font-extrabold" style={{ color: pill.c }}>
                            {pill.v}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.23, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlowCard
                  glowColor="rgba(247, 213, 74, 0.20)"
                  className="h-full rounded-2xl bg-[#18181E] border border-[#262630] p-6 md:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F7D54A]/15 border border-[#F7D54A]/50 flex items-center justify-center font-mono text-xs font-bold text-[#F7D54A]">
                        03
                      </div>
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#F7CE78]">
                        <Flame className="w-3 h-3 animate-flame-subtle" aria-hidden="true" />
                        Streak +1
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-[#F5F5F8]">
                      Get your tier &amp; keep the streak
                    </h3>
                    <p className="mt-2 text-sm text-[#9A9AA8] leading-relaxed">
                      Lock in S through F, keep your flame alive every solid day, and watch your week stack up.
                    </p>
                  </div>

                  {/* Mini Animated S-Tier + Streak Strip */}
                  <div className="mt-6 pt-5 border-t border-[#24242E] flex items-center justify-between gap-3 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#F7D54A]/15 border border-[#F7D54A]/55 flex items-center justify-center font-display text-2xl font-extrabold text-[#F7D54A] shadow-[0_0_20px_rgba(247,213,74,0.28)]">
                        S
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#F5F5F8]">Locked in</div>
                        <div className="font-mono text-[11px] text-[#F7CE78]">14d streak active</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {['#5DB65C', '#F7D54A', '#4DA3FF', '#F7D54A', '#F7D54A'].map((c, idx) => (
                        <span
                          key={idx}
                          className="w-2 h-6 rounded-full"
                          style={{ backgroundColor: c, opacity: 0.9 }}
                        />
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Tier Scale (Interactive S -> F Ladder) */}
      <section id="tier-scale" className="py-16 md:py-24 border-b border-[#24242D]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-[#7C6CF0]">The tier scale</div>
            <h2
              className="mt-2 font-display font-bold tracking-tight text-[#F5F5F8]"
              style={{ fontSize: 'clamp(1.85rem, 3.3vw, 2.6rem)', textWrap: 'balance' }}
            >
              From S to F. Click any tier to see how it reads.
            </h2>
            <p className="mt-2.5 text-sm md:text-base text-[#9A9AA8]">
              Every tier tells the truth without shaming you—even an F-tier day gives you a clear reset move.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual S -> F Ladder */}
            <div className="lg:col-span-7 space-y-2.5">
              {TIER_SCALE.map((item) => {
                const isSelected = item.tier === activeTier;
                return (
                  <motion.button
                    key={item.tier}
                    type="button"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setActiveTier(item.tier)}
                    className={`w-full text-left rounded-2xl border px-5 py-3.5 flex items-center gap-4 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#18181E]'
                        : 'bg-[#18181E]/60 border-[#262630] hover:border-[#363646]'
                    }`}
                    style={
                      isSelected
                        ? {
                            borderColor: item.borderTint,
                            boxShadow:
                              item.tier === 'S'
                                ? '0 0 28px rgba(247, 213, 74, 0.14)'
                                : undefined,
                          }
                        : undefined
                    }
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-display text-2xl font-extrabold shrink-0 border"
                      style={{
                        color: item.hex,
                        backgroundColor: item.bgTint,
                        borderColor: item.borderTint,
                      }}
                    >
                      {item.tier}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-display text-base font-bold text-[#F5F5F8]">
                          {item.title}
                        </span>
                        <span className="font-mono text-xs tabular-nums text-[#9A9AA8] shrink-0">
                          {item.range}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs sm:text-sm text-[#9A9AA8] leading-snug">
                        {item.oneLiner}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Selected Tier Result Preview */}
            <GlowCard
              className="lg:col-span-5 rounded-2xl bg-[#18181E] border p-6 md:p-7"
              glowColor={selectedTierData.bgTint}
              style={{ borderColor: selectedTierData.borderTint }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTierData.tier}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#262630]">
                    <div>
                      <div className="text-xs text-[#9A9AA8]">Example result screen</div>
                      <div className="mt-1 flex items-baseline gap-3">
                        <span
                          className="font-display text-5xl font-extrabold leading-none"
                          style={{
                            color: selectedTierData.hex,
                            filter:
                              selectedTierData.tier === 'S'
                                ? 'drop-shadow(0 0 18px rgba(247, 213, 74, 0.35))'
                                : undefined,
                          }}
                        >
                          {selectedTierData.tier}
                        </span>
                        <span className="font-mono text-2xl font-bold tabular-nums text-[#F5F5F8]">
                          {selectedTierData.sampleScore}
                          <span className="text-sm font-normal text-[#9A9AA8]"> / 100</span>
                        </span>
                      </div>
                    </div>

                    {selectedTierData.tier === 'S' || selectedTierData.tier === 'A' ? (
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#F7CE78]">
                        <Flame className="w-4 h-4 animate-flame-subtle fill-[#F7CE78]/25" aria-hidden="true" />
                        Streak +1
                      </div>
                    ) : (
                      <div className="text-xs font-mono text-[#9A9AA8]">{selectedTierData.title}</div>
                    )}
                  </div>

                  <div className="mt-5 space-y-2.5">
                    {selectedTierData.sampleFeedback.map((line, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-[#0D0D11] border border-[#262630] px-3.5 py-2.5 text-xs sm:text-sm text-[#F5F5F8]"
                      >
                        {line}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-5 border-t border-[#262630]">
                    <div className="text-xs font-semibold text-[#7C6CF0]">Tier Coach note</div>
                    <p className="mt-1.5 text-sm text-[#9A9AA8] leading-relaxed">
                      {selectedTierData.coachTip}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </GlowCard>
          </div>
        </div>
      </section>
    </>
  );
};
