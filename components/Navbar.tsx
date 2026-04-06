'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image 
                src="/logo.jpg" 
                alt="EUROBRIDGE Visa Consulting Logo" 
                fill
                className="object-contain rounded-full shadow-sm"
                priority
              />
            </div>
            <span className="font-bold text-lg text-primary">{t.footer.company}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('why')}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {t.nav.why}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Select language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-accent' : ''}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('de')} className={language === 'de' ? 'bg-accent' : ''}>
                  Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('fr')} className={language === 'fr' ? 'bg-accent' : ''}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('uz')} className={language === 'uz' ? 'bg-accent' : ''}>
                  O&apos;zbekcha
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('ru')} className={language === 'ru' ? 'bg-accent' : ''}>
                  Русский
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Switcher */}
            {mounted && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="w-9 h-9">
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
