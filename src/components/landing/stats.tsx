import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    value: "100+",
    label: "clientes avançados",
  },
  {
    value: "R$ 500K+",
    label: "investidos em anúncios",
  },
  {
    value: "4+",
    label: "anos de experiência",
  },
  {
    value: "100%",
    label: "focado em delivery",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
                <h3 className="text-4xl sm:text-5xl font-extrabold text-primary font-headline">
                  {stat.value}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-foreground/80 font-headline uppercase font-semibold">
                  {stat.label}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
