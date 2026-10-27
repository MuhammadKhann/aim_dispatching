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
import { FreeLoadModal } from './components/FreeLoadModal';
import { useCountdownTimer } from './hooks/useCountdownTimer';
import { ShieldCheck, ArrowRight, Clock } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const countdownTimer = useCountdownTimer();

  // Ensure clean URL without hash anchors on load or reload
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  // Popup modal displays after 5 seconds of opening the website
  useEffect(() => {
    const popupTimer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('aim_welcome_modal_dismissed');
      if (!dismissed) {
        setIsModalOpen(true);
      }
    }, 5000);

    return () => clearTimeout(popupTimer);
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

  const handleCloseModal = () => {
    setIsModalOpen(false);
    sessionStorage.setItem('aim_welcome_modal_dismissed', 'true');
  };

  const handleClaimOffer = () => {
    setIsModalOpen(false);
    sessionStorage.setItem('aim_welcome_modal_dismissed', 'true');
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B1B2B] w-full max-w-full overflow-x-hidden pb-12 lg:pb-0">
      
      {/* Top Introductory Ribbon with 3-Day Backward Ticking Countdown Timer */}
      <div className="bg-[#081420] border-b border-[#162E4A] text-slate-300 text-[11px] sm:text-xs py-2 px-3 text-center w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="text-orange-500 font-semibold inline-flex items-center gap-1 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Limited-Time 3-Day Offer:</span>
          </span>
          
          <span className="text-slate-200 font-medium">
            Your First Load is <span className="text-orange-400 font-bold">100% Free</span> (Zero Dispatch Fees)
          </span>

          {/* Live backward ticking timer */}
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#0F243A] border border-[#23456E] text-orange-400 font-mono text-[11px] tabular-nums font-semibold shrink-0">
            <Clock className="w-3 h-3 text-orange-400" />
            <span>Ends In: {countdownTimer.formatted}</span>
          </span>

          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white hover:text-orange-400 font-semibold underline underline-offset-2 ml-1 inline-flex items-center gap-0.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Claim Free Load</span>
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

      {/* 5-Second Auto-Popup: Welcome Clients & Free First Load with Countdown Timer */}
      <FreeLoadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onClaim={handleClaimOffer}
        timer={countdownTimer}
      />

    </div>
  );
}
