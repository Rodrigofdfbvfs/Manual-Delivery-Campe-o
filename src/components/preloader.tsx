'use client';

import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function Preloader() {
  const [isHidden, setIsHidden] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const delay = 4000; // 4 seconds

    const hideTimer = setTimeout(() => {
      setIsHidden(true);
    }, delay);

    // After the transition ends, remove the component from the DOM
    const removeTimer = setTimeout(() => {
        setIsRemoved(true);
    }, delay + 2000); // 2 seconds for transition

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (isRemoved) {
    return null;
  }

  return (
    <div
      className={`preloader fixed inset-0 bg-background flex flex-col items-center justify-center ${
        isHidden ? 'hidden' : ''
      }`}
    >
      <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
      <p className="text-xl text-foreground font-headline">
        A virada de chave para o seu delivery.
      </p>
    </div>
  );
}
