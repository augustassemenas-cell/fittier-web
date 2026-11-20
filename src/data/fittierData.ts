export type TierLetter = 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface TierScaleItem {
  tier: TierLetter;
  range: string;
  title: string;
  oneLiner: string;
  hex: string;
  bgTint: string;
  borderTint: string;
  sampleScore: number;
  sampleFeedback: string[];
  coachTip: string;
}

export const TIER_SCALE: TierScaleItem[] = [
  {
    tier: 'S',
    range: '90–100',
    title: 'Locked in',
    oneLiner: 'Hit your food, trained, slept well, took your stack. Zero shortcuts.',
    hex: '#F7D54A',
    bgTint: 'rgba(247, 213, 74, 0.12)',
    borderTint: 'rgba(247, 213, 74, 0.42)',
    sampleScore: 95,
    sampleFeedback: [
      'Sleep: S – perfect 8 hours',
      'Workout: S – 55 min strength training',
      'Mood: S – locked in',
      'Calories: A – right on target at 2160 kcal',
    ],
    coachTip: 'Outstanding day! Keep bedtime steady tonight so tomorrow starts from the same baseline.',
  },
  {
    tier: 'A',
    range: '80–89',
    title: 'Strong execution',
    oneLiner: 'Almost everything dialed. One minor miss, streak stays hot.',
    hex: '#5DB65C',
    bgTint: 'rgba(93, 182, 92, 0.12)',
    borderTint: 'rgba(93, 182, 92, 0.4)',
    sampleScore: 84,
    sampleFeedback: [
      'Workout: S – 45 min cardio & mobility',
      'Calories: A – 155g protein, right near target',
      'Sleep: B – 6.8 hours, decent energy',
    ],
    coachTip: 'Training and protein did the heavy lifting. Getting to bed 30 minutes earlier bumps this to S.',
  },
  {
    tier: 'B',
    range: '70–79',
    title: 'Solid baseline',
    oneLiner: 'Showed up and got the main work done, even if macros or sleep slipped.',
    hex: '#4DA3FF',
    bgTint: 'rgba(77, 163, 255, 0.12)',
    borderTint: 'rgba(77, 163, 255, 0.38)',
    sampleScore: 74,
    sampleFeedback: [
      'Workout: A – 40 min upper session',
      'Calories: C – slightly under protein target',
      'Sleep: B – 7.0 hours',
    ],
    coachTip: 'Good gym session. Adding one quick Greek yogurt or shake earlier in the day locks in an A.',
  },
  {
    tier: 'C',
    range: '60–69',
    title: 'Mid day',
    oneLiner: 'Half locked in, half coasting. Keeps you honest before habits drift.',
    hex: '#E5B842',
    bgTint: 'rgba(229, 184, 66, 0.12)',
    borderTint: 'rgba(229, 184, 66, 0.36)',
    sampleScore: 63,
    sampleFeedback: [
      'Calories: B – within range, low protein',
      'Workout: D – active rest walk only',
      'Mood: C – high afternoon fatigue',
    ],
    coachTip: 'Busy days happen. Pick just two wins tomorrow: hit your morning protein and 20 minutes of movement.',
  },
  {
    tier: 'D',
    range: '50–59',
    title: 'Running low',
    oneLiner: 'Short sleep or missed training pulled the score down. Time to regroup.',
    hex: '#F0883E',
    bgTint: 'rgba(240, 136, 62, 0.12)',
    borderTint: 'rgba(240, 136, 62, 0.36)',
    sampleScore: 54,
    sampleFeedback: [
      'Sleep: D – 5.5 hours, low energy',
      'Calories: C – skipped lunch, late dinner',
      'Mood: C – 2/5 readiness',
    ],
    coachTip: 'Don’t try to force a PR tonight. Hydrate, eat a solid dinner, and prioritize 8 hours of sleep.',
  },
  {
    tier: 'E',
    range: '40–49',
    title: 'Off pace',
    oneLiner: 'A chaotic day—but you still logged it instead of ghosting.',
    hex: '#E5534B',
    bgTint: 'rgba(229, 83, 75, 0.12)',
    borderTint: 'rgba(229, 83, 75, 0.36)',
    sampleScore: 44,
    sampleFeedback: [
      'Sleep: E – 5 hours fragmented',
      'Workout: F – skipped session',
      'Supplements: B – took magnesium before bed',
    ],
    coachTip: 'Logging a rough day takes discipline too. Reset with a high-protein breakfast and a short walk.',
  },
  {
    tier: 'F',
    range: '0–39',
    title: 'Full reset',
    oneLiner: 'Zero guilt, zero shame—just an honest baseline to bounce back from.',
    hex: '#8E8E98',
    bgTint: 'rgba(142, 142, 152, 0.12)',
    borderTint: 'rgba(142, 142, 152, 0.35)',
    sampleScore: 31,
    sampleFeedback: [
      'Sleep: F – 4.5 hours',
      'Calories: E – missed targets across meals',
      'Workout: F – no session logged',
    ],
    coachTip: 'Every game has a bad round. One good night of sleep and one logged meal gets you right back in.',
  },
];

