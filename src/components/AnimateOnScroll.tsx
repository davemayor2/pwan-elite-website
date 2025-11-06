'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationDirection = 'left' | 'right' | 'up' | 'down' | 'fade';

interface AnimateOnScrollProps {
  children: ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimateOnScroll({
  children,
  direction = 'fade',
  delay = 0,
  duration = 0.6,
  className = '',
  style = {},
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optionally disconnect after animation to prevent re-triggering
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getAnimationClass = () => {
    if (isVisible) {
      const baseClass = 'animate-on-scroll';
      switch (direction) {
        case 'left':
          return `${baseClass} slide-in-left`;
        case 'right':
          return `${baseClass} slide-in-right`;
        case 'up':
          return `${baseClass} slide-in-up`;
        case 'down':
          return `${baseClass} slide-in-down`;
        case 'fade':
        default:
          return `${baseClass} fade-in`;
      }
    }
    return 'animate-on-scroll';
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

