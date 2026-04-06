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
    default: 'EUROBRIDGE - Yevropa Vizasi va Immigratsiya Konsaltingi',
    template: '%s | EUROBRIDGE',
  },
  description: 'Yevropaga ishonchli va tezkor viza olish, ishlash va qonuniy yashash uchun professional immigratsiya xizmatlari. EUROBRIDGE bilan Yevropa eshiklarini oching.',
  keywords: ['viza', 'yevropa vizasi', 'yevropada ishlash', 'polsha vizasi', 'litva vizasi', 'ish vizasi', 'evropa viza', 'konsalting', 'immigratsiya', 'eurobridge', 'o\'zbekiston viza xizmatlari', 'chet elda ishlash', 'schengen vizasi', 'shengen', 'viza markazi'],
  authors: [{ name: 'EUROBRIDGE Group' }],
  creator: 'EUROBRIDGE Group',
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: '/',
    title: 'EUROBRIDGE - Yevropa Vizasi va Immigratsiya Konsaltingi',
    description: 'Yevropaga ishonchli viza olish va qonuniy yashash uchun professional yordam. EUROBRIDGE orqali tezkor viza va hujjatalar.',
    siteName: 'EUROBRIDGE',
    images: [{
      url: '/logo.jpg',
      width: 800,
      height: 600,
      alt: 'EUROBRIDGE Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EUROBRIDGE - Yevropa Vizasi Konsaltingi',
    description: 'Yevropaga ishonchli viza olish va qonuniy yashash uchun professional yordam.',
    images: ['/logo.jpg'],
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
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
    <html lang="uz" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
