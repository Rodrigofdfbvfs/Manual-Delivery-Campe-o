import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Preloader from '@/components/preloader';
import SmoothScroll from '@/components/smooth-scroll';

export const metadata: Metadata = {
  title: 'Manual do Delivery Campeão',
  description: 'Aprenda a criar anúncios e ter uma estrutura de anúncios validadas para o seu delivery.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/4387/4387430.png" type="image/png" />
      </head>
      <body className="font-body antialiased">
        <Preloader />
        {children}
        <Toaster />
        <SmoothScroll />
      </body>
    </html>
  );
}
