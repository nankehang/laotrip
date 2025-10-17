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
  description: 'Explore Laos sustainably with LaoTrip.la. Waterfalls, trekking, eco-resorts, and authentic culture. Your guide to responsible travel in Southeast Asia.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LaoTrip.la - Discover the Green Heart of Laos',
    description: 'Explore Laos sustainably. Waterfalls, eco-resorts, trekking & authentic culture.',
    url: 'https://laotrip.la',
    images: [
      {
        url: '/images/hero-kuang-si.jpg',
        width: 1200,
        height: 630,
        alt: 'Kuang Si Falls Laos - Turquoise waterfall',
      },
    ],
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
