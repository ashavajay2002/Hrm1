import React from 'react';

const EmployeeDashboard = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-black text-[#1e1e1e] tracking-tight uppercase font-manrope">My Workspace</h2>
          <p className="text-slate-500 mt-2 font-bold text-[10px] uppercase tracking-widest">Personnel node activity & benefits trace.</p>
        </div>
        <div className="flex gap-2">
           <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[8px] font-black uppercase tracking-widest">Clocked In: 09:42 AM</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'My Attendance', val: '100%', icon: 'fingerprint', col: 'text-emerald-500' },
          { label: 'Active Tasks', val: '05', icon: 'task_alt', col: 'text-[#FF9900]' },
          { label: 'Leave Balance', val: '14', icon: 'vacation', col: 'text-blue-500' },
          { label: 'Upcoming Rev', val: '12d', icon: 'history_edu', col: 'text-purple-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[32px] shadow-sm border border-[#f2f4f6]">
            <span className={`material-symbols-outlined ${stat.col} text-2xl mb-4`}>{stat.icon}</span>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-3xl font-black text-[#000229] font-manrope">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[400px]">
        <div className="md:col-span-8 bg-white p-8 rounded-[40px] shadow-sm border border-[#f2f4f6] flex flex-col">
           <h3 className="text-[11px] font-black text-[#000229] uppercase tracking-widest mb-6 border-b border-[#f2f4f6] pb-4">Activity Timeline</h3>
           <div className="flex-1 space-y-6 overflow-y-auto pr-4 scrollbar-hide pt-4">
              {[
                { time: '10:15 AM', event: 'Task "Core Flux" updated to Sync status', icon: 'sync' },
                { time: '09:42 AM', event: 'Standard Entrance Protocol: Clocked In', icon: 'login' },
                { time: 'Yesterday', event: 'Leave Request for "May 12" Approved by Manager', icon: 'check_circle' }
              ].map((act, i) => (
                <div key={i} className="flex gap-4 group">
                   <div className="w-10 h-10 rounded-full bg-[#f7f9fb] flex items-center justify-center text-slate-400 group-hover:text-[#FF9900] transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-lg">{act.icon}</span>
                   </div>
                   <div className="flex-1">
                      <p className="text-[10px] font-black text-[#000229] uppercase">{act.event}</p>
                      <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{act.time}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
        
        <div className="md:col-span-4 bg-[#FF9900]/5 p-8 rounded-[40px] border border-[#FF9900]/10 flex flex-col justify-between">
           <div>
             <h3 className="text-[11px] font-black text-[#8a5100] uppercase tracking-widest mb-8">Quick Action Hub</h3>
             <div className="grid grid-cols-2 gap-3">
                {['Apply Leave', 'Time Log', 'Update KPI', 'Help Desk'].map(btn => (
                  <button key={btn} className="p-4 bg-white rounded-2xl text-[8px] font-black uppercase text-[#000229] border border-[#FF9900]/10 hover:shadow-md transition-all shadow-sm">
                    {btn}
                  </button>
                ))}
             </div>
           </div>
           <div className="pt-8">
              <div className="p-4 bg-[#000229] rounded-2xl">
                 <p className="text-white text-[9px] font-black uppercase mb-1">Benefit Sync Progress</p>
                 <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF9900]" style={{ width: '65%' }}></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
