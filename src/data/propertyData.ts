// Base path for estate flyers and subscription forms (public folder)
const FLYERS = '/ESTATE FLYERS AND SUBFORMS';

export type PropertyDetailsData = {
  slug: string;
  title: string;
  location: string;
  tagline?: string;
  heroImage: string;
  images: string[];
  price: string;
  titleType: string;
  plotSize: string;
  propertyType: 'Residential' | 'Commercial' | 'Residential and Commercial' | 'Commercial & Residential';
  paymentPlan: string;
  description: string[]; // paragraphs
  videoId?: string; // YouTube id
  amenities: string[];
  mapEmbedUrl?: string;
  brochureUrl?: string;
  subscriptionFormUrl?: string;
};

export type PriceBand = {
  id: string;
  label: string;
  min: number;
  max?: number;
};

export const PRICE_BANDS: PriceBand[] = [
  { id: 'under-5m', label: 'Under ₦5M', min: 0, max: 5_000_000 },
  { id: '5m-10m', label: '₦5M - ₦10M', min: 5_000_000, max: 10_000_000 },
  { id: '10m-20m', label: '₦10M - ₦20M', min: 10_000_000, max: 20_000_000 },
  { id: '20m-50m', label: '₦20M - ₦50M', min: 20_000_000, max: 50_000_000 },
  { id: 'above-50m', label: 'Above ₦50M', min: 50_000_000 },
];

const TITLE_TYPE_TOKEN_MAP: Record<string, string> = {
  freehold: 'Freehold',
  survey: 'Registered Survey',
  'registered survey': 'Registered Survey',
  'deed of assignment': 'Deed of Assignment',
  'deeds of assignment': 'Deed of Assignment',
  'certificate of occupancy': 'Certificate of Occupancy (C of O)',
  'c of o': 'Certificate of Occupancy (C of O)',
  'governor consent': "Governor's Consent",
  'registered documentation': 'Registered Documentation',
};

