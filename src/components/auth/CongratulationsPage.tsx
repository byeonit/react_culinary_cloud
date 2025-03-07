import React from 'react';
import { ChefHat, Sparkles, ArrowRight } from 'lucide-react';

interface CongratulationsPageProps {
  userName: string;
}

export default function CongratulationsPage({
  userName,
}: CongratulationsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ChefHat className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to CulinaryCloud, {userName}! 🎉
          </h1>
          <p className="text-gray-600 mb-6">
            You're now part of our culinary community. Get ready to explore a
            world of delicious recipes and cooking inspiration!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-emerald-50 rounded-xl">
            <Sparkles className="w-6 h-6 text-emerald-500 mb-2 mx-auto" />
            <h3 className="font-semibold text-gray-900 mb-1">
              Personalized Recipes
            </h3>
            <p className="text-sm text-gray-600">
              Access your custom recipe collection
            </p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-xl">
            <ChefHat className="w-6 h-6 text-emerald-500 mb-2 mx-auto" />
            <h3 className="font-semibold text-gray-900 mb-1">
              Weekly Meal Plans
            </h3>
            <p className="text-sm text-gray-600">
              Get tailored meal suggestions
            </p>
          </div>
        </div>

        <button
          //onClick={() => window.location.href = '/app'} // This will be replaced with actual app URL
          onClick={() =>
            (window.location.href = 'http://192.168.1.4:4200/auth/cover-login')
          } // This will be replaced with actual app URL
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-all transform hover:scale-105"
        >
          Go to Dashboard
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
