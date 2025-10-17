import Link from 'next/link';

const trips = [
  {
    id: 1,
    title: 'The Gibbon Experience',
    location: 'Bokeo Nature Reserve',
    duration: '3 days / 2 nights',
    price: 'From $330 USD',
    tag: 'Wildlife Conservation',
    description: 'Sleep in treehouses 40m high, zip-line through jungle canopy, encounter wild gibbons.',
  },
  {
    id: 2,
    title: 'Bolaven Plateau Coffee Trail',
    location: 'Southern Laos',
    duration: '3-4 days',
    price: 'Self-guided',
    tag: 'Cultural Immersion',
    description: 'Motorcycle through coffee plantations, visit ethnic villages, swim beneath waterfalls.',
  },
  {
    id: 3,
    title: 'Nam Ha Community Trekking',
    location: 'Luang Namtha',
    duration: '2-3 days',
    price: 'From $100 USD',
    tag: 'Community Based',
    description: 'Trek with local guides, stay in village homestays, support 20+ ethnic communities.',
  },
  {
    id: 4,
    title: 'Kuang Si Falls Day Trip',
    location: 'Luang Prabang',
    duration: 'Full day',
    price: 'From $25 USD',
    tag: 'Nature',
    description: 'Swim in turquoise pools, visit bear sanctuary, enjoy jungle trails and waterfalls.',
  },
];

export default function PopularTrips() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forest-green mb-4">
            Popular Eco Trips
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated experiences that combine adventure with environmental responsibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-forest-green to-bamboo-green flex items-center justify-center">
                <span className="text-white text-5xl opacity-50">🌄</span>
              </div>
              <div className="p-5">
                <span className="tag-eco text-xs mb-2 inline-block">{trip.tag}</span>
                <h3 className="font-bold text-lg text-forest-green mb-2 line-clamp-2">
                  {trip.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">📍 {trip.location}</p>
                <p className="text-sm text-gray-600 mb-2">⏱️ {trip.duration}</p>
                <p className="text-sm font-semibold text-mekong-blue mb-3">{trip.price}</p>
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                  {trip.description}
                </p>
                <Link href="/eco-trips" className="text-forest-green font-semibold text-sm hover:text-forest-green-dark transition-colors flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/eco-trips" className="btn-primary">
            View All Eco Trips
          </Link>
        </div>
      </div>
    </section>
  );
}
