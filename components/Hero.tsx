import React from 'react';

const specialties = [
  { name: 'AI Strategy', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
  { name: 'Full-Stack Dev', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
  { name: 'Cloud Native', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg> },
  { name: 'Medical Billing', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
  { name: 'AR Recovery', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
  { name: 'Cybersecurity', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
];

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-black">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
          alt="Office collaboration" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
      </div>

      {/* Decorative Diagonal Pattern (bottom right) */}
      <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] opacity-15 pointer-events-none z-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="diagonal-stripe-combined" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="10" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-stripe-combined)" />
        </svg>
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto text-center w-full flex flex-col items-center">
        
        {/* Previous Content: Main Header Text */}
        <div className="mb-12 animate-in fade-in slide-in-from-top-10 duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-[84px] font-black text-white leading-[1.05] tracking-tight uppercase">
            <span className="text-[#F1361D]">TECHNOLOGY</span> BUILT RIGHT. <br />
            HEALTHCARE <span className="text-[#F1361D]">RCM</span> DONE BETTER.
          </h1>
        </div>

        {/* Previous Content: Horizontal Specialties Bar */}
        <div className="w-full overflow-x-auto no-scrollbar mb-16 px-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-4 py-2">
            {specialties.map((spec, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl shadow-sm backdrop-blur-sm hover:bg-white/10 transition-all cursor-default group shrink-0"
              >
                <div className="text-[#F1361D] group-hover:scale-110 transition-transform">
                  {spec.icon}
                </div>
                <span className="text-xs font-black text-white whitespace-nowrap uppercase tracking-widest">{spec.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Updated Content: 'Two Proven Pillars' Header */}
        <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-1000 delay-500">
          <h2 className="text-2xl md:text-[36px] text-white font-bold tracking-tight">
            Our Expertise Stands on Two Proven Pillars.
          </h2>
        </div>

        {/* The Two Pillars Grid (Latest Replication) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto px-4 w-full">
          
          {/* Pillar 1: Software Development Services */}
          <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-10 lg:p-12 flex flex-col items-center text-center animate-in fade-in slide-in-from-left-6 duration-1000 delay-700 group hover:bg-slate-900/80 transition-all h-full shadow-2xl">
             <div className="relative z-10 w-full flex flex-col items-center">
                {/* Blue Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#4f86f7] to-[#2B59C3] rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 transform group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                
                <h3 className="text-[22px] md:text-2xl font-bold text-white mb-3 tracking-tight">
                  Software Development Services
                </h3>
                
                <p className="text-white/70 text-base md:text-lg font-medium mb-10">
                  Custom App | AI/ML | Cloud
                </p>
                
                <button className="w-full bg-[#F1361D] hover:bg-[#d42d18] text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-red-600/20 text-base mt-auto">
                  Get Quote for Software Dev.
                </button>
             </div>
          </div>

          {/* Pillar 2: Medical Billing & RCM Services */}
          <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-10 lg:p-12 flex flex-col items-center text-center animate-in fade-in slide-in-from-right-6 duration-1000 delay-700 group hover:bg-slate-900/80 transition-all h-full shadow-2xl">
             <div className="relative z-10 w-full flex flex-col items-center">
                {/* Blue Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#4f86f7] to-[#2B59C3] rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 transform group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                
                <h3 className="text-[22px] md:text-2xl font-bold text-white mb-3 tracking-tight">
                  Medical Billing & RCM Services
                </h3>
                
                <p className="text-white/70 text-base md:text-lg font-medium mb-10">
                  Billing | Coding | AR | Credentialing
                </p>
                
                <button className="w-full bg-[#F1361D] hover:bg-[#d42d18] text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-red-600/20 text-base mt-auto">
                  Get Quote for RCM
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;