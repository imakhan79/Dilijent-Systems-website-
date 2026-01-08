import React from 'react';

const coreServices = [
  {
    title: "Information Technology Solutions",
    description: "We provide innovative IT solutions that empower your business to operate smarter and faster. From advanced software development to seamless system integration, our services are designed to enhance efficiency, reduce downtime, and give you a competitive edge in today's technology-driven world.",
    icon: (
      <svg className="w-12 h-12 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <circle cx="12" cy="12" r="3" strokeWidth={1} className="opacity-20" />
      </svg>
    )
  },
  {
    title: "Revenue Cycle Management",
    description: "Maximize your revenue and streamline financial operations with our comprehensive revenue cycle management solutions. We handle everything from billing and collections to reporting, helping your business improve cash flow, reduce errors, and maintain compliance—all while boosting overall profitability.",
    icon: (
      <svg className="w-12 h-12 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        <path d="M12 8v8M8 12h8" strokeWidth={1} className="opacity-20" />
      </svg>
    )
  },
  {
    title: "Digital Marketing Services",
    description: "Grow your brand and reach your audience with our result-oriented digital marketing strategies. We specialize in SEO, social media marketing, PPC campaigns, and content marketing that not only increase visibility but also drive meaningful engagement and measurable business growth.",
    icon: (
      <svg className="w-12 h-12 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 7v4m0 0l-1.5-1.5M12 11l1.5-1.5" className="opacity-20" />
      </svg>
    )
  }
];

const CoreServices: React.FC = () => {
  return (
    <div className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-black text-[#1A1A1A] mb-8 tracking-tight uppercase leading-none">
            OUR CORE PROFESSIONAL <span className="text-[#F1361D]">SERVICES</span>
          </h2>
          <div className="w-full max-w-[1200px] mx-auto h-[1px] bg-gray-200 mb-8"></div>
          <p className="max-w-[1100px] mx-auto text-[18px] md:text-[21px] text-[#1A1A1A] font-medium leading-[1.6] px-4">
            Our services span IT Solutions, Revenue Cycle Management, and Digital Marketing. For each domain, we deliver comprehensive solutions using the latest technologies and tools, designed to meet your business needs today and in the future.
          </p>
        </div>

        {/* Services Grid - WHITE CARDS instead of dark cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {coreServices.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white flex flex-col items-center text-center relative overflow-hidden group border-b-[6px] border-[#F1361D] shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-10 lg:p-14 flex flex-col items-center flex-1">
                <div className="mb-10 text-ds-red">
                  {service.icon}
                </div>
                
                <h3 className="text-[26px] lg:text-[28px] font-extrabold text-slate-900 mb-10 leading-snug tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-[16px] lg:text-[18px] leading-[1.8] font-medium mb-12">
                  {service.description}
                </p>
                
                <button className="mt-auto px-10 py-3.5 bg-[#F1361D] hover:bg-[#d42d18] text-white text-[17px] font-bold rounded-lg uppercase tracking-wider transition-colors shadow-lg">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreServices;