'use client';

import { MessageCircle } from 'lucide-react';

interface ChatButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
}

export default function ChatButton({
  text,
  variant = 'primary',
  size = 'default'
}: ChatButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).Tawk_API) {
      (window as any).Tawk_API.maximize();
    }
  };

  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5";

  const variantClasses = variant === 'primary'
    ? "bg-green-600 hover:bg-green-700 text-white"
    : "bg-blue-600 hover:bg-blue-700 text-white";

  const sizeClasses = size === 'large'
    ? "px-8 py-4 text-lg"
    : "px-6 py-3 text-base";

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${sizeClasses}`}
    >
      <MessageCircle size={size === 'large' ? 24 : 20} />
      {text}
    </button>
  );
}
