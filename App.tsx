import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Solutions from './components/Solutions';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', name: 'HOME' },
        { id: 'about', name: 'ABOUT' },
        { id: 'services', name: 'SERVICES' },
        { id: 'solutions', name: 'BLOG' },
        { id: 'contact', name: 'CONTACT US' }
      ];
      
      const current = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust for higher navbar
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) setActiveSection(current.name);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white relative selection:bg-ds-red selection:text-white">
      <Navbar activeSection={activeSection} />
      
      <main className="pt-24">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>

        <Features />

        <section id="solutions">
          <Solutions />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
      
      {/* Floating AI Consultant UI */}
      <AIConsultant />
    </div>
  );
};

export default App;