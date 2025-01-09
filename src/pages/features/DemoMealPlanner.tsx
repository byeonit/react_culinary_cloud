import React, { useState } from 'react';
import { Calendar, Clock, Scale, ChevronLeft, ChevronRight } from 'lucide-react';

const demoMealPlan = {
  "id": "12345",
  "bmi": 24.5,
  "physicalGoals": "Weight Loss",
  "activityLevels": "Moderately active",
  "listOfDiets": ["Gluten-Free", "Dairy-Free"],
  "createdByUserName": "JohnDoe",
  "createdByUserID": "user_001",
  "createdAt": "2025-01-09T10:00:00Z",
  "updatedAt": "2025-01-09T12:00:00Z",
  "updatedBy": "JohnDoe",
  "isRecipeGenerated": true,
  "flag": false,
  "mealPlan": [
    {
      "day": 1,
      "meals": {
        "breakfast": {
          "name": "Avocado Toast",
          "calories": 350,
          "ingredients": ["Whole grain bread", "Avocado", "Salt", "Pepper"],
          "instructions": "Toast the bread, mash the avocado, and spread it on the toast. Add salt and pepper to taste."
        },
        "lunch": {
          "name": "Grilled Chicken Salad",
          "calories": 450,
          "ingredients": ["Grilled chicken", "Mixed greens", "Tomatoes", "Cucumber", "Olive oil", "Lemon juice"],
          "instructions": "Grill the chicken, chop the vegetables, and mix everything in a bowl. Drizzle with olive oil and lemon juice."
        },
        "dinner": {
          "name": "Quinoa and Vegetable Stir-fry",
          "calories": 500,
          "ingredients": ["Quinoa", "Bell peppers", "Broccoli", "Soy sauce", "Garlic", "Ginger"],
          "instructions": "Cook the quinoa. Stir-fry the vegetables with garlic and ginger, then mix with quinoa and soy sauce."
        },
        "snacks": [
          {
            "name": "Apple Slices with Almond Butter",
            "calories": 200,
            "ingredients": ["Apple", "Almond butter"],
            "instructions": "Slice the apple and serve with almond butter for dipping."
          },
          {
            "name": "Carrot Sticks with Hummus",
            "calories": 150,
            "ingredients": ["Carrot sticks", "Hummus"],
            "instructions": "Serve carrot sticks with hummus on the side."
          }
        ]
      },
      "totalDailyCalories": 1650,
      "nutritionalBreakdown": {
        "carbohydrates": "45%",
        "proteins": "30%",
        "fats": "25%"
      },
      "healthBenefits": [
        "Supports weight loss through balanced meals",
        "Promotes muscle maintenance with sufficient protein",
        "Boosts energy levels with nutrient-rich foods"
      ]
    },
    {
      "day": 2,
      "meals": {
        "breakfast": {
          "name": "Oatmeal with Berries",
          "calories": 300,
          "ingredients": ["Oats", "Almond milk", "Berries", "Honey"],
          "instructions": "Cook the oats with almond milk. Top with berries and honey."
        },
        "lunch": {
          "name": "Turkey Wrap",
          "calories": 400,
          "ingredients": ["Whole wheat wrap", "Turkey slices", "Lettuce", "Tomato", "Mustard"],
          "instructions": "Assemble the wrap with turkey, lettuce, tomato, and mustard."
        },
        "dinner": {
          "name": "Baked Salmon with Asparagus",
          "calories": 550,
          "ingredients": ["Salmon fillet", "Asparagus", "Olive oil", "Lemon"],
          "instructions": "Bake the salmon with asparagus, drizzle with olive oil and lemon."
        },
        "snacks": [
          {
            "name": "Greek Yogurt with Nuts",
            "calories": 180,
            "ingredients": ["Greek yogurt", "Mixed nuts"],
            "instructions": "Top Greek yogurt with mixed nuts."
          },
          {
            "name": "Celery Sticks with Peanut Butter",
            "calories": 150,
            "ingredients": ["Celery sticks", "Peanut butter"],
            "instructions": "Serve celery sticks with peanut butter."
          }
        ]
      },
      "totalDailyCalories": 1580,
      "nutritionalBreakdown": {
        "carbohydrates": "40%",
        "proteins": "35%",
        "fats": "25%"
      },
      "healthBenefits": [
        "Enhances digestion with fiber-rich foods",
        "Provides essential Omega-3 fatty acids",
        "Stabilizes blood sugar with balanced macros"
      ]
    },
    {
      "day": 3,
      "meals": {
        "breakfast": {
          "name": "Smoothie Bowl",
          "calories": 320,
          "ingredients": ["Frozen banana", "Spinach", "Almond milk", "Chia seeds"],
          "instructions": "Blend ingredients and serve in a bowl."
        },
        "lunch": {
          "name": "Vegetable Soup",
          "calories": 400,
          "ingredients": ["Vegetable broth", "Carrots", "Celery", "Onions", "Garlic"],
          "instructions": "Simmer vegetables in broth until tender."
        },
        "dinner": {
          "name": "Chicken and Sweet Potato",
          "calories": 520,
          "ingredients": ["Chicken breast", "Sweet potato", "Olive oil", "Rosemary"],
          "instructions": "Roast chicken and sweet potato with olive oil and rosemary."
        },
        "snacks": [
          {
            "name": "Fruit Salad",
            "calories": 180,
            "ingredients": ["Mixed fruits", "Mint"],
            "instructions": "Chop fruits and garnish with mint."
          },
          {
            "name": "Trail Mix",
            "calories": 200,
            "ingredients": ["Mixed nuts", "Dried fruits"],
            "instructions": "Combine mixed nuts and dried fruits."
          }
        ]
      },
      "totalDailyCalories": 1620,
      "nutritionalBreakdown": {
        "carbohydrates": "50%",
        "proteins": "25%",
        "fats": "25%"
      },
      "healthBenefits": [
        "Improves immunity with antioxidants",
        "Supports lean muscle development",
        "Boosts metabolism with nutrient-dense meals"
      ]
    }
  ]
};

