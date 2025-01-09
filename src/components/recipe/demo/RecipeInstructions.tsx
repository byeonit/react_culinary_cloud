import React from 'react';

interface RecipeInstructionsProps {
  instructions: string[];
}

export default function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Instructions</h2>
      <ol className="space-y-4">
        {instructions.map((instruction, index) => (
          <li key={index} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center font-semibold">
              {index + 1}
            </span>
            <p className="text-gray-700">{instruction}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}