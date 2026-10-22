import React from 'react';
import { PageId } from '../types';
import { FaqAccordion } from '../components/FaqAccordion';
import { NewCarrierOfferSection } from '../components/NewCarrierOfferSection';
import { HelpCircle, ArrowRight } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO HEADER */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-20 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded inline-block">
              Carrier Support Center
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Find clear, straightforward answers about our dispatch rates, equipment coverage, broker setup process, and new carrier onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FAQS DIRECTORY */}
      <section className="py-16 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion />
        </div>
      </section>

      {/* 3. NEW CARRIER PROMOTIONAL OFFER */}
      <NewCarrierOfferSection onNavigate={onNavigate} />

      {/* 4. STILL HAVE QUESTIONS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#F5F7FA] border border-slate-200 flex items-center justify-center text-[#1677FF] mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-[#0B1F33]">
            Have a Question Not Answered Here?
          </h2>
          <p className="text-sm text-[#667085] leading-relaxed">
            Our dispatch coordinators are happy to explain our lane matching, insurance requirements, and carrier terms in detail.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B1F33] hover:bg-[#152B42] rounded-md transition-colors"
            >
              <span>Go to Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
