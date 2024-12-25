import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '../../types/recipe';

interface RecipeHeaderProps {
  recipe: Recipe;
}

export default function RecipeHeader({ recipe }: RecipeHeaderProps) {
  return (
    <div className="relative h-[400px] mb-8">
      <img 
        src={recipe.image} 
        alt={recipe.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <span className="text-orange-400 font-medium mb-2 inline-block">
            {recipe.category}
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">
            {recipe.title}
          </h1>
          <div className="flex gap-6 text-white">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {recipe.time}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              {recipe.servings} servings
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5" />
              {recipe.difficulty}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}