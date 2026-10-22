import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';

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

  return (
    <header className="sticky top-0 z-50 bg-[#0B1F33] border-b border-[#1E3A5F] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single text element wordmark with subtle forward-motion route arrow motif */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] rounded-md py-1"
            aria-label="AIM Dispatching Home"
          >
            <div className="w-8 h-8 rounded bg-[#1677FF] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 text-white"
                aria-hidden="true"
              >
                {/* Clean forward-motion route angle symbol */}
                <path d="M4 14l8-8 8 8" />
                <path d="M12 6v14" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0">
              AIM <span className="text-[#1677FF]">DISPATCHING</span>
            </span>
          </button>

          {/* Zone 2: 6 concise single-line text links */}
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

          {/* Zone 3: 1 primary action */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => handleLinkClick('get-started')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-[#152B42] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF]"
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
        <div className="lg:hidden bg-[#0B1F33] border-b border-[#1E3A5F] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-[#152B42] text-white font-semibold'
                    : 'text-slate-300 hover:bg-[#152B42]/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-[#1E3A5F]">
            <button
              onClick={() => handleLinkClick('get-started')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
