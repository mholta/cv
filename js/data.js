const DATE_BASED = 'DATE_BASED';
const PROJECT = 'PROJECTS';
const OTHER_INFO = 'OTHER_INFO';
const REGULAR_LINE = 'REGULAR_LINE';

const svg = {
  user: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="#2E3A59"/>
  <path d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z" fill="#2E3A59"/>
  </svg>
  `,
  phone: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.74214 8.68189C7.66901 9.59373 7.27576 11.2567 8.20237 12.5908C9.06948 13.8392 10.1618 14.9313 11.4099 15.798C12.7441 16.7244 14.407 16.3311 15.3187 15.2579L15.3289 15.2626C16.4934 15.8021 17.7304 16.1718 19 16.3603V19L18.9989 19L18.9961 19C11.0215 19.0113 4.99148 12.9111 5.00001 5.00359V5H7.63937L7.63954 5.00117C7.828 6.27065 8.19761 7.50654 8.73714 8.67108L8.74214 8.68189ZM18.9989 21H20C20.5523 21 21 20.5523 21 20V15.4977C21 15.0021 20.637 14.5813 20.1468 14.5086L19.2926 14.3818C18.2123 14.2215 17.1605 13.9069 16.1695 13.4478L15.4166 13.0991C14.9804 12.897 14.462 13.034 14.1826 13.4253L13.8418 13.9024C13.5431 14.3206 12.9728 14.4484 12.5506 14.1552C11.4984 13.4245 10.5761 12.5024 9.84502 11.4499C9.55181 11.0277 9.67955 10.4574 10.0978 10.1587L10.5748 9.81807C10.9661 9.53861 11.1031 9.02021 10.901 8.5839L10.5518 7.83033C10.0927 6.8394 9.77823 5.78774 9.61786 4.70749L9.49104 3.85316C9.41827 3.36296 8.99745 3 8.50188 3H4.00001C3.44773 3 3.00001 3.44772 3.00001 4V5.00143C2.99029 14.0079 9.91023 21.0129 18.9989 21Z" fill="#2E3A59"/>
  </svg>
  `,
  email: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z" fill="#2E3A59"/>
  </svg>
  `,
  linkedIn: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z" fill="#2E3A59"/>
  </svg>
  `,
  github: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" fill="#2E3A59"/>
  </svg>
  `,
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 22H5C4.44772 22 4 21.5523 4 21V13H2L11.292 3.70698C11.4796 3.51921 11.7341 3.4137 11.9995 3.4137C12.2649 3.4137 12.5194 3.51921 12.707 3.70698L22 13H20V21C20 21.5523 19.5523 22 19 22ZM10 15H14V20H18V11.828L12 5.82798L6 11.828V20H10V15Z" fill="#2E3A59"/>
  </svg>
  `,
};

const personaliaLines = [
  {
    desc: 'email',
    content: 'magnus.holta@gmail.com',
    link: 'mailto:magnus.holta@gmail.com',
    icon: svg.email,
  },
  { desc: 'phone', content: '48052730', link: null, icon: svg.phone },
  { desc: 'born', content: '25. desember 1997', link: null, icon: svg.user },
  {
    desc: 'adress',
    content: 'Bergsligata 9, 7017 Trondheim',
    link: null,
    icon: svg.home,
  },
  {
    desc: 'github',
    content: 'GitHub',
    link: 'https://github.com/mholta',
    icon: svg.github,
  },
  {
    desc: 'linkedin',
    content: 'LinkedIn',
    link: 'https://www.linkedin.com/in/magnusholta/',
    icon: svg.linkedIn,
  },
];

