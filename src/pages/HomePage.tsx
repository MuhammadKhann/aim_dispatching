import React from 'react';
import { PageId } from '../types';
import { SERVICES_DATA, CORE_BENEFITS, HOW_IT_WORKS_STEPS } from '../data/content';
import { ASSETS } from '../data/assets';
import { NewCarrierOfferSection } from '../components/NewCarrierOfferSection';
import { EquipmentFilterGrid } from '../components/EquipmentFilterGrid';
import { DispatchFeeSimulator } from '../components/DispatchFeeSimulator';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Headphones, 
  FileCheck,
  Compass,
  FileSpreadsheet
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B1F33] text-white overflow-hidden py-10 sm:py-16 lg:py-20 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 cols: Value Proposition */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-slate-300 bg-[#12263F] border border-[#1E3A5F] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded">
                <span>US Trucking Dispatch & Back-Office Support</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
                Reliable Dispatching That Keeps Your Truck Moving
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
                AIM Dispatching helps carriers find loads, negotiate rates, handle broker communication, manage paperwork, and stay focused on the road.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                <button
                  onClick={() => onNavigate('get-started')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[46px]"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-slate-200 bg-[#152B42] hover:bg-[#1E3A5F] rounded-md transition-colors border border-[#1E3A5F] min-h-[46px]"
                >
                  <span>Explore Our Services</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 sm:pt-6 border-t border-[#1E3A5F] grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 text-xs text-slate-300">
                <div className="bg-[#12263F]/70 p-2.5 sm:p-0 rounded text-center sm:text-left border border-[#1E3A5F]/50 sm:border-0">
                  <div className="font-semibold text-white text-xs sm:text-sm">6% to 8%</div>
                  <div className="text-slate-400 text-[11px] sm:text-xs">Transparent Fee</div>
                </div>
                <div className="bg-[#12263F]/70 p-2.5 sm:p-0 rounded text-center sm:text-left border border-[#1E3A5F]/50 sm:border-0">
                  <div className="font-semibold text-white text-xs sm:text-sm">No Forced Dispatch</div>
                  <div className="text-slate-400 text-[11px] sm:text-xs">100% Driver Choice</div>
                </div>
                <div className="bg-[#12263F]/70 p-2.5 sm:p-0 rounded text-center sm:text-left border border-[#1E3A5F]/50 sm:border-0">
                  <div className="font-semibold text-white text-xs sm:text-sm">All Major Equipment</div>
                  <div className="text-slate-400 text-[11px] sm:text-xs">Van, Reefer, Flatbed+</div>
                </div>
              </div>

            </div>

            {/* Right 5 cols: Authentic Photography Frame */}
            <div className="lg:col-span-5 relative mt-2 sm:mt-0">
              <div className="relative rounded-lg overflow-hidden border border-[#1E3A5F] shadow-xl bg-[#12263F]">
                <img
                  src={ASSETS.heroTruck}
                  alt="Modern commercial semi-truck with dry van trailer on US interstate highway"
                  className="w-full h-[220px] sm:h-[340px] lg:h-[400px] object-cover"
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
                
                {/* Overlay card for real context */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#0B1F33]/92 backdrop-blur-md p-3 sm:p-4 rounded border border-[#1E3A5F] text-xs space-y-0.5 sm:space-y-1">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="font-semibold text-white text-xs sm:text-sm">Full Back-Office Coordination</span>
                    <span className="text-[#1677FF] font-mono text-[11px] sm:text-xs">Coast-to-Coast</span>
                  </div>
                  <p className="text-slate-400 text-[11px] sm:text-xs leading-snug">
                    Direct broker negotiation, packets, rate confirmations, and billing support.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / BENEFITS SECTION */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-8 sm:mb-12">
            <span className="text-xs font-semibold text-[#1677FF] uppercase tracking-wider block mb-1">
              Carrier Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F33]">
              Built for Owner-Operators & Fleet Managers
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#667085] mt-1.5 sm:mt-2">
              Every service is structured to relieve drivers of tedious telephone calls, rate disputes, and late-night paperwork so you can run safe, profitable miles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CORE_BENEFITS.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-[#F5F7FA] border border-slate-200 rounded-lg p-5 sm:p-6 hover:border-[#1677FF]/40 transition-colors"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-white border border-slate-200 flex items-center justify-center text-[#1677FF] mb-3 sm:mb-4">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0B1F33] mb-1 sm:mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. NEW CARRIER PROMOTIONAL SECTION */}
      <NewCarrierOfferSection onNavigate={onNavigate} />

      {/* 4. SERVICES PREVIEW */}
      <section className="py-12 sm:py-16 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-xs font-semibold text-[#1677FF] uppercase tracking-wider block mb-1">
                Complete Dispatch Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F33]">
                Comprehensive Back-Office Dispatch Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1677FF] hover:text-[#0e63d8] whitespace-nowrap self-start sm:self-auto"
            >
              <span>View All 7 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-sm transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1F33]">
                      {service.title}
                    </h3>
                    <div className="w-8 h-8 rounded bg-[#F5F7FA] flex items-center justify-center text-[#1677FF]">
                      {service.id === 'load-booking' && <Compass className="w-4 h-4" />}
                      {service.id === 'rate-negotiation' && <TrendingUp className="w-4 h-4" />}
                      {service.id === 'broker-setup' && <FileCheck className="w-4 h-4" />}
                      {service.id === 'paperwork-management' && <FileSpreadsheet className="w-4 h-4" />}
                      {service.id === 'invoicing-assistance' && <FileCheck className="w-4 h-4" />}
                      {service.id === 'factoring-assistance' && <ShieldCheck className="w-4 h-4" />}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-1.5 pt-1 text-xs text-[#0B1F33]">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#1677FF] font-bold">&bull;</span>
                        <span className="text-[#667085]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#1677FF] hover:underline inline-flex items-center gap-1 min-h-[36px]"
                  >
                    <span>Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TRUCK TYPES SECTION */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EquipmentFilterGrid onNavigate={onNavigate} />
        </div>
      </section>

      {/* 6. WHY CHOOSE AIM DISPATCHING & OPERATIONS */}
      <section className="py-12 sm:py-16 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6 cols: Image showcase */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                <img
                  src={ASSETS.dispatchOffice}
                  alt="Transportation dispatch coordinator working at dual monitors in modern operations office"
                  className="w-full h-[220px] sm:h-[320px] lg:h-[380px] object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const el = e.currentTarget;
                    if (!el.src.includes('/images/dispatch_operations_coordination')) {
                      el.src = '/images/dispatch_operations_coordination_1792698293965.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-md text-xs text-[#667085] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span>Personalized Dispatch Operations</span>
                <span className="text-[#0B1F33] font-semibold">Direct Driver Line & Support</span>
              </div>
            </div>

            {/* Right 6 cols: Why Choose Us Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#1677FF] uppercase tracking-wider block mb-1">
                  Service Philosophy
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F33]">
                  Why Carriers Partner With AIM Dispatching
                </h2>
                <p className="text-sm text-[#667085] mt-2 leading-relaxed">
                  We treat your truck as our own business. Rather than pushing low-paying freight just to collect fees, we focus on long-term carrier viability, sustainable rates per mile, and dependable broker relationships.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded">
                  <div className="text-xs font-bold text-[#0B1F33] mb-1">
                    Reliable Communication
                  </div>
                  <p className="text-xs text-[#667085]">
                    Direct contact with your assigned dispatcher without endless call centers or unreturned voicemails.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded">
                  <div className="text-xs font-bold text-[#0B1F33] mb-1">
                    Carrier-Focused Decisions
                  </div>
                  <p className="text-xs text-[#667085]">
                    You have 100% final approval on every single load. We advise and negotiate, but you make the call.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded">
                  <div className="text-xs font-bold text-[#0B1F33] mb-1">
                    Reduced Administrative Burden
                  </div>
                  <p className="text-xs text-[#667085]">
                    No more filling out 20-page broker packets while parked on the shoulder or between deliveries.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded">
                  <div className="text-xs font-bold text-[#0B1F33] mb-1">
                    Multiple Equipment Expertise
                  </div>
                  <p className="text-xs text-[#667085]">
                    From 53ft reefers to 26ft box trucks and hotshot goosenecks, our team understands specific equipment rates.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1677FF] hover:text-[#0e63d8]"
                >
                  <span>Learn More About Our Approach</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#1677FF] uppercase tracking-wider">
              Step-by-Step
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F33]">
              How Working With AIM Dispatching Works
            </h2>
            <p className="text-sm text-[#667085]">
              A straightforward process designed to get your authority moving on profitable freight quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {HOW_IT_WORKS_STEPS.map((stepItem) => (
              <div 
                key={stepItem.step}
                className="bg-[#F5F7FA] border border-slate-200 rounded-lg p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-[#1677FF] mb-2">
                    Step {stepItem.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1F33] mb-2 leading-snug">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. INTERACTIVE DISPATCH FEE CALCULATOR PREVIEW */}
      <section className="py-16 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-8 text-center space-y-2">
            <span className="text-xs font-semibold text-[#1677FF] uppercase tracking-wider">
              Transparent Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F33]">
              Flexible Dispatching — 6% to 8% Per Load
            </h2>
            <p className="text-sm text-[#667085]">
              Our dispatching fee typically ranges from 6% to 8% per load depending on your equipment, operation, and service agreement. Our goal is to provide reliable dispatch support without complicated pricing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <DispatchFeeSimulator onNavigate={onNavigate} />
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="py-20 bg-[#0B1F33] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#1677FF] bg-[#1677FF]/10 px-3.5 py-1.5 rounded inline-block">
            Take The Next Step
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Put AIM Dispatching on Your Side?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you operate one truck or manage a growing fleet, AIM Dispatching is ready to help simplify your dispatch operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('get-started')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('pricing')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 bg-[#152B42] hover:bg-[#1E3A5F] rounded-md transition-colors border border-[#1E3A5F]"
            >
              <span>Review Pricing (6% - 8%)</span>
            </button>
          </div>

          <div className="pt-6 text-xs text-slate-400">
            Qualifying new carriers can receive 1–3 loads with zero dispatch fee.
          </div>
        </div>
      </section>

    </div>
  );
};
