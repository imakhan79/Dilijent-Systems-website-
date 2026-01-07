
import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            The Systems Thinking <br />
            <span className="text-gradient">Advantage</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2"> Holistic Integration</h4>
                <p className="text-slate-400">We don't just plug in AI; we redesign your ecosystem to thrive with intelligent feedback loops.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Scalable Foundations</h4>
                <p className="text-slate-400">Our solutions are built to grow with you, ensuring your infrastructure never becomes a bottleneck.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 font-bold">3</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Human-Centric Design</h4>
                <p className="text-slate-400">Technology should empower people. We focus on enhancing human capability, not just replacing it.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full"></div>
          <div className="relative glass rounded-3xl overflow-hidden border border-white/10 p-8">
            <div className="space-y-4">
              <div className="h-4 bg-white/5 rounded-full w-3/4 animate-pulse"></div>
              <div className="h-4 bg-white/5 rounded-full w-full animate-pulse delay-75"></div>
              <div className="h-4 bg-white/5 rounded-full w-1/2 animate-pulse delay-150"></div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="aspect-square glass rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
                </div>
                <div className="aspect-square glass rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20"></div>
                </div>
                <div className="aspect-square glass rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20"></div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20 text-blue-400 text-center font-bold">
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
