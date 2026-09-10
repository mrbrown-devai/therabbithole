// Overlay français — texte uniquement. Les ids, couleurs, icônes et indices de
// réponse restent dans ../content.js (voir lib/i18n.js).

const t = {
  ui: {
    back: 'Retour aux cours',
    heroTitle: 'Vlad Tenev',
    heroSubtitle: "L'homme qui a rendu le trading gratuit",
    heroLede:
      "D'une ville portuaire bulgare à une audition au Congrès, jusqu'à sa propre blockchain. L'histoire du fondateur de Robinhood, et du schéma qui se répète.",
    badgeChapters: '7 chapitres',
    badgeDuration: '~35 min',
    badgeLevel: 'Débutant',
    badgeQuiz: 'Quiz interactif',
    whyLabel: "Pourquoi c'est important",
    chapterSources: 'Sources du chapitre {n}',
    quizChapterTitle: 'Quiz — Teste tes connaissances',
    quizChapterSubtitle:
      '{n} questions · seuil de réussite {pass}/{n} · certificat « Rails Reader »',
    quizIntro:
      "Dix questions couvrant tout l'arc, de Varna à Robinhood Chain. Tes réponses sont sauvegardées au fur et à mesure.",
    quizSubmit: 'Valider mes réponses',
    quizAnswerAll: 'Réponds aux {n} questions ({done}/{n})',
    quizRetake: 'Refaire le quiz',
    quizPassTitle: 'Certificat débloqué — Rails Reader',
    quizPassBody:
      "Tu as passé le seuil de {pass}/{n}. Tu comprends pourquoi un courtier a construit une blockchain, ce que presque tout le monde comprend de travers.",
    quizFailTitle: 'Le seuil est de {pass}/{n}',
    quizFailBody:
      "Pas loin. Relis les chapitres 3 et 5 — le payment for order flow et le bouton d'achat contiennent la plupart des réponses.",
    nextEyebrow: 'Prochain terrier',
    nextTitle: 'Robinhood 101 : Le courtier devenu blockchain',
    nextBody:
      "La chaîne elle-même — architecture, Stock Tokens, comment y accéder, et ce qui s'y passe vraiment.",
    companionEyebrow: 'Histoire jumelle',
    companionTitle: 'Pavel Durov',
    companionBody:
      "L'autre fondateur qui a quitté son pays, affronté un État, et fini par construire ses propres rails.",
    sourcesHeading: '📚 Sources & lectures complémentaires',
    disclaimer:
      "Contenu éducatif uniquement. Ceci n'est pas un conseil financier. Il s'agit d'une biographie assemblée à partir de sources publiques ; les chiffres datent de septembre 2026 et changent constamment. Fais tes propres recherches.",
  },

  scaleStats: [
    { label: 'Clients', value: '~28M', note: 'dans 38 pays · 2026' },
    { label: 'Coté sous', value: 'HOOD', note: 'Nasdaq · IPO juillet 2021' },
    { label: 'Fondé en', value: '2013', note: 'avec Baiju Bhatt' },
    { label: 'Seul CEO depuis', value: 'nov. 2020', note: "fin de l'ère co-CEO" },
  ],

  levels: [
    {
      title: "Le pays qu'il a quitté juste à temps",
      subtitle: '1987 à 1992 · de Varna à Washington',
      intro:
        "On raconte d'habitude cette histoire à partir d'une audition au Congrès en 2021. Pour comprendre comment il s'est retrouvé sur cette chaise, il faut remonter à une ville portuaire de la mer Noire.",
      sections: [
        {
          title: 'La chaise, février 2021',
          why: "Toute biographie a une scène qu'elle cherche à expliquer. Voici la sienne.",
          content:
            "Le **18 février 2021**, un homme de 34 ans apparaît en visioconférence devant la commission des services financiers de la Chambre des représentants. Des élus des deux partis lui posent tour à tour la même question, formulée différemment : *pourquoi votre application a-t-elle empêché les gens d'acheter une action ?*\n\nL'application s'appelait **Robinhood**. Sa raison d'être affichée était de démocratiser la finance. Pendant deux jours en janvier, elle avait laissé les gens vendre GameStop sans pouvoir l'acheter, et internet avait déjà décidé que cela disait tout.\n\nL'homme sur la chaise s'appelle **Vladimir Tenev**. Il avait construit l'application. Il n'avait pas construit la tuyauterie en dessous — et cette distinction, c'est toute l'histoire des quinze années suivantes.\n\nPour comprendre comment il en est arrivé là, remontons à une ville portuaire de la mer Noire.",
        },
        {
          title: 'Varna, 1987',
          why: "L'angoisse financière qui l'a façonné n'est pas une métaphore. Sa famille l'a vécue.",
          timeline: [
            {
              date: '13 fév. 1987',
              title: 'Naissance à Varna',
              content:
                "Vladimir Tenev naît à Varna, sur la côte bulgare, dans un pays encore communiste et sur le point de ne plus rien avoir de reconnaissable.",
            },
            {
              date: 'Fin des années 1980',
              title: "Ses parents partent d'abord",
              content:
                "Tous deux économistes, ils émigrent aux États-Unis avec des visas fragiles et le laissent chez ses grands-parents. Ce détail dit à quel point le pari leur paraissait risqué.",
            },
            {
              date: 'vers 1992',
              title: 'Il traverse à cinq ans',
              content:
                "Il les rejoint dans la région de Washington DC. Ses deux parents finissent par travailler à la Banque mondiale.",
            },
            {
              date: 'Milieu des années 1990',
              title: 'La Bulgarie s’effondre',
              content:
                "À distance, la famille regarde arriver ce qu'elle avait fui : faillites bancaires, épargne volatilisée, effondrement de la monnaie.",
            },
          ],
        },
        {
          title: 'Pourquoi ça compte pour la suite',
          why: "Deux économistes qui ont vu mourir une monnaie élèvent un enfant avec un rapport très particulier à l'argent.",
          content:
            "Tenev a décrit le statut de visa de ses parents comme quelque chose qui lui a toujours semblé précaire, et leur départ comme un risque énorme pris par des gens abandonnant tout leur réseau de soutien. Ils sont partis, dit-il, juste à temps.\n\nLe foyer qui l'a produit traitait l'argent comme une chose qui peut **disparaître du jour au lendemain**, et il était tenu par deux personnes dont le métier était d'étudier l'argent. C'est un point de départ inhabituel quand on va passer sa carrière à dire aux gens ordinaires que les marchés sont aussi pour eux.\n\nGarde cette idée. Elle revient au chapitre 5, quand une chambre de compensation lui dira ce qu'il a le droit d'autoriser à ses utilisateurs.",
        },
      ],
    },
    {
      title: 'Doué avec les chiffres',
      subtitle: 'Années de formation · Thomas Jefferson, Stanford, UCLA',
      intro:
        "Il traverse proprement le pipeline académique de l'immigration. Ce qui est intéressant, ce n'est pas qu'il était brillant, c'est que sa brillance le poussait vers une vie qu'il a fini par refuser.",
      sections: [
        {
          title: 'Le pipeline',
          why: "Les diplômes sont banals dans cette histoire. Ce vers quoi ils pointaient ne l'est pas.",
          content:
            "**Thomas Jefferson High School for Science and Technology** dans le comté de Fairfax, l'un des lycées publics les plus compétitifs des États-Unis, où l'hypothèse implicite est que tu feras quelque chose de technique et que tu le feras sérieusement.\n\nPuis **Stanford**, et les mathématiques. Pas comme une porte d'entrée vers la finance. Il les faisait parce qu'il était bon.\n\nPuis un **doctorat de mathématiques à UCLA** — la voie où tu deviens professeur et où cette histoire s'arrête ici, sur une carrière tranquille et respectable.",
        },
        {
          title: 'La rencontre avec Baiju Bhatt',
          why: "Les fondateurs de ce type ont souvent une personne qui transforme les idées en réel.",
          content:
            "À Stanford il rencontre **Baiju Bhatt**, un autre enfant d'immigrés. Ça compte plus que n'importe quel diplôme des deux.\n\nLe cours sur Pavel Durov a la même charnière avec son frère Nikolaï. La version de Tenev, c'est Bhatt : le cofondateur qui convertit une observation en entreprise. Tous deux terminent un master de mathématiques, puis se séparent. Bhatt rejoint une firme de trading. Tenev part à UCLA.\n\nPuis **Lehman Brothers s'effondre en 2008**, et Bhatt l'appelle pour lui dire d'abandonner sa thèse.",
        },
        {
          title: 'La bifurcation',
          why: 'Le moment où la voie sûre cesse de gagner.',
          callout: {
            content:
              "**Le schéma à surveiller :** il ne quitte pas les mathématiques parce qu'il a échoué. Il part parce que 2008 fait ressembler le système financier à un problème qui vaut la peine d'être résolu, et parce que quelqu'un en qui il a confiance lui dit que la fenêtre est ouverte maintenant. Toutes ses décisions ultérieures dans ce cours ont la même forme : un système qu'il voit clairement, et un refus d'attendre son tour.",
          },
        },
      ],
    },
    {
      title: 'Construire la machine',
      subtitle: 'New York · 2008 à 2013',
      intro:
        "Avant Robinhood, ils ont construit deux entreprises pour ceux contre qui Robinhood serait ensuite positionné. C'est de là que vient réellement l'idée.",
      sections: [
        {
          title: 'La tuyauterie de Wall Street',
          why: "La partie que tout le monde saute quand on raconte cette histoire.",
          content:
            "Ils s'installent à New York et construisent **Celeris**, puis **Chronos Research** — des logiciels à faible latence pour les firmes de trading haute fréquence.\n\nIls étaient le fournisseur de tuyauterie de Wall Street, et ils étaient bons. Cet accès n'est pas une note de bas de page. C'est la raison pour laquelle l'idée leur était accessible.",
        },
        {
          title: 'La grille tarifaire dont personne ne parle',
          why: "C'est l'observation sur laquelle toute l'entreprise est bâtie.",
          content:
            "En vendant de la vitesse à des firmes professionnelles, ils remarquent ce qu'on ne peut voir que de l'intérieur.\n\n- Les firmes professionnelles auxquelles ils vendaient payaient **quasiment rien** pour passer un ordre.\n- L'investisseur particulier de l'autre côté du même marché payait **7 à 10 dollars**.\n\nMême marché. Même infrastructure. Deux grilles tarifaires totalement différentes, et l'écart ne s'expliquait pas par le coût. Il s'expliquait par **qui avait accès**.\n\nPuis 2011 et 2012 arrivent dehors. **Occupy Wall Street** installe dans la culture un grief général contre la finance, et Tenev et Bhatt ont déjà la version technique et précise de ce grief posée sur leur bureau.\n\nEn **2013**, ils cessent de vendre la machine aux firmes et la retournent.",
        },
        {
          title: 'Le payment for order flow, simplement',
          why: "Tu en as besoin maintenant, pas plus tard. C'est la différence entre avoir une opinion sur le chapitre 5 et n'avoir qu'une réaction.",
          content:
            "Si le trading est gratuit pour l'utilisateur, **quelqu'un paie**.\n\nLa réponse s'appelle le payment for order flow. Les teneurs de marché — les firmes qui payaient jadis Chronos pour la vitesse — paient Robinhood pour que les ordres de ses clients leur soient acheminés. Ils gagnent sur l'écart entre ce que paient les acheteurs et ce que reçoivent les vendeurs, et une part revient au courtier.\n\n**Ce que ce n'est pas :** un scandale en soi. C'est un modèle économique déclaré, régulé, utilisé dans toute l'industrie.\n\n**Ce que c'est :** un fait structurel à retenir. Le client n'est pas celui qui paie la facture, donc le client n'est pas la seule partie que l'entreprise doit satisfaire. Tous les débats sur Robinhood depuis 2015 vivent quelque part dans cette phrase.",
        },
      ],
    },
    {
      title: 'Gratuit',
      subtitle: "2013 à 2020 · L'app qui ressemblait à un jeu",
      intro:
        "Aucune commission, aucun minimum, et une liste d'attente qui transformait ta place dans la file en moteur de croissance. Ça a marché énormément, et le débat sur la question de savoir si ça aurait dû n'a jamais été tranché.",
      sections: [
        {
          title: 'Le lancement',
          why: "Les choix produit d'ici sont ceux dont on débat encore.",
          content:
            "Robinhood se lance **sans commission**, sans montant minimum, et avec une liste d'attente qui transforme ta position dans la file en moteur de parrainage.\n\nL'app est conçue pour ne ressembler à rien d'autre en finance : un écran, une courbe verte, des **confettis** quand tu passes ton premier ordre. Les courtiers traditionnels ressemblaient à un logiciel de déclaration d'impôts. Ça ressemblait à un jeu.\n\nC'était un choix de design délibéré, fait bien avant que quiconque ne débatte de sa responsabilité.",
        },
        {
          title: "L'échelle atteinte",
          why: 'Les chiffres rendent lisibles les enjeux qui suivent.',
          content:
            "Toute une génération ouvre son premier compte-titres sur un téléphone, pendant une pandémie, avec de l'argent d'aide publique dessus.\n\nEn **novembre 2020**, l'arrangement à deux CEO prend fin et Tenev prend seul la tête de l'entreprise. Bhatt reste Chief Creative Officer jusqu'en mars 2024, puis part fonder **Aetherflux**, une entreprise d'énergie solaire spatiale.",
        },
        {
          title: 'Les deux sont vrais',
          why: 'La tension sur laquelle repose tout le reste du cours.',
          callout: {
            content:
              "**Le débat non tranché :** il a construit un outil sérieux pour investir sérieusement et l'a livré avec des confettis. Les critiques parlent de gamification qui pousse des gens inexpérimentés vers des trades risqués. Les défenseurs rappellent que l'alternative était une industrie qui facturait 10 dollars par ordre et se rendait délibérément inhospitalière. Les deux lectures se défendent, et l'entreprise n'a jamais complètement échappé à aucune des deux.",
          },
        },
      ],
    },
    {
      title: "Le bouton d'achat",
      subtitle: 'Janvier 2021 · GameStop, le Congrès, l’IPO',
      intro:
        "Retour à la scène d'ouverture, cette fois avec tout ce qu'il faut pour la lire. La contrainte qui lui a forcé la main n'était pas dans son application.",
      sections: [
        {
          title: "Ce qui s'est réellement passé",
          why: 'La mécanique compte, parce que la mécanique est la leçon.',
          content:
            "**GameStop** est une action massivement vendue à découvert. Un forum et une foule de particuliers font aux hedge funds à peu près ce que la promesse de Robinhood avait toujours laissé entendre qu'ils pourraient faire. Le volume part à la verticale.\n\nPuis la chambre de compensation réclame à Robinhood un **dépôt de garantie très supérieur à tout ce que l'entreprise avait prévu**. Le 28 janvier, l'app restreint l'achat sur une poignée de tickers tout en laissant la vente ouverte.\n\nPour les gens qui l'utilisaient, ça n'a voulu dire qu'une chose : l'app qui s'appelle Robinhood avait choisi le camp du shérif.",
        },
        {
          title: "Pourquoi l'explication n'est pas passée",
          why: 'Une défense vraie peut rester une défense inutile.',
          content:
            "L'explication technique, c'est que **les exigences de collatéral au niveau de la compensation sont bien réelles** et ont failli faire tomber l'entreprise cette semaine-là. C'est à la fois vrai et totalement inutile comme défense.\n\nLa promesse, c'était la démocratisation. Le produit livré avait un interrupteur que les utilisateurs ne contrôlaient pas, et il a été actionné au moment exact où la promesse était mise à l'épreuve. Aucun détail de plomberie, aussi juste soit-il, ne survit à ça.",
          callout: {
            content:
              "**La leçon qui façonne tout ce qui suit :** la contrainte qui lui a forcé la main n'était pas dans son application. Elle était dans la tuyauterie de règlement en dessous, et cette tuyauterie ne lui appartenait pas.",
          },
        },
        {
          title: 'Le Congrès, puis le Nasdaq',
          why: 'Deux événements à cinq mois d’écart, qui pointent dans des directions opposées.',
          timeline: [
            {
              date: '28 janv. 2021',
              title: "Achat restreint",
              content: "Des limites de trading sont posées sur GME et quelques autres tickers. La vente reste ouverte.",
            },
            {
              date: '18 fév. 2021',
              title: "L'audition à la Chambre",
              content: "Tenev témoigne devant la commission des services financiers. C'est la scène qui ouvre le chapitre 1.",
            },
            {
              date: 'Juil. 2021',
              title: 'IPO au Nasdaq',
              content: "Robinhood entre en bourse sous le ticker HOOD, six mois après la pire semaine de son histoire.",
            },
          ],
        },
      ],
    },
    {
      title: 'Reconstruire les rails',
      subtitle: '2021 à 2026 · Du courtier à la blockchain',
      intro:
        "Alors il s'attaque à la tuyauterie. Lis ce chapitre comme une conséquence du chapitre 5, pas comme un nouveau sujet.",
      sections: [
        {
          title: "La crypto d'abord",
          why: "Le règlement est ce dont il a perdu le contrôle. La crypto est l'endroit où le règlement est instantané.",
          content:
            "La crypto se règle sans chambre de compensation entre l'ordre et l'argent. Pour un CEO qui vient d'être forcé de couper un bouton d'achat par un appel de marge, ce n'est pas un avantage abstrait.\n\nRobinhood s'y engage. Puis, en **juin 2025 à Cannes**, l'entreprise met plus de **200 actions tokenisées** entre les mains des utilisateurs européens, émises sur Arbitrum One, et annonce publiquement son intention de les migrer vers un Layer 2 qui lui appartiendra.",
        },
        {
          title: "Passer à l'échelle mondiale",
          why: "La chaîne n'a de sens qu'à côté du déploiement international.",
          timeline: [
            {
              date: '30 juin 2025',
              title: 'Cannes',
              content: "Plus de 200 actions et ETF tokenisés pour les utilisateurs européens sur Arbitrum One, plus l'annonce d'une chaîne dédiée à venir.",
            },
            {
              date: '2026',
              title: 'Rachat de WonderFi',
              content: "Robinhood rachète WonderFi pour environ 250 M CAD en dilué, et dépasse le million de clients hors États-Unis.",
            },
            {
              date: '10 fév. 2026',
              title: 'Testnet public',
              content: "Quatre millions de transactions et plus de 600 000 contrats déployés dès la première semaine.",
            },
            {
              date: '1er juil. 2026',
              title: 'The World Is Flat',
              content: "Lancement du mainnet au Old Royal Naval College à Londres, animé par Tenev avec Johann Kerbrat, SVP et GM Crypto & International.",
            },
          ],
        },
        {
          title: 'Quinze ans plus tard',
          why: 'La boucle ouverte au chapitre 5 se referme.',
          content:
            "Le **1er juillet 2026**, sous une bannière proclamant *The World Is Flat*, Robinhood Chain entre en service : un Layer 2 Ethereum bâti sur la stack Arbitrum, avec des **Stock Tokens** qui s'échangent en continu et des protocoles DeFi présents dès le premier jour.\n\nQuinze ans après qu'une chambre de compensation lui a dit ce qu'il ne pouvait pas faire, le courtier possède la couche de règlement.\n\nSi tu veux la chaîne elle-même — l'architecture, comment y accéder, ce qui s'y passe vraiment — c'est le cours suivant.",
        },
      ],
    },
    {
      title: 'Le schéma',
      subtitle: 'Ce que ça nous apprend',
      intro:
        "La plaidoirie finale, et la raison pour laquelle ça mérite un cours plutôt qu'un portrait.",
      sections: [
        {
          title: 'Rails sérieux, trafic pas sérieux',
          why: "Le fil conducteur qui rend la biographie utile plutôt que décorative.",
          content:
            "Tenev construit sans cesse des infrastructures pour un type de trading qu'il décrit comme sérieux, et le trafic qui arrive ne l'est pas.\n\n- Il a construit un **courtier sans commission pour investisseurs long terme** et a récolté le short squeeze des meme stocks.\n- Il a construit une **chaîne pour actions tokenisées** et a récolté une usine à tokens. Les memecoins ont représenté l'écrasante majorité des premiers volumes de DEX, tandis que les stock tokens et les RWA n'en représentaient qu'une petite fraction.\n\nEn juillet 2026, il a démoli les memecoins à la télévision et en a soutenu un sur X dans la même quinzaine.",
        },
        {
          title: 'La fin CashCat',
          why: "On ne pourrait pas en inventer une plus propre.",
          content:
            "**CashCat** était un nom que lui et Bhatt avaient envisagé avant de choisir Robinhood — rapporté dans un portrait du *New Yorker*, et évoqué par lui-même sur Twitter en 2021.\n\nEn juillet 2026, un token communautaire a ressuscité ce nom abandonné **sur sa propre blockchain**, a brièvement atteint une capitalisation proche de **156 millions de dollars**, et n'avait absolument aucun lien avec l'entreprise. Robinhood l'a ensuite listé, une première pour un memecoin né sur la chaîne.\n\nSa marque rejetée est revenue sous forme de memecoin sur la chaîne qu'il a construite pour Wall Street.",
        },
        {
          title: 'Deux fondateurs, une même architecture',
          why: 'La raison pour laquelle ce cours est posé à côté de celui sur Pavel Durov.',
          callout: {
            content:
              "**Durov et Tenev** ont tous deux quitté leur pays de naissance. Tous deux ont bâti des plateformes grand public dont des États ont fini par exiger des comptes. Tous deux ont dû s'asseoir face au pouvoir et s'expliquer. Et tous deux en ont conclu que la solution était de **posséder les rails**. Durov s'y est pris depuis l'extérieur du système, Tenev depuis l'intérieur. Deux hommes très différents arrivant à la même architecture, c'est plus intéressant que chacune des deux biographies prise seule.",
          },
          link: { label: 'Lire le cours Pavel Durov →' },
        },
        {
          title: "L'autre Vlad",
          why: "Ce qu'il fait quand il ne dirige pas un courtier.",
          content:
            "- Cofondateur de **Harmonic**, une entreprise d'IA qui vise la superintelligence mathématique. Les maths n'ont pas été abandonnées, elles ont eu droit à une deuxième entreprise.\n- Conseiller de **Lighter**, une plateforme de perpétuels.\n- Président du conseil d'administration de Robinhood, en plus d'être CEO et Président.\n\nEn une seule quinzaine de juillet 2026, il faisait tous ces métiers à la fois.",
        },
        {
          title: 'Chronologie',
          why: "Tout l'arc sur un seul écran.",
          summary: [
            '**1987 :** Naissance à Varna, Bulgarie',
            '**vers 1992 :** Rejoint ses parents aux États-Unis à cinq ans ; tous deux travaillent à la Banque mondiale',
            '**2008 :** Lehman s’effondre ; il abandonne son doctorat de maths à UCLA',
            '**2008-13 :** Construit Celeris et Chronos Research, vendant de la vitesse aux firmes HFT',
            '**2013 :** Fonde Robinhood avec Baiju Bhatt après Occupy Wall Street',
            '**2020 :** Devient seul CEO',
            "**Janv. 2021 :** GameStop ; achat restreint ; le bouton d'achat devient l'histoire",
            '**Fév. 2021 :** Témoigne devant la commission des services financiers de la Chambre',
            '**Juil. 2021 :** IPO au Nasdaq sous HOOD',
            '**Juin 2025 :** Cannes — plus de 200 actions tokenisées pour les Européens',
            '**1er juil. 2026 :** Mainnet Robinhood Chain, Londres',
          ],
        },
      ],
    },
  ],

  quiz: [
    {
      q: 'Où est né Vlad Tenev ?',
      a: ['Sofia, Bulgarie', 'Moscou, Russie', 'Varna, Bulgarie', 'Washington DC, États-Unis'],
      explain:
        "Il est né à Varna, sur la côte bulgare, en février 1987. Ses parents ont émigré les premiers et il les a rejoints aux États-Unis à cinq ans.",
    },
    {
      q: 'Que faisaient ses deux parents après avoir émigré aux États-Unis ?',
      a: ['Ils travaillaient à la Banque mondiale', 'Ils tenaient un restaurant', 'Ils enseignaient à Stanford', 'Ils ont fondé un hedge fund'],
      explain:
        "Tous deux étaient économistes et ont fini par travailler à la Banque mondiale, dans la région de Washington DC.",
    },
    {
      q: 'Que Tenev et Baiju Bhatt ont-ils construit AVANT Robinhood ?',
      a: [
        'Un réseau social pour investisseurs',
        'Des logiciels de trading à faible latence pour les firmes de trading haute fréquence',
        'Une plateforme d’échange de cryptomonnaies',
        'Un robo-advisor pour comptes retraite'],
      explain:
        "Celeris, puis Chronos Research. Ils vendaient de la vitesse aux firmes professionnelles contre lesquelles Robinhood serait ensuite positionné — c'est exactement comme ça qu'ils ont repéré l'écart tarifaire.",
    },
    {
      q: "Quelle observation a directement mené à Robinhood ?",
      a: [
        'Les particuliers ne comprenaient pas la bourse',
        'Les applications mobiles étaient plus rentables que les sites web',
        'Les fonds indiciels battaient les gérants actifs',
        'Les firmes professionnelles ne payaient quasiment rien par ordre alors que les particuliers payaient 7 à 10 dollars'],
      explain:
        "Même marché, même infrastructure, deux grilles tarifaires différentes. L'écart s'expliquait par l'accès, pas par le coût.",
    },
    {
      q: "Si Robinhood ne facture aucune commission, d'où viennent les revenus ?",
      a: [
        "Du payment for order flow — les teneurs de marché paient pour recevoir les ordres des clients",
        'De subventions publiques',
        'De la vente des identités des clients',
        "L'entreprise n'a jamais eu de revenus"],
      explain:
        "Les teneurs de marché paient le courtier pour que les ordres leur soient acheminés et gagnent sur l'écart. C'est déclaré et courant dans l'industrie, mais cela signifie que le client n'est pas celui qui paie la facture.",
    },
    {
      q: "En janvier 2021, qu'est-ce qui a réellement forcé Robinhood à restreindre l'achat de GameStop ?",
      a: [
        'Une décision de justice',
        'Des hedge funds ont pris une participation dans Robinhood',
        "Un appel de collatéral de la chambre de compensation très supérieur à ce que l'entreprise avait prévu",
        "Les serveurs de l'application ont planté"],
      explain:
        "La contrainte se situait dans la couche de règlement, pas dans l'application. C'est la leçon qui gouverne tout ce que Tenev fait ensuite.",
    },
    {
      q: "Pourquoi l'explication technique n'a-t-elle pas satisfait les utilisateurs de Robinhood ?",
      a: [
        "Parce qu'elle était fausse",
        "Personne n'avait entendu parler des chambres de compensation",
        "Robinhood a refusé de s'expliquer",
        "La promesse était la démocratisation, et le produit avait un interrupteur que les utilisateurs ne contrôlaient pas"],
      explain:
        "Une explication juste peut rester une défense inutile. L'interrupteur a été actionné au moment exact où la promesse était mise à l'épreuve.",
    },
    {
      q: 'Quand et où Robinhood Chain a-t-elle lancé son mainnet public ?',
      a: [
        'En juin 2025, à Cannes',
        'Le 1er juillet 2026, au Old Royal Naval College à Londres',
        'En février 2026, uniquement en ligne',
        'En janvier 2021, à New York'],
      explain:
        "Le lancement a eu lieu lors du keynote « The World Is Flat », animé par Tenev avec Johann Kerbrat. Cannes 2025 était l'annonce des actions tokenisées ; février 2026 était le testnet public.",
    },
    {
      q: 'Quel schéma ce cours identifie-t-il comme définissant la carrière de Tenev ?',
      a: [
        'Il copie tout ce que ses concurrents lancent en premier',
        'Il évite complètement les marchés régulés',
        "Il construit des infrastructures pour du trading sérieux et c'est un trafic spéculatif qui arrive",
        "Il vend chaque entreprise qu'il fonde en moins de trois ans"],
      explain:
        "Un courtier sans commission pour investisseurs long terme a récolté le short squeeze des meme stocks. Une chaîne pour actions tokenisées a récolté une usine à tokens. Même histoire, quinze ans d'écart.",
    },
    {
      q: "Qu'est-ce que CashCat ?",
      a: [
        "Un nom envisagé par Tenev et Bhatt avant « Robinhood », ressuscité plus tard en memecoin non affilié sur Robinhood Chain",
        'Le token officiel de la chaîne Robinhood',
        "La chambre de compensation à l'origine de l'appel de collatéral de 2021",
        "L'entreprise d'IA de Tenev"],
      explain:
        "La marque abandonnée est revenue en memecoin communautaire sur sa propre blockchain, atteignant brièvement environ 156 M$ de capitalisation sans aucun lien avec l'entreprise. Robinhood Chain n'a pas de token natif.",
    },
  ],
};

export default t;
