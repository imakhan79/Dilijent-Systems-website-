import React from 'react';
import MenuCard from './MenuCard';

const techServices = [
  { name: 'Custom Software Development', active: true },
  { name: 'Mobile Application Design', active: false },
  { name: 'Cloud Infrastructure Setup', active: false },
  { name: 'AI & ML Integration', active: false },
  { name: 'Staff Augmentation', active: false },
];

const rcmServices = [
  { name: 'Medical Billing & Coding', active: true },
  { name: 'AR Recovery Management', active: false },
  { name: 'Provider Credentialing', active: false },
  { name: 'Practice Management', active: false },
  { name: 'Compliance Auditing', active: false },
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
            Select a service to learn how we verify success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          <div className="flex flex-col items-center lg:items-end">
            <div className="mb-8 text-center lg:text-right w-full max-w-md">
              <div className="inline-block p-4 bg-ds-red/5 rounded-2xl mb-4">
                 <svg className="w-10 h-10 text-ds-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Technology Solutions</h3>
              <p className="text-gray-500 font-medium italic">Verified agile delivery and engineering excellence.</p>
            </div>
            <MenuCard items={techServices} className="lg:mr-0" />
          </div>

          <div className="flex flex-col items-center lg:items-start">
             <div className="mb-8 text-center lg:text-left w-full max-w-md">
                <div className="inline-block p-4 bg-ds-red/5 rounded-2xl mb-4">
                   <svg className="w-10 h-10 text-ds-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Healthcare RCM</h3>
                <p className="text-gray-500 font-medium italic">Maximum revenue capture with zero compliance risk.</p>
              </div>
            <MenuCard items={rcmServices} className="lg:ml-0" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;