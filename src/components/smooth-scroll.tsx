'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    Lenis: any;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    if (window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, []);

  return (
    <Script
      src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1/bundled/lenis.min.js"
      strategy="afterInteractive"
    />
  );
}
