import React from 'react';

const variants = {
  success: 'bg-green-100 text-green-700 border-green-200',
  warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  error: 'bg-red-100 text-red-700 border-red-200',
  info: 'bg-blue-100 text-blue-700 border-blue-200',
  primary: 'bg-[#4F7DF3]/10 text-[#4F7DF3] border-[#4F7DF3]/20',
};

const Badge = ({ children, variant = 'primary', className = '' }) => {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border inline-flex items-center justify-center min-w-[60px] ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
