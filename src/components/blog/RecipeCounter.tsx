import React from 'react';
import { ChefHat } from 'lucide-react';
import { recipes } from '../../data/recipes';

export default function RecipeCounter() {
  const recipeCount = recipes.length;
  const categories = new Set(recipes.map(recipe => recipe.category)).size;

  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 mb-12">
      <div className="flex items-center justify-between flex-wrap gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900">Recipe Collection</h2>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-orange-500">{recipeCount}+ Recipes</p>
            <p className="text-gray-600">Across {categories} different categories</p>
          </div>
        </div>
        
        <div className="flex-1 min-w-[280px]">
          <p className="text-gray-700 mb-4">
            Join our community to unlock the full potential of our recipe collection. Save favorites, create meal plans, and share your own culinary creations!
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold">
            Create Free Account
          </button>
        </div>
      </div>
    </div>
  );
}