import React from 'react';

const Reports = () => {
  return (
    <div className="space-y-6 pb-12 animate-fade-in text-left">
      <style>{`
        .cta-gradient {
            background: linear-gradient(135deg, #8A5100 0%, #FF9900 100%);
        }
        .font-manrope { font-family: 'Manrope', sans-serif; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      {/* 🏙️ Page Header Section */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-black text-[#1e1e1e] tracking-tight font-manrope leading-none uppercase">Reports & Analytics</h2>
          <p className="text-slate-500 mt-3 font-bold text-[10px] uppercase tracking-widest leading-none">Detailed insights into workforce performance and operational synergy.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#eceef0] text-[#191c1e] font-black rounded-xl hover:opacity-80 transition-all text-[8px] uppercase tracking-widest leading-none">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            Last 30 Cycles
          </button>
          <button className="cta-gradient text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-black shadow-lg shadow-[#FF9900]/20 hover:scale-[1.02] active:scale-95 transition-all text-[8px] uppercase tracking-widest leading-none">
            <span className="material-symbols-outlined text-base">add</span>
            Create Custom Trace
          </button>
        </div>
      </div>

      {/* 🍱 Intelligence Bento Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Retention Trend Radar */}
        <div className="lg:col-span-2 bg-white rounded-[32px] p-8 shadow-sm border border-[#E0E3E5]/10 text-left">
          <div className="flex justify-between items-center mb-8 px-2">
            <div className="text-left">
              <h3 className="text-[11px] font-black text-[#000229] uppercase tracking-tighter font-manrope">Retention Sync Trend</h3>
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Comparative monthly retention rates.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-lg bg-[#FF9900] shadow-sm shadow-[#FF9900]/30"></span>
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-400">Current Cycle</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-lg bg-[#000229]/20"></span>
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-400">Past Cycle</span>
              </div>
            </div>
          </div>
          <div className="h-48 flex items-end justify-between gap-4 px-4 relative overflow-hidden">
            {[85, 75, 90, 82, 88, 94].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full bg-[#f2f4f6]/50 rounded-t-xl relative h-full shadow-inner overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-[#000229]/5 rounded-t-xl transition-all duration-700" style={{ height: `${h - 10}%` }}></div>
                  <div className="absolute bottom-0 w-full bg-[#FF9900] rounded-t-xl shadow-lg transition-all duration-1000 group-hover:scale-y-105 origin-bottom" style={{ height: `${h}%` }}></div>
                </div>
                <span className="text-[7px] font-black text-slate-300 uppercase tracking-widest group-hover:text-[#000229] transition-colors">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* turnover Pulse Pillar */}
        <div className="bg-[#000229] rounded-[32px] p-8 text-white h-full flex flex-col justify-between shadow-xl border border-white/5 relative overflow-hidden group">
          <div className="text-left relative z-10">
            <span className="material-symbols-outlined text-[#FF9900] text-4xl mb-4 group-hover:scale-110 transition-transform">analytics</span>
            <h4 className="text-[11px] font-black font-manrope uppercase tracking-widest mb-2">Turnover Matrix</h4>
            <p className="text-slate-400 text-[10px] font-bold leading-relaxed uppercase tracking-tight opacity-70">
              Decreased by 2.4% this cycle due to optimized onboarding synergy.
            </p>
          </div>
          <div className="mt-8 flex items-baseline gap-2 relative z-10">
            <span className="text-5xl font-black font-manrope">4.8%</span>
            <span className="text-[#FF9900] font-black text-[9px] uppercase tracking-widest shadow-sm bg-white/5 px-2 py-0.5 rounded-lg">↓ 12% vs LY</span>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9900]/5 blur-3xl rounded-full -mr-10 -mt-10"></div>
        </div>
      </div>

      {/* 📄 Standard Export Sheet Cards */}
      <section className="text-left">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#000229] whitespace-nowrap">Standard Registry Exports</h2>
          <div className="flex-1 h-[1px] bg-[#f2f4f6]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Attendance Summary', desc: 'Daily logs, overtime, and lag metrics per hub.', icon: 'how_to_reg' },
            { title: 'Leave Utilization', desc: 'Sickness, vacation, and balance analysis per role.', icon: 'event_busy' },
            { title: 'Payroll Breakdown', desc: 'Cost matrix including tax withholdings and perks.', icon: 'payments' }
          ].map((card, i) => (
            <div key={i} className="group bg-white rounded-[32px] p-6 shadow-sm border border-[#E0E3E5]/10 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#f7f9fb] rounded-2xl text-[#000229] group-hover:bg-[#000229] group-hover:text-white transition-all shadow-inner">
                  <span className="material-symbols-outlined text-lg">{card.icon}</span>
                </div>
                <button className="text-slate-300 hover:text-[#000229] transition-colors">
                  <span className="material-symbols-outlined text-base">more_vert</span>
                </button>
              </div>
              <h4 className="font-black text-[10px] uppercase tracking-widest text-[#000229] mb-1.5 font-manrope">{card.title}</h4>
              <p className="text-[9px] text-slate-400 font-bold mb-8 leading-relaxed uppercase tracking-tighter italic">{card.desc}</p>
              <div className="flex items-center gap-2">
                <button className="flex-1 bg-[#000229] text-white py-2.5 rounded-xl text-[8px] font-black uppercase tracking-widest hover:bg-[#FF9900] transition-colors shadow-sm">Export Trace</button>
                <button className="px-3 py-2 bg-[#f7f9fb] rounded-xl text-slate-400 hover:text-[#000229] hover:bg-white transition-all border border-[#f2f4f6]">
                  <span className="material-symbols-outlined text-base">download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏙️ Automated Scheduled Reports Registry */}
      <section className="bg-white rounded-[32px] shadow-sm border border-[#E0E3E5]/10 overflow-hidden text-left">
        <div className="p-8 flex justify-between items-center bg-[#f7f9fb]/50 border-b border-[#f2f4f6]">
          <div className="text-left">
            <h2 className="text-[11px] font-black text-[#000229] uppercase tracking-widest font-manrope">Scheduled Logic Traces</h2>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Active automated report distributions for stakeholders.</p>
          </div>
          <button className="px-4 py-2 text-[8px] font-black text-[#FF9900] bg-[#FF9900]/10 border border-[#FF9900]/20 rounded-xl uppercase tracking-widest">Archive Log</button>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#f7f9fb]/30 border-b border-[#f2f4f6]">
                <th className="px-8 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">Report Architect</th>
                <th className="px-8 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">Frequency Cycle</th>
                <th className="px-8 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">Stakeholder Units</th>
                <th className="px-8 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">Target Cycle</th>
                <th className="px-8 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Ops State</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f2f4f6]">
              {[
                { name: 'Monthly Headcount Variance', freq: '1st OF Cycle', next: 'Nov 1, 2024', status: 'Synchronized', icon: 'description' },
                { name: 'Performance Cycle Sync', freq: 'Quarterly', next: 'Dec 31, 2024', status: 'Synchronized', icon: 'trending_up' },
                { name: 'High Overtime Logic Alert', freq: 'Weekly Trace', next: 'Oct 28, 2024', status: 'Paused (Idle)', statusCol: 'bg-slate-50 text-slate-400', icon: 'warning' }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-[#f7f9fb] transition-all group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-[#FF9900] transition-colors text-base">{row.icon}</span>
                      <span className="font-black text-[10px] text-[#000229] uppercase font-manrope">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-[9px] font-bold text-slate-400 uppercase tracking-widest">{row.freq}</td>
                  <td className="px-8 py-5">
                    <div className="flex -space-x-1.5">
                      {[1, 2, 3].map(j => (
                        <div key={j} className={`w-5 h-5 rounded-lg border border-white bg-slate-${200 + j * 100} flex items-center justify-center text-[6px] font-black text-white shadow-sm ring-1 ring-[#000229]/5`}>U{j}</div>
                      ))}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-[9px] font-black text-[#000229] uppercase tracking-widest">{row.next}</td>
                  <td className="px-8 py-5 text-right">
                    <span className={`px-2.5 py-1 ${row.status === 'Synchronized' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-100 text-slate-400 border-slate-200'} text-[7px] font-black rounded-lg uppercase tracking-widest border shadow-sm`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Reports;
