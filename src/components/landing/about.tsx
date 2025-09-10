import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
            <h2 className="text-4xl uppercase font-bold tracking-tight text-primary sm:text-5xl font-headline">
              SOBRE O SEU MENTOR, VIKTO
            </h2>
            <p className="mt-6 text-lg font-light leading-8 text-foreground/80 font-headline max-w-3xl mx-auto">
              Com mais de 4 anos de experiência no campo de batalha do tráfego pago, hoje lidero uma agência que já foi o motor de crescimento para mais de 100 clientes no ramo de delivery.
            </p>
            <p className="mt-4 text-lg font-light leading-8 text-foreground/80 font-headline max-w-3xl mx-auto">
              Já gerenciei mais de R$500.000 em anúncios, transformando investimentos em lucro e negócios locais em marcas de sucesso. Agora, condensei todo esse conhecimento prático no Manual do Delivery Campeão para que você também possa trilhar esse caminho.
            </p>
        </div>
      </div>
    </section>
  );
}
