import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/departments', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setDepartments(res.data);
      } catch (err) {
        console.error('Fetch failed:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div className="space-y-10 animate-fade-in text-left max-w-7xl mx-auto pb-12">
      <style>{`
        .font-manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* 🏙️ Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 uppercase tracking-tight">
        <div>
          <h1 className="text-4xl font-black text-[#2E3A59] tracking-tighter leading-none mb-3 font-manrope">
            Unit <span className="text-[var(--original-orange)]">Architecture</span>
          </h1>
          <p className="text-slate-400 font-bold text-[9px] tracking-[0.4em] flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[var(--original-orange)]"></span>
            Defining Organizational Nodes
          </p>
        </div>
        <button className="bg-[#2E3A59] text-white px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-slate-900/10 hover:bg-[#1f2a44] transition-all flex items-center gap-3">
          <span className="material-symbols-outlined text-sm">account_tree</span>
          Initialize Unit
        </button>
      </div>

      {/* 🍱 Grid Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-full py-24 text-center animate-pulse text-slate-300 text-[10px] font-black uppercase tracking-widest italic">
            Mapping Node Structures...
          </div>
        ) : (
          departments.map((dept, i) => (
            <div key={dept._id} className="card group hover:shadow-hover border-slate-200/60 transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-12 -mt-12 group-hover:bg-[var(--original-orange)]/5 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#2E3A59] group-hover:bg-[var(--original-orange)] group-hover:text-white transition-all shadow-inner">
                  <span className="material-symbols-outlined text-2xl font-black">hub</span>
                </div>
                <div className="flex flex-col items-end">
                   <p className="text-[7px] font-black text-slate-300 uppercase tracking-widest">Node UID</p>
                   <p className="text-[10px] font-bold text-[#2E3A59] tracking-tighter overflow-hidden truncate max-w-[80px]">{dept._id.slice(-8)}</p>
                </div>
              </div>

              <h3 className="text-lg font-black text-[#2E3A59] uppercase tracking-tighter mb-1 font-manrope group-hover:text-[var(--original-orange)] transition-colors">{dept.depName}</h3>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-8">Structural Unit Protocol</p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 mt-2">
                 <div className="space-y-1">
                    <p className="text-[7px] font-black text-slate-300 uppercase tracking-widest">Active Personnel</p>
                    <p className="text-xs font-black text-[#2E3A59]">-- Nodes</p>
                 </div>
                 <div className="text-right space-y-1">
                    <p className="text-[7px] font-black text-slate-300 uppercase tracking-widest">Node Status</p>
                    <div className="flex items-center justify-end gap-1.5">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                       <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Online</span>
                    </div>
                 </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🚀 Visual Trace Footer */}
      <div className="pt-12 text-center opacity-30 pb-12">
        <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.6em] leading-loose">
          Org-Chart Logic Verified: trace.json <br />
          <span className="text-[var(--original-orange)]">Distributed Node Active</span>
        </p>
      </div>
    </div>
  );
};

export default Departments;
