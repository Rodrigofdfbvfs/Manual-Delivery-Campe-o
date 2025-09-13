import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';

const resultsImages = [
  { src: "https://i.ibb.co/1tbFNssN/Capturar.png", alt: "Resultado 1", width: 450, height: 600 },
  { src: "https://i.ibb.co/8L0yfHsd/Capturar-5.png", alt: "Resultado 2", width: 450, height: 600 },
  { src: "https://i.ibb.co/WWhbVBCT/Capturar-4.png", alt: "Resultado 3", width: 450, height: 600 },
  { src: "https://i.ibb.co/bghVk0WF/Capturar-3.png", alt: "Resultado 4", width: 450, height: 600 },
  { src: "https://i.ibb.co/mC1xZRK7/Capturar-2.png", alt: "Resultado 5", width: 450, height: 600 },
];

export default function Results() {
  return (
    <section id="results" className="py-12 sm:py-24 bg-gradient-to-br from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase font-bold tracking-tight text-white sm:text-5xl font-headline">
            Resultados que falam por si
          </h2>
          <p className="mt-4 text-lg font-light text-foreground/80 font-headline max-w-3xl mx-auto">
            Veja o que nossos alunos estão alcançando com o método.
          </p>
        </div>
        <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {resultsImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-zinc-900/50 border-primary/20">
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          className="rounded-lg object-contain"
                          data-ai-hint="screenshot results"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
