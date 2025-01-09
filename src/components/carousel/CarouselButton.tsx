import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

export default function CarouselButton({ direction, onClick }: CarouselButtonProps) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all z-10"
      style={{ [direction]: '1rem' }}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
}