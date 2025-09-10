import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-4 sm:py-8 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center">
            <ShieldCheck className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-3xl uppercase font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="mt-4 text-lg font-light leading-8 text-primary-foreground/90 font-headline max-w-3xl mx-auto">
                Seu risco é zero. Se você aplicar o que ensino e não ver os resultados em 7 dias, devolvemos 100% do seu investimento.
            </p>
            <div className="mt-8">
                <Button size="lg" variant="secondary" asChild className="text-lg px-10 py-7 font-bold hover:brightness-110 transition-all transform hover:scale-105">
                    <Link href="#oferta">
                        QUERO MINHA VAGA COM GARANTIA
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
