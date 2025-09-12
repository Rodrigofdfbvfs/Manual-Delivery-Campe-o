"use client";

import { useEffect, useState } from 'react';

type TimeUnit = "Dias" | "Horas" | "Minutos" | "Segundos";

const TimeBlock = ({ value, label }: { value: number, label: TimeUnit }) => (
    <div className="flex flex-col items-center justify-center text-center">
        <div className="countdown-item w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl">
            <span className="text-3xl sm:text-4xl font-bold font-headline text-white">{String(value).padStart(2, '0')}</span>
        </div>
        <span className="mt-2 text-xs sm:text-sm font-light text-foreground/80 uppercase">{label}</span>
    </div>
);

export default function CountdownTimer({ duration }: { duration: number }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="mt-8 flex justify-center gap-3 sm:gap-6">
      <TimeBlock value={hours} label="Horas" />
      <TimeBlock value={minutes} label="Minutos" />
      <TimeBlock value={seconds} label="Segundos" />
    </div>
  );
}
