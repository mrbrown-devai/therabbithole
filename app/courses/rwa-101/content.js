// RWA 101: Tokenized Stocks — course content
// Source: The Rabbit Hole course draft. Figures dated August 2026 unless noted.

export const COURSE_ID = 'rwa-101-progress';

export const TICKERS = [
  { sym: 'NVDA', name: 'Nvidia' },
  { sym: 'TSLA', name: 'Tesla' },
  { sym: 'AAPL', name: 'Apple' },
  { sym: 'SPY', name: 'S&P 500 ETF' },
  { sym: 'PLTR', name: 'Palantir' },
  { sym: 'NFLX', name: 'Netflix' },
  { sym: 'GME', name: 'GameStop' },
  { sym: 'MSTR', name: 'MicroStrategy' },
  { sym: 'RDDT', name: 'Reddit' },
  { sym: 'SPCX', name: 'SpaceX' },
];

export const MARKET_STATS = [
  { label: 'On-chain RWA market cap', value: '$34.4B', note: 'DefiLlama, Aug 2026' },
  { label: 'Tokenized US Treasuries', value: '$12.88B', note: 'largest category' },
  { label: 'Tokenized equities YoY', value: '+2,878%', note: '$32M → $963M' },
  { label: 'Asset issuers', value: '217', note: 'and growing' },
];

