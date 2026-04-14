import React from 'react';

const Payroll = () => {
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
          <h2 className="text-3xl font-black text-[#1e1e1e] tracking-tight font-manrope leading-none uppercase">Payroll & Compensation</h2>
          <p className="text-slate-500 mt-3 font-bold text-[10px] uppercase tracking-widest leading-none">Manage salary disbursements, tax liabilities, and compliance.</p>
        </div>
        <button className="cta-gradient text-white px-5 py-3 rounded-xl flex items-center gap-2 font-black shadow-lg shadow-[#FF9900]/20 hover:scale-[1.02] active:scale-95 transition-all text-[8px] uppercase tracking-widest leading-none">
          <span className="material-symbols-outlined text-base">play_circle</span>
          Run Payroll Cycle
        </button>
      </div>

      {/* 🍱 Financial Bento Matrix */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Cost Node */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[32px] p-8 shadow-sm border border-[#E0E3E5]/10 flex flex-col justify-between overflow-hidden relative group">
          <div className="relative z-10 text-left">
            <div className="flex justify-between items-start mb-10">
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 mb-2 font-manrope">Total Payroll Costs (MTD)</p>
                <h3 className="text-4xl font-black text-[#000229] font-manrope leading-none">$1,482,900.00</h3>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-[#FF9900]/10 text-[#FF9900] px-3 py-1 rounded-lg text-[9px] font-black flex items-center gap-1 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  +4.2%
                </span>
                <p className="text-[8px] text-slate-300 mt-2 uppercase font-black tracking-tighter italic">Vs Previous Cycle</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {[
                { label: 'Base Salaries', val: '$1,120,400' },
                { label: 'Tax & Insurance', val: '$284,500' },
                { label: 'Bonuses & Perks', val: '$78,000' }
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">{item.label}</p>
                  <p className="text-lg font-black text-[#000229] font-manrope">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
          </div>
        </div>

        {/* Sync Status Sidebar */}
        <div className="col-span-12 lg:col-span-4 bg-[#000229] text-white rounded-[32px] p-8 flex flex-col shadow-xl overflow-hidden relative border border-white/5">
          <h3 className="text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2 font-manrope">
            <span className="material-symbols-outlined text-[#FF9900] text-lg">pending_actions</span>
            Active Cycle Pulse
          </h3>
          <div className="space-y-6 flex-1 text-left">
            <div>
              <div className="flex justify-between text-[8px] font-black uppercase tracking-[0.2em] mb-3 text-slate-400 leading-none">
                <span>Verification Phase</span>
                <span>85% SYNC</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF9900] w-[85%] rounded-full shadow-sm shadow-[#FF9900]/50"></div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Time logs validated', sync: true },
                { label: 'Bonuses approved (34 items)', sync: true },
                { label: 'Calculating tax withholdings...', sync: false }
              ].map((step, i) => (
                <div key={i} className={`flex items-center space-x-3 text-[9px] font-black uppercase tracking-widest ${!step.sync ? 'animate-pulse text-[#FF9900]' : 'text-slate-300'}`}>
                  <span className={`material-symbols-outlined text-sm ${step.sync ? 'text-emerald-400' : 'text-[#FF9900]'}`} style={{ fontVariationSettings: step.sync ? "'FILL' 1" : "" }}>
                    {step.sync ? 'check_circle' : 'sync'}
                  </span>
                  <span>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-5 border-t border-white/10 text-left">
            <p className="text-[8px] text-slate-400 mb-1 uppercase font-black tracking-[0.2em]">Scheduled pay Day</p>
            <p className="text-lg font-black font-manrope uppercase">Sept 30, 2024</p>
          </div>
        </div>

        {/* History Cycle Table */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[32px] p-6 shadow-sm border border-[#E0E3E5]/10 text-left">
          <div className="flex justify-between items-center mb-8 px-2">
            <h3 className="text-[11px] font-black text-[#000229] uppercase tracking-tighter font-manrope">Payroll Cycle History</h3>
            <button className="text-[#FF9900] font-black text-[9px] hover:underline uppercase tracking-widest">Full Archive</button>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-[#f2f4f6]">
                  <th className="px-4 pb-4">Cycle Period</th>
                  <th className="px-4 pb-4">Units</th>
                  <th className="px-4 pb-4 text-right">Aggregate Net</th>
                  <th className="px-4 pb-4 text-center">Sync State</th>
                  <th className="px-4 pb-4 text-right">Ops</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f2f4f6]">
                {[
                  { period: 'Aug 01 - Aug 31, 2024', count: '412 Personnel', net: '$1,420,100', status: 'Disbursed' },
                  { period: 'Jul 01 - Jul 31, 2024', count: '408 Personnel', net: '$1,398,500', status: 'Disbursed' }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-[#f7f9fb] transition-colors">
                    <td className="px-4 py-3 font-black text-[#000229] text-[10px] font-manrope uppercase">{row.period}</td>
                    <td className="px-4 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">{row.count}</td>
                    <td className="px-4 py-3 text-right font-black text-[#000229] text-[10px] font-manrope">{row.net}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border border-emerald-100">Synchronized</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="material-symbols-outlined text-slate-300 hover:text-[#000229] transition-all text-base">download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Compliance Pillar */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[#E0E3E5]/10 text-left">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] font-black text-[#000229] uppercase tracking-widest font-manrope">Sync Compliance</h3>
              <span className="material-symbols-outlined text-[#FF9900]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
            <div className="space-y-3">
              {[
                { title: 'Tax Calculations', sub: 'In Progress for 2024', icon: 'receipt_long' },
                { title: 'Quarterly Filings', sub: 'Q3 due Oct 15 Sync', icon: 'account_balance' }
              ].map((c, i) => (
                <div key={i} className="bg-[#f7f9fb] p-4 rounded-2xl flex items-start gap-4 border border-transparent hover:border-[#E0E3E5]/20 hover:bg-white transition-all shadow-inner">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#FF9900] shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-lg">{c.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[#000229] uppercase leading-none font-manrope">{c.title}</p>
                    <p className="text-[7px] font-bold text-slate-400 mt-1 uppercase tracking-tight">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FF9900] text-white rounded-[32px] p-6 relative overflow-hidden group cursor-pointer shadow-xl shadow-[#FF9900]/20 border border-white/10 text-left">
            <div className="relative z-10">
              <p className="text-[8px] font-black uppercase tracking-[0.2em] mb-2 opacity-60">Unit Audit Trace</p>
              <h4 className="text-xl font-black mb-4 font-manrope uppercase tracking-tighter">Equality Matrix</h4>
              <p className="text-[10px] font-bold mb-6 leading-relaxed opacity-90">Organization is 98% synchronized with gender salary parity guidelines.</p>
              <button className="bg-[#000229] text-white font-black py-2 px-4 rounded-xl text-[8px] uppercase tracking-widest hover:scale-105 transition-all outline-none">Analyze Matrix</button>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[100px] opacity-10 group-hover:scale-110 transition-transform pointer-events-none">equalizer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
