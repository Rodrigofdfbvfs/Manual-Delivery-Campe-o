import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl font-headline">
          MANUAL DO DELIVERY CAMPEÃO
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto font-light leading-8 text-foreground/80 font-headline">
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
