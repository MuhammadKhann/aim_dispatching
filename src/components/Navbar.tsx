import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo, activeSection = 'hero' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#0B1B2B]/95 backdrop-blur-md shadow-md border-b border-[#162E4A]'
          : 'bg-[#0B1B2B] border-b border-[#162E4A]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 sm:gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded py-1 shrink-0 cursor-pointer"
            aria-label="AIM Dispatching Home"
          >
            <div className="w-8 h-8 rounded bg-orange-600 flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-white"
                aria-hidden="true"
              >
                <path d="M4 14l8-8 8 8" />
                <path d="M12 6v14" />
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap">
              AIM <span className="text-orange-500">DISPATCHING</span>
            </span>
          </button>

          {/* Zone 2: Desktop clean single-line nav links with subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors whitespace-nowrap shrink-0 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded cursor-pointer ${
                    isActive
                      ? 'text-white border-b-2 border-orange-500 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Desktop Primary Action & Direct Phone */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={CONTACT_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-[#162E4A] hover:bg-[#1E3A5F] rounded-md border border-[#23456E] transition-colors whitespace-nowrap"
              title="Call or Text (813) 355-9099"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

          {/* Mobile Right Controls: Compact Phone Dial + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href={CONTACT_INFO.phoneTel}
              aria-label="Call AIM Dispatching"
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded flex items-center gap-1.5 min-h-[38px] whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-[#162E4A] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col bg-[#0B1B2B]/98 backdrop-blur-md border-t border-[#162E4A] overflow-y-auto animate-in fade-in duration-200">
          <div className="px-5 py-6 space-y-4 flex-1">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1">
              Quick Navigation
            </div>
            
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors flex items-center justify-between min-h-[48px] cursor-pointer ${
                      isActive
                        ? 'bg-[#162E4A] text-white font-semibold'
                        : 'text-slate-300 hover:bg-[#162E4A]/60 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Contact Quick Card */}
            <div className="pt-4 border-t border-[#162E4A] space-y-3">
              <div className="p-4 bg-[#0F243A] border border-[#23456E] rounded-lg space-y-2.5">
                <div className="text-xs text-slate-400">Direct Dispatch Hotline:</div>
                <div className="text-base font-bold text-white tracking-wide">{CONTACT_INFO.phone}</div>
                <div className="text-xs text-slate-400">{CONTACT_INFO.email}</div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href={CONTACT_INFO.phoneTel}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded text-center"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={CONTACT_INFO.phoneSms}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-slate-200 bg-[#162E4A] hover:bg-[#1E3A5F] rounded border border-[#23456E] text-center"
                  >
                    <span>Text Us</span>
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-md transition-colors shadow-sm min-h-[48px] cursor-pointer"
              >
                <span>Request Dispatch Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
