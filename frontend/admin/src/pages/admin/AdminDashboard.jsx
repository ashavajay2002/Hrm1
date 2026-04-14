import React from 'react';
import { 
  Users, 
  Building2, 
  CalendarClock, 
  Wallet, 
  TrendingUp,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Active Units', value: '1,284', trend: '+12%', icon: Users, color: 'bg-[var(--original-blue)]' },
    { title: 'Op. Departments', value: '14', trend: 'Stable', icon: Building2, color: 'bg-[var(--accent-gold)]' },
    { title: 'Sync Integrity', value: '98.2%', trend: '+0.4%', icon: Activity, color: 'bg-emerald-500' },
    { title: 'Monthly Burn', value: '$428k', trend: '-2.1%', icon: Wallet, color: 'bg-[#2E3A59]' },
  ];

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
  ];

  return (
    <div className="space-y-10 animate-fade-in text-left max-w-7xl mx-auto pb-12">
      {/* 🏙️ Optimized Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 uppercase tracking-tight">
        <div>
          <h1 className="text-4xl font-black text-[#2E3A59] tracking-tighter leading-none mb-3 font-manrope">
            Operational <span className="text-[var(--original-orange)]">Pulse</span>
          </h1>
          <p className="text-slate-400 font-bold text-[9px] tracking-[0.4em] flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[var(--original-orange)]"></span>
            Real-Time Node Intelligence
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <div className={`p-4 rounded-3xl border border-slate-100 flex items-center justify-between group transition-all duration-500 bg-white shadow-sm pr-6`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[var(--original-orange)] group-hover:bg-[var(--original-orange)] group-hover:text-white transition-all shadow-inner">
                  <span className="material-symbols-outlined text-2xl font-black">sensors</span>
                </div>
                <div>
                  <h4 className="text-[12px] font-black text-[#2E3A59] uppercase tracking-tighter font-manrope">Architecture Sync</h4>
                  <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mt-0.5">Optimal Latency</p>
                </div>
              </div>
              <div className="w-3 h-3 rounded-full bg-[var(--original-orange)] animate-ping opacity-75 ml-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 🍱 Bento Grid KPI Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="card group hover:shadow-hover border-slate-200/60 overflow-hidden relative">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${stat.color} text-white shadow-lg transition-transform group-hover:scale-110 duration-500`}>
                <stat.icon size={20} />
              </div>
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest ${stat.trend.startsWith('+') ? 'text-emerald-600 bg-emerald-50' : 'text-slate-400 bg-slate-50'}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.title}</p>
            <h3 className="text-3xl font-black text-[#2E3A59] font-manrope tracking-tighter">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* 📊 Main Analytics Section */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 card !p-8 border-slate-200/60">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-sm font-black text-[#2E3A59] uppercase tracking-[0.1em] font-manrope">Workforce Velocity</h3>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Personnel Scaling History</p>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
               <button className="px-4 py-2 bg-white text-[#2E3A59] rounded-lg text-[9px] font-black uppercase tracking-widest shadow-sm">6 Months</button>
               <button className="px-4 py-2 text-slate-400 rounded-lg text-[9px] font-black uppercase tracking-widest hover:text-[#2E3A59] transition-all">12 Months</button>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--original-blue)" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="var(--original-blue)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 9, fontWeight: 900, fill: '#94A3B8'}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', padding: '12px'}}
                  itemStyle={{fontSize: '10px', fontWeight: 900, color: 'var(--primary-color)', textTransform: 'uppercase'}}
                />
                <Area type="monotone" dataKey="value" stroke="var(--original-blue)" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="card !p-8 border-slate-200/60 bg-[#2E3A59] text-white overflow-hidden relative group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--original-orange)]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
             <h3 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 relative z-10">Unit Hierarchy Trace</h3>
             <div className="space-y-6 relative z-10">
                {[
                  { name: 'Engineering Nodes', count: '428', progress: 75 },
                  { name: 'Marketing Hub', count: '142', progress: 45 },
                  { name: 'Architecture Ops', count: '54', progress: 20 }
                ].map((dept, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span>{dept.name}</span>
                      <span className="text-[var(--accent-gold)]">{dept.count}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-[var(--accent-gold)] rounded-full transition-all duration-[2s]" style={{ width: `${dept.progress}%` }}></div>
                    </div>
                  </div>
                ))}
             </div>
             <button className="mt-10 w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[9px] font-black uppercase tracking-[0.15em] hover:bg-white/10 transition-all relative z-10">Expand Unit Trace</button>
          </div>

          <div className="card !p-8 border-slate-200/60 transition-all hover:bg-slate-50/50">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-rose-50 rounded-2xl text-rose-500">
                   <Clock size={20} strokeWidth={3} />
                </div>
                <div>
                   <h4 className="text-[11px] font-black text-[#2E3A59] uppercase tracking-tighter">Sync Latency</h4>
                   <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">4 Nodes Pending Trace</p>
                </div>
             </div>
             <div className="flex items-center gap-2 text-[var(--original-orange)] font-black text-[10px] uppercase animate-pulse">
                <Activity size={12} strokeWidth={4} />
                <span>Re-calculating Node Integrity</span>
             </div>
          </div>
        </div>
      </div>
      
      {/* 🚀 Visual Trace Bottom */}
      <div className="pt-12 text-center opacity-30 pb-12">
        <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.6em] leading-loose">
          Architecture Verified: 0.04s <br />
          <span className="text-[var(--original-orange)]">Distributed Node Active</span>
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
