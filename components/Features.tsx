import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <p className="text-ds-red font-black text-[10px] tracking-[0.4em] uppercase mb-4">Our Method</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            The Systems Thinking <br />
            <span className="text-ds-red">Advantage</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ds-red/10 flex items-center justify-center text-ds-red font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2"> Holistic Integration</h4>
                <p className="text-slate-500 font-medium">We don't just plug in AI; we redesign your ecosystem to thrive with intelligent feedback loops.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Scalable Foundations</h4>
                <p className="text-slate-500 font-medium">Our solutions are built to grow with you, ensuring your infrastructure never becomes a bottleneck.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900/10 flex items-center justify-center text-slate-900 font-bold">3</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Human-Centric Design</h4>
                <p className="text-slate-500 font-medium">Technology should empower people. We focus on enhancing human capability, not just replacing it.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-slate-200/40 blur-[100px] rounded-full"></div>
          <div className="relative bg-white border border-slate-100 shadow-2xl rounded-3xl overflow-hidden p-8">
            <div className="space-y-4">
              <div className="h-4 bg-slate-100 rounded-full w-3/4 animate-pulse"></div>
              <div className="h-4 bg-slate-100 rounded-full w-full animate-pulse delay-75"></div>
              <div className="h-4 bg-slate-100 rounded-full w-1/2 animate-pulse delay-150"></div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="aspect-square bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
                </div>
                <div className="aspect-square bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-ds-red/20"></div>
                </div>
                <div className="aspect-square bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-slate-900/20"></div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-ds-red/5 rounded-2xl border border-ds-red/10 text-ds-red text-center font-bold">
                Operational ROI: +45%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;