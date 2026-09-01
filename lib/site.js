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
    slug: 'pavel-durov',
    title: 'Pavel Durov',
    headline: "Pavel Durov — The Man Who Wouldn't Give Up",
    description:
      "Free course on Telegram's founder. From a student site in St Petersburg to VKontakte, exile, building the most private messenger in the world, and the 2024 Paris arrest.",
    ogSubtitle: "The man who wouldn't give up",
    emoji: '👤',
    chapters: 7,
    minutes: 30,
    level: 'Beginner',
    updated: '2026-06-05',
    keywords: [
      'Pavel Durov',
      'Telegram founder',
      'VKontakte',
      'Durov arrest',
      'Telegram history',
      'digital privacy',
      'TON founder',
    ],
    teaches: [
      'Durov’s early life and the fall of the Soviet Union',
      'Building VKontakte and the fight with the Kremlin',
      'Why Telegram was built the way it was',
      'The 2024 Paris arrest and what it meant',
      'The principles behind Telegram and TON',
    ],
    gradient: ['#94a3b8', '#3b82f6'],
  },
  {
    slug: 'ton-history',
    title: 'TON History',
    headline: 'TON History — From Telegram ICO to Community Takeover',
    description:
      'Free course on The Open Network’s full history: the record-breaking ICO, the SEC battle, Telegram walking away, the community revival, and Telegram’s 2026 return.',
    ogSubtitle: 'The origin story',
    emoji: '📜',
    chapters: 6,
    minutes: 25,
    level: 'Beginner',
    updated: '2026-06-05',
    keywords: [
      'TON history',
      'Telegram ICO',
      'Gram token',
      'TON SEC lawsuit',
      'The Open Network',
      'TON Foundation',
      'Toncoin',
    ],
    teaches: [
      'The 2018 Telegram ICO and what it promised',
      'The SEC case and why Telegram walked away',
      'How the community revived the network',
      'The road from Gram to Toncoin and back to GRAM',
      'Telegram’s 2026 return to operational control',
    ],
    gradient: ['#f59e0b', '#f97316'],
  },
  {
    slug: 'ton-technology',
    title: 'TON Technology',
    headline: 'TON Technology — TVM, Sharding, Jettons Explained',
    description:
      'Free deep dive into The Open Network’s architecture: the TON Virtual Machine, infinite sharding, workchains, smart contracts and Jettons.',
    ogSubtitle: 'How it works',
    emoji: '⚙️',
    chapters: 7,
    minutes: 35,
    level: 'Intermediate',
    updated: '2026-06-05',
    keywords: [
      'TON technology',
      'TON Virtual Machine',
      'TVM',
      'TON sharding',
      'Jettons',
      'TON smart contracts',
      'workchains',
    ],
    teaches: [
      'How the TON Virtual Machine executes contracts',
      'Infinite sharding and workchains',
      'Writing and deploying TON smart contracts',
      'Jettons and the TON token standard',
      'What makes TON’s architecture different',
    ],
    gradient: ['#10b981', '#14b8a6'],
  },
  {
    slug: 'ton-gifts',
    title: 'TON NFTs & Gifts',
    headline: 'TON NFTs & Telegram Gifts — Collectibles Masterclass',
    description:
      'Free course on TON NFTs, Telegram Gifts, PFP collections and digital collectibles — how they work, where to trade them, and how to spot the fakes.',
    ogSubtitle: 'NFT masterclass',
    emoji: '🎁',
    chapters: 7,
    minutes: 30,
    level: 'Beginner',
    updated: '2026-06-05',
    keywords: [
      'TON NFT',
      'Telegram Gifts',
      'TON collectibles',
      'Telegram usernames',
      'TON PFP',
      'Getgems',
      'Fragment',
    ],
    teaches: [
      'How NFTs work on The Open Network',
      'Telegram Gifts and how they became tradeable',
      'Buying and selling on Getgems and Fragment',
      'Telegram usernames and numbers as assets',
      'Spotting fake collections',
    ],
    gradient: ['#f43f5e', '#ef4444'],
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

/**
 * Renders a JSON-LD block. Server components only.
 *
 * `<` is escaped so a string containing "</script>" can never close the tag
 * early and turn structured data into executable markup. Everything here is
 * authored in-repo today, but this stops that from mattering if the data ever
 * starts coming from somewhere else.
 */
export function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
}
