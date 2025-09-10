export default function Vsl() {
  return (
    <section id="vsl" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
            <h2 className="text-4xl uppercase font-bold tracking-tight text-primary sm:text-5xl font-headline">
                Assista e Descubra o Segredo
            </h2>
            <p className="mt-4 text-lg font-light text-foreground/80 font-headline">
                Veja como centenas de deliveries saíram do zero para o sucesso com este método.
            </p>
        </div>
        <div className="aspect-video max-w-4xl mx-auto">
          <iframe
            className="w-full h-full rounded-lg shadow-2xl"
            src="https://www.youtube.com/embed/pBQCbaT2rQo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
