// Capa de traducción al español. Chrome, encabezados y quiz traducidos;
// la prosa larga de los capítulos vuelve al inglés (ver lib/i18n.js).

const t = {
  ui: {
    back: 'Volver a los cursos',
    heroTitle: 'Vlad Tenev',
    heroSubtitle: 'El hombre que hizo gratis el trading',
    heroLede:
      'De una ciudad portuaria búlgara a una audiencia en el Congreso y a su propia blockchain. La historia del fundador de Robinhood, y el patrón que se repite.',
    badgeChapters: '7 capítulos',
    badgeDuration: '~35 min',
    badgeLevel: 'Principiante',
    badgeQuiz: 'Quiz interactivo',
    whyLabel: 'Por qué esto importa',
    chapterSources: 'Fuentes del capítulo {n}',
    quizChapterTitle: 'Quiz — Pon a prueba tus conocimientos',
    quizChapterSubtitle: '{n} preguntas · aprobado {pass}/{n} · certificado «Rails Reader»',
    quizIntro:
      'Diez preguntas que cubren todo el arco, de Varna a Robinhood Chain. Tus respuestas se guardan sobre la marcha.',
    quizSubmit: 'Enviar respuestas',
    quizAnswerAll: 'Responde las {n} preguntas ({done}/{n})',
    quizRetake: 'Repetir el quiz',
    quizPassTitle: 'Certificado desbloqueado — Rails Reader',
    quizPassBody:
      'Superaste el umbral de {pass}/{n}. Entiendes por qué un bróker construyó una blockchain, que es la parte que casi todo el mundo malinterpreta.',
    quizFailTitle: 'El aprobado está en {pass}/{n}',
    quizFailBody:
      'Cerca. Repasa los capítulos 3 y 5 — el payment for order flow y el botón de compra contienen la mayoría de las respuestas.',
    nextEyebrow: 'Siguiente madriguera',
    nextTitle: 'Robinhood 101: El bróker que se volvió blockchain',
    nextBody:
      'La cadena en sí — arquitectura, Stock Tokens, cómo entrar y qué ocurre realmente allí.',
    companionEyebrow: 'Historia hermana',
    companionTitle: 'Pavel Durov',
    companionBody:
      'El otro fundador que dejó su país, se enfrentó a un Estado y acabó construyendo sus propios raíles.',
    sourcesHeading: '📚 Fuentes y lecturas adicionales',
    disclaimer:
      'Contenido educativo únicamente. No es asesoramiento financiero. Es una biografía construida a partir de fuentes públicas; las cifras son de septiembre de 2026 y cambian constantemente. Haz tu propia investigación.',
  },

  scaleStats: [
    { label: 'Clientes', value: '~28M', note: 'en 38 países · 2026' },
    { label: 'Cotiza como', value: 'HOOD', note: 'Nasdaq · IPO julio 2021' },
    { label: 'Fundada en', value: '2013', note: 'con Baiju Bhatt' },
    { label: 'CEO único desde', value: 'nov. 2020', note: 'fin de la era co-CEO' },
  ],

  levels: [
    {
      title: 'El país que dejó justo a tiempo',
      subtitle: '1987 a 1992 · de Varna a Washington',
      intro:
        'Esta historia suele contarse desde una audiencia en el Congreso en 2021. Para entender cómo llegó a esa silla hay que retroceder a una ciudad portuaria del mar Negro.',
      sections: [
        { title: 'La silla, febrero de 2021', why: 'Toda biografía tiene una escena que intenta explicar. Esta es la suya.' },
        { title: 'Varna, 1987', why: 'La ansiedad financiera que lo formó no es una metáfora. Su familia la vivió.' },
        { title: 'Por qué importa después', why: 'Dos economistas que vieron morir una moneda crían a un hijo con una relación muy concreta con el dinero.' },
      ],
    },
    {
      title: 'Bueno con los números',
      subtitle: 'Años de formación · Thomas Jefferson, Stanford, UCLA',
      intro:
        'Recorre limpiamente el circuito académico del inmigrante. Lo interesante no es que fuera brillante, sino que serlo lo empujaba hacia una vida que acabó rechazando.',
      sections: [
        { title: 'El circuito', why: 'Los títulos son corrientes en esta historia. Lo que señalaban no lo es.' },
        { title: 'Conocer a Baiju Bhatt', why: 'Los fundadores de este tipo suelen tener una persona que convierte las ideas en realidad.' },
        { title: 'La bifurcación', why: 'El momento en que el camino seguro deja de ganar.' },
      ],
    },
    {
      title: 'Construir la máquina',
      subtitle: 'Nueva York · 2008 a 2013',
      intro:
        'Antes de Robinhood construyeron dos empresas para la gente contra la que Robinhood se posicionaría después. De ahí sale realmente la idea.',
      sections: [
        { title: 'La fontanería de Wall Street', why: 'La parte que todos se saltan al contar esta historia.' },
        { title: 'La lista de precios de la que nadie habla', why: 'Esta es la observación sobre la que se construye toda la empresa.' },
        { title: 'El payment for order flow, en claro', why: 'Lo necesitas ahora, no después. Es la diferencia entre tener una opinión sobre el capítulo 5 y solo una reacción.' },
      ],
    },
    {
      title: 'Gratis',
      subtitle: '2013 a 2020 · La app que parecía un juego',
      intro:
        'Sin comisiones, sin mínimo y con una lista de espera que convertía tu posición en la cola en un motor de crecimiento. Funcionó enormemente, y el debate sobre si debió hacerlo nunca se ha cerrado.',
      sections: [
        { title: 'El lanzamiento', why: 'Las decisiones de producto de aquí son las que todavía se discuten.' },
        { title: 'La escala que alcanzó', why: 'Los números hacen legible lo que viene después.' },
        { title: 'Ambas cosas son ciertas', why: 'La tensión sobre la que corre el resto del curso.' },
      ],
    },
    {
      title: 'El botón de compra',
      subtitle: 'Enero de 2021 · GameStop, el Congreso, la IPO',
      intro:
        'De vuelta a la escena inicial, ahora con todo lo necesario para leerla. La restricción que le forzó la mano no estaba en su aplicación.',
      sections: [
        { title: 'Qué ocurrió realmente', why: 'La mecánica importa, porque la mecánica es la lección.' },
        { title: 'Por qué la explicación no funcionó', why: 'Una defensa cierta puede seguir siendo inútil.' },
        { title: 'El Congreso, luego el Nasdaq', why: 'Dos hechos con cinco meses de diferencia, apuntando en direcciones opuestas.' },
      ],
    },
    {
      title: 'Reconstruir los raíles',
      subtitle: '2021 a 2026 · Del bróker a la blockchain',
      intro:
        'Así que va a por la fontanería. Lee este capítulo como consecuencia del capítulo 5, no como un tema nuevo.',
      sections: [
        { title: 'Primero, cripto', why: 'La liquidación es lo que perdió. Cripto es donde la liquidación es instantánea.' },
        { title: 'Salir al mundo', why: 'La cadena solo tiene sentido junto a la expansión internacional.' },
        { title: 'Quince años después', why: 'Se cierra el bucle abierto en el capítulo 5.' },
      ],
    },
    {
      title: 'El patrón',
      subtitle: 'Lo que podemos aprender',
      intro: 'El alegato final, y la razón por la que esto merece un curso y no un perfil.',
      sections: [
        { title: 'Raíles serios, tráfico poco serio', why: 'El hilo conductor que hace útil la biografía en vez de decorativa.' },
        { title: 'El final CashCat', why: 'No se podría inventar uno más limpio.' },
        { title: 'Dos fundadores, una arquitectura', why: 'La razón por la que este curso va junto al de Pavel Durov.', link: { label: 'Leer el curso de Pavel Durov →' } },
        { title: 'El otro Vlad', why: 'Lo que hace cuando no dirige un bróker.' },
        { title: 'Cronología', why: 'Todo el arco en una pantalla.' },
      ],
    },
  ],

  quiz: [
    {
      q: '¿Dónde nació Vlad Tenev?',
      a: ['Sofía, Bulgaria', 'Varna, Bulgaria', 'Moscú, Rusia', 'Washington DC, EE. UU.'],
      explain: 'Nació en Varna, en la costa búlgara, en febrero de 1987. Sus padres emigraron primero y él se les unió en EE. UU. a los cinco años.',
    },
    {
      q: '¿A qué se dedicaron sus dos padres tras emigrar a Estados Unidos?',
      a: ['Llevaban un restaurante', 'Trabajaban en el Banco Mundial', 'Daban clase en Stanford', 'Fundaron un hedge fund'],
      explain: 'Ambos eran economistas y acabaron trabajando en el Banco Mundial, en la zona de Washington DC.',
    },
    {
      q: '¿Qué construyeron Tenev y Baiju Bhatt ANTES de Robinhood?',
      a: ['Una red social para inversores', 'Software de trading de baja latencia para firmas de alta frecuencia', 'Un exchange de criptomonedas', 'Un robo-advisor para planes de jubilación'],
      explain: 'Celeris y luego Chronos Research. Vendían velocidad a las firmas profesionales contra las que Robinhood se posicionaría después, y así detectaron la brecha de precios.',
    },
    {
      q: '¿Cuál fue la observación que llevó directamente a Robinhood?',
      a: ['Los minoristas no entendían la bolsa', 'Las firmas profesionales pagaban casi nada por operación mientras los minoristas pagaban 7 a 10 dólares', 'Las apps móviles eran más rentables que las webs', 'Los fondos indexados batían a los gestores activos'],
      explain: 'Mismo mercado, misma infraestructura, dos listas de precios distintas. La brecha se explicaba por el acceso, no por el coste.',
    },
    {
      q: 'Si Robinhood no cobra comisión, ¿de dónde salen los ingresos?',
      a: ['De subvenciones públicas', 'Del payment for order flow: los creadores de mercado pagan por recibir las órdenes de los clientes', 'De vender identidades de clientes', 'Nunca ha tenido ingresos'],
      explain: 'Los creadores de mercado pagan al bróker por dirigir las órdenes y ganan con el diferencial. Es público y habitual en la industria, pero significa que el cliente no es quien paga la factura.',
    },
    {
      q: 'En enero de 2021, ¿qué obligó realmente a Robinhood a restringir la compra de GameStop?',
      a: ['Una orden judicial', 'Una exigencia de colateral de la cámara de compensación muy superior a lo previsto', 'Unos hedge funds compraron parte de Robinhood', 'Se cayeron los servidores'],
      explain: 'La restricción estaba en la capa de liquidación, no en la app. Esa es la lección que guía todo lo que Tenev hace después.',
    },
    {
      q: '¿Por qué la explicación técnica no convenció a los usuarios?',
      a: ['Porque no era cierta', 'La promesa era democratización, y el producto tenía un interruptor que los usuarios no controlaban', 'Nadie había oído hablar de cámaras de compensación', 'Robinhood se negó a explicar nada'],
      explain: 'Una explicación correcta puede seguir siendo una defensa inútil. El interruptor se accionó justo cuando la promesa estaba a prueba.',
    },
    {
      q: '¿Cuándo y dónde lanzó Robinhood Chain su mainnet público?',
      a: ['Junio de 2025, en Cannes', 'Febrero de 2026, solo en línea', 'El 1 de julio de 2026, en el Old Royal Naval College de Londres', 'Enero de 2021, en Nueva York'],
      explain: 'El lanzamiento fue en el keynote «The World Is Flat», con Tenev y Johann Kerbrat. Cannes 2025 fue el anuncio de las acciones tokenizadas; febrero de 2026, la testnet pública.',
    },
    {
      q: '¿Qué patrón sostiene este curso que define la carrera de Tenev?',
      a: ['Construye infraestructura para trading serio y llega tráfico especulativo', 'Copia lo que lanzan primero sus competidores', 'Evita por completo los mercados regulados', 'Vende cada empresa que funda en menos de tres años'],
      explain: 'Un bróker sin comisiones para inversores de largo plazo recibió el short squeeze de las meme stocks. Una cadena para acciones tokenizadas recibió una fábrica de tokens. La misma historia, quince años después.',
    },
    {
      q: '¿Qué es CashCat?',
      a: ['El token oficial de la cadena de Robinhood', 'Un nombre que Tenev y Bhatt barajaron antes de «Robinhood», revivido luego como memecoin no afiliada en Robinhood Chain', 'La cámara de compensación del colateral de 2021', 'La empresa de IA de Tenev'],
      explain: 'La marca descartada volvió como memecoin comunitaria en su propia blockchain, rozando los 156 M$ de capitalización sin vínculo con la empresa. Robinhood Chain no tiene token nativo.',
    },
  ],
};

export default t;
