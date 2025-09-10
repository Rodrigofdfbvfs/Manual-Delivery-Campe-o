import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users, DollarSign, Calendar, Target } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: "100+",
    label: "clientes avançados",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    value: "R$ 500K+",
    label: "investidos em anúncios",
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    value: "4+",
    label: "anos de experiência",
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    value: "100%",
    label: "focado em delivery",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-transparent border-0 shadow-none">
              <CardHeader className="items-center">
                {stat.icon}
              </CardHeader>
              <CardContent>
                <h3 className="text-4xl sm:text-5xl font-extrabold text-primary font-headline">
                  {stat.value}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-foreground/80 font-headline uppercase font-semibold">
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
