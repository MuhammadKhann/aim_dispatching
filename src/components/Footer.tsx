import React from 'react';
import { PageId } from '../types';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F33] text-slate-300 border-t border-[#1E3A5F] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        
        {/* 4 Balanced, Elegant Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#1E3A5F] w-full">
          
          {/* Column 1: Brand & Identity (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] rounded"
            >
              <div className="w-8 h-8 rounded bg-[#1677FF] flex items-center justify-center shrink-0">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-4 h-4 text-white"
                >
                  <path d="M4 14l8-8 8 8" />
                  <path d="M12 6v14" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AIM <span className="text-[#1677FF]">DISPATCHING</span>
              </span>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional truck dispatching services for owner-operators, independent carriers, and growing fleets across the United States. We manage freight booking, rate negotiations, and back-office compliance so you stay profitable on the road.
            </p>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1677FF] shrink-0" />
              <span>Carrier-first representation with 100% no forced dispatch.</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('pricing')} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Pricing & Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('faq')} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Equipment Covered (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Equipment Handled
            </div>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Dry Van (53ft Enclosed)</li>
              <li>Reefer (Temperature-Controlled)</li>
              <li>Flatbed & Step Deck</li>
              <li>Hotshot & Gooseneck</li>
              <li>Box Trucks (24ft – 26ft)</li>
              <li>Power Only Tractors</li>
              <li>Straight Trucks & Sprinters</li>
            </ul>
          </div>

          {/* Column 4: Operational Standards (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Operational Standards
            </div>
            
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#1677FF] shrink-0 mt-0.5" />
                <span><strong>6% to 8% per load:</strong> Transparent fee with no hidden add-ons.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#1677FF] shrink-0 mt-0.5" />
                <span><strong>1–3 loads fee-free:</strong> Introductory offer for qualifying new carriers.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#1677FF] shrink-0 mt-0.5" />
                <span><strong>Direct broker pay:</strong> Payments go straight to your carrier account.</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => handleNav('get-started')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] px-3.5 py-2 rounded transition-colors"
              >
                <span>Carrier Onboarding</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Clean, Quiet Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} AIM Dispatching. All rights reserved. Professional commercial truck dispatching.
          </p>
          <p className="text-slate-400 text-center sm:text-right">
            Offer availability and number of fee-free loads (1–3) may vary based on carrier equipment and agreement.
          </p>
        </div>

      </div>
    </footer>
  );
};
