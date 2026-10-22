import React from 'react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/content';
import { ASSETS } from '../data/assets';
import { NewCarrierOfferSection } from '../components/NewCarrierOfferSection';
import { 
  Compass, 
  TrendingUp, 
  FileCheck, 
  FolderKanban, 
  Receipt, 
  CreditCard, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'load-booking': return <Compass className="w-5 h-5 text-[#1677FF]" />;
      case 'rate-negotiation': return <TrendingUp className="w-5 h-5 text-[#1677FF]" />;
      case 'broker-setup': return <FileCheck className="w-5 h-5 text-[#1677FF]" />;
      case 'paperwork-management': return <FolderKanban className="w-5 h-5 text-[#1677FF]" />;
      case 'invoicing-assistance': return <Receipt className="w-5 h-5 text-[#1677FF]" />;
      case 'factoring-assistance': return <CreditCard className="w-5 h-5 text-[#1677FF]" />;
      case 'route-planning': return <MapPin className="w-5 h-5 text-[#1677FF]" />;
      default: return <Compass className="w-5 h-5 text-[#1677FF]" />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO HEADER */}
      <section className="bg-[#0B1F33] text-white py-10 sm:py-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded inline-block">
              Dedicated Carrier Services
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              End-to-End Dispatching Backed by Real Logistics Expertise
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              From finding profitable freight and securing top rates to managing carrier packets, BOLs, and factoring documentation, AIM Dispatching handles your complete back-office operations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="py-10 sm:py-16 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F33]">
              Our Complete Service Suite
            </h2>
            <p className="text-sm text-[#667085]">
              Every service is included under our transparent 6% to 8% per load model with zero hidden fees.
            </p>
          </div>

          <div className="space-y-8">
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white border border-slate-200 rounded-lg p-5 sm:p-8 shadow-xs hover:border-[#1677FF]/40 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    
                    {/* Left 8 cols: Core Service Details */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-[#F5F7FA] border border-slate-200 flex items-center justify-center shrink-0">
                          {getIcon(service.id)}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#1677FF] uppercase tracking-wider">
                            Service 0{index + 1}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F33]">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-[#0B1F33] font-medium leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                        {service.detailedDescription}
                      </p>

                      {/* Main Benefits list */}
                      <div className="pt-2">
                        <div className="text-xs font-semibold text-[#0B1F33] uppercase tracking-wider mb-2">
                          Core Benefits:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#667085]">
                          {service.benefits.map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Operational Highlights */}
                      <div className="p-3 bg-[#F5F7FA] rounded border border-slate-100 text-xs text-[#0B1F33] space-y-1">
                        <span className="font-semibold block text-[11px] uppercase tracking-wider text-[#667085]">
                          Operational Standard:
                        </span>
                        <ul className="space-y-1">
                          {service.operationalHighlights.map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-center gap-1.5 text-[#667085]">
                              <span className="text-[#1677FF] font-bold">&bull;</span>
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right 4 cols: Action & Summary */}
                    <div className="lg:col-span-4 bg-[#F5F7FA] border border-slate-200 rounded-md p-5 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-[#667085] uppercase tracking-wider">
                          Service Status
                        </div>
                        <div className="text-sm font-bold text-[#0B1F33]">
                          Included in 6%–8% Plan
                        </div>
                        <p className="text-xs text-[#667085] leading-relaxed">
                          No add-on charges for broker setups, paperwork filing, or route coordination.
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200">
                        <button
                          onClick={() => onNavigate('get-started')}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0B1F33] hover:bg-[#152B42] rounded transition-colors"
                        >
                          <span>Request Dispatch Support</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. MID-PAGE PROOF SECTION */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <span className="text-[11px] sm:text-xs font-semibold text-[#1677FF] uppercase tracking-wider">
                Fleet Adaptability
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F33]">
                Specialized Handling for Open Deck & Flatbed Freight
              </h2>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Open deck, step deck, and hotshot freight require careful load verification, tarp fee negotiations, and weight regulation compliance. Our dispatchers know the exact questions to ask shippers before you confirm the run.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('get-started')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1677FF] hover:text-[#0e63d8]"
                >
                  <span>Dispatch Flatbeds & Specialized Rig</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                <img
                  src={ASSETS.flatbedCargo}
                  alt="Commercial flatbed truck with tarped cargo on highway staging area"
                  className="w-full h-[220px] sm:h-[340px] lg:h-[380px] object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const el = e.currentTarget;
                    if (!el.src.includes('/images/flatbed_cargo_transport')) {
                      el.src = '/images/flatbed_cargo_transport_1792698293661.jpg';
                    }
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NEW CARRIER OFFER SECTION */}
      <NewCarrierOfferSection onNavigate={onNavigate} />

      {/* 5. CTA */}
      <section className="py-12 sm:py-16 bg-[#0B1F33] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Simplify Your Dispatch Operations Today
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            Experience reliable dispatch support tailored to your equipment, lanes, and schedule.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('get-started')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
