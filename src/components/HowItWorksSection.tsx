import React from 'react';
import { ArrowRight, Phone, MessageSquare, FileCheck } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

interface HowItWorksSectionProps {
  onGetStarted: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-2">
            Clear Onboarding Process
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1B2B]" style={{ textWrap: 'balance' }}>
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 sm:mt-3 leading-relaxed">
            Starting with AIM Dispatching is straightforward and transparent. No long contracts, no upfront activation fees, and no guesswork.
          </p>
        </div>

        {/* 3-Step Process: Horizontal on desktop, Vertical on mobile */}
        <div className="relative">
          
          {/* Subtle connection line on desktop */}
          <div 
            className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-8 pointer-events-none" 
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
              <div
                key={stepItem.number}
                className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-full bg-[#0B1B2B] text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                      {stepItem.step}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                      Step {stepItem.number} of 3
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B] mb-2.5">
                    {stepItem.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                  {idx === 0 && (
                    <>
                      <Phone className="w-3.5 h-3.5 text-orange-600" />
                      <span>Phone, text, or website form</span>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <MessageSquare className="w-3.5 h-3.5 text-orange-600" />
                      <span>Review rates & lane goals</span>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <FileCheck className="w-3.5 h-3.5 text-orange-600" />
                      <span>MC, COI & W-9 verification</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Action callout banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0B1B2B] text-white rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ready to discuss loads for your truck?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Qualifying new carriers can receive their first load 100% fee-free during our limited-time 3-day promotion.
            </p>
          </div>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-md transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Begin Step 1: Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
