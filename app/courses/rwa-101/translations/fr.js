// Français — overlay de traduction. Structure identique à ../content.js ;
// tout ce qui manque retombe sur l'anglais (voir lib/i18n.js).

const t = {
  ui: {
    back: 'Retour aux cours',
    heroTitle: 'RWA 101 : les actions tokenisées',
    heroSubtitle: 'Wall Street on-chain',
    heroLede:
      'Détiens Apple, Nvidia et Tesla depuis ton wallet crypto. 24h/24, 7j/7. Sans courtier.',
    badgeChapters: '10 chapitres',
    badgeDuration: '~50 min',
    badgeLevel: 'Débutant → Intermédiaire',
    badgeQuiz: 'Quiz interactif',
    tickerNote: 'on-chain',
    chapterSources: 'Sources du chapitre {n}',
    quizChapterTitle: 'Quiz — teste tes connaissances RWA',
    quizChapterSubtitle:
      '{n} questions · note de passage {pass}/{n} · certificat « RWA Explorer »',
    quizIntro:
      'Dix questions couvrant tout, des trois modèles à l’ERC-8056 en passant par la liste des risques. Tes réponses sont enregistrées au fur et à mesure.',
    quizSubmit: 'Valider mes réponses',
    quizAnswerAll: 'Réponds aux {n} questions ({done}/{n})',
    quizRetake: 'Refaire le quiz',
    quizPassTitle: 'Certificat débloqué — RWA Explorer',
    quizPassBody:
      'Tu as dépassé la note de passage de {pass}/{n}. Tu sais désormais ce que tu détiens réellement en achetant une action tokenisée — ce qui te place devant la plupart des gens qui en achètent.',
    quizFailTitle: 'La note de passage est de {pass}/{n}',
    quizFailBody:
      'Pas loin. Revois les chapitres 2 et 8 — les trois modèles et la liste des risques contiennent l’essentiel des réponses.',
    nextEyebrow: 'Prochain terrier',
    nextTitle: 'DN404 : la propriété NFT réinventée',
    nextBody:
      'Comment une licorne en pixels finit par te verser du Nvidia — le standard derrière le modèle Stock Back.',
    sourcesHeading: '📚 Sources et pour aller plus loin',
    disclaimer:
      'Contenu éducatif uniquement. Ceci n’est pas un conseil financier. Les actions tokenisées offrent une exposition économique, pas des actions au sens strict — les chiffres datent d’août 2026 et évoluent en permanence. Fais tes propres recherches.',
  },

  marketStats: [
    { label: 'TVL des RWA on-chain', note: 'DefiLlama · {{asOf}}' },
    { label: 'Protocoles RWA suivis', note: 'DefiLlama · mis à jour chaque semaine' },
    { label: 'Bons du Trésor US tokenisés', note: 'plus grosse catégorie · août 2026' },
    { label: 'Actions tokenisées sur un an', note: '32 M$ → 963 M$ · janv. 2026' },
  ],

  models: [
    {
      name: 'Émis par l’émetteur',
      verdict: 'Idéal',
      line: 'L’entreprise émet elle-même le token. Peut porter de vrais droits d’actionnaire.',
    },
    {
      name: 'Custodial / adossé 1:1',
      verdict: 'Courant',
      line: 'Un tiers détient de vraies actions. Tu portes son risque de contrepartie.',
    },
    {
      name: 'Synthétique / indexé',
      verdict: 'Le plus risqué',
      line: 'Aucune action détenue. Exposition au prix seulement — ni dividende, ni propriété.',
    },
  ],

  levels: [
    {
      title: 'Qu’est-ce qu’un actif du monde réel ?',
      subtitle: 'Actions, obligations et bons du Trésor, on-chain',
      intro:
        'Les actifs du monde réel (RWA) sont tout ce qui a de la valeur en dehors de la blockchain. La tokenisation les amène on-chain sous forme de tokens numériques — et change ce que tu peux en faire.',
      sections: [
        {
          title: 'Les rails sur lesquels tourne la finance traditionnelle',
          why: 'On ne mesure ce que la tokenisation répare qu’en voyant d’abord ce qui est cassé.',
          content:
            "Les actifs du monde réel, ce sont toutes les choses de valeur qui existent en dehors de la blockchain — **actions, obligations, immobilier, matières premières, bons du Trésor, art**. La tokenisation les amène on-chain sous forme de tokens numériques.\n\nLa finance traditionnelle tourne sur des rails conçus il y a des décennies :\n\n- Les actions se négocient **6,5 heures par jour, 5 jours sur 7**\n- Le règlement prend **J+1** (un jour ouvré)\n- Acheter une action Apple depuis le Japon suppose un courtier américain, une conversion de devise et de la paperasse\n\nÀ la fin de ce cours, tu comprendras comment un NFT de licorne péteuse peut te verser des actions Nvidia. Pas métaphoriquement. Littéralement.",
        },
        {
          title: 'Ce que la tokenisation change vraiment',
          why: 'Cinq propriétés concrètes que les actions classiques n’ont tout simplement pas.',
          content:
            "- **Trading 24/7** — ni horaires de marché, ni jours fériés\n- **Règlement instantané** — des swaps atomiques, pas du J+1\n- **Propriété fractionnée** — achète 1 $ de Nvidia, pas 140 $ l’action\n- **Accès mondial** — n’importe qui avec un wallet crypto, où qu’il soit\n- **Composabilité** — les actions deviennent des briques Lego pour la DeFi (prêt, pools de liquidité, rendement)\n\nLa dernière est la plus importante. En finance traditionnelle, ton action Apple dort chez un courtier et ne peut parler à rien d’autre. On-chain, si.",
        },
        {
          title: 'Le marché aujourd’hui',
          why: 'Les chiffres comptent — ce n’est plus une expérience de pensée.',
          content:
            "Le marché des RWA a explosé :\n\n- **34,4 Md$** de capitalisation on-chain (août 2026, DefiLlama)\n- **31,5 Md$** de capitalisation active\n- **3,9 Md$** de TVL en DeFi — des actifs tokenisés réellement utilisés dans des protocoles\n- **217** émetteurs d’actifs, et ça grimpe\n- **120 Md$** projetés d’ici la fin de l’année\n\nLa plus grosse catégorie reste les **bons du Trésor américains tokenisés, autour de 12,88 Md$**. Mais les actions tokenisées sont le segment qui croît le plus vite : **+2 878 % sur un an**, de 32 M$ (janv. 2025) à 963 M$ (janv. 2026), et ça accélère encore.\n\n*Une remarque sur les grands chiffres que tu verras circuler : McKinsey estime 2 000 à 4 000 Md$ d’ici 2030. Le chiffre de 16 000 Md$ de BCG/ADDX, très repris, mesure une opportunité de marché — pas une projection de capitalisation. À prendre comme tel.*",
        },
      ],
    },
    {
      title: 'Comment fonctionnent les actions tokenisées',
      subtitle: 'Trois modèles — et pourquoi la différence compte',
      intro:
        'Une action tokenisée représente une exposition économique à une vraie action. Mais « représente » fait beaucoup de travail dans cette phrase — et c’est la structure derrière qui décide de ce que tu possèdes réellement.',
      sections: [
        {
          title: 'Le principe de base',
          why: 'Une phrase à laquelle se rattache toute la suite.',
          content:
            "Une action tokenisée est un token blockchain qui représente une **exposition économique** à une vraie action.\n\nQuand tu achètes un token NVDA tokenisé, quelque part dans le monde réel une véritable action Nvidia (ou un collatéral équivalent) est conservée en dépôt pour adosser ton token.\n\nDu moins — c’est la promesse. Qu’elle soit tenue dépend entièrement duquel des trois modèles suivants tu as affaire.",
        },
        {
          title: 'Les trois modèles',
          why: 'Les services de la SEC ont tracé cette ligne en janvier 2026. C’est le cadre le plus utile de tout ce cours.',
          content:
            "Les services de la SEC ont tracé une ligne nette dans une déclaration conjointe de janvier 2026. *Attention : il s’agit d’une orientation des services, pas d’une règle de la Commission — elle n’a aucune force juridique.*\n\n**1. Émis par l’émetteur — le meilleur cas**\nL’entreprise elle-même (ou son agent autorisé) émet directement les tokens. Ceux-ci peuvent représenter une vraie propriété du capital — droits de vote, dividendes et créances directes possibles.\n*Exemple :* Securitize s’est cotée au NYSE sous SECZ le 2 juillet 2026 et a tokenisé sa propre action.\n\n**2. Custodial / adossé 1:1 — le cas courant**\nUn tiers achète de vraies actions, les conserve en dépôt et émet des tokens adossés 1:1. Tu détiens un token représentant un droit sur l’action sous-jacente.\n*Exemples :* Dinari (dShares), Backed Finance (bTokens), xStocks.\n*Risque :* tu es exposé au risque de contrepartie du dépositaire. Si l’émetteur fait faillite, tu as une créance sur **lui**, pas sur l’action.\n\n**3. Titre synthétique / indexé — le plus risqué**\nAucune action réelle n’est détenue. L’émetteur crée un titre de dette ou un instrument indexé qui suit le cours. Exposition au prix uniquement — ni dividende, ni propriété, ni vote.\n*Exemples :* les Robinhood Stock Tokens (émis par RHJ comme titres de dette tokenisés).\n*Risque :* contrepartie, oracle et insolvabilité de l’émetteur. Si l’émetteur tombe, tu peux tout perdre.",
        },
        {
          title: 'Comment savoir lequel tu détiens',
          why: 'Cinq questions qui percent n’importe quelle page marketing.',
          content:
            "À poser avant d’acheter quoi que ce soit :\n\n1. **De vraies actions sont-elles conservées en dépôt ?** (custodial vs synthétique)\n2. **Qui est l’émetteur ?** (l’entreprise elle-même vs un tiers)\n3. **Touches-tu des dividendes ?** (exposition réelle vs synthétique)\n4. **Que se passe-t-il si l’émetteur fait faillite ?** (créance directe vs créancier non garanti)\n5. **L’émetteur est-il régulé ?** (transfer agent enregistré auprès de la SEC vs entité offshore)\n\nSurveille l’écart entre le marketing et les documents juridiques. Le marketing de Robinhood dit « adossé 1:1 » ; les documents juridiques décrivent un instrument de dette sans aucun droit sur l’action sous-jacente. Les deux affirmations coexistent. Une seule détermine ce que tu possèdes.",
        },
      ],
    },
    {
      title: 'Les grandes plateformes',
      subtitle: 'Qui émet quoi, et à qui confier quel rôle',
      intro:
        'Cinq plateformes couvrent l’essentiel du marché des actions tokenisées. Elles ne sont pas interchangeables : chacune optimise un arbitrage différent entre régulation, choix d’actifs et composabilité.',
      sections: [
        {
          title: 'Securitize — le poids lourd institutionnel',
          why: 'L’exemple le plus clair de tokenisation émise par l’émetteur, en production.',
          content:
            "**~5 Md$ d’actifs tokenisés.** Securitize achemine les actifs de **BlackRock** (BUIDL, désormais en milliards), **Apollo** et **Hamilton Lane**. Transfer agent enregistré auprès de la SEC.\n\nEn juillet 2026, l’entreprise a joint le geste à la parole : cotation au NYSE sous **SECZ** et tokenisation de sa propre action — l’illustration la plus nette du modèle « émis par l’émetteur » en conditions réelles.\n\n**Idéal pour :** fonds tokenisés de qualité institutionnelle, bons du Trésor, dette privée.",
        },
        {
          title: 'Ondo Finance — le leader DeFi-native',
          why: 'Le pont entre rendement obligataire et exposition actions.',
          content:
            "**~2,75 Md$ et plus.** Les produits :\n\n- **OUSG** (~625 M$) — bons du Trésor américains à court terme tokenisés\n- **USDY** (~2,1 Md$) — stablecoin à rendement adossé à des bons du Trésor\n- **Ondo Stocks** (ex-Ondo Global Markets) — plus de 470 actions, ETF et matières premières tokenisés, accessibles via MetaMask. Passé **1,01 Md$ de TVL** le 15 août 2026\n\nIntégré à Binance Alpha pour les utilisateurs hors États-Unis.\n\n**Idéal pour :** les utilisateurs DeFi-natifs qui veulent du rendement et de l’exposition actions.",
        },
        {
          title: 'xStocks et Dinari — l’ampleur contre la rigueur',
          why: 'Deux réponses opposées au même problème.',
          content:
            "**xStocks** (ex-Backed Finance, racheté par Kraken) est aujourd’hui le plus gros émetteur d’actions tokenisées avec **plus de 700 actifs** — ETF et actions tokenisés déployés sur Ethereum, Arbitrum, Gnosis et Base.\n*Idéal pour :* le choix d’actions le plus large, avec l’adossement institutionnel de Kraken.\n\n**Dinari (dShares)** est un transfer agent enregistré auprès de la SEC qui adosse ses tokens 1:1 à de vraies actions et **reverse les vrais dividendes en numéraire**. En août 2026, Dinari a lancé **724 actions tokenisées — tout le S&P 500** — avec auto-conservation en USDC via Circle, sur Ethereum, Arbitrum, Base et Avalanche. L’accès est réservé aux investisseurs éligibles.\n*Idéal pour :* qui veut de vrais tokens adossés 1:1, avec dividendes, dans un cadre régulé.",
        },
        {
          title: 'Robinhood Stock Tokens — lis les petites lignes',
          why: 'L’option la plus composable, et la plus souvent mal comprise.',
          content:
            "Émis par **RHJ (Robinhood Assets Jersey Limited)** sous forme de **titres de dette tokenisés**. Des tokens ERC-20 standards sur Robinhood Chain (un L2 Arbitrum Orbit) utilisant le standard **ERC-8056**.\n\n**La distinction qui compte :** malgré un discours marketing de « adossement 1:1 », la structure juridique est un instrument de dette. Les détenteurs n’ont **aucun droit sur l’action sous-jacente** — ni vote, ni créance de propriété directe. Dans le cadre défini par les services de la SEC, c’est un titre synthétique / indexé.\n\nActions disponibles : NVDA, TSLA, AAPL, GME, SPCX, SPY, PLTR, NFLX, RDDT, MSTR, et d’autres.\n\nNon enregistrés au titre des lois américaines sur les valeurs mobilières. **Non disponibles pour les personnes américaines**, et également restreints au Canada, au Royaume-Uni, en Suisse et aux Émirats arabes unis.\n\n**Idéal pour :** l’écosystème Robinhood Chain, la composabilité DeFi et les projets DN404 — à condition de comprendre que tu détiens un instrument de dette, pas du capital.",
        },
      ],
    },
    {
      title: 'Robinhood Chain en profondeur',
      subtitle: 'L’ERC-8056 et ce à quoi les tokens actions se branchent',
      intro:
        'Robinhood Chain a été lancée le 1er juillet 2026 comme L2 Arbitrum Orbit. C’est le seul endroit où les actions tokenisées sont des primitives DeFi natives — d’où le fait que toutes les expérimentations intéressantes s’y déroulent.',
      sections: [
        {
          title: 'Les chiffres',
          why: 'Pour situer le volume d’activité réelle sur cette chaîne.',
          content:
            "Chiffres clés (DefiLlama, {{asOf}}) :\n\n- **{{robinhoodTvl}}** de TVL\n- **{{robinhoodStables}}** de capitalisation stablecoin\n- **136,79 M$** de capitalisation RWA active en actions tokenisées\n- **611,86 M$** de volume DEX sur 24 h\n- **1,764 Md$** de TVL bridgée",
        },
        {
          title: 'Comment fonctionnent les tokens actions ERC-8056',
          why: 'L’astuce du multiplicateur, c’est tout le design — et il est vraiment élégant.',
          content:
            "Les tokens actions de Robinhood utilisent un standard maison, l’**ERC-8056** :\n\n- Chaque action est un **contrat ERC-20 standard** (TSLA, NVDA, AAPL, …)\n- Ce ne sont **pas des tokens rebasants** — le solde brut ne bouge pas\n- Un **multiplicateur d’affichage** gère les opérations sur titres : un split 2 pour 1 fait passer le multiplicateur de 1,0 à 2,0, et les wallets affichent le double sans que le nombre de tokens change\n- Les **flux de prix Chainlink** publient les cours on-chain, actif par actif\n- Dividendes et splits sont gérés via ce multiplicateur on-chain\n- N’importe quel développeur peut les intégrer — ce sont des ERC-20 standards, **aucun SDK spécifique**",
        },
        {
          title: 'Ce que tu peux réellement en faire',
          why: 'La thèse de la composabilité, rendue concrète.',
          content:
            "Parce que ce sont des ERC-20, les tokens actions se branchent sur toute la pile DeFi :\n\n- **Trader sur des DEX** (Uniswap V4 sur Robinhood Chain)\n- **Fournir de la liquidité** — toucher des frais sur les paires action/stablecoin\n- **Servir de collatéral** — emprunter contre ta position NVDA\n- **Se composer avec des NFT** — des projets DN404 comme RWA404 rémunèrent leurs détenteurs en NVDA\n- **Construire des stratégies de rendement** — apparier avec des stablecoins pour des positions LP\n- **Lancer des tokens adossés à des actions** — UniPump est un launchpad dont les frais de lancement alimentent une Réserve qui achète de vraies actions tokenisées et les redistribue",
        },
        {
          title: 'Les limites',
          why: 'Le niveau Stage 0 sur L2Beat n’est pas un détail à survoler.',
          content:
            "- Les tokens actions sont une **exposition économique, pas des actions** — aucun droit de vote\n- Émis par **RHJ**, pas directement par Apple / Nvidia / Tesla\n- **Restrictions juridictionnelles** — non enregistrés au titre des lois américaines sur les valeurs mobilières, indisponibles pour les personnes américaines ; également restreints au Canada, au Royaume-Uni, en Suisse et aux Émirats arabes unis\n- **Risque de contrepartie** sur l’émetteur (RHJ)\n- **Risque d’infrastructure** — L2Beat classe Robinhood Chain en **Stage 0**, avec seulement deux acteurs autorisés pour les preuves de fraude, une période de contestation de 6 j 8 h, et des contrats modifiables instantanément",
        },
      ],
    },
    {
      title: 'Comment acheter des actions tokenisées',
      subtitle: 'Cinq voies, de la DeFi intégrale au 100 % passif',
      intro:
        'Il n’y a pas une seule bonne porte d’entrée. Choisis la voie qui correspond à la complexité que tu acceptes de porter — et passe la liste de sécurité en fin de chapitre avant d’envoyer quoi que ce soit.',
      sections: [
        {
          title: 'Méthode 1 — Robinhood Chain (DeFi)',
          why: 'La voie sans permission, avec tout ce que cela implique dans les deux sens.',
          content:
            "**Il te faut :** un wallet crypto (MetaMask, Rabby, Coinbase Wallet) et de l’ETH pour le gas.\n\n1. **Bridge de l’ETH vers Robinhood Chain** via le portail de bridge officiel Arbitrum\n2. **Connecte ton wallet** à un DEX sur Robinhood Chain (Uniswap, ou des DEX natifs)\n3. **Échange de l’ETH ou de l’USDG contre des tokens actions** — NVDA, TSLA, AAPL, etc.\n4. **Les tokens apparaissent dans ton wallet** — ERC-20 standards, visibles sur n’importe quel explorateur\n\n**Avantages :** sans permission, 24/7, composable avec la DeFi.\n**Inconvénients :** coûts de gas, risque de bridge, prérequis techniques, restreint aux États-Unis.",
        },
        {
          title: 'Méthodes 2 à 4 — Ondo, Dinari, CEX',
          why: 'Trois arbitrages entre choix d’actifs, régulation et confort.',
          content:
            "**Via Ondo Global Markets :** connecte MetaMask, parcours plus de 470 actions, ETF et matières premières tokenisés, échange en USDT ou USDC, les tokens arrivent dans ton wallet.\n*Avantages :* choix immense, DeFi-native. *Inconvénients :* hors États-Unis pour l’instant, KYC parfois requis.\n\n**Via Dinari (dShares) :** crée un compte (KYC obligatoire — ils sont enregistrés auprès de la SEC), dépose des dollars ou des stablecoins, achète des dShares adossées 1:1, reçois les vrais dividendes.\n*Avantages :* vrai adossement 1:1, dividendes, cadre SEC, disponible aux États-Unis. *Inconvénients :* KYC, moins composable en DeFi.\n\n**Via un CEX :** certaines plateformes centralisées (Binance Alpha, Bitget) proposent des actions tokenisées.\n*Avantages :* interface familière, prise en main facile. *Inconvénients :* custodial — ce ne sont pas tes clés — et composabilité limitée.",
        },
        {
          title: 'Méthode 5 — la voie passive : détenir $FUNI, toucher des actions',
          why: 'C’est le croisement avec le DN404, et la raison d’être de ce cours.',
          content:
            "Pas envie d’acheter des tokens actions directement ? Il existe un chemin plus simple.\n\n**$FUNI** est un memecoin DN404 sur Robinhood Chain. Tu l’achètes, et un NFT de licorne en pixels apparaît automatiquement dans ton wallet. Mais voilà la subtilité : l’équipe $FUNI construit **UniPump**, un launchpad dont les frais de lancement alimentent une **Réserve** qui achète de vraies actions tokenisées — NVDA, TSLA, AAPL — et reverse une exposition fractionnée aux détenteurs de $FUNI.\n\nTu ne touches jamais un token action directement. Tu détiens une licorne meme. Le système achète du Nvidia pour toi.\n\n1. Tu achètes du $FUNI → une licorne NFT apparaît dans ton wallet\n2. D’autres projets se lancent sur UniPump → les frais alimentent la Réserve\n3. La Réserve achète des actions tokenisées sur Robinhood Chain\n4. L’exposition actions redescend vers les détenteurs, au prorata de la rareté\n5. Plus de lancements → Réserve plus grosse → plus d’actions reversées → plus de rachat et de burn\n\n**Pourquoi ça ne part pas en spirale :** la Réserve détient des dollars et une vraie exposition actions, pas un tas de son propre token. Elle est adossée à des actifs qui existent en dehors du protocole.\n\n**État des lieux :** le token et l’art sont live. Launchpad, Réserve et reversement d’actions arrivent.\n\n*Avantages :* aucune complexité d’achat, exposition passive, UX meme-native. *Inconvénients :* exposition indirecte — tu dépends de la Réserve — et ce n’est pas encore entièrement live.",
        },
        {
          title: 'Check-list de sécurité avant d’acheter',
          why: 'Six vérifications qui évitent les façons les plus courantes de perdre de l’argent ici.',
          checklist: [
            'Vérifie l’émetteur — qui est derrière le token, et est-il régulé ?',
            'Vérifie l’adossement — de vraies actions 1:1, ou du synthétique ?',
            'Comprends les risques — contrepartie, réglementaire, smart contract',
            'Utilise les contrats officiels — vérifie les adresses dans la doc de la plateforme',
            'Commence petit — teste avec une petite somme avant de monter',
            'Méfie-toi des faux — les tokens arnaque imitant des noms d’actions sont fréquents',
          ],
        },
      ],
    },
    {
      title: 'Tokenisé contre traditionnel',
      subtitle: 'Un face-à-face honnête',
      intro:
        'Les actions tokenisées ne remplacent pas les actions traditionnelles aujourd’hui. C’est une nouvelle couche d’accès, avec de vrais avantages et de vrais compromis. Voici la comparaison, sans argumentaire commercial.',
      sections: [
        {
          title: 'Le tableau comparatif',
          why: 'Neuf dimensions sur lesquelles les deux diffèrent réellement.',
          table: {
            head: ['', 'Actions traditionnelles', 'Actions tokenisées'],
            rows: [
              ['Horaires', '6,5 h/jour, en semaine', '24/7/365'],
              ['Règlement', 'J+1 (un jour ouvré)', 'Instantané (atomique)'],
              ['Investissement minimum', 'En général 1 action entière', 'Fractionné dès 1 $'],
              ['Accès mondial', 'Courtier local + KYC', 'Wallet crypto, souvent sans permission'],
              ['Propriété', 'Propriété directe de l’action', 'Exposition économique (en général)'],
              ['Dividendes', 'Oui, directs', 'Dépend de la plateforme'],
              ['Droits de vote', 'Oui', 'Rarement'],
              ['Conservation', 'Le courtier détient les titres', 'Auto-conservation ou protocole'],
              ['Composabilité', 'Aucune', 'Intégration DeFi complète'],
              ['Protection réglementaire', 'Encadré par la SEC', 'Variable selon la plateforme'],
              [
                'Risque de contrepartie',
                'La SIPC couvre la faillite du courtier jusqu’à 500 000 $',
                'Dépend de l’émetteur — aucun équivalent',
              ],
            ],
          },
          content:
            '*La SIPC couvre la défaillance du courtier, pas les pertes de marché. Il n’existe aucun filet équivalent pour les émetteurs d’actions tokenisées.*',
        },
        {
          title: 'La vérité, sans fard',
          why: 'Quand chacun des deux est réellement le bon outil.',
          content:
            "**Utilise des actions tokenisées quand :**\n\n- Tu veux un accès au marché 24/7\n- Tu veux une exposition fractionnée depuis un wallet crypto\n- Tu veux composer des actions avec la DeFi (LP, prêt, DN404)\n- Tu n’as pas accès aux marchés américains via un courtier classique\n\n**Utilise des actions traditionnelles quand :**\n\n- Tu veux la propriété directe et les droits de vote\n- Tu veux la protection de l’assurance SIPC\n- Tu veux la garantie du versement des dividendes\n- Tu as besoin de certitude réglementaire\n\nPour la plupart des gens, la réponse n’est pas « l’un ou l’autre ». C’est de savoir sur quelle couche placer chaque position.",
        },
      ],
    },
    {
      title: 'Quand la DeFi rencontre les actions',
      subtitle: 'Rendement, croisements DN404 et modèle Stock Back',
      intro:
        'C’est ici que les actions tokenisées cessent d’être un courtier en plus joli pour devenir quelque chose de réellement nouveau : des actions comme Lego programmable.',
      sections: [
        {
          title: 'Stratégies de rendement',
          why: 'La chose la plus simple que tu puisses faire et qu’aucun courtier ne propose.',
          content:
            "**Apport de liquidité :** appariez NVDA/USDG dans un pool Uniswap V4. Tu touches les frais de trading des gens qui achètent et vendent du Nvidia tokenisé. Ta position ? Moitié Nvidia, moitié stablecoin.\n\n**Prêt :** dépose des tokens actions en collatéral, emprunte des stablecoins. Tu restes long sur TSLA tout en déployant du capital ailleurs.",
        },
        {
          title: 'Intégration NFT (DN404)',
          why: 'Trois projets en production où un NFT est une position qui rapporte des actions.',
          content:
            "C’est là que ça devient dingue. Des projets sur Robinhood Chain fusionnent tokens actions et NFT :\n\n- **RWA404** — une collection DN404 de 1 000 NFT. Les frais de trading sont versés en **NVDA** à tous les détenteurs, à parts égales. Ton NFT gagne des actions Nvidia.\n- **Quotrons** — 4 444 NFT terminaux échangés contre 10 actions tokenisées différentes (NVDA, AAPL, TSLA, GME, SPY, PLTR, NFLX, RDDT, MSTR, SPCX). Les détenteurs touchent des récompenses en actions.\n- **$FUNI** — l’exemple phare. Voir plus bas.\n\nSi la mécanique DN404 t’est nouvelle, le [cours DN404](/courses/dn404) détaille l’architecture à deux contrats.",
        },
        {
          title: 'Le modèle Stock Back — $FUNI et UniPump',
          why: 'L’usage le plus innovant des actions tokenisées actuellement en circulation.',
          content:
            "**Le problème des memecoins :** ils ne sont adossés à rien. Quand la hype retombe, le prix va à zéro. Pas de plancher, pas de valeur intrinsèque, aucune raison de tenir.\n\n**La réponse de $FUNI : le Stock Back.**\n\n$FUNI est un memecoin DN404 sur Robinhood Chain — 16 384 licornes en pixels générées on-chain à chaque swap. Sous la couche meme, il y a un moteur financier :\n\n1. De nouveaux projets se lancent sur **UniPump** — ils paient des frais de lancement\n2. Ces frais alimentent la **Réserve** — pas l’équipe, pas un burn, pas un recyclage\n3. La Réserve achète de **vraies actions tokenisées** — NVDA, TSLA, AAPL\n4. L’exposition **redescend vers les détenteurs**, au prorata de la rareté de la licorne\n5. La Réserve finance aussi le **rachat et le burn**, réduisant l’offre\n\n**Le volant d’inertie :** plus de lancements → Réserve plus grosse → plus d’actions reversées et plus de pression acheteuse → prix plus haut → davantage de projets veulent s’y lancer. Et ça recommence.\n\n**L’idée clé :** UniPump inverse le modèle du launchpad. Au lieu d’extraire de la valeur des lancements, il convertit l’énergie des lancements en valeur adossée à des actions pour tout l’écosystème.\n\n**État des lieux :** token et art LIVE. Launchpad, Réserve et reversement d’actions à venir.",
        },
        {
          title: 'La thèse de la composabilité',
          why: 'Pourquoi c’est structurellement différent d’une action tokenisée sur un CEX.',
          content:
            "En finance traditionnelle, ton action Apple dort chez un courtier. Elle ne peut pas parler à ton fonds obligataire. Ton fonds obligataire ne peut pas parler à ton livret d’épargne.\n\nOn-chain, tout se compose :\n\n- Ton token NVDA peut servir de collatéral pour un prêt\n- Ce prêt peut financer une position de liquidité\n- Cette position LP rapporte des frais en token action\n- Ce token action peut être enveloppé dans un NFT DN404\n- Ce NFT peut être fractionné et échangé sur un DEX\n\nChaque couche s’appuie sur celle du dessous. **C’est pour ça que les actions tokenisées sur rails DeFi sont structurellement différentes des actions tokenisées sur une plateforme centralisée** — la version CEX est un emballage plus joli, celle-ci est une nouvelle primitive.",
        },
      ],
    },
    {
      title: 'Risques et scénarios de casse',
      subtitle: 'Sept façons d’y perdre de l’argent',
      intro:
        'Chacun de ces cas est déjà arrivé à quelqu’un. Lis ce chapitre deux fois ; c’est celui qui te fera économiser de l’argent.',
      sections: [
        {
          title: 'Les sept risques',
          why: 'Chacun avec la mesure qui le réduit réellement.',
          content:
            "**1. Risque de contrepartie**\nTu ne possèdes pas l’action. Tu possèdes un token émis par quelqu’un qui affirme détenir l’action. Si l’émetteur (RHJ, Dinari, Backed…) tombe, tu peux tout perdre.\n*Mesure :* privilégier des émetteurs enregistrés auprès de la SEC, vérifier les preuves de réserves, diversifier entre plateformes.\n\n**2. Risque réglementaire**\nEn janvier 2026, les services de la SEC ont rappelé que la tokenisation ne change rien au droit des valeurs mobilières. Les actions tokenisées sont des titres financiers. Point. Des plateformes peuvent fermer, des tokens être gelés, les règles changer.\n*Mesure :* utiliser des plateformes régulées, connaître les règles de sa juridiction, garder en tête que les restrictions américaines s’appliquent largement.\n\n**3. Risque de smart contract**\nBugs dans les contrats, exploits de bridge, pannes d’oracle. La pile DeFi ajoute de la surface d’attaque.\n*Mesure :* s’en tenir aux protocoles audités, vérifier si les contrats des tokens actions ont été relus, utiliser des bridges établis.\n\n**4. Risque de liquidité**\nLe trading 24/7 semble formidable jusqu’à ce qu’on réalise que l’essentiel du volume se fait pendant les heures de marché américaines. La nuit et le week-end, les spreads peuvent s’élargir. Un titre de presse à 3 h du matin peut faire bouger les prix dans une liquidité mince.\n*Mesure :* utiliser des ordres à cours limité, pas au marché. Vérifier le spread avant de passer un ordre.\n\n**5. Risque d’oracle / de flux de prix**\nLes prix des tokens actions dépendent de Chainlink ou équivalent. Si l’oracle retarde, se trompe ou tombe, des transactions peuvent s’exécuter à des prix erronés.\n*Mesure :* vérifier que l’actif dispose de flux fiables ; surveiller les écarts inhabituels.\n\n**6. Risque d’infrastructure**\nLes chaînes L2 peuvent connaître des interruptions, des contrats modifiables, des preuves de fraude limitées. Robinhood Chain est en Stage 0 sur L2Beat.\n*Mesure :* ne pas concentrer tout son portefeuille sur une seule chaîne. Comprendre les hypothèses de confiance du L2.\n\n**7. Complexité fiscale**\nLes actions tokenisées peuvent créer des événements imposables là où les actions classiques n’en créent pas — swaps, entrées/sorties de LP, bridges inter-chaînes. Le traitement varie selon les juridictions et reste souvent flou.\n*Mesure :* conserver la trace de chaque transaction. Consulter un fiscaliste.",
        },
      ],
    },
    {
      title: 'L’avenir',
      subtitle: 'Où ça va, et à quelle vitesse',
      intro:
        'La tokenisation des RWA n’est pas une mode crypto. C’est la mise à niveau d’infrastructure dont la finance traditionnelle a besoin depuis des décennies — et les institutions ont cessé « d’explorer » il y a un moment.',
      sections: [
        {
          title: 'Ce qui arrive',
          why: 'Six tendances déjà visibles en production, pas sur des feuilles de route.',
          content:
            "- **Plus d’actions on-chain** — Ondo en compte déjà plus de 470. Attends-toi à des milliers à mesure que le cadre réglementaire se clarifie.\n- **Adoption institutionnelle** — BUIDL de BlackRock a dépassé 2,5 Md$. Securitize s’est cotée au NYSE et a tokenisé sa propre action. Franklin Templeton dépasse 400 M$ d’encours.\n- **Vraie propriété** — des modèles où le token *est* l’action, avec droits de vote et dividendes.\n- **Expansion multi-chaînes** — des tokens actions sur Solana, Base, Arbitrum et ailleurs.\n- **Le launchpad comme accumulateur d’actions** — UniPump ouvre la voie à un modèle où chaque lancement construit une réserve adossée à des actions. Si ça marche, d’autres suivront.\n- **Intégration de l’IA** — des agents autonomes qui échangent des tokens actions 24/7 selon une stratégie.\n- **Cadres réglementaires** — orientations de la SEC en évolution, MiCA en Europe, coordination mondiale qui s’installe.",
        },
        {
          title: 'La vue d’ensemble',
          why: 'La version en un paragraphe, à répéter à n’importe qui.',
          content:
            "- **2 000 à 4 000 Md$** projetés d’ici 2030 (McKinsey, estimation prudente)\n- Toutes les grandes banques sont **déjà en production**, plus seulement en exploration\n- Le règlement passe de **J+1 à J+0**\n- L’accès passe de **filtré par un courtier à natif au wallet**\n\nLa question n’est pas de savoir si les actions passeront on-chain. C’est à quelle vitesse.\n\n*Rappel sur les ordres de grandeur : les 16 000 Md$ de BCG/ADDX mesurent une opportunité de marché, pas une capitalisation.*",
        },
      ],
    },
  ],

  quiz: [
    {
      q: 'Que signifie RWA ?',
      a: ['Random Web Assets', 'Real-World Assets (actifs du monde réel)', 'Reserved Wallet Allocation', 'Regulated Web Applications'],
      explain:
        'Real-world assets : tout ce qui a de la valeur en dehors de la blockchain — actions, obligations, immobilier, matières premières, bons du Trésor, art.',
    },
    {
      q: 'Quel est le principal avantage des actions tokenisées sur les actions traditionnelles ?',
      a: [
        'Elles montent toujours',
        'Trading 24/7, règlement instantané et propriété fractionnée',
        'Elles donnent plus de droits de vote',
        'Elles sont exonérées d’impôt',
      ],
      explain:
        'Les actions tokenisées se négocient en continu, se règlent de façon atomique au lieu du J+1, et s’achètent de façon fractionnée dès 1 $.',
    },
    {
      q: 'Quelle différence entre une action tokenisée custodial et une synthétique ?',
      a: [
        'Aucune différence',
        'La custodial est adossée à de vraies actions ; la synthétique ne fait que suivre le cours',
        'La synthétique est mieux régulée',
        'La custodial coûte moins cher',
      ],
      explain:
        'Avec un token custodial, un tiers détient de vraies actions 1:1. Un token synthétique ne détient aucune action : c’est un instrument de dette ou indexé qui n’offre qu’une exposition au prix.',
    },
    {
      q: 'Les tokens actions de Robinhood Chain sont des ERC-20 qui implémentent quel standard supplémentaire ?',
      a: ['ERC-721', 'ERC-1155', 'ERC-8056', 'ERC-404'],
      explain:
        'L’ERC-8056 ajoute un multiplicateur d’affichage pour les opérations sur titres comme les splits, sans modifier les soldes bruts.',
    },
    {
      q: 'Que se passe-t-il lors d’un split d’action avec des tokens ERC-8056 ?',
      a: [
        'Tes tokens sont brûlés puis réémis',
        'Le multiplicateur d’affichage est mis à jour — le solde affiché double sans changer le nombre de tokens',
        'Tu dois réclamer de nouveaux tokens',
        'Rien ne change',
      ],
      explain:
        'Un split 2 pour 1 fait passer le multiplicateur de 1,0 à 2,0. Les wallets affichent le double ; le solde ERC-20 brut n’est pas touché.',
    },
    {
      q: 'Quelle est la plus grosse catégorie de RWA on-chain en valeur ?',
      a: ['Les actions tokenisées', 'L’immobilier tokenisé', 'Les bons du Trésor américains tokenisés', 'Les matières premières tokenisées'],
      explain:
        'Les bons du Trésor américains tokenisés dominent, autour de 12,88 Md$. Les actions croissent le plus vite, mais ne sont pas encore les plus grosses.',
    },
    {
      q: 'Quel risque la SEC pointe-t-elle sur les actions tokenisées émises par des tiers ?',
      a: [
        'Elles seraient trop bon marché',
        'Le risque de contrepartie et de faillite de l’émetteur',
        'Elles s’échangent trop vite',
        'Elles sont trop décentralisées',
      ],
      explain:
        'Si l’émetteur fait faillite, tu détiens une créance sur l’émetteur, pas sur l’action sous-jacente.',
    },
    {
      q: 'Quelle plateforme est enregistrée auprès de la SEC et reverse de vrais dividendes ?',
      a: ['Uniswap', 'MetaMask', 'Dinari', 'OpenSea'],
      explain:
        'Dinari est un transfer agent enregistré auprès de la SEC, adosse ses dShares 1:1 à de vraies actions et reverse les vrais dividendes en numéraire.',
    },
    {
      q: 'Que signifie la « composabilité » pour les actions tokenisées ?',
      a: [
        'On peut les imprimer',
        'Elles peuvent interagir avec des protocoles DeFi — prêt, LP, NFT',
        'Elles peuvent changer de couleur',
        'Elles ne peuvent être détenues que dans un seul wallet',
      ],
      explain:
        'Comme ce sont des ERC-20 standards, les tokens actions peuvent servir de collatéral, de position LP, ou être enveloppés dans des NFT DN404.',
    },
    {
      q: 'Quelle taille de marché des actifs tokenisés McKinsey projette-t-il pour 2030 ?',
      a: ['1 milliard de dollars', '100 milliards de dollars', '2 000 à 4 000 milliards de dollars', '500 milliards de dollars'],
      explain:
        'L’estimation prudente de McKinsey est de 2 000 à 4 000 Md$. Le chiffre de 16 000 Md$ de BCG/ADDX mesure une opportunité, pas une capitalisation.',
    },
  ],
};

export default t;
