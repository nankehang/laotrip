import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lao Culture & Traditions - Buddhist Temples, Festivals & Ancient Customs',
  description: 'Immerse yourself in authentic Lao culture. Discover Buddhist temples, traditional Baci ceremony, alms giving rituals, Lao New Year (Pi Mai), handicrafts, and spiritual traditions of Laos.',
  keywords: [
    'Lao culture',
    'Laos traditions',
    'Buddhist temples Laos',
    'Baci ceremony',
    'Alms giving Luang Prabang',
    'Lao New Year Pi Mai',
    'Lao festivals',
    'Lao customs',
    'Theravada Buddhism Laos',
    'Lao handicrafts',
    'traditional Lao textiles',
    'Lao spiritual practices',
    'cultural experiences Laos',
    'monk culture Laos'
  ],
  openGraph: {
    title: 'Lao Culture & Traditions - Temples, Festivals & Spiritual Life',
    description: 'Experience authentic Lao culture: Buddhist ceremonies, traditional festivals, handicrafts, and spiritual traditions.',
    url: 'https://laotrip.la/culture',
    type: 'website',
    images: [
      {
        url: 'https://laotrip.la/og-culture.jpg',
        width: 1200,
        height: 630,
        alt: 'Lao Buddhist monks and traditional culture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lao Culture & Traditions - Buddhist Temples & Festivals',
    description: 'Discover authentic Lao culture, Buddhist traditions, and spiritual practices.',
    images: ['https://laotrip.la/og-culture.jpg'],
  },
  alternates: {
    canonical: 'https://laotrip.la/culture',
  },
};

export default function CultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
