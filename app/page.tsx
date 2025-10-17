import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import WhyEcoTravel from '@/components/home/WhyEcoTravel';
import PopularTrips from '@/components/home/PopularTrips';
import LatestArticles from '@/components/home/LatestArticles';
import Newsletter from '@/components/home/Newsletter';

// Enhanced SEO for homepage
export const metadata: Metadata = {
  title: 'LaoTrip.la - Discover the Green Heart of Laos | Eco Travel & Nature Adventures',
  description: 'Explore Laos sustainably with LaoTrip.la. Discover stunning waterfalls, ancient temples, pristine nature, and authentic culture. Your complete guide to eco-friendly travel in Southeast Asia\'s hidden gem.',
  keywords: [
    'Laos travel',
    'Laos tourism',
    'eco travel Laos',
    'Luang Prabang',
    'Vang Vieng',
    'Kuang Si Falls',
    'Laos temples',
    'Southeast Asia travel',
    'sustainable tourism Laos',
    'Laos adventure',
    'Mekong River',
    '4000 Islands Laos',
    'Laos waterfalls',
    'backpacking Laos',
    'Laos culture',
    'visit Laos',
    'Laos destinations',
    'Vientiane travel',
    'Laos trekking',
    'Laos eco resorts'
  ],
  authors: [{ name: 'LaoTrip.la Team' }],
  creator: 'LaoTrip.la',
  publisher: 'LaoTrip.la',
  alternates: {
    canonical: 'https://laotrip.la',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://laotrip.la',
    siteName: 'LaoTrip.la',
    title: 'LaoTrip.la - Discover Sustainable Travel in Laos',
    description: 'Your complete guide to eco-friendly travel in Laos. Explore waterfalls, temples, nature, and authentic Lao culture.',
    images: [
      {
        url: 'https://laotrip.la/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kuang Si Falls - Turquoise waterfall in Laos',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@laotripla',
    creator: '@laotripla',
    title: 'LaoTrip.la - Discover the Green Heart of Laos',
    description: 'Explore Laos sustainably. Waterfalls, temples, eco-resorts & authentic culture.',
    images: ['https://laotrip.la/og-image.jpg'],
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
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'LaoTrip.la',
  description: 'Eco-friendly travel guide and sustainable tourism platform for Laos',
  url: 'https://laotrip.la',
  logo: 'https://laotrip.la/images/logo.png',
  image: 'https://laotrip.la/images/og-image.jpg',
  sameAs: [
    'https://facebook.com/laotrip',
    'https://instagram.com/laotrip.la',
    'https://twitter.com/laotripla',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'LA',
    addressLocality: 'Vientiane',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://laotrip.la/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Content */}
      <Hero />
      <FeaturedDestinations />
      <WhyEcoTravel />
      <PopularTrips />
      <LatestArticles />
      <Newsletter />
    </>
  );
}
