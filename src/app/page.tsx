import About from '@/components/landing/about';
import AdCopyGenerator from '@/components/landing/ad-copy-generator';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';
import Hero from '@/components/landing/hero';
import Offer from '@/components/landing/offer';
import Transformation from '@/components/landing/transformation';
import Vsl from '@/components/landing/vsl';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <Hero />
        <Vsl />
        <Transformation />
        <About />
        <Offer />
        <AdCopyGenerator />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
