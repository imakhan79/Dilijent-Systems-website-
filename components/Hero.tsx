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
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-[#fbfbfb]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-ds-red/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto text-center w-full flex flex-col items-center">
        {/* Main Header Text - Matches Screenshot Layout */}
        <div className="mb-12 animate-in fade-in slide-in-from-top-10 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black text-[#333] leading-[1.1] tracking-tight uppercase">
            <span className="text-[#F1361D]">TECHNOLOGY</span> BUILT RIGHT. <br />
            HEALTHCARE <span className="text-[#F1361D]">RCM</span> DONE BETTER.
          </h1>
          <p className="mt-8 text-2xl md:text-4xl text-slate-700 font-bold max-w-5xl mx-auto leading-relaxed px-4">
            Our Expertise Stands on Two Proven Pillars.
          </p>
        </div>

        {/* Horizontal Specialties Bar */}
        <div className="w-full overflow-x-auto no-scrollbar mb-20 px-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-4 py-2">
            {specialties.map((spec, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 bg-white border border-slate-100 px-6 py-4 rounded-2xl shadow-sm hover:shadow-md hover:border-ds-red/20 transition-all cursor-default group shrink-0"
              >
                <div className="text-[#F1361D] group-hover:scale-110 transition-transform">
                  {spec.icon}
                </div>
                <span className="text-sm font-extrabold text-[#333] whitespace-nowrap uppercase tracking-wider">{spec.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The Two Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-4 w-full">
          
          {/* Pillar 1: Software Development */}
          <div className="hero-card rounded-[2.5rem] p-12 lg:p-16 flex flex-col items-center text-center animate-in fade-in slide-in-from-left-10 duration-1000 delay-500 group transition-all relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-ds-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10">
                <div className="w-20 h-20 bg-ds-red rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-ds-red/20 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight uppercase">Custom Software</h3>
                <p className="text-slate-600 text-lg font-medium mb-10 leading-relaxed">
                  Full-stack Engineering, AI Integration & <br />Cloud-Native Architecture.
                </p>
                <button className="bg-[#111] hover:bg-black text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl uppercase tracking-widest text-sm">
                  Build Your System
                </button>
             </div>
          </div>

          {/* Pillar 2: Healthcare RCM */}
          <div className="hero-card rounded-[2.5rem] p-12 lg:p-16 flex flex-col items-center text-center animate-in fade-in slide-in-from-right-10 duration-1000 delay-500 group transition-all relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight uppercase">Healthcare RCM</h3>
                <p className="text-slate-600 text-lg font-medium mb-10 leading-relaxed">
                  Revenue Integrity, Certified Coding & <br />Aggressive AR Recovery.
                </p>
                <button className="bg-ds-red hover:bg-[#d42d18] text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl uppercase tracking-widest text-sm">
                  Maximize Revenue
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;