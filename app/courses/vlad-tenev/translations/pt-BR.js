// Camada de tradução em português. Chrome, títulos e quiz traduzidos;
// a prosa longa dos capítulos volta para o inglês (ver lib/i18n.js).

const t = {
  ui: {
    back: 'Voltar aos cursos',
    heroTitle: 'Vlad Tenev',
    heroSubtitle: 'O homem que tornou o trading gratuito',
    heroLede:
      'De uma cidade portuária búlgara a uma audiência no Congresso e à sua própria blockchain. A história do fundador da Robinhood, e do padrão que se repete.',
    badgeChapters: '7 capítulos',
    badgeDuration: '~35 min',
    badgeLevel: 'Iniciante',
    badgeQuiz: 'Quiz interativo',
    whyLabel: 'Por que isso importa',
    chapterSources: 'Fontes do capítulo {n}',
    quizChapterTitle: 'Quiz — Teste seus conhecimentos',
    quizChapterSubtitle: '{n} perguntas · aprovação {pass}/{n} · certificado “Rails Reader”',
    quizIntro:
      'Dez perguntas cobrindo todo o arco, de Varna à Robinhood Chain. Suas respostas são salvas conforme você avança.',
    quizSubmit: 'Enviar respostas',
    quizAnswerAll: 'Responda as {n} perguntas ({done}/{n})',
    quizRetake: 'Refazer o quiz',
    quizPassTitle: 'Certificado desbloqueado — Rails Reader',
    quizPassBody:
      'Você passou do corte de {pass}/{n}. Entendeu por que uma corretora construiu uma blockchain, que é justamente a parte que quase todo mundo erra.',
    quizFailTitle: 'A nota de corte é {pass}/{n}',
    quizFailBody:
      'Perto. Revise os capítulos 3 e 5 — o payment for order flow e o botão de compra carregam a maioria das respostas.',
    nextEyebrow: 'Próxima toca',
    nextTitle: 'Robinhood 101: A corretora que virou blockchain',
    nextBody:
      'A cadeia em si — arquitetura, Stock Tokens, como entrar e o que realmente acontece lá.',
    companionEyebrow: 'História irmã',
    companionTitle: 'Pavel Durov',
    companionBody:
      'O outro fundador que deixou seu país, enfrentou um Estado e acabou construindo os próprios trilhos.',
    sourcesHeading: '📚 Fontes e leituras adicionais',
    disclaimer:
      'Conteúdo educacional apenas. Não é aconselhamento financeiro. É uma biografia montada a partir de fontes públicas; os números são de setembro de 2026 e mudam constantemente. Faça sua própria pesquisa.',
  },

  scaleStats: [
    { label: 'Clientes', value: '~28M', note: 'em 38 países · 2026' },
    { label: 'Listada como', value: 'HOOD', note: 'Nasdaq · IPO julho 2021' },
    { label: 'Fundada em', value: '2013', note: 'com Baiju Bhatt' },
    { label: 'CEO único desde', value: 'nov. 2020', note: 'fim da era co-CEO' },
  ],

  levels: [
    {
      title: 'O país que ele deixou bem a tempo',
      subtitle: '1987 a 1992 · de Varna a Washington',
      intro:
        'Essa história costuma ser contada a partir de uma audiência no Congresso em 2021. Para entender como ele foi parar naquela cadeira, é preciso voltar a uma cidade portuária do mar Negro.',
      sections: [
        { title: 'A cadeira, fevereiro de 2021', why: 'Toda biografia tem uma cena que ela tenta explicar. Esta é a dele.' },
        { title: 'Varna, 1987', why: 'A ansiedade financeira que o moldou não é metáfora. A família dele viveu isso.' },
        { title: 'Por que isso importa depois', why: 'Dois economistas que viram uma moeda morrer criam um filho com uma relação muito específica com dinheiro.' },
      ],
    },
    {
      title: 'Bom com números',
      subtitle: 'Anos de formação · Thomas Jefferson, Stanford, UCLA',
      intro:
        'Ele percorre limpo o funil acadêmico do imigrante. O interessante não é que fosse brilhante, é que ser brilhante o empurrava para uma vida que ele acabou recusando.',
      sections: [
        { title: 'O funil', why: 'Os diplomas são banais nesta história. O que eles apontavam, não.' },
        { title: 'Conhecer Baiju Bhatt', why: 'Fundadores desse tipo costumam ter uma pessoa que transforma ideias em realidade.' },
        { title: 'A bifurcação', why: 'O momento em que o caminho seguro para de vencer.' },
      ],
    },
    {
      title: 'Construindo a máquina',
      subtitle: 'Nova York · 2008 a 2013',
      intro:
        'Antes da Robinhood eles construíram duas empresas para quem a Robinhood depois se posicionaria contra. É daí que a ideia realmente vem.',
      sections: [
        { title: 'O encanamento de Wall Street', why: 'A parte que todo mundo pula ao contar essa história.' },
        { title: 'A tabela de preços de que ninguém fala', why: 'Esta é a observação sobre a qual a empresa inteira é construída.' },
        { title: 'Payment for order flow, sem rodeios', why: 'Você precisa disso agora, não depois. É a diferença entre ter opinião sobre o capítulo 5 e apenas ter uma reação.' },
      ],
    },
    {
      title: 'Grátis',
      subtitle: '2013 a 2020 · O app que parecia um jogo',
      intro:
        'Sem comissões, sem mínimo, e uma lista de espera que transformava sua posição na fila em motor de crescimento. Funcionou enormemente, e a discussão sobre se deveria nunca foi encerrada.',
      sections: [
        { title: 'O lançamento', why: 'As decisões de produto daqui são as que ainda se discutem.' },
        { title: 'A escala que alcançou', why: 'Números tornam legível o que vem depois.' },
        { title: 'As duas coisas são verdade', why: 'A tensão que sustenta o resto do curso.' },
      ],
    },
    {
      title: 'O botão de compra',
      subtitle: 'Janeiro de 2021 · GameStop, o Congresso, o IPO',
      intro:
        'De volta à cena de abertura, agora com tudo o que você precisa para lê-la. A restrição que forçou a mão dele não estava no app.',
      sections: [
        { title: 'O que realmente aconteceu', why: 'A mecânica importa, porque a mecânica é a lição.' },
        { title: 'Por que a explicação não colou', why: 'Uma defesa verdadeira ainda pode ser inútil.' },
        { title: 'O Congresso, depois a Nasdaq', why: 'Dois eventos com cinco meses de diferença, apontando para lados opostos.' },
      ],
    },
    {
      title: 'Reconstruindo os trilhos',
      subtitle: '2021 a 2026 · Da corretora à blockchain',
      intro:
        'Então ele vai atrás do encanamento. Leia este capítulo como consequência do capítulo 5, não como assunto novo.',
      sections: [
        { title: 'Cripto primeiro', why: 'A liquidação é o que ele perdeu. Cripto é onde a liquidação é instantânea.' },
        { title: 'Indo global', why: 'A cadeia só faz sentido ao lado da expansão internacional.' },
        { title: 'Quinze anos depois', why: 'Fecha-se o ciclo aberto no capítulo 5.' },
      ],
    },
    {
      title: 'O padrão',
      subtitle: 'O que dá para aprender',
      intro: 'O argumento final, e a razão de isso merecer um curso em vez de um perfil.',
      sections: [
        { title: 'Trilhos sérios, tráfego nada sério', why: 'O fio condutor que torna a biografia útil em vez de decorativa.' },
        { title: 'O final CashCat', why: 'Não daria para inventar um mais limpo.' },
        { title: 'Dois fundadores, uma arquitetura', why: 'A razão de este curso ficar ao lado do de Pavel Durov.', link: { label: 'Ler o curso do Pavel Durov →' } },
        { title: 'O outro Vlad', why: 'O que ele faz quando não está tocando uma corretora.' },
        { title: 'Linha do tempo', why: 'O arco inteiro em uma tela.' },
      ],
    },
  ],

  quiz: [
    {
      q: 'Onde Vlad Tenev nasceu?',
      a: ['Sófia, Bulgária', 'Moscou, Rússia', 'Varna, Bulgária', 'Washington DC, EUA'],
      explain: 'Nasceu em Varna, no litoral búlgaro, em fevereiro de 1987. Os pais emigraram primeiro e ele se juntou a eles nos EUA aos cinco anos.',
    },
    {
      q: 'O que os dois pais dele faziam depois de emigrar para os Estados Unidos?',
      a: ['Trabalhavam no Banco Mundial', 'Tinham um restaurante', 'Davam aula em Stanford', 'Fundaram um hedge fund'],
      explain: 'Ambos eram economistas e acabaram trabalhando no Banco Mundial, na região de Washington DC.',
    },
    {
      q: 'O que Tenev e Baiju Bhatt construíram ANTES da Robinhood?',
      a: ['Uma rede social para investidores', 'Software de trading de baixa latência para firmas de alta frequência', 'Uma exchange de criptomoedas', 'Um robo-advisor para aposentadoria'],
      explain: 'Celeris e depois Chronos Research. Vendiam velocidade às firmas profissionais contra as quais a Robinhood se posicionaria — foi assim que enxergaram a diferença de preço.',
    },
    {
      q: 'Qual observação levou diretamente à Robinhood?',
      a: ['Investidores de varejo não entendiam a bolsa', 'Apps móveis eram mais lucrativos que sites', 'Fundos de índice batiam os gestores ativos', 'Firmas profissionais pagavam quase nada por operação enquanto o varejo pagava US$ 7 a 10'],
      explain: 'Mesmo mercado, mesma infraestrutura, duas tabelas de preço. A diferença se explicava por acesso, não por custo.',
    },
    {
      q: 'Se a Robinhood não cobra comissão, de onde vem a receita?',
      a: ['Do payment for order flow — formadores de mercado pagam para receber as ordens dos clientes', 'De subsídios do governo', 'Da venda de identidades de clientes', 'Nunca teve receita'],
      explain: 'Formadores de mercado pagam à corretora pelo roteamento das ordens e lucram com o spread. É divulgado e comum no setor, mas significa que o cliente não é quem paga a conta.',
    },
    {
      q: 'Em janeiro de 2021, o que realmente obrigou a Robinhood a restringir a compra de GameStop?',
      a: ['Uma ordem judicial', 'Hedge funds compraram parte da Robinhood', 'Uma exigência de garantia da câmara de compensação muito acima do previsto', 'Os servidores do app caíram'],
      explain: 'A restrição estava na camada de liquidação, não no app. É a lição que guia tudo o que Tenev faz depois.',
    },
    {
      q: 'Por que a explicação técnica não convenceu os usuários?',
      a: ['Porque não era verdade', 'Ninguém conhecia câmaras de compensação', 'A Robinhood se recusou a explicar', 'A promessa era democratização, e o produto tinha um interruptor que os usuários não controlavam'],
      explain: 'Uma explicação correta ainda pode ser uma defesa inútil. O interruptor foi acionado exatamente quando a promessa estava sendo testada.',
    },
    {
      q: 'Quando e onde a Robinhood Chain lançou sua mainnet pública?',
      a: ['Junho de 2025, em Cannes', 'Em 1º de julho de 2026, no Old Royal Naval College em Londres', 'Fevereiro de 2026, só online', 'Janeiro de 2021, em Nova York'],
      explain: 'O lançamento foi no keynote "The World Is Flat", com Tenev e Johann Kerbrat. Cannes 2025 foi o anúncio das ações tokenizadas; fevereiro de 2026, a testnet pública.',
    },
    {
      q: 'Qual padrão este curso defende como definidor da carreira de Tenev?',
      a: ['Ele copia o que os concorrentes lançam primeiro', 'Ele evita mercados regulados por completo', 'Ele constrói infraestrutura para trading sério e chega tráfego especulativo', 'Ele vende toda empresa que funda em menos de três anos'],
      explain: 'Uma corretora sem comissão para investidores de longo prazo recebeu o short squeeze das meme stocks. Uma cadeia para ações tokenizadas recebeu uma fábrica de tokens. Mesma história, quinze anos depois.',
    },
    {
      q: 'O que é CashCat?',
      a: ['Um nome que Tenev e Bhatt cogitaram antes de "Robinhood", depois revivido como memecoin não afiliada na Robinhood Chain', 'O token oficial da cadeia da Robinhood', 'A câmara de compensação da chamada de garantia de 2021', 'A empresa de IA de Tenev'],
      explain: 'A marca descartada voltou como memecoin comunitária na blockchain dele, chegando perto de US$ 156M de capitalização sem ligação com a empresa. A Robinhood Chain não tem token nativo.',
    },
  ],
};

export default t;
