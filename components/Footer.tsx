'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 pb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image 
                  src="/logo.jpg" 
                  alt="EUROBRIDGE Visa Consulting Logo" 
                  fill
                  className="object-contain rounded-full shadow-sm border-2 border-white/20 bg-white"
                />
              </div>
              <span className="font-bold text-xl">{t.footer.company}</span>
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
                <a 
                  href="https://www.google.com/maps?q=40.524473,70.955592" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {t.footer.location}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-12 border border-primary-foreground/10 relative z-10">
          <iframe
            src="https://maps.google.com/maps?q=40.524473,70.955592&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'contrast(1.1) opacity(0.9) grayscale(0.2)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EUROBRIDGE Location Map"
            className="hover:opacity-100 hover:filter-none transition-all duration-300"
          />
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
