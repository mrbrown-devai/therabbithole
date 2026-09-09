// Vlad Tenev: The Man Who Made Trading Free — course content
// Founder-story course, second in the series after Pavel Durov.
// Figures dated September 2026 unless noted. Sources listed per chapter.

export const COURSE_ID = 'vlad-tenev-progress';

/** Headline numbers for the chapter 2 stat grid. Static, each carries its date. */
export const SCALE_STATS = [
  { label: 'Customers', value: '~28M', note: 'across 38 countries · 2026' },
  { label: 'Listed as', value: 'HOOD', note: 'Nasdaq · IPO July 2021' },
  { label: 'Founded', value: '2013', note: 'with Baiju Bhatt' },
  { label: 'Sole CEO since', value: 'Nov 2020', note: 'end of the co-CEO era' },
];

export const LEVELS = [
  {
    id: 1,
    title: 'The Country He Left Just in Time',
    subtitle: '1987 to 1992 · Varna to Washington',
    icon: '🛫',
    color: '#ef4444',
    bgColor: '#2c1414',
    intro:
      'A congressional hearing in 2021 is where this story is usually told from. To understand how he got in that chair, you have to go back to a port city on the Black Sea.',
    sections: [
      {
        id: '1-1',
        title: 'The Chair, February 2021',
        why: 'Every biography needs a scene it is trying to explain. This is that scene.',
        content:
          "On **18 February 2021**, a 34-year-old man appeared on a video link in front of the House Financial Services Committee. Members from both parties took turns asking him the same question in different words: *why did your app stop people from buying a stock?*\n\nThe app was called **Robinhood**. Its stated purpose was to democratize finance. For two days in January it had let people sell GameStop and not buy it, and the internet had already decided that told you everything you needed to know.\n\nThe man in the chair was **Vladimir Tenev**. He had built the app. He had not built the plumbing underneath it — and that distinction is the whole story of the next fifteen years.\n\nTo understand how he ended up there, go back to a port city on the Black Sea.",
      },
      {
        id: '1-2',
        title: 'Varna, 1987',
        why: 'The financial anxiety that shaped him is not a metaphor. His family lived it.',
        timeline: [
          {
            date: 'Feb 13, 1987',
            title: 'Born in Varna',
            content:
              'Vladimir Tenev is born in Varna, on the Bulgarian coast, in a country that is still communist and about to stop being anything recognisable.',
          },
          {
            date: 'Late 1980s',
            title: 'His parents leave first',
            content:
              'Both economists, they emigrate to the United States on fragile visas and leave him behind with his grandparents. That detail tells you what the odds looked like to them.',
          },
          {
            date: 'c. 1992',
            title: 'He crosses at five',
            content:
              'He joins them in the Washington DC area. Both parents eventually find work at the World Bank.',
          },
          {
            date: 'Mid-1990s',
            title: 'Bulgaria comes apart',
            content:
              'From a safe distance the family watches the thing they escaped actually happen: banks fail, savings evaporate, the currency collapses.',
          },
        ],
      },
      {
        id: '1-3',
        title: 'Why This Matters Later',
        why: 'Two economists who watched a currency die raise a child with a specific relationship to money.',
        content:
          "Tenev has described his parents' visa status as something that always felt precarious to him, and their move as an enormous risk taken by people leaving their entire support system behind. They left, as he tells it, just in time.\n\nThe household that produced him treated money as something that could **vanish overnight**, and it was run by two people who studied money for a living. That is an unusual place to start from if you are going to spend your career telling ordinary people that markets are for them too.\n\nHold that thought. It comes back in chapter 5, when a clearing house tells him what he is allowed to let his users do.",
      },
    ],
    sources: [
      { label: 'Vlad Tenev — Wikipedia', href: 'https://en.wikipedia.org/wiki/Vlad_Tenev' },
      { label: 'Vlad Tenev: Co-founder & CEO of Robinhood (Quartr)', href: 'https://quartr.com/insights/business-philosophy/vlad-tenev-co-founder-ceo-of-robinhood' },
      { label: 'Founder Stories: Vlad Tenev', href: 'https://www.keep-thinking.com/founder-stories/vlad-tenev' },
    ],
  },

  {
    id: 2,
    title: 'Good at Numbers',
    subtitle: 'School years · Thomas Jefferson, Stanford, UCLA',
    icon: '📐',
    color: '#f59e0b',
    bgColor: '#2c2214',
    intro:
      'He goes cleanly through the immigrant academic pipeline. The interesting part is not that he was clever, it is that being clever was pushing him towards a life he eventually refused.',
    sections: [
      {
        id: '2-1',
        title: 'The Pipeline',
        why: 'The credentials are ordinary for this story. What they were pointing at is not.',
        content:
          "**Thomas Jefferson High School for Science and Technology** in Fairfax County, one of the most competitive public schools in the United States, where the ambient assumption is that you will do something technical and do it seriously.\n\nThen **Stanford**, and mathematics. Not as a route into finance. He was doing it because he was good at it.\n\nThen a **mathematics PhD at UCLA** — the path where you become a professor and this story ends here with a quiet, respectable career.",
      },
      {
        id: '2-2',
        title: 'Meeting Baiju Bhatt',
        why: 'Founders of this kind tend to have one person who makes the ideas real.',
        content:
          "At Stanford he meets **Baiju Bhatt**, another child of immigrants. This matters more than any credential either of them collected.\n\nThe Pavel Durov course has the same hinge in his brother Nikolai. Tenev's version is Bhatt: the co-founder who converts an observation into a company. They both finish master's degrees in mathematics, then split. Bhatt goes to a trading firm. Tenev goes to UCLA.\n\nThen **Lehman Brothers collapses in 2008**, and Bhatt calls and tells him to drop out.",
      },
      {
        id: '2-3',
        title: 'The Fork',
        why: 'The moment the safe path stops winning.',
        callout: {
          variant: 'important',
          content:
            "**The pattern to watch:** he does not leave mathematics because he failed at it. He leaves because 2008 makes the financial system look like a problem worth solving, and because someone he trusted told him the window was open now. Every later decision in this course has the same shape — a system he can see clearly, and an unwillingness to wait his turn.",
        },
      },
    ],
    sources: [
      { label: 'Vlad Tenev — Robinhood Investor Relations', href: 'https://investors.robinhood.com/management/vlad-tenev' },
      { label: 'UCLA Math — 2019 Commencement Keynote: Vladimir Tenev', href: 'https://ww3.math.ucla.edu/2019-math-commencement-keynote-speaker-vladimir-tenev' },
      { label: "Robinhood's Founders & How to Start a Revolution (CEO Today)", href: 'https://www.ceotodaymagazine.com/2021/07/robinhoods-founders-how-to-start-a-revolution/' },
    ],
  },

  {
    id: 3,
    title: 'Building the Machine',
    subtitle: 'New York · 2008 to 2013',
    icon: '⚙️',
    color: '#3b82f6',
    bgColor: '#14202c',
    intro:
      'Before Robinhood, they built two companies for the people Robinhood would later be positioned against. That is where the idea actually comes from.',
    sections: [
      {
        id: '3-1',
        title: 'Plumbing for Wall Street',
        why: 'The part everyone skips when they tell this story.',
        content:
          "They move to New York and build **Celeris**, then **Chronos Research** — low-latency software for high-frequency trading firms.\n\nThey were the plumbing supplier to Wall Street, and they were good at it. That access is not a footnote. It is the reason the idea was available to them at all.",
      },
      {
        id: '3-2',
        title: 'The Price Sheet Nobody Talks About',
        why: 'This is the observation the entire company is built on.',
        content:
          "Selling speed to professional firms, they noticed the thing you can only notice from inside.\n\n- The professional firms they sold to paid **effectively nothing** to place a trade.\n- The retail investor on the other side of the same market paid **$7 to $10**.\n\nSame market. Same infrastructure. Two completely different price sheets, and the gap was not explained by cost. It was explained by **who had access**.\n\nThen 2011 and 2012 happen outside the window. **Occupy Wall Street** puts a general grievance about finance into the culture, and Tenev and Bhatt already have the specific technical version of that grievance sitting on their desk.\n\nIn **2013** they stop selling the machine to the firms and turn it the other way round.",
      },
      {
        id: '3-3',
        title: 'Payment for Order Flow, Plainly',
        why: 'You need this now, not later. It is the difference between having an opinion about chapter 5 and just having a reaction to it.',
        critical: true,
        content:
          "If trading is free for the user, **someone is paying**.\n\nThe answer is payment for order flow. Market makers — the firms that once paid Chronos for speed — pay Robinhood to route its customers' orders to them. They profit from the spread between what buyers pay and sellers receive, and a slice of that comes back to the broker.\n\n**What this is not:** a scandal on its own. It is a disclosed, regulated business model used across the industry.\n\n**What it is:** a structural fact worth holding onto. The customer is not the one paying the bill, so the customer is not the only party the business has to keep happy. Every argument about Robinhood since 2015 lives somewhere in that sentence.",
      },
    ],
    sources: [
      { label: 'Vladimir Tenev — MIT FinTech', href: 'https://www.mitfintech.com/speakers-2021/blog-post-title-one-f9r4l-ya9ts-b2s2t-xbllg' },
      { label: 'Startup Grind — Tenev & Bhatt on the origin of Robinhood', href: 'https://www.startupgrind.com/events/details/startup-grind-silicon-valley-presents-baiju-prafulkumar-bhatt-vladimir-tenev-robinhood/' },
      { label: 'Robinhood Board of Directors', href: 'https://investors.robinhood.com/governance/board-of-directors' },
    ],
  },

  {
    id: 4,
    title: 'Free',
    subtitle: '2013 to 2020 · The app that felt like a game',
    icon: '🎉',
    color: '#22c55e',
    bgColor: '#132c1c',
    intro:
      'No commissions, no minimum, and a waitlist that turned queue position into a growth engine. It worked enormously, and the argument about whether it should have has never been settled.',
    sections: [
      {
        id: '4-1',
        title: 'The Launch',
        why: 'The product decisions here are the ones people are still arguing about.',
        content:
          "Robinhood launches with **no commissions**, no account minimum, and a waitlist that turns your queue position into a referral engine.\n\nThe app is built to feel like nothing else in finance: one screen, one green line, **confetti** when you place your first trade. Traditional brokerages looked like tax software. This looked like a game.\n\nThat was a deliberate design choice, made long before anyone was arguing about whether it was a responsible one.",
      },
      {
        id: '4-2',
        title: 'The Scale It Reached',
        why: 'Numbers make the later stakes legible.',
        stats: true,
        content:
          "A generation opens its first brokerage account on a phone, during a pandemic, with stimulus money in it.\n\nIn **November 2020** the co-CEO arrangement ends and Tenev takes the company on his own. Bhatt stays as Chief Creative Officer until March 2024, then leaves to found **Aetherflux**, a space-based solar power company.",
      },
      {
        id: '4-3',
        title: 'Both Things Are True',
        why: 'The tension the rest of the course runs on.',
        callout: {
          variant: 'important',
          content:
            "**The unresolved argument:** he built a serious tool for serious investing and shipped it with confetti. Critics call the design gamification that pushes inexperienced people into risky trades. Defenders point out that the alternative was an industry that charged $10 a trade and made itself deliberately unwelcoming. Both readings are supportable, and the company has never fully escaped either.",
        },
      },
    ],
    sources: [
      { label: 'Vlad Tenev shares Robinhood’s next chapter (TechCrunch)', href: 'https://techcrunch.com/2023/08/15/vlad-tenev-shares-robinhoods-next-chapter-at-techcrunch-disrupt-2023' },
      { label: 'Robinhood Board of Directors — Bhatt tenure', href: 'https://investors.robinhood.com/governance/board-of-directors' },
      { label: 'Baiju Bhatt at TechCrunch Disrupt (Aetherflux)', href: 'https://techcrunch.com/?p=3050977' },
    ],
  },

  {
    id: 5,
    title: 'The Buy Button',
    subtitle: 'January 2021 · GameStop, Congress, IPO',
    icon: '🛑',
    color: '#FF5C5C',
    bgColor: '#2c1416',
    intro:
      'Back to the cold open, now with everything you need to read it. The constraint that forced his hand was not in his app.',
    sections: [
      {
        id: '5-1',
        title: 'What Actually Happened',
        why: 'The mechanics matter, because the mechanics are the lesson.',
        content:
          "**GameStop** is a heavily shorted stock. A message board and a retail crowd do to hedge funds roughly what the Robinhood pitch had always implied they should be able to do. Volume goes vertical.\n\nThen the clearing house asks Robinhood for a **deposit far beyond anything it had planned for**. On 28 January the app restricts buying on a handful of tickers while still allowing selling.\n\nTo the people using it, that read as one thing only: the app called Robinhood had picked the sheriff's side.",
      },
      {
        id: '5-2',
        title: 'Why the Explanation Did Not Land',
        why: 'A true defence can still be a useless one.',
        content:
          "The technical explanation is that **collateral requirements at the clearing layer are real** and nearly broke the company that week. That is both true and completely useless as a defence.\n\nThe promise had been democratization. The delivered product had a switch on it that the users did not control, and it got flipped at the exact moment the promise was being tested. No amount of correct plumbing detail survives contact with that.",
        callout: {
          variant: 'important',
          content:
            "**The lesson that shapes everything after:** the constraint that forced his hand was not in his app. It was in the settlement plumbing underneath it, and he did not own that plumbing.",
        },
      },
      {
        id: '5-3',
        title: 'Congress, Then Nasdaq',
        why: 'Two events, five months apart, pointing in opposite directions.',
        timeline: [
          {
            date: 'Jan 28, 2021',
            title: 'Buying restricted',
            content: 'Trading limits go on GME and a handful of other tickers. Selling stays open.',
          },
          {
            date: 'Feb 18, 2021',
            title: 'The House hearing',
            content: 'Tenev testifies before the House Financial Services Committee. This is the scene chapter 1 opens on.',
          },
          {
            date: 'Jul 2021',
            title: 'IPO on Nasdaq',
            content: 'Robinhood lists publicly under the ticker HOOD, six months after the worst week in its history.',
          },
        ],
      },
    ],
    sources: [
      { label: 'Who is Vlad Tenev? The Robinhood CEO explained', href: 'https://cryptonews.net/news/other/33163402/' },
      { label: 'Robinhood Investor Relations', href: 'https://investors.robinhood.com/management/vlad-tenev' },
      { label: 'Robinhood Newsroom', href: 'https://robinhood.com/us/en/newsroom/' },
    ],
  },

  {
    id: 6,
    title: 'Rebuilding the Rails',
    subtitle: '2021 to 2026 · From broker to blockchain',
    icon: '🛤️',
    color: '#00C805',
    bgColor: '#0d2213',
    intro:
      'So he goes after the plumbing. Read this chapter as a consequence of chapter 5, not as a new topic.',
    sections: [
      {
        id: '6-1',
        title: 'Crypto First',
        why: 'Settlement is the thing he lost control of. Crypto is where settlement is instant.',
        content:
          "Crypto settles without a clearing house standing between the trade and the money. For a CEO who had just been forced to switch off a buy button by a collateral call, that is not an abstract advantage.\n\nRobinhood leans in. Then, in **June 2025 at Cannes**, the company puts more than **200 tokenized stocks** in front of European users, issued on Arbitrum One, and says out loud that it intends to migrate them to a Layer 2 of its own.",
      },
      {
        id: '6-2',
        title: 'Going Global',
        why: 'The chain only makes sense next to the international build-out.',
        timeline: [
          {
            date: 'Jun 30, 2025',
            title: 'Cannes',
            content: '200+ tokenized stocks and ETFs for European users on Arbitrum One, plus the announcement of a dedicated chain to come.',
          },
          {
            date: '2026',
            title: 'WonderFi acquired',
            content: 'Robinhood buys WonderFi for roughly C$250M fully diluted, passing one million customers outside the United States.',
          },
          {
            date: 'Feb 10, 2026',
            title: 'Public testnet',
            content: 'Four million transactions and over 600,000 deployed contracts in its first week.',
          },
          {
            date: 'Jul 1, 2026',
            title: 'The World Is Flat',
            content: 'Mainnet launch at the Old Royal Naval College in London, hosted by Tenev with Johann Kerbrat, SVP and GM of Crypto & International.',
          },
        ],
      },
      {
        id: '6-3',
        title: 'Fifteen Years Later',
        why: 'The closing of the loop opened in chapter 5.',
        content:
          "On **1 July 2026**, under a banner reading *The World Is Flat*, Robinhood Chain goes live: an Ethereum Layer 2 built on the Arbitrum stack, with **Stock Tokens** trading around the clock and DeFi protocols live from day one.\n\nFifteen years after a clearing house told him what he could not do, the brokerage owns the settlement layer.\n\nIf you want the chain itself — the architecture, how to get on it, what is actually happening there — that is the next course.",
      },
    ],
    sources: [
      { label: 'Robinhood Presents: The World is Flat', href: 'https://robinhood.com/us/en/newsroom/robinhood-presents-the-world-is-flat/' },
      { label: 'Robinhood Chain Mainnet, Stock Tokens & Agentic Trading', href: 'https://robinhood.com/us/en/newsroom/robinhood-accelerates-global-expansion-robinhood-chain-mainnet-stock-tokens-agentic-trading/' },
      { label: 'Robinhood CEO wants to flatten finance with crypto (Yahoo Finance)', href: 'https://finance.yahoo.com/markets/crypto/articles/robinhood-ceo-vlad-tenev-wants-185654877.html' },
      { label: 'Robinhood launches chain mainnet and DeFi suite (FinTech Global)', href: 'https://fintech.global/2026/07/03/robinhood-launches-robinhood-chain-mainnet-and-defi-suite/' },
    ],
  },

  {
    id: 7,
    title: 'The Pattern',
    subtitle: 'What we can learn',
    icon: '🔁',
    color: '#CCFF00',
    bgColor: '#20240d',
    intro:
      'The closing argument, and the reason this is worth a course rather than a profile.',
    sections: [
      {
        id: '7-1',
        title: 'Serious Rails, Unserious Traffic',
        why: 'The through-line that makes the biography useful rather than decorative.',
        content:
          "Tenev keeps building infrastructure for a kind of trading he describes as serious, and the traffic that shows up is not.\n\n- He built a **commission-free brokerage for long-term investors** and got the meme stock squeeze.\n- He built a **chain for tokenized equities** and got a token factory. Memecoins ran the overwhelming majority of early DEX volume while stock tokens and RWAs accounted for a small fraction of it.\n\nIn July 2026 he dismissed memecoins on television and endorsed one on X inside the same fortnight.",
      },
      {
        id: '7-2',
        title: 'The CashCat Ending',
        why: 'You could not invent a cleaner one.',
        content:
          "**CashCat** was a name he and Bhatt kicked around before settling on Robinhood — recorded in a *New Yorker* profile, and something he tweeted about himself in 2021.\n\nIn July 2026 a community token resurrected that discarded name **on his own blockchain**, briefly reached a market capitalisation near **$156 million**, and had nothing whatsoever to do with the company. Robinhood later listed it, a first for a memecoin born on the chain.\n\nHis rejected brand came back as a memecoin on the chain he built for Wall Street.",
      },
      {
        id: '7-3',
        title: 'Two Founders, One Architecture',
        why: 'The reason this course sits next to the Pavel Durov one.',
        callout: {
          variant: 'important',
          content:
            "**Durov and Tenev** both left the country they were born in. Both built consumer platforms that governments eventually demanded answers about. Both had to sit across from state power and explain themselves. And both concluded that the fix was to **own the rails**. Durov went at it from outside the system, Tenev from inside it. Two very different men arriving at the same architecture is a more interesting fact than either biography on its own.",
        },
        link: { href: '/courses/pavel-durov', label: 'Read the Pavel Durov course →' },
      },
      {
        id: '7-4',
        title: 'The Other Vlad',
        why: 'What he does when he is not running a brokerage.',
        content:
          "- Co-founder of **Harmonic**, an AI company pursuing mathematical superintelligence. The maths did not get left behind, it got a second company.\n- Advisor to **Lighter**, a perpetuals exchange.\n- Chairman of Robinhood's board as well as CEO and President.\n\nIn one fortnight of July 2026 he was doing all of those jobs at once.",
      },
      {
        id: '7-5',
        title: 'Timeline',
        why: 'The whole arc on one screen.',
        summary: [
          '**1987:** Born in Varna, Bulgaria',
          '**c. 1992:** Joins his parents in the US at five; both work at the World Bank',
          '**2008:** Lehman collapses; drops out of his UCLA maths PhD',
          '**2008-13:** Builds Celeris and Chronos Research, selling speed to HFT firms',
          '**2013:** Founds Robinhood with Baiju Bhatt after Occupy Wall Street',
          '**2020:** Becomes sole CEO',
          '**Jan 2021:** GameStop; buying restricted; the buy button becomes the story',
          '**Feb 2021:** Testifies before the House Financial Services Committee',
          '**Jul 2021:** IPO on Nasdaq as HOOD',
          '**Jun 2025:** Cannes — 200+ tokenized stocks for European users',
          '**Jul 1, 2026:** Robinhood Chain mainnet, London',
        ],
      },
    ],
    sources: [
      { label: 'Who is Vlad Tenev? The Robinhood CEO explained', href: 'https://cryptonews.net/news/other/33163402/' },
      { label: 'Robinhood Chain memecoins vs tokenized stocks (TrustSwap)', href: 'https://trustswap.com/robinhood/memecoins' },
      { label: 'Robinhood Chain: tokenized stocks vs memecoin volume', href: 'https://www.spotedcrypto.com/robinhood-chain-memecoin-volume-explained/' },
      { label: 'The Rabbit Hole — Pavel Durov course', href: '/courses/pavel-durov' },
    ],
  },
];

