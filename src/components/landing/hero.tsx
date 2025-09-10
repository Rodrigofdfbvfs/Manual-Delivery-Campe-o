import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-32 flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/chef-com-tablet.png"
        alt="Chef feliz mostrando o Manual do Delivery Campeão em um tablet"
        fill
        className="object-cover absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="container mx-auto px-4 text-center z-20 relative">
        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-7xl lg:text-8xl font-headline">
          MANUAL DO<br />DELIVERY CAMPEÃO
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto font-light leading-8 text-white/90 font-headline">
          Aprenda a criar uma estrutura de anúncios validada e transforme seu delivery em uma máquina de vendas, mesmo que você esteja começando do zero.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#oferta">
              QUERO VENDER MAIS AGORA
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
