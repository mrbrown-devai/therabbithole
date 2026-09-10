// Robinhood 101: The Broker That Became a Blockchain — course content.
//
// Companion to the vlad-tenev course, which ends on the thesis this one tests:
// he keeps building rails for serious trading and unserious traffic turns up.
// Figures marked {{token}} come from the weekly DefiLlama refresh
// (scripts/update-metrics.mjs); everything else is dated in place.

export const COURSE_ID = 'robinhood-101-progress';

export const CHAIN_STATS = [
  { label: 'TVL', value: '{{robinhoodTvl}}', note: 'DefiLlama · {{asOf}}' },
  { label: 'Stablecoin cap', value: '{{robinhoodStables}}', note: 'DefiLlama · {{asOf}}' },
  { label: 'DEX volume 24h', value: '{{robinhoodDexVolume}}', note: 'DefiLlama · {{asOf}}' },
  { label: 'Bridged TVL', value: '{{robinhoodBridged}}', note: 'DefiLlama · {{asOf}}' },
];

export const LEVELS = [
  {
    id: 1,
    title: 'From Broker to Blockchain',
    subtitle: 'June 2025 to July 2026 · Cannes to mainnet',
    icon: '🏗️',
    color: '#CCFF00',
    bgColor: '#1c2410',
    intro:
      'A retail brokerage with tens of millions of customers decided the rails underneath it were the problem, and went and built new ones. That decision has a date, a stage and a keynote title.',
    sections: [
      {
        id: '1-1',
        title: 'Why a Broker Builds a Chain',
        why: 'Every other question in this course depends on getting this motivation right.',
        content:
          "Brokerages do not usually build blockchains. To understand why this one did, you need the single fact the [Vlad Tenev course](/courses/vlad-tenev) is built around.\n\nIn January 2021, Robinhood restricted buying on GameStop. The reason was not a conspiracy and not a server failure — it was a **collateral demand from the clearing house**, triggered by the settlement cycle. Trades took a business day to settle, and for that day somebody had to post cash against the risk.\n\nTenev could not fix that from inside the app. The constraint lived in the plumbing, and the plumbing belonged to somebody else.\n\n**A blockchain settles atomically.** There is no overnight window, so there is no collateral call to cover it. Read that way, Robinhood Chain is not a crypto pivot. It is a man buying the one thing that embarrassed him in front of Congress.",
      },
      {
        id: '1-2',
        title: 'The Timeline',
        why: 'Three dates, thirteen months apart. The gap between announcement and mainnet is itself informative.',
        timeline: [
          {
            date: 'Jun 30, 2025',
            title: 'Cannes — the announcement',
            content:
              'At an event on the French Riviera, Robinhood switches on more than 200 tokenized US stocks and ETFs for customers across the EU and EEA, and says it intends to build its own Layer 2. The product ships before the chain does.',
          },
          {
            date: 'Feb 10, 2026',
            title: 'Public testnet',
            content:
              'Chain ID 46630 goes live. Developers get a year of warning before real money arrives — unusually patient by crypto standards.',
          },
          {
            date: 'Jul 1, 2026',
            title: 'Mainnet, at the Old Royal Naval College',
            content:
              'Tenev and Johann Kerbrat launch the public mainnet at a keynote titled "The World Is Flat". Chain ID 4663. Stock Tokens, agentic trading and a DeFi suite are announced alongside it.',
          },
          {
            date: 'Jul 11–13, 2026',
            title: 'Ten days later, the memecoins',
            content:
              'Noxa, the launchpad that had been minting tokens at industrial scale, stops accepting launches and goes dark. Chapter 6 is about what happened in between.',
          },
        ],
      },
      {
        id: '1-3',
        title: 'The Pitch, In Their Words',
        why: 'Worth reading the claim carefully now, so chapter 9 can check it against the chain.',
        callout: {
          variant: 'important',
          content:
            '"The World Is Flat" is a claim about **access**: that a share of Nvidia should be reachable from anywhere, at any hour, by anyone with a wallet — not just during New York business hours by someone with a US brokerage account.\n\nHold that claim. By chapter 10 you will be able to say precisely which half of it the chain delivered, and which half it inverted.',
        },
      },
    ],
    sources: [
      {
        label: 'Robinhood Newsroom — mainnet, Stock Tokens, agentic trading',
        href: 'https://robinhood.com/us/en/newsroom/robinhood-accelerates-global-expansion-robinhood-chain-mainnet-stock-tokens-agentic-trading/',
      },
      { label: 'Robinhood Chain documentation', href: 'https://docs.robinhood.com/chain/' },
      { label: 'The Rabbit Hole — Vlad Tenev', href: '/courses/vlad-tenev' },
    ],
  },

  {
    id: 2,
    title: 'What It Actually Is',
    subtitle: 'An Arbitrum Orbit L2, and what that buys you',
    icon: '⚙️',
    color: '#00A604',
    bgColor: '#0a2410',
    intro:
      'Robinhood Chain is not a new blockchain design. It is a well-understood rollup stack, configured by a company with a balance sheet. Knowing exactly which stack tells you most of what you need.',
    sections: [
      {
        id: '2-1',
        title: 'The Stack in One Paragraph',
        why: 'Strip the branding and you can reason about it like any other L2.',
        content:
          'Robinhood Chain is an **EVM-equivalent Layer 2** running **Arbitrum Nitro** on the **Arbitrum Orbit** framework. It posts its data to Ethereum L1 as blobs (EIP-4844) and settles there.\n\nWhat that means in practice:\n\n- **Solidity contracts deploy unchanged.** No new language, no new tooling.\n- **ethers.js, viem, web3.py, Hardhat, Foundry and Remix all work** against a Robinhood Chain endpoint with nothing more than a network config.\n- Security inherits from Ethereum, with the usual rollup caveats about sequencing and upgrade keys.\n\nIf you have shipped on Arbitrum, Base or any Orbit chain, you already know how to ship here.',
      },
      {
        id: '2-2',
        title: 'The Numbers That Define It',
        why: 'Four specifics that come up constantly, and one absence that matters more than any of them.',
        content:
          '- **Chain ID: 4663** (mainnet). The testnet is **46630** — one digit longer, easy to confuse, and chapter 4 explains why that matters.\n- **Gas is paid in ETH.** Same as Ethereum, same as Arbitrum One.\n- **Block time is roughly 100ms**, with preconfirmations, dynamic fee pricing and throughput headroom well beyond current use.\n- **Block explorer:** Blockscout, at `robinhoodchain.blockscout.com`.\n\nAnd the absence: **there is no Robinhood Chain token.** No native gas token, no airdrop, no governance coin. Every token that claims to be one is somebody else\'s. Keep that sentence handy — it is the single most useful piece of scam protection in this course.',
      },
      {
        id: '2-3',
        title: 'What "100ms Blocks" Is Really For',
        why: 'Fast blocks are usually marketing. Here there is a specific reason.',
        content:
          'Sub-second blocks do not make a memecoin trade meaningfully better. They matter for a different workload: **order-book-style trading and market making**, where the gap between quote and fill is the entire business.\n\nA chain designed around tokenized equities has to assume professional counterparties who quote continuously. 100ms blocks with preconfirmations are what you build when you expect Citadel-shaped participants, not when you expect people aping into a cat coin.\n\nThat is the tension this whole course keeps returning to: **the engineering is aimed at one audience and the traffic arrived from another.**',
      },
    ],
    sources: [
      { label: 'Connecting to Robinhood Chain — official docs', href: 'https://docs.robinhood.com/chain/connecting' },
      { label: 'What is Robinhood Chain? (Chainstack)', href: 'https://chainstack.com/what-is-robinhood-chain/' },
      {
        label: "A Developer's Guide to Stock Tokens Onchain (QuickNode)",
        href: 'https://www.quicknode.com/guides/robinhood/what-is-robinhood-chain',
      },
    ],
  },

  {
    id: 3,
    title: 'Stock Tokens',
    subtitle: 'What you are actually holding',
    icon: '📜',
    color: '#3b82f6',
    bgColor: '#101c2c',
    intro:
      'This is the product the chain was built for, and the part most guides get wrong. A Stock Token is not a share. Understanding precisely what it is instead is the most valuable thing in this course.',
    sections: [
      {
        id: '3-1',
        title: 'Economic Exposure, Not Ownership',
        why: 'The difference between these two phrases is the difference between owning Nvidia and owning a claim on a company that owns Nvidia.',
        critical: true,
        content:
          'Robinhood Stock Tokens are **tokenized debt securities issued by a Robinhood entity**. They track the price of an underlying stock. They are not the stock.\n\nConcretely, that means:\n\n- **No shareholder rights.** No voting. No direct claim on the company whose ticker is on the token.\n- **Your counterparty is the issuer.** If the issuer fails, you are a creditor of the issuer — not a holder of Nvidia.\n- **Dividends and splits are handled by the issuer**, passed through by contract rather than by share registry.\n\nThe marketing language and the legal language coexist and describe the same product differently. Only one of them governs what happens if something breaks. The [RWA 101 course](/courses/rwa-101) sets out the three tokenization models in full; Robinhood sits in the third and riskiest one.',
      },
      {
        id: '3-2',
        title: 'ERC-8056 and the Multiplier Trick',
        why: 'The corporate-actions problem is genuinely hard, and this solution is genuinely elegant.',
        content:
          "A share can split. A token supply is fixed by its contract. Reconciling those two facts is the awkward engineering problem in tokenized equities, and Robinhood's answer is a draft standard called **ERC-8056**, co-authored with Superstate.\n\nThe mechanism is a **scaled UI amount**:\n\n- Each stock is a **standard ERC-20**. Raw balances never change.\n- The contract exposes a **`uiMultiplier()`**. A 2-for-1 split moves it from 1.0 to 2.0.\n- Wallets read the multiplier and display double the balance. Nothing rebases, no balances are rewritten, no gas is spent across every holder.\n\nBecause they stay plain ERC-20s underneath, **every DEX, lending market and vault on the chain can handle them with no special integration.** That single design decision is what makes chapter 7 possible — and it is also what let the memecoins pair against them.",
      },
      {
        id: '3-3',
        title: 'Two Products, Two Footprints',
        why: 'Almost every guide conflates these, and the numbers then stop making sense.',
        content:
          'Robinhood ships **two different tokenized-equity products**, and they are not the same thing:\n\n**Classic Stock Tokens** — over 2,000 US-listed stocks and ETPs, available to eligible customers in **30 EU and EEA countries**, held inside the Robinhood app.\n\n**On-chain Stock Tokens** — 90-plus tokens, live on Robinhood Chain since July 2026, reachable from Robinhood Wallet and any compatible wallet, in **more than 120 countries** subject to local restrictions.\n\nWhen a headline says "2,000 tokenized stocks" and another says "90", neither is wrong. They are counting different products.',
      },
      {
        id: '3-4',
        title: 'The Regulatory Position',
        why: 'What the Liechtenstein approval does and does not mean is routinely overstated.',
        critical: true,
        content:
          "The issuance runs through a **base prospectus approved by Liechtenstein's Financial Market Authority** under the EU Prospectus Regulation.\n\nRead the filing carefully and it says what these approvals always say: the FMA approved the document for **completeness, consistency and comprehensibility**. Robinhood's own filing states the approval **should not be treated as an endorsement** of the issuer or the product. It is a documentation standard, not a safety rating.\n\nAnd the hard boundary:\n\n- Stock Tokens are **not registered under the US Securities Act**\n- They **cannot be offered, sold or delivered in the United States or to US persons**\n- Further restrictions apply in **Canada, the United Kingdom and Switzerland**\n\nA US resident cannot legally buy the regulated product on the chain their own brokerage built. Chapter 10 returns to what that does to the rest of the ecosystem.",
      },
    ],
    sources: [
      { label: 'Stock Tokens — Robinhood Chain docs', href: 'https://docs.robinhood.com/chain/stock-tokens/' },
      {
        label: 'Building with Stock Tokens — Robinhood Chain docs',
        href: 'https://docs.robinhood.com/chain/building-with-stock-tokens/',
      },
      {
        label: "Robinhood's Tokenized Stocks: The Good, The Bad, and The Fix (RWA.xyz)",
        href: 'https://app.rwa.xyz/blog/robinhoods-tokenized-stocks-the-good-the-bad-and-the-fix',
      },
      { label: 'The Rabbit Hole — RWA 101', href: '/courses/rwa-101' },
    ],
  },

  {
    id: 4,
    title: 'Getting On-Chain',
    subtitle: 'The practical bit, and the three ways people lose money doing it',
    icon: '🔌',
    color: '#22d3ee',
    bgColor: '#0a2028',
    intro:
      'Adding a network is four fields in a wallet. Doing it without getting robbed is the part worth reading. Every step below has a corresponding way people have already lost funds.',
    sections: [
      {
        id: '4-1',
        title: 'Add the Network',
        why: 'Get the chain ID wrong and you are on a testnet wondering why your balance is fake.',
        content:
          'Any EVM wallet works — Robinhood Wallet, MetaMask, Rabby.\n\n- **Network name:** Robinhood Chain\n- **Chain ID:** `4663`\n- **RPC URL:** `https://rpc.mainnet.chain.robinhood.com`\n- **Currency symbol:** ETH\n- **Block explorer:** `https://robinhoodchain.blockscout.com`\n\n**The testnet is 46630.** Same digits plus a zero. If your tokens show up but are worthless, check which number you typed.',
      },
      {
        id: '4-2',
        title: 'Use the Official RPC',
        why: 'A malicious RPC does not steal your keys. It does something quieter and often worse.',
        critical: true,
        content:
          "Take the RPC URL from the [official docs](https://docs.robinhood.com/chain/connecting), not from a search result, a Telegram message or a helpful reply on X.\n\nA hostile RPC endpoint cannot extract your private key — but it controls what your wallet *sees*. It can show you stale balances, hide transactions, misreport a simulation so a malicious approval looks harmless, or front-run what you broadcast.\n\nThe attack does not look like an attack. It looks like your wallet working normally.",
      },
      {
        id: '4-3',
        title: 'Bridge, and Keep Gas',
        why: 'The most common self-inflicted mistake on any new chain, and it is entirely avoidable.',
        content:
          'You need **ETH on Robinhood Chain** to do anything at all, because ETH is the gas token.\n\nBridge in through the canonical Arbitrum Orbit bridge or a supported third-party route. Then, before you spend:\n\n- **Leave a gas buffer.** Bridging your entire balance into a token position leaves you unable to transact — including unable to sell.\n- **Bridging out is not instant.** Rollup withdrawal windows apply. Plan around it rather than discovering it.\n- **Test with a small amount first.** Every time, on every new chain.',
      },
      {
        id: '4-4',
        title: 'Verify Every Token Address',
        why: 'On a chain with no native token and a famous brand, impersonation is the default state.',
        critical: true,
        content:
          'Because **there is no official Robinhood Chain token**, anything presenting itself as one is an impostor by definition.\n\nBefore you trade anything:\n\n1. Get the contract address from the **project\'s own site or the official docs** — never from a DEX search box.\n2. Check it on **Blockscout**. Look at holder count, age and whether the contract is verified.\n3. Treat a name match as **zero evidence**. Anyone can deploy an ERC-20 called anything.\n\nThis is not new advice. It is simply more load-bearing here than on most chains, because the brand is a household name and the chain is young.',
      },
    ],
    sources: [
      { label: 'Connecting to Robinhood Chain — official docs', href: 'https://docs.robinhood.com/chain/connecting' },
      { label: 'Robinhood Chain RPC & network details', href: 'https://trustswap.com/robinhood/network-details' },
      { label: 'Robinhood Chain on Blockscout', href: 'https://robinhoodchain.blockscout.com' },
    ],
  },

  {
    id: 5,
    title: 'The Day-One Stack',
    subtitle: 'Who shipped on launch day, and why that list is the real signal',
    icon: '🧱',
    color: '#a78bfa',
    bgColor: '#1a1030',
    intro:
      'New chains usually launch empty and beg for integrations. This one launched with a working DeFi stack and institutional infrastructure already in place. That is a statement about who was invited.',
    sections: [
      {
        id: '5-1',
        title: 'Live at Launch',
        why: 'The composition of this list tells you what the chain was expecting to be used for.',
        content:
          '**Trading venues:** Uniswap, Pleiades, Arcus, Rialto, Lighter, and 1inch for aggregation.\n\n**Infrastructure:** Chainlink shipped **CCIP, Data Streams and Data Feeds live on day one** — cross-chain messaging plus the price oracles that tokenized equities cannot function without. Alchemy provided node infrastructure. BitGo provided qualified custody.\n\n**Arriving shortly after:** PancakeSwap and Ramses DLMM.\n\nCustody and institutional-grade oracles on launch day is not how a memecoin chain opens. It is how you open when you expect regulated counterparties.',
      },
      {
        id: '5-2',
        title: 'Why Chainlink Was Non-Negotiable',
        why: 'A tokenized stock without a trustworthy price is just a number in a database.',
        content:
          "A Stock Token has to know what the underlying is worth, continuously, in a way that a lending market can liquidate against and a DEX can price around.\n\nThat is an oracle problem, and it is the one place where getting it slightly wrong is catastrophic rather than annoying. A stale or manipulable NVDA price on a chain where NVDA tokens are used as collateral is a straight path to bad debt.\n\nShipping Data Streams and Data Feeds on day one is the least glamorous line in the launch announcement and probably the most important.",
      },
      {
        id: '5-3',
        title: 'What Launching Full Actually Buys',
        why: 'It changes what the first weeks of a chain can look like — for better and worse.',
        content:
          'A chain that opens with deep venues, aggregation, oracles and custody is immediately **usable at scale on day one**.\n\nThe upside is obvious. The part nobody plans for is that *usable at scale* is audience-neutral. Uniswap V4 hooks, instant liquidity and 100ms blocks are exactly as convenient for a token factory as for a market maker.\n\nThe stack built for institutions is the same stack that made chapter 6 possible within ten days.',
      },
    ],
    sources: [
      {
        label: 'Robinhood Newsroom — mainnet and DeFi suite',
        href: 'https://robinhood.com/us/en/newsroom/robinhood-accelerates-global-expansion-robinhood-chain-mainnet-stock-tokens-agentic-trading/',
      },
      { label: 'Robinhood Chain protocol rankings — DefiLlama', href: 'https://defillama.com/chain/robinhood-chain' },
      {
        label: 'Robinhood Chain: From Brokerage to an Onchain Capital Market (CertiK)',
        href: 'https://www.certik.com/blog/robinhood-chain-onchain-capital-market',
      },
    ],
  },

  {
    id: 6,
    title: 'What People Actually Do On It',
    subtitle: 'The gap between the pitch and the block explorer',
    icon: '🐈',
    color: '#f59e0b',
    bgColor: '#2c2010',
    intro:
      'Robinhood built a chain for tokenized equities. Within two weeks the dominant activity was memecoins. This chapter is the honest account of what the chain is used for, because almost no other guide will give you one.',
    sections: [
      {
        id: '6-1',
        title: 'Noxa, and 18,600 Tokens a Day',
        why: 'The scale is the story. This was not a few opportunists — it was industrial throughput.',
        content:
          'A launchpad called **Noxa** arrived almost immediately and turned the chain into a token factory. At its peak it was averaging roughly **18,600 new token launches per day**.\n\nThat is not a typo, and it is not a rate any human demand curve produces. It is bots minting into bots.\n\nThe wave it fed was real in volume terms — an estimated **$4B memecoin boom** — and Noxa collected an estimated **$12M in cumulative fees** on the way through.',
      },
      {
        id: '6-2',
        title: 'The Collapse',
        why: 'How it ended says more about the model than how it started.',
        timeline: [
          {
            date: 'Jul 11, 2026',
            title: 'Launches stop',
            content:
              'Noxa halts new launches, citing a flood of low-quality tokens and bot spam overwhelming the platform.',
          },
          {
            date: 'Jul 13, 2026',
            title: 'It goes dark',
            content:
              'Two days later the launchpad disappears, having given away its accumulated revenue on the way out.',
          },
          {
            date: 'Immediately after',
            title: 'The tokens reprice',
            content:
              'Tokens dependent on the launchpad fall hard — the flagship down more than 33% in 24 hours. Liquidity that existed because a machine was making it stops existing when the machine stops.',
          },
        ],
      },
      {
        id: '6-3',
        title: 'CASHCAT — the Joke That Closed the Loop',
        why: 'Of everything on this chain, this is the detail that best captures it.',
        content:
          'Before they settled on "Robinhood", Tenev and Baiju Bhatt considered other names. One of them was **CashCat**.\n\nIn 2026 an unaffiliated community revived that discarded brand as a memecoin — **on Tenev\'s own blockchain**. It rose more than **2,100% in a week**, peaked above **$0.17**, reached roughly **$156M in market cap**, and on its best day did about **$98M in 24-hour volume — around 17% of the entire chain\'s DEX activity.**\n\nNo affiliation with the company. No native token to compete with. Just the name he threw away, coming back as the most-traded thing on the rails he built.',
      },
      {
        id: '6-4',
        title: 'Where Launches Happen Now',
        why: 'The ecosystem reorganised rather than disappeared.',
        content:
          'After Noxa, the launchpad roster settled into:\n\n- **hood.fun** and **PONS** — from the chain\'s earliest weeks\n- **Pools.trade** — Uniswap Labs\', launched 5 August 2026\n- **TrustSwap Launchpad** — multi-stage due diligence and KYC, positioned explicitly as the sober alternative\n\nThat last one is the interesting entry. The market\'s answer to a launchpad collapse was a launchpad with compliance checks — which is, in miniature, the entire argument of this course.',
      },
    ],
    sources: [
      {
        label: 'Robinhood built an RWA chain. Memecoins took it. (crypto.news)',
        href: 'https://crypto.news/robinhood-chain-memecoins-tokenized-stocks/',
      },
      {
        label: 'Noxa vanishes after fueling the $4B memecoin boom (crypto.news)',
        href: 'https://crypto.news/noxa-vanishes-after-robinhood-chains-4b-memecoin-boom/',
      },
      {
        label: 'The launchpad that made $12M and disappeared (CoinDesk)',
        href: 'https://www.coindesk.com/business/2026/07/15/the-launchpad-that-fueled-robinhood-chain-s-memecoin-boom-just-gave-away-all-its-revenue',
      },
      { label: 'What is CASHCAT? (crypto.news)', href: 'https://crypto.news/what-is-cashcat-robinhood-chain-memecoin/' },
    ],
  },

  {
    id: 7,
    title: 'Stock-Paired Memecoins',
    subtitle: 'The thing that can only exist here',
    icon: '🦄',
    color: '#ec4899',
    bgColor: '#2c1024',
    intro:
      'On every other chain a memecoin trades against ETH or a stablecoin. Here it can trade against Nvidia. That single fact produces designs that are genuinely new, and risks that are genuinely stacked.',
    sections: [
      {
        id: '7-1',
        title: 'Why Pairing Against NVDA Is Possible',
        why: 'It follows directly from the design decision in chapter 3.',
        content:
          'Stock Tokens are **plain ERC-20s**. The multiplier handles corporate actions off to one side, so nothing about the token interface is unusual.\n\nWhich means any liquidity pool that can hold an ERC-20 can hold NVDA. There is no permission to request and no integration to build. A memecoin can open a Uniswap pool paired against tokenized Nvidia the same afternoon it deploys.\n\nRobinhood did not build this feature. It is a **second-order consequence** of making Stock Tokens boringly standard — which was the right engineering call, and this is the bill for it.',
      },
      {
        id: '7-2',
        title: 'What Gets Built With It',
        why: 'Three recurring patterns, in ascending order of how much can go wrong.',
        content:
          '**Stock-denominated pools.** The token\'s price is quoted in NVDA rather than in dollars or ETH. Your position now has two independent sources of movement, and a "flat" day for the memecoin can still be a losing one.\n\n**Stock tokens as collateral.** Post NVDA, borrow against it, deploy the proceeds. Standard DeFi, except the collateral is a debt instrument tracking an equity, priced by an oracle, on a chain younger than most people\'s running shoes.\n\n**Stock-back reward farms.** Fees accumulate in a reserve, the reserve buys Stock Tokens, and holders receive fractional equity exposure for holding a meme asset. The [DN404 course](/courses/dn404) covers the most developed version of this in detail.',
      },
      {
        id: '7-3',
        title: 'The Risk Is Multiplied, Not Added',
        why: 'This is the part the marketing for these products never spells out.',
        critical: true,
        content:
          'Holding a stock-paired memecoin stacks every layer at once:\n\n1. **Memecoin risk** — it can go to zero this afternoon.\n2. **Stock Token issuer risk** — you hold a claim on the issuer, not on Nvidia (chapter 3).\n3. **Oracle risk** — a bad price feed liquidates positions that were never actually underwater.\n4. **Smart contract risk** — young protocols, novel mechanisms, thin audit coverage.\n5. **Regulatory risk** — nobody has ruled definitively on what a leveraged, tokenized-equity-collateralised meme position *is*.\n\nThese do not add up. They compound, and they correlate: the conditions that break one layer tend to be the conditions that break the next.',
        callout: {
          variant: 'important',
          content:
            'A useful test before entering any of these: **name the entity you are exposed to at each of the five layers.** If you cannot name all five, you do not know what you are holding.',
        },
      },
    ],
    sources: [
      {
        label: 'Robinhood Chain Layer-2: Tokenized Stocks vs Memecoin Volume',
        href: 'https://www.spotedcrypto.com/robinhood-chain-memecoin-volume-explained/',
      },
      {
        label: 'Robinhood Chain memecoins — safety-checked list (TrustSwap)',
        href: 'https://trustswap.com/robinhood/memecoins',
      },
      { label: 'The Rabbit Hole — DN404', href: '/courses/dn404' },
    ],
  },

  {
    id: 8,
    title: 'AI-Native and Agentic Trading',
    subtitle: 'Machine-readable markets, and what has to be true first',
    icon: '🤖',
    color: '#14b8a6',
    bgColor: '#0a2422',
    intro:
      'Robinhood shipped agentic trading alongside the chain. A market that trades 24/7 in standard ERC-20s is a market an AI agent can actually operate in — which is a real capability and a real new surface for things to go wrong.',
    sections: [
      {
        id: '8-1',
        title: 'Why This Chain Suits Agents',
        why: 'Three properties that happen to remove the usual blockers.',
        content:
          'Traditional markets are hostile to autonomous agents: they close overnight, settle in T+1, gate access behind brokerage accounts, and expose no uniform machine interface.\n\nRobinhood Chain removes all four by construction:\n\n- **Always open.** No market hours to encode.\n- **Atomic settlement.** No position uncertainty between trade and settle.\n- **One uniform interface.** Every asset — equities and memecoins alike — is an ERC-20.\n- **Programmatic access.** A wallet and an RPC endpoint, no brokerage onboarding.\n\nRobinhood shipped agentic trading and an MCP interface as part of the same launch, which tells you this was designed for rather than discovered.',
      },
      {
        id: '8-2',
        title: 'The Guardrails You Have to Build Yourself',
        why: 'An agent with a funded wallet and no limits is not a strategy.',
        critical: true,
        content:
          'Anything you let trade on your behalf needs, at minimum:\n\n- **A spending cap that is enforced on-chain**, not merely requested in a prompt\n- **A key that is not your main wallet** — a session key or a dedicated account with a bounded balance\n- **An allowlist of contracts** it may interact with\n- **Slippage and position limits** it cannot exceed\n- **A kill switch you can reach from your phone**\n\nAnd the one that catches people: **an agent reading on-chain data is reading attacker-controlled input.** Token names, metadata and contract strings are written by whoever deployed them. Anything an agent ingests from the chain is untrusted text, not instructions.\n\nOur [Agent Protocol course](/courses/agent-protocol) covers building agents with these constraints properly.',
      },
      {
        id: '8-3',
        title: 'The Honest Status',
        why: 'Distinguishing shipped capability from projected future is most of thinking clearly here.',
        content:
          'What exists: a chain that is genuinely convenient for programmatic trading, an MCP interface, and a growing set of bots operating on it.\n\nWhat does not yet exist: evidence that autonomous agents trading tokenized equities produce better outcomes than not doing that. The category is roughly a year old on a chain that is barely older.\n\nTreat "AI-native" as a description of the **interface**, not a claim about **returns**.',
      },
    ],
    sources: [
      {
        label: 'Robinhood Newsroom — agentic trading',
        href: 'https://robinhood.com/us/en/newsroom/robinhood-accelerates-global-expansion-robinhood-chain-mainnet-stock-tokens-agentic-trading/',
      },
      { label: 'Robinhood Chain documentation', href: 'https://docs.robinhood.com/chain/' },
      { label: 'The Rabbit Hole — Agent Protocol', href: '/courses/agent-protocol' },
    ],
  },

  {
    id: 9,
    title: 'Reading the Chain',
    subtitle: 'How to check any claim in this course yourself',
    icon: '📊',
    color: '#60a5fa',
    bgColor: '#101c30',
    intro:
      'Every number in this course is checkable, and most published numbers about this chain are quoted without the caveat that makes them meaningful. This chapter is the sceptical reading guide.',
    sections: [
      {
        id: '9-1',
        title: 'The Live Figures',
        why: 'A snapshot to anchor against. These refresh weekly from DefiLlama.',
        stats: true,
        content:
          'Those four update automatically, so they will not match whatever a six-month-old article told you. **{{robinhoodAppFees}}** in app fees over 24h is the fifth number worth watching — and the next section explains why it is not the number most people think it is.',
      },
      {
        id: '9-2',
        title: 'Chain Fees Are Not App Fees',
        why: 'This single distinction accounts for most of the wildly different fee figures in circulation.',
        critical: true,
        content:
          'DefiLlama reports several fee lines for this chain and they measure different things:\n\n- **Chain fees** — what the sequencer earns for ordering and processing transactions. This is Robinhood\'s revenue.\n- **App fees** — what the ~150 protocols deployed on the chain earn from their users. This is everyone else\'s revenue.\n- **Chain revenue** and **app revenue** — the profit lines after costs, lower again.\n\nThey can differ by a factor of three or more. An article quoting a record fee day is often quoting the largest of the four without saying which one it picked.\n\nWhen you see a fee number for Robinhood Chain, **ask which line it is** before you conclude anything from it.',
      },
      {
        id: '9-3',
        title: 'The Arbitrum Revenue Loop',
        why: 'A structural detail with a live argument attached, and both sides are worth understanding.',
        content:
          'Robinhood Chain runs under the **Arbitrum Expansion Program**, which applies to chains built on Arbitrum\'s stack that settle elsewhere. The terms:\n\n- **10% of net protocol revenue** flows to the Arbitrum ecosystem — 8% to the DAO treasury, 2% to the Developer Guild\n- **Robinhood retains roughly 90%** of sequencer revenue\n\nThe base is **net** protocol revenue — sequencer profit after network costs — not gross fees, which materially changes the size of the number.\n\nThis has become a genuine public argument. Offchain Labs argues the arrangement is the point: an Orbit chain succeeding funnels real revenue to the DAO. Critics, including Solana co-founders, argue a 90/10 split in favour of a single company is a strange thing for a decentralization story to celebrate. **Both descriptions are accurate.** Which one matters depends on whether you are holding ARB.',
      },
      {
        id: '9-4',
        title: 'The Bot Caveat',
        why: 'The reason to discount volume figures on this chain specifically.',
        content:
          'Chapter 6 established that a launchpad on this chain was producing **18,600 tokens a day** at peak. Activity at that rate is not people.\n\nSo when you read a volume, ask:\n\n- **Is this wash trading?** Bots trading with bots produce volume and no economic activity.\n- **Is TVL sticky or mercenary?** Incentive-farmed liquidity leaves the day incentives stop.\n- **Does the address count mean users?** One person can run ten thousand wallets.\n\nNone of this means the chain is fake. **{{robinhoodTvl}}** in TVL and **{{robinhoodBridged}}** bridged is real capital that someone had to move. It means the headline numbers need a haircut before you reason with them — and nobody publishing them will apply it for you.',
      },
    ],
    sources: [
      { label: 'Robinhood Chain — DefiLlama', href: 'https://defillama.com/chain/robinhood-chain' },
      {
        label: 'Arbitrum to receive 10% of fees from Robinhood Chain (Crypto Briefing)',
        href: 'https://cryptobriefing.com/arbitrum-robinhood-chain-fee-sharing/',
      },
      {
        label: 'Offchain Labs and Solana co-founders spar over the fee model',
        href: 'https://cryptobriefing.com/robinhood-chain-fee-model-debate/',
      },
      { label: 'Robinhood Chain on Blockscout', href: 'https://robinhoodchain.blockscout.com' },
    ],
  },

  {
    id: 10,
    title: 'Risks and Open Questions',
    subtitle: 'What is genuinely unresolved',
    icon: '⚠️',
    color: '#FF5C5C',
    bgColor: '#2c1414',
    intro:
      'Not a disclaimer. These are the specific structural questions this chain has not answered yet, ending with the one that is the most interesting thing about it.',
    sections: [
      {
        id: '10-1',
        title: 'It Is a One-Company Chain',
        why: 'The concentration is the design, not an oversight — but it is still concentration.',
        critical: true,
        content:
          'A single public company operates the sequencer, issues the flagship asset, publishes the docs and runs the wallet most people use.\n\nThat is a coherent design — it is why custody and oracles were ready on day one. It also means:\n\n- **Sequencer control** sits with one entity, which can order or censor transactions\n- **Upgrade keys** sit with one entity\n- **Issuer risk and chain risk are the same risk.** The company backing your Stock Tokens is the company running the chain they settle on. Those exposures do not diversify each other.\n\nAnd there is **no native token**, so there is no governance mechanism through which anyone else gets a say. No airdrop to wait for either.',
      },
      {
        id: '10-2',
        title: 'The Compliance Inversion',
        why: 'The sharpest observation available about this chain, and almost nobody makes it.',
        critical: true,
        content:
          'Put chapter 3 and chapter 6 next to each other.\n\n**The regulated product is gated.** Stock Tokens run through an approved prospectus, and are unavailable to US persons and restricted in Canada, the UK and Switzerland. The compliant thing is the thing you probably cannot buy.\n\n**The unregulated product is open to everyone.** A memecoin deployed by an anonymous developer, on the same chain, in the same wallet, has no prospectus, no jurisdiction check and no restrictions at all.\n\nSo the chain built to bring regulated equities to the world offers a US resident exactly one category of asset: **the unregulated one.**\n\nThat is not hypocrisy on Robinhood\'s part — it is securities law meeting permissionless infrastructure, and there is no clean way to have both. But it is the outcome, and it is worth stating plainly.',
      },
      {
        id: '10-3',
        title: 'Open Questions',
        why: 'Honest unknowns, not rhetorical ones.',
        content:
          '- **Does institutional volume ever arrive?** The stack was built for it. So far the traffic is retail and automated.\n- **What happens in a real stress event?** No tokenized-equity chain has been through a market-wide dislocation. Oracle behaviour and liquidation cascades under stress are untested.\n- **Does the US position change?** A regulatory shift would transform the chain\'s addressable market overnight, in either direction.\n- **Does the memecoin activity persist or was it a launch phenomenon?** Noxa\'s collapse suggests some of it was structural, some purely extractive.\n- **Can a one-company chain credibly decentralize later?** Several have promised to. Few have.',
      },
      {
        id: '10-4',
        title: 'The Pattern, Restated',
        why: 'Where this course and the Vlad Tenev course meet.',
        summary: [
          '**2013** — A commission-free brokerage is built for long-term retail investors. It gets the meme stock squeeze.',
          '**2021** — A clearing house tells him what his users are allowed to do. He decides the rails are the problem.',
          '**2026** — He builds his own rails for tokenized equities. Within ten days they are a token factory.',
          '**The constant** — He builds serious infrastructure, and unserious traffic arrives to use it. Both times, the infrastructure worked exactly as specified.',
          '**The open question** — whether that is a failure of the thesis, or simply what happens when you genuinely remove the gatekeepers.',
        ],
        content:
          'The [Vlad Tenev course](/courses/vlad-tenev) argues that this pattern defines his career. This chain is its third iteration, and the cleanest one to observe, because for the first time the whole thing is happening on a public ledger you can read yourself.\n\nWhich is what chapter 9 was for.',
      },
    ],
    sources: [
      {
        label: 'Robinhood Chain: From Brokerage to an Onchain Capital Market (CertiK)',
        href: 'https://www.certik.com/blog/robinhood-chain-onchain-capital-market',
      },
      {
        label: 'Robinhood-AMC clash may speed US stock token rules (crypto.news)',
        href: 'https://crypto.news/robinhood-amc-clash-may-speed-us-stock-token-rules/',
      },
      { label: 'The Rabbit Hole — Vlad Tenev', href: '/courses/vlad-tenev' },
    ],
  },
];

