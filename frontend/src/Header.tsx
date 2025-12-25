import { Activity, Menu } from "lucide-react";
import { Button } from "./components/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/sheet";
import { Logo } from "./Logo";

export function Header({
  onStartAnalysis,
}: {
  onStartAnalysis: () => void;
}) {
  const navItems = [
    { label: "Beranda", href: "#home" },
    { label: "Fitur", href: "#features" },
    { label: "Analisis", href: "#analyzer" },
    { label: "Cara Kerja", href: "#how-it-works" },
    { label: "Kondisi Umum", href: "#conditions" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo size="small" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}