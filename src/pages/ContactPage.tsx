import React, { useState } from 'react';
import { PageId } from '../types';
import { Mail, Clock, MessageSquare, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

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
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO HEADER */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-20 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded inline-block">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Contact AIM Dispatching
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have questions about our dispatching services? Our contact information will be available here soon.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="py-16 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 5 cols: Corporate Contact Status & Notice */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
                <div>
                  <h2 className="text-xl font-bold text-[#0B1F33]">
                    Carrier Communications
                  </h2>
                  <p className="text-xs text-[#667085] mt-1">
                    Direct dispatch desk for owner-operators and fleet inquiries.
                  </p>
                </div>

                {/* Important verified note according to brief */}
                <div className="p-4 bg-[#F5F7FA] border border-slate-200 rounded-md space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F33]">
                    <Clock className="w-4 h-4 text-[#1677FF]" />
                    <span>Official Contact Details Announcement</span>
                  </div>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Have questions about our dispatching services? Our direct phone numbers, dedicated dispatch email lines, and operations back-office contact information will be available here soon.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded bg-[#F5F7FA] border border-slate-200 flex items-center justify-center text-[#1677FF] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-[#0B1F33]">Official Carrier Inquiries</div>
                      <div className="text-[#667085]">Dedicated email addresses will be published here upon official launch.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded bg-[#F5F7FA] border border-slate-200 flex items-center justify-center text-[#1677FF] shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-[#0B1F33]">Dispatch Operating Hours</div>
                      <div className="text-[#667085]">Monday – Friday: 7:00 AM – 7:00 PM EST<br />Emergency Driver Road Support: 24/7 Available for active loads</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-semibold text-[#0B1F33] mb-1">
                    Ready to onboard your truck now?
                  </div>
                  <p className="text-xs text-[#667085] mb-3">
                    You can view and preview our carrier setup form on the Get Started page.
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
                      Thank you for contacting AIM Dispatching. This form demonstrates the direct carrier inquiry workflow. Our dispatch team will follow up promptly once active communication channels go live.
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
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33]"
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
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33]"
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
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33]"
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
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33]"
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
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33]"
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
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33]"
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
