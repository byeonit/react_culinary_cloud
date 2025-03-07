import React, { useState } from 'react';
import { Scale, ChevronLeft, ChevronRight, Info } from 'lucide-react';

const dummyMacroPlan = {
  "Day 1": {
    "Daily Macros": {
      "Protein": "150g",
      "Carbs": "200g", 
      "Fats": "60g",
      "Calories": "2200"
    },
    "Meals": [
      {
        "Meal Name": "Scrambled Eggs with Avocado Toast",
        "Total Macros": {
          "Protein": "30g",
          "Carbs": "35g",
          "Fats": "20g",
          "Calories": "450"
        },
        "Ingredients": {
          "Eggs (3 large)": { "Protein": "18g", "Carbs": "2g", "Fats": "15g" },
          "Avocado (1/2 medium)": { "Protein": "2g", "Carbs": "12g", "Fats": "15g" },
          "Whole grain toast (1 slice)": { "Protein": "4g", "Carbs": "21g", "Fats": "2g" }
        },
        "Instructions": [
          "Beat eggs and scramble in a non-stick pan.",
          "Toast the bread and top with sliced avocado."
        ],
        "Nutritional Breakdown": {
          "Protein": "Eggs provide high-quality protein and essential amino acids.",
          "Fats": "Avocado offers heart-healthy monounsaturated fats.",
          "Carbs": "Whole grain toast adds fiber and complex carbohydrates."
        },
        "Health Benefits": "Supports muscle repair and energy replenishment for the morning."
      },
      {
        "Meal Name": "Grilled Chicken Salad",
        "Total Macros": {
          "Protein": "45g",
          "Carbs": "20g",
          "Fats": "10g",
          "Calories": "400"
        },
        "Ingredients": {
          "Chicken breast (200g)": { "Protein": "46g", "Carbs": "0g", "Fats": "4g" },
          "Mixed greens": { "Protein": "2g", "Carbs": "8g", "Fats": "0g" },
          "Olive oil (1 tbsp)": { "Protein": "0g", "Carbs": "0g", "Fats": "14g" }
        },
        "Instructions": [
          "Grill the chicken until cooked through.",
          "Toss the greens with olive oil, top with the grilled chicken."
        ],
        "Nutritional Breakdown": {
          "Protein": "Chicken is rich in lean protein.",
          "Fats": "Olive oil adds healthy fats and antioxidants.",
          "Carbs": "Greens provide fiber and essential vitamins."
        },
        "Health Benefits": "Promotes lean muscle mass and heart health."
      },
      {
        "Meal Name": "Quinoa and Roasted Vegetables",
        "Total Macros": {
          "Protein": "20g",
          "Carbs": "60g",
          "Fats": "10g",
          "Calories": "500"
        },
        "Ingredients": {
          "Quinoa (1 cup cooked)": { "Protein": "8g", "Carbs": "39g", "Fats": "3g" },
          "Roasted vegetables (bell peppers, zucchini)": { "Protein": "3g", "Carbs": "21g", "Fats": "7g" }
        },
        "Instructions": [
          "Cook quinoa according to the package instructions.",
          "Roast vegetables with olive oil and seasoning."
        ],
        "Nutritional Breakdown": {
          "Protein": "Quinoa is a complete protein source.",
          "Fats": "Olive oil provides essential fats.",
          "Carbs": "Vegetables offer complex carbs and vitamins."
        },
        "Health Benefits": "Balances energy and provides sustained fuel for the evening."
      }
    ]
  },
  "Day 2": {
    "Daily Macros": {
      "Protein": "160g",
      "Carbs": "210g",
      "Fats": "65g",
      "Calories": "2300"
    },
    "Meals": [
      {
        "Meal Name": "Greek Yogurt with Berries and Nuts",
        "Total Macros": {
          "Protein": "25g",
          "Carbs": "30g",
          "Fats": "15g",
          "Calories": "350"
        },
        "Ingredients": {
          "Greek yogurt (1 cup)": { "Protein": "20g", "Carbs": "8g", "Fats": "5g" },
          "Mixed berries (1/2 cup)": { "Protein": "1g", "Carbs": "18g", "Fats": "0g" },
          "Almonds (10 pieces)": { "Protein": "4g", "Carbs": "4g", "Fats": "10g" }
        },
        "Instructions": [
          "Mix yogurt with berries and top with almonds."
        ],
        "Nutritional Breakdown": {
          "Protein": "Greek yogurt is high in protein and probiotics.",
          "Fats": "Almonds provide healthy fats and energy.",
          "Carbs": "Berries are rich in antioxidants and fiber."
        },
        "Health Benefits": "Boosts digestion and provides a steady energy release."
      },
      {
        "Meal Name": "Turkey Wrap with Hummus",
        "Total Macros": {
          "Protein": "35g",
          "Carbs": "45g",
          "Fats": "12g",
          "Calories": "500"
        },
        "Ingredients": {
          "Whole wheat wrap (1)": { "Protein": "8g", "Carbs": "30g", "Fats": "3g" },
          "Turkey breast (150g)": { "Protein": "35g", "Carbs": "0g", "Fats": "2g" },
          "Hummus (2 tbsp)": { "Protein": "2g", "Carbs": "8g", "Fats": "7g" }
        },
        "Instructions": [
          "Spread hummus on the wrap, add turkey and roll it up."
        ],
        "Nutritional Breakdown": {
          "Protein": "Turkey is lean and supports muscle growth.",
          "Fats": "Hummus adds healthy fats and flavor.",
          "Carbs": "Whole wheat wrap provides fiber and sustained energy."
        },
        "Health Benefits": "Aids in muscle recovery and provides a balanced meal."
      },
      {
        "Meal Name": "Salmon with Sweet Potato and Asparagus",
        "Total Macros": {
          "Protein": "40g",
          "Carbs": "55g",
          "Fats": "20g",
          "Calories": "600"
        },
        "Ingredients": {
          "Salmon (200g)": { "Protein": "40g", "Carbs": "0g", "Fats": "14g" },
          "Sweet potato (1 medium)": { "Protein": "4g", "Carbs": "45g", "Fats": "0g" },
          "Asparagus (100g)": { "Protein": "2g", "Carbs": "10g", "Fats": "0g" }
        },
        "Instructions": [
          "Bake salmon and sweet potato, sauté asparagus."
        ],
        "Nutritional Breakdown": {
          "Protein": "Salmon is rich in omega-3 and protein.",
          "Fats": "Omega-3s support heart and brain health.",
          "Carbs": "Sweet potato offers complex carbs and fiber."
        },
        "Health Benefits": "Promotes cardiovascular health and energy."
      }
    ]
  },
  "Day 3": {
    "Daily Macros": {
      "Protein": "170g",
      "Carbs": "190g",
      "Fats": "55g",
      "Calories": "2150"
    },
    "Meals": [
      {
        "Meal Name": "Protein Pancakes",
        "Total Macros": {
          "Protein": "30g",
          "Carbs": "40g",
          "Fats": "10g",
          "Calories": "400"
        },
        "Ingredients": {
          "Protein powder (1 scoop)": { "Protein": "25g", "Carbs": "3g", "Fats": "2g" },
          "Oats (1/2 cup)": { "Protein": "5g", "Carbs": "27g", "Fats": "3g" },
          "Egg (1 large)": { "Protein": "6g", "Carbs": "1g", "Fats": "5g" }
        },
        "Instructions": [
          "Blend all ingredients, cook on a griddle until golden."
        ],
        "Nutritional Breakdown": {
          "Protein": "Supports muscle growth and repair.",
          "Carbs": "Oats provide fiber and complex carbohydrates.",
          "Fats": "Essential for satiety and energy balance."
        },
        "Health Benefits": "Great for post-workout recovery and energy."
      },
      {
        "Meal Name": "Tuna Salad with Whole Grain Crackers",
        "Total Macros": {
          "Protein": "40g",
          "Carbs": "30g",
          "Fats": "12g",
          "Calories": "450"
        },
        "Ingredients": {
          "Tuna (150g)": { "Protein": "40g", "Carbs": "0g", "Fats": "1g" },
          "Whole grain crackers (10 pieces)": { "Protein": "4g", "Carbs": "28g", "Fats": "3g" },
          "Greek yogurt (2 tbsp)": { "Protein": "3g", "Carbs": "2g", "Fats": "8g" }
        },
        "Instructions": [
          "Mix tuna with yogurt, serve with crackers."
        ],
        "Nutritional Breakdown": {
          "Protein": "Tuna is lean and rich in omega-3.",
          "Carbs": "Crackers offer whole grains for energy.",
          "Fats": "Yogurt adds creaminess and healthy fats."
        },
        "Health Benefits": "Supports brain function and provides light energy."
      },
      {
        "Meal Name": "Beef Stir-Fry with Brown Rice",
        "Total Macros": {
          "Protein": "50g",
          "Carbs": "70g",
          "Fats": "18g",
          "Calories": "600"
        },
        "Ingredients": {
          "Beef strips (200g)": { "Protein": "50g", "Carbs": "0g", "Fats": "12g" },
          "Brown rice (1 cup cooked)": { "Protein": "5g", "Carbs": "45g", "Fats": "2g" },
          "Mixed vegetables (carrots, broccoli)": { "Protein": "5g", "Carbs": "25g", "Fats": "4g" }
        },
        "Instructions": [
          "Stir-fry beef with vegetables, serve over rice."
        ],
        "Nutritional Breakdown": {
          "Protein": "Beef supports muscle building.",
          "Carbs": "Brown rice offers complex carbohydrates.",
          "Fats": "Minimal fat content for a lean meal."
        },
        "Health Benefits": "Ideal for muscle gain and balanced energy release."
      }
    ]
  }
};