export interface FoodEstimate {
  text: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  note: string;
}

export const FOOD_EXAMPLES: FoodEstimate[] = [
  {
    text: 'chicken, rice, salad',
    calories: 560,
    protein: 46,
    carbs: 58,
    fats: 14,
    note: 'Calories: A – clean lean protein and complex carbs.',
  },
  {
    text: 'beef, rice, salad',
    calories: 640,
    protein: 42,
    carbs: 54,
    fats: 24,
    note: 'Solid iron & protein boost for post-lift recovery.',
  },
  {
    text: 'double whey shake and banana',
    calories: 345,
    protein: 50,
    carbs: 31,
    fats: 2,
    note: 'Fast 50g protein hit—pushes Nutrition toward S Tier.',
  },
];

interface FoodKeywordEntry {
  keys: string[];
  cal: number;
  p: number;
  c: number;
  f: number;
}

const FOOD_DB: FoodKeywordEntry[] = [
  { keys: ['chicken', 'vistiena', 'vištiena', 'turkey', 'kalakutiena'], cal: 220, p: 36, c: 0, f: 6 },
  { keys: ['salmon', 'lasisa', 'lašiša'], cal: 290, p: 28, c: 0, f: 18 },
  { keys: ['steak', 'beef', 'jautiena', 'pork', 'kiauliena'], cal: 310, p: 32, c: 0, f: 19 },
  { keys: ['tuna', 'tunas', 'fish', 'zuvis', 'žuvis', 'shrimp', 'crevet'], cal: 165, p: 32, c: 1, f: 3 },
  { keys: ['egg', 'eggs', 'kiausin', 'kiaušin'], cal: 78, p: 6.5, c: 0.6, f: 5.5 },
  { keys: ['rice', 'ryz', 'ryž'], cal: 205, p: 4, c: 45, f: 0.5 },
  { keys: ['pasta', 'makaron', 'spaghetti', 'noodles'], cal: 240, p: 8, c: 47, f: 1.5 },
  { keys: ['potato', 'bulv', 'fries'], cal: 220, p: 4, c: 40, f: 5 },
  { keys: ['oat', 'aviž', 'aviz', 'porridge', 'kose', 'košė'], cal: 190, p: 6, c: 34, f: 3.5 },
  { keys: ['toast', 'bread', 'duon', 'bagel', 'bun'], cal: 155, p: 5, c: 28, f: 2 },
  { keys: ['sourdough'], cal: 170, p: 6, c: 32, f: 1.5 },
  { keys: ['avocado', 'avokad'], cal: 160, p: 2, c: 9, f: 15 },
  { keys: ['peanut', 'almond', 'nut', 'riesut', 'riešut'], cal: 180, p: 6, c: 6, f: 15 },
  { keys: ['cheese', 'suris', 'sūris', 'mozzarella', 'cheddar'], cal: 120, p: 8, c: 1, f: 9 },
  { keys: ['yogurt', 'jogurt', 'varsk', 'varšk', 'cottage', 'skyr'], cal: 145, p: 18, c: 9, f: 3 },
  { keys: ['whey', 'protein', 'shake', 'kokteil'], cal: 135, p: 26, c: 4, f: 1.5 },
  { keys: ['banana', 'banan'], cal: 105, p: 1.3, c: 27, f: 0.4 },
  { keys: ['apple', 'obuol', 'berries', 'uog', 'fruit', 'vais'], cal: 80, p: 1, c: 20, f: 0.3 },
  { keys: ['salad', 'salot', 'broccoli', 'brokol', 'greens', 'veggie', 'darzov', 'daržov'], cal: 55, p: 3, c: 9, f: 1 },
  { keys: ['burger', 'cheeseburger'], cal: 520, p: 28, c: 42, f: 26 },
  { keys: ['pizza', 'pica'], cal: 580, p: 24, c: 66, f: 24 },
  { keys: ['kebab', 'shawarma', 'burrito', 'wrap', 'taco'], cal: 610, p: 32, c: 58, f: 26 },
  { keys: ['sushi', 'roll'], cal: 380, p: 16, c: 62, f: 7 },
  { keys: ['soup', 'sriuba'], cal: 210, p: 11, c: 22, f: 8 },
  { keys: ['milk', 'pien', 'latte', 'cappuccino'], cal: 110, p: 6, c: 10, f: 4.5 },
  { keys: ['oil', 'butter', 'sviest', 'aliej'], cal: 115, p: 0, c: 0, f: 13 },
  { keys: ['bar', 'baton'], cal: 220, p: 18, c: 22, f: 7 },
  { keys: ['pancake', 'blyn', 'waffle'], cal: 310, p: 9, c: 46, f: 10 },
];

