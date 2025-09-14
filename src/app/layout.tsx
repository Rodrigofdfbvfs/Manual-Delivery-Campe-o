import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Preloader from '@/components/preloader';
import SmoothScroll from '@/components/smooth-scroll';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-open-sans',
});

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
    <html lang="pt-BR" className={`dark ${openSans.variable}`}>
      <head>
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
