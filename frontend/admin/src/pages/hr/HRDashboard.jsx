import React from 'react';

const HRDashboard = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-black text-[#1e1e1e] tracking-tight uppercase font-manrope">HR Command Center</h2>
          <p className="text-slate-500 mt-2 font-bold text-[10px] uppercase tracking-widest">Talent acquisition & Leave orchestration node.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#000229] text-white px-6 py-3 rounded-xl font-black text-[8px] uppercase tracking-widest hover:opacity-90 shadow-lg">Add Personnel</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'New Joinees', val: '12', icon: 'person_add', col: 'text-blue-500' },
          { label: 'Leave Requests', val: '08', icon: 'event_busy', col: 'text-[#FF9900]' },
          { label: 'Attendance Recap', val: '94%', icon: 'how_to_reg', col: 'text-emerald-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-[#f2f4f6]">
            <span className={`material-symbols-outlined ${stat.col} text-3xl mb-4`}>{stat.icon}</span>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-4xl font-black text-[#000229] font-manrope">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-[32px] shadow-sm border border-[#f2f4f6]">
        <h3 className="text-[11px] font-black text-[#000229] uppercase tracking-tighter mb-6">Pending Operations</h3>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center justify-between p-4 bg-[#f7f9fb] rounded-2xl border border-[#f2f4f6]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <p className="text-[10px] font-black text-[#000229] uppercase">Application Sync #{i*42}</p>
                  <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Awaiting HR Approval</p>
                </div>
              </div>
              <button className="text-[#FF9900] font-black text-[8px] uppercase tracking-widest hover:underline">Process Trace</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
