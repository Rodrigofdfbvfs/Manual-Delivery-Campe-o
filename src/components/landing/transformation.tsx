import { Target, TrendingUp, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Comece com Demanda',
    description: 'Aprenda a criar anúncios que atraem clientes desde o primeiro dia, mesmo sem ter um grande orçamento.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Alavanque suas Vendas',
    description: 'Domine estratégias validadas para escalar seus pedidos e aumentar seu faturamento de forma consistente.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Ofereça Serviços de Tráfego',
    description: 'Torne-se um especialista e gere uma nova fonte de renda prestando serviços para outros deliveries.',
  },
];

export default function Transformation() {
  return (
    <section id="transformation" className="py-12 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="transformation-heading" className="text-4xl uppercase font-bold tracking-tight text-primary sm:text-5xl font-headline">
            A transformação que o seu delivery precisa
          </h2>
          <p className="mt-4 text-lg font-light text-foreground/80 font-headline">
            O Manual do Delivery Campeão é para você que busca:
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 font-bold font-headline text-primary">
                  {feature.title}
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
