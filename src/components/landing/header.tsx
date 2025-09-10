import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/icons/logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-bold font-headline text-lg">
            Manual do Delivery Campeão
          </span>
        </Link>
        <nav>
          <Button asChild>
            <Link href="#oferta">Quero Alavancar Meu Delivery</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
