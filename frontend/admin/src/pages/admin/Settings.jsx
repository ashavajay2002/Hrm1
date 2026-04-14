import React, { useState } from 'react';

const Settings = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-10 animate-fade-in text-left max-w-7xl mx-auto pb-12">
      <style>{`
        .font-manrope { font-family: 'Manrope', sans-serif; }
        .input-gold-focus:focus { border-color: var(--accent-gold); ring: 2px; --tw-ring-color: rgba(200, 169, 106, 0.1); }
      `}</style>

      {/* 🏙️ Page Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 uppercase tracking-tight">
        <div>
          <h1 className="text-4xl font-black text-[#2E3A59] tracking-tighter leading-none mb-3 font-manrope">
            System <span className="text-[var(--accent-gold)]">Architecture</span>
          </h1>
          <p className="text-slate-400 font-bold text-[9px] tracking-[0.4em] flex items-center gap-3">
            <span className="w-10 h-[1px] bg-[var(--accent-gold)]"></span>
            Global Configuration Control
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl border border-slate-200 text-slate-400 font-black uppercase text-[9px] tracking-widest hover:bg-slate-50 transition-all">Discard Changes</button>
          <button className="bg-[#2E3A59] text-white px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-slate-900/10 hover:bg-[#1f2a44] transition-all flex items-center gap-3">
             <span className="material-symbols-outlined text-base">sync_saved_locally</span>
             Synchronize Nodes
          </button>
        </div>
      </div>

      {/* 🍱 Intelligence Grid Settings */}
      <div className="grid grid-cols-12 gap-8">
        
        {/* Company Identity HUB */}
        <section className="col-span-12 lg:col-span-7 card !p-8 border-slate-200/60">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-slate-50 rounded-2xl text-[#2E3A59] border border-slate-100 shadow-sm">
               <span className="material-symbols-outlined">business</span>
            </div>
            <h3 className="text-[11px] font-black text-[#2E3A59] uppercase tracking-tighter font-manrope">Organizational Identity</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 flex items-center gap-8 mb-6 border-b border-slate-50 pb-8">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl bg-[#2E3A59] flex items-center justify-center p-4 shadow-xl border border-white/10 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-[var(--accent-gold)] text-3xl font-black font-manrope">NH</span>
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <span className="material-symbols-outlined text-white text-xl">camera_enhance</span>
                </div>
              </div>
              <div>
                <h4 className="font-black text-[11px] text-[#2E3A59] uppercase leading-none font-manrope">Node Hub Logo</h4>
                <p className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-widest leading-relaxed">Visible across all employee portals.</p>
                <button className="text-[10px] font-black text-[var(--accent-gold)] hover:underline uppercase tracking-widest mt-3">Upload Strategic Asset</button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">Entity Designation</label>
              <input className="w-full bg-[#F5F7FA] border-none rounded-xl px-4 py-3.5 text-[11px] font-black uppercase tracking-widest text-[#2E3A59] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all outline-none" type="text" defaultValue="FluidHR Global Architecture"/>
            </div>
            
            <div className="space-y-3">
              <label className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">Primary Core URL</label>
              <input className="w-full bg-[#F5F7FA] border-none rounded-xl px-4 py-3.5 text-[11px] font-black uppercase tracking-widest text-[#2E3A59] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all outline-none" type="text" defaultValue="central.fluidhr.com"/>
            </div>

            <div className="col-span-2 space-y-3">
              <label className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">HQ Coordinate Address</label>
              <input className="w-full bg-[#F5F7FA] border-none rounded-xl px-4 py-3.5 text-[11px] font-black uppercase tracking-widest text-[#2E3A59] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all outline-none" type="text" defaultValue="72 Innovation Drive, Suite 400, San Francisco, CA"/>
            </div>
          </div>
        </section>

        {/* Sync Pillar Config */}
        <section className="col-span-12 lg:col-span-5 card !p-8 border-slate-200/60">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-slate-50 rounded-2xl text-[var(--accent-gold)] border border-slate-100 shadow-sm">
               <span className="material-symbols-outlined">schedule</span>
            </div>
            <h3 className="text-[11px] font-black text-[#2E3A59] uppercase tracking-tighter font-manrope">Sync Cycles</h3>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300 mb-6 flex items-center justify-between">
                 Operating Days <span>MTD Active</span>
              </p>
              <div className="flex justify-between gap-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <button key={i} className={`flex-1 h-10 rounded-xl border-2 font-black text-[10px] transition-all uppercase ${i < 5 ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] shadow-lg shadow-[var(--accent-gold)]/5' : 'border-slate-100 text-slate-300 hover:border-slate-200'}`}>{day}</button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">Pulse Check-in</label>
                <input className="w-full bg-[#F5F7FA] border-none rounded-xl px-4 py-3.5 text-[10px] font-black text-[#2E3A59] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all outline-none" type="time" defaultValue="09:00"/>
              </div>
              <div className="space-y-3">
                <label className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">Pulse Check-out</label>
                <input className="w-full bg-[#F5F7FA] border-none rounded-xl px-4 py-3.5 text-[10px] font-black text-[#2E3A59] focus:ring-2 focus:ring-[var(--accent-gold)]/20 transition-all outline-none" type="time" defaultValue="18:00"/>
              </div>
            </div>

            <div className="p-6 bg-[#F5F7FA] rounded-2xl border border-slate-200/40 relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)]/5 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700"></div>
               <div className="flex items-center justify-between mb-3 relative z-10">
                  <h4 className="font-black text-[10px] text-[#2E3A59] uppercase tracking-tighter font-manrope">Fluid Latency Buffer</h4>
                  <div className="w-10 h-5 bg-[var(--accent-gold)] rounded-full relative shadow-lg shadow-[var(--accent-gold)]/10 transition-all">
                     <div className="w-3.5 h-3.5 bg-white rounded-full absolute right-1 top-0.75 shadow-sm"></div>
                  </div>
               </div>
               <p className="text-[9px] text-slate-400 font-bold leading-relaxed uppercase tracking-widest italic opacity-80 relative z-10">Allow personnel to clock-in within a 2-hour window of the default pulse.</p>
            </div>
          </div>
        </section>

        {/* Global Access Protocol Sheet */}
        <section className="col-span-12 card !p-0 border-slate-200/60 overflow-hidden">
           <div className="p-8 flex flex-col md:flex-row items-center justify-between bg-slate-50/50 border-b border-slate-100 gap-6">
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-[#2E3A59] rounded-2xl text-white shadow-xl shadow-[#2E3A59]/10">
                    <span className="material-symbols-outlined font-black">lock_open</span>
                 </div>
                 <div>
                    <h3 className="text-[12px] font-black text-[#2E3A59] uppercase tracking-tighter font-manrope">Permission Arc Matrix</h3>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 opacity-60">Architectural access control protocols.</p>
                 </div>
              </div>
              <button className="flex items-center gap-3 px-6 py-3 bg-[#2E3A59] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#1f2a44] transition-all shadow-md">
                 <span className="material-symbols-outlined text-sm">shield_person</span>
                 Define New Arc
              </button>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-slate-50/20 border-b border-slate-50">
                       <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Hub Module</th>
                       <th className="px-6 py-5 text-center text-[9px] font-black uppercase tracking-[0.2em] text-[#2E3A59]">Master Node</th>
                       <th className="px-6 py-5 text-center text-[9px] font-black uppercase tracking-[0.2em] text-[#2E3A59]">Dept Lead</th>
                       <th className="px-6 py-5 text-center text-[9px] font-black uppercase tracking-[0.2em] text-[#2E3A59]">Personnel</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {[
                      { hub: 'Financial Cluster', desc: 'Salaries and Bonus Logic', icon: 'payments' },
                      { hub: 'Registry Core', desc: 'Legal and Identity Trace', icon: 'fingerprint' },
                      { hub: 'Pulse Monitoring', desc: 'Time and Attendance Logic', icon: 'timer' }
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-[#F5F7FA]/70 transition-colors">
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-4">
                              <span className="material-symbols-outlined text-slate-200 group-hover:text-[var(--accent-gold)] transition-colors">{row.icon}</span>
                              <div>
                                 <p className="font-black text-[11px] text-[#2E3A59] uppercase font-manrope">{row.hub}</p>
                                 <p className="text-[8px] font-bold text-slate-300 uppercase tracking-widest mt-1">{row.desc}</p>
                              </div>
                           </div>
                        </td>
                        {[1, 2, 3].map(col => (
                          <td key={col} className="px-6 py-6 text-center">
                             <div className={`w-2 h-2 rounded-full mx-auto ${col === 1 || (col === 2 && i > 0) ? 'bg-[var(--accent-gold)] shadow-lg shadow-[var(--accent-gold)]/20' : 'bg-slate-100'}`}></div>
                          </td>
                        ))}
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>

        {/* System Danger Zone */}
        <section className="col-span-12 card !bg-[#2E3A59] border-none shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full -mr-32 -mt-32 blur-[80px] group-hover:scale-125 transition-all duration-[2s]"></div>
           <div className="p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 text-white">
              <div className="text-left">
                 <h3 className="text-sm font-black text-[var(--accent-gold)] uppercase tracking-[0.2em] mb-3 font-manrope">Structural Maintenance</h3>
                 <p className="text-white/40 max-w-2xl text-[10px] font-bold leading-relaxed uppercase tracking-widest">
                    Archive historical data clusters, manage core integrations, or reset organizational workspace. Proceed with extreme caution as these paths require high-level authorization.
                 </p>
              </div>
              <div className="flex gap-4 shrink-0">
                 <button className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all outline-none">Log Interface</button>
                 <button className="px-8 py-3.5 bg-rose-600/90 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl shadow-rose-900/40 border border-rose-500/20 hover:scale-[1.05] active:scale-95 transition-all outline-none font-manrope">Purge Architecture</button>
              </div>
           </div>
        </section>
      </div>

      {/* Final Verification Trace */}
      <div className="pt-12 text-center opacity-30">
        <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.6em] leading-loose">
          Central Configuration Layer: Node 0xA991 <br />
          <span className="text-[var(--accent-gold)]">Verified Narrative Sync Active</span>
        </p>
      </div>
    </div>
  );
};

export default Settings;
