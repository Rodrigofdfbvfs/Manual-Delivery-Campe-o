export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-gradient-to-br from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
            <h2 className="text-4xl uppercase font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                O que nossos <span className="text-primary">alunos dizem</span>
            </h2>
            <p className="mt-4 text-lg font-light text-foreground/80 font-headline">
                Veja os resultados de quem já aplicou o método.
            </p>
        </div>
        <div className="aspect-video max-w-4xl mx-auto videoo">
          <iframe
            className="w-full h-full rounded-lg shadow-2xl"
            src="https://www.youtube.com/embed/cpe75KKCcIw"
            title="Depoimento Aluno"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