export const PROPERTY_DETAILS: Record<string, PropertyDetailsData> = {
  // Added slugs for cards in listings
  'lavender-courts': {
    slug: 'lavender-courts',
    title: 'Lavender Courts',
    location: 'Ndiukwuenu, Awka, Anambra',
    tagline: 'Luxury made affordable in Awka’s promising corridor.',
    heroImage: `${FLYERS}/LAVENDER COURTS.webp`,
    images: [`${FLYERS}/LAVENDER COURTS.jpeg`, '/pexels-davidmcbee-1546168.jpg', '/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg'],
    price: '₦6M ~ ₦12M',
    titleType: 'Registered Survey and Deed Of Assignment',
    plotSize: '232sqm • 464sqm',
    propertyType: 'Residential and Commercial',
    paymentPlan: 'Flexible plans up to 12 months',
    description: [
      'Welcome to Lavender Courts Awka – where luxury meets affordability in one of Anambra\'s most promising locations. Located at Ndiukwuenu, Awka, this estate is perfect for families, investors, and developers looking for a premium buy-and-build opportunity.',
      'All plots are clearly demarcated with transparent documentation and swift allocation.',
    ],
    videoId: 'https://www.youtube.com/watch?v=bk6sYkd3-2Q?si=ERvciqmILi3TahZF',
    amenities: ['Perimeter Fencing', 'Road Network', 'Security Gatehouse', 'Streetlights'],
    subscriptionFormUrl: `${FLYERS}/LAVENDER COURT AWKA SUB FORM 2026.pdf`,
  },
  
  'lavender-garden-estate': {
    slug: 'lavender-garden-estate',
    title: 'Lavender Garden Estate',
    location: 'Obomkpa, Issele-Uku, Asaba, Delta State',
    tagline: 'Secure your plot in a prime residential development with excellent infrastructure.',
    heroImage: `${FLYERS}/LAVENDER GARDEN.webp`,
    images: [`${FLYERS}/LAVENDER GARDEN.jpeg`, `${FLYERS}/LAVENDER PARK.jpeg`, '/pexels-davidmcbee-1546168.jpg'],
    price: '₦1,500,000',
    titleType: 'Registered Survey & Deed of Assignment',
    plotSize: '464 Square Metres (SQM)',
    propertyType: 'Residential and Commercial',
    paymentPlan: 'Flexible payment options available',
    description: [
      'Welcome to Lavender Garden Estate, a premium residential land development located in Obomkpa, Issele-Uku, Asaba, Delta State. This estate offers an exceptional opportunity to own properly documented land in a strategic location with excellent infrastructure and growth potential.',
      'Each plot comes with Registered Survey and Deed of Assignment, ensuring complete peace of mind and security of ownership. With a plot size of 464 Square Metres, you have ample space to build your dream home or invest for future returns.',
      'The estate is strategically positioned near major landmarks including the NYSC Orientation Camp, Federal Medical Centre, and College of Nursing, making it an ideal location for residential living and long-term investment.',
      'All payments should be made to EliteHub Properties Ltd (Account Number: 1215775853). This is your opportunity to secure a plot in a well-planned estate with modern infrastructure and excellent connectivity.',
    ],
    videoId: 'https://www.youtube.com/watch?v=_ntYzucJcL4?si=UuJMnkqKQWtjlTas',
    amenities: [
      'Perimeter Fencing',
      'Good Road Network (Tarred Roads)',
      'Effective Drainage System',
      'Electricity Supply',
      'Street Lighting',
      'Security',
    ],
    subscriptionFormUrl: `${FLYERS}/LAVENDER GARDEN  SUB FORM 2026.pdf`,
  },
  'lavender-park-estate': {
    slug: 'lavender-park-estate',
    title: 'Lavender Park Estate',
    location: 'Obulu Okiti, Asaba, Delta State',
    tagline: 'Build Your Future in a Prime Destination in Asaba',
    heroImage: `${FLYERS}/LAVENDER PARK.webp`,
    images: [`${FLYERS}/LAVENDER PARK.jpeg`, `${FLYERS}/LAVENDER GARDEN.jpeg`, '/pexels-davidmcbee-1546168.jpg'],
    price: '₦3,500,000',
    titleType: 'Registered Survey & Deed of Assignment',
    plotSize: '464 Square Metres (SQM)',
    propertyType: 'Residential and Commercial',
    paymentPlan: 'Initial Deposit: ₦1,000,000 (with instant allocation)',
    description: [
      'Welcome to Lavender Park Estate, a prime residential land development located in Obulu Okiti, Asaba, Delta State. Build your future in a prime destination that combines strategic location, modern infrastructure, and excellent growth potential.',
      'Each plot measures 464 Square Metres and comes with Registered Survey and Deed of Assignment, ensuring complete security of ownership. With a selling price of ₦3,500,000 per plot, you can secure your plot with an initial deposit of ₦1,000,000 and receive instant allocation.',
      'The estate is strategically positioned near major landmarks including Federal Housing Estate, Otulu Junction, Asaba International Airport, Second Niger Bridge Access Link Road, and Wichtech Roofing Company. This prime location offers excellent connectivity and access to major transportation routes and commercial facilities.',
      'All payments should be made to EliteHub Properties Ltd (Account Number: 1215775853). This is your opportunity to invest in a well-planned estate with comprehensive infrastructure and security features, perfect for building your dream home or securing a valuable investment.',
    ],
    videoId: 'https://www.youtube.com/watch?v=OmkZtpbWYQE?si=UKNH8YariJOazCjh',
    amenities: [
      '24-Hour Security & CCTV',
      'Perimeter Fencing',
      'Tarred Road Network',
      'Effective Drainage System',
      'Electricity Supply',
      'Street Lighting',
    ],
    subscriptionFormUrl: `${FLYERS}/LAVENDER PARK SUB FORM 2026.pdf`,
  },
  'aku-ruo-uno': {
    slug: 'aku-ruo-uno',
    title: 'Aku Ruo Uno Luxury Estate',
    location: 'Achala Ibusa, Asaba',
    tagline: 'Premium estate in a prime buy and build environment.',
    heroImage: `${FLYERS}/AKU RUO UNO.webp`,
    images: [`${FLYERS}/AKU RUO UNO.jpeg`, `${FLYERS}/ELITE CITY.jpeg`, '/pexels-expect-best-79873-323780.jpg'],
    price: '₦15M',
    titleType: 'Freehold',
    plotSize: '464sqm',
    propertyType: 'Commercial & Residential',
    paymentPlan: 'Outright and installments available',
    description: [
      'Located in Achalla Ibusa, Asaba, Aku Ruo Uno Luxury Estate is currently selling for ₦15M. This premium estate is situated in a buy and build environment with houses already on site on the property, positioned along a major road for excellent accessibility.',
      'Aku Ruo Uno 2 boasts proximity to several notable landmarks, making it a strategic investment location. These include the Government Villa Estate, Road Safety head office, Immigration and Civil Defence head office, Former Deputy Governor\'s office Junction, Marketsquare Supermarket, and the Koka Flyover, amongst others.',
      'The estate is conveniently located just 15 minutes away from the Koka Flyover on the Asaba-Onitsha express Road, ensuring easy access to major transportation routes and surrounding areas.',
      'All plots come with proper documentation including Deeds of Assignment and Registered Survey. The estate has been fully fenced and plotted, with allocation immediately available after complete payment. Document processing is guaranteed and ready for pickup within 3 months of purchase.',
    ],
    videoId: 'https://youtu.be/g2tzdZ07Who?si=i-L1JnJqXqIsc-5J',
    amenities: ['Perimeter Fencing', 'Fully Plotted', 'Immediate Allocation', 'Road Network', 'Security'],
    subscriptionFormUrl: `${FLYERS}/AKU RUO UNO  2 SUB FORM 2026.pdf`,
  },
  'kole-ayo-estate': {
    slug: 'kole-ayo-estate',
    title: 'Kole-Ayo Estate',
    location: 'Anobi London road, Irangushi, Eredo local government council, Epe Lagos',
    tagline: 'Freehold title with immediate allocation in a rapidly developing area.',
    heroImage: `${FLYERS}/KOLE AYO.webp`,
    images: [`${FLYERS}/KOLE AYO.jpeg`, '/urbanLegacy.jpg', '/maximillian-conacher-sPpe2D7VbpM-unsplash.jpg'],
    price: '₦8.5M',
    titleType: 'Freehold',
    plotSize: '500sqm',
    propertyType: 'Commercial & Residential',
    paymentPlan: 'Spread payments up to 12 months',
    description: [
      'Kole-Ayo Estate is located at Anobi London road, Irangushi, Eredo local government council, Epe Lagos, with freehold documents. The land property is situated in a rapidly developing area, poised for significant growth and investment. With its strategic location, the property offers excellent potential for residential, commercial, or mixed-use development.',
      'The estate is strategically positioned close to several notable landmarks including Family homes estate, Yaba Tech Epe campus, LASUED (Lagos State University of Education), Micheal Otedola housing estate, and St. Augustine University. This proximity to major institutions and residential developments makes it an ideal location for investors, developers, and homebuyers.',
      'The estate has been fenced, plotted and allocation is immediately available for buy and build. As the area continues to develop, the property\'s value is likely to appreciate, making it an attractive opportunity for those looking to invest in a thriving growth corridor with excellent potential for future returns.',
    ],
    videoId: 'https://www.youtube.com/watch?v=MbKf4iE0fZ8?si=A_QEG6MbiOxeXf7X',
    amenities: ['Perimeter Fencing', 'Fully Plotted', 'Immediate Allocation', 'Good Road Network', 'Security Gatehouse', 'Streetlights'],
    subscriptionFormUrl: `${FLYERS}/KOLE-AYO SUB FORM 2026.pdf`,
  },
  'elite-city-estate': {
    slug: 'elite-city-estate',
    title: 'Elite City Estate',
    location: 'Asaba, Delta State',
    heroImage: `${FLYERS}/ELITE CITY.webp`,
    images: [`${FLYERS}/ELITE CITY.jpeg`, '/pexels-davidmcbee-1546168.jpg', '/pexels-expect-best-79873-323780.jpg'],
    price: '₦10,000,000',
    titleType: "Deed of Assignment and Registered Survey",
    plotSize: '464sqm',
    propertyType: 'Commercial & Residential', 
    paymentPlan: 'Flexible plan',
    description: [
      'Located opposite Admiralty University Ibusa, Asaba. Currently selling for 6.5m. It is located in a fast developing area with several infrastructural development coming up in the area.',
      'Elite City has the following notable landmarks: Admiralty University of Nigeria, The New 63 Brigade Army Command Headquarters, Bethel\'s Court, Chinese Construction company, amongst others.',
      'The estate has been fenced, plotted and allocation is immediately available for buy and build. As the area continues to develop, the property\'s value is likely to appreciate, making it an attractive opportunity for those looking to invest in a thriving growth corridor with excellent potential for future returns.',
    ],
    videoId: 'https://www.youtube.com/watch?v=PLACEHOLDER_VIDEO_ID',
    amenities: ['Perimeter Fencing', 'Road Network', 'Streetlights'],
    subscriptionFormUrl: `${FLYERS}/ELITE CITY  SUB FORM 2026.pdf`,
  },
  'elite-haven': {
    slug: 'elite-haven',
    title: 'Elite Haven 3 Extension',
    location: 'Ibusa, Asaba, Delta State',
    tagline: 'Prestigious estate designed for comfort, accessibility, and value appreciation.',
    heroImage: `${FLYERS}/ELITE HAVEN.webp`,
    images: [`${FLYERS}/ELITE HAVEN.jpeg`, `${FLYERS}/ELITE CITY.jpeg`, '/pexels-expect-best-79873-323780.jpg'],
    price: '₦3,500,000',
    titleType: 'Registered survey and Deed of assignment',
    plotSize: '464 SQM',
    propertyType: 'Commercial & Residential',
    paymentPlan: 'Initial Deposit: ₦500,000 | Instant allocation upon payment',
    description: [
      'Welcome to Elite Haven 3 Extension, a prestigious estate located in the serene city of Ibusa, Asaba. Designed for comfort, accessibility, and value appreciation, this estate offers an exceptional opportunity to own genuine freehold land with instant allocation.',
      'Whether you\'re investing for residential or commercial purposes, Elite Haven 3 Extension guarantees a secure, profitable, and stress-free real estate experience — true to EliteHub Properties\' promise of building wealth through property ownership.',
      'This prime location offers both convenience and promising returns on investment. The estate is strategically positioned opposite Admiralty, just 5 minutes from Koka Junction, 5 minutes from 63 Brigade Command, and 8 minutes from the Immigration Office. Easy access to major roads and essential amenities makes this an ideal investment opportunity.',
      'The estate features a gated and secure environment with perimeter fencing, a good road network, proper drainage system, electricity supply, and recreational areas. Each feature has been carefully planned to ensure a high-quality lifestyle and long-term property value.',
      'Invest here for verified and genuine property with freehold title, strategic location with rapid development potential, flexible payment plans starting from ₦500,000 initial deposit, and instant allocation after payment confirmation — all backed by EliteHub Properties\' trusted real estate network.',
    ],
    videoId: 'https://www.youtube.com/watch?v=IIcxcT8oXqk?si=6jmXDzQisYsoBNYf',
    amenities: ['Gated and Secure Environment', 'Perimeter Fencing', 'Good Road Network', 'Drainage System', 'Electricity Supply', 'Recreational Area'],
    subscriptionFormUrl: `${FLYERS}/ELITE HAVEN EXT. SUB FORM 2026.pdf`,
  },
  'urban-legacy': {
    slug: 'urban-legacy',
    title: 'Urban Legacy',
    location: 'Ebute kekere way, Afolabi bus stop, Igando road Lagos',
    tagline: 'Prime location in a built-up environment with excellent accessibility.',
    heroImage: `${FLYERS}/URBAN LEGACY.webp`,
    images: [`${FLYERS}/Urban Legacy.jpeg`, '/david-vives-TZdh8NdfIfs-unsplash.jpg', '/pexels-davidmcbee-1546168.jpg'],
    price: '₦10M',
    titleType: 'Registered Survey',
    plotSize: '500sqm',
    propertyType: 'Commercial & Residential',
    paymentPlan: 'Flexible plan',
    description: [
      'Urban Legacy is located at Ebute kekere way, Afolabi bus stop, Igando road Lagos. This land is situated in a prime location within a built-up environment, boasting excellent accessibility to major roads and public transportation. Its proximity to essential amenities such as schools and shopping centers makes it an attractive option for potential buyers, investors and developers.',
      'The estate is strategically positioned close to several notable landmarks including Lagos State University (LASU), IBA Housing Estate, Alaba International Market, and Saint Michael Anglican church. This prime location offers excellent connectivity and access to major institutions and commercial hubs.',
      'The estate comes with registered survey documents. The estate has been cleared and sand filling of road channels in the estate is ongoing. The property can be acquired as immediate build or future investment for appreciation in value, making it an ideal opportunity for both developers and long-term investors.',
    ],
    videoId: 'https://www.youtube.com/watch?v=EzOU6pFqr3E?si=gGwVDZvRiGqPLwK6',
    amenities: ['Cleared Land', 'Road Development Ongoing', 'Registered Survey', 'Excellent Accessibility'],
    subscriptionFormUrl: `${FLYERS}/URBAN LEGACY  SUB FORM 2026.pdf`,
  },
  'eastview-estate': {
    slug: 'eastview-estate',
    title: 'Eastview Phase 3',
    location: 'Asaba, Delta State',
    tagline: 'Start your investment journey with EliteHub Properties in this premium estate.',
    heroImage: `${FLYERS}/EASTVIEW.webp`,
    images: [`${FLYERS}/EASTVIEW.jpeg`, `${FLYERS}/ELITE CITY.jpeg`, '/pexels-davidmcbee-1546168.jpg'],
    price: '₦4,500,000',
    titleType: 'Registered Survey & Deed of Assignment',
    plotSize: '464 SQM',
    propertyType: 'Commercial & Residential',
    paymentPlan: 'Flexible plan',
    description: [
      'Welcome to Eastview Phase 3, a premium residential estate located in Asaba, Delta State. This well-planned development offers an exceptional opportunity to own property in one of Asaba\'s most desirable locations, designed for comfort, security, and long-term value appreciation.',
      'Strategically positioned behind Admiralty University and behind Chinese Construction Company, Eastview Phase 3 enjoys proximity to major institutions and commercial developments. The estate is conveniently located just 20 minutes away from the Koka Flyover, ensuring excellent connectivity to major transportation routes and surrounding areas.',
      'Every plot comes with proper documentation including Registered Survey and Deed of Assignment, guaranteeing peace of mind and security of ownership. The estate has been carefully planned with modern infrastructure and amenities, making it ideal for both homeowners and investors seeking a quality residential environment.',
      'This is your opportunity to start your investment journey with EliteHub Properties and own property in a gated, secure environment with all the essential amenities for modern living.',
    ],
    videoId: 'https://www.youtube.com/watch?v=9IXVJ-aomTQ?si=tqn5XuZ36UGKW2Ij',
    amenities: [
      'Perimeter Fencing',
      'Gardens & Landscaping',
      'Gated & Secured Environs',
      'Good Road Network',
      'Street Light',
    ],
    subscriptionFormUrl: undefined,
  },
  'alaoma-luxury-estate': {
    slug: 'alaoma-luxury-estate',
    title: 'Alaoma Luxury Estate',
    location: 'Ngor Okpala, Ochicha Obieke, Owerri, Imo State',
    tagline: 'Premium estate in a buy and build environment with immediate allocation.',
    heroImage: `${FLYERS}/ALAOMA LUXURY.webp`,
    images: [`${FLYERS}/ALAOMA LUXURY.jpeg`, `${FLYERS}/ELITE CITY.jpeg`, '/pexels-davidmcbee-1546168.jpg'],
    price: '₦3,500,000',
    titleType: 'Deeds of Assignment and Registered Survey',
    plotSize: '464sqm',
    propertyType: 'Residential and Commercial',
    paymentPlan: 'Flexible plan',
    description: [
      'Located in Ngor Okpala, Ochicha Obieke, Owerri, Imo State. Alaoma Luxury Estate is currently selling for ₦3.5M. This premium estate is situated in a buy and build environment with houses already on site on the property, positioned along a major road for excellent accessibility.',
      'Alaoma Luxury Estate boasts proximity to several notable landmarks, making it a strategic investment location. These include Zion Ministries, Tony Chukwu Industry Factory and amongst others.',
      'The estate is conveniently located just 15 minutes away from the Koka Flyover on the Asaba-Onitsha express Road, ensuring easy access to major transportation routes and surrounding areas.',
      'All plots come with proper documentation including Deeds of Assignment and Registered Survey. The estate has been fully fenced and plotted, with allocation immediately available after complete payment. Document processing is guaranteed and ready for pickup within 3 months of purchase.',
    ],
    videoId: 'https://www.youtube.com/watch?v=9OeojdSnyzo?si=xc8s2CqL8fv0S0Rc',
    amenities: ['Perimeter Fencing', 'Fully Plotted', 'Immediate Allocation', 'Road Network', 'Security'],
    subscriptionFormUrl: `${FLYERS}/ALAOMA LUXURY  SUB FORM 2026.pdf`,
  },
  'elite-empire': {
    slug: 'elite-empire',
    title: 'Elite Empire',
    location: 'Avu-oforola, Owerri, Imo State',
    tagline: 'Premium estate with great value on high quality investment.',
    heroImage: `${FLYERS}/ELITE EMPIRE.webp`,
    images: [`${FLYERS}/ELITE EMPIRE.jpeg`, `${FLYERS}/URBAN LEGACY.jpeg`, '/pexels-davidmcbee-1546168.jpg'],
    price: '₦7,000,000',
    titleType: 'Deeds of Assignment and Registered Survey',
    plotSize: '464sqm',
    propertyType: 'Residential and Commercial',
    paymentPlan: 'Flexible plan',
    description: [
      'Located in Avu-oforola, Elite Empire is positioned in an area with great value on high quality investment. This premium estate offers an exceptional opportunity for investors and homeowners seeking a strategic location with excellent growth potential.',
      'Elite Empire boasts proximity to several notable landmarks, making it a strategic investment location. These include Control bus stop, Avu Junction, Imo State Auto Mobile, Deeper life Camp Ground, and E-park Farm. This prime location offers excellent connectivity and access to major institutions and commercial hubs.',
      'All plots come with proper documentation including Deeds of Assignment and Registered Survey. The estate has been fully fenced and plotted, with allocation immediately available after complete payment. Document processing is guaranteed and ready for pickup within 3 months of purchase.',
    ],
    videoId: 'https://www.youtube.com/watch?v=cAciiKX8LdY?si=N2iHXV1Za_bzwuYh',
    amenities: ['Perimeter Fencing', 'Fully Plotted', 'Immediate Allocation', 'Road Network', 'Security'],
    subscriptionFormUrl: `${FLYERS}/ELITE EMPIRE  SUB FORM 2026.pdf`,
  },
  'obi-eze-estate': {
    slug: 'obi-eze-estate',
    title: 'Obi-Eze Estate',
    location: 'Umueze Ibusa, Asaba',
    tagline: 'Premium buy and build estate with immediate allocation on initial deposit.',
    heroImage: `${FLYERS}/OBI EZE.webp`,
    images: [`${FLYERS}/OBI EZE.jpeg`, `${FLYERS}/ELITE CITY.jpeg`, '/pexels-davidmcbee-1546168.jpg'],
    price: '₦12,000,000',
    titleType: 'Freehold',
    plotSize: '464sqm',
    propertyType: 'Commercial & Residential',
    paymentPlan: 'Initial deposit: ₦2M | Immediate allocation | Complete payment in 3 months',
    description: [
      'Located in Umueze Ibusa, Asaba, Obi-Eze Estate is currently selling for ₦12M. This premium estate is situated in a buy and build environment with houses coming up in the area, positioned along a major road for excellent accessibility.',
      'Obi-Eze Estate boasts proximity to several notable landmarks, making it a strategic investment location. These include Federal Government Girls College Ibusa, General Hospital Ibusa, Ibusa Main Market, amongst others. This prime location offers excellent connectivity and access to essential amenities and institutions.',
      'The estate is conveniently located just 18 minutes away from the Koka Flyover on the Asaba-Onitsha express Road, ensuring easy access to major transportation routes and surrounding areas.',
      'All plots come with proper documentation including Deeds of Assignment and Registered Survey. The estate has been fully fenced and plotted. With an initial deposit of ₦2M, subscribers get immediate allocation, and with completion of payment in 3 months, they receive their documents guaranteed and ready for pickup.',
    ],
    videoId: 'https://www.youtube.com/watch?v=kqj5hS_Uww8?si=BNI6wZybJVfo3kim',
    amenities: ['Perimeter Fencing', 'Fully Plotted', 'Immediate Allocation', 'Road Network', 'Security'],
    subscriptionFormUrl: `${FLYERS}/OBI EZE 2 SUB FORM 2026.pdf`,
  },
  'elite-eastland-phase-2': {
    slug: 'elite-eastland-phase-2',
    title: 'Elite Eastland Phase 2',
    location: 'Umuelu, Umuagwo Community, Owerri, Imo State',
    tagline: 'Prime estate along the Port-Harcourt Owerri Express Road with great prospect on high return on investment.',
    heroImage: `${FLYERS}/ELITE EASTLAND.webp`,
    images: [`${FLYERS}/ELITE EASTLAND.jpeg`, `${FLYERS}/ELITE EMPIRE.jpeg`, '/pexels-davidmcbee-1546168.jpg'],
    price: '₦6.5M',
    titleType: 'Freehold',
    plotSize: '464sqm',
    propertyType: 'Residential and Commercial',
    paymentPlan: 'Flexible plan',
    description: [
      'Located in Umuelu, Umuagwo Community in Owerri, Elite Eastland Phase 2 is just by the Port-Harcourt Owerri Express Road. This prime estate is located in an area with great prospect on high return on investment, making it an ideal opportunity for investors and homeowners seeking strategic real estate investments.',
      'Elite Eastland Estate boasts proximity to several notable landmarks, making it a strategic investment location. These include Bethel Golf Estate, Umuagwo Palm oil Factory, U.J match factory, Region Hospital, and University of Agriculture and Environmental Science. This prime location offers excellent connectivity and access to major institutions, commercial establishments, and educational facilities.',
      'The estate\'s strategic position along the Port-Harcourt Owerri Express Road ensures excellent accessibility and connectivity to major cities and transport routes. With its proximity to educational institutions, hospitals, and commercial facilities, Elite Eastland Phase 2 offers a unique opportunity for both residential living and long-term investment appreciation.',
    ],
    videoId: 'https://www.youtube.com/watch?v=qNo9_B5BdF0?si=Mmfjb6ztuIscd0FN',
    amenities: ['Perimeter Fencing', 'Road Network', 'Security', 'Streetlights'],
    subscriptionFormUrl: `${FLYERS}/ELITE EASTLAND 2 SUB FORM 2026.pdf`,
  },
  'ugwumba-estate': {
    slug: 'ugwumba-estate',
    title: 'Ugwumba Estate',
    location: 'Aba, Abia State',
    tagline: 'Where value meets affordability — a budget plot at your own fingerprint.',
    heroImage: `${FLYERS}/UGWUMBA ESTATE.webp`,
    images: [`${FLYERS}/UGWUMBA ESTATE.jpeg`, `${FLYERS}/ELITE CITY.jpeg`, '/pexels-davidmcbee-1546168.jpg'],
    price: '₦7,500,000',
    titleType: 'Certificate of Occupancy (C of O)',
    plotSize: '464 SQM',
    propertyType: 'Residential and Commercial',
    paymentPlan: 'Flexible plan',
    description: [
      'Welcome to Ugwumba Estate, a premium yet affordable real estate development by EliteHub Properties, located in the vibrant city of Aba, Abia State. Ugwumba offers you the chance to own a piece of land where value meets affordability — a place where your vision can come alive.',
      'This is more than just an estate; it\'s a symbol of growth, independence, and the pride of ownership — a budget plot at your own fingerprint. Designed for comfort, accessibility, and investment potential, Ugwumba Estate provides a solid foundation for first-time buyers, families, and smart investors looking to secure future wealth.',
      'Strategically positioned in Aba, one of Nigeria\'s fastest-growing commercial cities, Ugwumba Estate enjoys excellent connectivity to major roads, business hubs, and essential amenities. The location allows residents and investors to enjoy both the economic benefits of a thriving urban environment and the serenity of a private estate. This makes it ideal for residential development, commercial investment, and long-term land banking.',
      'Ugwumba Estate offers fully documented plots with a Certificate of Occupancy, ensuring complete peace of mind and security of investment. Every detail of Ugwumba Estate is thoughtfully planned to deliver comfort, security, and sustainability. At Ugwumba, your dream of owning land becomes an attainable reality — whether you\'re building a home, starting a project, or investing for future returns.',
    ],
    videoId: 'https://www.youtube.com/watch?v=PLACEHOLDER_VIDEO_ID',
    amenities: [
      '24-Hour Security and CCTV Surveillance',
      'Perimeter Fencing',
      'Well-Structured Drainage System',
      'Tared (Paved) Road Network',
      'Electricity Supply',
      'Street Lighting',
    ],
    subscriptionFormUrl: `${FLYERS}/UGWUMBA  SUB FORM 2026.pdf`,
  },
  'haven-residence': {
    slug: 'haven-residence',
    title: 'Haven Residence',
    location: 'Shelter Afrique Extension, Uyo, Akwa Ibom State',
    tagline: 'Experience the height of city living with modern architecture designed for comfort, functionality, and urban elegance.',
    heroImage: `${FLYERS}/HAVEN RESIDENCE.webp`,
    images: ['/HAVEN RESIDENCE.jpeg', '/pexels-fauxels-3184465.jpg', '/smiling-business-persons.jpg'],
    price: '₦62,000,000 - ₦118,000,000',
    titleType: 'Registered Documentation',
    plotSize: 'Various sizes available',
    propertyType: 'Commercial & Residential',
    paymentPlan: 'Flexible payment plans available',
    description: [
      'Welcome to Haven Residence, a premium residential development by Elite Properties located in Shelter Afrique Extension, Uyo, Akwa Ibom State. Experience the height of city living with modern architecture designed for comfort, functionality, and urban elegance.',
      'Haven Residence offers a range of property types to suit different needs and lifestyles. Choose from 1 Bedroom Mezzanine (₦62,000,000), 2 Bedroom Apartment (₦85,000,000), 3 Bedroom Apartment (₦88,000,000), 3 Bedroom Terrace (₦98,000,000), or 4 Bedroom Maisonette (₦118,000,000).',
      'This development is ideal for residential living, high-end rental investment, and short-let and serviced apartment opportunities. The estate combines modern amenities with strategic location, making it perfect for both homeowners and investors seeking premium returns.',
      'Located at coordinates 5.85222, 8.89442, Haven Residence is now selling and offers flexible payment plans to make your dream of owning a premium property a reality.',
    ],
    videoId: 'https://www.youtube.com/watch?v=bDmNXISzGVc?si=7a3yVzZBZJSortuU',
    amenities: [
      'Modern Architecture',
      'Urban Elegance',
      'Premium Finishing',
      'Strategic Location',
      'Investment Potential',
    ],
    subscriptionFormUrl: `${FLYERS}/HAVEN RESIDENCE HOUSING UNIT,  SUB FORM UYO.pdf`,
  },
  
};

