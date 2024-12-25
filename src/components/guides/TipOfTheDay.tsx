import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function TipOfTheDay() {
  return (
    <div className="bg-orange-50 rounded-xl p-8 border border-orange-100">
      <div className="flex items-start gap-4">
        <div className="bg-orange-500 rounded-full p-3">
          <Lightbulb className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro Tip of the Day</h3>
          <p className="text-gray-700">
            When cooking pasta, save a cup of pasta water before draining. This starchy water is perfect for adjusting sauce consistency and helps the sauce cling to the pasta better.
          </p>
        </div>
      </div>
    </div>
  );
}