import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destinations - Explore Laos Nature & Culture',
  description: 'Discover the best destinations in Laos: Luang Prabang waterfalls, Vientiane temples, Vang Vieng tubing, and Champasak ancient ruins. Plan your eco-friendly trip.',
  keywords: [
    'Laos destinations',
    'Luang Prabang attractions',
    'things to do Vientiane',
    'Vang Vieng activities',
    'Champasak temples',
    'Kuang Si Falls',
    'Pha That Luang',
    'Nam Song River tubing',
    'Wat Phou',
    'best places in Laos',
  ],
  openGraph: {
    title: 'Destinations - Explore Laos Nature & Culture',
    description: 'Discover waterfalls, temples, rivers, and ancient ruins across Laos provinces.',
    images: ['/images/destinations-og.jpg'],
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
