import React from 'react';
import { CheckCircle2, Shield, Clock, Users, FileText, TrendingUp } from 'lucide-react';
import { WHY_CHOOSE_BENEFITS } from '../data/content';
import { ASSETS } from '../data/assets';

export const WhyChooseSection: React.FC = () => {
  const getBenefitIcon = (id: string) => {
    switch (id) {
      case 'focus-driving':
        return <Clock className="w-5 h-5 text-orange-600" />;
      case 'suitable-loads':
        return <Shield className="w-5 h-5 text-orange-600" />;
      case 'rate-negotiations':
        return <TrendingUp className="w-5 h-5 text-orange-600" />;
      case 'organized-paperwork':
        return <FileText className="w-5 h-5 text-orange-600" />;
      case 'direct-communication':
      default:
        return <Users className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="why-choose" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-2">
            Practical Carrier Benefits
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1B2B]" style={{ textWrap: 'balance' }}>
            Why Owner-Operators Work With AIM Dispatching
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 sm:mt-3 leading-relaxed">
            Running an independent trucking company shouldn't mean spending your rest breaks on hold with broker desks. Here is how our service directly supports your day-to-day operations:
          </p>
        </div>

        {/* 2-Column Split: 5 Practical Benefits on Left, Operational Freight Yard Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 5 Practical Benefits */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_CHOOSE_BENEFITS.map((benefit, index) => (
              <div
                key={benefit.id}
                className="p-4 sm:p-5 bg-[#F8FAFC] border border-slate-200 rounded-lg hover:border-slate-300 transition-colors flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  {getBenefitIcon(benefit.id)}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#0B1B2B]">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Authentic Commercial Logistics Fleet Photography */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md bg-[#0F243A]">
              <img
                src={ASSETS.logisticsYard}
                alt="Commercial freight terminal and distribution facility with semi-trucks parked at loading docks"
                className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const el = e.currentTarget;
                  if (!el.src.includes('/images/freight_logistics_yard')) {
                    el.src = '/images/freight_logistics_yard_1792698292922.jpg';
                  }
                }}
              />
            </div>

            {/* Quiet Real Trust Note */}
            <div className="p-4 bg-[#F8FAFC] border border-slate-200 rounded-lg text-xs text-slate-600 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#0B1B2B] block">Straightforward Representation</span>
                <span>We do not make unrealistic promises or guarantee fantasy rates. We provide honest market assessments, diligent rate negotiation, and dedicated back-office execution.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
