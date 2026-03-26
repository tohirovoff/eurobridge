'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">{t.why.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Points Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {t.why.points.map((point, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10">
                    <Check className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground">{point}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 relative overflow-hidden rounded-3xl p-1 bg-gradient-to-br from-primary via-primary/80 to-accent">
            <div className="bg-background/10 backdrop-blur-sm rounded-[calc(1.5rem-2px)] p-10 space-y-6">
              <h3 className="text-3xl font-bold text-white text-gradient bg-gradient-to-b from-white to-white/70">
                {t.why.ctaTitle}
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                {t.why.ctaSubtitle}
              </p>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="mt-4 px-10 py-6 rounded-xl bg-white text-primary hover:bg-white/90 font-bold transition-all shadow-xl hover:shadow-white/20 hover:-translate-y-1"
              >
                {t.why.ctaButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
