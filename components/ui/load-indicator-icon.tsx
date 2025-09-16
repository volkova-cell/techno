import React from 'react';

interface LoadIndicatorIconProps extends React.SVGProps<SVGSVGElement> {
  loadLevel: 'low' | 'medium' | 'high';
}

export const LoadIndicatorIcon: React.FC<LoadIndicatorIconProps> = ({ loadLevel, className, ...props }) => {
  const colors = {
    low: ['#4CAF50', '#E0E0E0', '#E0E0E0'], // Green
    medium: ['#FFC107', '#FFC107', '#E0E0E0'], // Yellow
    high: ['#F44336', '#F44336', '#F44336'], // Red
  };

  const currentColors = colors[loadLevel];

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="4" y="6" width="4" height="12" rx="1" fill={currentColors[0]} />
      <rect x="10" y="6" width="4" height="12" rx="1" fill={currentColors[1]} />
      <rect x="16" y="6" width="4" height="12" rx="1" fill={currentColors[2]} />
    </svg>
  );
};