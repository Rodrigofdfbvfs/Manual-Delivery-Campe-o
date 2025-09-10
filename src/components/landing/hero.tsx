import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Video, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-32 flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
      <div className="container mx-auto px-4 text-center z-20 relative">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-7xl lg:text-8xl font-headline">
          <span className="text-white">MANUAL DO</span><br />DELIVERY CAMPEÃO
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto font-light leading-8 text-white/90 font-headline">
          Domine a criação de estruturas de anúncios validadas e transforme seu delivery em uma verdadeira máquina de vendas, mesmo começando do zero.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
          <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-lg px-10 py-7 font-bold text-primary-foreground hover:brightness-110 transition-all transform hover:scale-105 animate-pulse-slow">
            <Link href="#oferta">
              QUERO COMEÇAR AGORA
            </Link>
          </Button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-white/80 mt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>7 dias de garantia</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                <span>Aulas gravadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Estratégias validadas</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
