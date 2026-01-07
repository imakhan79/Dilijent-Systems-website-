
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto glass rounded-[40px] p-8 md:p-16 border border-white/10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/5 blur-[100px] pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row gap-16 relative">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to lead the next revolution?</h2>
            <p className="text-slate-400 text-lg mb-12">
              Let's discuss how we can transform your operations with intelligent systems. 
              Our experts are ready to architect your future.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email us</p>
                  <p className="text-white font-medium">hello@dilijent.systems</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-purple-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Visit us</p>
                  <p className="text-white font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 glass bg-white/5 rounded-3xl p-8 border border-white/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Project Details</label>
                <textarea rows={4} className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
