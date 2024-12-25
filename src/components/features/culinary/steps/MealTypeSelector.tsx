import React from 'react';
import { Clock, Utensils, Coffee, Sun, Moon } from 'lucide-react';

interface MealType {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const mealTypes: MealType[] = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    description: 'Start your day with energy',
    icon: Coffee
  },
  {
    id: 'lunch',
    title: 'Lunch',
    description: 'Quick and nutritious meals',
    icon: Sun
  },
  {
    id: 'dinner',
    title: 'Dinner',
    description: 'Evening comfort food',
    icon: Moon
  },
  {
    id: 'snack',
    title: 'Snack',
    description: 'Light bites and appetizers',
    icon: Clock
  },
  {
    id: 'dessert',
    title: 'Dessert',
    description: 'Sweet treats and baked goods',
    icon: Utensils
  }
];

interface MealTypeSelectorProps {
  selectedMeal: string | null;
  onSelect: (mealId: string) => void;
}

export default function MealTypeSelector({ selectedMeal, onSelect }: MealTypeSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {mealTypes.map((meal) => {
        const isSelected = selectedMeal === meal.id;
        const Icon = meal.icon;

        return (
          <button
            key={meal.id}
            onClick={() => onSelect(meal.id)}
            className={`p-6 rounded-xl border-2 text-left transition-all ${
              isSelected
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/50'
            }`}
          >
            <Icon className={`w-8 h-8 mb-3 ${
              isSelected ? 'text-emerald-500' : 'text-gray-400'
            }`} />
            <h3 className={`font-semibold mb-1 ${
              isSelected ? 'text-emerald-900' : 'text-gray-900'
            }`}>
              {meal.title}
            </h3>
            <p className={`text-sm ${
              isSelected ? 'text-emerald-600' : 'text-gray-500'
            }`}>
              {meal.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}