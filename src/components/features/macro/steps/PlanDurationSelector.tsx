import React from 'react';
import { Calendar, Sparkles, CalendarDays, CalendarRange } from 'lucide-react';

interface DurationOption {
  id: string;
  title: string;
  days: number;
  description: string;
  icon: React.ElementType;
  recommended?: boolean;
}

const durationOptions: DurationOption[] = [
  {
    id: '3-days',
    title: 'Quick Start',
    days: 3,
    description: 'Perfect for trying out the meal plan',
    icon: Calendar
  },
  {
    id: '7-days',
    title: 'Weekly Plan',
    days: 7,
    description: 'Most popular choice for consistent results',
    icon: CalendarDays,
    recommended: true
  },
  {
    id: '14-days',
    title: 'Bi-Weekly',
    days: 14,
    description: 'Great for establishing healthy habits',
    icon: CalendarRange
  },
  {
    id: '30-days',
    title: 'Monthly Challenge',
    days: 30,
    description: 'Maximum results and variety',
    icon: Sparkles
  }
];

interface PlanDurationSelectorProps {
  selectedDuration: string | null;
  onSelect: (durationId: string) => void;
}

export default function PlanDurationSelector({ selectedDuration, onSelect }: PlanDurationSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">Choose Your Plan Duration</h3>
            <p className="text-sm text-blue-700">
              Select how long you'd like your meal plan to be. Longer plans offer more variety and help establish healthy habits.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {durationOptions.map((option) => {
          const isSelected = selectedDuration === option.id;
          const Icon = option.icon;

          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`relative p-6 rounded-xl text-left transition-all ${
                isSelected
                  ? 'border-2 border-blue-500 bg-blue-50'
                  : 'border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50/50'
              }`}
            >
              {option.recommended && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-medium bg-blue-500 text-white rounded-full">
                  Recommended
                </span>
              )}
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
                    {option.title}
                  </h3>
                  <p className={`text-sm mb-2 ${
                    isSelected ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {option.description}
                  </p>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full inline-flex items-center ${
                    isSelected 
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {option.days} days
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selectedDuration && (
        <div className="mt-8 p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
          <h3 className="text-lg font-semibold mb-2">Ready to Generate Your Plan!</h3>
          <p className="text-blue-100">
            We'll create a personalized {durationOptions.find(opt => opt.id === selectedDuration)?.days}-day meal plan 
            based on your preferences and nutritional goals.
          </p>
        </div>
      )}
    </div>
  );
}