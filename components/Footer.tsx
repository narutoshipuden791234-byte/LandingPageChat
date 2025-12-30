import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">
            © 2025 TikTok Lite Promoção
          </p>
          <Link
            href="/privacidade"
            className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
