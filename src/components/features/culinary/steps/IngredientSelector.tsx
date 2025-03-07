import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface IngredientSelectorProps {
  selectedIngredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
}

export default function IngredientSelector({ selectedIngredients, onIngredientsChange }: IngredientSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { 
      name: 'Vegetables', 
      items: ['Carrot', 'Broccoli', 'Spinach', 'Tomato', 'Onion', 'Bell Pepper', 'Zucchini', 'Garlic'] 
    },
    { 
      name: 'Proteins', 
      items: ['Chicken', 'Beef', 'Fish', 'Tofu', 'Eggs', 'Shrimp', 'Chickpeas', 'Lentils'] 
    },
    { 
      name: 'Grains', 
      items: ['Rice', 'Pasta', 'Quinoa', 'Bread', 'Couscous', 'Oats', 'Barley'] 
    }
  ];

  const toggleIngredient = (ingredient: string) => {
    if (selectedIngredients.includes(ingredient)) {
      onIngredientsChange(selectedIngredients.filter(i => i !== ingredient));
    } else {
      onIngredientsChange([...selectedIngredients, ingredient]);
    }
  };

  // Filter out selected ingredients and apply search term
  const filteredCategories = categories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedIngredients.includes(item)
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search ingredients..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
        />
      </div>

      <div className="space-y-6">
        {filteredCategories.map((category) => (
          <div key={category.name}>
            <h3 className="text-lg font-medium text-gray-900 mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleIngredient(item)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white rounded-full border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors group"
                >
                  <Plus className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700">{item}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}