import React, { useState } from 'react';
import { PageId } from '../types';
import { Mail, Clock, MessageSquare, CheckCircle, ArrowRight, ShieldCheck, Phone, Globe, ExternalLink, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: 'General Dispatch Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trim and sanitize inputs
    setFormData(prev => ({
      ...prev,
      name: prev.name.trim().slice(0, 80),
      company: prev.company.trim().slice(0, 100),
      email: prev.email.trim().slice(0, 100),
      phone: prev.phone.trim().slice(0, 30),
      message: prev.message.trim().slice(0, 1000)
    }));
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO HEADER */}
      <section className="bg-[#0B1F33] text-white py-12 sm:py-16 lg:py-20 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded inline-block">
              Get In Touch
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Contact AIM Dispatching
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              Have questions about our dispatching services, freight rates, or carrier onboarding? Connect directly with our dispatch operations desk by phone, text, or email.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="py-12 sm:py-16 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left 5 cols: Corporate Contact Status & Notice */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
                <div>
                  <h2 className="text-xl font-bold text-[#0B1F33]">
                    Official Carrier Desk
                  </h2>
                  <p className="text-xs text-[#667085] mt-1">
                    Direct communication lines for owner-operators, independent drivers, and fleet dispatch inquiries.
                  </p>
                </div>

                {/* Primary Card: Phone & SMS */}
                <div className="p-4 sm:p-5 bg-[#0B1F33] text-white rounded-lg space-y-3 shadow-xs border border-[#1E3A5F]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                      Direct Dispatch Hotline
                    </span>
                    <span className="text-[10px] bg-[#1677FF]/30 text-white font-medium px-2 py-0.5 rounded border border-[#1677FF]/40">
                      Call or Text
                    </span>
                  </div>

                  <div>
                    <a
                      href={CONTACT_INFO.phoneTel}
                      className="text-2xl font-extrabold tracking-tight text-white hover:text-[#1677FF] transition-colors block"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-400 mt-1">
                      Fast load assistance, driver support, and lane availability.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={CONTACT_INFO.phoneTel}
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded transition-colors text-center"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={CONTACT_INFO.phoneSms}
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-slate-200 bg-[#152B42] hover:bg-[#1E3A5F] border border-[#1E3A5F] rounded transition-colors text-center"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#1677FF]" />
                      <span>Send Text</span>
                    </a>
                  </div>
                </div>

                {/* Secondary Cards: Email & Website */}
                <div className="space-y-3 pt-1">
                  
                  {/* Email */}
                  <div className="flex items-start gap-3 p-3.5 bg-[#F5F7FA] border border-slate-200 rounded-md">
                    <div className="w-9 h-9 rounded bg-white border border-slate-200 flex items-center justify-center text-[#1677FF] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-xs min-w-0 flex-1">
                      <div className="font-bold text-[#0B1F33]">Email Dispatch Support</div>
                      <a
                        href={CONTACT_INFO.emailMailto}
                        className="text-xs sm:text-sm font-semibold text-[#1677FF] hover:underline break-all block mt-0.5"
                      >
                        {CONTACT_INFO.email}
                      </a>
                      <div className="text-[#667085] text-[11px] mt-0.5">Send carrier packets, rate con copies, and inquiries.</div>
                    </div>
                  </div>

                  {/* Official Website */}
                  <div className="flex items-start gap-3 p-3.5 bg-[#F5F7FA] border border-slate-200 rounded-md">
                    <div className="w-9 h-9 rounded bg-white border border-slate-200 flex items-center justify-center text-[#1677FF] shrink-0 mt-0.5">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="text-xs min-w-0 flex-1">
                      <div className="font-bold text-[#0B1F33]">Official Web Portal</div>
                      <a
                        href={CONTACT_INFO.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-[#1677FF] hover:underline inline-flex items-center gap-1 mt-0.5 break-all"
                      >
                        <span>{CONTACT_INFO.websiteDisplay}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <div className="text-[#667085] text-[11px] mt-0.5">Live web portal & online carrier onboarding.</div>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3 p-3.5 bg-[#F5F7FA] border border-slate-200 rounded-md">
                    <div className="w-9 h-9 rounded bg-white border border-slate-200 flex items-center justify-center text-[#1677FF] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-xs min-w-0 flex-1">
                      <div className="font-bold text-[#0B1F33]">Dispatch Hours & Coverage</div>
                      <div className="text-[#0B1F33] font-medium mt-0.5">{CONTACT_INFO.hours}</div>
                      <div className="text-[#667085] text-[11px] mt-0.5 font-medium text-emerald-700">
                        &bull; {CONTACT_INFO.support}
                      </div>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-semibold text-[#0B1F33] mb-1">
                    Ready to onboard your truck now?
                  </div>
                  <p className="text-xs text-[#667085] mb-3">
                    Submit your carrier details online to claim 1–3 free loads for qualifying new carriers.
                  </p>
                  <button
                    onClick={() => onNavigate('get-started')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded transition-colors"
                  >
                    <span>Go to Onboarding Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

            {/* Right 7 cols: Interactive Inquiry Form (Demo UI) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
                
                <div className="mb-6 space-y-1">
                  <span className="text-xs font-semibold text-[#1677FF] uppercase tracking-wider">
                    Direct Inquiry Form
                  </span>
                  <h2 className="text-2xl font-bold text-[#0B1F33]">
                    Send a Message to AIM Dispatching
                  </h2>
                  <p className="text-xs sm:text-sm text-[#667085]">
                    Fill out the fields below with questions regarding rates, lanes, or carrier requirements.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center bg-[#F5F7FA] border border-slate-200 rounded-lg space-y-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1677FF] mx-auto shadow-xs border border-slate-200">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1F33]">
                      Message Received
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667085] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting AIM Dispatching. Your message has been received! Our dispatch desk will get back to you promptly. For immediate assistance or active loads, call or text us anytime at{' '}
                      <a href={CONTACT_INFO.phoneTel} className="font-semibold text-[#1677FF] hover:underline">{CONTACT_INFO.phone}</a>{' '}
                      or email{' '}
                      <a href={CONTACT_INFO.emailMailto} className="font-semibold text-[#1677FF] hover:underline">{CONTACT_INFO.email}</a>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs font-semibold text-[#0B1F33] bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Miller"
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          Company / Carrier Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Miller Logistics LLC"
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="carrier@example.com"
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                        Topic of Inquiry
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                      >
                        <option>General Dispatch Inquiry</option>
                        <option>Rates & 6%–8% Pricing Question</option>
                        <option>New Carrier 1–3 Free Loads Offer</option>
                        <option>Dry Van / Reefer Lanes</option>
                        <option>Flatbed / Step Deck / Hotshot Operations</option>
                        <option>Broker Packets & Invoicing Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                        Message / Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your equipment, preferred lanes, or any specific questions..."
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#0B1F33] hover:bg-[#152B42] rounded-md transition-colors"
                      >
                        Submit Inquiry
                      </button>
                    </div>

                    <p className="text-[11px] text-[#667085] pt-1">
                      UI Demonstration Mode: Form displays frontend validation and confirmation without sending data to external backends.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
