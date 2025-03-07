import React from 'react';
import { 
  Leaf, 
  Wheat, 
  Milk, 
  Fish, 
  Egg, 
  Nut, 
  Heart, 
  AlertCircle,
  Flame,
  Scale
} from 'lucide-react';

interface DietaryPreference {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  type: 'diet' | 'allergy';
}

const preferences: DietaryPreference[] = [
  {
    id: 'vegetarian',
    title: 'Vegetarian',
    description: 'No meat or fish',
    icon: Leaf,
    type: 'diet'
  },
  {
    id: 'vegan',
    title: 'Vegan',
    description: 'No animal products',
    icon: Heart,
    type: 'diet'
  },
  {
    id: 'keto',
    title: 'Keto',
    description: 'Low-carb, high-fat',
    icon: Flame,
    type: 'diet'
  },
  {
    id: 'lowCalorie',
    title: 'Low Calorie',
    description: 'Under 500 calories per serving',
    icon: Scale,
    type: 'diet'
  }
];

const allergens: DietaryPreference[] = [
  {
    id: 'gluten',
    title: 'Gluten Free',
    description: 'No wheat, rye, or barley',
    icon: Wheat,
    type: 'allergy'
  },
  {
    id: 'dairy',
    title: 'Dairy Free',
    description: 'No milk products',
    icon: Milk,
    type: 'allergy'
  },
  {
    id: 'seafood',
    title: 'Seafood Free',
    description: 'No fish or shellfish',
    icon: Fish,
    type: 'allergy'
  },
  {
    id: 'eggs',
    title: 'Egg Free',
    description: 'No eggs or egg products',
    icon: Egg,
    type: 'allergy'
  },
  {
    id: 'nuts',
    title: 'Nut Free',
    description: 'No tree nuts or peanuts',
    icon: Nut,
    type: 'allergy'
  }
];

interface PreferencesSelectorProps {
  selectedPreferences: string[];
  onPreferencesChange: (preferences: string[]) => void;
}

export default function PreferencesSelector({ 
  selectedPreferences, 
  onPreferencesChange 
}: PreferencesSelectorProps) {
  const togglePreference = (id: string) => {
    if (selectedPreferences.includes(id)) {
      onPreferencesChange(selectedPreferences.filter(p => p !== id));
    } else {
      onPreferencesChange([...selectedPreferences, id]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Warning Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="font-medium text-amber-900 mb-1">Important Notice</h4>
          <p className="text-sm text-amber-700">
            While we take dietary restrictions seriously, please always check ingredients carefully 
            if you have severe allergies. Cross-contamination may occur during food preparation.
          </p>
        </div>
      </div>

      {/* Dietary Preferences */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Dietary Preferences</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {preferences.map((pref) => {
            const isSelected = selectedPreferences.includes(pref.id);
            const Icon = pref.icon;

            return (
              <button
                key={pref.id}
                onClick={() => togglePreference(pref.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg mb-3 flex items-center justify-center ${
                  isSelected ? 'bg-emerald-100' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    isSelected ? 'text-emerald-600' : 'text-gray-500'
                  }`} />
                </div>
                <h4 className={`font-medium mb-1 ${
                  isSelected ? 'text-emerald-900' : 'text-gray-900'
                }`}>
                  {pref.title}
                </h4>
                <p className={`text-sm ${
                  isSelected ? 'text-emerald-600' : 'text-gray-500'
                }`}>
                  {pref.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Allergens */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Allergies & Restrictions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allergens.map((allergen) => {
            const isSelected = selectedPreferences.includes(allergen.id);
            const Icon = allergen.icon;

            return (
              <button
                key={allergen.id}
                onClick={() => togglePreference(allergen.id)}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                  isSelected
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-red-200 hover:bg-red-50/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-red-100' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    isSelected ? 'text-red-600' : 'text-gray-500'
                  }`} />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${
                    isSelected ? 'text-red-900' : 'text-gray-900'
                  }`}>
                    {allergen.title}
                  </h4>
                  <p className={`text-sm ${
                    isSelected ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {allergen.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}