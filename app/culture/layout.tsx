import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lao Culture & Traditions - Buddhist Temples, Festivals & Customs',
  description: 'Discover Lao culture: Buddhist temples, traditional Baci ceremony, Alms giving, Lao New Year, and ancient customs. Immerse yourself in authentic Lao traditions.',
  keywords: [
    'Lao culture',
    'Laos traditions',
    'Buddhist temples Laos',
    'Baci ceremony',
    'Alms giving Luang Prabang',
    'Lao New Year',
    'Lao festivals',
    'Lao customs',
  ],
};

export default function CultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