const listItems = [
  {
    title: 'Utdanning',
    type: DATE_BASED,
    items: [
      {
        since: new Date(2011, mo(08)),
        until: new Date(2014, mo(06)),
        title: 'Gjesdal ungdommsskole',
        subtitle: '',
        description: '',
      },
      {
        since: new Date(2014, mo(08)),
        until: new Date(2017, mo(06)),
        title: 'Akademiet Sandnes',
        subtitle: '',
        description:
          'Studiespesialisering med realfag, inkludert: Matematikk R1 og R2, Fysikk 1 og 2, og Kjemi 1.',
      },
      {
        since: new Date(2017, mo(08)),
        until: new Date(2018, mo(06)),
        title: 'Acta Bibelskole',
        subtitle: '',
        description:
          'Hadde fag om lederskap, personlig utvikling, musikk og bibelundervisning.',
      },
      {
        since: new Date(2018, mo(08)),
        until: new Date(2019, mo(06)),
        title: 'IMI Intitutt for misjon, teologi og ledelse',
        subtitle: '',
        description:
          'Deltidsstudie i teologi kombinert med praksis som intern i staben i IMI kirken.',
      },
      {
        since: new Date(2019, mo(08)),
        until: null,
        title: 'Bachelor i informatikk ved NTNU',
        subtitle: '',
        description:
          'Har hatt fag med matematikk, data- og informasjonsteknologi.',
      },
    ],
  },
  {
    title: 'Erfaring',
    type: DATE_BASED,
    items: [
      {
        since: new Date(2013, mo(06)),
        until: new Date(2017, mo(08)),
        title: 'Sesongmedarbeider',
        subtitle: '',
        description: 'Fokus på kundebehandling, salg, informasjon og service.',
      },
      {
        since: new Date(2018, mo(06)),
        until: new Date(2019, mo(12)),
        title: 'Butikkmedarbeider',
        subtitle: '',
        description:
          'Sommervikar somrene 2018 og 2019, samt noe kveldsjobbing. Blant arbeidsoppgavene var salg, kundebehandling og problemløsing.',
      },
      {
        since: new Date(2018, mo(08)),
        until: new Date(2019, mo(06)),
        title: 'Ungdomsarbeider',
        subtitle: '',
        description:
          'Hovedleder av arbeid for ungdommer i alderen 13-19 år. Oppgaver var bl.a. planlegging og gjennomføring av møter og andre arrangementer, ledertrening og oppfølging av ungdomsstyre.',
      },
      {
        since: new Date(2020, mo(06)),
        until: new Date(2020, mo(08)),
        title: 'Produksjonsmedarbeider på Bakehuset Bryne',
        subtitle: '',
        description: '',
      },
      {
        since: new Date(2021, mo(06)),
        until: new Date(2021, mo(08)),
        title: 'Produksjonsmedarbeider hos Jæder, Ådne Espelenad AS',
        subtitle: '',
        description: '',
      },
      {
        since: new Date(2021, mo(08)),
        until: null,
        title: 'Ungdomsleder i Salem menighet',
        subtitle: '',
        description: '20% ansatt som hovedleder for ungdomsarbeidet. ',
      },
    ],
  },
  {
    title: 'Prosjekter',
    type: PROJECT,
    items: [
      {
        title: 'Blekkegenerator for Lovsang.no',
        date: new Date(2021, mo(04)),
        github: 'https://github.com/lovsang-no/chordpro-tools',
        live: 'https://lovsang.netlify.app',
        technologies: `Netlify, JavaScript`,
        description: `Verktøy for å generere (og transponere) blekker i riktig format. 
        For senere innsending av innhold til Lovsang.no.`,
      },
      {
        title: 'Sangdatabase for Lovsang.no',
        date: new Date(2021, mo(07)),
        github: 'https://github.com/lovsang-no',
        live: 'https://www.lovsang.no',
        technologies: `Webflow, JavaScript, Google Analytics, JsDelivr`,
        description: `Sangdatabase der kjernefunksjonalitet er å søke etter akkorder 
        og kunne transponere disse i riktig toneart.`,
      },
      {
        title: 'Nettside for bryllupsfotograf',
        date: new Date(2021, mo(09)),
        github: 'https://github.com/mholta/fotohakon',
        live: 'https://fotohakon.no',
        technologies: `Gatsby, TypeScript, Contentful, Netlify, Google Analytics, Zapier og Figma`,
        description: `Design og utvikling av nettside med fokus på enkel og 
        strømlinjeformet booking.`,
      },
    ],
  },
  {
    title: 'Annet',
    type: OTHER_INFO,
    items: [
      {
        title: 'Dataferdigheter',
        subtitle: '',
        description: `
          <i>Behersker godt</i> Java, JavaScript, TypeScript, HTML, CSS, ReactJS, Gatsby, GraphQL, Git, 
          Netlify, Contentful, Figma og Webflow.
          <br />
          <i>Har kjennskap til</i> Python og Django.`,
      },
      {
        title: 'Erfaringer',
        subtitle: '',
        description: `
        Ulike former for teamledelse og -deltakelse, fra kreative team i menigheten 
        (musikk, media, grafisk design, produksjon) eller studierelatere 
        gruppeoppgaver med fokus på utviklingsrammeverk.`,
      },
      {
        title: 'Fritidsinteresser',
        subtitle: '',
        description: `
        Veldig glad i å gå langrenn, turer og å spille trommer.`,
      },
      {
        title: 'Språk',
        subtitle: '',
        description: `
        Norsk: flytende skriftlig og muntlig
        <br/>
        Engelsk:flytende skriftlig og muntlig
        `,
      },
    ],
  },
  {
    title: 'Referanser',
    type: REGULAR_LINE,
    items: [
      {
        content: `Jann Even Andresen, hovedpastor og daglig leder Salem menighet
        `,
        contact: `
        +47 952 34 005 | <a href="mailto:jea@salemmenighet.no">jea@salemmenighet.no</a>
        `,
      },
      {
        content: `Håkon Mjøs, fotograf og kunde (fotohakon.no)
        `,
        contact: `
        +47 412 40 082 | <a href="mailto:hakon@mjos.no">hakon@mjos.no</a>
        `,
      },
    ],
  },
];
