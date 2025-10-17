import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top 9 Destinations in Laos - Waterfalls, Temples & Nature Adventures',
  description: 'Discover the best places to visit in Laos. From Kuang Si Falls and Pha That Luang to Vang Vieng tubing and 4000 Islands. Complete travel guide with opening hours, entry fees, tips, and maps.',
  keywords: [
    'Laos destinations',
    'places to visit Laos',
    'Kuang Si Falls',
    'Pha That Luang',
    'Wat Phou UNESCO',
    'Luang Prabang attractions',
    'Vientiane sights',
    'Vang Vieng activities',
    'Si Phan Don 4000 Islands',
    'Blue Lagoon Vang Vieng',
    'Mount Phousi sunset',
    'Patuxai Monument',
    'Nam Song River tubing',
    'Laos waterfalls',
    'Laos temples',
    'best of Laos',
    'Laos tourist spots',
    'things to do Laos',
    'Champasak ruins',
    'Mekong River Laos'
  ],
  openGraph: {
    title: 'Top 9 Destinations in Laos - Your Complete Travel Guide',
    description: 'Explore amazing destinations across Laos. Stunning waterfalls, ancient temples, pristine nature, and cultural landmarks with detailed visitor information.',
    url: 'https://laotrip.la/destinations',
    type: 'website',
    images: [
      {
        url: 'https://laotrip.la/og-destinations.jpg',
        width: 1200,
        height: 630,
        alt: 'Beautiful destinations across Laos - waterfalls, temples, and nature',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Destinations in Laos - Waterfalls, Temples & Adventures',
    description: 'Discover 9+ amazing places to visit in Laos with our complete travel guide.',
    images: ['https://laotrip.la/og-destinations.jpg'],
  },
  alternates: {
    canonical: 'https://laotrip.la/destinations',
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
