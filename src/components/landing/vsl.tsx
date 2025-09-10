export default function Vsl() {
  return (
    <section id="vsl" className="py-12 sm:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                Veja como <span className="text-primary">transformar</span> seu delivery
            </h2>
            <p className="mt-4 text-lg font-light text-foreground/80 font-headline">
                Assista ao vídeo exclusivo e descubra os segredos por trás dos deliverys que mais vendem.
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
