import { Rocket, TrendingUp, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Iniciante no Delivery',
    subtitle: 'Do zero à demanda constante',
    description: 'Aprenda a criar seu primeiro delivery com uma estrutura de anúncios que gera pedidos desde o primeiro dia.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Delivery em Crescimento',
    subtitle: 'multiplique suas vendas',
    description: 'Otimize seus anuncios atuais e implemente estrategias avançadas para alavancar ainda mais suas vendas',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Gestor de Tráfego',
    subtitle: 'domine um nicho lucrativo',
    description: 'Torne-se um especialista e gere uma nova fonte de renda prestando serviços para outros deliveries.',
  },
];

export default function Transformation() {
  return (
    <section id="transformation" className="py-12 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="transformation-heading" className="text-4xl uppercase font-bold tracking-tight text-white sm:text-5xl font-headline">
            A <span className="text-primary">transformação</span> que o seu delivery precisa
          </h2>
          <p className="mt-4 text-lg font-light text-foreground/80 font-headline">
            Não importa em que estágio você está, este curso foi pensado para levar você ao próximo nível.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center border-primary/20 hover:border-primary transition-colors rounded-2xl">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 font-bold font-headline text-white">
                  {feature.title}
                  <span className="block text-primary text-lg font-semibold">{feature.subtitle}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-light font-headline text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
