'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, DollarSign, Calendar, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface DestinationImage {
  url: string;
  credit: string;
  alt: string;
}

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: {
    id: string;
    name: string;
    province: string;
    fullDescription: string;
    openingHours: string;
    entryFee: string;
    mapLink: string;
    images: DestinationImage[];
    tags: string[];
    bestTimeToVisit: string;
    tips: string;
  };
}

export default function DestinationModal({ isOpen, onClose, destination }: DestinationModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destination.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + destination.images.length) % destination.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2F5D3E] to-[#3498DB] text-white p-6 flex justify-between items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{destination.name}</h2>
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin size={18} />
                  <span className="text-lg">{destination.province}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Images */}
                <div>
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 group">
                    <Image
                      src={destination.images[currentImageIndex].url}
                      alt={destination.images[currentImageIndex].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    
                    {/* Navigation Arrows */}
                    {destination.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Previous image"
                        >
                          ←
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Next image"
                        >
                          →
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                      {currentImageIndex + 1} / {destination.images.length}
                    </div>
                  </div>

                  {/* Image Credit */}
                  <p className="text-sm text-gray-500 mb-4">
                    {destination.images[currentImageIndex].credit}
                  </p>

                  {/* Thumbnail Gallery */}
                  <div className="grid grid-cols-3 gap-2">
                    {destination.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? 'border-[#3B755F] scale-95'
                            : 'border-transparent hover:border-gray-300'
                        }`}
                      >
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 33vw, 16vw"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Column - Information */}
                <div>
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {destination.fullDescription}
                  </p>

                  {/* Info Grid */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <Clock className="text-[#3B755F] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Opening Hours</h4>
                        <p className="text-gray-600">{destination.openingHours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <DollarSign className="text-[#3B755F] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Entry Fee</h4>
                        <p className="text-gray-600">{destination.entryFee}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <Calendar className="text-[#3B755F] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Best Time to Visit</h4>
                        <p className="text-gray-600">{destination.bestTimeToVisit}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-[#FFF9E6] border border-[#E89A3C]/30 p-4 rounded-lg">
                      <Lightbulb className="text-[#E89A3C] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Insider Tips</h4>
                        <p className="text-gray-700">{destination.tips}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#A7C957] text-white text-sm px-3 py-1 rounded-full font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={destination.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#2F5D3E] hover:bg-[#1E3A28] text-white text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <MapPin size={18} />
                      View on Map
                    </a>
                    <button className="flex-1 bg-white hover:bg-gray-50 text-[#2F5D3E] font-semibold py-3 px-6 rounded-lg border-2 border-[#2F5D3E] transition-all duration-300 shadow-md hover:shadow-lg">
                      Share
                    </button>
                  </div>

                  {/* Affiliate Ad Placeholder */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2 font-medium">
                      🏨 Find Hotels in {destination.province}
                    </p>
                    <a
                      href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destination.province + ', Laos')}`}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded transition-colors"
                    >
                      Search on Booking.com →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