export default function DemoMacroPlan() {
  const [activeDay, setActiveDay] = useState("Day 1");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 3;

  const currentDayPlan = dummyMacroPlan[activeDay];
  const totalPages = Math.ceil((currentDayPlan?.Meals.length || 0) / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const currentMeals = currentDayPlan?.Meals.slice(startIndex, endIndex) || [];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Macro Meal Plan</h1>
          <p className="text-gray-600">A personalized nutrition plan to help you reach your goals</p>
        </div>

        {/* Day Tabs */}
        <div className="flex space-x-4 mb-8">
          {Object.keys(dummyMacroPlan).map((day) => (
            <button
              key={day}
              onClick={() => {
                setActiveDay(day);
                setCurrentPage(1);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeDay === day
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {currentDayPlan && (
          <>
            {/* Macros Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-5 h-5 text-blue-500" />
                <h2 className="text-xl font-semibold">Daily Macros</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-600 mb-1">Protein</div>
                  <div className="text-2xl font-bold text-blue-900">{currentDayPlan["Daily Macros"].Protein}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-green-600 mb-1">Carbs</div>
                  <div className="text-2xl font-bold text-green-900">{currentDayPlan["Daily Macros"].Carbs}</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-sm text-yellow-600 mb-1">Fats</div>
                  <div className="text-2xl font-bold text-yellow-900">{currentDayPlan["Daily Macros"].Fats}</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-sm text-purple-600 mb-1">Calories</div>
                  <div className="text-2xl font-bold text-purple-900">{currentDayPlan["Daily Macros"].Calories}</div>
                </div>
              </div>
            </div>

            {/* Meals */}
            <div className="space-y-6">
              {currentMeals.map((meal, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{meal["Meal Name"]}</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                        {meal["Total Macros"].Calories} cal
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Ingredients</h4>
                          <div className="space-y-2">
                            {Object.entries(meal.Ingredients).map(([ingredient, macros]) => (
                              <div key={ingredient} className="bg-gray-50 p-3 rounded-lg">
                                <div className="font-medium text-gray-900 mb-1">{ingredient}</div>
                                <div className="grid grid-cols-3 gap-2 text-sm">
                                  <span className="text-blue-600">P: {macros.Protein}</span>
                                  <span className="text-green-600">C: {macros.Carbs}</span>
                                  <span className="text-yellow-600">F: {macros.Fats}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Instructions</h4>
                          <ol className="space-y-2">
                            {meal.Instructions.map((instruction, idx) => (
                              <li key={idx} className="text-gray-600">
                                {idx + 1}. {instruction}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Nutritional Breakdown</h4>
                          <div className="space-y-2">
                            {Object.entries(meal["Nutritional Breakdown"]).map(([nutrient, info]) => (
                              <div key={nutrient} className="bg-gray-50 p-3 rounded-lg">
                                <div className="font-medium text-gray-900 mb-1">{nutrient}</div>
                                <p className="text-sm text-gray-600">{info}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Info className="w-5 h-5 text-green-500" />
                            <h4 className="font-medium text-green-900">Health Benefits</h4>
                          </div>
                          <p className="text-green-700">{meal["Health Benefits"]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}