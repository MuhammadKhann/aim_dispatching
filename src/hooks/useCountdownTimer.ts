import { useState, useEffect } from 'react';

const STORAGE_KEY = 'aim_dispatch_offer_expiry_v1';
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  formatted: string;
}

export function useCountdownTimer(): CountdownTime {
  const [timeLeftMs, setTimeLeftMs] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const target = parseInt(stored, 10);
        const remaining = target - Date.now();
        if (remaining > 0) {
          return remaining;
        }
      }
      // If none or expired, set a fresh 3 days anchor
      const newTarget = Date.now() + THREE_DAYS_MS;
      localStorage.setItem(STORAGE_KEY, newTarget.toString());
      return THREE_DAYS_MS;
    } catch {
      return THREE_DAYS_MS;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        let stored = localStorage.getItem(STORAGE_KEY);
        let target = stored ? parseInt(stored, 10) : 0;
        
        if (!target || target <= Date.now()) {
          // Reset to 3 days if expired so the promotional demo stays active
          target = Date.now() + THREE_DAYS_MS;
          localStorage.setItem(STORAGE_KEY, target.toString());
        }

        const remaining = Math.max(0, target - Date.now());
        setTimeLeftMs(remaining);
      } catch {
        setTimeLeftMs((prev) => Math.max(0, prev - 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const totalSeconds = Math.floor(timeLeftMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');
  const formatted = `${days > 0 ? `${days}d ` : ''}${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;

  return {
    days,
    hours,
    minutes,
    seconds,
    formatted
  };
}
