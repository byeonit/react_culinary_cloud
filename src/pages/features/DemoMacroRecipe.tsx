import React from 'react';
import { ChefHat, Scale, Heart, Info, Clock, Users } from 'lucide-react';

const demoRecipe = {
  recipe: {
    name: "Grilled Chicken with Quinoa and Avocado",
    servings: 2,
    ingredients: [
      { name: "Chicken Breast", quantity: "200g", macros: { protein: 46, carbs: 0, fats: 2 }, healthBenefits: "High in lean protein, supports muscle repair and growth, low in fat." },
      { name: "Quinoa", quantity: "100g", macros: { protein: 4, carbs: 21, fats: 2 }, healthBenefits: "A complete protein source, rich in fiber and essential amino acids, helps with sustained energy." },
      { name: "Avocado", quantity: "100g", macros: { protein: 2, carbs: 9, fats: 15 }, healthBenefits: "Rich in healthy monounsaturated fats, supports heart health, and provides essential vitamins and minerals." },
      { name: "Olive Oil", quantity: "1 tbsp", macros: { protein: 0, carbs: 0, fats: 14 }, healthBenefits: "Contains healthy fats and antioxidants, known for anti-inflammatory properties." }
    ],
    totalMacros: {
      protein: 52,
      carbs: 30,
      fats: 33,
      calories: 530
    },
    instructions: [
      "1. Preheat the grill to medium-high heat.",
      "2. Season the chicken breast with salt and pepper.",
      "3. Grill the chicken for 6-7 minutes on each side or until fully cooked.",
      "4. Cook the quinoa according to package instructions.",
      "5. Slice the avocado and prepare a simple salad.",
      "6. Drizzle olive oil over the salad and serve with the grilled chicken and quinoa."
    ],
    healthAdvice: [
      "This recipe is optimized for muscle gain due to its high protein content, which is essential for muscle repair and growth.",
      "The inclusion of quinoa provides a balanced carbohydrate source that releases energy slowly, making it ideal for post-workout meals.",
      "Avocados and olive oil are excellent sources of healthy fats that support hormone production and overall cellular function, which is crucial for those aiming to build muscle or maintain overall health."
    ],
    nutritionalExplanation: [
      "Protein: The chicken breast contributes the majority of protein, which is necessary for muscle recovery. Quinoa adds a small amount of plant-based protein to round out the meal.",
      "Carbohydrates: Quinoa is a complex carbohydrate, which helps in refueling glycogen stores after intense workouts.",
      "Fats: The recipe includes healthy fats from avocado and olive oil, which support cardiovascular health and provide sustained energy."
    ],
    notes: "This recipe is tailored for muscle gain and fits within a balanced meal type."
  }
};

export default function DemoMacroRecipe() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{demoRecipe.recipe.name}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{demoRecipe.recipe.servings} servings</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5" />
                <span>{demoRecipe.recipe.totalMacros.calories} calories</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1">
            {/* Total Macros */}
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blue-500" />
                Total Macros
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Protein</span>
                  <span className="font-semibold">{demoRecipe.recipe.totalMacros.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbs</span>
                  <span className="font-semibold">{demoRecipe.recipe.totalMacros.carbs}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fats</span>
                  <span className="font-semibold">{demoRecipe.recipe.totalMacros.fats}g</span>
                </div>
                <div className="pt-2 border-t border-blue-100">
                  <div className="flex justify-between">
                    <span>Calories</span>
                    <span className="font-semibold">{demoRecipe.recipe.totalMacros.calories}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-gray-500" />
                Ingredients
              </h2>
              <div className="space-y-4">
                {demoRecipe.recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{ingredient.name}</span>
                      <span className="text-gray-600">{ingredient.quantity}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{ingredient.healthBenefits}</p>
                    <div className="flex gap-4 text-sm">
                      <span>P: {ingredient.macros.protein}g</span>
                      <span>C: {ingredient.macros.carbs}g</span>
                      <span>F: {ingredient.macros.fats}g</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Instructions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <ol className="space-y-4">
                {demoRecipe.recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{instruction.replace(/^\d+\.\s/, '')}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Health Advice */}
            <div className="bg-green-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-green-500" />
                Health Benefits
              </h2>
              <ul className="space-y-3">
                {demoRecipe.recipe.healthAdvice.map((advice, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{advice}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutritional Explanation */}
            <div className="bg-orange-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-orange-500" />
                Nutritional Breakdown
              </h2>
              <ul className="space-y-3">
                {demoRecipe.recipe.nutritionalExplanation.map((explanation, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{explanation}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notes */}
            <div className="bg-gray-100 rounded-xl p-6">
              <p className="text-gray-700 italic">{demoRecipe.recipe.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}