import React, { useState } from 'react';
import { Calendar, ChevronLeft, Scale, Clock, Info } from 'lucide-react';

const dummyMacroMealPlanHistoric = {
  "macroMealPlanHistoric": [
    {
      "id": "2025-01-01-001",
      "name": "Week 1 Plan",
      "date_created": "2025-01-01",
      "summary": {
        "Protein": "150g",
        "Carbs": "200g",
        "Fats": "60g",
        "Calories": "2200"
      },
      "days": [
        {
          "day": "Day 1",
          "daily_macros": {
            "Protein": "150g",
            "Carbs": "200g",
            "Fats": "60g",
            "Calories": "2200"
          },
          "meals": [
            {
              "meal_name": "Scrambled Eggs with Avocado Toast",
              "total_macros": {
                "Protein": "30g",
                "Carbs": "35g",
                "Fats": "20g",
                "Calories": "450"
              },
              "ingredients": {
                "Eggs (3 large)": { "Protein": "18g", "Carbs": "2g", "Fats": "15g" },
                "Avocado (1/2 medium)": { "Protein": "2g", "Carbs": "12g", "Fats": "15g" },
                "Whole grain toast (1 slice)": { "Protein": "4g", "Carbs": "21g", "Fats": "2g" }
              },
              "instructions": [
                "Beat eggs and scramble in a non-stick pan.",
                "Toast the bread and top with sliced avocado."
              ],
              "nutritional_breakdown": {
                "Protein": "Eggs provide high-quality protein and essential amino acids.",
                "Fats": "Avocado offers heart-healthy monounsaturated fats.",
                "Carbs": "Whole grain toast adds fiber and complex carbohydrates."
              },
              "health_benefits": "Supports muscle repair and energy replenishment for the morning."
            }
          ]
        }
      ]
    }
  ]
};

export default function MacroMealPlanHistory() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [selectedDay, setSelectedDay] = useState<string>("Day 1");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBack = () => {
    setSelectedPlan(null);
    setSelectedDay("Day 1");
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
              {dummyMacroMealPlanHistoric.macroMealPlanHistoric.map((plan) => (
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
                          <span>{formatDate(plan.date_created)}</span>
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
                        <div className="text-lg font-semibold text-blue-900">{plan.summary.Protein}</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-sm text-green-600">Carbs</div>
                        <div className="text-lg font-semibold text-green-900">{plan.summary.Carbs}</div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="text-sm text-yellow-600">Fats</div>
                        <div className="text-lg font-semibold text-yellow-900">{plan.summary.Fats}</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-sm text-purple-600">Calories</div>
                        <div className="text-lg font-semibold text-purple-900">{plan.summary.Calories}</div>
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
                    <span>{formatDate(selectedPlan.date_created)}</span>
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
                  {day.day}
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
                      <div className="text-sm text-blue-600 mb-1">Protein</div>
                      <div className="text-2xl font-bold text-blue-900">
                        {selectedPlan.days.find((d: any) => d.day === selectedDay).daily_macros.Protein}
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-green-600 mb-1">Carbs</div>
                      <div className="text-2xl font-bold text-green-900">
                        {selectedPlan.days.find((d: any) => d.day === selectedDay).daily_macros.Carbs}
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="text-sm text-yellow-600 mb-1">Fats</div>
                      <div className="text-2xl font-bold text-yellow-900">
                        {selectedPlan.days.find((d: any) => d.day === selectedDay).daily_macros.Fats}
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-sm text-purple-600 mb-1">Calories</div>
                      <div className="text-2xl font-bold text-purple-900">
                        {selectedPlan.days.find((d: any) => d.day === selectedDay).daily_macros.Calories}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meals */}
                {selectedPlan.days
                  .find((d: any) => d.day === selectedDay)
                  .meals.map((meal: any, index: number) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">{meal.meal_name}</h3>
                          <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                            {meal.total_macros.Calories} cal
                          </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Left Column */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">Ingredients</h4>
                              <div className="space-y-2">
                                {Object.entries(meal.ingredients).map(([ingredient, macros]: [string, any]) => (
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
                                {meal.instructions.map((instruction: string, idx: number) => (
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
                                {Object.entries(meal.nutritional_breakdown).map(([nutrient, info]: [string, any]) => (
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
                              <p className="text-green-700">{meal.health_benefits}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}