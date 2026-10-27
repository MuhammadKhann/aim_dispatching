import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface MobileQuickBarProps {
  onGetStarted: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onGetStarted }) => {
  return (
    <aside 
      aria-label="Mobile quick contact bar" 
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B1B2B]/95 backdrop-blur-md border-t border-[#162E4A] px-3 py-2 shadow-lg"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        <a
          href={CONTACT_INFO.phoneTel}
          className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-white bg-orange-600 active:bg-orange-700 rounded transition-colors text-center min-h-[40px]"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call</span>
        </a>

        <a
          href={CONTACT_INFO.phoneSms}
          className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-slate-200 bg-[#162E4A] active:bg-[#1E3A5F] border border-[#23456E] rounded transition-colors text-center min-h-[40px]"
        >
          <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
          <span>Text</span>
        </a>

        <button
          onClick={onGetStarted}
          className="flex items-center justify-center gap-1 py-2 px-2 text-xs font-semibold text-white bg-slate-800 active:bg-slate-700 border border-slate-700 rounded transition-colors text-center min-h-[40px] cursor-pointer"
        >
          <span>Start</span>
          <ArrowRight className="w-3 h-3 text-orange-400" />
        </button>
      </div>
    </aside>
  );
};
