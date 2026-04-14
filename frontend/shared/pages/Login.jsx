import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EntryButton, EntryInput } from '../components/EntryPrimitives';

const Login = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const roleMeta = {
    admin: { title: 'Admin Authority', icon: 'admin_panel_settings', next: '/dashboard/admin' },
    hr: { title: 'HR Infrastructure', icon: 'diversity_3', next: '/dashboard/hr' },
    manager: { title: 'Manager Analytics', icon: 'account_tree', next: '/dashboard/manager' },
    employee: { title: 'Personnel Node', icon: 'badge', next: '/dashboard/employee' }
  };

  const meta = roleMeta[role] || roleMeta.employee;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, role }),
      });

      const data = await response.json();

      if (response.ok) {
        // 🧹 Clear any old sessions (Admin/HR etc)
        localStorage.clear();

        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('user', JSON.stringify(data));
        
        setLoading(false);
        console.log(`✅ Login Success! Redirecting as: ${data.role}`);
        
        // 🎯 DIRECT HIT: Send to the role's specific dashboard
        navigate(`/${data.role}/dashboard`);
      } else {
        alert(data.message || 'Login failed');
        setLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Could not connect to the server. Make sure the backend is running.');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-[#f7f9fb]">
      <style>{`
        input::-ms-reveal, input::-ms-clear { display: none !important; }
        input::-webkit-contacts-auto-fill-button, input::-webkit-credentials-auto-fill-button { display: none !important; }
      `}</style>

      {/* 🏙️ Branding Sidebar */}
      <section className="md:w-[45%] bg-[#000229] relative flex flex-col justify-between p-8 md:p-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00668a]/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8a5100]/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#ff9900] rounded-xl flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
          </div>
          <span className="font-headline text-2xl font-black tracking-tighter text-white uppercase italic">FluidHR</span>
        </div>

        <div className="relative z-10 max-w-md text-left">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-[#ff9900] text-[10px] font-black tracking-[0.2em] uppercase">Security Protocol</span>
          <h1 className="font-headline text-5xl md:text-6xl font-black text-white leading-tight mb-6 uppercase italic">
            {meta.title}
          </h1>
          <p className="text-[#bfc3f3] text-lg font-bold leading-relaxed opacity-90 italic">
            Access your organizational architecture with precision and secure synergy.
          </p>
        </div>

        <div className="relative z-10 pt-12 text-left">
          <div className="flex gap-4 items-center">
            <div className="h-[1px] w-12 bg-white/10"></div>
            <span className="font-label text-[8px] font-black tracking-[0.3em] text-[#bfc3f3] uppercase opacity-40">System Architect v4.0</span>
          </div>
        </div>
      </section>

      {/* 🔐 Interaction Hub */}
      <section className="md:w-[55%] flex items-center justify-center relative p-6 md:p-8">
        <div className="w-full max-w-md bg-white rounded-[40px] shadow-[0px_48px_96px_rgba(0,2,41,0.08)] p-8 md:p-10 border border-[#E0E3E5]/10 relative z-10 text-left">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
               <span className="material-symbols-outlined text-[#ff9900] text-3xl">{meta.icon}</span>
               <h2 className="font-headline text-3xl font-black text-[#000229] uppercase tracking-tighter leading-none">{role} Auth</h2>
            </div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest opacity-60">Secure entry to your enterprise dashboard.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <EntryInput 
              label="Sync Identifier" 
              icon="mail" 
              type="email" 
              placeholder="" 
              required 
              autoComplete="off"
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
            
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="font-label text-xs font-semibold uppercase tracking-widest text-[#887361]">Access Cipher</label>
                <a className="text-[10px] font-black text-[#ff9900] hover:underline uppercase tracking-widest" href="#">Forgot Cipher?</a>
              </div>
              <div className="relative group">
                <EntryInput 
                  icon="lock" 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="" 
                  required 
                  autoComplete="new-password"
                  onChange={(e) => setFormData({...formData, password: e.target.value})} 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#ff9900] transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 px-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-[#dbc2ad] text-[#8a5100] focus:ring-[#ff9900]/40" />
              <label htmlFor="remember" className="text-[10px] text-slate-500 font-bold uppercase tracking-widest opacity-60">Persist session for 30 cycles</label>
            </div>

            <div className="pt-2">
              <EntryButton type="submit" disabled={loading}>
                {loading ? <span className="material-symbols-outlined animate-spin">sync</span> : (
                  <>
                    <span>Login as {role}</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </>
                )}
              </EntryButton>
            </div>
          </form>

          <div className="mt-8 pt-6 flex items-center justify-center gap-6 opacity-20 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">encrypted</span>
              <span className="font-label text-[8px] tracking-widest uppercase font-black">SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span className="font-label text-[8px] tracking-widest uppercase font-black">Identity Verified</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-[#ff9900]/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-[#00668a]/5 rounded-full blur-[80px]"></div>
        </div>
      </section>
    </main>
  );
};

export default Login;
