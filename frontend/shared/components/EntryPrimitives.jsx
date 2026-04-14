import React from 'react';

export const EntryButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "w-full font-headline font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] shadow-sm";
  const variants = {
    primary: "bg-gradient-to-r from-[#8a5100] to-[#ff9900] text-white hover:opacity-90 shadow-[0px_24px_48px_rgba(255,153,0,0.2)]",
    secondary: "bg-[#575b85] text-white hover:opacity-90",
    outline: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20",
    ghost: "bg-surface-container-high text-on-surface hover:opacity-80"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const EntryInput = ({ label, icon, ...props }) => (
  <div className="space-y-2 text-left">
    {label && <label className="font-label text-xs font-semibold uppercase tracking-widest text-[#887361] ml-1">{label}</label>}
    <div className="relative group">
      {icon && <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#887361]/50 group-focus-within:text-[#8a5100] transition-colors">{icon}</span>}
      <input 
        className={`w-full ${icon ? 'pl-12' : 'px-4'} pr-4 py-4 bg-[#e6e8ea] rounded-xl border-none focus:ring-2 focus:ring-[#ff9900]/40 focus:bg-white transition-all duration-300 font-body text-[#191c1e] placeholder:text-[#887361]/40`}
        {...props}
      />
    </div>
  </div>
);

export const RoleCard = ({ title, desc, icon, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`group relative flex flex-col items-center justify-center p-8 px-10 pb-12 bg-white rounded-[40px] transition-all duration-500 border-2 ${active ? 'border-[#ff9900] shadow-2xl scale-105' : 'border-transparent hover:border-[#ff9900]/20 hover:-translate-y-2 hover:shadow-xl'}`}
  >
    <div className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-300 ${active ? 'bg-[#ff9900]/10' : 'bg-[#eceef0] group-hover:bg-[#ff9900]/10'}`}>
      <span className={`material-symbols-outlined text-4xl transition-colors duration-300 ${active ? 'text-[#ff9900]' : 'text-[#575b85] group-hover:text-[#ff9900]'}`}>{icon}</span>
    </div>
    <h3 className={`font-headline text-xl font-bold tracking-tight transition-colors ${active ? 'text-[#ff9900]' : 'text-[#191c1e] group-hover:text-[#ff9900]'}`}>{title}</h3>
    <div className="mt-4 flex items-center justify-center gap-5 w-full">
      {/* 👻 Ghost Spacer for Perfect Centering */}
      <div className="w-6 h-6 invisible px-2"></div> 
      
      <p className="text-[10px] text-[#554434] font-black uppercase tracking-[0.25em] opacity-40 leading-none text-center">
        {desc}
      </p>

      <div className={`transition-all duration-500 flex items-center justify-center w-6 h-6 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`}>
        <span className="material-symbols-outlined text-[#ff9900] text-xl font-black hover:scale-125 transition-transform drop-shadow-[0_0_12px_rgba(255,153,0,0.4)]">arrow_forward</span>
      </div>
    </div>
  </button>
);
