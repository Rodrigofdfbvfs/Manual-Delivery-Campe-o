import Logo from "@/components/icons/logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="flex items-center gap-2">
            <Logo />
            <p className="text-sm font-bold font-headline">Manual do Delivery Campeão</p>
        </div>
        <p className="text-sm text-foreground/60 mt-4 sm:mt-0">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
