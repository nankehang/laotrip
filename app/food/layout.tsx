import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lao Food & Cuisine - Traditional Dishes, Street Food & Recipes',
  description: 'Explore authentic Lao cuisine: Laap, Tam Mak Hoong, sticky rice, Lao coffee, and more. Discover traditional dishes, street food, and Laotian flavors.',
  keywords: [
    'Lao food',
    'Lao cuisine',
    'Laos traditional dishes',
    'Laap',
    'sticky rice',
    'Lao street food',
    'Lao coffee',
    'Beer Lao',
    'Lao recipes',
  ],
};

export default function FoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
