import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users, DollarSign, Calendar, Target } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "100+",
    label: "clientes avançados",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    value: "R$ 500K+",
    label: "investidos em anúncios",
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    value: "4+",
    label: "anos de experiência",
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    value: "100%",
    label: "focado em delivery",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-8 bg-gradient-to-br from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-transparent border-zinc-800 hover:border-primary hover:scale-105 transition-all">
              <CardHeader className="items-center pb-2">
                {stat.icon}
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-primary font-headline">
                  {stat.value}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-foreground/80 font-headline uppercase font-semibold">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
