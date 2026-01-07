import React, { useState } from 'react';
import MenuCard from './MenuCard';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services', hasDropdown: true },
    { name: 'BLOG', href: '#blog' },
    { name: 'FAQS', href: '#faqs' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md h-20 md:h-24 flex items-center border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex items-center justify-between">
        
        {/* Logo Section with refined white-background aesthetic */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 flex-shrink-0 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200 transition-transform group-hover:scale-105">
            <svg viewBox="0 0 120 120" className="w-7 h-7">
              <path d="M45,25 C20,25 20,95 45,95" fill="none" stroke="#F1361D" strokeWidth="12" strokeLinecap="round" />
              <text x="48" y="78" fill="white" style={{ font: 'italic bold 58px Inter, sans-serif' }}>S</text>
            </svg>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-xl font-black text-slate-900 tracking-tight leading-none">DILIJENT</span>
            <span className="text-[10px] font-bold text-ds-red tracking-[0.2em] leading-none mt-1">SYSTEMS</span>
          </div>
        </div>

        {/* Desktop Horizontal Menu - Updated for White Background */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <a 
                href={item.href}
                className={`flex items-center gap-2 text-[14px] font-extrabold tracking-[0.15em] transition-colors duration-200 ${
                  activeSection === item.name ? 'text-slate-900' : 'text-slate-500 hover:text-ds-red'
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <svg 
                    className={`w-3.5 h-3.5 mb-0.5 transition-transform duration-300 group-hover:rotate-180 ${activeSection === item.name ? 'text-ds-red' : 'text-slate-400'}`} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </a>
              {/* Active Underline Indicator - Matches Red Theme */}
              {activeSection === item.name && (
                <div className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-ds-red rounded-full animate-in fade-in zoom-in duration-300" />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle - Dark for Contrast */}
        <button 
          className="lg:hidden p-2 text-slate-900 hover:text-ds-red transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-slate-900/10 backdrop-blur-md z-[60] flex items-start justify-center p-6 animate-in fade-in duration-300">
          <div className="w-full animate-in slide-in-from-top-4 duration-500">
            <MenuCard 
              title="Navigation Menu"
              items={menuItems.map(item => ({
                name: item.name,
                active: activeSection === item.name
              }))}
              className="max-w-none shadow-2xl border-none"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;