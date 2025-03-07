import React from 'react';
import { Leaf, Wheat, Milk, Fish, Egg, Nut, AlertCircle, Heart, Dumbbell, Brain } from 'lucide-react';

interface DietaryOption {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: 'diet' | 'allergy' | 'health';
}

const dietaryOptions: DietaryOption[] = [
  // Diet Types
  {
    id: 'vegetarian',
    title: 'Vegetarian',
    description: 'Plant-based diet with eggs and dairy',
    icon: Leaf,
    category: 'diet'
  },
  {
    id: 'vegan',
    title: 'Vegan',
    description: 'Exclusively plant-based foods',
    icon: Heart,
    category: 'diet'
  },
  {
    id: 'pescatarian',
    title: 'Pescatarian',
    description: 'Plant-based with seafood',
    icon: Fish,
    category: 'diet'
  },
  {
    id: 'keto',
    title: 'Ketogenic',
    description: 'High-fat, low-carb diet',
    icon: Dumbbell,
    category: 'diet'
  },
  // Allergies & Restrictions
  {
    id: 'gluten-free',
    title: 'Gluten Free',
    description: 'No wheat, rye, or barley',
    icon: Wheat,
    category: 'allergy'
  },
  {
    id: 'dairy-free',
    title: 'Dairy Free',
    description: 'No milk products',
    icon: Milk,
    category: 'allergy'
  },
  {
    id: 'egg-free',
    title: 'Egg Free',
    description: 'No eggs or egg products',
    icon: Egg,
    category: 'allergy'
  },
  {
    id: 'nut-free',
    title: 'Nut Free',
    description: 'No nuts or peanuts',
    icon: Nut,
    category: 'allergy'
  },
  // Health Conditions
  {
    id: 'low-sodium',
    title: 'Low Sodium',
    description: 'Reduced salt content',
    icon: Heart,
    category: 'health'
  },
  {
    id: 'diabetic',
    title: 'Diabetic Friendly',
    description: 'Low glycemic index foods',
    icon: Brain,
    category: 'health'
  }
];

interface DietarySelectorProps {
  selectedPreferences: string[];
  onPreferencesChange: (preferences: string[]) => void;
}

export default function DietarySelector({ selectedPreferences, onPreferencesChange }: DietarySelectorProps) {
  const togglePreference = (id: string) => {
    if (selectedPreferences.includes(id)) {
      onPreferencesChange(selectedPreferences.filter(p => p !== id));
    } else {
      onPreferencesChange([...selectedPreferences, id]);
    }
  };

  const renderSection = (category: 'diet' | 'allergy' | 'health', title: string) => {
    const options = dietaryOptions.filter(option => option.category === category);
    
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option) => {
            const isSelected = selectedPreferences.includes(option.id);
            const Icon = option.icon;

            return (
              <button
                key={option.id}
                onClick={() => togglePreference(option.id)}
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
                      {option.title}
                    </h3>
                    <p className={`text-sm ${
                      isSelected ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">Important Notice</h3>
            <p className="text-sm text-blue-700">
              Select all dietary restrictions and preferences that apply. This helps us create a meal plan that's perfectly tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Diet Types */}
      {renderSection('diet', 'Diet Types')}

      {/* Allergies & Restrictions */}
      {renderSection('allergy', 'Allergies & Restrictions')}

      {/* Health Conditions */}
      {renderSection('health', 'Health Conditions')}
    </div>
  );
}