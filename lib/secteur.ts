import {
  ChartColumn,
  LibraryBig,
  Phone,
  Gamepad2,
  UsersRound,
  MailCheck,
  ListMusic,
  Images,
  ShoppingCart,
  Palette,
  BookHeart,
  SunMoon,
  PawPrint,
} from 'lucide-react';

const secteur = [
  {
    id: 1,
    value: 'enseignement',
    label: 'Enseignement',
    bg: '#e87e25',
    icon: LibraryBig,
  },
  {
    id: 2,
    value: 'productivité',
    label: 'Productivité',
    bg: '#00bc7d',
    icon: ChartColumn,
  },
  {
    id: 3,
    value: 'divertissement',
    label: 'Divertissement',
    bg: '#fe9a00',
    icon: Gamepad2,
  },
  {
    id: 4,
    value: 'reseaux sociaux',
    label: 'Réseaux Sociaux',
    bg: '#2da7df',
    icon: UsersRound,
  },

  {
    id: 5,
    value: 'commumication',
    label: 'Communication',
    bg: '#ff2056',
    icon: MailCheck,
  },
  {
    id: 6,
    value: 'musique et audio',
    label: 'Musique et Audio',
    bg: '#1447e6',
    icon: ListMusic,
  },
  {
    id: 7,
    value: 'photographie',
    label: 'Photographie',
    bg: '#ff6467',
    icon: Images,
  },
  {
    id: 8,
    value: 'shopping',
    label: 'Shopping',
    bg: '#0f172b',
    icon: ShoppingCart,
  },

  {
    id: 9,
    value: 'art et design',
    label: 'Art et Design',
    bg: '#009689',
    icon: Palette,
  },
  {
    id: 10,
    value: 'personnalisation',
    label: 'Personnalisation',
    bg: '#ffb900',
    icon: BookHeart,
  },
  { id: 11, value: 'météo', label: 'Météo', bg: '#f54900', icon: SunMoon },
  { id: 12, value: 'beauté', label: 'Beauté', bg: '#104e64', icon: PawPrint },
];

export { secteur };
