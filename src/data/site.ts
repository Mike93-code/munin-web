// All landing-page copy, in one place, per language. English is the site
// default (served at "/"); Swedish is served at "/sv".

// The App Store link does not exist until launch. Set this to the real URL then
// and every "coming soon" pill becomes a live download button automatically.
export const appStoreUrl: string | null = null;

export type FeatureVariant = 'lines' | 'streak' | 'calendar' | 'privacy';

export interface Feature {
  variant: FeatureVariant;
  /** Small screen name shown inside the phone frame. */
  screenName: string;
  title: string;
  body: string;
  /** Optional caption drawn inside the phone motif (streak / privacy). */
  note?: string;
}

export interface LandingContent {
  lang: 'en' | 'sv';
  meta: { title: string; description: string };
  kicker: string;
  name: string;
  tagline: string;
  /** Shown when appStoreUrl is not set yet. */
  storeSoon: string;
  /** Shown (as a real button) once appStoreUrl is set. */
  storeCta: string;
  chips: string[];
  features: Feature[];
  /** Link to this same page in the other language. */
  langSwitchHref: string;
  langSwitchLabel: string;
  /** Footer privacy link, in this language. */
  privacyHref: string;
  privacyLabel: string;
}

export const landingEn: LandingContent = {
  lang: 'en',
  meta: {
    title: 'Munin — a private gratitude journal for iPhone',
    description:
      'Munin is a private, minimalist daily gratitude journal for iPhone. No account, no cloud — your notes stay on your device.',
  },
  kicker: 'Munin: Gratitude Journal',
  name: 'Munin',
  tagline:
    'Five lines a day. No account. No cloud. Your gratitude stays on your phone.',
  storeSoon: 'Coming soon to the App Store',
  storeCta: 'Download on the App Store',
  chips: ['No account', 'No cloud', 'Works offline'],
  features: [
    {
      variant: 'lines',
      screenName: 'Today',
      title: 'Five lines a day',
      body: 'A calm, focused space — write five things you are grateful for. No feeds, no clutter, no endless scrolling. Just today.',
    },
    {
      variant: 'streak',
      screenName: 'Streak',
      title: 'Build a gentle habit',
      body: 'Come back each evening and watch your streak grow, one day at a time. An optional reminder gives you a quiet nudge — never a nag.',
      note: 'day streak',
    },
    {
      variant: 'calendar',
      screenName: 'Calendar',
      title: 'Look back anytime',
      body: 'Every day is saved to your calendar. Scroll back through months and years and see how much there was to be grateful for.',
    },
    {
      variant: 'privacy',
      screenName: 'Private',
      title: '100% private',
      body: 'No account, no cloud, no tracking. Your notes live on your phone and nowhere else — that is the whole idea.',
      note: 'On your device',
    },
  ],
  langSwitchHref: '/sv',
  langSwitchLabel: 'Svenska',
  privacyHref: '/privacy',
  privacyLabel: 'Privacy Policy',
};

export const landingSv: LandingContent = {
  lang: 'sv',
  meta: {
    title: 'Munin — en privat tacksamhetsdagbok för iPhone',
    description:
      'Munin är en privat, minimalistisk daglig tacksamhetsdagbok för iPhone. Inget konto, inget moln — dina anteckningar stannar på din enhet.',
  },
  kicker: 'Munin: Gratitude Journal',
  name: 'Munin',
  tagline:
    'Fem rader om dagen. Inget konto. Inget moln. Din tacksamhet stannar i telefonen.',
  storeSoon: 'Snart i App Store',
  storeCta: 'Ladda ner i App Store',
  chips: ['Inget konto', 'Inget moln', 'Fungerar offline'],
  features: [
    {
      variant: 'lines',
      screenName: 'Idag',
      title: 'Fem rader om dagen',
      body: 'Ett lugnt, fokuserat utrymme — skriv fem saker du är tacksam för. Inga flöden, inget brus, inget oändligt scrollande. Bara idag.',
    },
    {
      variant: 'streak',
      screenName: 'Streak',
      title: 'Bygg en mild vana',
      body: 'Kom tillbaka varje kväll och se din streak växa, en dag i taget. En valfri påminnelse ger dig en tyst knuff — aldrig tjat.',
      note: 'dagar i rad',
    },
    {
      variant: 'calendar',
      screenName: 'Kalender',
      title: 'Blicka tillbaka när du vill',
      body: 'Varje dag sparas i din kalender. Bläddra tillbaka genom månader och år och se hur mycket det fanns att vara tacksam för.',
    },
    {
      variant: 'privacy',
      screenName: 'Privat',
      title: '100% privat',
      body: 'Inget konto, inget moln, ingen spårning. Dina anteckningar finns i din telefon och ingen annanstans — det är hela poängen.',
      note: 'På din enhet',
    },
  ],
  langSwitchHref: '/',
  langSwitchLabel: 'English',
  privacyHref: '/integritetspolicy',
  privacyLabel: 'Integritetspolicy',
};
