import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const viktoImage = PlaceHolderImages.find(p => p.id === 'vikto-profile');

  return (
    <section id="about" className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 items-center">
          <div className="md:col-span-2">
            {viktoImage && (
              <Image
                src={viktoImage.imageUrl}
                alt={viktoImage.description}
                data-ai-hint={viktoImage.imageHint}
                width={400}
                height={400}
                className="rounded-full aspect-square object-cover mx-auto w-64 h-64 md:w-full md:h-auto border-4 border-primary shadow-lg"
              />
            )}
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              SOBRE O SEU MENTOR, VIKTO
            </h2>
            <p className="mt-6 text-lg font-light leading-8 text-foreground/80 font-headline">
              Com mais de 4 anos de experiência no campo de batalha do tráfego pago, hoje lidero uma agência que já foi o motor de crescimento para mais de 100 clientes no ramo de delivery.
            </p>
            <p className="mt-4 text-lg font-light leading-8 text-foreground/80 font-headline">
              Já gerenciei mais de R$500.000 em anúncios, transformando investimentos em lucro e negócios locais em marcas de sucesso. Agora, condensei todo esse conhecimento prático no Manual do Delivery Campeão para que você também possa trilhar esse caminho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
