// Privacy Policy content — copied VERBATIM from the Munin app so the app and the
// website say exactly the same thing.
// Source of truth in the app: ../Tacksamhet-2.0/src/i18n/en.ts + sv.ts (privacy).
// If the policy text changes in the app, update it here too (and bump lastUpdated).
//
// NOTE: the contact address hej@tacksamhet.app is kept as-is to match the app.
// It changes together with the app once the final Munin domain is registered.

export interface PrivacySection {
  heading: string;
  body: string;
}

export interface PrivacyContent {
  lang: 'en' | 'sv';
  /** Browser tab / <title>. */
  documentTitle: string;
  /** On-page heading. */
  title: string;
  lastUpdated: string;
  intro: string;
  sections: PrivacySection[];
  /** Link to the same policy in the other language. */
  altLangHref: string;
  altLangLabel: string;
  /** Link back to the home page. */
  homeHref: string;
  homeLabel: string;
}

export const privacyEn: PrivacyContent = {
  lang: 'en',
  documentTitle: 'Privacy Policy — Munin',
  title: 'Privacy Policy',
  lastUpdated: 'Last updated 10 July 2026',
  intro:
    'Munin is built for your privacy. Your notes are yours — they stay on your device.',
  sections: [
    {
      heading: 'Where your notes are stored',
      body: "Everything you write, along with your reminder settings, is stored locally on your phone. We have no server and never receive the contents of your journal. If you have iPhone backup (via iCloud or a computer) turned on, your notes are included in that regular backup so they are still there when you switch phones — but even then they never leave Apple's backup to reach us.",
    },
    {
      heading: 'No account, no tracking',
      body: 'You do not need an account to use the app. We do not collect personal data and we do not track you for advertising or analytics.',
    },
    {
      heading: 'Crash reporting',
      body: 'To find and fix problems, the app may send technical information about a crash — such as the error message, app version and device model — to our crash reporting service. The contents of your journal are never included, only the technical error information.',
    },
    {
      heading: 'Reminders',
      body: 'If you enable the daily reminder, a local notification is created on your device. No reminder data leaves your phone.',
    },
    {
      heading: 'Export and sharing',
      body: 'When you export your history as text or PDF yourself, a file is created that you choose to share onward. You decide where it goes — the app never shares anything automatically.',
    },
    {
      heading: 'Changes and contact',
      body: 'If this policy changes, we will update the date above. If you have questions about your privacy, reach us at hej@tacksamhet.app.',
    },
  ],
  altLangHref: '/integritetspolicy',
  altLangLabel: 'Svenska',
  homeHref: '/',
  homeLabel: '← Munin',
};

export const privacySv: PrivacyContent = {
  lang: 'sv',
  documentTitle: 'Integritetspolicy — Munin',
  title: 'Integritetspolicy',
  lastUpdated: 'Senast uppdaterad 10 juli 2026',
  intro:
    'Munin är byggt för din integritet. Dina anteckningar är dina — de stannar på din enhet.',
  sections: [
    {
      heading: 'Var dina anteckningar lagras',
      body: 'Allt du skriver, tillsammans med dina påminnelseinställningar, sparas lokalt på din telefon. Vi har ingen server och tar aldrig emot innehållet i din dagbok. Om du har iPhone-backup (iCloud eller via dator) påslagen följer dina anteckningar med i den vanliga backupen så att de finns kvar när du byter telefon — men även då lämnar de aldrig Apples backup till oss.',
    },
    {
      heading: 'Inget konto, ingen spårning',
      body: 'Du behöver inget konto för att använda appen. Vi samlar inte in personuppgifter och spårar dig inte för reklam eller analys.',
    },
    {
      heading: 'Kraschrapportering',
      body: 'För att kunna hitta och rätta fel kan appen skicka teknisk information om en krasch — till exempel felmeddelande, appversion och enhetsmodell — till vår kraschrapporteringstjänst. Innehållet i din dagbok ingår aldrig, bara den tekniska felinformationen.',
    },
    {
      heading: 'Påminnelser',
      body: 'Om du aktiverar daglig påminnelse skapas en lokal notis på din enhet. Ingen påminnelsedata lämnar telefonen.',
    },
    {
      heading: 'Export och delning',
      body: 'När du själv exporterar din historik som text eller PDF skapas en fil som du väljer att dela vidare. Det är du som bestämmer vart den skickas — appen delar aldrig något automatiskt.',
    },
    {
      heading: 'Ändringar och kontakt',
      body: 'Om policyn ändras uppdaterar vi datumet ovan. Har du frågor om din integritet når du oss på hej@tacksamhet.app.',
    },
  ],
  altLangHref: '/privacy',
  altLangLabel: 'English',
  homeHref: '/sv',
  homeLabel: '← Munin',
};
