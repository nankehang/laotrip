type Destination = {
  id: string;
  name: string;
  province: string;
  shortDescription: string;
  fullDescription: string;
  openingHours: string;
  entryFee: string;
  mapLink: string;
  category: string;
  images: Array<{
    url: string;
    credit: string;
    alt: string;
  }>;
  tags: string[];
  bestTimeToVisit: string;
  tips: string;
};

export function generateDestinationStructuredData(destination: Destination) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: destination.name,
    description: destination.fullDescription,
    image: destination.images.map(img => img.url),
    url: `https://laotrip.la/destinations/${destination.id}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: destination.province,
      addressCountry: 'LA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // These would be extracted from mapLink or added to JSON
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      opens: destination.openingHours.includes('24/7') ? '00:00' : destination.openingHours.split('-')[0]?.trim() || '',
      closes: destination.openingHours.includes('24/7') ? '23:59' : destination.openingHours.split('-')[1]?.split(' ')[0]?.trim() || '',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },
    ...( destination.category === 'temple' && {
      '@type': ['TouristAttraction', 'Place', 'LandmarksOrHistoricalBuildings'],
    }),
    ...(destination.category === 'nature' && {
      '@type': ['TouristAttraction', 'Place', 'TouristDestination'],
    }),
    touristType: destination.tags,
    isAccessibleForFree: destination.entryFee.toLowerCase().includes('free'),
  };
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebPageStructuredData(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'LaoTrip.la',
      url: 'https://laotrip.la',
    },
  };
}
