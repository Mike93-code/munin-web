// All landing-page copy, in one place, per language. English is the site
// default (served at "/"); Swedish is served at "/sv".

// The App Store link does not exist until launch. Set this to the real URL then
// and every "coming soon" pill becomes a live download button automatically.
export const appStoreUrl: string | null = null;

export type FeatureVariant = 'lines' | 'streak' | 'calendar' | 'privacy';

/**
 * Text shown inside the phone mockup for each feature. These are faithful
 * mockups of the app's real screens (in the app's default warm "journal"
 * theme), not photographic screenshots — for the App Store listing itself,
 * real device screenshots are still captured separately.
 */
export interface FeatureScreen {
  /** Screen title (e.g. "Idag" / "Today"). */
  title: string;
  /** lines: header date line. */
  date?: string;
  /** lines: the five gratitude rows (freeform, in this language). */
  entries?: string[];
  /** lines: gold footnote shown when all five are filled. */
  footnote?: string;
  /** streak: big number + its unit + the "longest" line. */
  streakNumber?: string;
  streakUnit?: string;
  streakLongest?: string;
  /** calendar: month label + weekday initials. */
  month?: string;
  weekdays?: string[];
  /** privacy: reassurance checklist. */
  bullets?: string[];
}

export interface Feature {
  variant: FeatureVariant;
  title: string;
  body: string;
  screen: FeatureScreen;
}

/** The "Why Munin?" name-story section. */
export interface SiteStory {
  heading: string;
  paragraphs: string[];
  /** The app's own evening reminder line, shown as a pull-quote. */
  reminderQuote: string;
}

/** One question/answer in the FAQ. */
export interface FaqItem {
  q: string;
  a: string;
}

