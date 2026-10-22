import React from 'react';
import { PageId } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F33] text-slate-300 border-t border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Overview (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#1677FF] flex items-center justify-center shrink-0">
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
              <span className="text-lg font-bold tracking-tight text-white">
                AIM <span className="text-[#1677FF]">DISPATCHING</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional commercial truck dispatching for owner-operators, independent carriers, and growing fleets across the United States. We manage load booking, aggressive rate negotiation, broker compliance, and billing so drivers can stay focused on the road.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-[#12263F] border border-[#1E3A5F] px-3 py-1.5 rounded">
                <span>Standard Dispatch Fee:</span>
                <span className="text-white font-semibold">6% to 8% Per Load</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                  Dispatch Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors">
                  Pricing & Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('get-started')} className="text-[#1677FF] font-semibold hover:underline inline-flex items-center gap-1">
                  <span>Get Started Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Equipment Covered */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Equipment Handled
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Dry Van (53ft)</li>
              <li>Reefer (Temperature-Controlled)</li>
              <li>Flatbed (Standard Open Deck)</li>
              <li>Step Deck & Drop Deck</li>
              <li>Hotshot & Gooseneck</li>
              <li>Box Truck (24ft - 26ft)</li>
              <li>Power Only Units</li>
              <li>Straight Trucks & Sprinter Vans</li>
            </ul>
          </div>

          {/* Column 4: Contact Notice & Policy */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Carrier Back-Office
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have questions about onboarding, lane availability, or dispatching terms?
            </p>
            <div className="p-3 bg-[#12263F] border border-[#1E3A5F] rounded text-xs space-y-1.5">
              <p className="text-white font-medium">Contact Information</p>
              <p className="text-slate-400">
                Direct phone and email contact details will be published here soon. You can submit an inquiry via our contact form.
              </p>
            </div>
            <button
              onClick={() => handleNav('contact')}
              className="text-xs text-[#1677FF] hover:text-white font-medium transition-colors"
            >
              Open Contact Inquiry Form &rarr;
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1E3A5F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} AIM Dispatching. All rights reserved. Commercial Truck Dispatch Services.
          </p>
          <p className="text-slate-400 text-right">
            Offer availability and number of fee-free loads (1–3) may vary based on carrier equipment and service agreement.
          </p>
        </div>
      </div>
    </footer>
  );
};