export const QUIZ = [
  {
    q: 'Where was Vlad Tenev born?',
    a: ['Sofia, Bulgaria', 'Varna, Bulgaria', 'Moscow, Russia', 'Washington DC, USA'],
    correct: 1,
    explain:
      'He was born in Varna, on the Bulgarian coast, in February 1987. His parents emigrated first and he joined them in the US at five.',
  },
  {
    q: 'What did both of his parents do after emigrating to the United States?',
    a: ['Ran a restaurant', 'Worked at the World Bank', 'Taught at Stanford', 'Founded a hedge fund'],
    correct: 1,
    explain:
      'Both were economists and both ended up working at the World Bank in the Washington DC area.',
  },
  {
    q: 'What did Tenev and Baiju Bhatt build BEFORE Robinhood?',
    a: [
      'A social network for investors',
      'Low-latency trading software for high-frequency trading firms',
      'A cryptocurrency exchange',
      'A robo-advisor for retirement accounts',
    ],
    correct: 1,
    explain:
      'Celeris, then Chronos Research. They were selling speed to the professional firms Robinhood would later be positioned against — which is exactly how they spotted the pricing gap.',
  },
  {
    q: 'What was the observation that led directly to Robinhood?',
    a: [
      'Retail investors did not understand the stock market',
      'Professional firms paid effectively nothing per trade while retail paid $7 to $10',
      'Mobile apps were more profitable than websites',
      'Index funds were beating active managers',
    ],
    correct: 1,
    explain:
      'Same market, same infrastructure, two different price sheets. The gap was explained by access, not by cost.',
  },
  {
    q: 'If Robinhood charges no commission, where does the revenue come from?',
    a: [
      'Government subsidies',
      'Payment for order flow — market makers pay to route customer orders',
      'Selling customer identities',
      'It has never made revenue',
    ],
    correct: 1,
    explain:
      'Market makers pay the broker to route orders to them and profit from the spread. It is disclosed and industry-wide, but it means the customer is not the one paying the bill.',
  },
  {
    q: 'In January 2021, what actually forced Robinhood to restrict buying GameStop?',
    a: [
      'A court order',
      'A collateral demand from the clearing house far beyond what the company had planned for',
      'Hedge funds bought a stake in Robinhood',
      'The app servers crashed',
    ],
    correct: 1,
    explain:
      'The constraint sat in the settlement layer, not in the app. That is the lesson that drives everything Tenev does afterwards.',
  },
  {
    q: 'Why did the technical explanation fail to satisfy Robinhood users?',
    a: [
      'It was not true',
      'The promise had been democratization, and the product had a switch users did not control',
      'Nobody had heard of clearing houses',
      'Robinhood refused to explain anything',
    ],
    correct: 1,
    explain:
      'A correct explanation can still be a useless defence. The switch got flipped at the exact moment the promise was being tested.',
  },
  {
    q: 'When and where did Robinhood Chain launch its public mainnet?',
    a: [
      'June 2025, in Cannes',
      'February 2026, online only',
      'July 1, 2026, at the Old Royal Naval College in London',
      'January 2021, in New York',
    ],
    correct: 2,
    explain:
      'The launch happened at the "The World Is Flat" keynote, hosted by Tenev with Johann Kerbrat. Cannes 2025 was the tokenized-stocks announcement; February 2026 was the public testnet.',
  },
  {
    q: 'What is the pattern this course argues defines Tenev\u2019s career?',
    a: [
      'He builds infrastructure for serious trading and speculative traffic arrives instead',
      'He copies whatever competitors launch first',
      'He avoids regulated markets entirely',
      'He sells every company he founds within three years',
    ],
    correct: 0,
    explain:
      'A commission-free brokerage for long-term investors got the meme stock squeeze. A chain for tokenized equities got a token factory. Same story, fifteen years apart.',
  },
  {
    q: 'What is CashCat?',
    a: [
      'Robinhood\u2019s official chain token',
      'A name Tenev and Bhatt considered before "Robinhood", later revived as an unaffiliated memecoin on Robinhood Chain',
      'The clearing house that issued the 2021 collateral call',
      'Tenev\u2019s AI company',
    ],
    correct: 1,
    explain:
      'The discarded brand came back as a community memecoin on his own blockchain, briefly reaching around $156M in market cap with no affiliation to the company. Robinhood Chain has no native token.',
  },
];

