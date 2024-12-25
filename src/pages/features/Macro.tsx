import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import MacroJourney from '../../components/features/macro/MacroJourney';
import RegistrationModal from '../../components/features/macro/RegistrationModal';

export default function Macro() {
  const [showJourney, setShowJourney] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-20">
      {!showJourney ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Achieve Your
              <span className="text-blue-500"> Nutrition Goals</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let our AI-powered nutrition assistant help you track macronutrients and create 
              personalized meal plans tailored to your fitness goals.
            </p>
            <button
              onClick={() => setShowJourney(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg"
            >
              <Scale className="w-6 h-6" />
              Start Your Nutrition Journey
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Scale,
                title: 'Smart Macro Tracking',
                desc: 'Set and track your macronutrient goals with precision'
              },
              {
                icon: Scale,
                title: 'Goal-Based Planning',
                desc: 'Customized meal plans aligned with your fitness objectives'
              },
              {
                icon: Scale,
                title: 'Progress Monitoring',
                desc: 'Track your nutrition journey with detailed analytics'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <MacroJourney 
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