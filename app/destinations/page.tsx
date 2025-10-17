'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import destinationsData from '@/data/destinations.json';
import DestinationModal from '@/components/shared/DestinationModal';
import { MapPin, Filter } from 'lucide-react';
import { generateBreadcrumbStructuredData, generateWebPageStructuredData } from '@/lib/structuredData';

type Destination = typeof destinationsData.destinations[0];

const provinces = ['All', 'Luang Prabang', 'Vientiane', 'Vang Vieng', 'Champasak'];
const categories = ['All', 'nature', 'temple', 'culture', 'landmark'];

// Structured data for SEO
const breadcrumbData = generateBreadcrumbStructuredData([
  { name: 'Home', url: 'https://laotrip.la' },
  { name: 'Destinations', url: 'https://laotrip.la/destinations' },
]);

const webPageData = generateWebPageStructuredData(
  'Top Destinations in Laos',
  'Discover the best places to visit in Laos including waterfalls, temples, nature, and cultural attractions.',
  'https://laotrip.la/destinations'
);

export default function DestinationsPage() {
  const [selectedProvince, setSelectedProvince] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const filteredDestinations = destinationsData.destinations.filter((dest) => {
    const matchesProvince = selectedProvince === 'All' || dest.province === selectedProvince;
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    return matchesProvince && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2F5D3E] to-[#3498DB] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Explore Laos Destinations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              From stunning waterfalls to ancient temples, discover the natural and cultural treasures of the Green Heart of Southeast Asia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Province Filter */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Filter className="text-[#2F5D3E]" size={20} />
              <span className="font-semibold text-gray-700">Province:</span>
              <div className="flex gap-2 flex-wrap">
                {provinces.map((province) => (
                  <button
                    key={province}
                    onClick={() => setSelectedProvince(province)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedProvince === province
                        ? 'bg-[#2F5D3E] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {province}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="font-semibold text-gray-700">Category:</span>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                      selectedCategory === category
                        ? 'bg-[#7CB342] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-3 text-gray-600 text-sm">
            Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.images[0].url}
                  alt={destination.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-[#A7C957] text-white text-xs font-semibold px-3 py-1 rounded-full capitalize shadow-md">
                  {destination.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {destination.name}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin size={16} className="text-[#3B755F]" />
                  <span className="text-sm">{destination.province}</span>
                </div>

                <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                  {destination.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedDestination(destination)}
                  className="w-full bg-[#3B755F] hover:bg-[#2d5a49] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No destinations found matching your filters.
            </p>
          </div>
        )}
      </section>

      {/* Affiliate Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your Laos Adventure?
          </h2>
          <p className="text-xl mb-6 text-white/90">
            Find the best hotels, tours, and activities at unbeatable prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.booking.com/searchresults.html?ss=Laos"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center shadow-lg"
            >
              🏨 Search Hotels on Booking.com
            </a>
            <a
              href="https://www.agoda.com/country/laos.html"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-[#E89A3C] hover:bg-[#d88a2c] text-white font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center shadow-lg"
            >
              ✈️ Book Tours on Agoda
            </a>
          </div>
        </div>
      </section>

      {/* Destination Modal */}
      {selectedDestination && (
        <DestinationModal
          isOpen={!!selectedDestination}
          onClose={() => setSelectedDestination(null)}
          destination={selectedDestination}
        />
      )}
    </div>
  );
}
