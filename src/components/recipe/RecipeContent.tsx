import React from 'react';
import { Recipe } from '../../types/recipe';

interface RecipeContentProps {
  recipe: Recipe;
}

export default function RecipeContent({ recipe }: RecipeContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-orange-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          
          {recipe.nutritionFacts && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Nutrition Facts</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Calories</span>
                  <span className="font-medium">{recipe.nutritionFacts.calories}</span>
                </div>
                <div className="flex justify-between">
                  <span>Protein</span>
                  <span className="font-medium">{recipe.nutritionFacts.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbs</span>
                  <span className="font-medium">{recipe.nutritionFacts.carbs}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fat</span>
                  <span className="font-medium">{recipe.nutritionFacts.fat}g</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Instructions</h2>
          <ol className="space-y-6">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </span>
                <p className="text-gray-700">{instruction}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}