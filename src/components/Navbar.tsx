
import { ThemeToggle } from "@/components/ThemeToggle";
import { GitBranch } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <GitBranch className="h-6 w-6 text-accent-purple" />
          <span className="font-bold text-xl">DevPlatform0</span>
        </div>
        <nav className="mx-6 flex items-center gap-6">
          <a href="#components" className="text-sm font-medium transition-colors hover:text-accent-purple">
            Components
          </a>
          <a href="#platform-blocks" className="text-sm font-medium transition-colors hover:text-accent-purple">
            Platform
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
