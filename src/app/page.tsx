import About from '@/components/landing/about';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';
import Guarantee from '@/components/landing/guarantee';
import Hero from '@/components/landing/hero';
import Offer from '@/components/landing/offer';
import Quote from '@/components/landing/quote';
import Stats from '@/components/landing/stats';
import Transformation from '@/components/landing/transformation';
import Vsl from '@/components/landing/vsl';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <Hero />
        <Vsl />
        <Transformation />
        <Guarantee />
        <About />
        <Quote />
        <Stats />
        <Offer />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
