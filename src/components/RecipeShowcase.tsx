import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import RecipeCarousel from './carousel/RecipeCarousel';
import { recipes } from '../data/recipes';

export default function RecipeShowcase() {
  const recipeCount = recipes.length;

  return (
    <section id="recipes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Recipes</h2>
          <p className="text-xl text-gray-600 mb-8">Discover our community's most loved recipes</p>
          
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-orange-500 rounded-full hover:bg-orange-50 transition-all group"
          >
            <ChefHat className="w-6 h-6 text-orange-500" />
            <span className="text-lg">
              <span className="font-bold text-orange-500">{recipeCount}+ Recipes</span>
              <span className="text-gray-600 ml-2">Available</span>
            </span>
            <span className="text-orange-500 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        <RecipeCarousel />
      </div>
    </section>
  );
}