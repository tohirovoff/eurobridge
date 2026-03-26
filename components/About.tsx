'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          {/* Title Section */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gradient">{t.about.title}</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <p className="text-xl text-foreground/80 leading-relaxed font-light">
                {t.about.description}
              </p>

              <div className="space-y-4">
                {t.about.checkpoints.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-lg text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-10 blur-3xl" />
              <div className="relative glass-card rounded-3xl p-10 space-y-10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">15+</div>
                    <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{t.about.stats.years}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">5000+</div>
                    <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{t.about.stats.clients}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">98%</div>
                    <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{t.about.stats.rate}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">27</div>
                    <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{t.about.stats.countries}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
