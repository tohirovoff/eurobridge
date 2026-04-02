'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Briefcase, FileText, Rocket, Heart, Plane, Scale } from 'lucide-react';

const icons = [Briefcase, FileText, Rocket, Heart, Plane, Scale];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">{t.services.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, i) => {
              const Icon = icons[i];
              return (
                <Card
                  key={i}
                  className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 bg-card hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500" />

                  <div className="relative p-8 space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
                    </div>

                    <div className="pt-2">
                      <button className="text-sm text-primary font-semibold hover:gap-3 transition-all flex items-center gap-2 group-hover:text-primary/80">
                        {t.services.learnMore} <span className="transition-transform group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
