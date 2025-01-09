import React from 'react';

interface SelectedIngredientsProps {
  selectedIngredients: string[];
  onRemove: (ingredient: string) => void;
}

export default function SelectedIngredients({ selectedIngredients, onRemove }: SelectedIngredientsProps) {
  if (selectedIngredients.length === 0) return null;

  return (
    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
      <h3 className="text-sm font-medium text-emerald-800 mb-2">Selected Ingredients</h3>
      <div className="flex flex-wrap gap-2">
        {selectedIngredients.map((ingredient) => (
          <button
            key={ingredient}
            onClick={() => onRemove(ingredient)}
            className="inline-flex items-center px-2.5 py-1 rounded-full text-sm bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
          >
            {ingredient}
            <span className="ml-1 text-emerald-500">×</span>
          </button>
        ))}
      </div>
    </div>
  );
}