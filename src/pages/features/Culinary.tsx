import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import CulinaryJourney from '../../components/features/culinary/CulinaryJourney';
import RegistrationModal from '../../components/features/culinary/RegistrationModal';

export default function Culinary() {
  const [showJourney, setShowJourney] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 pt-20">
      {!showJourney ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Ingredients into
              <span className="text-emerald-500"> Culinary Magic</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let our AI-powered chef analyze your available ingredients and create personalized recipes 
              tailored to your preferences, skill level, and time constraints.
            </p>
            <button
              onClick={() => setShowJourney(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg"
            >
              <ChefHat className="w-6 h-6" />
              Start Your Culinary Journey
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Smart Recipe Generation',
                desc: 'Get personalized recipes based on your available ingredients'
              },
              {
                title: 'Time-Optimized',
                desc: 'Recipes that fit your schedule, from quick meals to gourmet experiences'
              },
              {
                title: 'Skill-Matched',
                desc: 'Recipes adapted to your cooking expertise, with detailed instructions'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <ChefHat className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <CulinaryJourney 
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