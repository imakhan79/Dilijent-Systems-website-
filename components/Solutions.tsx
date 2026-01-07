
import React from 'react';

const solutions = [
  {
    category: "Financial Services",
    title: "AI Risk Assessment Engine",
    image: "https://picsum.photos/seed/finance/800/600",
  },
  {
    category: "Logistics",
    title: "Autonomous Fleet Management",
    image: "https://picsum.photos/seed/logistics/800/600",
  },
  {
    category: "Healthcare",
    title: "Predictive Patient Insights",
    image: "https://picsum.photos/seed/health/800/600",
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="py-24 px-6 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Proven Solutions</h2>
            <p className="text-slate-400 text-lg">
              Explore how we've helped industry leaders redefine what's possible in their sectors.
            </p>
          </div>
          <button className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2 mb-2 group">
            Browse all case studies
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={sol.image} 
                  alt={sol.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">{sol.category}</p>
              <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{sol.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
