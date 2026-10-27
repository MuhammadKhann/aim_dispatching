import React, { useEffect } from 'react';
import { X, Sparkles, Clock, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CountdownTime } from '../hooks/useCountdownTimer';
import { CONTACT_INFO } from '../data/contact';

interface FreeLoadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaim: () => void;
  timer: CountdownTime;
}

export const FreeLoadModal: React.FC<FreeLoadModalProps> = ({
  isOpen,
  onClose,
  onClaim,
  timer
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-welcome-title"
    >
      <div 
        className="relative w-full max-w-lg bg-[#0B1B2B] text-white border border-[#23456E] rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Subtle orange accent top bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-[#162E4A] rounded-md transition-colors cursor-pointer z-10"
          aria-label="Close offer modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-5">
          
          {/* Welcome Header */}
          <div className="space-y-1.5 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Welcome to AIM Dispatching</span>
            </div>
            
            <h2 id="modal-welcome-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-1">
              Your First Load Is <span className="text-orange-500">100% Free!</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              We welcome owner-operators and carrier fleets to experience our full back-office load booking and rate negotiation with <strong className="text-white font-semibold">zero dispatch fees</strong> on your first run.
            </p>
          </div>

          {/* 3-Day Countdown Timer Block */}
          <div className="p-4 bg-[#0F243A] border border-[#23456E] rounded-lg text-center space-y-2.5">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              <span>Limited-Time 3-Day Offer Expires In:</span>
            </div>

            {/* Timer Digits */}
            <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
              <div className="bg-[#081420] border border-[#162E4A] rounded-md py-2 px-1 text-center">
                <span className="block text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                  {pad(timer.days)}
                </span>
                <span className="text-[10px] uppercase text-slate-400 font-semibold">Days</span>
              </div>

              <div className="bg-[#081420] border border-[#162E4A] rounded-md py-2 px-1 text-center">
                <span className="block text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                  {pad(timer.hours)}
                </span>
                <span className="text-[10px] uppercase text-slate-400 font-semibold">Hours</span>
              </div>

              <div className="bg-[#081420] border border-[#162E4A] rounded-md py-2 px-1 text-center">
                <span className="block text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                  {pad(timer.minutes)}
                </span>
                <span className="text-[10px] uppercase text-slate-400 font-semibold">Mins</span>
              </div>

              <div className="bg-[#081420] border border-orange-500/40 rounded-md py-2 px-1 text-center">
                <span className="block text-xl sm:text-2xl font-mono font-bold text-orange-400 tabular-nums">
                  {pad(timer.seconds)}
                </span>
                <span className="text-[10px] uppercase text-orange-300 font-semibold">Secs</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              Valid for qualifying new carriers. No long-term lock-ins or hidden charges.
            </p>
          </div>

          {/* Quick Value Points */}
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
              <span>100% No Forced Dispatch — you approve every lane and rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Full broker setup packets, COI filing, and rate confirmation handling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Direct communication with founder Muhammad and our dispatch desk</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={onClaim}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition-colors shadow-md cursor-pointer"
            >
              <span>Claim Free First Load Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={CONTACT_INFO.phoneTel}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-[#162E4A] hover:bg-[#1E3A5F] border border-[#23456E] rounded-md transition-colors text-center"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>Call Us Directly: {CONTACT_INFO.phone}</span>
            </a>
          </div>

          <div className="text-center">
            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white underline underline-offset-2 cursor-pointer"
            >
              No thanks, I will browse the website first
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
