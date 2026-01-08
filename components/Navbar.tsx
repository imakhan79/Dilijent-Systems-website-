import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services', hasDropdown: true },
    { name: 'BLOG', href: '#solutions' },
    { name: 'FAQS', href: '#faqs' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  const Logo = ({ isDark = false }) => (
    <div className="flex items-center gap-1">
      <div className="relative w-12 h-10 flex items-center justify-center">
        <svg viewBox="0 0 140 120" className="w-full h-full drop-shadow-md">
          <path 
            d="M50,25 C25,25 25,95 50,95" 
            fill="none" 
            stroke="#E13D2D" 
            strokeWidth="16" 
            strokeLinecap="round" 
          />
          <path 
            d="M75,30 L100,30 C110,30 110,48 100,48 L75,72 C65,72 65,90 75,90 L100,90" 
            fill="none" 
            stroke={isDark ? "#ffffff" : "#2B59C3"} 
            strokeWidth="16" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
      <div className="flex items-baseline">
        <span className={`text-[26px] font-black tracking-tighter ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>Dilijent</span>
        <span className={`text-[26px] font-light tracking-tighter ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>Systems</span>
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Utility Bar - White background */}
      <div className="bg-white h-20 border-b border-gray-100 hidden md:block">
        <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
          <div 
            className="cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo isDark={false} />
          </div>

          <div className="flex items-center gap-8 text-[15px] font-medium text-slate-700">
            <a href="tel:+15125754630" className="flex items-center gap-2 hover:text-ds-red transition-colors">
              <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.773-1.548a1 1 0 011.062-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+1 (512)-575-4630</span>
            </a>
            <a href="mailto:sales@dilijentsystems.com" className="flex items-center gap-2 hover:text-ds-red transition-colors">
              <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>sales@dilijentsystems.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Now WHITE background per request */}
      <div className="bg-white h-16 flex items-center shadow-[0_1px_0_rgba(0,0,0,0.05)] border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto w-full px-6 flex items-center justify-between md:justify-center">
          
          {/* Mobile Logo */}
          <div className="md:hidden flex items-center">
             <div className="relative w-10 h-8">
               <svg viewBox="0 0 140 120" className="w-full h-full">
                <path d="M50,25 C25,25 25,95 50,95" fill="none" stroke="#E13D2D" strokeWidth="16" strokeLinecap="round" />
                <path d="M75,30 L100,30 C110,30 110,48 100,48 L75,72 C65,72 65,90 75,90 L100,90" fill="none" stroke="#2B59C3" strokeWidth="16" strokeLinecap="round" />
               </svg>
             </div>
             <span className="text-[#1A1A1A] font-bold text-sm tracking-tighter ml-1">DILIJENTSYSTEMS</span>
          </div>

          <nav className="hidden md:flex items-center h-full">
            {menuItems.map((item) => (
              <div key={item.name} className="relative h-16 flex items-center group">
                <div className={`absolute top-0 left-0 w-full h-[4px] bg-ds-red transition-all duration-300 ${activeSection === item.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                <a 
                  href={item.href}
                  className={`px-8 h-full flex items-center gap-1.5 text-[14px] tracking-[0.1em] transition-all duration-300 ${
                    activeSection === item.name 
                      ? 'text-ds-red font-black' 
                      : 'text-slate-700 font-bold hover:text-ds-red'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4 mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </a>
              </div>
            ))}
          </nav>

          <button 
            className="md:hidden p-2 text-slate-800 hover:text-ds-red transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;