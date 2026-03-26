'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-accent text-primary font-bold">
                E
              </div>
              <span className="font-bold text-lg">{t.footer.company}</span>
            </div>
            <p className="text-sm text-primary-foreground/70">{t.footer.tagline}</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {t.nav.why}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {t.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {t.footer.links.terms}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {t.footer.links.cookies}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@eurobridge.eu" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  info@eurobridge.eu
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+441234567890" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  +998908615353
                </a>
              </li>
               <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+441234567890" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  +998941123363
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  {t.footer.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10" />

        {/* Bottom */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between font-light">
          <p className="text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} {t.footer.company}. {t.footer.rights}.
          </p>
          <p className="text-xs text-primary-foreground/50 mt-4 md:mt-0 italic">
            {t.footer.poweredBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
