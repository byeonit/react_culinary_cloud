import React from 'react';
import { ChefHat, Book, GraduationCap, Trophy, Flame } from 'lucide-react';

interface SkillLevel {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  techniques: string[];
}

const skillLevels: SkillLevel[] = [
  {
    id: 'beginner',
    title: 'Beginner Cook',
    description: 'Learning the basics of cooking',
    icon: Book,
    techniques: ['Basic knife skills', 'Simple sautéing', 'Boiling and steaming']
  },
  {
    id: 'home-cook',
    title: 'Home Cook',
    description: 'Comfortable with everyday cooking',
    icon: ChefHat,
    techniques: ['Multiple dishes at once', 'Basic sauce making', 'Meal planning']
  },
  {
    id: 'enthusiast',
    title: 'Cooking Enthusiast',
    description: 'Experienced with various techniques',
    icon: Flame,
    techniques: ['Complex sauces', 'Meat temperature control', 'Flavor balancing']
  },
  {
    id: 'advanced',
    title: 'Advanced Cook',
    description: 'Mastered multiple cooking methods',
    icon: Trophy,
    techniques: ['Advanced knife work', 'Stock making', 'Complex timing']
  },
  {
    id: 'expert',
    title: 'Expert Chef',
    description: 'Professional-level expertise',
    icon: GraduationCap,
    techniques: ['Recipe development', 'Advanced techniques', 'Kitchen management']
  }
];

interface SkillLevelSelectorProps {
  selectedLevel: string | null;
  onSelect: (levelId: string) => void;
}

export default function SkillLevelSelector({ selectedLevel, onSelect }: SkillLevelSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
        <p className="text-blue-800">
          Select your cooking expertise level to receive appropriately detailed instructions and techniques in your recipe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillLevels.map((level) => {
          const isSelected = selectedLevel === level.id;
          const Icon = level.icon;

          return (
            <button
              key={level.id}
              onClick={() => onSelect(level.id)}
              className={`p-6 rounded-xl text-left transition-all ${
                isSelected
                  ? 'border-2 border-emerald-500 bg-emerald-50'
                  : 'border-2 border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  isSelected ? 'bg-emerald-100' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    isSelected ? 'text-emerald-600' : 'text-gray-500'
                  }`} />
                </div>
                <div>
                  <h3 className={`font-semibold mb-2 ${
                    isSelected ? 'text-emerald-900' : 'text-gray-900'
                  }`}>
                    {level.title}
                  </h3>
                  <p className={`text-sm mb-3 ${
                    isSelected ? 'text-emerald-600' : 'text-gray-500'
                  }`}>
                    {level.description}
                  </p>
                  <div className="space-y-1">
                    {level.techniques.map((technique, index) => (
                      <div 
                        key={index}
                        className={`text-xs flex items-center gap-1 ${
                          isSelected ? 'text-emerald-600' : 'text-gray-500'
                        }`}
                      >
                        <span className="w-1 h-1 rounded-full bg-current" />
                        {technique}
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