import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="font-body selection:bg-[#ff9900]/30 min-h-screen bg-[#f7f9fb] text-[#191c1e]">
      {/* 🧭 TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0px_24px_48px_rgba(0,2,41,0.06)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-slate-900 font-headline">FluidHR</div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="font-headline text-sm font-semibold tracking-tight text-slate-600 hover:text-slate-900 transition-all duration-300" href="#">Solutions</a>
            <a className="font-headline text-sm font-semibold tracking-tight text-[#ff9900] border-b-2 border-[#ff9900] pb-1 transition-all duration-300" href="#">Features</a>
            <a className="font-headline text-sm font-semibold tracking-tight text-slate-600 hover:text-slate-900 transition-all duration-300" href="#">Pricing</a>
            <a className="font-headline text-sm font-semibold tracking-tight text-slate-600 hover:text-slate-900 transition-all duration-300" href="#">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/select-role')} 
              className="font-headline text-sm font-semibold tracking-tight text-slate-600 hover:opacity-80 transition-all duration-300"
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate('/select-role')}
              className="bg-[#ff9900] text-white px-6 py-2.5 rounded-xl font-headline text-sm font-semibold tracking-tight hover:opacity-80 transition-all duration-300 shadow-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* 🚀 Hero Section */}
        <section className="relative overflow-hidden px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 text-left">
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#dfe0ff] text-[#525780] text-xs font-bold tracking-wider uppercase font-label">The Future of Workforce</span>
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-[1.1] tracking-tighter text-[#191c1e] mb-8">
                Smart HR <br/><span className="text-[#ff9900] bg-clip-text">Management</span> System
              </h1>
              <p className="text-lg md:text-xl text-[#575b85] max-w-lg mb-10 leading-relaxed font-medium">
                Orchestrate your entire organization with FluidHR. A seamless architecture designed for high-performance teams, from payroll to talent evolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/select-role')}
                  className="bg-[#ff9900] text-white px-8 py-4 rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all duration-300 scale-95 hover:scale-100 flex items-center justify-center gap-2"
                >
                  Get Started 
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="bg-[#575b85] text-white px-8 py-4 rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2">
                  View Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#ff9900]/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0px_48px_96px_rgba(0,2,41,0.08)] bg-white p-4">
                <img className="w-full rounded-[1.5rem] object-cover h-full aspect-[4/3]" alt="professional minimalist hr dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC61ofkPaB_2723AN6jYRw0GwRoQFQVzS-ZLGL5y-d22rr7MlEy-iwQ1zq9VxU7bVFN3KIK8tiElBSrUxjPVMbsaUX4Wpce_gPR8Wri5T-ouipqO0oyfW_PPsMIdIlDPhJgkH9qsgg_XWOOF3K_DjlslxtgnlQ25wCAI0E7ivcw81Q5XTClL-AgYcM_5sIYxn2U7_gbCiR646KE4yD8AA0qlAPdCm-dtQFMpxdBDBcbHurhsfiCDxsWItSYZlXJGZP2HXmmmt9uOQc"/>
              </div>
            </div>
          </div>
        </section>

        {/* 🍱 Feature Bento Grid */}
        <section className="px-8 py-24 max-w-7xl mx-auto bg-[#f2f4f6] rounded-[3rem]">
          <div className="text-center mb-20 text-left md:text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold font-headline text-[#191c1e] mb-4 tracking-tighter">Engineered for Excellence</h2>
            <p className="text-[#575b85] max-w-2xl mx-auto font-medium">Modern tools built into a unified workspace, eliminating the friction of traditional HR workflows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Attendance Tracking */}
            <div className="md:col-span-8 bg-white rounded-[2rem] p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 border border-[#eceef0]">
              <div className="text-left">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                  <span className="material-symbols-outlined text-3xl">schedule</span>
                </div>
                <h3 className="text-3xl font-bold font-headline mb-4 text-[#191c1e] tracking-tight">Attendance Tracking</h3>
                <p className="text-[#575b85] max-w-md font-medium leading-relaxed uppercase text-[11px] tracking-widest opacity-60">Real-time monitoring with geological fencing and automated shift reconciliation. Precision at every clock-in.</p>
              </div>
              <div className="mt-10 overflow-hidden rounded-2xl h-64 shadow-inner bg-[#f7f9fb]">
                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="attendance tracker interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGFMmmpvAHPzzXOar6Wwiw1jhPodchmSYGtT1w7J69IfMH8CqSr2ojWNXKwpXIAfQWEpv8Wa4v07T63K6bYrEJl4LShYPo5_Yxe97aw5xCKvr1YCCWA5cplJiqzSAuH6j4LcxBKSUaBpcnaOM1jSLZeE3IOh4SujOtS0xBFwobcRRe745Coo9tbDguAS_YyU4qdZXBscCjIjoSS56fZIFtuxHiEm1P1vfe9bdnMAS4rL_LuY0eZ3kK5DuO49Byo0P10zaAAzN6B_c"/>
              </div>
            </div>

            {/* Payroll */}
            <div className="md:col-span-4 bg-[#575b85] text-white rounded-[2rem] p-10 flex flex-col items-center text-center justify-center group hover:bg-[#13183d] transition-all duration-500 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#ff9900]"></div>
              <div className="w-20 h-20 rounded-full bg-[#ff9900] flex items-center justify-center mb-8 text-white shadow-lg">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
              </div>
              <h3 className="text-3xl font-bold font-headline mb-4 tracking-tight">Payroll</h3>
              <p className="text-[#dfe0ff] text-sm font-medium leading-relaxed">One-click global payments with automated tax compliance and dynamic benefits calculation.</p>
              <button className="mt-10 text-[#ff9900] font-black text-xs uppercase tracking-[0.2em] hover:underline">Explore Payroll Node</button>
            </div>

            {/* Performance */}
            <div className="md:col-span-4 bg-[#ff9900] text-white rounded-[2rem] p-10 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 shadow-xl">
              <h3 className="text-3xl font-bold font-headline tracking-tight">Performance</h3>
              <div className="my-10">
                <span className="material-symbols-outlined text-7xl opacity-40">insights</span>
              </div>
              <p className="font-bold text-sm uppercase tracking-widest leading-relaxed">Data-driven appraisal cycles and feedback loops that actually drive growth.</p>
            </div>

            {/* Employee Management */}
            <div className="md:col-span-8 bg-white rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-10 group border border-[#eceef0] hover:shadow-2xl transition-all duration-500">
              <div className="flex-1 text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600">
                  <span className="material-symbols-outlined text-3xl">group_work</span>
                </div>
                <h3 className="text-3xl font-bold font-headline mb-4 text-[#191c1e] tracking-tight">Employee Management</h3>
                <p className="text-[#575b85] font-medium leading-relaxed">A centralized source of truth for your most valuable asset. Scalable from 10 to 10,000 employees with precision orchestration.</p>
              </div>
              <div className="w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                <img className="w-full h-full object-cover" alt="diverse professional team" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbcoilddA-keRzAK6Ea92SbcV-ll5-eA1Ln4jttwwlwyhZkpKFbH7lixSQlIvGy5kyYm4joIfYEjc9M0UQpqOdsa-cpWNVhmCUyOgVAeqgBOu8eok9cBC07lNeBhzsQVlE4XH2E6hbiGh_Zi4bCnUgpZvGhgxMcJlQiCUcF-wOlEfgWVCTBE1pQfRdovAxRky_1bntABdU8zkSS_-OlSl1nV15i51Mtw6wOyIZ8Monnaz31TW5EtmzD93dAef78Z2wc5qIpaeKBaw"/>
              </div>
            </div>
          </div>
        </section>

        {/* 📢 CTA Section */}
        <section className="px-8 py-32 text-center">
          <div className="max-w-4xl mx-auto bg-[#000229] rounded-[3rem] py-24 px-10 relative overflow-hidden shadow-[0px_64px_128px_rgba(0,2,41,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00668a]/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold font-headline text-white mb-8 tracking-tighter italic">Ready to architect your team?</h2>
              <p className="text-[#bfc3f3] text-lg mb-12 max-w-xl mx-auto font-medium leading-relaxed">Join over 2,500+ modern companies using FluidHR to streamline their operations and scale faster.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  onClick={() => navigate('/select-role')}
                  className="bg-[#ff9900] text-white px-10 py-5 rounded-2xl font-headline font-black text-lg hover:opacity-90 shadow-[0px_24px_48px_rgba(255,153,0,0.35)] transition-all active:scale-95"
                >
                  Start Free Trial
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-headline font-black text-lg hover:bg-white/20 border border-white/10 transition-all">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 🦶 Footer */}
      <footer className="bg-[#000229] w-full py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 pb-12 mb-12 text-left">
            <div>
               <div className="text-2xl font-black text-white font-headline tracking-tighter italic mb-2">FluidHR</div>
               <p className="text-[#bfc3f3]/40 text-[10px] font-black uppercase tracking-[0.3em]">System Architect v4.0</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6">
              <a className="font-headline text-[10px] font-black tracking-[0.2em] uppercase text-[#bfc3f3] hover:text-[#ff9900] transition-colors" href="#">Privacy Protocol</a>
              <a className="font-headline text-[10px] font-black tracking-[0.2em] uppercase text-[#bfc3f3] hover:text-[#ff9900] transition-colors" href="#">Terms of Sync</a>
              <a className="font-headline text-[10px] font-black tracking-[0.2em] uppercase text-[#bfc3f3] hover:text-[#ff9900] transition-colors" href="#">Cookie Schema</a>
              <a className="font-headline text-[10px] font-black tracking-[0.2em] uppercase text-[#bfc3f3] hover:text-[#ff9900] transition-colors" href="#">Contact Source</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[#bfc3f3]/20 font-headline text-[10px] font-black tracking-[0.3em] uppercase">
            <div>© 2026 FluidHR Architect. Secure Enterprise Ecosystem.</div>
            <div className="mt-4 md:mt-0 flex gap-6">
               <span className="hover:text-white transition-colors cursor-pointer">Global Hub</span>
               <span className="hover:text-white transition-colors cursor-pointer">Node Status</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
