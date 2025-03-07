import React from 'react';

interface RecipeIngredientsProps {
  ingredients: string[];
}

export default function RecipeIngredients({ ingredients }: RecipeIngredientsProps) {
  return (
    <div className="bg-orange-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
      <ul className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}