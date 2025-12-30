'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            app Promoção
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Início
            </Link>
            <Link
              href="/privacidade"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Privacidade
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-green-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Início
            </Link>
            <Link
              href="/privacidade"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Privacidade
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
