import React from 'react';
import { PageId } from '../types';
import { DispatchFeeSimulator } from '../components/DispatchFeeSimulator';
import { NewCarrierOfferSection } from '../components/NewCarrierOfferSection';
import { 
  Check, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  FileCheck2,
  DollarSign
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO HEADER */}
      <section className="bg-[#0B1F33] text-white py-10 sm:py-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded inline-block">
              Transparent Pricing Model
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Flexible Dispatching — 6% to 8% Per Load
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              Our dispatching fee typically ranges from 6% to 8% per load depending on your equipment, operation, and service agreement. Our goal is to provide reliable dispatch support without complicated pricing.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN PRICING PLAN CARD */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-200 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="max-w-4xl mx-auto bg-[#F5F7FA] border border-slate-200 rounded-lg p-5 sm:p-8 md:p-10 shadow-xs w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center w-full">
              
              {/* Left 7 cols: Plan description */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1677FF] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>All-Inclusive Back-Office Plan</span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
                    6% – 8% <span className="text-base sm:text-lg font-normal text-[#667085]">/ per load</span>
                  </div>
                  <p className="text-xs text-[#667085]">
                    Percentage determined by equipment type, operating lanes, and agreed volume.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#0B1F33] leading-relaxed">
                  We align our incentives with yours: when we negotiate higher-paying loads, your revenue increases. If your truck is not rolling, you owe zero dispatch fees.
                </p>

                <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#0B1F33]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <span><strong>100% No Forced Dispatch:</strong> Final load acceptance is always your decision.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <span><strong>Direct Broker Pay:</strong> You get paid directly by brokers or your factoring partner.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <span><strong>No Long-Term Contracts:</strong> Flexible month-to-month operational freedom.</span>
                  </div>
                </div>
              </div>

              {/* Right 5 cols: CTA box */}
              <div className="md:col-span-5 bg-white border border-slate-200 rounded-md p-5 sm:p-6 space-y-4 text-center">
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#667085] uppercase tracking-wider">
                    Ready to Talk?
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#0B1F33]">
                    Get an Exact Rate for Your Rig
                  </div>
                  <p className="text-xs text-[#667085]">
                    Share your equipment and preferred lanes to get a custom dispatch agreement.
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('get-started')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors shadow-sm"
                >
                  <span>Talk to AIM Dispatching</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-[11px] text-[#667085] pt-1">
                  Quick 2-minute onboarding form &bull; No credit card needed
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. PROMOTIONAL OFFER */}
      <NewCarrierOfferSection onNavigate={onNavigate} />

      {/* 4. INTERACTIVE FEE SIMULATOR */}
      <section className="py-10 sm:py-16 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <DispatchFeeSimulator onNavigate={onNavigate} />
          </div>
        </div>
      </section>

      {/* 5. INCLUDED VS NO HIDDEN FEES COMPARISON */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-200 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-semibold text-[#1677FF] uppercase tracking-wider">
              Transparency First
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F33]">
              What Is Included vs. What We Never Charge
            </h2>
            <p className="text-xs sm:text-sm text-[#667085]">
              Clear expectations build reliable long-term carrier relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto w-full">
            
            {/* Included */}
            <div className="bg-[#F5F7FA] border border-slate-200 rounded-lg p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0B1F33]">
                <Check className="w-5 h-5 text-[#1677FF]" />
                <span>Included in the 6%–8% Dispatch Fee</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#0B1F33]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>Dedicated freight search & lane rate benchmarking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>Direct broker rate negotiation & accessorial protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>Unlimited carrier packet completion & COI submissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>Rate confirmation reviews and detention tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>Factoring schedule coordination & invoice preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>Backhaul route planning to minimize empty deadhead</span>
                </li>
              </ul>
            </div>

            {/* Never Charged */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0B1F33]">
                <X className="w-5 h-5 text-red-500" />
                <span>Zero Hidden Fees & Surcharges</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#667085]">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>No account onboarding or setup fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>No fee per broker packet submitted</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>No minimum monthly load quota requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>No charge when your truck is off duty or down for maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>No cancellation penalties or termination lock-ins</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>No payment interception—brokers pay your authority directly</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-12 sm:py-16 bg-[#0B1F33] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Get Started With AIM Dispatching
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            Experience reliable dispatch support with our new carrier promotional offer and keep 100% of your initial freight gross.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('get-started')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors"
            >
              <span>Get Started With AIM Dispatching</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
