import React from 'react';
import { Tag } from 'lucide-react';

interface RecipeMetadataProps {
  culinaryPreferences: string[];
  cookingMethod: string;
}

export default function RecipeMetadata({ culinaryPreferences, cookingMethod }: RecipeMetadataProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 mt-6">
      <h3 className="text-lg font-semibold mb-3">Recipe Details</h3>
      <div className="space-y-4">
        <div>
          <span className="text-sm font-medium text-gray-500">Cooking Method:</span>
          <div className="mt-1">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              {cookingMethod}
            </span>
          </div>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-500">Preferences:</span>
          <div className="mt-1 flex flex-wrap gap-2">
            {culinaryPreferences.map((pref, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700"
              >
                <Tag className="w-3 h-3" />
                {pref}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}