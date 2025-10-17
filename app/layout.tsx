import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://laotrip.la'),
  title: {
    default: 'LaoTrip.la - Discover the Green Heart of Laos | Eco Travel & Nature Adventures',
    template: '%s | LaoTrip.la',
  },
  description: 'Explore Laos sustainably with LaoTrip.la. Waterfalls, trekking, eco-resorts, and authentic culture. Your guide to responsible travel in Southeast Asia.',
  keywords: [
    'Laos travel',
    'eco tourism Laos',
    'sustainable travel Southeast Asia',
    'Laos nature trips',
    'Luang Prabang',
    'Vang Vieng',
    'Laos waterfalls',
    'responsible tourism',
    'Laos adventure',
    'Kuang Si Falls',
    'Gibbon Experience',
    'Bolaven Plateau',
  ],
  authors: [{ name: 'LaoTrip.la Team' }],
  creator: 'LaoTrip.la',
  publisher: 'LaoTrip.la',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://laotrip.la',
    siteName: 'LaoTrip.la',
    title: 'LaoTrip.la - Discover the Green Heart of Laos',
    description: 'Explore Laos sustainably. Waterfalls, eco-resorts, trekking & authentic culture. Your eco-friendly travel guide.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LaoTrip.la - Eco Travel in Laos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LaoTrip.la - Discover the Green Heart of Laos',
    description: 'Eco-friendly travel guide to Laos. Waterfalls, nature, culture & sustainable adventures.',
    images: ['/images/twitter-card.jpg'],
    creator: '@laotripla',
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
