import React from 'react';

const ManagerDashboard = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-black text-[#1e1e1e] tracking-tight uppercase font-manrope">Manager Control</h2>
          <p className="text-slate-500 mt-2 font-bold text-[10px] uppercase tracking-widest">Team orchestration & performance telemetry.</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-[#f7f9fb] text-[#000229] px-5 py-2.5 rounded-xl font-black text-[8px] uppercase tracking-widest border border-[#f2f4f6]">Team Logic</button>
           <button className="bg-[#FF9900] text-white px-5 py-2.5 rounded-xl font-black text-[8px] uppercase tracking-widest shadow-lg shadow-[#FF9900]/20">New Task Arc</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Team Velocity', val: '86%', icon: 'offline_bolt', col: 'text-amber-500' },
          { label: 'Pending Reviews', val: '04', icon: 'rate_review', col: 'text-indigo-500' },
          { label: 'Active Task Sync', val: '18', icon: 'rocket_launch', col: 'text-rose-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-[#f2f4f6]">
            <span className={`material-symbols-outlined ${stat.col} text-3xl mb-4`}>{stat.icon}</span>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-4xl font-black text-[#000229] font-manrope">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#000229] p-8 rounded-[40px] shadow-xl text-white">
          <h3 className="text-[11px] font-black uppercase tracking-widest mb-6">Task Progress Trace</h3>
          <div className="space-y-6">
            {[
              { name: 'Core Engine Flux', val: 78 },
              { name: 'Market Hub Sync', val: 42 }
            ].map((task, i) => (
              <div key={i}>
                <div className="flex justify-between text-[8px] font-black uppercase tracking-widest mb-2">
                  <span className="text-slate-400">{task.name}</span>
                  <span className="text-[#FF9900]">{task.val}% SYNC</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF9900] shadow-sm shadow-[#FF9900]/30" style={{ width: `${task.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-[#f2f4f6]">
           <h3 className="text-[11px] font-black text-[#000229] uppercase tracking-widest mb-6">Active Team Personnel</h3>
           <div className="flex -space-x-3 overflow-hidden mb-6">
              {[1, 2, 3, 4, 5].map(i => (
                <img key={i} className="inline-block h-10 w-10 rounded-full ring-4 ring-white grayscale" src={`https://i.pravatar.cc/100?img=${i+20}`} alt="" />
              ))}
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-100 ring-4 ring-white text-[10px] font-black text-slate-400">+12</div>
           </div>
           <button className="w-full py-4 bg-[#f7f9fb] rounded-2xl text-[8px] font-black uppercase tracking-widest text-[#000229] hover:bg-[#eceef0] transition-all">Go to Team Hub</button>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
