export type MediaCategory = 'Allocations' | 'Events' | 'News' | 'Press';

export type MediaSpeaker = {
  name: string;
  role: string;
};

export type MediaItem = {
  id: string;
  slug: string;
  category: MediaCategory;
  title: string;
  date: string;
  caption?: string;
  description: string;
  image: string;
  gallery?: string[];
  type: 'article' | 'video';
  videoId?: string;
  estate?: string;
  location?: string;
  time?: string;
  registrationUrl?: string;
  speakers?: MediaSpeaker[];
  highlights?: string[];
  body?: string[];
};

export const CATEGORIES: ('All' | MediaCategory)[] = ['All', 'Allocations', 'Events', 'News', 'Press'];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: '3-days-intensive-summit-2026',
    slug: '3-days-intensive-summit-2026',
    category: 'Events',
    title: '3 Days Intensive Summit \'26: Rebuilding Trust & Rebranding Vision',
    date: 'Wednesday, June 3rd – Friday, June 5th, 2026',
    caption: 'Where vision meets opportunity — We\'re Intentional 💪',
    description:
      'Join the 3 Days Intensive Summit \'26 for leadership, trust, innovation, and transformational growth. Connect with visionary minds at Elite Hub Properties — registration is compulsory.',
    image: '/3-days.jpeg',
    gallery: ['/3-days June', '/3-days.jpeg', '/3-days pt2.jpeg'],
    type: 'article',
    location: '25B David Adekunle Street, Lilly Estate, Amuwo Odofin, Festac Town, Lagos',
    time: '10:00 AM Prompt (WAT)',
    registrationUrl: 'https://forms.gle/tnpFhzdLzb8SMKUP9',
    speakers: [
      { name: 'Dr. Amb. Emeka Justine', role: 'MD PWAN Elite — Host' },
      { name: 'Mr. Iheanacho Okoro', role: 'Facilitator' },
      { name: 'Mr. S. Pedro', role: 'Facilitator' },
      { name: 'Mr. Ayuk Ndip Arrey Ntoh', role: 'TEXA — Facilitator' },
      { name: 'Mr. Joseph Oyewo', role: 'Facilitator' },
    ],
    highlights: [
      '3-day intensive summit on trust, vision & growth',
      'Wed 13 – Fri 15 May 2026 · 10:00 AM Prompt (WAT)',
      '25B David Adekunle St., Lilly Estate, Festac Town',
      'Free access — registration via Google Form is required',
    ],
    body: [
      'Growth begins with the right room. 🚀✨',
      'Join the 3 Days Intensive Summit \'26, a powerful experience focused on leadership, trust, innovation, and transformational growth. Connect with visionary minds, gain valuable insights, and position yourself for greater success.',
      'Theme: REBUILDING TRUST & REBRANDING VISION.',
      'This is more than a summit… it\'s where vision meets opportunity.',
      'Hosted by Elite Hub Properties. Access is FREE — registration is compulsory. Secure your spot via the registration link on this page.',
      'For enquiries, call 08177500018 or 08034946564.',
      'Elite Hub Properties — We\'re Intentional 💪',
    ],
  },
  {
    id: 'elite-hub-incentives-promo-may-2026',
    slug: 'elite-hub-incentives-promo-may-2026',
    category: 'News',
    title: 'Incentives Are Back: Sell, Earn, Get Rewarded',
    date: 'May 11, 2026',
    caption: 'SELL • EARN • GET REWARDED — We\'re Intentional 💪',
    description:
      'Make sales worth ₦1.5M and above on any Elite Hub Properties and qualify for amazing gift items — from household appliances and electronics to generators and more.',
    image: '/Incentives.jpeg',
    type: 'article',
    highlights: [
      '₦1.5M+ in sales qualifies you for amazing gift rewards',
      'Prizes include appliances, electronics, generators & food items',
      'Promo runs 11 May – 30 June 2026',
      'Every closed deal brings you closer to valuable rewards',
    ],
    body: [
      '💥 INCENTIVES ARE BACK! 💥',
      'This is your opportunity to sell, earn, and get rewarded in a big way with Elite Hub Properties.',
      'Make sales worth ₦1.5M and above on any Elite Hub Properties and qualify for amazing gift items ranging from household appliances, electronics, food items, generators, and many more exciting rewards. 🎁🔥',
      'Why just work when you can work and win? Every closed deal brings you closer to valuable rewards designed to appreciate your effort and dedication.',
      'Promo duration: Effective from 11th May – 30th June, 2026.',
      'Don\'t miss this rewarding season. Push harder, close more deals, increase your earnings, and go home with amazing gifts.',
      'SELL • EARN • GET REWARDED',
      'We\'re Intentional 💪 — Visit www.elitehubproperties.com to learn more.',
    ],
  },
  {
    id: 'lavender-farm-city-allocation-may-2026',
    slug: 'lavender-farm-city-allocation-may-2026',
    category: 'Allocations',
    title: 'Lavender Farm City Allocation: 32 Happy Clients, One Sold-Out Estate',
    date: 'May 1, 2026',
    caption: 'Happy Clients, Successful Allocations — This Could Be You Next.',
    description:
      'On the 1st of May 2026, EliteHub Properties officially allocated plots to 32 clients at the now sold-out Lavender Farm City Estate. Another successful batch, another set of dreams secured.',
    image: '/ALLOCATION/A1.jpeg',
    gallery: [
      '/ALLOCATION/A1.jpeg',
      '/ALLOCATION/A2.jpeg',
      '/ALLOCATION/A3.jpeg',
      '/ALLOCATION/A4.jpeg',
      '/ALLOCATION/A5.jpeg',
    ],
    type: 'article',
    estate: 'Lavender Farm City',
    highlights: [
      '32 plots successfully allocated in a single day',
      'Lavender Farm City Estate is officially SOLD OUT',
      'Verified documentation handed over on-site',
      'Another successful batch by EliteHub Properties',
    ],
    body: [
      'On the 1st of May, 2026, EliteHub Properties hosted yet another landmark client allocation — this time at the highly anticipated Lavender Farm City Estate. The day marked a major milestone for our team and, more importantly, for the 32 clients who officially became landowners in one of our most sought-after developments.',
      'Lavender Farm City has been one of our fastest-moving estates, attracting first-time investors, families building long-term wealth, and seasoned land bankers. With this allocation, the estate has now reached full subscription and is officially SOLD OUT — joining the growing list of EliteHub estates that have transitioned from launch to closeout in record time.',
      'Each of the 32 clients received their plots with verified documentation, on-site demarcation, and full handover support from our allocation team. From the welcome briefing to the physical pegging of plots, every step was designed to give our clients clarity, confidence, and peace of mind in their new investment.',
      'Behind every plot allocated stands a family, a vision, or a long-term plan secured. That is the EliteHub promise — genuine land, transparent documentation, and a smooth path from purchase to ownership. Watching 32 clients walk away with allocation papers in hand is exactly why we do this work.',
      'Lavender Farm City may now be sold out, but the EliteHub journey continues. Our active estates across Anambra, Delta, Lagos, Imo, Abia, and Akwa Ibom are still open for subscription — and the next successful allocation story could be yours.',
    ],
  },
];

export function getMediaItemBySlug(slug: string): MediaItem | undefined {
  return MEDIA_ITEMS.find((item) => item.slug === slug);
}
