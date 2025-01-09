import React from 'react';
import RecipeHeader from '../../components/recipe/demo/RecipeHeader';
import RecipeIngredients from '../../components/recipe/demo/RecipeIngredients';
import RecipeInstructions from '../../components/recipe/demo/RecipeInstructions';
import RecipeMetadata from '../../components/recipe/demo/RecipeMetadata';

const demoRecipe = {
  title: "Chicken Curry Delight",
  ingredients: ["Chicken", "Coconut Milk", "Curry Powder", "Garlic", "Onion", "Ginger", "Tomato Paste", "Cilantro"],
  instructions: [
    "Marinate chicken with curry powder and set aside for 30 minutes.",
    "Heat oil in a pan and sauté diced onion, garlic, and ginger until fragrant.",
    "Add marinated chicken and cook until lightly browned.",
    "Stir in tomato paste and cook for 2 minutes.",
    "Pour coconut milk into the pan, mix well, and let it simmer for 20 minutes.",
    "Garnish with chopped cilantro and serve with steamed rice."
  ],
  mealType: "Dinner",
  cookingTime: 40,
  servings: 4,
  culinaryPreferences: ["Spicy", "Asian"],
  cookingMethod: "Simmer",
  createdByUserName: "ChefJohn",
  createdByUserID: "user12345",
  createdAt: "2025-01-03T18:30:00Z",
  updatedAt: "2025-01-04T10:15:00Z",
  updatedBy: "ChefJohn",
  isRecipeGenerated: true,
  flag: false
};

export default function DemoCulinaryRecipe() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RecipeHeader 
          title={demoRecipe.title}
          mealType={demoRecipe.mealType}
          cookingTime={demoRecipe.cookingTime}
          servings={demoRecipe.servings}
          createdAt={demoRecipe.createdAt}
          createdByUserName={demoRecipe.createdByUserName}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <RecipeIngredients ingredients={demoRecipe.ingredients} />
            <RecipeMetadata 
              culinaryPreferences={demoRecipe.culinaryPreferences}
              cookingMethod={demoRecipe.cookingMethod}
            />
          </div>
          
          <div className="md:col-span-2">
            <RecipeInstructions instructions={demoRecipe.instructions} />
          </div>
        </div>
      </div>
    </div>
  );
}