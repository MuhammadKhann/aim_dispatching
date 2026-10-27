import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from './data/contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Ensure clean URL without hash anchors on load or reload
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  // Track active section for clean navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'why-choose', 'how-it-works', 'about', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler that preserves the static URL
  const scrollToSection = (sectionId: string) => {
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B1B2B] w-full max-w-full overflow-x-hidden pb-12 lg:pb-0">
      
      {/* Top Introductory Ribbon */}
      <div className="bg-[#081420] border-b border-[#162E4A] text-slate-300 text-[11px] sm:text-xs py-2 px-3 text-center w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="text-orange-500 font-semibold inline-flex items-center gap-1 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Introductory Offer:</span>
          </span>
          <span className="text-slate-300">
            Qualifying new carriers receive their first 1–3 loads with zero dispatch fees.
          </span>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-orange-400 font-semibold underline underline-offset-2 ml-1 inline-flex items-center gap-0.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Inquire Now</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Sticky Top Navigation Bar */}
      <Navbar onScrollTo={scrollToSection} activeSection={activeSection} />

      {/* Main Single-Page Sections Flow */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        
        {/* 1. Hero Section */}
        <HeroSection onGetStarted={() => scrollToSection('contact')} />

        {/* 2. Services Section (4 Core Services) */}
        <ServicesSection onSelectService={() => scrollToSection('contact')} />

        {/* 3. Why Choose AIM Dispatching Section (5 Practical Benefits) */}
        <WhyChooseSection />

        {/* 4. How It Works Section (3-Step Timeline) */}
        <HowItWorksSection onGetStarted={() => scrollToSection('contact')} />

        {/* 5. About Muhammad & AIM Dispatching Section */}
        <AboutSection onContactClick={() => scrollToSection('contact')} />

        {/* 6. FAQ Accordion Section */}
        <FaqSection />

        {/* 7. Contact Section & Pre-Filled Dispatch Inquiry Form */}
        <ContactSection />

      </main>

      {/* Clean 4-Column Logistics Footer */}
      <Footer onScrollTo={scrollToSection} />

      {/* Sticky Mobile Quick Action Bar (Under 15% sticky cap) */}
      <MobileQuickBar onGetStarted={() => scrollToSection('contact')} />

    </div>
  );
}
