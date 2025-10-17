import { MetadataRoute } from 'next';
import destinationsData from '@/data/destinations.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://laotrip.la';
  const currentDate = new Date().toISOString();

  // Static pages with proper priorities
  const routes = [
    { route: '', priority: 1.0, frequency: 'daily' as const },
    { route: '/destinations', priority: 0.9, frequency: 'weekly' as const },
    { route: '/culture', priority: 0.8, frequency: 'weekly' as const },
    { route: '/food', priority: 0.8, frequency: 'weekly' as const },
    { route: '/blog', priority: 0.7, frequency: 'weekly' as const },
    { route: '/about', priority: 0.5, frequency: 'monthly' as const },
    { route: '/contact', priority: 0.5, frequency: 'monthly' as const },
  ].map(({ route, priority, frequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: frequency,
    priority: priority,
  }));

  // Dynamic destinations from JSON data
  const destinations = destinationsData.destinations.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
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
