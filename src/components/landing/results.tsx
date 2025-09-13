import Image from 'next/image';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {resultsImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover"
                data-ai-hint="screenshot results"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
