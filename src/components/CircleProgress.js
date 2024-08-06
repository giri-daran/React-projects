import React from 'react';

function CircleProgress ({ progress }) {
  const circleRadius = 50; 
  const circleCircumference = 2 * Math.PI * circleRadius; 

  const strokeDashoffset = circleCircumference - (progress / 100) * circleCircumference;

  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg
        className="transform rotate-0"
        width="88"
        height="88"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          fill="transparent"
          stroke="#474b52" 
          strokeWidth="12"
        />
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          fill="transparent"
          stroke="#93c5f9" 
          strokeWidth="12"
          strokeDasharray={circleCircumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300"
          transform="rotate(-90 60 60)" 
        />
        <text
          x="50%"
          y="42%"
          dy=".3em"
          textAnchor="middle"
          className="text-2xl font-sans font-bold fill-current text-white"
        >
            {progress}%
        </text>
        <text 
         x="50%"
         y="57%"
         dy=".3em"
         textAnchor="middle"
        className="text-xs font-sans font-medium fill-current text-white"
        >
            Goal
        </text>
        <text 
         x="50%"
         y="67%"
         dy=".3em"
         textAnchor="middle"
        className="text-xs font-sans font-medium fill-current text-white"
        >
            Completed
        </text>
      </svg>
    </div>
  );
};

export default CircleProgress;
