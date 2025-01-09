import React from 'react';
import { PlayCircle } from 'lucide-react';

export default function FeaturedGuide() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
          alt="Chef demonstrating knife skills"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">Master Knife Skills</h2>
            <p className="text-lg mb-4">Learn professional cutting techniques from our expert chefs</p>
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-white font-semibold transition-colors">
              <PlayCircle className="w-5 h-5" />
              Watch Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}