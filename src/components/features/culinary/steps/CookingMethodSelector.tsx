import React from 'react';
import { 
  Flame, 
  UtensilsCrossed, 
  Soup, 
  Salad,
  Timer,
  CookingPot,
  Clock
} from 'lucide-react';

interface CookingMethod {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  timeRange: string;
}

const cookingMethods: CookingMethod[] = [
  {
    id: 'stovetop',
    title: 'Stovetop',
    description: 'Pan-frying, sautéing, or boiling',
    icon: CookingPot,
    timeRange: '15-45 min'
  },
  {
    id: 'bake',
    title: 'Baking',
    description: 'Roasting or baking in the oven',
    icon: Timer,
    timeRange: '30-90 min'
  },
  {
    id: 'grill',
    title: 'Grill',
    description: 'Grilling or barbecuing',
    icon: Flame,
    timeRange: '20-60 min'
  },
  {
    id: 'slowcook',
    title: 'Slow Cook',
    description: 'Slow cooking or braising',
    icon: Soup,
    timeRange: '4-8 hrs'
  },
  {
    id: 'noHeat',
    title: 'No Heat',
    description: 'Salads, sandwiches, or raw dishes',
    icon: Salad,
    timeRange: '10-20 min'
  }
];

interface CookingMethodSelectorProps {
  selectedMethod: string | null;
  onSelect: (methodId: string) => void;
}

export default function CookingMethodSelector({ selectedMethod, onSelect }: CookingMethodSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cookingMethods.map((method) => {
          const isSelected = selectedMethod === method.id;
          const Icon = method.icon;

          return (
            <button
              key={method.id}
              onClick={() => onSelect(method.id)}
              className={`group p-6 rounded-xl border-2 text-left transition-all ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg transition-colors ${
                  isSelected ? 'bg-emerald-100' : 'bg-gray-100 group-hover:bg-emerald-100/50'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    isSelected ? 'text-emerald-600' : 'text-gray-500 group-hover:text-emerald-500'
                  }`} />
                </div>
                <div>
                  <h3 className={`font-semibold mb-1 ${
                    isSelected ? 'text-emerald-900' : 'text-gray-900'
                  }`}>
                    {method.title}
                  </h3>
                  <p className={`text-sm mb-2 ${
                    isSelected ? 'text-emerald-600' : 'text-gray-500'
                  }`}>
                    {method.description}
                  </p>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full inline-flex items-center ${
                    isSelected 
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Clock className="w-3 h-3 mr-1" />
                    {method.timeRange}
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