import { useState, useEffect } from 'react';

const STORAGE_KEY = 'aim_dispatch_offer_expiry_random_v2';

// Helper to generate a realistic random remaining duration within the 3-day offer window
// (between ~26 hours to ~68 hours, e.g. "1d 19h 42m 17s" or "2d 14h 28m 53s")
function getRandomDurationMs(): number {
  // Random hours between 26 and 68 hours (approx 1.1 to 2.8 days remaining)
  const randomHours = Math.floor(Math.random() * (68 - 26 + 1)) + 26;
  const randomMinutes = Math.floor(Math.random() * 60);
  const randomSeconds = Math.floor(Math.random() * 60);
  
  return (randomHours * 3600 + randomMinutes * 60 + randomSeconds) * 1000;
}

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
        if (remaining > 5000) {
          return remaining;
        }
      }
      // Generate a non-zero random offset within the 3-day promotion window
      const randomDuration = getRandomDurationMs();
      const newTarget = Date.now() + randomDuration;
      localStorage.setItem(STORAGE_KEY, newTarget.toString());
      return randomDuration;
    } catch {
      return getRandomDurationMs();
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        let stored = localStorage.getItem(STORAGE_KEY);
        let target = stored ? parseInt(stored, 10) : 0;
        
        if (!target || target <= Date.now()) {
          // If expired, generate a new random duration within the 3-day window
          const randomDuration = getRandomDurationMs();
          target = Date.now() + randomDuration;
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
