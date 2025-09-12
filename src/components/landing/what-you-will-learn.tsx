import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const learningPoints = [
  'Como configurar o seu gerenciador de anúncio do zero',
  'Como subir sua primeira campanha de forma correta',
  'Como veicular e otimizar o seu cardápio digital',
  'Como analisar as métricas mais importantes para delivery',
  'Como aplicar nossas estratégias validadas nos seus anúncios',
];

export default function WhatYouWillLearn() {
  return (
    <section id="learn" className="py-12 sm:py-24 bg-gradient-to-br from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl uppercase font-bold tracking-tight text-white sm:text-5xl font-headline">
            O que você vai <span className="text-primary">aprender no curso</span>
          </h2>
          <p className="mt-4 text-lg font-light text-foreground/80 font-headline">
            Um passo a passo completo, do básico ao avançado, para você dominar os anúncios para delivery.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <Card className="border-primary/20 bg-zinc-900/50">
                <CardContent className="p-6">
                    <ul className="space-y-4">
                        {learningPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <span className="text-lg font-light font-headline text-foreground/90">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
