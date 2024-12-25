import React from 'react';
import { Scale, AlertCircle, Info } from 'lucide-react';

interface BMIData {
  height: number;
  weight: number;
  bmi: number;
}

interface BMICalculatorProps {
  data: BMIData;
  onChange: (data: BMIData) => void;
}

export default function BMICalculator({ data, onChange }: BMICalculatorProps) {
  const calculateBMI = (height: number, weight: number) => {
    if (height > 0 && weight > 0) {
      // Convert height to meters
      const heightInMeters = height / 100;
      // Calculate BMI: weight (kg) / height (m)²
      const bmi = weight / (heightInMeters * heightInMeters);
      return Math.round(bmi * 10) / 10;
    }
    return 0;
  };

  const handleInputChange = (field: 'height' | 'weight', value: string) => {
    const numValue = Number(value);
    const newData = {
      ...data,
      [field]: numValue
    };
    newData.bmi = calculateBMI(newData.height, newData.weight);
    onChange(newData);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi === 0) return null;
    if (bmi < 18.5) return { label: 'Underweight', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (bmi < 25) return { label: 'Healthy Weight', color: 'text-green-600', bg: 'bg-green-50' };
    if (bmi < 30) return { label: 'Overweight', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { label: 'Obese', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const bmiCategory = getBMICategory(data.bmi);

  return (
    <div className="space-y-8">
      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">Why Calculate BMI?</h3>
            <p className="text-sm text-blue-700">
              Your BMI helps us understand your nutritional needs better and create a more personalized meal plan. 
              While BMI is not a perfect measure, it's a useful starting point for your health journey.
            </p>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Height (cm)
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              value={data.height || ''}
              onChange={(e) => handleInputChange('height', e.target.value)}
              placeholder="Enter your height"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Weight (kg)
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              value={data.weight || ''}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              placeholder="Enter your weight"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500"
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      {data.bmi > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-gray-500" />
              <h3 className="font-semibold text-gray-900">Your BMI Results</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900">{data.bmi}</div>
          </div>

          {bmiCategory && (
            <div className={`${bmiCategory.bg} rounded-lg p-4`}>
              <div className="flex items-start gap-3">
                <AlertCircle className={`w-5 h-5 ${bmiCategory.color} mt-0.5`} />
                <div>
                  <div className={`font-medium ${bmiCategory.color} mb-1`}>
                    {bmiCategory.label}
                  </div>
                  <p className="text-sm text-gray-600">
                    {bmiCategory.label === 'Healthy Weight' 
                      ? "Great! Maintaining a healthy weight reduces your risk of health issues."
                      : "Don't worry! Our meal plan will help you work towards a healthier weight."}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-gray-500">
            <div className="text-center p-2 rounded bg-blue-50">
              <div>Underweight</div>
              <div className="font-medium">&lt; 18.5</div>
            </div>
            <div className="text-center p-2 rounded bg-green-50">
              <div>Healthy</div>
              <div className="font-medium">18.5-24.9</div>
            </div>
            <div className="text-center p-2 rounded bg-yellow-50">
              <div>Overweight</div>
              <div className="font-medium">25-29.9</div>
            </div>
            <div className="text-center p-2 rounded bg-red-50">
              <div>Obese</div>
              <div className="font-medium">&gt; 30</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}