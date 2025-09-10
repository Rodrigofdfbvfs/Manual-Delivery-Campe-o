import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const includedFeatures = [
    'Aulas gravadas, do básico ao avançado',
    'Estratégias validadas com mais de 100 clientes',
    'Método para vender seus serviços de tráfego',
    '7 dias de garantia incondicional',
];

export default function Offer() {
  return (
    <section id="oferta" className="py-12 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl uppercase font-bold tracking-tight text-white sm:text-5xl font-headline">
          <span className="text-primary">Oferta especial</span> por tempo limitado
        </h2>

        <div className="mt-12 max-w-lg mx-auto grid grid-cols-1 gap-8 items-start">
            <Card className="border-2 border-primary shadow-2xl shadow-primary/20 relative bg-primary text-primary-foreground">
              <div className="absolute top-4 right-4">
                <div className="bg-black text-primary font-bold font-headline py-1 px-4 rounded-full uppercase text-xs">
                  Mais Popular
                </div>
              </div>
              <CardHeader className="pt-10">
                <p className="text-base font-bold uppercase tracking-wide text-primary-foreground/90">Parcelado</p>
                <div className="flex items-baseline justify-center gap-x-2">
                  <span className="text-2xl font-bold tracking-tight font-headline">12x de R$20,37</span>
                </div>
                <CardDescription className="text-primary-foreground/80">ou R$ 244,44 total</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <ul role="list" className="space-y-3 text-left font-light font-headline text-primary-foreground/90">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-primary-foreground" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                </ul>
                <Button size="lg" className="w-full bg-black hover:bg-black/80 text-primary font-bold">
                    QUERO MINHA VAGA
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black text-card-foreground border border-border">
              <CardHeader className="pt-10">
                <p className="text-base font-bold uppercase tracking-wide text-foreground/90">À Vista</p>
                <div className="flex items-baseline justify-center gap-x-2">
                  <span className="text-4xl font-bold tracking-tight font-headline text-primary">R$197,00</span>
                </div>
                <CardDescription>pagamento único</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <ul role="list" className="space-y-3 text-left font-light font-headline text-primary">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-foreground" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                </ul>
                <Button size="lg" className="w-full bg-white hover:bg-white/90 text-primary font-bold">
                    Comprar a vista
                </Button>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
