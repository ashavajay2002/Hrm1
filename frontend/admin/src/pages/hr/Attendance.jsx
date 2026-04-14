import React from 'react';

const Attendance = () => {
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

      {/* 🏙️ Presence Header Section */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-black text-[#1e1e1e] tracking-tight font-manrope leading-none uppercase">Real-time Presence</h2>
          <p className="text-slate-500 mt-3 font-bold text-[10px] uppercase tracking-widest leading-none italic">Monitoring floor activity and workforce synchronization.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#eceef0] text-[#191c1e] font-black rounded-lg hover:opacity-80 transition-all text-[8px] uppercase tracking-widest leading-none">
            <span className="material-symbols-outlined text-base">calendar_month</span>
            Monthly Report
          </button>
          <button className="cta-gradient text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-black shadow-lg shadow-[#FF9900]/20 hover:scale-[1.02] active:scale-95 transition-all text-[8px] uppercase tracking-widest leading-none">
            <span className="material-symbols-outlined text-base">file_download</span>
            Export CSV Matrix
          </button>
        </div>
      </div>

      {/* 🍱 Stats Bento Grid Intelligence */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        {[
          { label: 'Currently In', val: '142', sub: '+4% vs yesterday', icon: 'check_circle', color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Late Arrivals', val: '12', sub: 'Action Required', icon: 'pending', color: 'text-amber-500', bg: 'bg-amber-50' },
          { label: 'Absent Today', val: '8', sub: 'Logged Out', icon: 'person_off', color: 'text-rose-500', bg: 'bg-rose-50' },
          { label: 'Avg. Check-in', val: '08:42', sub: 'Optimal Range', icon: 'avg_time', color: 'text-blue-500', bg: 'bg-blue-50' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-[#E0E3E5]/10 flex flex-col justify-between h-36 relative overflow-hidden group hover:shadow-md transition-all">
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${stat.color === 'text-emerald-500' ? 'bg-emerald-500' : stat.color === 'text-amber-500' ? 'bg-amber-500' : stat.color === 'text-rose-500' ? 'bg-rose-500' : 'bg-blue-500'} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            <div className="flex justify-between items-start">
              <div className={`p-2 ${stat.bg} rounded-xl ${stat.color}`}>
                <span className="material-symbols-outlined text-lg">{stat.icon}</span>
              </div>
              {stat.sub === '+4% vs yesterday' && <span className="text-[7px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg uppercase tracking-widest">{stat.sub}</span>}
            </div>
            <div className="text-left">
              <span className="text-2xl font-black text-[#000229] font-manrope leading-none">{stat.val}</span>
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1.5 opacity-60">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 📊 Trends and Live Pulse Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
        {/* Monthly Trends Pillar */}
        <div className="lg:col-span-2 bg-white p-6 rounded-[32px] shadow-sm border border-[#E0E3E5]/10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-[11px] font-black text-[#000229] uppercase tracking-widest font-manrope">Presence Trends Matrix</h3>
            <div className="flex gap-1.5 bg-[#f7f9fb] p-1 rounded-xl">
              <button className="px-3 py-1 text-[8px] font-black uppercase bg-white text-[#000229] rounded-lg shadow-sm tracking-widest leading-none">Daily Trace</button>
              <button className="px-3 py-1 text-[8px] font-black uppercase text-slate-400 hover:text-[#000229] transition-all tracking-widest leading-none">Weekly</button>
            </div>
          </div>
          {/* Synthetic Chart Architecture */}
          <div className="relative h-48 w-full flex items-end gap-2 px-2 pb-2">
            {[60, 75, 85, 95, 80, 70, 90, 82, 65, 88].map((h, i) => (
              <div key={i} className={`flex-1 transition-all rounded-t-lg relative group ${i === 3 ? 'bg-[#FF9900]' : 'bg-[#000229]/5 hover:bg-[#000229]/10'}`} style={{ height: `${h}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#000229] text-white text-[7px] font-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest z-10">{h}% sync</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-2 text-[7px] font-black text-slate-300 uppercase tracking-[0.2em] border-t border-[#f2f4f6] pt-4">
            <span>Cycle Start (01)</span>
            <span>05</span>
            <span>Mid (15)</span>
            <span>25</span>
            <span>Cycle End (30)</span>
          </div>
        </div>

        {/* Live Pulse Log Pillar */}
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-[#E0E3E5]/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[11px] font-black text-[#000229] uppercase tracking-widest font-manrope">Live Log Synapse</h3>
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Alex Rivers', dept: 'Neural Hub', type: 'Check-in', time: '08:45 AM', color: 'text-emerald-500', img: 'https://i.pravatar.cc/100?img=11' },
              { name: 'Sarah Chen', dept: 'System Engine', type: 'Check-in', time: '08:52 AM', color: 'text-emerald-500', img: 'https://i.pravatar.cc/100?img=24' },
              { name: 'Marcus Thorne', dept: 'Market Hub', type: 'Late (12m)', time: '09:12 AM', color: 'text-amber-500', img: 'https://i.pravatar.cc/100?img=33' },
              { name: 'James Wilson', dept: 'Finance Hub', type: 'Check-out', time: '09:15 AM', color: 'text-slate-300', img: 'https://i.pravatar.cc/100?img=59' }
            ].map((log, i) => (
              <div key={i} className="flex items-center gap-3 group cursor-pointer p-1 rounded-xl hover:bg-[#f7f9fb] transition-all">
                <div className="w-8 h-8 rounded-xl overflow-hidden shrink-0 border border-white shadow-sm">
                  <img src={log.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-[9px] font-black text-[#000229] uppercase tracking-tight group-hover:text-[#FF9900] transition-colors truncate">{log.name}</h4>
                  <p className="text-[7px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{log.dept}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-[8px] font-black block uppercase tracking-widest ${log.color}`}>{log.type}</span>
                  <span className="text-[7px] text-slate-300 font-black uppercase mt-0.5">{log.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2.5 text-[8px] font-black text-[#000229] hover:bg-[#000229] hover:text-white rounded-xl transition-all border border-[#000229]/10 uppercase tracking-widest">View Detailed Matrix</button>
        </div>
      </div>

      {/* 🏙️ Comprehensive Registry Table */}
      <div className="mt-8 bg-white rounded-[32px] shadow-sm border border-[#E0E3E5]/10 overflow-hidden text-left">
        <div className="px-8 py-5 flex justify-between items-center bg-[#f7f9fb]/50 border-b border-[#E0E3E5]/10">
          <h3 className="text-[11px] font-black text-[#000229] uppercase tracking-widest font-manrope">Personnel Sync History</h3>
          <div className="flex gap-4">
            <select className="bg-transparent border-none text-[8px] font-black uppercase tracking-widest text-[#000229] outline-none">
              <option>All Intelligence Hubs</option>
              <option>Neural Hub</option>
              <option>System Engine</option>
            </select>
            <button className="p-1.5 hover:bg-white rounded-lg transition-all text-slate-300 hover:text-[#000229] border border-transparent hover:border-[#E0E3E5]/10">
              <span className="material-symbols-outlined text-base">filter_list</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-[#f2f4f6]">
                <th className="px-8 py-4">Personnel Unit</th>
                <th className="px-8 py-4">Sync Cycle</th>
                <th className="px-8 py-4">Check-in Terminal</th>
                <th className="px-8 py-4">Check-out Terminal</th>
                <th className="px-8 py-4">Aggregate Vol</th>
                <th className="px-8 py-4">Sync State</th>
                <th className="px-8 py-4 text-right">Ops</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f2f4f6]">
              {[
                { name: 'Elena Rodriguez', date: 'Oct 24, 2023', in: '08:30 AM', out: '05:30 PM', vol: '09h 00m', status: 'Optimal', statusColor: 'bg-emerald-50 text-emerald-600' },
                { name: 'David Kim', date: 'Oct 24, 2023', in: '09:15 AM', out: '06:15 PM', vol: '09h 00m', status: 'Latency (Late)', statusColor: 'bg-amber-50 text-amber-600' },
                { name: 'Sophie Miller', date: 'Oct 24, 2023', in: '08:45 AM', out: '05:45 PM', vol: '09h 00m', status: 'Optimal', statusColor: 'bg-emerald-50 text-emerald-600' }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-[#f7f9fb] transition-all group">
                  <td className="px-8 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#f2f4f6]" />
                      <span className="text-[10px] font-black text-[#000229] uppercase font-manrope">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">{row.date}</td>
                  <td className={`px-8 py-3 text-[10px] font-black ${row.status.includes('Latency') ? 'text-amber-600' : 'text-[#000229]'}`}>{row.in}</td>
                  <td className="px-8 py-3 text-[9px] font-bold text-slate-400">{row.out}</td>
                  <td className="px-8 py-3 text-[10px] font-black text-[#000229]">{row.vol}</td>
                  <td className="px-8 py-3">
                    <span className={`px-2.5 py-1 ${row.statusColor} text-[8px] font-black rounded-lg uppercase tracking-widest whitespace-nowrap`}>{row.status}</span>
                  </td>
                  <td className="px-8 py-3 text-right">
                    <button className="text-slate-300 hover:text-[#000229] transition-all"><span className="material-symbols-outlined text-base">more_vert</span></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-4 bg-[#f7f9fb]/20 flex justify-center border-t border-[#f2f4f6]">
          <button className="text-[8px] font-black text-slate-300 uppercase tracking-[0.2em] hover:text-[#000229] transition-all flex items-center gap-2 italic">
            Load Deeper Sync Trace
            <span className="material-symbols-outlined text-base">keyboard_arrow_down</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
