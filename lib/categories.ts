const categories = [
  {
    value: 'education',
    name: 'Education',
    utilities: ['Informer', 'Enseigner', 'Guider'],
    importances: [
      'Comprendre le numérique',
      'Apprendre le digital',
      'Internet la grande étoile',
      'Outils numériques',
      'Le monde du numérique est aussi jouer',
      'Protégér ses données',
    ],
    exemples: [
      { src: '/moodle.png', value: 'Moodle', href: '/application/moodle' },
      { src: '/scratch.jpg', value: 'Scratch', href: '/application/scratch' },
    ],
  },
  {
    value: 'productivité',
    name: 'Productivité',
    utilities: ['Gain de temps', 'Efficacité', 'Créativité accrue'],
    importances: [
      'Poser des questions',
      'Apprendre à ton rythme',
      'Parler plusieurs langues',
      'Corriger les erreurs',
      "Travailler en s'amusant",
      'Organiser ses idées',
    ],
    exemples: [
      {
        src: '/chatgpt.png',
        value: 'Chat GPT',
        href: '/application/chat-gpt',
      },
      { src: '/gemini.png', value: 'Gemini', href: '/application/gemini' },
    ],
  },
];

export { categories };
