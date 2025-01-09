import React from 'react';
import { Target, TrendingDown, Dumbbell, Heart, Scale, Brain } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  benefits: string[];
  recommended?: boolean;
}

const goals: Goal[] = [
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    description: 'Healthy and sustainable weight reduction',
    icon: TrendingDown,
    benefits: [
      'Balanced calorie deficit',
      'Nutrient-rich meals',
      'Portion control guidance'
    ],
    recommended: true
  },
  {
    id: 'muscle-gain',
    title: 'Muscle Gain',
    description: 'Build lean muscle mass and strength',
    icon: Dumbbell,
    benefits: [
      'Protein-rich meals',
      'Strategic carb timing',
      'Recovery-focused nutrition'
    ]
  },
  {
    id: 'maintenance',
    title: 'Weight Maintenance',
    description: 'Maintain current weight and improve health',
    icon: Scale,
    benefits: [
      'Balanced macronutrients',
      'Stable energy levels',
      'Sustainable habits'
    ]
  },
  {
    id: 'health',
    title: 'General Health',
    description: 'Focus on overall wellness and vitality',
    icon: Heart,
    benefits: [
      'Diverse nutrient intake',
      'Anti-inflammatory foods',
      'Immune system support'
    ]
  },
  {
    id: 'performance',
    title: 'Athletic Performance',
    description: 'Optimize nutrition for sports and fitness',
    icon: Target,
    benefits: [
      'Pre/post workout nutrition',
      'Energy optimization',
      'Enhanced recovery'
    ]
  },
  {
    id: 'mindful',
    title: 'Mindful Eating',
    description: 'Develop a healthier relationship with food',
    icon: Brain,
    benefits: [
      'Balanced meal planning',
      'Mindful portions',
      'Sustainable approach'
    ]
  }
];

interface GoalSelectorProps {
  selectedGoal: string | null;
  onSelect: (goalId: string) => void;
}

export default function GoalSelector({ selectedGoal, onSelect }: GoalSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-100 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Target className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-medium text-green-900 mb-1">Choose Your Primary Goal</h3>
            <p className="text-sm text-green-700">
              Select the goal that best matches what you want to achieve. Your meal plan will be tailored to support this goal.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {goals.map((goal) => {
          const isSelected = selectedGoal === goal.id;
          const Icon = goal.icon;

          return (
            <button
              key={goal.id}
              onClick={() => onSelect(goal.id)}
              className={`relative p-6 rounded-xl text-left transition-all ${
                isSelected
                  ? 'border-2 border-green-500 bg-green-50'
                  : 'border-2 border-gray-200 hover:border-green-200 hover:bg-green-50/50'
              }`}
            >
              {goal.recommended && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-medium bg-green-500 text-white rounded-full">
                  Recommended
                </span>
              )}
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
                    {goal.title}
                  </h3>
                  <p className={`text-sm mb-3 ${
                    isSelected ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {goal.description}
                  </p>
                  <div className="space-y-1">
                    {goal.benefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className={`text-xs flex items-center gap-1 ${
                          isSelected ? 'text-green-600' : 'text-gray-500'
                        }`}
                      >
                        <span className="w-1 h-1 rounded-full bg-current" />
                        {benefit}
                      </div>
                    ))}
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