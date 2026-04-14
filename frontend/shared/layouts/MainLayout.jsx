import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [time, setTime] = useState(new Date());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const role = localStorage.getItem('role') || 'admin';

  const menuItems = [
    { name: 'Dashboard', icon: 'grid_view', path: `/${role}/dashboard` },
    { name: 'Personnel', icon: 'person_search', path: `/${role}/employees` },
    { name: 'Architecture', icon: 'account_tree', path: `/${role}/departments` },
    { name: 'Schedules', icon: 'event_available', path: `/${role}/leave` },
    { name: 'Trace Ops', icon: 'person_check', path: `/${role}/attendance` },
    { name: 'Performance', icon: 'speed', path: `/${role}/performance` },
    { name: 'Financials', icon: 'payments', path: `/${role}/payroll` },
    { name: 'Analytics', icon: 'assessment', path: `/${role}/reports` },
    { name: 'Settings', icon: 'settings', path: `/${role}/settings` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--secondary-color)] font-sans antialiased">
      {/* 🚀 Integrated Navigation Shell */}
      <div className="flex flex-1 relative h-screen overflow-hidden">
        
        {/* 🏛️ SMART SIDEBAR: Hover-Activated Overlay */}
        <aside 
          onMouseEnter={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(true)}
          className={`fixed left-0 top-0 h-full z-50 bg-[var(--primary-color)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl flex flex-col ${collapsed ? 'w-20' : 'w-64'}`}
        >
          {/* Logo Branding */}
          <div className="h-24 flex items-center px-6 border-b border-white/5 overflow-hidden">
             <div className="w-8 h-8 rounded-lg bg-[var(--accent-gold)] flex items-center justify-center shrink-0 shadow-lg shadow-[var(--accent-gold)]/20">
                <span className="material-symbols-outlined text-white text-lg font-black">hub</span>
             </div>
             {!collapsed && (
               <div className="ml-4 animate-fade-in">
                  <h2 className="text-white font-black text-xs uppercase tracking-[0.3em] leading-none">FluidHR</h2>
                  <p className="text-[var(--accent-gold)] text-[7px] font-bold uppercase tracking-widest mt-1">Management Node</p>
               </div>
             )}
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-10 space-y-2 overflow-y-auto scrollbar-hide">
            {menuItems.map((item) => {
              const isActive = location.pathname.includes(item.path);
              return (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`relative flex items-center h-14 transition-all duration-300 group ${isActive ? 'bg-white/5' : 'hover:bg-white/5'}`}
                >
                  {/* Active Indicator (Matches Screenshot) */}
                  {isActive && (
                    <div className="absolute left-0 top-1/4 h-1/2 w-[3px] bg-[var(--accent-gold)] rounded-r-full shadow-lg shadow-[var(--accent-gold)]/40"></div>
                  )}
                  
                  <div className={`w-20 shrink-0 flex items-center justify-center ${isActive ? 'text-[var(--accent-gold)]' : 'text-slate-400 group-hover:text-white'}`}>
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{item.icon}</span>
                  </div>
                  
                  {!collapsed && (
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] animate-fade-in ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                      {item.name}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Widget: Weather & Status (Matches Screenshot) */}
          <div className="p-6 border-t border-white/5">
             <div className={`flex items-center gap-4 transition-all duration-300 ${collapsed ? 'justify-center' : ''}`}>
                <div className="relative">
                   <div className="p-2 bg-white/5 rounded-xl text-[var(--original-orange)]">
                      <span className="material-symbols-outlined text-xl">sunny</span>
                   </div>
                   {/* Red Pulse Notification from Image */}
                   <div className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--original-red)] rounded-full flex items-center justify-center text-[10px] font-black text-white border-2 border-[var(--primary-color)] shadow-lg animate-bounce">1</div>
                </div>
                {!collapsed && (
                   <div className="animate-fade-in">
                      <p className="text-white font-black text-[12px] font-manrope">94°F</p>
                      <p className="text-slate-500 text-[8px] font-bold uppercase tracking-widest">Sunny</p>
                   </div>
                )}
             </div>
             
             {!collapsed && (
                <button 
                  onClick={() => { localStorage.clear(); navigate('/login'); }}
                  className="mt-8 w-full flex items-center gap-4 p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-rose-500/20 transition-all group"
                >
                   <span className="material-symbols-outlined">logout</span>
                   <span className="text-[10px] font-black uppercase tracking-widest">Logout Trace</span>
                </button>
             )}
          </div>
        </aside>

        {/* 🎬 MAIN CONTENT AREA: Transitions with Sidebar */}
        <main className={`flex-1 overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${collapsed ? 'ml-20' : 'ml-64'}`}>
          <div className="p-10 min-h-screen">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