export const QUIZ = [
  {
    q: 'What kind of chain is Robinhood Chain?',
    a: [
      'A Bitcoin sidechain',
      'A standalone Layer 1 with its own validators',
      'An Arbitrum Orbit Layer 2 running Arbitrum Nitro, settling to Ethereum',
      'A private permissioned ledger',
    ],
    correct: 2,
    explain:
      'EVM-equivalent, Arbitrum Nitro on the Orbit framework, posting blob data to Ethereum L1. Solidity contracts and standard tooling work unchanged.',
  },
  {
    q: 'What is the gas token on Robinhood Chain?',
    a: [
      'ETH',
      'A native HOOD chain token',
      'USDC',
      'Tokenized Nvidia',
    ],
    correct: 0,
    explain:
      'Gas is paid in ETH, exactly as on Ethereum and Arbitrum One. There is no native Robinhood Chain token — anything claiming to be one is an impostor.',
  },
  {
    q: 'What does a Robinhood Stock Token actually give you?',
    a: [
      'Registered shares with voting rights',
      'Economic exposure via a tokenized debt security issued by a Robinhood entity',
      'A direct claim on the underlying company',
      'A share certificate held by a US transfer agent',
    ],
    correct: 1,
    explain:
      'They track the price but are not the share. No voting rights, and your counterparty is the issuer — if the issuer fails you are its creditor, not a Nvidia shareholder.',
  },
  {
    q: 'What problem does the ERC-8056 uiMultiplier() solve?',
    a: [
      'It prevents front-running on stock trades',
      'It converts between currencies at the point of sale',
      'It caps how much of a stock any one wallet can hold',
      'It handles corporate actions like splits without rewriting every balance',
    ],
    correct: 3,
    explain:
      'A 2-for-1 split moves the multiplier from 1.0 to 2.0 and wallets display double. Raw ERC-20 balances never change, so no rebase and no gas spent across all holders.',
  },
  {
    q: 'What does the Liechtenstein FMA prospectus approval actually mean?',
    a: [
      'The FMA approved the document for completeness and consistency — explicitly not an endorsement',
      'The FMA guarantees the tokens are fully backed',
      'The tokens are now registered for sale in the United States',
      'The FMA audits Robinhood’s reserves quarterly',
    ],
    correct: 0,
    explain:
      "Robinhood's own filing states the approval should not be treated as an endorsement of the issuer or product. It is a documentation standard, not a safety rating.",
  },
  {
    q: 'Roughly how many tokens per day was the Noxa launchpad producing at its peak?',
    a: ['About 186', 'About 1,860', 'About 18,600', 'About 186,000'],
    correct: 2,
    explain:
      'Around 18,600 launches a day — a rate no human demand curve produces. Noxa halted launches on 11 July 2026 and went dark two days later.',
  },
  {
    q: 'Why can a memecoin on this chain pair its liquidity against tokenized Nvidia?',
    a: [
      'Robinhood grants pairing permission per project',
      'Because Stock Tokens are plain ERC-20s, so any pool can hold them',
      'Because Chainlink authorises each pair',
      'It cannot — stock pairs are blocked at the protocol level',
    ],
    correct: 1,
    explain:
      'A second-order consequence of making Stock Tokens boringly standard. No permission to request, no integration to build — which was the right engineering call and also the bill for it.',
  },
  {
    q: 'On DefiLlama, what is the difference between chain fees and app fees?',
    a: [
      'They are two names for the same figure',
      'Chain fees are quoted in ETH, app fees in dollars',
      'App fees are what the sequencer earns; chain fees are what users pay',
      'Chain fees are what the sequencer earns; app fees are what protocols on the chain earn',
    ],
    correct: 3,
    explain:
      'They can differ by a factor of three or more. Articles quoting a record fee day usually quote the largest of the four fee lines without saying which one.',
  },
  {
    q: 'Under the Arbitrum Expansion Program, how is Robinhood Chain revenue split?',
    a: [
      'About 90% to the Arbitrum DAO, 10% to Robinhood',
      'About 10% of net protocol revenue to the Arbitrum ecosystem, roughly 90% retained by Robinhood',
      '50/50 between Robinhood and the Arbitrum DAO',
      'All sequencer revenue goes to the Arbitrum DAO',
    ],
    correct: 1,
    explain:
      'The 10% splits 8% to the DAO treasury and 2% to the Developer Guild. The base is net protocol revenue — sequencer profit after costs — not gross fees.',
  },
  {
    q: 'What is the "compliance inversion" this course describes?',
    a: [
      'Robinhood must register the chain as a broker-dealer',
      'Memecoins on the chain are more heavily regulated than Stock Tokens',
      'The regulated Stock Tokens are geographically gated while unregulated memecoins are open to everyone',
      'US users get earlier access to Stock Tokens than EU users',
    ],
    correct: 2,
    explain:
      'A US person cannot buy the prospectus-approved product on the chain their own brokerage built, but can buy an anonymous memecoin on it freely. Securities law meeting permissionless infrastructure.',
  },
];

