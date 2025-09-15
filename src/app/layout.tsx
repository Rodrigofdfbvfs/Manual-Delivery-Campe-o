import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Preloader from '@/components/preloader';
import SmoothScroll from '@/components/smooth-scroll';
import Script from 'next/script';

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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4234400090174570');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=4234400090174570&ev=PageView&noscript=1"
          />
        </noscript>
        <Preloader />
        {children}
        <Toaster />
        <SmoothScroll />
      </body>
    </html>
  );
}
