import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/employees', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setEmployees(res.data);
      } catch (err) {
        console.error('Fetch failed:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10 animate-fade-in text-left max-w-7xl mx-auto pb-12">
      <style>{`
        .font-manrope { font-family: 'Manrope', sans-serif; }
      `}</style>
      
      {/* 🏙️ Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 uppercase tracking-tight">
        <div>
          <h1 className="text-4xl font-black text-[#2E3A59] tracking-tighter leading-none mb-3 font-manrope">
            Personnel <span className="text-[var(--original-orange)]">Registry</span>
          </h1>
          <p className="text-slate-400 font-bold text-[9px] tracking-[0.4em] flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[var(--original-orange)]"></span>
            Node Identity Monitoring
          </p>
        </div>
        <Link 
          to="/admin/create-user" 
          className="bg-[#2E3A59] text-white px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-slate-900/10 hover:bg-[#1f2a44] transition-all flex items-center gap-3"
        >
          <span className="material-symbols-outlined text-sm">person_add</span>
          Initialize Node
        </Link>
      </div>

      {/* 🍱 Data Hub Card */}
      <div className="card !p-0 border-slate-200/60 overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
           <div className="flex items-center gap-4 bg-white px-5 py-2.5 rounded-2xl border border-slate-100 focus-within:border-[var(--original-orange)]/30 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[var(--original-orange)]">search</span>
              <input 
                type="text" 
                placeholder="Search node identifier..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none focus:outline-none text-[11px] font-black text-[#2E3A59] uppercase tracking-widest placeholder:text-slate-300"
              />
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-50">
                <th className="px-8 py-5 text-[9px] font-black text-[#2E3A59] uppercase tracking-widest">Serial</th>
                <th className="px-8 py-5 text-[9px] font-black text-[#2E3A59] uppercase tracking-widest">Personnel Node</th>
                <th className="px-8 py-5 text-[9px] font-black text-[#2E3A59] uppercase tracking-widest text-right">Ops Logic</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="3" className="text-center py-24 animate-pulse text-slate-300 text-[10px] font-black uppercase tracking-widest">Calibrating Node Matrix...</td></tr>
              ) : (
                filteredEmployees.map((emp, index) => (
                  <tr key={emp._id} className="border-b border-slate-50 hover:bg-[#F5F7FA]/70 transition-colors group">
                    <td className="px-8 py-6">
                      <span className="text-[11px] font-black text-slate-300">#{index + 1}</span>
                    </td>
                    <td className="px-8 py-6 text-left">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#2E3A59] font-black text-xs uppercase border border-white shadow-sm overflow-hidden">
                          {emp.profileImage ? <img src={`http://localhost:5000/${emp.profileImage}`} className="w-full h-full object-cover" /> : emp.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-[12px] font-black text-[#2E3A59] uppercase tracking-tight group-hover:text-[var(--original-orange)] transition-colors font-manrope">{emp.name}</h4>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{emp.employeeId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link to={`/admin/employees/edit/${emp._id}`} className="p-2.5 rounded-xl bg-white text-slate-400 hover:bg-[var(--original-blue)] hover:text-white transition-all shadow-sm border border-slate-100">
                          <span className="material-symbols-outlined text-base">edit_square</span>
                        </Link>
                        <button className="p-2.5 rounded-xl bg-white text-rose-300 hover:bg-rose-500 hover:text-white transition-all shadow-sm border border-slate-100">
                          <span className="material-symbols-outlined text-base">delete_forever</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        <div className="bg-slate-50/50 px-8 py-5 border-t border-slate-100 text-center">
           <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest scale-x-110">Architecture Integrity Trace Node: Active</p>
        </div>
      </div>
    </div>
  );
};

export default Employees;
