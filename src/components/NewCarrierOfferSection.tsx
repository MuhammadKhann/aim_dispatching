import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface NewCarrierOfferSectionProps {
  onNavigate: (page: PageId) => void;
  compact?: boolean;
}

export const NewCarrierOfferSection: React.FC<NewCarrierOfferSectionProps> = ({ 
  onNavigate, 
  compact = false 
}) => {
  return (
    <section className={`relative overflow-hidden w-full max-w-full ${compact ? 'py-8 sm:py-10' : 'py-10 sm:py-16'} bg-white border-y border-slate-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#0B1F33] rounded-lg p-5 sm:p-8 lg:p-12 text-white shadow-md relative overflow-hidden w-full max-w-full">
          
          {/* Subtle background graphic line safely contained */}
          <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-[#1677FF]/10 blur-3xl pointer-events-none translate-x-1/4 translate-y-1/4" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left 7 cols: Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded">
                <ShieldCheck className="w-4 h-4" />
                <span>Introductory Carrier Incentive</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                New to AIM Dispatching? <br className="hidden sm:inline" />
                <span className="text-[#1677FF]">Start With 1–3 Loads on Us.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                New carriers may qualify for 1–3 loads with no dispatch fee, depending on the agreed deal. It’s an easy way to experience our dispatching service, aggressive rate negotiation, and back-office communication before moving forward with a regular plan.
              </p>

              {/* Clarification callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span><strong>Zero Dispatch Fee:</strong> AIM Dispatching waives its standard service fee for qualifying trial loads.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span><strong>Full Gross Retention:</strong> You keep 100% of the negotiated freight gross from the broker.</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic pt-1">
                * Note: Freight itself is paid directly by brokers as standard. AIM Dispatching waives its dispatching service fee for qualifying loads. Offer availability and number of fee-free loads may vary based on the carrier and agreement.
              </p>
            </div>

            {/* Right 4 cols: Action box */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="w-full sm:w-auto bg-[#12263F] border border-[#1E3A5F] p-6 rounded-md space-y-4">
                <div className="space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Trial Opportunity</div>
                  <div className="text-xl font-bold text-white">1 to 3 Fee-Free Loads</div>
                  <div className="text-xs text-slate-300">Based on agreed carrier equipment & profile</div>
                </div>

                <button
                  onClick={() => onNavigate('get-started')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Talk to AIM Dispatching</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  No long-term lock-in &bull; 100% no forced dispatch
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
