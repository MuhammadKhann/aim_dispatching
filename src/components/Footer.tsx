import React, { useState } from 'react';
import { Phone, Mail, Globe, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Desk' },
  ];

  const equipmentList = [
    'Dry Van (53ft Enclosed)',
    'Reefer (Temperature-Controlled)',
    'Flatbed (48ft / 53ft Open Deck)',
    'Step Deck / Single Drop',
    'Box Truck (24ft – 26ft with Liftgate)',
    'Power Only (Tractor Relays & Drop)',
    'Hotshot & Gooseneck'
  ];

  return (
    <footer className="bg-[#0B1B2B] text-slate-300 border-t border-[#162E4A] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#162E4A]">
          
          {/* Column 1: Brand & Philosophy (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onScrollTo('hero')}
              className="flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded py-1 cursor-pointer"
            >
              <div className="w-8 h-8 rounded bg-orange-600 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-white"
                >
                  <path d="M4 14l8-8 8 8" />
                  <path d="M12 6v14" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AIM <span className="text-orange-500">DISPATCHING</span>
              </span>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional truck dispatching services for owner-operators, independent drivers, and carrier fleets across the United States. We manage freight sourcing, rate negotiations, and back-office documentation so you stay profitable on the road.
            </p>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Carrier-first representation with 100% no forced dispatch.</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Anchors (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onScrollTo(link.id)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Equipment Covered (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Equipment Handled
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {equipmentList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-orange-500 font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Contacts (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Official Contact Desk
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li>
                <div className="text-slate-400 text-[11px] mb-0.5">Call or Text (24/7 Operations):</div>
                <div className="flex items-center gap-2">
                  <a
                    href={CONTACT_INFO.phoneTel}
                    className="text-sm font-bold text-white hover:text-orange-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{CONTACT_INFO.phone}</span>
                  </a>
                  <a
                    href={CONTACT_INFO.phoneSms}
                    className="text-[11px] px-2 py-0.5 bg-[#162E4A] hover:bg-[#1E3A5F] text-slate-300 rounded border border-[#23456E] transition-colors"
                  >
                    SMS
                  </a>
                </div>
              </li>

              <li>
                <div className="text-slate-400 text-[11px] mb-0.5">Direct Dispatch Email:</div>
                <a
                  href={CONTACT_INFO.emailMailto}
                  className="text-xs text-slate-300 hover:text-white transition-colors break-all inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>

              <li>
                <div className="text-slate-400 text-[11px] mb-0.5">Official Website:</div>
                <a
                  href={CONTACT_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-orange-400 hover:underline inline-flex items-center gap-1.5 break-all"
                >
                  <Globe className="w-3.5 h-3.5 shrink-0" />
                  <span>{CONTACT_INFO.websiteDisplay}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onScrollTo('contact')}
                className="w-full text-center px-3.5 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded transition-colors cursor-pointer"
              >
                Request Dispatch Proposal
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              &copy; 2026 AIM Dispatching. All rights reserved. Commercial freight logistics & driver representation.
            </p>
            <p className="text-[11px] text-slate-500">
              Standard dispatch fee 6%–8%. 1–3 introductory fee-free loads offer available for qualifying carriers upon mutual agreement.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setModalType('privacy')}
              className="text-slate-400 hover:text-white underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <button
              onClick={() => setModalType('terms')}
              className="text-slate-400 hover:text-white underline cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Accessible Policy Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-[#0B1B2B] text-slate-200 border border-[#162E4A] rounded-lg max-w-xl w-full p-6 sm:p-7 relative shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-[#162E4A] cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'privacy' ? (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Privacy Policy</h3>
                <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
                  <p>
                    AIM Dispatching respects carrier privacy. We collect information (such as MC number, carrier name, phone number, email, and equipment specifications) solely for the purpose of booking freight, executing broker carrier packets, and coordinating dispatch operations.
                  </p>
                  <p>
                    We do not sell, rent, or trade carrier contact details to third-party marketing brokers. Your documents (W-9, COI, and Notice of Assignment) are only shared with verified brokers or shippers for approved load confirmations.
                  </p>
                  <p>
                    If you have any questions regarding your data, contact us directly at <span className="text-white font-medium">{CONTACT_INFO.email}</span>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Terms of Service</h3>
                <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
                  <p>
                    AIM Dispatching operates strictly as a carrier dispatch service provider. We act under the direction and authorization of the carrier to locate freight, negotiate rates, and coordinate dispatch communications.
                  </p>
                  <p>
                    We maintain a strict zero-forced-dispatch policy. Carriers maintain 100% authority to accept or reject any load. Standard dispatch compensation is 6% to 8% per load. Introductory free load promotions (1–3 loads) apply to eligible new carriers subject to written mutual agreement before booking begins.
                  </p>
                  <p>
                    For inquiries, please reach out via phone at <span className="text-white font-medium">{CONTACT_INFO.phone}</span> or email <span className="text-white font-medium">{CONTACT_INFO.email}</span>.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-4 mt-4 border-t border-[#162E4A] text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
