import React from 'react';

const solutions = [
  {
    category: "Financial Services",
    title: "AI Risk Assessment Engine",
    image: "https://images.unsplash.com/photo-1551288049-bbbda540d3b9?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Logistics",
    title: "Autonomous Fleet Management",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Healthcare",
    title: "Predictive Patient Insights",
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=800",
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="py-24 px-6 bg-slate-50/50" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl text-left">
            <p className="text-ds-red font-black text-[10px] tracking-[0.4em] uppercase mb-4">Case Studies</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Proven Solutions</h2>
            <p className="text-slate-600 font-medium text-lg">
              Explore how we've helped industry leaders redefine what's possible in their sectors.
            </p>
          </div>
          <button className="text-slate-900 font-bold hover:text-ds-red transition-colors flex items-center gap-2 mb-2 group uppercase tracking-widest text-sm">
            Browse all case studies
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-xl border border-white">
                <img 
                  src={sol.image} 
                  alt={sol.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-ds-red text-[10px] font-black uppercase tracking-[0.2em] mb-2">{sol.category}</p>
              <h4 className="text-2xl font-black text-slate-900 group-hover:text-ds-red transition-colors leading-tight">{sol.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;