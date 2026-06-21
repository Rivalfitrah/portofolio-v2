import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import SmoothScroller from "./SmoothScroller";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Rival Fitrah Dermawan | Full-Stack Developer & Software Engineer',
  description: 'Software Engineering student at IPB University with a focus on Web Development. Experienced in building real-world applications based on user needs and collaborating within development teams. Skilled in developing end-to-end applications from frontend to backend, including the design and integration of REST APIs. Technologies include React.js, Next.js, Laravel, Node.js, and Python.',
  keywords: [
    'Rival Fitrah Dermawan',
    'Rival',
    'Rival Fitrah',
    'Portofolio',
    'Full-Stack Developer',
    'Software Engineer',
    'IPB University',
    'Web Developer Indonesia'
  ],
  icons: {
    icon: '/logo.svg', // Browser modern aman membaca SVG untuk favicon tab
  },
  openGraph: {
    title: 'Rival Fitrah Dermawan | Full-Stack Developer & Software Engineer',
    description: 'Software Engineering student at IPB University with a focus on Web Development. Experienced in building real-world applications from frontend to backend.',
    url: 'https://www.rivalfitrah.my.id/',
    siteName: 'Rival Fitrah Dermawan Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 500,
        height: 500,
        alt: 'Rival Fitrah Dermawan',
      }
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
