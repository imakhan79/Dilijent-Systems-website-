
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#333333] leading-tight">
            About <span className="text-ds-red">Dilijent Systems</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
            <p>
              At Dilijent Systems, we help businesses grow by combining smart technology 
              with real-world execution. We're not just a service provider — we're a long-term 
              partner focused on building solutions that work, scale, and deliver 
              measurable results.
            </p>
            
            <p>
              Our expertise spans three core areas: custom software development, 
              healthcare revenue cycle management (RCM), and digital marketing. From 
              building secure, scalable software and cloud solutions, to optimizing 
              healthcare billing and revenue workflows, to driving visibility and leads 
              through data-driven digital marketing — we help organizations move forward 
              with confidence.
            </p>

            <p>
              What sets us apart is our practical, results-first approach. We listen closely, 
              understand your challenges, and deliver solutions designed around your 
              goals — not generic templates. Whether you're a healthcare provider, startup, 
              or growing enterprise, our team brings clarity, accountability, and precision to 
              everything we do.
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 relative animate-in fade-in slide-in-from-right duration-700">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
              alt="Team discussing business strategy and data charts"
              className="w-full h-auto object-cover min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
