import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'Top 10 Nature Trips in Laos: Discover the Green Soul of Southeast Asia',
    category: 'Nature & Adventure',
    readTime: '12 min read',
    date: 'October 17, 2025',
    excerpt: 'Explore Laos\' most stunning natural wonders from waterfalls to rice terraces. Your ultimate eco-friendly travel guide.',
    slug: 'top-10-nature-trips-laos',
  },
  {
    id: 2,
    title: 'Hidden Waterfalls of Laos: A Complete Explorer\'s Guide',
    category: 'Nature',
    readTime: '10 min read',
    date: 'October 15, 2025',
    excerpt: 'Discover 15+ secret waterfalls from Kuang Si to Tad Yuang. Explore cascading wonders off the beaten path.',
    slug: 'hidden-waterfalls-laos',
  },
  {
    id: 3,
    title: 'Vang Vieng Beyond Tubing: Eco Adventures in Limestone Paradise',
    category: 'Adventure',
    readTime: '8 min read',
    date: 'October 12, 2025',
    excerpt: 'Rediscover Vang Vieng through rock climbing, cave exploration, and responsible tourism experiences.',
    slug: 'vang-vieng-eco-adventures',
  },
];

export default function LatestArticles() {
  return (
    <section className="py-16 px-4 bg-soft-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forest-green mb-4">
            Latest Travel Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert insights, practical tips, and inspiring stories from Laos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-mekong-blue to-forest-green flex items-center justify-center">
                <span className="text-white text-5xl opacity-50">📰</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-bamboo-green uppercase tracking-wide">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-forest-green mb-3 line-clamp-2 hover:text-forest-green-dark transition-colors">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600 mb-3">{article.date}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link href={`/blog/${article.slug}`} className="text-mekong-blue font-semibold text-sm hover:text-forest-green transition-colors flex items-center">
                  Read Article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
