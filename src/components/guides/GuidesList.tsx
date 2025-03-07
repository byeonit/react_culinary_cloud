import React from 'react';
import { Clock, ChefHat } from 'lucide-react';

export default function GuidesList() {
  const guides = [
    {
      title: "Perfect Pan Searing",
      description: "Master the art of achieving the perfect crust on meats and fish",
      difficulty: "Intermediate",
      duration: "20 min",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
    },
    {
      title: "Sauce Fundamentals",
      description: "Learn the five mother sauces and their derivatives",
      difficulty: "Advanced",
      duration: "45 min",
      image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc"
    },
    {
      title: "Bread Making Basics",
      description: "Start your journey into artisanal bread making",
      difficulty: "Beginner",
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img 
              src={guide.image} 
              alt={guide.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <ChefHat className="w-4 h-4" />
                  {guide.difficulty}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {guide.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}