export const LEVELS = [
  {
    id: 1,
    title: 'What Are Real-World Assets?',
    subtitle: 'Stocks, bonds and treasuries, on-chain',
    icon: '🌍',
    color: '#10b981',
    bgColor: '#0a2c20',
    intro:
      'Real-world assets are anything of value that exists outside the blockchain. Tokenization puts them on-chain as digital tokens — and changes what you can do with them.',
    sections: [
      {
        id: '1-1',
        title: 'The Rails Traditional Finance Runs On',
        why: 'You cannot appreciate what tokenization fixes until you see what is broken.',
        content:
          "Real-world assets are anything of value that exists outside the blockchain — **stocks, bonds, real estate, commodities, treasuries, art**. Tokenization puts them on-chain as digital tokens.\n\nTraditional finance runs on rails built decades ago:\n\n- Stocks trade **6.5 hours a day, 5 days a week**\n- Settlement takes **T+1** (one business day)\n- Buying a share of Apple in Japan requires a US broker, currency conversion, and paperwork\n\nBy the end of this course you'll understand how a farting unicorn NFT can pay you in Nvidia stock. Not metaphorically. Literally.",
      },
      {
        id: '1-2',
        title: 'What Tokenization Actually Changes',
        why: 'Five concrete properties that traditional shares simply do not have.',
        content:
          '- **24/7 trading** — no market hours, no holidays\n- **Instant settlement** — atomic swaps, not T+1\n- **Fractional ownership** — buy $1 of Nvidia, not $140 per share\n- **Global access** — anyone with a crypto wallet, anywhere\n- **Composability** — stocks become Lego blocks for DeFi (lending, liquidity pools, yield)\n\nThat last one is the big one. In traditional finance your Apple stock sits in a brokerage and cannot talk to anything else. On-chain, it can.',
      },
      {
        id: '1-3',
        title: 'The Market Today',
        why: 'Numbers matter — this is no longer a thought experiment.',
        stats: true,
        content:
          "The RWA market has exploded:\n\n- **$34.4B** on-chain market cap (August 2026, DefiLlama)\n- **$31.5B** active market cap\n- **$3.9B** in DeFi TVL — tokenized assets actively used in DeFi protocols\n- **217** asset issuers and growing\n- **$120B** projected by year-end\n\nThe largest category is **tokenized US Treasuries at ~$12.88B**. But tokenized equities are the fastest-growing segment, up **~2,878% year-over-year** from $32M (Jan 2025) to $963M (Jan 2026), and still accelerating.\n\n*A note on the big numbers you'll see quoted: McKinsey estimates $2–4T by 2030. BCG/ADDX's widely-repeated $16T figure is a business-opportunity sizing, not a market-cap projection — treat it accordingly.*",
      },
    ],
    sources: [
      { label: 'DefiLlama RWA Dashboard', href: 'https://defillama.com/protocols/RWA' },
      { label: 'RWA Tokenization in 2026 (MEXC)', href: 'https://www.mexc.com/learn/article/rwa-tokenization' },
      { label: 'RWA Categories in 2026 (MetaMask)', href: 'https://metamask.io/news/rwa-tokenization' },
    ],
  },
  {
    id: 2,
    title: 'How Tokenized Stocks Work',
    subtitle: 'Three models — and why the difference matters',
    icon: '🏛️',
    color: '#3b82f6',
    bgColor: '#101c2c',
    intro:
      'A tokenized stock represents economic exposure to a real share. But "represents" is doing a lot of work in that sentence — and the structure behind it decides what you actually own.',
    sections: [
      {
        id: '2-1',
        title: 'The Basic Concept',
        why: 'One sentence that every later distinction hangs off.',
        content:
          'A tokenized stock is a blockchain token that represents **economic exposure** to a real share of stock.\n\nWhen you buy a tokenized NVDA token, somewhere in the real world an actual Nvidia share (or equivalent collateral) is held in custody backing your token.\n\nOr at least — that is the promise. Whether it is true depends entirely on which of the following three models you are dealing with.',
      },
      {
        id: '2-2',
        title: 'The Three Models',
        why: 'SEC staff drew this line in January 2026. It is the single most useful frame in this course.',
        models: true,
        content:
          "SEC staff drew a sharp line in a January 2026 joint statement. *Note: this is staff guidance, not a Commission rule, and carries no legal force.*\n\n**1. Issuer-Sponsored — the best case**\nThe company itself (or its authorized agent) issues tokens directly. These can represent true equity ownership — you may get voting rights, dividends, and direct claims.\n*Example:* Securitize listed on the NYSE as SECZ on July 2, 2026 and tokenized their own stock.\n\n**2. Custodial / 1:1 Backed — the common case**\nA third party buys real shares, holds them in custody, and issues tokens backed 1:1. You own a token representing an entitlement to the underlying share.\n*Examples:* Dinari (dShares), Backed Finance (bTokens), xStocks.\n*Risk:* You are exposed to the custodian's counterparty risk. If the issuer goes bankrupt, you have a claim on **them**, not on the stock.\n\n**3. Synthetic / Linked Security — the riskiest**\nNo real shares are held. The issuer creates a debt security or linked instrument that tracks the price. Price exposure only — no dividends, no ownership, no voting.\n*Examples:* Robinhood Stock Tokens (issued by RHJ as tokenized debt securities).\n*Risk:* Counterparty, oracle, and issuer insolvency risk. If the issuer fails you may lose everything.",
      },
      {
        id: '2-3',
        title: 'How to Tell Which One You Are Holding',
        why: 'Five questions that cut through any marketing page.',
        critical: true,
        content:
          'Ask these before you buy anything:\n\n1. **Are real shares held in custody?** (custodial vs. synthetic)\n2. **Who is the issuer?** (the company itself vs. a third party)\n3. **Do you get dividends?** (real vs. synthetic exposure)\n4. **What happens if the issuer goes bankrupt?** (direct claim vs. unsecured creditor)\n5. **Is the issuer regulated?** (SEC-registered transfer agent vs. offshore entity)\n\nWatch for the gap between marketing and legal documents. Robinhood\'s marketing says "backed 1:1"; the legal docs describe a debt instrument with no rights in the underlying stock. Both statements coexist. Only one governs what you own.',
      },
    ],
    sources: [
      { label: 'SEC Staff Statement on Tokenized Securities (Jan 2026)', href: 'https://www.sec.gov/newsroom/speeches-statements' },
      { label: 'SEC Clarifies Rules for Tokenized Stocks (CoinDesk)', href: 'https://www.coindesk.com/policy' },
      { label: 'Robinhood Stock Token Docs', href: 'https://robinhood.com/us/en/support/articles/stock-tokens/' },
    ],
  },
  {
    id: 3,
    title: 'The Major Platforms',
    subtitle: 'Who issues what, and who to trust with which job',
    icon: '🏦',
    color: '#8b5cf6',
    bgColor: '#1c102c',
    intro:
      'Five platforms cover most of the tokenized-equity market. They are not interchangeable — each optimises for a different tradeoff between regulation, selection and composability.',
    sections: [
      {
        id: '3-1',
        title: 'Securitize — the institutional heavyweight',
        why: 'The clearest real-world example of issuer-sponsored tokenization.',
        content:
          "**~$5B in tokenized assets.** Securitize routes assets from **BlackRock** (BUIDL, now in the billions), **Apollo** and **Hamilton Lane**. SEC-registered transfer agent.\n\nIn July 2026 they put their money where their mouth is: listed on the NYSE as **SECZ** and tokenized their own stock — making it the clearest example of the issuer-sponsored model in production.\n\n**Best for:** institutional-grade tokenized funds, treasuries, private credit.",
      },
      {
        id: '3-2',
        title: 'Ondo Finance — the DeFi-native leader',
        why: 'The bridge between treasury yield and stock exposure.',
        content:
          '**~$2.75B+.** Products:\n\n- **OUSG** (~$625M) — tokenized short-term US Treasuries\n- **USDY** (~$2.1B) — yield-bearing stablecoin backed by US Treasuries\n- **Ondo Stocks** (formerly Ondo Global Markets) — 470+ tokenized US stocks, ETFs and commodities, accessible via MetaMask. Crossed **$1.01B TVL** on August 15, 2026\n\nIntegrated with Binance Alpha for non-US users.\n\n**Best for:** DeFi-native users wanting yield plus stock exposure.',
      },
      {
        id: '3-3',
        title: 'xStocks & Dinari — breadth vs. rigour',
        why: 'Two opposite answers to the same problem.',
        content:
          "**xStocks** (formerly Backed Finance, acquired by Kraken) is now the largest tokenized-equities issuer with **700+ assets** — tokenized ETFs and stocks deployed on Ethereum, Arbitrum, Gnosis and Base.\n*Best for:* the broadest stock selection, institutional backing via Kraken.\n\n**Dinari (dShares)** is an SEC-registered transfer agent that backs tokens 1:1 with real physical equities and **passes through true corporate cash dividends**. In August 2026 Dinari launched **724 tokenized stocks — the whole S&P 500** — with USDC self-custody via Circle, on Ethereum, Arbitrum, Base and Avalanche. Access is limited to eligible investors.\n*Best for:* investors wanting true 1:1 backed tokens with dividends under a regulated framework.",
      },
      {
        id: '3-4',
        title: 'Robinhood Stock Tokens — read the fine print',
        why: 'The most composable option, and the one most often misunderstood.',
        critical: true,
        content:
          'Issued by **RHJ (Robinhood Assets Jersey Limited)** as tokenized **debt securities**. Standard ERC-20 tokens on Robinhood Chain (an Arbitrum Orbit L2) using the **ERC-8056** standard.\n\n**The important distinction:** despite marketing language of "1:1 backing", the legal structure is a debt instrument. Holders have **no rights in the underlying stock** — no voting, no direct ownership claim. Under the SEC staff framework this is a synthetic / linked security.\n\nAvailable stocks include NVDA, TSLA, AAPL, GME, SPCX, SPY, PLTR, NFLX, RDDT, MSTR and more.\n\nNot registered under US securities laws. **Not available to US persons**, and also restricted in Canada, the UK, Switzerland and the UAE.\n\n**Best for:** the Robinhood Chain ecosystem, DeFi composability and DN404 projects — as long as you understand you hold a debt instrument, not equity.',
      },
    ],
    sources: [
      { label: 'Securitize', href: 'https://securitize.io/' },
      { label: 'Ondo Finance', href: 'https://ondo.finance/' },
      { label: 'Dinari', href: 'https://dinari.com/' },
      { label: 'Robinhood Stock Tokens', href: 'https://robinhood.com/us/en/stock-tokens/' },
    ],
  },
  {
    id: 4,
    title: 'Robinhood Chain Deep Dive',
    subtitle: 'ERC-8056 and what stock tokens can plug into',
    icon: '🪙',
    color: '#22c55e',
    bgColor: '#0c2416',
    intro:
      'Robinhood Chain launched July 1, 2026 as an Arbitrum Orbit L2. It is the only place where tokenized equities are native DeFi primitives — which is why every interesting experiment is happening here.',
    sections: [
      {
        id: '4-1',
        title: 'The Numbers',
        why: 'Context for how much real activity sits on this chain.',
        content:
          'Key stats (DefiLlama, August 2026):\n\n- **$603.76M** TVL\n- **$712.59M** stablecoin market cap\n- **$136.79M** RWA active market cap in tokenized stocks\n- **$611.86M** DEX volume in 24h\n- **$1.764B** bridged TVL',
      },
      {
        id: '4-2',
        title: 'How ERC-8056 Stock Tokens Work',
        why: 'The multiplier trick is the whole design — and it is genuinely elegant.',
        content:
          'Robinhood\'s stock tokens use a custom standard called **ERC-8056**:\n\n- Each stock is a **standard ERC-20 contract** (TSLA, NVDA, AAPL, …)\n- They are **not rebasing tokens** — the raw balance stays the same\n- A **UI multiplier** handles corporate actions: a 2-for-1 stock split moves the multiplier from 1.0 to 2.0, so wallets show double the balance without changing raw token counts\n- **Chainlink price feeds** publish per-asset prices on-chain\n- Dividends and splits are managed through the on-chain multiplier\n- Any developer can integrate them — they are standard ERC-20s, **no special SDK needed**',
      },
      {
        id: '4-3',
        title: 'What You Can Actually Do With Them',
        why: 'This is the composability thesis made concrete.',
        content:
          'Because they are ERC-20s, stock tokens plug into the entire DeFi stack:\n\n- **Trade on DEXs** (Uniswap V4 on Robinhood Chain)\n- **Provide liquidity** — earn fees from stock/stablecoin pairs\n- **Use as collateral** — borrow against your NVDA position\n- **Compose with NFTs** — DN404 projects like RWA404 pay holders in NVDA\n- **Build yield strategies** — pair with stablecoins for LP positions\n- **Launch tokens backed by stocks** — UniPump is a launchpad where launch fees fill a Reserve that buys real tokenized stocks and drips them back to holders',
      },
      {
        id: '4-4',
        title: 'The Limitations',
        why: 'Stage 0 on L2Beat is not a detail you should skip past.',
        critical: true,
        content:
          '- Stock tokens are **economic exposure, not shares** — no voting rights\n- Issued by **RHJ**, not by Apple / Nvidia / Tesla directly\n- **Jurisdiction restrictions** — not registered under US securities laws, not available to US persons; also restricted in Canada, the UK, Switzerland and the UAE\n- **Counterparty risk** on the issuer (RHJ)\n- **Infrastructure risk** — L2Beat rates Robinhood Chain at **Stage 0**, with only two whitelisted fraud-proof actors, a 6d 8h challenge period, and instantly upgradeable contracts',
      },
    ],
    sources: [
      { label: 'DefiLlama — Robinhood Chain', href: 'https://defillama.com/chain/robinhood-chain' },
      { label: 'L2Beat — Robinhood Chain', href: 'https://l2beat.com/scaling/projects' },
      { label: 'Robinhood Chain Stock Token Documentation', href: 'https://docs.robinhood.com/chain/' },
      { label: 'UniPump', href: 'https://unipump.fun/' },
    ],
  },
  {
    id: 5,
    title: 'How to Buy Tokenized Stocks',
    subtitle: 'Five routes, from full DeFi to fully passive',
    icon: '🛒',
    color: '#06b6d4',
    bgColor: '#0a242c',
    intro:
      'There is no single right way in. Pick the route that matches how much complexity you want to hold — and check the safety list at the end before you send anything.',
    sections: [
      {
        id: '5-1',
        title: 'Method 1 — Robinhood Chain (DeFi)',
        why: 'The permissionless route, with all that implies both ways.',
        content:
          '**You need:** a crypto wallet (MetaMask, Rabby, Coinbase Wallet) and ETH for gas.\n\n1. **Bridge ETH to Robinhood Chain** using the official Arbitrum bridge portal\n2. **Connect your wallet** to a DEX on Robinhood Chain (Uniswap, or native DEXs)\n3. **Swap ETH or USDG for stock tokens** — select NVDA, TSLA, AAPL, etc.\n4. **Stock tokens appear in your wallet** — standard ERC-20, visible on any chain explorer\n\n**Pros:** permissionless, 24/7, composable with DeFi.\n**Cons:** gas costs, bridge risk, requires crypto knowledge, US-restricted.',
      },
      {
        id: '5-2',
        title: 'Methods 2–4 — Ondo, Dinari, CEXs',
        why: 'Three tradeoffs between selection, regulation and convenience.',
        content:
          '**Via Ondo Global Markets:** connect MetaMask, browse 470+ tokenized stocks/ETFs/commodities, trade with USDT or USDC, tokens settle in your wallet.\n*Pros:* huge selection, DeFi-native. *Cons:* non-US only for now, KYC may be required.\n\n**Via Dinari (dShares):** create an account (KYC required — they are SEC-registered), deposit USD or stablecoins, buy dShares backed 1:1, receive actual dividends passed through.\n*Pros:* true 1:1 backing, dividends, SEC-regulated, US available. *Cons:* KYC, less DeFi-composable.\n\n**Via a CEX:** some centralized exchanges (Binance Alpha, Bitget) offer tokenized stock trading.\n*Pros:* familiar interface, easy onboarding. *Cons:* custodial — not your keys — and limited composability.',
      },
      {
        id: '5-3',
        title: 'Method 5 — The Passive Way: hold $FUNI, earn stocks',
        why: 'This is the DN404 crossover, and the reason this course exists.',
        content:
          "Don't want to buy stock tokens directly? There's a simpler path.\n\n**$FUNI** is a DN404 memecoin on Robinhood Chain. Buy it, and a pixel unicorn NFT appears in your wallet automatically. But here's the twist: the $FUNI team is building **UniPump**, a launchpad where launch fees flow into a **Reserve** that buys real tokenized stocks — NVDA, TSLA, AAPL — and drips fractional stock exposure back to $FUNI holders.\n\nYou never touch a stock token directly. You hold a meme unicorn. The system buys Nvidia for you.\n\n1. You buy $FUNI → unicorn NFT appears in your wallet\n2. Other projects launch on UniPump → launch fees fill the Reserve\n3. The Reserve buys tokenized stocks on Robinhood Chain\n4. Stock exposure drips back to holders proportional to rarity\n5. More launches → bigger Reserve → more stock back → more buyback and burn\n\n**Why it doesn't death-spiral:** the Reserve holds dollars and real stock exposure, not a pile of its own token. It is backed by assets that exist outside the protocol.\n\n**Status:** token and art are live. Launchpad, Reserve and stock back on the way.\n\n*Pros:* no stock-buying complexity, passive exposure, meme-native UX. *Cons:* indirect exposure — you depend on the Reserve — and not yet fully live.",
      },
      {
        id: '5-4',
        title: 'Safety Checklist Before Buying',
        why: 'Six checks that prevent the most common ways people lose money here.',
        critical: true,
        checklist: [
          'Verify the issuer — who is behind the token, and are they regulated?',
          'Check the backing — 1:1 real shares, or synthetic?',
          'Understand the risks — counterparty, regulatory, smart contract',
          'Use official contracts — verify token addresses in the platform docs',
          'Start small — test with a small amount before going larger',
          'Beware of fakes — scam tokens mimicking stock names are common',
        ],
        content: '',
      },
    ],
    sources: [
      { label: 'How to Buy Tokenized Stocks (Bitget)', href: 'https://www.bitget.com/academy' },
      { label: '$FUNI — funi.art', href: 'https://funi.art/' },
      { label: 'UniPump Waitlist', href: 'https://unipump.fun/waitlist/' },
    ],
  },
  {
    id: 6,
    title: 'Tokenized vs Traditional',
    subtitle: 'An honest side-by-side',
    icon: '⚖️',
    color: '#f59e0b',
    bgColor: '#2c2210',
    intro:
      'Tokenized stocks are not a replacement for traditional stocks today. They are a new access layer with real advantages and real trade-offs. Here is the comparison without the pitch.',
    sections: [
      {
        id: '6-1',
        title: 'The Comparison Table',
        why: 'Nine dimensions where the two genuinely differ.',
        table: {
          head: ['', 'Traditional stocks', 'Tokenized stocks'],
          rows: [
            ['Trading hours', '6.5 hours/day, weekdays', '24/7/365'],
            ['Settlement', 'T+1 (1 business day)', 'Instant (atomic)'],
            ['Minimum investment', 'Usually 1 full share', 'Fractional from $1'],
            ['Global access', 'Requires local broker, KYC', 'Crypto wallet, often permissionless'],
            ['Ownership', 'Direct share ownership', 'Economic exposure (usually)'],
            ['Dividends', 'Yes, direct', 'Depends on platform'],
            ['Voting rights', 'Yes', 'Rarely'],
            ['Custody', 'Broker holds shares', 'Self-custody or protocol custody'],
            ['Composability', 'None', 'Full DeFi integration'],
            ['Regulatory protection', 'SEC-regulated', 'Varies by platform'],
            ['Counterparty risk', 'SIPC covers broker failure up to $500K', 'Depends on issuer — no equivalent'],
          ],
        },
        content:
          '*SIPC covers broker failure, not market losses. There is no equivalent backstop for tokenized stock issuers.*',
      },
      {
        id: '6-2',
        title: 'The Honest Truth',
        why: 'When each one is actually the right tool.',
        content:
          '**Use tokenized stocks when:**\n\n- You want 24/7 market access\n- You want fractional exposure from a crypto wallet\n- You want to compose stocks with DeFi (LP, lending, DN404)\n- You cannot access US markets through traditional brokers\n\n**Use traditional stocks when:**\n\n- You want direct ownership and voting rights\n- You want SIPC insurance protection\n- You want guaranteed dividend pass-through\n- You need regulatory certainty\n\nFor most people the answer is not "one or the other". It is knowing which layer a given position belongs on.',
      },
    ],
    sources: [
      { label: 'Tokenized Stocks vs Traditional Stocks (Crypto.com)', href: 'https://crypto.com/university' },
      { label: "Tokenized Stocks: 24/7 Trading Doesn't Mean Better Markets (Coruzant)", href: 'https://coruzant.com/' },
      { label: 'Tokenized Stocks: How They Work, Benefits, Risks (BitcoinTaxes)', href: 'https://bitcoin.tax/blog/' },
    ],
  },
  {
    id: 7,
    title: 'DeFi Meets Stocks',
    subtitle: 'Yield, DN404 crossovers, and the Stock Back model',
    icon: '🧩',
    color: '#ec4899',
    bgColor: '#2c1028',
    intro:
      'This is where tokenized equities stop being a nicer brokerage and start being something genuinely new: stocks as programmable Lego.',
    sections: [
      {
        id: '7-1',
        title: 'Yield Strategies',
        why: 'The simplest thing you can do that a broker cannot offer.',
        content:
          '**Liquidity provision:** pair NVDA/USDG in a Uniswap V4 pool. Earn trading fees from people buying and selling tokenized Nvidia. Your position is part Nvidia, part stablecoin.\n\n**Lending:** deposit stock tokens as collateral, borrow stablecoins. Stay long TSLA while still deploying capital elsewhere.',
      },
      {
        id: '7-2',
        title: 'NFT Integration (DN404)',
        why: 'Three live projects where an NFT is a stock-earning position.',
        content:
          "This is where it gets wild. Projects on Robinhood Chain are fusing stock tokens with NFTs:\n\n- **RWA404** — a DN404 collection of 1,000 NFTs. Trading fees are paid in **NVDA** to all holders equally. Your NFT earns Nvidia stock.\n- **Quotrons** — 4,444 terminal NFTs trading against 10 different tokenized stocks (NVDA, AAPL, TSLA, GME, SPY, PLTR, NFLX, RDDT, MSTR, SPCX). Holders earn stock rewards.\n- **$FUNI** — the hero example. See below.\n\nIf the DN404 mechanics are new to you, the [DN404 course](/courses/dn404) covers the dual-contract architecture in depth.",
      },
      {
        id: '7-3',
        title: 'The Stock Back Model — $FUNI & UniPump',
        why: 'The most innovative use of tokenized stocks in the wild right now.',
        content:
          "**The problem with memecoins:** they are backed by nothing. When hype fades, price goes to zero. No floor, no intrinsic value, no reason to hold.\n\n**The $FUNI solution: Stock Back.**\n\n$FUNI is a DN404 memecoin on Robinhood Chain — 16,384 pixel unicorns generated on-chain during every swap. Underneath the meme layer is a financial engine:\n\n1. New projects launch on **UniPump** — they pay launch fees\n2. Fees flow into the **Reserve** — not to the team, not burned, not recycled\n3. The Reserve buys **real tokenized stocks** — NVDA, TSLA, AAPL\n4. Stock exposure **drips back to holders**, proportional to unicorn rarity\n5. The Reserve also funds **buyback and burn**, reducing supply\n\n**The flywheel:** more launches → bigger Reserve → more stock back plus more buyback pressure → higher price → more projects want to launch. Repeat.\n\n**The key insight:** UniPump inverts the launchpad model. Instead of extracting value from launches, it converts launch energy into permanent stock-backed value for the ecosystem.\n\n**Status:** token and art LIVE. Launchpad, Reserve and stock back on the way.",
      },
      {
        id: '7-4',
        title: 'The Composability Thesis',
        why: 'Why this is structurally different from a tokenized stock on a CEX.',
        content:
          'In traditional finance, your Apple stock sits in a brokerage. It cannot talk to your bond fund. Your bond fund cannot talk to your savings account.\n\nOn-chain, everything composes:\n\n- Your NVDA token can be collateral for a loan\n- That loan can fund a liquidity position\n- That LP position earns fees in a stock token\n- That stock token can be wrapped in a DN404 NFT\n- That NFT can be fractionalized and traded on a DEX\n\nEvery layer builds on the one below. **This is why tokenized stocks on DeFi rails are structurally different from tokenized stocks on a centralized exchange** — the CEX version is a nicer wrapper, this version is a new primitive.',
      },
    ],
    sources: [
      { label: 'RWA404', href: 'https://rwa404.app/' },
      { label: 'Quotrons', href: 'https://www.quotrons.cash/' },
      { label: '$FUNI — funi.art', href: 'https://funi.art/' },
      { label: 'DN404 Course on The Rabbit Hole', href: '/courses/dn404' },
    ],
  },
  {
    id: 8,
    title: 'Risks & What Could Go Wrong',
    subtitle: 'Seven ways to lose money here',
    icon: '⚠️',
    color: '#ef4444',
    bgColor: '#2c1010',
    intro:
      'Every one of these has already happened to someone. Read this chapter twice; it is the one that saves you money.',
    sections: [
      {
        id: '8-1',
        title: 'The Seven Risks',
        why: 'Each with the mitigation that actually reduces it.',
        critical: true,
        content:
          "**1. Counterparty risk**\nYou don't own the stock. You own a token issued by someone who says they hold the stock. If the issuer (RHJ, Dinari, Backed…) fails, you may lose everything.\n*Mitigation:* use SEC-registered issuers, check proof-of-reserves, diversify across platforms.\n\n**2. Regulatory risk**\nSEC staff stated in January 2026 that tokenization doesn't change securities law. Tokenized stocks are securities. Platforms can be shut down, tokens frozen, rules changed.\n*Mitigation:* use regulated platforms, understand your jurisdiction, note that US restrictions apply widely.\n\n**3. Smart contract risk**\nBugs in token contracts, bridge exploits, oracle failures. The DeFi stack adds attack surface.\n*Mitigation:* stick to audited protocols, check whether stock token contracts have been reviewed, use established bridges.\n\n**4. Liquidity risk**\n24/7 trading sounds great until you realise most volume happens during US market hours. Overnight and weekend spreads can be wide. A headline at 3 AM can move prices sharply into thin liquidity.\n*Mitigation:* use limit orders, not market orders. Check the spread before trading.\n\n**5. Oracle / price feed risk**\nStock token prices rely on Chainlink or similar. If the oracle lags, misprices or goes down, trades can execute at wrong prices.\n*Mitigation:* check the asset has reliable price feeds; monitor for unusual deviations.\n\n**6. Infrastructure risk**\nL2 chains can have downtime, upgradeable contracts, limited fraud proofs. Robinhood Chain is Stage 0 on L2Beat.\n*Mitigation:* don't keep your entire portfolio on one chain. Understand the L2's trust assumptions.\n\n**7. Tax complexity**\nTokenized stocks may create taxable events in ways traditional stocks don't — swaps, LP entries/exits, cross-chain bridges. Treatment varies by jurisdiction and is often unclear.\n*Mitigation:* keep records of every transaction. Consult a tax professional.",
      },
    ],
    sources: [
      { label: 'SEC Staff Statement on Tokenized Securities (Jan 2026)', href: 'https://www.sec.gov/newsroom/speeches-statements' },
      { label: "Robinhood's Tokenized Stocks: The Good, The Bad, and The Fix (RWA.xyz)", href: 'https://www.rwa.xyz/' },
      { label: 'L2Beat — Robinhood Chain', href: 'https://l2beat.com/scaling/projects' },
    ],
  },
  {
    id: 9,
    title: 'The Future',
    subtitle: 'Where this is going, and how fast',
    icon: '🔮',
    color: '#a855f7',
    bgColor: '#1c1030',
    intro:
      'RWA tokenization is not a crypto fad. It is the infrastructure upgrade traditional finance has needed for decades — and the institutions stopped "exploring" some time ago.',
    sections: [
      {
        id: '9-1',
        title: "What's Coming",
        why: 'Six trends already visible in production, not on roadmaps.',
        content:
          '- **More stocks on-chain** — Ondo already has 470+. Expect thousands as regulatory clarity improves.\n- **Institutional adoption** — BlackRock\'s BUIDL has crossed $2.5B+. Securitize listed on the NYSE and tokenized its own stock. Franklin Templeton at $400M+ AUM.\n- **True ownership** — issuer-sponsored models where the token *is* the share, with voting rights and dividends.\n- **Cross-chain expansion** — stock tokens on Solana, Base, Arbitrum and more.\n- **Launchpad-as-stock-accumulator** — UniPump pioneers a model where every token launch builds a stock-backed reserve. If it works, expect others to adopt "stock back" mechanics.\n- **AI integration** — autonomous agents trading stock tokens 24/7 based on strategy.\n- **Regulatory frameworks** — SEC guidance evolving, MiCA in Europe, global coordination emerging.',
      },
      {
        id: '9-2',
        title: 'The Big Picture',
        why: 'The one-paragraph version you can repeat to anyone.',
        content:
          '- **$2–4 trillion** projected by 2030 (McKinsey, conservative estimate)\n- Every major bank is **already live**, not just exploring\n- Settlement goes from **T+1 to T+0**\n- Access goes from **broker-gated to wallet-native**\n\nThe question isn\'t whether stocks will move on-chain. It\'s how fast.\n\n*Reminder on sizing: BCG/ADDX\'s $16T figure is a business-opportunity estimate, not a market-cap projection.*',
      },
    ],
    sources: [
      { label: 'RWA.xyz — live market data', href: 'https://www.rwa.xyz/' },
      { label: 'RWA Tokenization in 2026 (Finextra)', href: 'https://www.finextra.com/' },
      { label: 'Dinari Brings Tokenized US Stocks to American Investors (CoinDesk)', href: 'https://www.coindesk.com/' },
    ],
  },
];

