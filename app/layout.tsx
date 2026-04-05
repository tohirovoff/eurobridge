import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/Providers'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eurobridge.uz'),
  title: {
    default: 'EUROBRIDGE - European Visa & Immigration Consulting',
    template: '%s | EUROBRIDGE',
  },
  description: 'Professional visa and immigration consulting services for seamless relocation to Europe. Expert guidance for work visas, residence permits, and family reunification.',
  keywords: ['visa consulting', 'immigration', 'European relocation', 'work visa', 'residence permit', 'eurobridge', 'visa to europe'],
  authors: [{ name: 'EUROBRIDGE' }],
  creator: 'EUROBRIDGE',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'EUROBRIDGE - European Visa & Immigration Consulting',
    description: 'Your professional partner in European immigration. Expert guidance for work visas and residence permits.',
    siteName: 'EUROBRIDGE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EUROBRIDGE - European Visa & Immigration Consulting',
    description: 'Professional visa and immigration consulting services for seamless relocation to Europe.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1a2d4d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
