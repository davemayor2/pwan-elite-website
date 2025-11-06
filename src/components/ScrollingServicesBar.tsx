'use client';

const SERVICES = [
  'Estate Layout, Construction and Development',
  'Documentation Assistance',
  'Flexible Payment Plans',
  'Real Estate Investment Consultancy',
  'Real Estate Investment Education & Support',
  'Land Sales (Residential & Commercial)'
];

/**
 * Full-width infinitely scrolling services banner.
 * Duplicates the list to achieve seamless looping.
 */
export default function ScrollingServicesBar() {
  // Duplicate services to create a seamless 2x track
  const scrollingList = [...SERVICES, ...SERVICES];

  const SparkIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <path d="M12 2v20M2 12h20M4.222 4.222l15.556 15.556M19.778 4.222L4.222 19.778" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className="services-scroller bg-secondary text-white font-heading font-semibold select-none">
      <div className="services-track py-3">
        {scrollingList.map((label, idx) => (
          <div key={idx} className="flex items-center whitespace-nowrap">
            <span className="mr-3 inline-flex"><SparkIcon /></span>
            <span className="text-sm sm:text-base md:text-lg tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


