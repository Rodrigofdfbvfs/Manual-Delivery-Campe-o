export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-to-t from-zinc-900 to-black">
      <div className="container mx-auto flex h-16 items-center justify-center px-4 text-center">
        <p className="text-sm text-foreground/60">
          Manual do Delivery Campeão © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
