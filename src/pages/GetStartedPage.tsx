import React, { useState } from 'react';
import { PageId } from '../types';
import { TRUCK_EQUIPMENT_DATA } from '../data/content';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Truck, 
  FileText, 
  Info, 
  ArrowRight,
  X,
  FileCheck2
} from 'lucide-react';

interface GetStartedPageProps {
  onNavigate: (page: PageId) => void;
}

export const GetStartedPage: React.FC<GetStartedPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    mcNumber: '',
    dotNumber: '',
    truckType: 'Dry Van',
    truckCount: '1 Truck (Owner-Operator)',
    preferredLanes: 'Regional Midwest / Southeast',
    additionalInfo: ''
  });

  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(prev => ({
      ...prev,
      fullName: prev.fullName.trim().slice(0, 80),
      companyName: prev.companyName.trim().slice(0, 100),
      phone: prev.phone.trim().slice(0, 30),
      email: prev.email.trim().slice(0, 100),
      mcNumber: prev.mcNumber.trim().slice(0, 20),
      dotNumber: prev.dotNumber.trim().slice(0, 20),
      preferredLanes: prev.preferredLanes.trim().slice(0, 150),
      additionalInfo: prev.additionalInfo.trim().slice(0, 1000)
    }));
    setPreviewModalOpen(true);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO HEADER */}
      <section className="bg-[#0B1F33] text-white py-14 sm:py-18 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded inline-block">
              Carrier Onboarding
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Get Started With AIM Dispatching
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Complete your carrier profile below to establish dispatch parameters, equipment specifications, and lane preferences.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN ONBOARDING FORM SECTION */}
      <section className="py-16 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 4 cols: Requirements & Notice */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Notice Banner */}
              <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
                  <Info className="w-4 h-4" />
                  <span>Interactive Design Preview</span>
                </div>
                <p className="text-xs text-[#667085] leading-relaxed">
                  This onboarding form illustrates the carrier intake process. Submitting demonstrates visual validation and profile generation without transmitting data to external servers or CRMs.
                </p>
              </div>

              {/* What carriers need */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-xs">
                <h3 className="text-sm font-bold text-[#0B1F33]">
                  Carrier Verification Checklist
                </h3>
                <p className="text-xs text-[#667085]">
                  Standard documents required prior to booking first load:
                </p>
                <ul className="space-y-2.5 text-xs text-[#0B1F33]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                    <span>Active MC Authority Certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                    <span>Certificate of Insurance (COI)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                    <span>Signed W-9 Form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                    <span>Notice of Assignment (NOA) if factoring</span>
                  </li>
                </ul>
              </div>

              {/* Pricing reminder */}
              <div className="bg-[#0B1F33] text-white rounded-lg p-6 space-y-3 shadow-xs">
                <div className="text-xs font-semibold text-[#1677FF] uppercase tracking-wider">
                  Transparent Terms
                </div>
                <div className="text-2xl font-bold">
                  6% to 8% <span className="text-sm font-normal text-slate-300">/ per load</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  New carriers may qualify for 1–3 loads with zero dispatch fee, depending on the agreed deal.
                </p>
                <div className="pt-2 text-[11px] text-slate-400 border-t border-[#1E3A5F]">
                  No upfront setup fees &bull; No forced dispatch
                </div>
              </div>

            </div>

            {/* Right 8 cols: Form */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-xs space-y-8">
                
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-2xl font-bold text-[#0B1F33]">
                    Carrier Information & Dispatch Profile
                  </h2>
                  <p className="text-xs sm:text-sm text-[#667085] mt-1">
                    Please provide accurate operational details to help us pair your truck with optimal freight.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Step 1: Contact details */}
                  <div className="space-y-4">
                    <div className="text-xs font-bold text-[#0B1F33] uppercase tracking-wider">
                      1. Contact & Business Identity
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Robert Vance"
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Vance Trucking LLC"
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="dispatch@vancetrucking.com"
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Authority numbers */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-[#0B1F33] uppercase tracking-wider">
                      2. Motor Carrier Authority
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          MC Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.mcNumber}
                          onChange={(e) => setFormData({ ...formData, mcNumber: e.target.value })}
                          placeholder="MC-XXXXXX"
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          USDOT Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.dotNumber}
                          onChange={(e) => setFormData({ ...formData, dotNumber: e.target.value })}
                          placeholder="DOT-XXXXXXX"
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Equipment & Fleet */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-[#0B1F33] uppercase tracking-wider">
                      3. Equipment & Capacity
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          Primary Truck / Equipment Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.truckType}
                          onChange={(e) => setFormData({ ...formData, truckType: e.target.value })}
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        >
                          {TRUCK_EQUIPMENT_DATA.map((t) => (
                            <option key={t.id} value={t.name}>
                              {t.name}
                            </option>
                          ))}
                          <option value="Other Commercial Rig">Other Commercial Equipment</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                          Number of Trucks
                        </label>
                        <select
                          value={formData.truckCount}
                          onChange={(e) => setFormData({ ...formData, truckCount: e.target.value })}
                          className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                        >
                          <option>1 Truck (Owner-Operator)</option>
                          <option>2 – 3 Trucks</option>
                          <option>4 – 6 Trucks</option>
                          <option>7 – 10 Trucks</option>
                          <option>10+ Fleet Units</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                        Preferred Lanes / Running Areas
                      </label>
                      <input
                        type="text"
                        value={formData.preferredLanes}
                        onChange={(e) => setFormData({ ...formData, preferredLanes: e.target.value })}
                        placeholder="e.g. Midwest to Southeast, Texas Triangle, All 48 OTR..."
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                        Additional Information / Specific Preferences
                      </label>
                      <textarea
                        rows={3}
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                        placeholder="Mention any special equipment (liftgate, tarps, ramps), factoring company name, or home time expectations..."
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33]"
                      />
                    </div>
                  </div>

                  {/* Submission button with visual hover effect according to brief */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1F33] cursor-pointer"
                    >
                      <span>Start With AIM Dispatching</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <p className="text-[11px] text-[#667085] mt-2">
                      Clicking generates an instant profile preview. This demo interface does not transmit or store private credentials.
                    </p>
                  </div>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CARRIER PROFILE DEMO MODAL */}
      {previewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-200 animate-in fade-in duration-200">
            
            <div className="bg-[#0B1F33] text-white px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-[#1677FF]" />
                <span className="font-bold text-sm">Carrier Intake Profile Preview</span>
              </div>
              <button
                onClick={() => setPreviewModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-4 text-xs sm:text-sm text-[#0B1F33]">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-xs">
                <strong>Profile Verification Success:</strong> All required fields for carrier setup have been validated.
              </div>

              <div className="space-y-2 border border-slate-100 rounded-md p-3 bg-[#F5F7FA]">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-[#667085]">Carrier Name:</span>
                  <span className="font-semibold">{formData.companyName || 'Vance Trucking LLC'}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-[#667085]">Contact:</span>
                  <span className="font-semibold">{formData.fullName || 'Robert Vance'}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-[#667085]">MC Number:</span>
                  <span className="font-mono font-semibold">{formData.mcNumber || 'MC-128495'}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-[#667085]">DOT Number:</span>
                  <span className="font-mono font-semibold">{formData.dotNumber || 'DOT-3891402'}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-[#667085]">Equipment Type:</span>
                  <span className="font-semibold">{formData.truckType}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-[#667085]">Fleet Capacity:</span>
                  <span className="font-semibold">{formData.truckCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#667085]">Preferred Lanes:</span>
                  <span className="font-semibold truncate max-w-[200px]">{formData.preferredLanes}</span>
                </div>
              </div>

              <div className="p-3 bg-[#F5F7FA] border border-slate-200 rounded text-xs text-[#667085]">
                <span className="font-semibold text-[#0B1F33] block mb-0.5">Demo System Status:</span>
                As specified in requirements, this onboarding intake is visual demo only and connects to no external CRM or database. Live dispatch integrations will activate upon launch.
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setPreviewModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#0B1F33] bg-[#F5F7FA] hover:bg-slate-200 rounded"
                >
                  Edit Information
                </button>
                <button
                  onClick={() => {
                    setPreviewModalOpen(false);
                    onNavigate('home');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#0e63d8] rounded"
                >
                  Return to Home
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