export const QUIZ = [
  {
    q: 'What does RWA stand for?',
    a: ['Random Web Assets', 'Real-World Assets', 'Reserved Wallet Allocation', 'Regulated Web Applications'],
    correct: 1,
    explain: 'Real-world assets: anything of value that exists outside the blockchain — stocks, bonds, real estate, commodities, treasuries, art.',
  },
  {
    q: 'What is the main advantage of tokenized stocks over traditional stocks?',
    a: [
      'They always go up in price',
      '24/7 trading, instant settlement, and fractional ownership',
      'They give you more voting rights',
      'They are tax-free',
    ],
    correct: 1,
    explain: 'Tokenized stocks trade around the clock, settle atomically instead of T+1, and can be bought fractionally from $1.',
  },
  {
    q: 'What is the difference between custodial and synthetic tokenized stocks?',
    a: [
      'There is no difference',
      'Custodial tokens are backed by real shares; synthetic tokens only track the price',
      'Synthetic tokens are more regulated',
      'Custodial tokens are cheaper',
    ],
    correct: 1,
    explain: 'With a custodial token a third party holds real shares 1:1. A synthetic token holds no shares — it is a debt or linked instrument giving price exposure only.',
  },
  {
    q: 'Robinhood Chain stock tokens are ERC-20 tokens that implement which additional standard?',
    a: ['ERC-721', 'ERC-1155', 'ERC-8056', 'ERC-404'],
    correct: 2,
    explain: 'ERC-8056 adds a UI multiplier for corporate actions such as splits, without changing raw token balances.',
  },
  {
    q: 'What happens during a stock split with ERC-8056 tokens?',
    a: [
      'Your tokens are burned and reissued',
      'The UI multiplier updates — displayed balance doubles without changing raw token counts',
      'You need to claim new tokens',
      'Nothing changes',
    ],
    correct: 1,
    explain: 'A 2-for-1 split moves the multiplier from 1.0 to 2.0. Wallets show double the balance; the raw ERC-20 balance is untouched.',
  },
  {
    q: 'What is the largest RWA category on-chain by value?',
    a: ['Tokenized stocks', 'Tokenized real estate', 'Tokenized US Treasuries', 'Tokenized commodities'],
    correct: 2,
    explain: 'Tokenized US Treasuries lead at roughly $12.88B. Equities are the fastest-growing category, but not yet the largest.',
  },
  {
    q: 'What risk does the SEC warn about with third-party tokenized stocks?',
    a: [
      'They might be too cheap',
      'Counterparty and bankruptcy risk from the issuer',
      'They trade too fast',
      'They are too decentralized',
    ],
    correct: 1,
    explain: 'If the issuer goes bankrupt you hold a claim against the issuer, not against the underlying stock.',
  },
  {
    q: 'Which platform is SEC-registered and passes through real dividends?',
    a: ['Uniswap', 'MetaMask', 'Dinari', 'OpenSea'],
    correct: 2,
    explain: 'Dinari is an SEC-registered transfer agent, backs dShares 1:1 with real equities, and passes through true corporate cash dividends.',
  },
  {
    q: 'What does "composability" mean for tokenized stocks?',
    a: [
      'They can be printed',
      'They can interact with DeFi protocols — lending, LP, NFTs',
      'They can change color',
      'They can only be held in one wallet',
    ],
    correct: 1,
    explain: 'Because they are standard ERC-20s, stock tokens can be collateral, LP positions, or wrapped inside DN404 NFTs.',
  },
  {
    q: "What is McKinsey's projected tokenized-asset market size by 2030?",
    a: ['$1 billion', '$100 billion', '$2-4 trillion', '$500 billion'],
    correct: 2,
    explain: "McKinsey's conservative estimate is $2–4 trillion. BCG/ADDX's $16T figure is an opportunity sizing, not a market-cap projection.",
  },
];

