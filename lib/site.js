// Single source of truth for metadata, sitemap, JSON-LD and OG images.

export const SITE_URL = 'https://therabbithole.academy';
export const SITE_NAME = 'The Rabbit Hole';
export const SITE_TAGLINE = 'Free Web3 & AI Courses';

/**
 * Every indexable course. `slug` is the route under /courses.
 * Keep this in sync with the course array in app/page.js.
 */
export const COURSES = [
  {
    slug: 'rwa-101',
    title: 'RWA 101: Tokenized Stocks',
    headline: 'Tokenized Stocks Explained — Buy NVDA, TSLA & AAPL On-Chain',
    description:
      'Free course on tokenized stocks and real-world assets. How RWA tokenization works, the three issuance models, Robinhood Chain and ERC-8056, where to buy, and the risks — with a 10-question quiz.',
    ogSubtitle: 'Wall Street on-chain',
    emoji: '📈',
    chapters: 10,
    minutes: 50,
    level: 'Beginner to Intermediate',
    updated: '2026-09-01',
    keywords: [
      'tokenized stocks',
      'real world assets',
      'RWA tokenization',
      'RWA crypto',
      'tokenized equities',
      'ERC-8056',
      'Robinhood Chain',
      'buy stocks with crypto',
      'onchain stocks',
      'tokenized treasuries',
    ],
    teaches: [
      'What real-world assets (RWA) are and why tokenization matters',
      'The three tokenized stock models: issuer-sponsored, custodial and synthetic',
      'How ERC-8056 stock tokens handle splits and dividends',
      'How to buy tokenized stocks across DeFi, Ondo, Dinari and CEXs',
      'The counterparty, regulatory and liquidity risks of tokenized equities',
    ],
    gradient: ['#34d399', '#22d3ee'],
  },
  {
    slug: 'dn404',
    title: 'DN404: NFT Ownership Reimagined',
    headline: 'DN404 Explained — Fractional NFTs, ERC-7631 & Robinhood Chain',
    description:
      'Free course on the DN404 token standard. How the dual-contract architecture fuses ERC-20 and ERC-721, why it beats ERC-404, and the projects building on it — $FUNI, Quotrons, RWA404.',
    ogSubtitle: 'Fractional NFTs meet DEX liquidity',
    emoji: '🦄',
    chapters: 9,
    minutes: 45,
    level: 'Beginner to Intermediate',
    updated: '2026-08-01',
    keywords: [
      'DN404',
      'ERC-404',
      'ERC-7631',
      'fractional NFT',
      'divisible NFT',
      'hybrid token standard',
      'Robinhood Chain NFT',
      'FUNI',
      'Quotrons',
      'RWA404',
    ],
    teaches: [
      'Why traditional NFTs are illiquid and indivisible',
      'The origin story from Emerald to ERC-404 to DN404',
      'How the DN404 dual-contract architecture works',
      'How DN404 compares to fractional vaults and NFTx',
      'The DN404 ecosystem on Robinhood Chain',
    ],
    gradient: ['#c084fc', '#f472b6'],
  },
  {
    slug: 'telegram-fundamentals',
    title: 'Telegram + TON Masterclass',
    headline: 'Telegram & TON Masterclass — From Zero to Web3 Builder',
    description:
      'Free 10-level masterclass on Telegram as a Web3 super app. Wallets, TON DeFi, Mini Apps, NFTs and monetization — from complete beginner to builder. Available in 6 languages.',
    ogSubtitle: 'From lurker to builder',
    emoji: '🎓',
    chapters: 10,
    minutes: 150,
    level: 'Beginner to Advanced',
    updated: '2026-08-01',
    keywords: [
      'Telegram Web3',
      'TON blockchain course',
      'TON wallet tutorial',
      'Telegram Mini Apps',
      'TON DeFi',
      'learn TON',
      'Telegram crypto',
      'The Open Network',
    ],
    teaches: [
      'Setting up and securing a TON wallet',
      'Navigating TON DeFi safely',
      'Building and launching Telegram Mini Apps',
      'TON NFTs, gifts and collectibles',
      'Monetizing a Telegram presence',
    ],
    gradient: ['#22d3ee', '#3b82f6'],
  },
  {
    slug: 'agent-protocol',
    title: 'Agent Protocol',
    headline: 'Agent Protocol — Build an AI Agent on Telegram, Free Course',
    description:
      'Free 10-level course on connecting AI to Telegram. From BotFather to an autonomous agent, on two tracks: OpenClaw (no-code) or Claude API for developers. Available in 6 languages.',
    ogSubtitle: 'Your AI. Your Telegram. Always on.',
    emoji: '🤖',
    chapters: 10,
    minutes: 210,
    level: 'Beginner to Advanced',
    updated: '2026-08-01',
    keywords: [
      'AI agent Telegram',
      'Telegram bot AI',
      'build AI agent',
      'Claude API bot',
      'BotFather tutorial',
      'MCP servers',
      'autonomous agent',
      'OpenClaw',
    ],
    teaches: [
      'Creating a Telegram bot with BotFather',
      'Wiring an LLM into a chat interface',
      'Giving an agent tools via MCP',
      'Deploying an agent to production',
      'Agent security and common pitfalls',
    ],
    gradient: ['#4ade80', '#22d3ee'],
  },
];

export const courseBySlug = (slug) => COURSES.find((c) => c.slug === slug);

/** ISO-8601 duration, e.g. 50 -> "PT50M", 150 -> "PT2H30M" */
function isoDuration(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `PT${h ? `${h}H` : ''}${m ? `${m}M` : ''}`;
}

/** Next.js Metadata for a course page. */
export function courseMetadata(slug) {
  const c = courseBySlug(slug);
  const url = `${SITE_URL}/courses/${slug}`;
  return {
    title: c.headline,
    description: c.description,
    keywords: c.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: SITE_NAME,
      title: c.headline,
      description: c.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: c.headline,
      description: c.description,
    },
  };
}

/** schema.org Course + BreadcrumbList for a course page. */
export function courseJsonLd(slug) {
  const c = courseBySlug(slug);
  const url = `${SITE_URL}/courses/${slug}`;
  const provider = {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  };

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: c.title,
      description: c.description,
      url,
      provider,
      inLanguage: 'en',
      isAccessibleForFree: true,
      educationalLevel: c.level,
      teaches: c.teaches,
      dateModified: c.updated,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        category: 'Free',
        availability: 'https://schema.org/InStock',
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: isoDuration(c.minutes),
        instructor: provider,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Courses', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: c.title, item: url },
      ],
    },
  ];
}

/** schema.org Organization + WebSite + course ItemList for the landing page. */
export function siteJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: SITE_NAME,
      alternateName: 'The Rabbit Hole Academy',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      description:
        'Free, visual, step-by-step courses on Web3, NFTs, memecoins, tokenized real-world assets and AI agents.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: ['en', 'fr', 'pt-BR', 'es', 'ru', 'zh'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Free Web3 and AI courses',
      itemListElement: COURSES.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/courses/${c.slug}`,
        name: c.title,
      })),
    },
  ];
}

/** Renders a JSON-LD block. Server components only. */
export function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
