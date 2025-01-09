import React from 'react';
import { Activity, Dumbbell, Coffee, Briefcase, Bike, Trophy } from 'lucide-react';

interface ActivityLevel {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  examples: string[];
  calories: string;
}

const activityLevels: ActivityLevel[] = [
  {
    id: 'sedentary',
    title: 'Sedentary',
    description: 'Little to no regular exercise',
    icon: Coffee,
    examples: [
      'Desk job',
      'Limited walking',
      'Mostly sitting'
    ],
    calories: 'Base calories'
  },
  {
    id: 'light',
    title: 'Lightly Active',
    description: 'Light exercise 1-3 days/week',
    icon: Briefcase,
    examples: [
      'Walking',
      'Light housework',
      'Casual cycling'
    ],
    calories: '+200-400 calories'
  },
  {
    id: 'moderate',
    title: 'Moderately Active',
    description: 'Moderate exercise 3-5 days/week',
    icon: Activity,
    examples: [
      'Jogging',
      'Light sports',
      'Regular workouts'
    ],
    calories: '+400-600 calories'
  },
  {
    id: 'very',
    title: 'Very Active',
    description: 'Hard exercise 6-7 days/week',
    icon: Bike,
    examples: [
      'Intense training',
      'Team sports',
      'Daily workouts'
    ],
    calories: '+600-800 calories'
  },
  {
    id: 'extra',
    title: 'Extra Active',
    description: 'Very hard exercise & physical job',
    icon: Trophy,
    examples: [
      'Professional athlete',
      'Construction work',
      'Multiple training sessions'
    ],
    calories: '+800-1000 calories'
  }
];

interface ActivitySelectorProps {
  selectedLevel: string | null;
  onSelect: (levelId: string) => void;
}

export default function ActivitySelector({ selectedLevel, onSelect }: ActivitySelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-100 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Activity className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-medium text-green-900 mb-1">Select Your Activity Level</h3>
            <p className="text-sm text-green-700">
              Choose the option that best matches your typical daily activity level. This helps us calculate your caloric needs.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activityLevels.map((level) => {
          const isSelected = selectedLevel === level.id;
          const Icon = level.icon;

          return (
            <button
              key={level.id}
              onClick={() => onSelect(level.id)}
              className={`p-6 rounded-xl text-left transition-all ${
                isSelected
                  ? 'border-2 border-green-500 bg-green-50'
                  : 'border-2 border-gray-200 hover:border-green-200 hover:bg-green-50/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  isSelected ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    isSelected ? 'text-green-600' : 'text-gray-500'
                  }`} />
                </div>
                <div>
                  <h3 className={`font-semibold mb-2 ${
                    isSelected ? 'text-green-900' : 'text-gray-900'
                  }`}>
                    {level.title}
                  </h3>
                  <p className={`text-sm mb-3 ${
                    isSelected ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {level.description}
                  </p>
                  <div className="space-y-1">
                    {level.examples.map((example, index) => (
                      <div 
                        key={index}
                        className={`text-xs flex items-center gap-1 ${
                          isSelected ? 'text-green-600' : 'text-gray-500'
                        }`}
                      >
                        <span className="w-1 h-1 rounded-full bg-current" />
                        {example}
                      </div>
                    ))}
                  </div>
                  <div className={`mt-3 text-xs font-medium px-2 py-1 rounded-full inline-flex items-center ${
                    isSelected 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {level.calories}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}