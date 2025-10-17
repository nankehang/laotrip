import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://laotrip.la';

  // Static pages
  const routes = [
    '',
    '/destinations',
    '/eco-trips',
    '/blog',
    '/travel-tips',
    '/food-culture',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Destinations
  const destinations = [
    'luang-prabang',
    'vang-vieng',
    '4000-islands',
    'nong-khiaw',
    'bolaven-plateau',
    'vientiane',
  ].map((slug) => ({
    url: `${baseUrl}/destinations/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog articles
  const articles = [
    'top-10-nature-trips-laos',
    'hidden-waterfalls-laos',
    'vang-vieng-eco-adventures',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...destinations, ...articles];
}
