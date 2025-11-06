'use client';

export default function AnimatedCircles() {
  return (
    <div className="fixed right-0 top-0 bottom-0 w-[20%] pointer-events-none z-0 overflow-hidden">
      {/* Black vertical bar */}
      <div className="absolute right-0 top-0 bottom-0 w-full bg-black"></div>
      
      {/* SVG Container for Circles */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" viewBox="0 0 600 600">
        {/* Outer Circle Path */}
        <circle
          cx="300"
          cy="300"
          r="280"
          fill="none"
          stroke="#E20000"
          strokeWidth="1"
        />
        
        {/* Inner Circle Path */}
        <circle
          cx="300"
          cy="300"
          r="200"
          fill="none"
          stroke="#E20000"
          strokeWidth="1"
        />
        
        {/* Animated Hollow White Dot (outer circle) */}
        <g className="outer-dot-group">
          <circle
            cx="580"
            cy="300"
            r="8"
            fill="white"
            stroke="#E20000"
            strokeWidth="1"
            className="outer-dot"
          />
        </g>
        
        {/* Animated Solid Red Dot (inner circle) */}
        <g className="inner-dot-group">
          <circle
            cx="500"
            cy="300"
            r="8"
            fill="#E20000"
            className="inner-dot"
          />
        </g>
      </svg>
    </div>
  );
}

