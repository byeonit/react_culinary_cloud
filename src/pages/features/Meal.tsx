import React, { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import MealPlanningJourney from '../../components/features/meal/MealPlanningJourney';
import RegistrationModal from '../../components/features/meal/RegistrationModal';

export default function Meal() {
  const [showJourney, setShowJourney] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-20">
      {!showJourney ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Personal
              <span className="text-green-500"> Meal Planner</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Take the guesswork out of healthy eating. Get personalized meal plans that fit your lifestyle, 
              preferences, and goals - no matter how busy you are.
            </p>
            <button
              onClick={() => setShowJourney(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg"
            >
              <CalendarDays className="w-6 h-6" />
              Create Your Meal Plan
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Smart & Simple',
                desc: 'Easy-to-follow meal plans that adapt to your schedule'
              },
              {
                title: 'Healthy Habits',
                desc: 'Build sustainable eating habits with balanced nutrition'
              },
              {
                title: 'Time-Saving',
                desc: 'Quick recipes and meal prep guides for busy lifestyles'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CalendarDays className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Motivation Section */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Start Your Healthy Eating Journey?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Small Steps, Big Impact</h3>
                    <p className="text-gray-600 text-sm">
                      Start with simple changes that fit your lifestyle. Our plan adapts to you, not the other way around.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Save Time & Money</h3>
                    <p className="text-gray-600 text-sm">
                      No more last-minute takeout. Plan ahead with quick, budget-friendly meals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Feel Better Every Day</h3>
                    <p className="text-gray-600 text-sm">
                      Experience more energy and better mood with balanced nutrition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Guidance</h3>
                    <p className="text-gray-600 text-sm">
                      Get nutritionist-approved meal plans and helpful tips along the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MealPlanningJourney 
          onBack={() => setShowJourney(false)}
          onComplete={() => setShowRegistration(true)}
        />
      )}

      <RegistrationModal 
        isOpen={showRegistration} 
        onClose={() => setShowRegistration(false)} 
      />
    </div>
  );
}