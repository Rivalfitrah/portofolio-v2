// app/components/SmoothScroller.tsx
'use client' // Komponen ini harus berjalan di client

import Lenis from 'lenis'
import { useEffect } from 'react'

// Kita terima 'children' agar bisa membungkus seluruh halaman kita
function SmoothScroller( { children }: { children: React.ReactNode }) {
  // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

  // Gunakan useEffect untuk menginisialisasi Lenis saat komponen dimount
  useEffect(() => {
    // Start Lenis
    lenis.start();

    // Cleanup function to stop Lenis when the component unmounts
    return () => {
      lenis.stop();
    };
  }, []);

  // Render children yang dibungkus oleh div dengan class 'smooth-scroller'
  return <div className="smooth-scroller">{children}</div>;

}

export default SmoothScroller