function normalizeTitleTypeInput(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/\//g, ' and ')
    .replace(/\./g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function normalizeTitleTypes(titleType: string): string[] {
  const normalized = normalizeTitleTypeInput(titleType);
  const tokens = normalized.split(/\sand\s|,|\|/).map((t) => t.trim()).filter(Boolean);
  const detected = new Set<string>();

  for (const token of tokens) {
    const matched = TITLE_TYPE_TOKEN_MAP[token];
    if (matched) detected.add(matched);
  }

  for (const [pattern, canonical] of Object.entries(TITLE_TYPE_TOKEN_MAP)) {
    if (normalized.includes(pattern)) detected.add(canonical);
  }

  if (detected.size === 0) return [titleType];
  return Array.from(detected);
}

export function getAllTitleDocumentFilters(): string[] {
  const unique = new Set<string>();
  Object.values(PROPERTY_DETAILS).forEach((property) => {
    normalizeTitleTypes(property.titleType).forEach((title) => unique.add(title));
  });
  return Array.from(unique).sort((a, b) => a.localeCompare(b));
}

export function extractPriceNumbers(price: string): number[] {
  const normalized = price.replace(/,/g, '').replace(/₦/g, '').trim();
  const matches = normalized.match(/(\d+(?:\.\d+)?)(\s*[mMkK])?/g) ?? [];

  return matches
    .map((token) => {
      const numMatch = token.match(/(\d+(?:\.\d+)?)/);
      if (!numMatch) return undefined;
      const value = Number.parseFloat(numMatch[1]);
      if (Number.isNaN(value)) return undefined;
      const hasMillion = /m/i.test(token);
      const hasThousand = /k/i.test(token);
      if (hasMillion) return value * 1_000_000;
      if (hasThousand) return value * 1_000;
      return value;
    })
    .filter((value): value is number => typeof value === 'number');
}

export function matchesPriceBand(price: string, bandId: string): boolean {
  const band = PRICE_BANDS.find((item) => item.id === bandId);
  if (!band) return true;

  const values = extractPriceNumbers(price);
  if (values.length === 0) return false;

  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const bandMax = band.max ?? Number.POSITIVE_INFINITY;

  return maxValue >= band.min && minValue < bandMax;
}

export function getPropertyBySlug(slug: string): PropertyDetailsData | undefined {
  return PROPERTY_DETAILS[slug];
}


