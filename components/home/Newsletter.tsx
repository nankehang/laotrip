'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-forest-green to-mekong-blue">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-5xl mb-6">✉️</div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Get Monthly Travel Inspiration & Eco Tips
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join 2,000+ conscious travelers. Discover hidden gems, sustainable travel tips, and exclusive eco-resort deals delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-bamboo-green"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-bamboo-green hover:bg-bamboo-green/90 text-forest-green-dark px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-4 text-bamboo-green font-semibold">
              ✅ Success! Check your inbox to confirm your subscription.
            </p>
          )}
        </form>

        <p className="text-white/70 text-sm mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
