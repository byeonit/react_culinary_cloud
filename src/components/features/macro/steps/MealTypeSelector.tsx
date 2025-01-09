import React from 'react';
import { Coffee, Sun, Moon, Apple, Clock } from 'lucide-react';

interface MealType {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  timing: string;
  macroSplit?: {
    protein: number;
    carbs: number;
    fats: number;
  };
}

const mealTypes: MealType[] = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    description: 'Start your day with balanced energy',
    icon: Coffee,
    timing: '6:00 AM - 10:00 AM',
    macroSplit: {
      protein: 25,
      carbs: 50,
      fats: 25
    }
  },
  {
    id: 'lunch',
    title: 'Lunch',
    description: 'Midday fuel for productivity',
    icon: Sun,
    timing: '11:00 AM - 2:00 PM',
    macroSplit: {
      protein: 30,
      carbs: 40,
      fats: 30
    }
  },
  {
    id: 'dinner',
    title: 'Dinner',
    description: 'Evening nourishment',
    icon: Moon,
    timing: '5:00 PM - 9:00 PM',
    macroSplit: {
      protein: 35,
      carbs: 35,
      fats: 30
    }
  },
  {
    id: 'snack',
    title: 'Snack',
    description: 'Light nutritious boost',
    icon: Apple,
    timing: 'Flexible',
    macroSplit: {
      protein: 20,
      carbs: 60,
      fats: 20
    }
  }
];

interface MealTypeSelectorProps {
  selectedMeal: string | null;
  onSelect: (mealId: string) => void;
}

export default function MealTypeSelector({ selectedMeal, onSelect }: MealTypeSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">Select Your Meal Time</h3>
            <p className="text-sm text-blue-700">
              Choose when you plan to eat this meal. Each option comes with recommended macro splits.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mealTypes.map((meal) => {
          const isSelected = selectedMeal === meal.id;
          const Icon = meal.icon;

          return (
            <button
              key={meal.id}
              onClick={() => onSelect(meal.id)}
              className={`p-6 rounded-xl text-left transition-all ${
                isSelected
                  ? 'border-2 border-blue-500 bg-blue-50'
                  : 'border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  isSelected ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    isSelected ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                </div>
                <div>
                  <h3 className={`font-semibold mb-1 ${
                    isSelected ? 'text-blue-900' : 'text-gray-900'
                  }`}>
                    {meal.title}
                  </h3>
                  <p className={`text-sm mb-2 ${
                    isSelected ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {meal.description}
                  </p>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full inline-flex items-center gap-1 ${
                    isSelected 
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Clock className="w-3 h-3" />
                    {meal.timing}
                  </div>
                  {meal.macroSplit && isSelected && (
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="text-xs">
                        <div className="font-medium text-blue-900">Protein</div>
                        <div className="text-blue-600">{meal.macroSplit.protein}%</div>
                      </div>
                      <div className="text-xs">
                        <div className="font-medium text-blue-900">Carbs</div>
                        <div className="text-blue-600">{meal.macroSplit.carbs}%</div>
                      </div>
                      <div className="text-xs">
                        <div className="font-medium text-blue-900">Fats</div>
                        <div className="text-blue-600">{meal.macroSplit.fats}%</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}