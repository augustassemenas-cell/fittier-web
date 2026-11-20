import React, { useMemo, useState } from 'react';
import { Flame, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { TIER_SCALE } from '../data/fittierData';
import { GlowCard } from './GlowCard';

interface ChatMessage {
  role: 'user' | 'coach';
  text: string;
}

const QUICK_PROMPTS = [
  'How do I turn a C day into an S?',
  'Missed the gym today, what now?',
  'Best late-night high-protein fix?',
];

function getCoachReply(question: string, simScore: number, simTier: string): string {
  const q = question.toLowerCase();
  if (q.includes('missed') || q.includes('gym') || q.includes('skip')) {
    return `Even without a lift, you can still hold a solid B or C today. Nail your protein, hit 8 hours of sleep, and take a 20-minute walk. One missed gym day never breaks a streak—ghosting your check-in does.`;
  }
  if (q.includes('protein') || q.includes('food') || q.includes('late')) {
    return `Keep it simple: 200g Greek yogurt with berries or a double whey shake gets you ~40g protein in two minutes without wrecking your sleep.`;
  }
  if (q.includes('turn') || q.includes('s') || q.includes('score')) {
    return `Right now your simulated day sits at ${simScore}/100 (${simTier} Tier). Fastest jump to S: lock in 7.5–8h sleep tonight, hit your calorie target within ±150 kcal, and check off your supplement stack.`;
  }
  return `You're sitting at ${simScore}/100 (${simTier} Tier). Stay honest with your check-in, keep the streak flame alive, and stack one clean win tomorrow morning.`;
}

export const LiveTierSimulator: React.FC = () => {
  const [foodOnTarget, setFoodOnTarget] = useState<'perfect' | 'close' | 'off'>('perfect');
  const [workoutDone, setWorkoutDone] = useState<boolean>(true);
  const [sleepHours, setSleepHours] = useState<number>(8);
  const [supplementsDone, setSupplementsDone] = useState<boolean>(true);

  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'coach',
      text: 'Test how FitTier grades your day on the left, or ask me how to level up tonight.',
    },
  ]);

  const sim = useMemo(() => {
    const foodPts = foodOnTarget === 'perfect' ? 32 : foodOnTarget === 'close' ? 23 : 11;
    const gymPts = workoutDone ? 28 : 8;
    const sleepPts = sleepHours >= 7.5 ? 25 : sleepHours >= 6.5 ? 18 : 9;
    const suppPts = supplementsDone ? 10 : 3;
    const moodBonus = sleepHours >= 7 && workoutDone ? 5 : 2;

    const score = Math.min(100, foodPts + gymPts + sleepPts + suppPts + moodBonus);
    const tierObj =
      score >= 90
        ? TIER_SCALE[0]
        : score >= 80
        ? TIER_SCALE[1]
        : score >= 70
        ? TIER_SCALE[2]
        : score >= 60
        ? TIER_SCALE[3]
        : score >= 50
        ? TIER_SCALE[4]
        : score >= 40
        ? TIER_SCALE[5]
        : TIER_SCALE[6];

    const lines = [
      foodOnTarget === 'perfect'
        ? 'Calories: S – dialed right on target'
        : foodOnTarget === 'close'
        ? 'Calories: B – close, slightly under protein'
        : 'Calories: D – wide swing from daily plan',
      workoutDone
        ? 'Workout: S – session completed, streak protected'
        : 'Workout: D – rest or skipped day logged',
      sleepHours >= 7.5
        ? `Sleep: S – solid ${sleepHours.toFixed(1)} hours`
        : sleepHours >= 6.5
        ? `Sleep: B – ${sleepHours.toFixed(1)} hours, decent recovery`
        : `Sleep: E – only ${sleepHours.toFixed(1)} hours`,
    ];

    return { score, tierObj, lines };
  }, [foodOnTarget, workoutDone, sleepHours, supplementsDone]);

  const sendPrompt = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    const reply = getCoachReply(clean, sim.score, sim.tierObj.tier);
    setMessages((prev) => [...prev.slice(-3), { role: 'user', text: clean }, { role: 'coach', text: reply }]);
    setChatInput('');
  };

  return (
    <section className="py-16 md:py-24 border-b border-[#24242D]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-medium text-[#7C6CF0]">Interactive preview</div>
          <h2
            className="mt-2 font-display font-bold tracking-tight text-[#F5F5F8]"
            style={{ fontSize: 'clamp(1.85rem, 3.3vw, 2.6rem)', textWrap: 'balance' }}
          >
            Test the tier engine &amp; Tier Coach live.
          </h2>
          <p className="mt-2.5 text-sm md:text-base text-[#9A9AA8]">
            Toggle today&apos;s habits to see how FitTier grades your day in real time.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Live Day Simulator */}
          <GlowCard
            className="lg:col-span-7 rounded-2xl bg-[#18181E] border border-[#262630] border-t-white/[0.08] p-6 md:p-7"
            glowColor={sim.tierObj.bgTint}
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center h-full">
              {/* Controls */}
              <div className="sm:col-span-7 space-y-5">
                <div>
                  <div className="text-xs font-medium text-[#9A9AA8] mb-2">Food &amp; macros</div>
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[#0D0D11] border border-[#262630]">
                    {(
                      [
                        { id: 'perfect', label: 'Locked in' },
                        { id: 'close', label: 'Close' },
                        { id: 'off', label: 'Off target' },
                      ] as const
                    ).map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFoodOnTarget(opt.id)}
                        className={`py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                          foodOnTarget === opt.id
                            ? 'bg-[#7C6CF0] text-white'
                            : 'text-[#9A9AA8] hover:text-[#F5F5F8]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs font-medium text-[#9A9AA8] mb-2">Gym / workout</div>
                    <button
                      type="button"
                      onClick={() => setWorkoutDone((v) => !v)}
                      className={`w-full py-2 px-3 rounded-xl border text-xs font-semibold transition-colors ${
                        workoutDone
                          ? 'bg-[#5DB65C]/15 border-[#5DB65C]/45 text-[#5DB65C]'
                          : 'bg-[#0D0D11] border-[#262630] text-[#9A9AA8]'
                      }`}
                    >
                      {workoutDone ? 'Trained today' : 'Skipped / Rest'}
                    </button>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-[#9A9AA8] mb-2">Supplements</div>
                    <button
                      type="button"
                      onClick={() => setSupplementsDone((v) => !v)}
                      className={`w-full py-2 px-3 rounded-xl border text-xs font-semibold transition-colors ${
                        supplementsDone
                          ? 'bg-[#7C6CF0]/15 border-[#7C6CF0]/50 text-[#F5F5F8]'
                          : 'bg-[#0D0D11] border-[#262630] text-[#9A9AA8]'
                      }`}
                    >
                      {supplementsDone ? 'Stack taken' : 'Missed stack'}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <label htmlFor="sim-sleep" className="font-medium text-[#9A9AA8]">
                      Sleep duration
                    </label>
                    <span className="font-mono tabular-nums text-[#F5F5F8]">
                      {sleepHours.toFixed(1)} hrs
                    </span>
                  </div>
                  <input
                    id="sim-sleep"
                    type="range"
                    min={4.5}
                    max={9.0}
                    step={0.5}
                    value={sleepHours}
                    onChange={(e) => setSleepHours(Number(e.target.value))}
                    className="w-full accent-[#7C6CF0] cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Result Output */}
              <div
                className="sm:col-span-5 rounded-2xl bg-[#0D0D11] border p-5 text-center flex flex-col justify-between h-full"
                style={{ borderColor: sim.tierObj.borderTint }}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#9A9AA8]">
                    <span>Simulated tier</span>
                    {(sim.tierObj.tier === 'S' || sim.tierObj.tier === 'A') && (
                      <span className="inline-flex items-center gap-1 font-mono text-[#F7CE78]">
                        <Flame className="w-3 h-3 animate-flame-subtle" aria-hidden="true" />
                        Streak +1
                      </span>
                    )}
                  </div>

                  <motion.div
                    key={sim.tierObj.tier}
                    initial={{ scale: 0.9, opacity: 0.6 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-3 font-display text-6xl font-extrabold leading-none"
                    style={{
                      color: sim.tierObj.hex,
                      filter:
                        sim.tierObj.tier === 'S'
                          ? 'drop-shadow(0 0 20px rgba(247, 213, 74, 0.42))'
                          : undefined,
                    }}
                  >
                    {sim.tierObj.tier}
                  </motion.div>

                  <div className="mt-2 font-mono text-lg font-bold tabular-nums text-[#F5F5F8]">
                    {sim.score} <span className="text-xs font-normal text-[#9A9AA8]">/ 100</span>
                  </div>
                  <div className="mt-0.5 text-xs font-semibold" style={{ color: sim.tierObj.hex }}>
                    {sim.tierObj.title}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#262630] space-y-1.5 text-left text-[11px] text-[#9A9AA8]">
                  {sim.lines.map((l) => (
                    <div key={l} className="truncate">
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Right: Interactive Tier Coach AI Chat */}
          <GlowCard className="lg:col-span-5 rounded-2xl bg-[#18181E] border border-[#262630] border-t-white/[0.08] p-6">
            <div>
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-[#F5F5F8]">Tier Coach</h3>
                <span className="text-xs font-mono text-[#7C6CF0]">AI Chat Preview</span>
              </div>

              <div className="mt-4 space-y-2.5 min-h-[155px]">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      m.role === 'user'
                        ? 'ml-8 bg-[#7C6CF0] text-white'
                        : 'mr-4 bg-[#0D0D11] border border-[#262630] text-[#F5F5F8]'
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#262630] space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {QUICK_PROMPTS.map((qp) => (
                  <button
                    key={qp}
                    type="button"
                    onClick={() => sendPrompt(qp)}
                    className="px-2.5 py-1 rounded-lg bg-[#0D0D11] border border-[#262630] hover:border-[#7C6CF0]/60 text-[11px] text-[#9A9AA8] hover:text-[#F5F5F8] transition-colors"
                  >
                    {qp}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendPrompt(chatInput);
                }}
                className="flex gap-2"
              >
                <label htmlFor="coach-chat-input" className="sr-only">
                  Ask Tier Coach
                </label>
                <input
                  id="coach-chat-input"
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask Tier Coach..."
                  className="flex-1 rounded-xl bg-[#0D0D11] border border-[#262630] px-3 py-2 text-xs text-[#F5F5F8] focus:outline-none focus:ring-2 focus:ring-[#7C6CF0]"
                />
                <button
                  type="submit"
                  aria-label="Send message to Tier Coach"
                  className="px-3.5 py-2 rounded-xl bg-[#7C6CF0] hover:bg-[#6c5ce7] text-white transition-colors shrink-0"
                >
                  <Send className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </form>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};
