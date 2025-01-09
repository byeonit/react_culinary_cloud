import React from 'react';
import { Users, ChefHat, UtensilsCrossed, Scale } from 'lucide-react';

interface PortionSize {
  id: string;
  title: string;
  servings: string;
  description: string;
  icon: React.ElementType;
  recommended: boolean;
}

const portionSizes: PortionSize[] = [
  {
    id: 'single',
    title: 'Single Portion',
    servings: '1 serving',
    description: 'Perfect for solo meals',
    icon: ChefHat,
    recommended: false
  },
  {
    id: 'couple',
    title: 'Couple Size',
    servings: '2 servings',
    description: 'Ideal for two people',
    icon: Users,
    recommended: true
  },
  {
    id: 'family',
    title: 'Family Size',
    servings: '4 servings',
    description: 'Great for families',
    icon: Users,
    recommended: false
  },
  {
    id: 'group',
    title: 'Group Size',
    servings: '6 servings',
    description: 'Perfect for gatherings',
    icon: Users,
    recommended: false
  },
  {
    id: 'custom',
    title: 'Custom Size',
    servings: 'Custom',
    description: 'Set your own portion size',
    icon: Scale,
    recommended: false
  }
];

interface PortionSelectorProps {
  selectedSize: string | null;
  customServings?: number;
  onSelect: (sizeId: string) => void;
  onCustomServingsChange?: (servings: number) => void;
}

export default function PortionSelector({ 
  selectedSize, 
  customServings = 2,
  onSelect,
  onCustomServingsChange 
}: PortionSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {portionSizes.map((size) => {
          const isSelected = selectedSize === size.id;
          const Icon = size.icon;

          return (
            <button
              key={size.id}
              onClick={() => onSelect(size.id)}
              className={`relative p-6 rounded-xl border-2 text-left transition-all ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/50'
              }`}
            >
              {size.recommended && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-medium bg-emerald-500 text-white rounded-full">
                  Recommended
                </span>
              )}
              
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg transition-colors ${
                  isSelected ? 'bg-emerald-100' : 'bg-gray-100 group-hover:bg-emerald-100/50'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    isSelected ? 'text-emerald-600' : 'text-gray-500'
                  }`} />
                </div>
                <div>
                  <h3 className={`font-semibold mb-1 ${
                    isSelected ? 'text-emerald-900' : 'text-gray-900'
                  }`}>
                    {size.title}
                  </h3>
                  <p className={`text-sm mb-2 ${
                    isSelected ? 'text-emerald-600' : 'text-gray-500'
                  }`}>
                    {size.description}
                  </p>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full inline-flex items-center ${
                    isSelected 
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <UtensilsCrossed className="w-3 h-3 mr-1" />
                    {size.servings}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selectedSize === 'custom' && (
        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
          <h4 className="font-medium text-emerald-900 mb-3">Custom Servings</h4>
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="1"
              max="20"
              value={customServings}
              onChange={(e) => onCustomServingsChange?.(parseInt(e.target.value, 10))}
              className="w-24 px-3 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500"
            />
            <span className="text-emerald-700">servings</span>
          </div>
        </div>
      )}
    </div>
  );
}