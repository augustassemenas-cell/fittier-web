import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FAQ_ITEMS } from '../data/fittierData';
import {
  APP_STORE_URL,
  AppStoreBadge,
  FitTierAppIcon,
  PRIVACY_URL,
  SUPPORT_EMAIL,
  TERMS_URL,
} from './AppStoreBadge';
import { GlowCard } from './GlowCard';

interface PricingFaqFooterProps {
  onOpenKit?: () => void;
}

export const PricingFaqFooter: React.FC<PricingFaqFooterProps> = ({ onOpenKit }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* 6. Pricing */}
      <section id="pricing" className="py-16 md:py-24 border-b border-[#24242D]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-[#7C6CF0]">Pricing</div>
            <h2
              className="mt-2 font-display font-bold tracking-tight text-[#F5F5F8]"
              style={{ fontSize: 'clamp(1.85rem, 3.3vw, 2.6rem)', textWrap: 'balance' }}
            >
              Free to download. Unlock AI grading when you&apos;re ready.
            </h2>
            <p className="mt-2.5 text-sm md:text-base text-[#9A9AA8]">
              Start free on iPhone. Go Pro Annual for a 7-day free trial and save ~58% vs monthly.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* FitTier Pro Monthly */}
            <GlowCard
              className="rounded-2xl bg-[#18181E] border border-[#262630] p-7"
              glowColor="rgba(124, 108, 240, 0.14)"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-lg font-bold text-[#F5F5F8]">
                    FitTier Pro
                  </span>
                  <span className="text-xs font-mono text-[#9A9AA8]">Monthly</span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-bold tabular-nums text-[#F5F5F8]">
                    $7.99
                  </span>
                  <span className="text-sm text-[#9A9AA8]">/ month</span>
                </div>
                <p className="mt-1.5 text-xs text-[#9A9AA8]">
                  Month-to-month access to AI tier scoring
                </p>

                <ul className="mt-6 pt-5 border-t border-[#262630] space-y-2.5 text-sm text-[#9A9AA8]">
                  <li>Daily AI 0–100 score &amp; S–F breakdown</li>
                  <li>AI food &amp; workout calorie estimation</li>
                  <li>Tier Coach AI nutrition &amp; gym chat</li>
                  <li>Streaks, weekly &amp; monthly tier calendar</li>
                </ul>
              </div>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#0D0D11] border border-[#262630] hover:border-[#7C6CF0] text-[#F5F5F8] text-sm font-semibold transition-colors"
              >
                Get FitTier Pro
              </a>
            </GlowCard>

            {/* FitTier Pro Annual - Best Value */}
            <GlowCard
              className="rounded-2xl bg-[#18181E] border-2 border-[#7C6CF0] p-7 shadow-xl shadow-[#7C6CF0]/15 relative"
              glowColor="rgba(124, 108, 240, 0.24)"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-lg font-bold text-[#F5F5F8]">
                    FitTier Pro Annual
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F7D54A]">
                    Best value
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-bold tabular-nums text-[#F5F5F8]">
                    $39.99
                  </span>
                  <span className="text-sm text-[#9A9AA8]">/ year</span>
                </div>
                <p className="mt-1.5 text-xs font-mono text-[#5DB65C] tabular-nums">
                  ≈ $3.33/month · save ~58% vs monthly
                </p>

                <ul className="mt-6 pt-5 border-t border-[#262630] space-y-2.5 text-sm text-[#F5F5F8]">
                  <li className="text-[#F7D54A] font-semibold">Includes a 7-day free trial</li>
                  <li>Daily AI 0–100 score &amp; S–F breakdown</li>
                  <li>AI food &amp; workout calorie estimation</li>
                  <li>Tier Coach AI + full history &amp; personal plan</li>
                </ul>
              </div>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#7C6CF0] hover:bg-[#6c5ce7] text-white text-sm font-semibold transition-colors shadow-lg shadow-[#7C6CF0]/25"
              >
                Start 7-Day Free Trial
              </a>
            </GlowCard>

            {/* FitTier Unlimited */}
            <GlowCard
              className="rounded-2xl bg-[#18181E] border border-[#262630] p-7"
              glowColor="rgba(247, 213, 74, 0.14)"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-lg font-bold text-[#F5F5F8]">
                    FitTier Unlimited
                  </span>
                  <span className="text-xs font-mono text-[#7C6CF0]">Power users</span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-bold tabular-nums text-[#F5F5F8]">
                    $24.99
                  </span>
                  <span className="text-sm text-[#9A9AA8]">/ month</span>
                </div>
                <p className="mt-1.5 text-xs text-[#9A9AA8]">
                  Highest AI limits for daily heavy loggers
                </p>

                <ul className="mt-6 pt-5 border-t border-[#262630] space-y-2.5 text-sm text-[#9A9AA8]">
                  <li>Everything in FitTier Pro</li>
                  <li>Highest AI meal &amp; workout estimate limits</li>
                  <li>Extended Tier Coach AI coaching sessions</li>
                  <li>Priority access to new AI scoring upgrades</li>
                </ul>
              </div>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#0D0D11] border border-[#262630] hover:border-[#7C6CF0] text-[#F5F5F8] text-sm font-semibold transition-colors"
              >
                Get FitTier Unlimited
              </a>
            </GlowCard>
          </div>

          <p className="mt-6 text-xs text-[#9A9AA8] max-w-3xl leading-relaxed">
            Subscriptions auto-renew unless turned off at least 24 hours before the end of the current period. Payment is charged to your Apple ID. Manage or cancel anytime in your Apple ID account settings.
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-16 md:py-24 border-b border-[#24242D]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-[#7C6CF0]">FAQ</div>
            <h2
              className="mt-2 font-display font-bold tracking-tight text-[#F5F5F8]"
              style={{ fontSize: 'clamp(1.85rem, 3.3vw, 2.6rem)', textWrap: 'balance' }}
            >
              Common questions
            </h2>
          </div>

          <div className="mt-8 max-w-3xl divide-y divide-[#24242D] border-t border-b border-[#24242D]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C6CF0] rounded-sm"
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-[#F5F5F8]">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9A9AA8] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#7C6CF0]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="pb-5 text-sm text-[#9A9AA8] leading-relaxed max-w-[66ch]">
                          {item.a}
                          {item.link && (
                            <>
                              {' '}
                              <a
                                href={item.link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#7C6CF0] hover:underline font-medium"
                              >
                                {item.link.label}
                              </a>
                              .
                            </>
                          )}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-16 md:py-24 border-b border-[#24242D]">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <FitTierAppIcon size="lg" />
          </div>
          <h2
            className="font-display font-extrabold tracking-tight text-[#F5F5F8]"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', textWrap: 'balance' }}
          >
            Get your tier.
          </h2>
          <p className="mt-3 text-base text-[#9A9AA8] max-w-md mx-auto">
            Stop larping. Start leveling. Free to download on iPhone in the US App Store.
          </p>

          <div className="mt-8 flex justify-center">
            <AppStoreBadge size="lg" />
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="pt-10 pb-24 md:pb-12">
        <div className="max-w-[1140px] mx-auto px-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9A9AA8]">
            <div className="flex items-center gap-3">
              <span className="font-display text-base font-bold text-[#F5F5F8]">FitTier</span>
              <span aria-hidden="true">·</span>
              <span>&copy; 2026 FitTier</span>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href={PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5F5F8] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href={TERMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5F5F8] transition-colors"
              >
                Terms of Use (EULA)
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="hover:text-[#F5F5F8] transition-colors"
              >
                {SUPPORT_EMAIL}
              </a>
              {onOpenKit && (
                <button
                  type="button"
                  onClick={onOpenKit}
                  className="text-[#7C6CF0] hover:underline font-medium transition-colors cursor-pointer"
                >
                  App Store Screenshots (1290×2796)
                </button>
              )}
            </div>
          </div>

          <p className="text-[11px] text-[#8E8E98] leading-relaxed max-w-3xl">
            FitTier is a habit and fitness tracker, not medical advice.
          </p>
        </div>
      </footer>

      {/* Sticky Mobile App Store CTA Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-[#262630] bg-[#0D0D11]/95 backdrop-blur-md px-4 py-2.5">
        <AppStoreBadge size="sm" fullWidth />
      </div>
    </>
  );
};
