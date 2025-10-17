import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lao Food & Cuisine - Traditional Dishes, Street Food & Authentic Recipes',
  description: 'Discover authentic Lao cuisine and traditional dishes. Explore Laap, Tam Mak Hoong papaya salad, sticky rice (khao niao), Lao coffee, Beer Lao, and mouthwatering street food. Your complete guide to Laotian flavors.',
  keywords: [
    'Lao food',
    'Lao cuisine',
    'Laos traditional dishes',
    'Laap Lao',
    'Tam Mak Hoong',
    'papaya salad Laos',
    'sticky rice khao niao',
    'Lao street food',
    'Lao coffee',
    'Beer Lao',
    'Lao recipes',
    'Khao Piak Sen',
    'Som Tam Lao',
    'Lao sausage sai oua',
    'Mok Pa fish',
    'Laotian flavors',
    'food in Laos',
    'what to eat Laos',
    'Lao drinks',
    'Luang Prabang food'
  ],
  openGraph: {
    title: 'Lao Food & Cuisine - Traditional Dishes & Street Food Guide',
    description: 'Explore authentic Lao cuisine: Laap, papaya salad, sticky rice, Lao coffee, Beer Lao, and traditional flavors.',
    url: 'https://laotrip.la/food',
    type: 'website',
    images: [
      {
        url: 'https://laotrip.la/og-food.jpg',
        width: 1200,
        height: 630,
        alt: 'Traditional Lao food and cuisine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lao Food & Cuisine - Authentic Traditional Dishes',
    description: 'Discover mouthwatering Lao cuisine, street food, and traditional recipes.',
    images: ['https://laotrip.la/og-food.jpg'],
  },
  alternates: {
    canonical: 'https://laotrip.la/food',
  },
};

export default function FoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
