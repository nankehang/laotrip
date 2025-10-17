import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Using gradient as placeholder */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-forest-green via-mekong-blue to-bamboo-green">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl animate-fade-in">
          Discover the Green Heart of Laos
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Eco-friendly adventures, authentic culture, untouched nature
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/destinations" className="btn-primary">
            Explore Destinations
          </Link>
          <Link href="/eco-trips" className="btn-secondary">
            Plan Your Eco Trip
          </Link>
        </div>

        {/* Search Bar Placeholder */}
        <div className="max-w-2xl mx-auto bg-white/90 rounded-lg p-2 flex items-center shadow-xl">
          <svg className="w-5 h-5 text-gray-500 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search destinations, activities, or articles..."
            className="w-full px-4 py-3 text-gray-700 bg-transparent focus:outline-none"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-slow">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
