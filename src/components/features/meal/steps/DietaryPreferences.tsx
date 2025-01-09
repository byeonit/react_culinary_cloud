import React from 'react';
import { Leaf, Wheat, Milk, Fish, Egg, Nut, AlertCircle } from 'lucide-react';

interface DietaryOption {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: 'diet' | 'allergy';
}

const dietaryOptions: DietaryOption[] = [
  // Diet Types
  {
    id: 'vegetarian',
    title: 'Vegetarian',
    description: 'No meat or fish',
    icon: Leaf,
    category: 'diet'
  },
  {
    id: 'vegan',
    title: 'Vegan',
    description: 'No animal products',
    icon: Leaf,
    category: 'diet'
  },
  {
    id: 'pescatarian',
    title: 'Pescatarian',
    description: 'No meat except fish',
    icon: Fish,
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
  }
];

interface DietaryPreferencesProps {
  selectedPreferences: string[];
  onPreferencesChange: (preferences: string[]) => void;
}

export default function DietaryPreferences({ selectedPreferences, onPreferencesChange }: DietaryPreferencesProps) {
  const togglePreference = (id: string) => {
    if (selectedPreferences.includes(id)) {
      onPreferencesChange(selectedPreferences.filter(p => p !== id));
    } else {
      onPreferencesChange([...selectedPreferences, id]);
    }
  };

  const renderSection = (category: 'diet' | 'allergy', title: string) => {
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
                    <h3 className={`font-semibold mb-1 ${
                      isSelected ? 'text-green-900' : 'text-gray-900'
                    }`}>
                      {option.title}
                    </h3>
                    <p className={`text-sm ${
                      isSelected ? 'text-green-600' : 'text-gray-500'
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
      <div className="bg-green-50 border border-green-100 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-medium text-green-900 mb-1">Important Notice</h3>
            <p className="text-sm text-green-700">
              Select all dietary restrictions and preferences that apply. This helps us create a meal plan that's safe and suitable for you.
            </p>
          </div>
        </div>
      </div>

      {/* Diet Types */}
      {renderSection('diet', 'Diet Types')}

      {/* Allergies & Restrictions */}
      {renderSection('allergy', 'Allergies & Restrictions')}
    </div>
  );
}