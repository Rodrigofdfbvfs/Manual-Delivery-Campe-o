import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Lock, ShieldCheck, Zap } from "lucide-react";
import CountdownTimer from "./countdown-timer";

const includedFeatures = [
    'Aulas gravadas, do básico ao avançado',
    'Estratégias validadas com mais de 100 clientes',
    'Método para vender seus serviços de tráfego',
    '7 dias de garantia incondicional',
];

export default function Offer() {
  return (
    <section id="oferta" className="py-12 sm:py-24 bg-gradient-to-bl from-zinc-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl uppercase font-bold tracking-tight text-white sm:text-5xl font-headline">
          <span className="text-primary">Oferta especial</span> por tempo limitado
        </h2>
        
        <CountdownTimer duration={30 * 60 * 1000} />

        <div className="mt-12 max-w-md mx-auto">
            <Card className="border-2 border-primary shadow-2xl shadow-primary/20 relative bg-black text-card-foreground">
              <CardHeader className="pt-10">
                <p className="text-base font-bold uppercase tracking-wide text-foreground/90">Pagamento Único</p>
                <div className="flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight font-headline text-primary">R$47,90</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <ul role="list" className="space-y-3 text-left font-light font-headline text-foreground">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                </ul>
                <Button size="lg" className="shiny-cta-button w-full">
                    QUERO GARANTIR MINHA VAGA
                </Button>
              </CardContent>
            </Card>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto">
            <div className="rounded-full border border-border/50 bg-background/50 py-4 px-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-base font-light text-foreground/80">
                    <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-primary" />
                        <span>Compra 100% segura</span>
                    </div>
                    <div className="hidden sm:block h-4 w-px bg-border/50"></div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        <span>7 dias de garantia</span>
                    </div>
                    <div className="hidden sm:block h-4 w-px bg-border/50"></div>
                    <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Acesso imediato</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
