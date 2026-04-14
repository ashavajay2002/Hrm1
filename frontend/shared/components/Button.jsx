import React from 'react';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-4 py-2 font-semibold rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#4F7DF3] text-white hover:bg-[#436dd5] shadow-sm",
    secondary: "bg-[#F1F3F6] text-[#1F2937] hover:bg-[#E5E7EB]",
    outline: "border-2 border-[#4F7DF3] text-[#4F7DF3] hover:bg-[#4F7DF3] hover:text-white",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "text-[#6B7280] hover:bg-[#F7F9FC] hover:text-[#1F2937]",
  };
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
