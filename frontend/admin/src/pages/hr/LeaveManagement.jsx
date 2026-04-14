import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeaveManagement = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      // 📡 Fetching the Global Leave Matrix via Proxy Tunnel
      const response = await axios.get('/api/leaves', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeaves(response.data);
    } catch (err) {
      console.error('🔥 Fetch Error:', err);
      setError('Unable to sync with the Leave Protocol node.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`/api/leaves/${id}`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // 🔄 Re-sync the matrix after approval/rejection
      fetchLeaves();
    } catch (err) {
      console.error('🔥 Update Error:', err);
    }
  };

  const pendingCount = leaves.filter(l => l.status === 'pending').length;

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

      {/* 🏙️ Summary Header Section */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-black text-[#1e1e1e] tracking-tight font-manrope leading-none uppercase">Leave Protocol</h2>
          <p className="text-slate-500 mt-3 font-bold text-[10px] uppercase tracking-widest leading-none">Database Synchronization: Active</p>
        </div>
        <button className="cta-gradient text-white px-6 py-3 rounded-2xl flex items-center gap-3 font-black shadow-lg shadow-[#FF9900]/20 hover:scale-[1.02] active:scale-95 transition-all text-[9px] uppercase tracking-widest leading-none">
          <span className="material-symbols-outlined text-base">add_circle</span>
          Create New Policy
        </button>
      </div>

      {/* 🍱 Dynamic Bento Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-1 bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 space-y-5">
          <div className="w-12 h-12 bg-[#FF9900]/10 rounded-2xl flex items-center justify-center text-[#FF9900]">
            <span className="material-symbols-outlined text-2xl">group</span>
          </div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 leading-none font-manrope">Presence Pulse</p>
            <h3 className="text-2xl font-black text-[#000229] font-manrope leading-none">Syncing...</h3>
          </div>
          <div className="w-full bg-slate-50 rounded-full h-1.5 overflow-hidden">
            <div className="bg-[#FF9900] h-full rounded-full shadow-sm" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className="md:col-span-1 bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 space-y-5">
          <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
            <span className="material-symbols-outlined text-2xl">pending_actions</span>
          </div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 leading-none font-manrope">Pending Nodes</p>
            <h3 className="text-2xl font-black text-[#000229] font-manrope leading-none">{pendingCount}</h3>
          </div>
          <p className={`text-[8px] font-black flex items-center uppercase tracking-widest italic ${pendingCount > 0 ? 'text-rose-600' : 'text-slate-300'}`}>
            <span className="material-symbols-outlined text-[10px] mr-2">priority_high</span>
            {pendingCount > 0 ? 'NEEDS ATTENTION' : 'QUEUE EMPTY'}
          </p>
        </div>

        <div className="md:col-span-2 bg-[#000229] p-6 rounded-[32px] shadow-2xl flex items-center justify-between text-white overflow-hidden relative border border-white/5">
          <div className="relative z-10 space-y-3 text-left">
            <h3 className="text-xl font-black font-manrope uppercase tracking-tighter">Organizational Quota</h3>
            <p className="text-slate-400 text-[11px] font-bold max-w-xs leading-relaxed uppercase tracking-tight">The 2026 Leave Protocol is established. All personnel units are entitled to 24 annual synchronization days.</p>
            <button className="mt-4 text-[#FF9900] font-black text-[10px] flex items-center hover:underline uppercase tracking-widest">
              Review Protocol Details <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </button>
          </div>
          <span className="material-symbols-outlined text-[#FF9900]/10 text-9xl absolute -right-4 -bottom-4">calendar_apps</span>
        </div>
      </div>

      {/* 📊 Personnel Request Hub */}
      <div className="lg:col-span-2 bg-white rounded-[48px] shadow-sm border border-slate-50 overflow-hidden">
        <div className="p-8 flex justify-between items-center bg-[#f7f9fb]/50 border-b border-slate-50">
          <div>
             <h2 className="text-sm font-black font-manrope text-[#000229] uppercase tracking-tighter">Personnel Request Matrix</h2>
             <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-2">{leaves.length} Synchronized Requests</p>
          </div>
          <button className="p-2.5 bg-white shadow-sm border border-slate-100 rounded-xl transition-colors text-slate-400 hover:text-[#000229]">
            <span className="material-symbols-outlined text-lg">filter_list</span>
          </button>
        </div>

        {loading ? (
          <div className="p-24 flex flex-col items-center justify-center gap-4 text-slate-200">
             <div className="w-10 h-10 border-4 border-[#ff9900]/20 border-t-[#ff9900] rounded-full animate-spin"></div>
             <p className="text-[9px] font-black uppercase tracking-[0.3em]">Decoding Matrix...</p>
          </div>
        ) : error ? (
           <div className="p-24 text-rose-500 font-black uppercase tracking-widest text-[10px] text-center">{error}</div>
        ) : leaves.length === 0 ? (
           <div className="p-24 text-slate-300 font-black uppercase tracking-widest text-[10px] text-center">No active requests in the matrix.</div>
        ) : (
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left">
              <thead className="bg-[#f7f9fb]/30 text-[9px] uppercase tracking-[0.2em] text-slate-400 font-black border-b border-slate-50">
                <tr>
                  <th className="px-10 py-5">Personnel Node</th>
                  <th className="px-8 py-5">Type</th>
                  <th className="px-8 py-5">Deployment Window</th>
                  <th className="px-8 py-5">Sync State</th>
                  <th className="px-10 py-5 text-right">Ops</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {leaves.map((leave) => (
                  <tr key={leave._id} className="hover:bg-[#f7f9fb]/50 transition-all duration-300 group">
                    <td className="px-10 py-5">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-[10px] font-black text-[#000229]/20 border border-white shadow-sm shrink-0">
                          {leave.user?.profile?.firstName?.substring(0, 1) || 'N'}{leave.user?.profile?.lastName?.substring(0, 1) || 'A'}
                        </div>
                        <div className="overflow-hidden text-left">
                          <p className="text-[11px] font-black text-[#000229] font-manrope uppercase leading-none truncate">{leave.user?.profile?.firstName} {leave.user?.profile?.lastName}</p>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-2 leading-none">{leave.user?.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1.5 bg-[#f7f9fb] rounded-xl text-[9px] font-black text-[#000229] uppercase tracking-widest border border-slate-100">{leave.leaveType}</span>
                    </td>
                    <td className="px-8 py-5">
                      <p className="text-[10px] font-black text-[#000229] leading-none uppercase">
                        {new Date(leave.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(leave.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                      <p className="text-[8px] font-black text-[#ff9900] uppercase tracking-widest mt-2 leading-none">
                        {Math.ceil((new Date(leave.endDate) - new Date(leave.startDate)) / (1000 * 60 * 60 * 24))} Cycles
                      </p>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`flex items-center text-[9px] font-black uppercase tracking-widest ${leave.status === 'pending' ? 'text-amber-500' : leave.status === 'approved' ? 'text-emerald-500' : 'text-rose-500'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-2.5 ${leave.status === 'pending' ? 'bg-amber-500 animate-pulse' : leave.status === 'approved' ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-rose-500'}`}></span>
                        {leave.status}
                      </span>
                    </td>
                    <td className="px-10 py-5 text-right">
                      {leave.status === 'pending' ? (
                        <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all">
                          <button 
                            onClick={() => handleStatusUpdate(leave._id, 'rejected')}
                            className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-all border border-transparent hover:border-rose-100"
                          >
                            <span className="material-symbols-outlined text-sm">close</span>
                          </button>
                          <button 
                            onClick={() => handleStatusUpdate(leave._id, 'approved')}
                            className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-xl transition-all border border-transparent hover:border-emerald-100 shadow-sm shadow-emerald-500/10"
                          >
                            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          </button>
                        </div>
                      ) : (
                        <button className="opacity-0 group-hover:opacity-100 p-2 text-slate-300 hover:text-slate-500 transition-all"><span className="material-symbols-outlined text-sm">history</span></button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="flex justify-center pt-12">
         <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] text-center max-w-lg leading-loose opacity-60">
           CENTRAL LEAVE PROTOCOL ESTABLISHED. DATA INTEGRITY VERIFIED VIA ADMIN NODE.
         </p>
      </div>
    </div>
  );
};

export default LeaveManagement;
