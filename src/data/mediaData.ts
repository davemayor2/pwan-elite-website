export type MediaCategory = 'Allocations' | 'Events' | 'News' | 'Press';

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
  highlights?: string[];
  body?: string[];
};

export const CATEGORIES: ('All' | MediaCategory)[] = ['All', 'Allocations', 'Events', 'News', 'Press'];

export const MEDIA_ITEMS: MediaItem[] = [
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