export const PASS_MARK = 7;

/**
 * Chrome and labels. Kept here rather than inline in the view so translation
 * overlays can reach every string on the page.
 */
export const UI = {
  back: 'Back to courses',
  heroTitle: 'RWA 101: Tokenized Stocks',
  heroSubtitle: 'Wall Street on-chain',
  heroLede: 'Own Apple, Nvidia and Tesla from your crypto wallet. 24/7. No broker required.',
  badgeChapters: '10 chapters',
  badgeDuration: '~50 min',
  badgeLevel: 'Beginner → Intermediate',
  badgeQuiz: 'Interactive quiz',
  tickerNote: 'on-chain',
  chapterSources: 'Chapter {n} sources',
  quizChapterTitle: 'Quiz — Test Your RWA Knowledge',
  quizChapterSubtitle: '{n} questions · pass mark {pass}/{n} · certificate “RWA Explorer”',
  quizIntro:
    'Ten questions covering everything from the three models to ERC-8056 and the risk list. Answers are saved as you go.',
  quizSubmit: 'Submit answers',
  quizAnswerAll: 'Answer all {n} questions ({done}/{n})',
  quizRetake: 'Retake quiz',
  quizPassTitle: 'Certificate unlocked — RWA Explorer',
  quizPassBody:
    'You cleared the {pass}/{n} pass mark. You understand what you own when you buy a tokenized stock — which puts you ahead of most people buying them.',
  quizFailTitle: 'Pass mark is {pass}/{n}',
  quizFailBody:
    'Close. Revisit chapters 2 and 8 — the three models and the risk list carry most of the answers.',
  nextEyebrow: 'Next rabbit hole',
  nextTitle: 'DN404: NFT Ownership Reimagined',
  nextBody:
    'How a pixel unicorn ends up paying you in Nvidia — the standard behind the Stock Back model.',
  sourcesHeading: '📚 Sources & Further Reading',
  disclaimer:
    'Educational content only. Not financial advice. Tokenized stocks are economic exposure, not shares — figures are as of August 2026 and change constantly. Do your own research.',
};

/** The three-model cards in chapter 2. Verdict words are translated; tone is not. */
export const MODELS = [
  {
    n: '1',
    tone: 'emerald',
    name: 'Issuer-sponsored',
    verdict: 'Best',
    line: 'The company issues the token. Can carry real equity rights.',
  },
  {
    n: '2',
    tone: 'amber',
    name: 'Custodial / 1:1 backed',
    verdict: 'Common',
    line: 'A third party holds real shares. You carry their counterparty risk.',
  },
  {
    n: '3',
    tone: 'red',
    name: 'Synthetic / linked',
    verdict: 'Riskiest',
    line: 'No shares held. Price exposure only — no dividends, no ownership.',
  },
];
