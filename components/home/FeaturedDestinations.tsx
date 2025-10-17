'use client';

import { useState } from 'react';
import Image from 'next/image';
import destinationsData from '@/data/destinations.json';
import DestinationModal from '@/components/shared/DestinationModal';
import { motion } from 'framer-motion';

type Destination = typeof destinationsData.destinations[0];

// Select top 3 featured destinations
const featuredDestinations = [
  destinationsData.destinations[0], // Kuang Si Falls
  destinationsData.destinations[5], // Nam Song River
  destinationsData.destinations[3], // Pha That Luang
];

export default function FeaturedDestinations() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Top 3 Must-Visit Destinations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience the highlights of Laos: cascading waterfalls, sacred temples, and adventure-filled rivers
          </motion.p>
        </div>

        {/* Featured Destinations Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dest.images[0].url}
                  alt={dest.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-[#7CB342] text-white text-xs font-semibold px-3 py-1 rounded-full capitalize shadow-md">
                  {dest.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {dest.name}
                </h3>
                <p className="text-[#3498DB] text-sm font-medium mb-3 flex items-center gap-1">
                  📍 {dest.province}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {dest.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {dest.tags.slice(0, 3).map((tag, idx) => (
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
                  onClick={() => setSelectedDestination(dest)}
                  className="w-full bg-[#2F5D3E] hover:bg-[#1E3A28] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="/destinations"
            className="inline-block bg-white hover:bg-[#FAF8F3] text-[#2F5D3E] font-semibold py-4 px-10 rounded-lg border-2 border-[#2F5D3E] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All {destinationsData.destinations.length} Destinations
          </a>
        </div>
      </div>

      {/* Destination Modal */}
      {selectedDestination && (
        <DestinationModal
          isOpen={!!selectedDestination}
          onClose={() => setSelectedDestination(null)}
          destination={selectedDestination}
        />
      )}
    </section>
  );
}
