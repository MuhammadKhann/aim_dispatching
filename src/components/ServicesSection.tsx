import React from 'react';
import { Compass, TrendingUp, PhoneCall, FileCheck, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-orange-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-orange-600" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-orange-600" />;
      case 'FileCheck':
      default:
        return <FileCheck className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-2">
            Core Dispatch Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1B2B]" style={{ textWrap: 'balance' }}>
            Tailored Logistics Services for Independent Carriers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 sm:mt-3 leading-relaxed">
            We focus strictly on the services that trucking businesses rely on every single day to stay booked, negotiate higher revenue, and keep compliance paperwork in check.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 shadow-xs hover:border-orange-500/50 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Practical Bullet Points */}
                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  100% Carrier-approved loads
                </span>
                {onSelectService && (
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