export interface LandingContent {
  lang: 'en' | 'sv';
  meta: { title: string; description: string };
  kicker: string;
  name: string;
  tagline: string;
  storeSoon: string;
  storeCta: string;
  chips: string[];
  features: Feature[];
  story: SiteStory;
  faqHeading: string;
  faq: FaqItem[];
  langSwitchHref: string;
  langSwitchLabel: string;
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
      title: 'Five lines a day',
      body: 'A calm, focused space — write five things you are grateful for. No feeds, no clutter, no endless scrolling. Just today.',
      screen: {
        title: 'Today',
        date: 'Tuesday 12 Sept',
        entries: [
          'Coffee on the balcony in the morning sun',
          'Mum called for no reason',
          'My back felt strong on the run',
          'The smell of rain on the way home',
          'Dinner with friends tonight',
        ],
        footnote: 'Five for five — what a lovely day.',
      },
    },
    {
      variant: 'streak',
      title: 'Build a gentle habit',
      body: 'Come back each evening and watch your streak grow, one day at a time. An optional reminder gives you a quiet nudge — never a nag.',
      screen: {
        title: 'Current streak',
        streakNumber: '12',
        streakUnit: 'days in a row',
        streakLongest: 'Longest streak · 21 days',
      },
    },
    {
      variant: 'calendar',
      title: 'Look back anytime',
      body: 'Every day is saved to your calendar. Scroll back through months and years and see how much there was to be grateful for.',
      screen: {
        title: 'Calendar',
        month: 'September',
        weekdays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      },
    },
    {
      variant: 'privacy',
      title: '100% private',
      body: 'No account, no cloud, no tracking. Your notes live on your phone and nowhere else — that is the whole idea.',
      screen: {
        title: 'Everything stays private',
        bullets: ['No account', 'No cloud storage', 'No tracking'],
      },
    },
  ],
  story: {
    heading: "Why ‘Munin’?",
    paragraphs: [
      'In Norse mythology, Odin kept two ravens. One was Huginn — “thought”. The other was Muninn — “memory”. Every evening Muninn returned from flying over the world and told Odin what it had seen that day.',
      'That is the quiet ritual this app is built around: at the end of each day you look back and keep what was worth remembering — five small things you are grateful for. It is named after the raven of memory because that is exactly what it helps you hold on to.',
      'The idea is old. Norse wisdom poetry like the Hávamál celebrates the simple things — warmth, health, a day lived well — the very things gratitude asks us to notice. Munin brings that thousand-year-old habit to your phone, and keeps it entirely private.',
    ],
    reminderQuote: 'Munin has returned — what did you see today?',
  },
  faqHeading: 'Common questions',
  faq: [
    {
      q: 'Is Munin free?',
      a: 'Yes. Munin is free to download and use — no subscription and no ads.',
    },
    {
      q: 'Do I need an account?',
      a: 'No. There is no sign-up and no email required. You open the app and start writing.',
    },
    {
      q: 'Where are my notes stored?',
      a: 'Only on your iPhone. Munin has no server and never receives what you write — nothing is uploaded to a cloud and nothing is tracked.',
    },
    {
      q: 'Does it work offline?',
      a: 'Completely. Munin needs no internet connection — everything happens on your device.',
    },
    {
      q: 'What happens if I get a new phone?',
      a: 'Your notes are included in your normal iPhone backup (iCloud or a computer), so they come with you when you switch — but even then they never pass through us.',
    },
    {
      q: 'What do I write each day?',
      a: 'Five short lines about things you are grateful for. Gentle prompts help you start, and everything saves automatically as you type.',
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
      title: 'Fem rader om dagen',
      body: 'Ett lugnt, fokuserat utrymme — skriv fem saker du är tacksam för. Inga flöden, inget brus, inget oändligt scrollande. Bara idag.',
      screen: {
        title: 'Idag',
        date: 'Tisdag 12 sep',
        entries: [
          'Kaffet på balkongen i morgonsolen',
          'Mamma ringde utan anledning',
          'Ryggen kändes stark på löprundan',
          'Doften av regn på väg hem',
          'Middag med vänner ikväll',
        ],
        footnote: 'Fem för fem, vilken fin dag.',
      },
    },
    {
      variant: 'streak',
      title: 'Bygg en mild vana',
      body: 'Kom tillbaka varje kväll och se din streak växa, en dag i taget. En valfri påminnelse ger dig en tyst knuff — aldrig tjat.',
      screen: {
        title: 'Nuvarande streak',
        streakNumber: '12',
        streakUnit: 'dagar i rad',
        streakLongest: 'Längsta streak · 21 dagar',
      },
    },
    {
      variant: 'calendar',
      title: 'Blicka tillbaka när du vill',
      body: 'Varje dag sparas i din kalender. Bläddra tillbaka genom månader och år och se hur mycket det fanns att vara tacksam för.',
      screen: {
        title: 'Kalender',
        month: 'September',
        weekdays: ['M', 'T', 'O', 'T', 'F', 'L', 'S'],
      },
    },
    {
      variant: 'privacy',
      title: '100% privat',
      body: 'Inget konto, inget moln, ingen spårning. Dina anteckningar finns i din telefon och ingen annanstans — det är hela poängen.',
      screen: {
        title: 'Allt stannar privat',
        bullets: ['Inget konto', 'Ingen molnlagring', 'Ingen spårning'],
      },
    },
  ],
  story: {
    heading: 'Varför ”Munin”?',
    paragraphs: [
      'I nordisk mytologi hade Oden två korpar. Den ena var Hugin — ”tanke”. Den andra var Munin — ”minne”. Varje kväll återvände Munin från sin flykt över världen och berättade för Oden vad den hade sett under dagen.',
      'Det är just den stilla ritualen appen bygger på: i slutet av varje dag blickar du tillbaka och behåller det som var värt att minnas — fem små saker du är tacksam för. Den är uppkallad efter minnets korp, för det är precis vad den hjälper dig att bevara.',
      'Tanken är gammal. Fornnordisk visdomsdikt som Hávamál hyllar de enkla tingen — värme, hälsa, en dag som levts väl — precis det som tacksamhet ber oss lägga märke till. Munin tar med den tusenåriga vanan till din telefon, och håller den helt privat.',
    ],
    reminderQuote: 'Munin har återvänt — vad såg du idag?',
  },
  faqHeading: 'Vanliga frågor',
  faq: [
    {
      q: 'Är Munin gratis?',
      a: 'Ja. Munin är gratis att ladda ner och använda — ingen prenumeration och inga annonser.',
    },
    {
      q: 'Behöver jag ett konto?',
      a: 'Nej. Ingen registrering och ingen e-post krävs. Du öppnar appen och börjar skriva.',
    },
    {
      q: 'Var lagras mina anteckningar?',
      a: 'Bara på din iPhone. Munin har ingen server och tar aldrig emot det du skriver — inget laddas upp till något moln och inget spåras.',
    },
    {
      q: 'Fungerar den offline?',
      a: 'Helt och hållet. Munin behöver ingen internetuppkoppling — allt sker på din enhet.',
    },
    {
      q: 'Vad händer om jag byter telefon?',
      a: 'Dina anteckningar följer med i din vanliga iPhone-backup (iCloud eller dator), så de finns kvar när du byter — men även då passerar de aldrig oss.',
    },
    {
      q: 'Vad skriver jag varje dag?',
      a: 'Fem korta rader om saker du är tacksam för. Milda ledtrådar hjälper dig igång, och allt sparas automatiskt medan du skriver.',
    },
  ],
  langSwitchHref: '/',
  langSwitchLabel: 'English',
  privacyHref: '/integritetspolicy',
  privacyLabel: 'Integritetspolicy',
};
