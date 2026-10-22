import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { GetStartedPage } from './pages/GetStartedPage';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Clean initial hash if any exists to keep URL clean and static
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#0B1F33]">
      
      {/* Top Promotional Ribbon */}
      <div className="bg-[#12263F] border-b border-[#1E3A5F] text-slate-300 text-xs py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="text-[#1677FF] font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>New Carrier Special:</span>
          </span>
          <span>Qualifying new carriers can start with 1–3 fee-free loads.</span>
          <button
            onClick={() => handleNavigate('pricing')}
            className="text-white hover:text-[#1677FF] font-semibold underline underline-offset-2 ml-1 inline-flex items-center gap-0.5"
          >
            <span>View Offer Terms</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Sticky Navbar adhering to Top Bar Contract */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'pricing' && <PricingPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
        {currentPage === 'get-started' && <GetStartedPage onNavigate={handleNavigate} />}
      </main>

      {/* Corporate Logistics Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
