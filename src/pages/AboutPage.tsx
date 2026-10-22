import React from 'react';
import { PageId } from '../types';
import { ASSETS } from '../data/assets';
import { NewCarrierOfferSection } from '../components/NewCarrierOfferSection';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  TrendingUp, 
  Headphones, 
  Scale
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO HEADER */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-20 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded inline-block">
              About AIM Dispatching
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A Carrier-First Logistics Partner Dedicated to Your Bottom Line
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              AIM Dispatching was founded with one clear commitment: helping commercial truck drivers and carrier fleets simplify dispatch operations and spend more time running their business safely.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY & COMMITMENT */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 6 cols: Text */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#1677FF] uppercase tracking-wider block mb-1">
                  Service Philosophy
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F33]">
                  Bridging the Gap Between Road and Back-Office
                </h2>
              </div>

              <div className="space-y-4 text-sm text-[#667085] leading-relaxed">
                <p>
                  Driving a commercial truck across state lines demands undivided attention. Yet independent carriers and owner-operators are too often expected to split their focus: constantly refreshing load boards, haggling with broker agents over rate confirmations, managing certificate of insurance filings, and invoicing paperwork.
                </p>
                <p>
                  At AIM Dispatching, we believe trucking companies operate best when dispatching is treated as a strategic partnership rather than an afterthought. We handle the time-consuming administrative legwork so you can keep your wheels turning.
                </p>
                <p>
                  We are not freight brokers who represent shippers trying to move freight as cheaply as possible. We are carrier dispatchers who work exclusively for the carrier, negotiating the best possible terms on your behalf.
                </p>
              </div>

              <div className="p-4 bg-[#F5F7FA] border border-slate-200 rounded-md">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1F33] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#1677FF]" />
                  <span>The AIM Dispatching Guarantee of Control</span>
                </div>
                <p className="text-xs text-[#667085]">
                  We maintain a strict zero-forced-dispatch policy. Every load, rate, and lane recommendation is subject to your final approval. You are always the boss of your truck.
                </p>
              </div>
            </div>

            {/* Right 6 cols: Photography */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                <img
                  src={ASSETS.logisticsYard}
                  alt="Modern commercial freight terminal with semi-trucks parked at distribution docks"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const el = e.currentTarget;
                    if (!el.src.includes('/images/freight_logistics_yard')) {
                      el.src = '/images/freight_logistics_yard_1792698292922.jpg';
                    }
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#667085] px-1">
                <span>Nationwide Freight Coordination</span>
                <span className="text-[#0B1F33] font-medium">All Equipment Types Handled</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUR CORE VALUES */}
      <section className="py-16 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#1677FF] uppercase tracking-wider block mb-1">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F33]">
              What Defines Our Approach
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Our business is built around core operational habits that protect carriers and maximize earnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
              <div className="w-8 h-8 rounded bg-[#F5F7FA] text-[#1677FF] flex items-center justify-center font-bold">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F33]">
                Driver-Centric Respect
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                We understand the daily challenges of the road—weather delays, shipper detention, and parking limits. We communicate with patience and directness.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
              <div className="w-8 h-8 rounded bg-[#F5F7FA] text-[#1677FF] flex items-center justify-center font-bold">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F33]">
                Data-Driven Negotiation
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                We do not accept first-pass broker rates. We leverage real-time lane capacity and spot rate trends to counter for stronger compensation.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
              <div className="w-8 h-8 rounded bg-[#F5F7FA] text-[#1677FF] flex items-center justify-center font-bold">
                <Scale className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F33]">
                Straightforward Pricing
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                6% to 8% per load. No hidden processing surcharges, no mandatory contracts, and no billing games. We only earn when your truck moves.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
              <div className="w-8 h-8 rounded bg-[#F5F7FA] text-[#1677FF] flex items-center justify-center font-bold">
                <Headphones className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F33]">
                Active Communication
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                When you call your dispatcher, you reach a real person who knows your truck, your current location, and your next delivery appointment.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHO WE SERVE */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold text-[#1677FF] uppercase tracking-wider block mb-1">
                Target Operators
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F33]">
                Tailored for Every Scale of Carrier
              </h2>
              <p className="text-sm text-[#667085] mt-2 leading-relaxed">
                Whether you just received your active MC authority or are managing several commercial units, AIM Dispatching integrates seamlessly into your setup.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#F5F7FA] border border-slate-200 rounded-md">
                <h3 className="text-sm font-bold text-[#0B1F33] mb-1">
                  Owner-Operators
                </h3>
                <p className="text-xs text-[#667085]">
                  Gain a full-time back-office team without paying salaries. Keep your cab quiet while we line up your next load before you even reach the receiver.
                </p>
              </div>

              <div className="p-5 bg-[#F5F7FA] border border-slate-200 rounded-md">
                <h3 className="text-sm font-bold text-[#0B1F33] mb-1">
                  Independent Carriers
                </h3>
                <p className="text-xs text-[#667085]">
                  Expand your broker network rapidly with automated packet setups, COI handling, and prompt post-load invoicing support.
                </p>
              </div>

              <div className="p-5 bg-[#F5F7FA] border border-slate-200 rounded-md">
                <h3 className="text-sm font-bold text-[#0B1F33] mb-1">
                  Small Fleets (2–10 Trucks)
                </h3>
                <p className="text-xs text-[#667085]">
                  Delegate multi-truck dispatch coordination, track deadhead across the fleet, and streamline billing documents in one centralized workflow.
                </p>
              </div>

              <div className="p-5 bg-[#F5F7FA] border border-slate-200 rounded-md">
                <h3 className="text-sm font-bold text-[#0B1F33] mb-1">
                  Specialized Equipment
                </h3>
                <p className="text-xs text-[#667085]">
                  Dedicated dispatch expertise for flatbed tarping, step-deck machinery, hotshots, power-only relays, and refrigerated loads.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. NEW CARRIER OFFER SECTION */}
      <NewCarrierOfferSection onNavigate={onNavigate} />

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="py-16 bg-[#0B1F33] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Experience the AIM Dispatching Difference
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Get started with our visual onboarding form and see how a professional back-office dispatch team keeps your authority profitable.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('get-started')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors"
            >
              <span>Start With AIM Dispatching</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
