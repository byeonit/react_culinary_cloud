import React, { useState } from 'react';
import { Calendar, Scale, Clock, ChevronLeft } from 'lucide-react';

const demoMealPlanHistory = {
  mealPlanHistory: [
    {
      id: "12345",
      name: "Week 1 Meal Plan",
      dateCreated: "2025-01-09T10:00:00Z",
      summary: {
        protein: "150g",
        carbs: "200g",
        fats: "60g",
        calories: "2200"
      },
      days: [
        {
          day: 1,
          meals: {
            breakfast: {
              name: "Avocado Toast",
              calories: 350,
              ingredients: [
                "Whole grain bread", 
                "Avocado", 
                "Salt", 
                "Pepper"
              ],
              instructions: "Toast the bread, mash the avocado, and spread it on the toast. Add salt and pepper to taste."
            },
            lunch: {
              name: "Grilled Chicken Salad",
              calories: 450,
              ingredients: [
                "Grilled chicken",
                "Mixed greens",
                "Tomatoes",
                "Cucumber",
                "Olive oil",
                "Lemon juice"
              ],
              instructions: "Grill the chicken, chop the vegetables, and mix everything in a bowl. Drizzle with olive oil and lemon juice."
            },
            dinner: {
              name: "Quinoa and Vegetable Stir-fry",
              calories: 500,
              ingredients: [
                "Quinoa",
                "Bell peppers",
                "Broccoli",
                "Soy sauce",
                "Garlic",
                "Ginger"
              ],
              instructions: "Cook the quinoa. Stir-fry the vegetables with garlic and ginger, then mix with quinoa and soy sauce."
            },
            snacks: [
              {
                name: "Apple Slices with Almond Butter",
                calories: 200,
                ingredients: ["Apple", "Almond butter"],
                instructions: "Slice the apple and serve with almond butter for dipping."
              },
              {
                name: "Carrot Sticks with Hummus",
                calories: 150,
                ingredients: ["Carrot sticks", "Hummus"],
                instructions: "Serve carrot sticks with hummus on the side."
              }
            ]
          },
          totalDailyCalories: 1650,
          nutritionalBreakdown: {
            carbohydrates: "45%",
            proteins: "30%",
            fats: "25%"
          },
          healthBenefits: [
            "Supports weight loss through balanced meals",
            "Promotes muscle maintenance with sufficient protein",
            "Boosts energy levels with nutrient-rich foods"
          ]
        }
      ]
    }
  ]
};

export default function DemoMealPlanHistoric() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBack = () => {
    setSelectedPlan(null);
    setSelectedDay(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedPlan ? (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Meal Plan History</h1>
              <p className="text-gray-600">View and manage your previous meal plans</p>
            </div>

            <div className="grid gap-6">
              {demoMealPlanHistory.mealPlanHistory.map((plan) => (
                <div 
                  key={plan.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(plan.dateCreated)}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedPlan(plan)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        View Details
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-blue-600">Protein</div>
                        <div className="text-lg font-semibold text-blue-900">{plan.summary.protein}</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-sm text-green-600">Carbs</div>
                        <div className="text-lg font-semibold text-green-900">{plan.summary.carbs}</div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="text-sm text-yellow-600">Fats</div>
                        <div className="text-lg font-semibold text-yellow-900">{plan.summary.fats}</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-sm text-purple-600">Calories</div>
                        <div className="text-lg font-semibold text-purple-900">{plan.summary.calories}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to History
              </button>
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedPlan.name}</h1>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedPlan.dateCreated)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Day Navigation */}
            <div className="flex space-x-4 mb-8">
              {selectedPlan.days.map((day: any) => (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedDay === day.day
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  Day {day.day}
                </button>
              ))}
            </div>

            {/* Current Day Plan */}
            {selectedPlan.days.find((d: any) => d.day === selectedDay) && (
              <div className="space-y-8">
                {/* Daily Macros */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Scale className="w-5 h-5 text-blue-500" />
                    <h2 className="text-xl font-semibold">Daily Macros</h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-600 mb-1">Total Calories</div>
                      <div className="text-2xl font-bold text-blue-900">
                        {selectedPlan.days.find((d: any) => d.day === selectedDay).totalDailyCalories}
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-green-600 mb-1">Carbs</div>
                      <div className="text-2xl font-bold text-green-900">
                        {selectedPlan.days.find((d: any) => d.day === selectedDay).nutritionalBreakdown.carbohydrates}
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="text-sm text-yellow-600 mb-1">Proteins</div>
                      <div className="text-2xl font-bold text-yellow-900">
                        {selectedPlan.days.find((d: any) => d.day === selectedDay).nutritionalBreakdown.proteins}
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-sm text-purple-600 mb-1">Fats</div>
                      <div className="text-2xl font-bold text-purple-900">
                        {selectedPlan.days.find((d: any) => d.day === selectedDay).nutritionalBreakdown.fats}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meals */}
                {Object.entries(selectedPlan.days.find((d: any) => d.day === selectedDay).meals)
                  .filter(([type]) => type !== 'snacks')
                  .map(([mealType, meal]: [string, any]) => (
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
                                <li key={index} className="flex items-center gap-2 text-gray-600">
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
                  ))}

                {/* Snacks Section */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Snacks</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedPlan.days
                        .find((d: any) => d.day === selectedDay)
                        .meals.snacks.map((snack: any, index: number) => (
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
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}