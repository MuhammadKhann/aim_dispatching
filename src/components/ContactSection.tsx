import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Globe, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  CheckCircle2,
  MessageSquare,
  FileText
} from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';
import { 
  EQUIPMENT_OPTIONS, 
  CARRIER_ROLE_OPTIONS, 
  CONTACT_TIMING_OPTIONS, 
  RUNNING_LANES_OPTIONS, 
  MESSAGE_PRESETS 
} from '../data/content';
import { DispatchInquiryForm, ContactMethodOption } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<DispatchInquiryForm>({
    fullName: '',
    carrierRole: 'Owner-Operator (Single Truck)',
    contactValue: '',
    contactTiming: 'Anytime (Fastest Response)',
    equipmentType: 'Dry Van (53ft Enclosed)',
    preferredLanes: 'Nationwide (All 48 Lower States)',
    message: '',
    preferredMethod: 'Phone Call'
  });

  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [errors, setErrors] = useState<Partial<Record<keyof DispatchInquiryForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedPreset(val);
    const found = MESSAGE_PRESETS.find(p => p.label === val);
    if (found && found.text) {
      setFormData(prev => ({ ...prev, message: found.text }));
      if (errors.message) {
        setErrors(prev => ({ ...prev, message: undefined }));
      }
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof DispatchInquiryForm, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.contactValue.trim()) {
      newErrors.contactValue = 'Phone number or email is required.';
    } else {
      const val = formData.contactValue.trim();
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      const isPhone = /^[\d\s()+-]{7,20}$/.test(val);
      if (!isEmail && !isPhone) {
        newErrors.contactValue = 'Please enter a valid phone number or email address.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details or select a quick template above.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getFormattedMessage = () => {
    return `AIM Dispatching Carrier Inquiry:
------------------------------------------
Carrier / Name: ${formData.fullName.trim()}
Operation Type: ${formData.carrierRole}
Contact Info: ${formData.contactValue.trim()}
Preferred Time: ${formData.contactTiming}
Preferred Contact Method: ${formData.preferredMethod}
Equipment Type: ${formData.equipmentType}
Preferred Running Lanes: ${formData.preferredLanes}

Dispatch Notes / Requirements:
${formData.message.trim()}
------------------------------------------
Submitted via https://aimdispatching.vercel.app/`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFormattedMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleOpenEmailComposer = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`Dispatch Inquiry: ${formData.fullName.trim()} [${formData.equipmentType}]`);
    const body = encodeURIComponent(getFormattedMessage());
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    handleOpenEmailComposer();
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1B2B]" style={{ textWrap: 'balance' }}>
            Contact AIM Dispatching
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 sm:mt-3 leading-relaxed">
            Reach out directly to discuss your equipment, preferred lanes, or dispatching terms. Select options from each field to speed up your inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left 5 Cols: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Phone Card */}
            <div className="bg-[#0B1B2B] text-white p-6 sm:p-7 rounded-lg border border-[#162E4A] shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Direct Dispatch Line
                </span>
                <span className="text-xs font-semibold text-orange-400 bg-orange-950/60 border border-orange-500/30 px-2.5 py-0.5 rounded">
                  Call or Text
                </span>
              </div>

              <div>
                <a
                  href={CONTACT_INFO.phoneTel}
                  className="text-2xl sm:text-3xl font-extrabold text-white hover:text-orange-400 transition-colors tracking-tight block"
                >
                  {CONTACT_INFO.phone}
                </a>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Direct access to dispatcher. Ideal for active loads, rate questions, and immediate load bookings.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <a
                  href={CONTACT_INFO.phoneTel}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded transition-colors text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href={CONTACT_INFO.phoneSms}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-slate-200 bg-[#162E4A] hover:bg-[#1E3A5F] border border-[#23456E] rounded transition-colors text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
                  <span>Send SMS</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-5 sm:p-6 rounded-lg border border-slate-200 shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <Mail className="w-4 h-4 text-orange-600" />
                <span>Official Dispatch Email</span>
              </div>
              <a
                href={CONTACT_INFO.emailMailto}
                className="text-base sm:text-lg font-bold text-[#0B1B2B] hover:text-orange-600 transition-colors break-all block"
              >
                {CONTACT_INFO.email}
              </a>
              <p className="text-xs text-slate-500">
                Send carrier packets, rate confirmations, W-9s, and COI documentation.
              </p>
            </div>

            {/* Website Card */}
            <div className="bg-white p-5 sm:p-6 rounded-lg border border-slate-200 shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <Globe className="w-4 h-4 text-orange-600" />
                <span>Official Website</span>
              </div>
              <a
                href={CONTACT_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-[#0B1B2B] hover:text-orange-600 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{CONTACT_INFO.websiteDisplay}</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
              <p className="text-xs text-slate-500">
                Verified web portal for owner-operator load coordination.
              </p>
            </div>

            {/* Hours & Coverage */}
            <div className="p-4 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-2 font-semibold text-[#0B1B2B]">
                <Clock className="w-4 h-4 text-orange-600" />
                <span>Operating Hours</span>
              </div>
              <div>{CONTACT_INFO.hours}</div>
              <div className="text-emerald-700 font-semibold pt-0.5">
                {CONTACT_INFO.support}
              </div>
            </div>

          </div>

          {/* Right 7 Cols: Dispatch Inquiry Form With General Dropdowns In Each Field */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-xs">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B]">
                  Send a Dispatch Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Select your options below. Pre-filled templates allow you to submit your inquiry in seconds.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 bg-[#F8FAFC] border border-slate-200 rounded-lg space-y-4 text-center">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1B2B]">
                    Inquiry Generated Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your pre-filled inquiry was opened in your email client. If your client did not launch, you can copy the full inquiry details below and text them directly to{' '}
                    <span className="font-semibold text-[#0B1B2B]">{CONTACT_INFO.phone}</span>.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#0B1B2B] hover:bg-[#162E4A] rounded-md transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Inquiry Copied!' : 'Copy Inquiry to Clipboard'}</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-md transition-colors cursor-pointer"
                    >
                      Edit & Resubmit Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Field 1: Full Name + Carrier Role Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1B2B] mb-1.5">
                        Full Name / Contact Person <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Miller"
                        className={`w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-[#0B1B2B] min-h-[44px] ${
                          errors.fullName ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1B2B] mb-1.5">
                        Carrier Operation Type
                      </label>
                      <select
                        value={formData.carrierRole}
                        onChange={(e) => setFormData({ ...formData, carrierRole: e.target.value })}
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-[#0B1B2B] min-h-[44px]"
                      >
                        {CARRIER_ROLE_OPTIONS.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field 2: Contact Info + Best Timing Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1B2B] mb-1.5">
                        Phone Number or Email <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactValue}
                        onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                        placeholder="e.g. (813) 555-0199 or driver@example.com"
                        className={`w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-[#0B1B2B] min-h-[44px] ${
                          errors.contactValue ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.contactValue && (
                        <p className="text-xs text-red-600 mt-1">{errors.contactValue}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1B2B] mb-1.5">
                        Best Time to Contact
                      </label>
                      <select
                        value={formData.contactTiming}
                        onChange={(e) => setFormData({ ...formData, contactTiming: e.target.value })}
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-[#0B1B2B] min-h-[44px]"
                      >
                        {CONTACT_TIMING_OPTIONS.map((timing) => (
                          <option key={timing} value={timing}>
                            {timing}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field 3: Equipment Type Dropdown + Preferred Running Lanes Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1B2B] mb-1.5">
                        Equipment Type <span className="text-orange-600">*</span>
                      </label>
                      <select
                        value={formData.equipmentType}
                        onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-[#0B1B2B] min-h-[44px]"
                      >
                        {EQUIPMENT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1B2B] mb-1.5">
                        Preferred Running Lanes / Region
                      </label>
                      <select
                        value={formData.preferredLanes}
                        onChange={(e) => setFormData({ ...formData, preferredLanes: e.target.value })}
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-[#0B1B2B] min-h-[44px]"
                      >
                        {RUNNING_LANES_OPTIONS.map((lane) => (
                          <option key={lane} value={lane}>
                            {lane}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field 4: Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1B2B] mb-1.5">
                      Preferred Communication Channel
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Phone Call', 'Text / SMS', 'Email'] as ContactMethodOption[]).map((method) => {
                        const isSelected = formData.preferredMethod === method;
                        return (
                          <button
                            type="button"
                            key={method}
                            onClick={() => setFormData({ ...formData, preferredMethod: method })}
                            className={`px-3 py-2 text-xs font-medium rounded-md border transition-colors cursor-pointer text-center min-h-[40px] flex items-center justify-center ${
                              isSelected
                                ? 'bg-[#0B1B2B] text-white border-[#0B1B2B] shadow-xs'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {method}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Field 5: Message & Quick Inquiry Topic Dropdown */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <label className="block text-xs font-semibold text-[#0B1B2B]">
                        Message / Dispatch Requirements <span className="text-orange-600">*</span>
                      </label>
                      <span className="text-[11px] text-orange-600 font-medium inline-flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        <span>Autofill with template below</span>
                      </span>
                    </div>

                    {/* Quick Preset Dropdown */}
                    <div className="mb-2">
                      <select
                        value={selectedPreset}
                        onChange={handlePresetChange}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      >
                        {MESSAGE_PRESETS.map((preset) => (
                          <option key={preset.label} value={preset.label}>
                            {preset.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message, preferred lanes, equipment specifications, or select a template above..."
                      className={`w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-[#0B1B2B] ${
                        errors.message ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition-colors shadow-sm min-h-[46px] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via Pre-Filled Email</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors border border-slate-300 min-h-[46px] cursor-pointer"
                      title="Copy inquiry details to paste into text message or WhatsApp"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 pt-1 leading-snug">
                    Your selections format into a clean dispatch summary addressed to <span className="font-semibold text-slate-700">{CONTACT_INFO.email}</span>.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
