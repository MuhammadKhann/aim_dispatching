import React from 'react';
import { PageId } from '../types';
import { ArrowRight, ShieldCheck, Check, Phone, Mail, Globe, MessageSquare, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

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

          {/* Column 4: Official Contacts & Onboarding (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Official Contact Desk
            </div>
            
            <ul className="space-y-3 text-xs text-slate-300">
              <li>
                <div className="text-slate-400 text-[11px] mb-0.5">Call or Text (24/7 Operations):</div>
                <div className="flex items-center gap-2">
                  <a
                    href={CONTACT_INFO.phoneTel}
                    className="inline-flex items-center gap-1.5 text-white hover:text-[#1677FF] font-semibold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <span>{CONTACT_INFO.phone}</span>
                  </a>
                  <a
                    href={CONTACT_INFO.phoneSms}
                    className="text-[11px] px-2 py-0.5 bg-[#152B42] text-slate-300 hover:text-white rounded border border-[#1E3A5F] transition-colors"
                    title="Send SMS Text"
                  >
                    SMS
                  </a>
                </div>
              </li>

              <li>
                <div className="text-slate-400 text-[11px] mb-0.5">Direct Dispatch Email:</div>
                <a
                  href={CONTACT_INFO.emailMailto}
                  className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>

              <li>
                <div className="text-slate-400 text-[11px] mb-0.5">Official Website:</div>
                <a
                  href={CONTACT_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#1677FF] hover:underline"
                >
                  <Globe className="w-3.5 h-3.5 shrink-0" />
                  <span>{CONTACT_INFO.websiteDisplay}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </li>

              <li className="pt-1 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                <span>6% to 8% fee &bull; 1–3 free loads offer</span>
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

        {/* Clean, Quiet Bottom Bar with Official Domain */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} AIM Dispatching. All rights reserved. Professional commercial truck dispatching.
            </p>
            <p className="text-slate-500 text-[11px]">
              Website: <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white underline">{CONTACT_INFO.website}</a> &bull; Call/Text: <a href={CONTACT_INFO.phoneTel} className="text-slate-400 hover:text-white">{CONTACT_INFO.phone}</a> &bull; Email: <a href={CONTACT_INFO.emailMailto} className="text-slate-400 hover:text-white">{CONTACT_INFO.email}</a>
            </p>
          </div>
          <p className="text-slate-500 text-center sm:text-right text-[11px] max-w-sm">
            Standard dispatch fee 6%–8%. Introductory 1–3 fee-free loads offer applies to qualifying new carriers upon agreement.
          </p>
        </div>

      </div>
    </footer>
  );
};
