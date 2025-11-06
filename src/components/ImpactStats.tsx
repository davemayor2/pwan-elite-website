'use client';

import { useEffect, useState, useRef } from 'react';

interface StatData {
  value: string;
  labelTop: string;
  labelBottom: string;
  numericValue: number;
  suffix: string;
}

function parseStatValue(value: string): { numericValue: number; suffix: string } {
  // Remove commas and extract number and suffix (e.g., '3,000+' -> 3000, '+')
  const cleanValue = value.replace(/,/g, '');
  const match = cleanValue.match(/^(\d+)(.*)$/);
  if (match) {
    return {
      numericValue: parseInt(match[1], 10),
      suffix: match[2] || '',
    };
  }
  return { numericValue: 0, suffix: value };
}

function formatNumber(num: number): string {
  // Format with commas for thousands
  return num.toLocaleString('en-US');
}

function AnimatedStat({ stat, isVisible }: { stat: StatData; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0);
      return;
    }

    const duration = 2000; // 2 seconds animation
    const startValue = 0;
    const endValue = stat.numericValue;
    const startTime = performance.now();
    startTimeRef.current = startTime;

    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) return;

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, stat.numericValue]);

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="font-heading text-4xl md:text-5xl font-semibold leading-none">
        {formatNumber(displayValue)}{stat.suffix}
      </div>
      <div className="text-left">
        <div className="font-heading font-semibold text-sm md:text-base opacity-80">
          {stat.labelTop}
        </div>
        <div className="font-heading font-semibold text-sm md:text-base opacity-80">
          {stat.labelBottom}
        </div>
      </div>
    </div>
  );
}

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatData[] = [
    { value: '500+', labelTop: 'Plots', labelBottom: 'Sold', ...parseStatValue('500+') },
    { value: '3,000+', labelTop: 'Satisfied', labelBottom: 'Clients', ...parseStatValue('3,000+') },
    { value: '16+', labelTop: 'Awards', labelBottom: 'Received', ...parseStatValue('16+') },
    { value: '5+', labelTop: 'States', labelBottom: 'Covered', ...parseStatValue('5+') },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optional: disconnect after first trigger to prevent re-animation on scroll
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary text-white border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-center font-heading text-xl md:text-2xl mb-8">
          PWAN ELITE by the Numbers
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-6 text-center">
          {stats.map((stat, idx) => (
            <AnimatedStat key={idx} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}






