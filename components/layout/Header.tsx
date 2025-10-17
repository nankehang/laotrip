'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold">
              <span className="text-[#2F5D3E]">Lao</span><span className="text-[#7CB342]">Trip</span><span className="text-[#2F5D3E]">.la</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/destinations" className="text-gray-700 hover:text-[#2F5D3E] transition-colors font-medium">
              Destinations
            </Link>
            <Link href="/culture" className="text-gray-700 hover:text-[#2F5D3E] transition-colors font-medium">
              Culture
            </Link>
            <Link href="/food" className="text-gray-700 hover:text-[#2F5D3E] transition-colors font-medium">
              Food
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#2F5D3E] transition-colors font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#2F5D3E] transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="bg-[#2F5D3E] hover:bg-[#1E3A28] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-soft-beige"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/destinations" className="text-gray-700 hover:text-[#2F5D3E] transition-colors font-medium">
                Destinations
              </Link>
              <Link href="/culture" className="text-gray-700 hover:text-[#2F5D3E] transition-colors font-medium">
                Culture
              </Link>
              <Link href="/food" className="text-gray-700 hover:text-[#2F5D3E] transition-colors font-medium">
                Food
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#2F5D3E] transition-colors font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#2F5D3E] transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="bg-[#2F5D3E] hover:bg-[#1E3A28] text-white text-center px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
