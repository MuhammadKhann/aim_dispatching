import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HERO_COPY } from '../data/content';
import { CONTACT_INFO } from '../data/contact';
import { ASSETS } from '../data/assets';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="hero" className="relative bg-[#0B1B2B] text-white py-12 sm:py-16 lg:py-24 border-b border-[#162E4A] overflow-hidden">
      {/* Subtle background ambient light */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy, Prominent Phone, & CTAs (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed domain kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-300">
              <span className="text-orange-500 font-bold">AIM Dispatching</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>US Freight & Logistics Support</span>
            </div>

            {/* Exact Headline */}
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]" 
              style={{ textWrap: 'balance' }}
            >
              {HERO_COPY.headline}
            </h1>

            {/* Exact Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {HERO_COPY.supportingText}
            </p>

            {/* Prominent Phone Hotline Card */}
            <div className="p-4 sm:p-4.5 bg-[#0F243A] border border-[#23456E] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 max-w-xl shadow-xs">
              <div className="space-y-0.5">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Direct Dispatch Hotline (Call or Text)
                </span>
                <a
                  href={CONTACT_INFO.phoneTel}
                  className="text-xl sm:text-2xl font-extrabold text-white hover:text-orange-400 transition-colors tracking-tight inline-flex items-center gap-2"
                >
                  <PhoneCall className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>{HERO_COPY.phoneDisplay}</span>
                </a>
              </div>
              <div className="text-xs text-slate-400 sm:text-right shrink-0">
                <span className="text-emerald-400 font-semibold block">Available Coast-to-Coast</span>
                <span>Owner-operators & small fleets</span>
              </div>
            </div>

            {/* Action Buttons: Primary Orange "Get Started" & Secondary "Call Us Today" */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px] cursor-pointer"
              >
                <span>{HERO_COPY.primaryCta}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={CONTACT_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-slate-200 bg-[#162E4A] hover:bg-[#1E3A5F] active:bg-[#23456E] rounded-md transition-colors border border-[#23456E] min-h-[48px]"
              >
                <PhoneCall className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{HERO_COPY.secondaryCta}</span>
              </a>
            </div>

            {/* Genuine Operational Safeguards (Anti-slop, no fake statistics) */}
            <div className="pt-4 border-t border-[#162E4A] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">No Forced Dispatch</span>
                  <span className="text-slate-400">100% final carrier approval</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">6% to 8% Standard Fee</span>
                  <span className="text-slate-400">Zero hidden surcharges</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">1–3 Free Loads Offer</span>
                  <span className="text-slate-400">For qualifying new carriers</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Quality American Semi-Truck Photography (Spans 5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden border border-[#23456E] shadow-xl bg-[#0F243A]">
              <img
                src={ASSETS.heroTruck}
                alt="American freight semi-truck traveling on an open interstate highway"
                className="w-full h-[260px] sm:h-[360px] lg:h-[430px] object-cover"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const el = e.currentTarget;
                  if (!el.src.includes('/images/hero_american_freight_truck')) {
                    el.src = '/images/hero_american_freight_truck_1792698292717.jpg';
                  }
                }}
              />

              {/* Measured contrast overlay banner */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/80 to-transparent p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-slate-200">
                  <span className="font-semibold text-white">Commercial Fleet & Driver Representation</span>
                  <span className="text-orange-400 font-mono text-[11px]">All 48 States</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug">
                  Load sourcing, broker rate counters, carrier packet setups, and complete paperwork support.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
