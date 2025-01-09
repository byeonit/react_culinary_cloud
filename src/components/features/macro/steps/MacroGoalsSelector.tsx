import React from 'react';
import { Scale, Dumbbell } from 'lucide-react';

interface MacroGoals {
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
  fitnessGoal: string;
}

interface MacroGoalsSelectorProps {
  goals: MacroGoals;
  onChange: (goals: MacroGoals) => void;
}

const fitnessGoals = [
  'Weight Loss',
  'Muscle Gain',
  'Maintenance',
  'Performance',
  'General Health'
];

export default function MacroGoalsSelector({ goals, onChange }: MacroGoalsSelectorProps) {
  const handleInputChange = (field: keyof MacroGoals, value: string) => {
    onChange({
      ...goals,
      [field]: field === 'fitnessGoal' ? value : Number(value)
    });
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Scale className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">Macro Calculator</h3>
            <p className="text-sm text-blue-700">
              Enter your target macronutrients in grams. We'll help you create meals that match these goals.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Protein (g)
            </label>
            <input
              type="number"
              min="0"
              value={goals.protein}
              onChange={(e) => handleInputChange('protein', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Carbs (g)
            </label>
            <input
              type="number"
              min="0"
              value={goals.carbs}
              onChange={(e) => handleInputChange('carbs', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fats (g)
            </label>
            <input
              type="number"
              min="0"
              value={goals.fats}
              onChange={(e) => handleInputChange('fats', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target Calories
            </label>
            <input
              type="number"
              min="0"
              value={goals.calories}
              onChange={(e) => handleInputChange('calories', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fitness Goal
            </label>
            <div className="grid grid-cols-1 gap-2">
              {fitnessGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => handleInputChange('fitnessGoal', goal)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors ${
                    goals.fitnessGoal === goal
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/50'
                  }`}
                >
                  <Dumbbell className="w-4 h-4" />
                  {goal}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}