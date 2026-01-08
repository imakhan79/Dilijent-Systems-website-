import React from 'react';
import MenuCard from './MenuCard';

const techServices = [
  { 
    name: 'Custom Software Development', 
    active: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  },
  { 
    name: 'Mobile Application Design', 
    active: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
  },
  { 
    name: 'Cloud Infrastructure Setup', 
    active: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
  },
  { 
    name: 'AI & ML Integration', 
    active: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  { 
    name: 'Staff Augmentation', 
    active: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  },
];

const rcmServices = [
  { 
    name: 'Medical Billing & Coding', 
    active: true,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  },
  { 
    name: 'AR Recovery Management', 
    active: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  },
  { 
    name: 'Provider Credentialing', 
    active: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  { 
    name: 'Practice Management', 
    active: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  },
  { 
    name: 'Compliance Auditing', 
    active: false,
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
  },
];

const Services: React.FC = () => {
  return (
    <div className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-ds-red font-black text-[10px] tracking-[0.4em] uppercase mb-4">Service Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-6">Execution at Every Level</h2>
          <p className="text-gray-600 text-lg font-medium leading-relaxed">
            Our teams are dedicated to delivering precision-engineered solutions across two primary domains. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          <div className="flex flex-col items-center lg:items-end">
            <div className="mb-8 text-center lg:text-right w-full max-w-md">
              <div className="inline-block p-4 bg-ds-red/5 rounded-2xl mb-4">
                 <svg className="w-10 h-10 text-ds-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Software Development</h3>
              <p className="text-gray-500 font-bold italic mb-4">Verified agile delivery and engineering excellence.</p>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Empower your business with future-proof applications. Our engineering team specializes in architecting high-performance, secure, and scalable digital products.
              </p>
            </div>
            <MenuCard items={techServices} className="lg:mr-0" />
          </div>

          <div className="flex flex-col items-center lg:items-start">
             <div className="mb-8 text-center lg:text-left w-full max-w-md">
                <div className="inline-block p-4 bg-ds-red/5 rounded-2xl mb-4">
                   <svg className="w-10 h-10 text-ds-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Medical Billing & RCM</h3>
                <p className="text-gray-500 font-bold italic mb-4">Maximum revenue capture with zero compliance risk.</p>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Transform your financial operations with precision-driven revenue cycle management. We combine industry-leading expertise with advanced analytics.
                </p>
              </div>
            <MenuCard items={rcmServices} className="lg:ml-0" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;