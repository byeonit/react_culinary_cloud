import React from 'react';
import { ChefHat } from 'lucide-react';

export default function CulinaryHeader() {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-6 mb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                Culinary Recipe Generator
              </h1>
              <p className="text-emerald-100">Transform your ingredients into delicious meals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}