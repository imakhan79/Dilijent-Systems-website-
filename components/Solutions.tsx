import React from 'react';

const blogPosts = [
  {
    headerTitle: "Predictive Analytics Solutions: Turning Data Into Business Intelligence",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    date: "06 Jan 26",
    mainTitle: "Predictive Analytics Solutions: Turning Data Into Business Intelligence",
    description: "Predictive Analytics Solutions transform raw data into meaningful business intelligence by identifying patterns, forecasting outcomes, and supporting data-driven decision-making.",
  },
  {
    headerTitle: "Insights That Matter: Accounts Receivable Reporting for Smarter Financial Strategy",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    date: "02 Jan 26",
    mainTitle: "Insights That Matter: AR Reporting for Smarter Financial Strategy",
    description: "Accounts receivable reporting is more than just numbers—it's a tool for smarter financial strategy. By tracking and analyzing outstanding payments, businesses can improve cash flow, reduce risks, and make informed decisions that drive growth.",
    isAltTitle: true,
  },
  {
    headerTitle: "Why Eligibility Checks & Prior Authorization Matter in Home Health Billing",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    date: "01 Jan 26",
    mainTitle: "Why Eligibility Checks & Prior Authorization Matter in Home Health Billing",
    description: "Delays or denials often start with missed coverage and authorization. This post outlines how proactive eligibility checks and prior auth requests safeguard revenue and compliance. Begin with a patient whose services were delayed due to missing prior authorization.",
  },
  {
    headerTitle: "Maximizing ROI in Healthcare: The Power of Unified RCM Systems",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    date: "28 Dec 25",
    mainTitle: "Maximizing ROI in Healthcare: The Power of Unified RCM Systems",
    description: "Discover how integrating disparate billing processes into a single unified revenue cycle management system can increase collections by up to 25% and drastically reduce administrative overhead for multi-specialty clinics.",
  },
  {
    headerTitle: "Cybersecurity Trends 2026: Protecting Your Critical Digital Assets",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    date: "20 Dec 25",
    mainTitle: "Cybersecurity Trends 2026: Protecting Your Critical Digital Assets",
    description: "As threats evolve, so must your defense. We explore the latest trends in zero-trust architecture, AI-driven threat detection, and the importance of regular security audits for maintaining HIPAA and SOC2 compliance.",
    isAltTitle: true,
  },
  {
    headerTitle: "The Future of AI in SaaS: Moving Beyond Generic LLM Wrappers",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    date: "15 Dec 25",
    mainTitle: "The Future of AI in SaaS: Moving Beyond Generic LLM Wrappers",
    description: "Generic AI is no longer a differentiator. Learn how modern software development is shifting towards specialized, vertical AI agents that provide deep domain expertise and actionable workflows.",
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="py-24 px-6 bg-white" id="solutions">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block border-b-2 border-[#F1361D] pb-1 mb-6">
            <span className="text-[14px] font-black text-[#111] uppercase tracking-[0.1em]">LATEST BLOG</span>
          </div>
          <h2 className="text-[44px] md:text-[62px] font-black text-[#1A1A1A] tracking-tight uppercase leading-none">
            BLOGS <span className="text-[#F1361D]">CORNER</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="flex flex-col border-t-[4px] border-[#F1361D] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] h-full transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
              
              {/* 1. Header Title Area */}
              <div className="bg-white p-6 md:p-8 flex items-center justify-center text-center min-h-[110px] border-b border-gray-100">
                <h4 className="text-[#C2410C] font-extrabold text-[17px] leading-snug uppercase tracking-tight">
                  {post.headerTitle}
                </h4>
              </div>

              {/* 2. Image Area with WHITE Logo Overlay on Dark Background */}
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img 
                  src={post.image} 
                  alt={post.headerTitle} 
                  className="w-full h-full object-cover"
                />
                
                {/* Logo Overlay - Updated to WHITE 'S' shape on dark background for contrast */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#111121]/95 px-4 py-1.5 rounded-md shadow-md flex items-center gap-2 border border-white/10">
                   <div className="w-6 h-5">
                     <svg viewBox="0 0 140 120" className="w-full h-full">
                      <path d="M50,25 C25,25 25,95 50,95" fill="none" stroke="#E13D2D" strokeWidth="16" strokeLinecap="round" />
                      <path d="M75,30 L100,30 C110,30 110,48 100,48 L75,72 C65,72 65,90 75,90 L100,90" fill="none" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" />
                     </svg>
                   </div>
                   <div className="flex items-baseline">
                     <span className="text-[11px] font-black text-white tracking-tighter">Dilijent</span>
                     <span className="text-[11px] font-normal text-white tracking-tighter ml-0.5">Systems</span>
                   </div>
                </div>
              </div>

              {/* 3. Content Area */}
              <div className="bg-[#F8FAFC] p-8 md:p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-slate-500 mb-6 font-bold text-[15px]">
                   <svg className="w-5 h-5 text-[#F1361D]" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                   </svg>
                   <span>{post.date}</span>
                </div>

                <h3 className={`text-[23px] font-black mb-6 leading-[1.2] ${post.isAltTitle ? 'text-[#991B1B]' : 'text-[#1E293B]'}`}>
                  {post.mainTitle}
                </h3>

                <p className="text-slate-600 text-[16px] leading-[1.8] mb-8 font-medium line-clamp-4">
                  {post.description}
                </p>

                <div className="mt-auto flex items-center border-l-[3px] border-[#F1361D] pl-4">
                  <a href="#" className="text-[#F1361D] font-black text-[17px] hover:translate-x-1 transition-transform inline-block">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;