export const PASS_MARK = 7;

/**
 * Chrome and labels. Kept here rather than inline in the view so translation
 * overlays can reach every string on the page.
 */
export const UI = {
  back: 'Back to courses',
  heroTitle: 'Vlad Tenev',
  heroSubtitle: 'The man who made trading free',
  heroLede:
    'From a Bulgarian port city to a congressional hearing to his own blockchain. The story of the founder behind Robinhood — and the pattern that repeats.',
  badgeChapters: '7 chapters',
  badgeDuration: '~35 min',
  badgeLevel: 'Beginner',
  badgeQuiz: 'Interactive quiz',
  whyLabel: 'Why this matters',
  chapterSources: 'Chapter {n} sources',
  quizChapterTitle: 'Quiz — Test Your Knowledge',
  quizChapterSubtitle: '{n} questions · pass mark {pass}/{n} · certificate “Rails Reader”',
  quizIntro:
    'Ten questions covering the whole arc, from Varna to Robinhood Chain. Answers are saved as you go.',
  quizSubmit: 'Submit answers',
  quizAnswerAll: 'Answer all {n} questions ({done}/{n})',
  quizRetake: 'Retake quiz',
  quizPassTitle: 'Certificate unlocked — Rails Reader',
  quizPassBody:
    'You cleared the {pass}/{n} pass mark. You understand why a broker built a blockchain, which is the part almost everyone gets wrong.',
  quizFailTitle: 'Pass mark is {pass}/{n}',
  quizFailBody:
    'Close. Revisit chapters 3 and 5 — payment for order flow and the buy button carry most of the answers.',
  nextEyebrow: 'Next rabbit hole',
  nextTitle: 'Robinhood 101: The Broker That Became a Blockchain',
  nextBody:
    'The chain itself — architecture, Stock Tokens, how to get on it, and what people actually do there.',
  companionEyebrow: 'Companion story',
  companionTitle: 'Pavel Durov',
  companionBody:
    'The other founder who left his country, faced down a state, and ended up building his own rails.',
  sourcesHeading: '📚 Sources & Further Reading',
  disclaimer:
    'Educational content only. Not financial advice. This is a biography assembled from public reporting; figures are as of September 2026 and change constantly. Do your own research.',
};
