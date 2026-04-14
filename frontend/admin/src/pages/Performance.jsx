import React from 'react';

const Performance = () => {
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
          <h2 className="text-3xl font-black text-[#1e1e1e] tracking-tight font-manrope leading-none uppercase">Performance Management</h2>
          <p className="text-slate-500 mt-3 font-bold text-xs uppercase tracking-widest leading-none">Measure, analyze, and optimize talent growth across the organization.</p>
        </div>
        <button className="cta-gradient text-white px-6 py-3 rounded-xl flex items-center gap-2 font-black shadow-lg shadow-[#FF9900]/20 hover:scale-[1.02] active:scale-95 transition-all text-[10px] uppercase tracking-widest leading-none">
          <span className="material-symbols-outlined text-base">add</span>
          Initiate Review Cycle
        </button>
      </div>

      {/* 🍱 Bento Intelligence Matrix */}
      <div className="grid grid-cols-12 gap-6">
        {/* Quarterly Trend Hub */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[32px] p-8 shadow-sm border border-[#E0E3E5]/10 text-left">
          <div className="flex justify-between items-start mb-10 px-2">
            <div>
              <h3 className="text-xs font-black text-[#000229] uppercase tracking-tighter font-manrope">Quarterly Performance Trend</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Aggregate scores across all units (Q3 2023)</p>
            </div>
            <div className="flex gap-1.5 bg-[#f7f9fb] p-1 rounded-xl">
              <span className="px-3 py-1 text-[10px] font-black uppercase text-slate-400">Monthly Trace</span>
              <span className="px-3 py-1 text-[10px] font-black uppercase bg-white text-[#FF9900] shadow-sm rounded-lg tracking-widest">Q3 Forecast</span>
            </div>
          </div>
          {/* Performance Chart Architecture */}
          <div className="h-48 flex items-end justify-between gap-4 px-2">
            {[24, 32, 40, 28, 48, 56].map((h, i) => (
              <div key={i} className="w-full flex flex-col items-center group">
                <div className={`w-full rounded-t-xl transition-all duration-500 shadow-sm ${i === 5 ? 'bg-[#FF9900] group-hover:scale-105' : 'bg-[#000229]/5 group-hover:bg-[#000229]/10 shadow-inner'}`} style={{ height: `${h * 1.5}%` }}></div>
                <span className="mt-4 text-[7px] font-black text-slate-300 uppercase tracking-widest">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { label: 'Avg Score', val: '4.2', sub: '+12%', subCol: 'text-emerald-500' },
              { label: 'Completion', val: '88%', sub: 'On Time', subCol: 'text-slate-400' },
              { label: 'High Performers', val: '24', sub: 'Promotable', subCol: 'text-[#FF9900]' }
            ].map((node, i) => (
              <div key={i} className="p-4 bg-[#f7f9fb]/50 rounded-2xl border border-[#f2f4f6] text-left">
                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-1.5">{node.label}</p>
                <p className="text-xl font-black text-[#000229] font-manrope leading-none uppercase">
                   {node.val}
                   <span className={`text-[10px] font-black ml-1.5 ${node.subCol}`}>{node.sub}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Progress & AI Insights */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-[#000229] p-8 rounded-[32px] shadow-xl relative overflow-hidden text-left border border-white/5">
            <div className="relative z-10">
              <h3 className="text-sm font-black font-manrope uppercase tracking-widest mb-8 text-white">Logic Goals Sync</h3>
              <div className="space-y-6">
                {[
                  { label: 'Engineering Velocity', val: 92 },
                  { label: 'Customer Support SLA', val: 78 },
                  { label: 'Pipeline Growth', val: 64 }
                ].map((goal, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2.5">
                      <span className="text-slate-400">{goal.label}</span>
                      <span className="text-[#FF9900]">{goal.val}% SYNC</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-[#FF9900] shadow-sm shadow-[#FF9900]/50 transition-all duration-1000" style={{ width: `${goal.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-[#FF9900]/5 blur-3xl rounded-full"></div>
          </div>

          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-[#E0E3E5]/10 text-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-[#FF9900] text-3xl opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              <h3 className="text-sm font-black text-[#000229] uppercase tracking-widest font-manrope">Sync Analytics AI</h3>
            </div>
            <p className="text-xs text-slate-500 font-bold leading-relaxed mb-6 italic border-l-2 border-[#FF9900]/20 pl-4 uppercase tracking-tight">
              "Engineering team performance is up 12% following the shift to bi-weekly agile cycles. Consider rolling this out to Product Management."
            </p>
            <a className="text-[10px] font-black text-[#FF9900] hover:underline flex items-center gap-1 uppercase tracking-widest" href="#">
              Consult Full Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Upcoming Reviews Registry */}
        <div className="col-span-12 bg-white rounded-[32px] p-8 shadow-sm border border-[#E0E3E5]/10 text-left">
          <div className="flex justify-between items-center mb-8 px-2">
            <h3 className="text-[11px] font-black text-[#000229] uppercase tracking-tighter font-manrope">Upcoming Performance Cycles</h3>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#f2f4f6] rounded-xl text-[8px] font-black uppercase tracking-widest text-[#000229] hover:bg-[#f7f9fb] transition-all">
                <span className="material-symbols-outlined text-sm">filter_list</span> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-[#f2f4f6] rounded-xl text-[8px] font-black uppercase tracking-widest text-[#FF9900] hover:bg-[#FF9900]/5 transition-all">
                <span className="material-symbols-outlined text-sm">download</span> Export Trace
              </button>
            </div>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#f2f4f6]">
                  <th className="px-4 pb-4 font-black text-slate-300 uppercase tracking-[0.2em] text-[8px]">Personnel Unit</th>
                  <th className="px-4 pb-4 font-black text-slate-300 uppercase tracking-[0.2em] text-[8px]">Structural Hub</th>
                  <th className="px-4 pb-4 font-black text-slate-300 uppercase tracking-[0.2em] text-[8px]">Cycle Prototype</th>
                  <th className="px-4 pb-4 font-black text-slate-300 uppercase tracking-[0.2em] text-[8px]">Target Cycle</th>
                  <th className="px-4 pb-4 font-black text-slate-300 uppercase tracking-[0.2em] text-[8px]">Sync State</th>
                  <th className="px-4 pb-4 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f2f4f6]">
                {[
                  { name: 'Sarah Chen', role: 'System Engine', dept: 'Engineering', type: 'Quarterly Check-in', date: 'Oct 12, 2023', status: 'Urgent', statusCol: 'bg-rose-50 text-rose-500 border-rose-100', img: 'https://i.pravatar.cc/100?img=24' },
                  { name: 'Marcus Thompson', role: 'Market Hub', dept: 'Growth', type: 'Annual Appraisal', date: 'Oct 24, 2023', status: 'Scheduled', statusCol: 'bg-[#f7f9fb] text-[#000229] border-[#f2f4f6]', img: 'https://i.pravatar.cc/100?img=33' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#f7f9fb] transition-all group">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-xl bg-[#f2f4f6] overflow-hidden grayscale group-hover:grayscale-0 transition-all border border-white shadow-sm">
                          <img src={row.img} alt="" className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-[#000229] font-manrope uppercase leading-none">{row.name}</p>
                          <p className="text-[7px] text-slate-400 font-bold uppercase tracking-widest mt-1.5">{row.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[9px] font-bold text-[#000229] uppercase tracking-widest">{row.dept}</td>
                    <td className="px-4 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">{row.type}</td>
                    <td className="px-4 py-3 text-[9px] font-black text-[#000229] uppercase tracking-widest">{row.date}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${row.statusCol} text-[8px] font-black rounded-lg uppercase tracking-[0.2em] border shadow-sm`}>
                        <span className={`h-1 w-1 rounded-full ${row.status === 'Urgent' ? 'bg-rose-500 animate-pulse' : 'bg-[#000229]'}`}></span> {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-[#FF9900] font-black text-[8px] px-4 py-2 hover:bg-[#FF9900]/5 rounded-xl border border-transparent hover:border-[#FF9900]/10 opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest">Construct Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
