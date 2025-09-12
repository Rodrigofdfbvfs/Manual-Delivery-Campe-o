'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isHidden, setIsHidden] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const delay = 3000; // 3 seconds

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
      className={`preloader fixed inset-0 bg-black flex flex-col items-center justify-center text-center ${
        isHidden ? 'hidden' : ''
      }`}
    >
      <p className="text-4xl sm:text-5xl text-white font-headline font-bold preloader-text uppercase tracking-tighter">
        A <span className="text-primary">virada de chave</span>
        <br />
        para o seu delivery.
      </p>
    </div>
  );
}
