import React from 'react';
import { ShieldCheck, MessageCircle, FileText, ArrowRight, Phone } from 'lucide-react';
import { ABOUT_COPY } from '../data/content';
import { CONTACT_INFO } from '../data/contact';
import { ASSETS } from '../data/assets';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Photography of Freight Dispatch & Operations (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md bg-[#0F243A]">
              <img
                src={ASSETS.dispatchOffice}
                alt="Freight dispatch desk with operational load management and lane maps"
                className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover"
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
            <div className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
              <span>AIM Dispatching Operations & Back-Office Freight Coordination</span>
            </div>
          </div>

          {/* Right Column: Authentic Personal Introduction of Muhammad (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-2">
                About the Founder & Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1B2B]" style={{ textWrap: 'balance' }}>
                A Personal, Hands-On Approach to Truck Dispatching
              </h2>
            </div>

            {/* Featured Quote as specified by user */}
            <div className="p-5 sm:p-6 bg-[#F8FAFC] border-l-0 border border-slate-200 rounded-lg">
              <blockquote className="text-base sm:text-lg font-medium text-[#0B1B2B] leading-relaxed italic">
                &ldquo;{ABOUT_COPY.quote}&rdquo;
              </blockquote>
              <div className="mt-3 text-xs sm:text-sm font-semibold text-orange-600">
                — {ABOUT_COPY.founderName}, Founder of AIM Dispatching
              </div>
            </div>

            {/* Detailed Bio Prose */}
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                {ABOUT_COPY.detailedBio}
              </p>
              <p>
                When you partner with AIM Dispatching, you are not handed off to an anonymous overseas call center. You communicate directly with Muhammad and our dedicated dispatch desk. We understand that your truck is your livelihood, and our success is tied directly to your profitability on the highway.
              </p>
            </div>

            {/* 3 Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-[#F8FAFC] border border-slate-200 rounded text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B2B]">
                  <MessageCircle className="w-3.5 h-3.5 text-orange-600" />
                  <span>Clear Communication</span>
                </div>
                <div className="text-slate-500">Fast answers, honest load rates, and responsive check calls.</div>
              </div>

              <div className="p-3 bg-[#F8FAFC] border border-slate-200 rounded text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B2B]">
                  <FileText className="w-3.5 h-3.5 text-orange-600" />
                  <span>Organized Paperwork</span>
                </div>
                <div className="text-slate-500">Packets, COIs, rate cons, and invoices handled promptly.</div>
              </div>

              <div className="p-3 bg-[#F8FAFC] border border-slate-200 rounded text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B2B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                  <span>Carrier Freedom</span>
                </div>
                <div className="text-slate-500">Zero forced dispatch. You always retain final load authority.</div>
              </div>
            </div>

            {/* Direct Connect Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0B1B2B] hover:bg-[#162E4A] rounded-md transition-colors cursor-pointer"
              >
                <span>Connect With Muhammad</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={CONTACT_INFO.phoneTel}
                className="text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly: {CONTACT_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
