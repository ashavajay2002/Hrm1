import React from 'react';

const TimeTracker = () => {
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
          <h2 className="text-3xl font-black text-[#1e1e1e] tracking-tight font-manrope leading-none uppercase">Time Tracker</h2>
          <p className="text-slate-500 mt-3 font-bold text-[10px] uppercase tracking-widest leading-none">Monitoring productivity for the week of Oct 24 – Oct 30</p>
        </div>
        <button className="cta-gradient text-white px-6 py-3 rounded-xl flex items-center gap-2 font-black shadow-lg shadow-[#FF9900]/20 hover:scale-[1.02] active:scale-95 transition-all text-[8px] uppercase tracking-widest leading-none">
          <span className="material-symbols-outlined text-base">play_arrow</span>
          Start Live Timer
        </button>
      </div>

      {/* 🍱 Bento Telemetry Matrix */}
      <div className="grid grid-cols-12 gap-6">
        {/* Weekly Activity Hub */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[32px] p-8 shadow-sm border border-[#E0E3E5]/10 relative overflow-hidden text-left">
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h3 className="text-[11px] font-black text-[#000229] uppercase tracking-tighter font-manrope">Weekly Activity Pulse</h3>
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Daily breakdown of logged sync units</p>
            </div>
            <div className="flex items-center bg-[#f7f9fb] rounded-xl p-1">
              <button className="px-3 py-1 text-[8px] font-black uppercase rounded-lg bg-white text-[#000229] shadow-sm tracking-widest leading-none">Weekly</button>
              <button className="px-3 py-1 text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Monthly</button>
            </div>
          </div>
          <div className="flex items-end justify-between h-40 gap-4 px-2">
            {[65, 80, 90, 55, 70, 20, 15].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group">
                <div className="w-full bg-[#f2f4f6] rounded-t-xl relative h-full flex flex-col justify-end overflow-hidden">
                  <div className="bg-[#000229]/5 w-full h-[65%] rounded-t-lg transition-all group-hover:bg-[#000229]/10" style={{ height: `${h}%` }}></div>
                  <div className="bg-[#000229] w-full absolute bottom-0 rounded-t-lg transition-all group-hover:scale-y-105 origin-bottom" style={{ height: `${h * 0.6}%` }}></div>
                </div>
                <span className="mt-4 text-[7px] font-black text-slate-300 uppercase tracking-widest">{['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Billability Gauge Sidebar */}
        <div className="col-span-12 lg:col-span-4 bg-[#000229] rounded-[32px] p-8 text-white flex flex-col relative overflow-hidden border border-white/5 shadow-xl">
          <div className="relative z-10 text-left">
            <h3 className="text-[11px] font-black font-manrope uppercase tracking-widest mb-1">Billability Ratio</h3>
            <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest opacity-60">Efficiency against total cycle units</p>
          </div>
          <div className="relative flex-1 flex items-center justify-center z-10 mt-4">
            <div className="relative w-36 h-36">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="72" cy="72" fill="transparent" r="64" stroke="rgba(255,255,255,0.05)" strokeWidth="10"></circle>
                <circle cx="72" cy="72" fill="transparent" r="64" stroke="#FF9900" strokeDasharray="402" strokeDashoffset="100.5" strokeLinecap="round" strokeWidth="10" className="animate-dash"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black font-manrope">75%</span>
                <span className="text-[7px] font-black tracking-[0.2em] uppercase text-slate-400 mt-1">Target 80%</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 relative z-10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-left">
              <p className="text-slate-400 text-[8px] uppercase font-black tracking-widest mb-1">Billable</p>
              <p className="text-base font-black font-manrope">32.5 hrs</p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-left">
              <p className="text-slate-400 text-[8px] uppercase font-black tracking-widest mb-1">Internal</p>
              <p className="text-base font-black font-manrope text-[#FF9900]">10.2 hrs</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9900]/10 blur-3xl rounded-full -mr-10 -mt-10"></div>
        </div>

        {/* Project Breakdown Registry */}
        <div className="col-span-12 bg-white rounded-[32px] shadow-sm border border-[#E0E3E5]/10 overflow-hidden text-left">
          <div className="px-8 py-5 border-b border-[#f2f4f6] flex items-center justify-between bg-[#f7f9fb]/50">
            <h3 className="text-[11px] font-black text-[#000229] uppercase tracking-tighter font-manrope">Project Telemetry Breakdown</h3>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 text-[8px] font-black uppercase tracking-widest text-slate-400 hover:text-[#000229] transition-all">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                <span>Filter Trace</span>
              </button>
              <button className="flex items-center space-x-2 text-[8px] font-black uppercase tracking-widest text-[#FF9900] hover:underline">
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Export Trace</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#f7f9fb]/30 border-b border-[#f2f4f6]">
                  <th className="px-8 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">Project Architect</th>
                  <th className="px-8 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">Sync State</th>
                  <th className="px-8 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">Collaborators</th>
                  <th className="px-8 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">Logged Time</th>
                  <th className="px-8 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">Budget Sync</th>
                  <th className="px-8 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Ops</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f2f4f6]">
                {[
                  { name: 'Artemis Phase II', client: 'Starlight Corp', status: 'Active', color: 'emerald', time: '142.5h', fill: 75, budget: '$12,400', barCol: '#000229' },
                  { name: 'Internal Audit Q3', client: 'Compliance', status: 'Pending', color: 'amber', time: '28.0h', fill: 25, budget: '$3,200', barCol: '#FF9900' },
                  { name: 'Cloud Migration', client: 'Nexus Cloud', status: 'Paused', color: 'slate', time: '89.2h', fill: 65, budget: '$18,500', barCol: '#000229' }
                ].map((p, i) => (
                  <tr key={i} className="hover:bg-[#f7f9fb] transition-colors group">
                    <td className="px-8 py-4">
                      <div className="flex items-center">
                        <div className="w-1.5 h-8 rounded-full mr-4" style={{ backgroundColor: p.barCol }}></div>
                        <div className="overflow-hidden">
                          <p className="text-[10px] font-black text-[#000229] uppercase leading-none font-manrope">{p.name}</p>
                          <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 leading-none">Client: {p.client}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <span className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest bg-${p.color}-100 text-${p.color}-700 border border-${p.color}-200`}>{p.status}</span>
                    </td>
                    <td className="px-8 py-4">
                      <div className="flex -space-x-2">
                        {[1, 2].map(j => (
                          <img key={j} className="w-7 h-7 rounded-xl border-2 border-white object-cover shadow-sm" src={`https://i.pravatar.cc/100?img=${i + j + 20}`} alt="" />
                        ))}
                        <div className="w-7 h-7 rounded-xl bg-[#f2f4f6] border-2 border-white flex items-center justify-center text-[7px] font-black text-slate-400 uppercase tracking-tighter shadow-sm">+3</div>
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <p className="text-[10px] font-black text-[#000229] font-manrope">{p.time}</p>
                      <div className="w-20 h-1 bg-[#f2f4f6] rounded-full mt-2 overflow-hidden shadow-inner">
                        <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${p.fill}%`, backgroundColor: p.barCol }}></div>
                      </div>
                    </td>
                    <td className="px-8 py-4 text-[10px] font-black text-[#000229] font-manrope">{p.budget}</td>
                    <td className="px-8 py-4 text-right">
                      <button className="p-1.5 hover:bg-white rounded-lg transition-all text-slate-300 hover:text-[#000229] border border-transparent hover:border-[#E0E3E5]/10">
                        <span className="material-symbols-outlined text-base">more_horiz</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-8 py-4 bg-[#f7f9fb]/20 flex items-center justify-between border-t border-[#f2f4f6]">
            <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest italic">Tracing 3 OF 12 Active Project Units</p>
            <div className="flex space-x-2">
              <button className="p-1 hover:bg-white rounded-lg transition-all text-slate-300 hover:text-[#000229]"><span className="material-symbols-outlined text-base">chevron_left</span></button>
              <button className="p-1 hover:bg-white rounded-lg transition-all text-slate-300 hover:text-[#000229]"><span className="material-symbols-outlined text-base">chevron_right</span></button>
            </div>
          </div>
        </div>
      </div>

      {/* 🏙️ Macro Focus Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Time Units', val: '42h 15m', icon: 'schedule', trend: '+12% vs last cycle', color: 'text-[#000229]', bg: 'bg-[#000229]/5' },
          { label: 'Efficiency Cycle', val: '94.2%', icon: 'bolt', trend: 'Optimal Static', color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Collaborative Time', val: '12h 45m', icon: 'group_work', trend: '-2% Adjustment', color: 'text-[#FF9900]', bg: 'bg-[#FF9900]/5' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-[24px] shadow-sm border border-[#E0E3E5]/10 text-left">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 ${stat.bg} ${stat.color} rounded-xl shadow-sm border border-white`}>
                <span className="material-symbols-outlined text-base">{stat.icon}</span>
              </div>
              <span className={`text-[7px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-lg border ${stat.trend.includes('+') ? 'text-emerald-600 bg-emerald-50 border-emerald-100' : 'text-slate-400 bg-slate-50 border-slate-100'}`}>{stat.trend}</span>
            </div>
            <h4 className="text-slate-300 text-[8px] font-black uppercase tracking-[0.2em] mb-1.5">{stat.label}</h4>
            <p className="text-2xl font-black text-[#000229] font-manrope leading-none uppercase">{stat.val}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TimeTracker;
