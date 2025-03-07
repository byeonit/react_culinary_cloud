import React from 'react';
import { Clock, Users, ChefHat, UtensilsCrossed, Calendar } from 'lucide-react';
import { formatDate } from '../../../utils/dateFormatter';

interface RecipeHeaderProps {
  title: string;
  mealType: string;
  cookingTime: number;
  servings: number;
  createdAt: string;
  createdByUserName: string;
}

export default function RecipeHeader({ 
  title, 
  mealType, 
  cookingTime, 
  servings,
  createdAt,
  createdByUserName
}: RecipeHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-orange-500">
            <UtensilsCrossed className="w-5 h-5" />
            <span className="font-medium">{mealType}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(createdAt)}</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        
        <div className="flex flex-wrap gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{cookingTime} min</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>{servings} serving{servings > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="w-5 h-5" />
            <span>By {createdByUserName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}