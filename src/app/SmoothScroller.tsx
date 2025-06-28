// app/components/SmoothScroller.tsx
'use client' // Komponen ini harus berjalan di client
import React from 'react'



// Kita terima 'children' agar bisa membungkus seluruh halaman kita
function SmoothScroller( { children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Inisialisasi Lenis hanya di client
    const Lenis = require('lenis').default || require('lenis');
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on('scroll', (e: any) => {
    });
    lenis.start();
    return () => {
      lenis.stop();
    };
  }, []);

  return <div className="smooth-scroller">{children}</div>;
}

export default SmoothScroller