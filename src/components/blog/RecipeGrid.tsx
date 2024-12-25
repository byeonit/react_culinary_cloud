import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChefHat } from 'lucide-react';
import { Recipe } from '../../types/recipe';

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <Link 
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
        >
          <div className="relative">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-orange-500">
              {recipe.category}
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors">
              {recipe.title}
            </h3>
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {recipe.time}
              </div>
              <div className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                {recipe.difficulty}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}