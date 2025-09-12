import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-24 bg-gradient-to-bl from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center p-8 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:scale-105">
            <h2 className="text-4xl uppercase font-bold tracking-tight text-white sm:text-5xl font-headline">
              Conheça o <span className="text-primary">Vikto</span>
            </h2>
            <p className="mt-4 text-xl font-semibold leading-8 text-foreground/80 font-headline max-w-3xl mx-auto">
                especialista em trafego pago para delivery com resultados comprovados
            </p>
            <div className="my-8">
                <Image
                  src="https://picsum.photos/seed/mentor/300/300"
                  alt="Foto de Vikto, seu mentor"
                  width={300}
                  height={300}
                  data-ai-hint="man portrait"
                  className="rounded-full mx-auto shadow-lg"
                />
            </div>
            <p className="mt-6 text-lg font-light leading-8 text-foreground/80 font-headline max-w-3xl mx-auto">
              Com mais de 4 anos de experiência no tráfego pago, lidero uma agência que impulsionou o crescimento de mais de 100 clientes no ramo de delivery. Já gerenciei mais de R$500.000 em anúncios, transformando investimentos em lucro e negócios locais em marcas de sucesso. Todo esse conhecimento prático está agora condensado no Manual do Delivery Campeão, para que você também possa criar estratégias de anúncios comprovadas e alavancar seu delivery.
            </p>
        </div>
      </div>
    </section>
  );
}
