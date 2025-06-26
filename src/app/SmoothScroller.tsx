// app/components/SmoothScroller.tsx
'use client' // Komponen ini harus berjalan di client

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useEffect } from 'react'

// Kita terima 'children' agar bisa membungkus seluruh halaman kita
function SmoothScroller({ children }: { children: React.ReactNode }) {

  // Opsi untuk kustomisasi Lenis.
  // lerp: seberapa "lembut" scroll-nya. Nilai lebih rendah = lebih lembut.
  // duration: durasi animasi scroll saat menggunakan lenis.scrollTo()
  const options = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true, // Mengaktifkan smooth scroll di perangkat sentuh
  }

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroller