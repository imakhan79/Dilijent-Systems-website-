import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden bg-slate-950">
      {/* Dynamic Animated Background - Mesh Gradient Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-ds-red/10 rounded-full blur-[120px] animate-pulse transition-all duration-[8s] infinite"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse transition-all duration-[10s] infinite delay-1000"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-600/5 rounded-full blur-[100px] animate-pulse transition-all duration-[12s] infinite delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto text-center w-full">
        {/* Main Header Text */}
        <div className="mb-16 animate-in fade-in slide-in-from-top-10 duration-1000">
          <div className="inline-block mb-6 px-5 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md shadow-xl">
            <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Precision Engineered. Human Powered.</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight uppercase">
            <span className="text-ds-red drop-shadow-[0_0_20px_rgba(241,54,29,0.3)]">Technology</span> Built Right. <br />
            Healthcare <span className="text-ds-red drop-shadow-[0_0_20px_rgba(241,54,29,0.3)]">RCM</span> Done Better.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-slate-300 font-medium max-w-4xl mx-auto leading-relaxed px-4">
            Accelerating growth through <span className="text-white font-bold border-b-2 border-ds-red">Strategic Software Innovation</span> and <br className="hidden md:block" /> 
            <span className="text-white font-bold border-b-2 border-ds-red">Enterprise-Grade Revenue Management</span>.
          </p>
        </div>

        {/* The Two Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto px-4">
          
          {/* Pillar 1: Software Development */}
          <div className="hero-card rounded-[3rem] p-10 lg:p-16 flex flex-col items-center text-center animate-in fade-in slide-in-from-left-10 duration-1000 delay-200 group hover:border-ds-red/50 hover:bg-white/[0.03] transition-all relative">
            <div className="absolute top-8 left-10 text-white/5 font-black text-6xl tracking-tighter select-none transition-all group-hover:text-white/10">01</div>
            <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <svg className="w-12 h-12 text-ds-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-4xl font-black text-white mb-4 tracking-tight uppercase">Custom Software</h3>
            <p className="text-slate-400 text-lg font-medium mb-12 leading-relaxed">
              Full-stack Engineering, AI Integration & <br />Cloud-Native Architecture.
            </p>
            <button className="group/btn relative w-full overflow-hidden bg-ds-red hover:bg-[#ff4d3a] text-white text-xl font-black py-6 rounded-2xl transition-all shadow-[0_15px_30px_-5px_rgba(241,54,29,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(241,54,29,0.6)] active:scale-[0.98] flex items-center justify-center gap-3">
              <span>BUILD YOUR SYSTEM</span>
              <svg className="w-6 h-6 transform transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Pillar 2: Healthcare RCM */}
          <div className="hero-card rounded-[3rem] p-10 lg:p-16 flex flex-col items-center text-center animate-in fade-in slide-in-from-right-10 duration-1000 delay-200 group hover:border-ds-red/50 hover:bg-white/[0.03] transition-all relative">
            <div className="absolute top-8 left-10 text-white/5 font-black text-6xl tracking-tighter select-none transition-all group-hover:text-white/10">02</div>
            <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
              <svg className="w-12 h-12 text-ds-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-4xl font-black text-white mb-4 tracking-tight uppercase">Medical Billing</h3>
            <p className="text-slate-400 text-lg font-medium mb-12 leading-relaxed">
              Revenue Integrity, Certified Coding & <br />Aggressive AR Recovery.
            </p>
            <button className="group/btn relative w-full overflow-hidden bg-white hover:bg-slate-100 text-slate-900 text-xl font-black py-6 rounded-2xl transition-all shadow-[0_15px_30px_-5px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_40px_-5px_rgba(255,255,255,0.2)] active:scale-[0.98] flex items-center justify-center gap-3">
              <span>MAXIMIZE REVENUE</span>
              <svg className="w-6 h-6 transform transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;