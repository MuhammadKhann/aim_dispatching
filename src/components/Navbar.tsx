import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowRight, PhoneCall, Mail, MessageSquare, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Prevent background scrolling when mobile menu is open
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

  return (
    <header className="sticky top-0 z-50 bg-[#0B1F33] border-b border-[#1E3A5F] shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 sm:gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] rounded-md py-1 shrink-0"
            aria-label="AIM Dispatching Home"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#1677FF] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                aria-hidden="true"
              >
                <path d="M4 14l8-8 8 8" />
                <path d="M12 6v14" />
              </svg>
            </div>
            <span className="text-base sm:text-xl font-bold tracking-tight text-white whitespace-nowrap">
              AIM <span className="text-[#1677FF]">DISPATCHING</span>
            </span>
          </button>

          {/* Zone 2: Desktop 6 concise single-line text links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm font-medium transition-colors whitespace-nowrap shrink-0 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] rounded ${
                    isActive
                      ? 'text-white border-b-2 border-[#1677FF]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Desktop Direct Contact + CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={CONTACT_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-[#152B42] hover:bg-[#1E3A5F] rounded-md border border-[#1E3A5F] transition-colors whitespace-nowrap"
              title="Call or Text AIM Dispatching"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>Call / Text: {CONTACT_INFO.phone}</span>
            </a>

            <button
              onClick={() => handleLinkClick('get-started')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: Quick Phone + CTA + Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            <a
              href={CONTACT_INFO.phoneTel}
              aria-label="Call AIM Dispatching"
              className="p-2 text-white bg-[#152B42] hover:bg-[#1E3A5F] rounded border border-[#1E3A5F] min-h-[38px] min-w-[38px] flex items-center justify-center shrink-0"
              title="Call (813) 355-9099"
            >
              <Phone className="w-4 h-4 text-[#1677FF]" />
            </a>

            <button
              onClick={() => handleLinkClick('get-started')}
              className="px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded transition-colors whitespace-nowrap min-h-[38px] flex items-center"
            >
              Get Started
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-[#152B42] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col bg-[#0B1F33]/98 backdrop-blur-md border-t border-[#1E3A5F] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-5 py-6 space-y-3 flex-1">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1">
              Website Navigation
            </div>
            <div className="space-y-1.5">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors flex items-center justify-between min-h-[48px] ${
                      isActive
                        ? 'bg-[#152B42] text-white font-semibold border-l-4 border-[#1677FF]'
                        : 'text-slate-300 hover:bg-[#152B42]/70 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </button>
                );
              })}
            </div>

            {/* Official Contact Direct Actions in Mobile Menu */}
            <div className="pt-4 border-t border-[#1E3A5F] space-y-2.5">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1">
                Official Direct Contact
              </div>

              <div className="p-3.5 bg-[#12263F] border border-[#1E3A5F] rounded-lg space-y-3">
                <div>
                  <div className="text-xs text-slate-400">Direct Dispatch Line:</div>
                  <div className="text-sm font-bold text-white tracking-wide">{CONTACT_INFO.phone}</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={CONTACT_INFO.phoneTel}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={CONTACT_INFO.phoneSms}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-[#152B42] hover:bg-[#1E3A5F] border border-[#1E3A5F] rounded transition-colors text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#1677FF]" />
                    <span>Send Text</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-[#1E3A5F]/70 text-xs text-slate-300 space-y-1">
                  <a
                    href={CONTACT_INFO.emailMailto}
                    className="flex items-center gap-2 text-slate-300 hover:text-white break-all transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                    <span>{CONTACT_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => handleLinkClick('get-started')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-base font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors shadow-sm min-h-[48px]"
              >
                <span>Carrier Onboarding Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="p-3 bg-[#12263F] border border-[#1E3A5F] rounded text-xs text-slate-400 space-y-1 text-center">
                <span className="text-white font-medium block">Standard Dispatch Fee: 6% to 8%</span>
                <span>Qualifying new carriers start with 1–3 fee-free loads.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
