import React from 'react';
import { Flame, Utensils, Cake, Leaf } from 'lucide-react';

export default function GuideCategories() {
  const categories = [
    { icon: Flame, name: 'Cooking Basics', count: 15 },
    { icon: Utensils, name: 'Advanced Techniques', count: 12 },
    { icon: Cake, name: 'Baking & Pastry', count: 18 },
    { icon: Leaf, name: 'Healthy Cooking', count: 10 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {categories.map((category, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <category.icon className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
          <p className="text-gray-600">{category.count} guides</p>
        </div>
      ))}
    </div>
  );
}