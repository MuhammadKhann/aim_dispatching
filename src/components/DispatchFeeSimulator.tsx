import React, { useState } from 'react';
import { PageId } from '../types';
import { Calculator, ArrowRight, Check } from 'lucide-react';

interface DispatchFeeSimulatorProps {
  onNavigate?: (page: PageId) => void;
}

export const DispatchFeeSimulator: React.FC<DispatchFeeSimulatorProps> = ({ onNavigate }) => {
  const [weeklyGross, setWeeklyGross] = useState<number>(7500);
  const [feeRate, setFeeRate] = useState<number>(7);
  const [selectedTruck, setSelectedTruck] = useState<string>('Dry Van');

  const trucks = [
    'Dry Van',
    'Reefer',
    'Flatbed',
    'Step Deck',
    'Hotshot',
    'Box Truck',
    'Power Only'
  ];

  const dispatchFee = Math.round((weeklyGross * feeRate) / 100);
  const carrierNet = weeklyGross - dispatchFee;
  const estimatedSavingsOffer = Math.round((weeklyGross / 3) * (feeRate / 100) * 2); // 2 free loads estimate

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1677FF] uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Transparent Rate Calculator</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#0B1F33] mt-1">
            Dispatch Fee & Carrier Retention Estimator
          </h3>
          <p className="text-xs sm:text-sm text-[#667085] mt-0.5">
            Test how our straightforward 6%–8% fee applies to your weekly freight gross.
          </p>
        </div>

        <div className="flex items-center gap-1 bg-[#F5F7FA] p-1 rounded-md border border-slate-200 w-full sm:w-auto">
          {[6, 7, 8].map((rate) => (
            <button
              key={rate}
              onClick={() => setFeeRate(rate)}
              className={`flex-1 sm:flex-initial px-3 py-1.5 text-xs font-semibold rounded transition-colors min-h-[38px] ${
                feeRate === rate
                  ? 'bg-[#0B1F33] text-white shadow-xs'
                  : 'text-[#667085] hover:text-[#0B1F33]'
              }`}
            >
              {rate}% Tier
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-6 w-full">
        
        {/* Controls - Left 7 cols */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Equipment selector */}
          <div>
            <label className="block text-xs font-semibold text-[#0B1F33] mb-2 uppercase tracking-wider">
              Select Equipment Type
            </label>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {trucks.map((truck) => (
                <button
                  key={truck}
                  onClick={() => setSelectedTruck(truck)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                    selectedTruck === truck
                      ? 'bg-[#1677FF] text-white border-[#1677FF]'
                      : 'bg-[#F5F7FA] text-[#0B1F33] border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {truck}
                </button>
              ))}
            </div>
          </div>

          {/* Gross slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-[#0B1F33] text-xs sm:text-sm">Estimated Weekly Gross:</span>
              <span className="font-mono font-bold text-base sm:text-lg text-[#1677FF] tabular-nums">
                ${weeklyGross.toLocaleString()}
              </span>
            </div>
            
            <input
              type="range"
              min="3000"
              max="16000"
              step="250"
              value={weeklyGross}
              onChange={(e) => setWeeklyGross(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1677FF]"
              aria-label="Weekly gross revenue range"
            />
            
            <div className="flex justify-between text-[10px] sm:text-[11px] text-[#667085] font-mono">
              <span>$3k/wk</span>
              <span>$7.5k/wk</span>
              <span>$12k/wk</span>
              <span>$16k/wk</span>
            </div>
          </div>

          {/* Included in fee checklist */}
          <div className="pt-2">
            <span className="text-xs font-semibold text-[#0B1F33] block mb-2">
              All-Inclusive in Your {feeRate}% Fee:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#667085]">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                <span>Dedicated Load Booking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                <span>Aggressive Rate Negotiation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                <span>Carrier Packets & COI Checks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                <span>Invoicing & Factoring Support</span>
              </div>
            </div>
          </div>

        </div>

        {/* Calculations - Right 5 cols */}
        <div className="lg:col-span-5 bg-[#F5F7FA] border border-slate-200 rounded-md p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-xs font-semibold text-[#667085] uppercase tracking-wider">
              {selectedTruck} &bull; Weekly Breakdown
            </div>

            <div className="space-y-3 pb-3 border-b border-slate-200">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-[#667085]">Gross Freight Booked:</span>
                <span className="font-mono font-medium text-sm text-[#0B1F33] tabular-nums">
                  ${weeklyGross.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-baseline">
                <span className="text-xs text-[#667085]">
                  AIM Dispatch Fee ({feeRate}%):
                </span>
                <span className="font-mono font-medium text-sm text-[#0B1F33] tabular-nums">
                  -${dispatchFee.toLocaleString()}
                </span>
              </div>
            </div>

            <div>
              <div className="text-xs text-[#667085]">Carrier Net Take-Home ({100 - feeRate}%):</div>
              <div className="font-mono text-3xl font-extrabold text-[#0B1F33] tabular-nums mt-0.5">
                ${carrierNet.toLocaleString()}
              </div>
              <p className="text-[11px] text-[#667085] mt-1">
                You retain {100 - feeRate}% of the gross freight rate negotiated directly with brokers.
              </p>
            </div>

            {/* Promotional savings badge */}
            <div className="p-3 bg-white border border-[#1677FF]/20 rounded text-xs space-y-1">
              <div className="font-semibold text-[#1677FF] flex items-center gap-1">
                <span>New Carrier Offer Benefit</span>
              </div>
              <p className="text-slate-600 text-[11px]">
                Qualifying for 1–3 fee-free loads saves an estimated <strong>${estimatedSavingsOffer.toLocaleString()}</strong> in initial dispatch fees.
              </p>
            </div>
          </div>

          {onNavigate && (
            <button
              onClick={() => onNavigate('get-started')}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0B1F33] hover:bg-[#152B42] rounded transition-colors"
            >
              <span>Get Started With AIM Dispatching</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