export default function DemoMealPlanner() {
  const [activeDay, setActiveDay] = useState(1);

  const currentDayPlan = demoMealPlan.mealPlan.find(day => day.day === activeDay);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">3-Day Meal Plan</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Created {formatDate(demoMealPlan.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  <span>BMI: {demoMealPlan.bmi}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {demoMealPlan.listOfDiets.map((diet, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {diet}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Day Navigation */}
        <div className="flex space-x-4 mb-8">
          {demoMealPlan.mealPlan.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeDay === day.day
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              Day {day.day}
            </button>
          ))}
        </div>

        {currentDayPlan && (
          <div className="space-y-8">
            {/* Daily Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Summary</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-600 mb-1">Total Calories</div>
                  <div className="text-2xl font-bold text-blue-900">{currentDayPlan.totalDailyCalories}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-green-600 mb-1">Carbohydrates</div>
                  <div className="text-2xl font-bold text-green-900">{currentDayPlan.nutritionalBreakdown.carbohydrates}</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-sm text-yellow-600 mb-1">Proteins</div>
                  <div className="text-2xl font-bold text-yellow-900">{currentDayPlan.nutritionalBreakdown.proteins}</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-sm text-purple-600 mb-1">Fats</div>
                  <div className="text-2xl font-bold text-purple-900">{currentDayPlan.nutritionalBreakdown.fats}</div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Health Benefits</h3>
                <ul className="space-y-2">
                  {currentDayPlan.healthBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Meals */}
            <div className="space-y-6">
              {Object.entries(currentDayPlan.meals).map(([mealType, meal]: [string, any]) => {
                if (mealType === 'snacks') return null;
                return (
                  <div key={mealType} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 capitalize mb-1">
                            {mealType}
                          </h3>
                          <div className="text-lg text-gray-900">{meal.name}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
                            {meal.calories} cal
                          </span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Ingredients</h4>
                          <ul className="space-y-2">
                            {meal.ingredients.map((ingredient: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 text-gray-600"
                              >
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                {ingredient}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Instructions</h4>
                          <p className="text-gray-600">{meal.instructions}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Snacks Section */}
              {currentDayPlan.meals.snacks && (
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Snacks</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {currentDayPlan.meals.snacks.map((snack: any, index: number) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-3">
                            <div className="font-medium text-gray-900">{snack.name}</div>
                            <div className="text-sm text-purple-600">{snack.calories} cal</div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="text-sm font-medium text-gray-700 mb-1">
                                Ingredients
                              </div>
                              <ul className="text-sm text-gray-600">
                                {snack.ingredients.map((ingredient: string, idx: number) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                    {ingredient}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-700 mb-1">
                                Instructions
                              </div>
                              <p className="text-sm text-gray-600">{snack.instructions}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}