export const PASS_MARK = 7;

/**
 * Chrome and labels. Kept here rather than inline in the view so translation
 * overlays can reach every string on the page.
 */
export const UI = {
  back: 'Back to courses',
  heroTitle: 'Robinhood 101',
  heroSubtitle: 'The broker that became a blockchain',
  heroLede:
    'A public brokerage built its own Ethereum L2 for tokenized stocks. Ten days later it was a memecoin factory. Here is how the chain works, what Stock Tokens actually are, and how to read the numbers yourself.',
  badgeChapters: '10 chapters',
  badgeDuration: '~50 min',
  badgeLevel: 'Beginner → Intermediate',
  badgeQuiz: 'Interactive quiz',
  whyLabel: 'Why this matters',
  chapterSources: 'Chapter {n} sources',
  quizChapterTitle: 'Quiz — Test Your Knowledge',
  quizChapterSubtitle: '{n} questions · pass mark {pass}/{n} · certificate “Chain Reader”',
  quizIntro:
    'Ten questions covering the architecture, Stock Tokens, the memecoin wave and how to read the chain. Answers are saved as you go.',
  quizSubmit: 'Submit answers',
  quizAnswerAll: 'Answer all {n} questions ({done}/{n})',
  quizRetake: 'Retake quiz',
  quizPassTitle: 'Certificate unlocked — Chain Reader',
  quizPassBody:
    'You cleared the {pass}/{n} pass mark. You can now tell the difference between what this chain was built for and what it is used for — and check both yourself.',
  quizFailTitle: 'Pass mark is {pass}/{n}',
  quizFailBody:
    'Close. Revisit chapters 3 and 9 — what a Stock Token legally is, and which fee line a number refers to, carry most of the answers.',
  nextEyebrow: 'Next rabbit hole',
  nextTitle: 'RWA 101: Tokenized Stocks',
  nextBody:
    'The wider picture — the three tokenization models, who the other issuers are, and what you actually own in each.',
  companionEyebrow: 'Companion story',
  companionTitle: 'Vlad Tenev',
  companionBody:
    'The founder behind all of this, from a Bulgarian port city to a congressional hearing to his own blockchain.',
  sourcesHeading: '📚 Sources & Further Reading',
  disclaimer:
    'Educational content only. Not financial advice. Stock Tokens are economic exposure, not shares, and are unavailable to US persons. Live figures refresh weekly from DefiLlama; everything else is dated in place and changes constantly. Do your own research.',
};
