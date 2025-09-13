export default function Quote() {
  return (
    <section className="bg-primary py-4 sm:py-6">
      <div className="container mx-auto px-4">
        <blockquote className="text-center">
          <p className="text-lg font-semibold text-primary-foreground sm:text-xl font-headline">
            "Ensino apenas o que funciona na prática e gera resultados reais para deliverys"
          </p>
          <footer className="mt-2 text-sm font-bold text-primary-foreground/90 uppercase font-headline">
            - VICTOR DUARTE
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