export function estimateFoodFromText(input: string): FoodEstimate {
  const clean = input.trim();
  const lower = clean.toLowerCase();

  const preset = FOOD_EXAMPLES.find((ex) => ex.text.toLowerCase() === lower);
  if (preset) return preset;

  let calories = 0;
  let protein = 0;
  let carbs = 0;
  let fats = 0;
  let matchedCount = 0;

  const parts = lower
    .split(/[,+&]|\band\b|\bir\b|\bwith\b|\bsu\b/)
    .map((s) => s.trim())
    .filter(Boolean);

  for (const part of parts) {
    const numMatch = part.match(/(\d+(?:\.\d+)?)\s*(g|ml|x)?/);
    let multiplier = 1;
    if (numMatch) {
      const val = parseFloat(numMatch[1]);
      const unit = numMatch[2];
      if (unit === 'g' || unit === 'ml') {
        multiplier = Math.max(0.3, Math.min(3.5, val / 150));
      } else if (val > 0 && val <= 8) {
        multiplier = val;
      }
    } else if (part.includes('double') || part.includes('2x') || part.includes('large')) {
      multiplier = 1.8;
    } else if (part.includes('half') || part.includes('pus')) {
      multiplier = 0.5;
    }

    for (const item of FOOD_DB) {
      if (item.keys.some((k) => part.includes(k))) {
        const isCountable = item.keys[0] === 'egg' || item.keys[0] === 'bar' || item.keys[0] === 'burger';
        const effectiveMult = numMatch && !numMatch[2] && !isCountable ? Math.min(2, multiplier) : multiplier;
        calories += item.cal * effectiveMult;
        protein += item.p * effectiveMult;
        carbs += item.c * effectiveMult;
        fats += item.f * effectiveMult;
        matchedCount++;
        break;
      }
    }
  }

  if (matchedCount === 0) {
    const seed = clean.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    calories = 340 + (seed % 26) * 15;
    protein = 18 + (seed % 20);
    carbs = 32 + (seed % 30);
    fats = 10 + (seed % 14);
  }

  const calR = Math.round(calories / 5) * 5;
  const pR = Math.round(protein);
  const cR = Math.round(carbs);
  const fR = Math.round(fats);

  const qualityNote =
    pR >= 35
      ? `Strong protein hit (${pR}g) — great for your daily tier.`
      : calR >= 650
      ? `Hearty meal (~${calR} kcal) — balances cleanly around training.`
      : `Estimated from "${clean}" — ready to log in 1 tap.`;

  return {
    text: clean,
    calories: calR,
    protein: pR,
    carbs: cR,
    fats: fR,
    note: qualityNote,
  };
}

export interface FaqItem {
  q: string;
  a: string;
  link?: {
    label: string;
    href: string;
  };
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Is it free?',
    a: 'Free to download; AI scoring and coaching are part of the Pro, Pro Annual and Unlimited subscriptions.',
  },
  {
    q: 'What devices?',
    a: 'iPhone, iOS 15 or later. Available on the US App Store.',
  },
  {
    q: 'How does the AI grade my day?',
    a: 'It looks at your food, training, sleep and mood together and scores the day 0–100, then maps it to a tier with a short explanation.',
  },
  {
    q: 'Is my data private?',
    a: 'Your logs and check-ins stay private to your account and are never sold. You can review full details in our',
    link: {
      label: 'Privacy Policy',
      href: 'https://fittier.app/privacy.html',
    },
  },
  {
    q: 'How do I cancel?',
    a: 'Anytime in your Apple ID subscription settings.',
  },
];
