import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoleCard } from '../components/EntryPrimitives';

const RoleSelection = () => {
  const navigate = useNavigate();

  const roles = [
    { id: 'admin', title: 'Admin', desc: 'System Architecture', icon: 'admin_panel_settings' },
    { id: 'hr', title: 'HR', desc: 'Cultural Infrastructure', icon: 'diversity_3' },
    { id: 'manager', title: 'Manager', desc: 'Team Orchestration', icon: 'account_tree' },
    { id: 'employee', title: 'Employee', desc: 'Personnel node ops', icon: 'badge' }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#f7f9fb] relative overflow-hidden text-center">
      {/* 🌌 Atmospheric Accents */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00668a]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-[#ff9900]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-[#E0E3E5]/10 rounded-full">
            <span className="w-2 h-2 bg-[#ff9900] rounded-full animate-pulse"></span>
            <span className="text-[8px] font-black tracking-[0.2em] uppercase text-slate-400">Step 2: Access Control</span>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tighter text-[#000229] leading-tight uppercase italic">
            Select Your Perspective
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto text-lg font-bold italic opacity-70">
            Choose your role to experience the high-fidelity workflow designed for your specific personnel node.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <RoleCard 
              key={role.id}
              title={role.title}
              desc={role.desc}
              icon={role.icon}
              onClick={() => navigate(`/login/${role.id}`)}
            />
          ))}
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-center items-center gap-8 opacity-40">
          <div className="flex items-center gap-2 group cursor-pointer transition-colors hover:text-[#ff9900]">
            <span className="material-symbols-outlined text-sm">help_outline</span>
            <span className="font-label text-[8px] tracking-[0.3em] uppercase font-black">Not sure which one?</span>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer transition-colors hover:text-[#ff9900]">
            <span className="material-symbols-outlined text-sm">lock_open</span>
            <span className="font-label text-[8px] tracking-[0.3em] uppercase font-black">Request Entry Access</span>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff9900]/20 to-transparent"></div>
    </main>
  );
};

export default RoleSelection;
