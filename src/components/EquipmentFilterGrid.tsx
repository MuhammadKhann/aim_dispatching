import React, { useState } from 'react';
import { TRUCK_EQUIPMENT_DATA } from '../data/content';
import { PageId } from '../types';
import { Truck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EquipmentFilterGridProps {
  onNavigate?: (page: PageId) => void;
  showTitle?: boolean;
}

export const EquipmentFilterGrid: React.FC<EquipmentFilterGridProps> = ({ 
  onNavigate,
  showTitle = true 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Enclosed', 'Open Deck', 'Expedited', 'Power Only'];

  const filteredEquipment = activeCategory === 'All'
    ? TRUCK_EQUIPMENT_DATA
    : TRUCK_EQUIPMENT_DATA.filter((eq) => eq.category === activeCategory);

  return (
    <div className="space-y-8">
      {showTitle && (
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1677FF] uppercase tracking-wider">
            <Truck className="w-4 h-4" />
            <span>Versatile Commercial Fleet Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F33]">
            Equipment Types We Dispatch
          </h2>
          <p className="text-base text-[#667085]">
            AIM Dispatching works with virtually all major commercial truck types. Our dispatchers understand the specific load boards, lane dynamics, and rate requirements for each piece of equipment.
          </p>
        </div>
      )}

      {/* Category filter tabs */}
      <div className="w-full overflow-x-auto no-scrollbar pb-1">
        <div className="inline-flex gap-1 p-1 bg-slate-200/70 rounded-lg min-w-full sm:min-w-0 sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 min-h-[38px] ${
                activeCategory === cat
                  ? 'bg-white text-[#0B1F33] shadow-xs'
                  : 'text-[#667085] hover:text-[#0B1F33]'
              }`}
            >
              {cat} {cat === 'All' ? `(${TRUCK_EQUIPMENT_DATA.length})` : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {filteredEquipment.map((equipment) => (
          <div
            key={equipment.id}
            className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 hover:border-[#1677FF]/50 transition-colors flex flex-col justify-between shadow-xs w-full"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold text-[#1677FF] uppercase tracking-wider block">
                    {equipment.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1F33] mt-0.5 break-words">
                    {equipment.name}
                  </h3>
                </div>
                <div className="p-2 bg-[#F5F7FA] rounded text-[#0B1F33] shrink-0">
                  <Truck className="w-5 h-5 text-[#1677FF]" />
                </div>
              </div>

              <p className="text-xs text-[#667085] leading-relaxed break-words">
                {equipment.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1">
                  <span className="font-semibold text-[#0B1F33] shrink-0">Specifications: </span>
                  <span className="text-[#667085] break-words">{equipment.dimensions}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1">
                  <span className="font-semibold text-[#0B1F33] shrink-0">Typical Freight: </span>
                  <span className="text-[#667085] break-words">{equipment.typicalFreight}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
              <span className="text-xs text-[#0B1F33] font-medium break-words leading-tight">{equipment.keyAdvantage}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom helper note */}
      <div className="bg-[#F5F7FA] border border-slate-200 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs text-[#667085] w-full">
        <div className="leading-relaxed">
          <span className="font-semibold text-[#0B1F33]">Operating custom or specialized equipment? </span>
          <span>We also support straight trucks, step decks with ramps, RGN, and multi-axle configurations.</span>
        </div>
        {onNavigate && (
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-1.5 font-semibold text-[#1677FF] hover:text-[#0e63d8] whitespace-nowrap shrink-0 py-1"
          >
            <span>Inquire About Your Rig</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
