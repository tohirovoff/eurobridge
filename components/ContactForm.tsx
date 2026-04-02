'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Spinner } from '@/components/ui/spinner';

export function ContactForm() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    visaType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: t.contact.success });
        setFormData({ name: '', phone: '', visaType: '', message: '' });
      } else {
        setMessage({ type: 'error', text: t.contact.error });
      }
    } catch (error) {
      setMessage({ type: 'error', text: t.contact.error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">{t.contact.title}</h2>
            <p className="text-lg text-foreground/70">{t.contact.subtitle}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Form Card */}
          <Card className="border-border/50 bg-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    {t.contact.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                    placeholder={t.contact.placeholders.name}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    {t.contact.phone}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                    placeholder={t.contact.placeholders.phone}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="visaType" className="text-sm font-medium text-foreground">
                  {t.contact.visaType}
                </label>
                <select
                  id="visaType"
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground"
                >
                  <option value="">{t.contact.placeholders.selectVisa}</option>
                  <option value="work">{t.contact.visaOptions.work}</option>
                  <option value="residence">{t.contact.visaOptions.residence}</option>
                  <option value="entrepreneur">{t.contact.visaOptions.entrepreneur}</option>
                  <option value="family">{t.contact.visaOptions.family}</option>
                  <option value="tourist">{t.contact.visaOptions.tourist}</option>
                  <option value="deportation">{t.contact.visaOptions.deportation}</option>
                  <option value="other">{t.contact.visaOptions.other}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder={t.contact.placeholders.message}
                />
              </div>

              {/* Messages */}
              {message && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium ${
                    message.type === 'success'
                      ? 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20'
                  }`}
                >
                  {message.text}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11"
              >
                {loading ? (
                  <>
                    <Spinner className="mr-2 h-4 w-4" />
                    {t.contact.sending}
                  </>
                ) : (
                  t.contact.submit
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
