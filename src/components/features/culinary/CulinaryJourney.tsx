import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { journeySteps } from './config/journeySteps';
import StepGrid from './steps/StepGrid';
import StepHeader from './steps/StepHeader';
import IngredientSelector from './steps/IngredientSelector';
import SelectedIngredients from './steps/SelectedIngredients';
import MealTypeSelector from './steps/MealTypeSelector';
import CookingMethodSelector from './steps/CookingMethodSelector';
import PortionSelector from './steps/PortionSelector';
import TimeSelector from './steps/TimeSelector';
import PreferencesSelector from './steps/PreferencesSelector';
import SkillLevelSelector from './steps/SkillLevelSelector';
import { useRecipeGeneration } from '../../../hooks/useRecipeGeneration';

interface CulinaryJourneyProps {
  onBack: () => void;
  onComplete: () => void;
}

export default function CulinaryJourney({ onBack, onComplete }: CulinaryJourneyProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [selectedPortionSize, setSelectedPortionSize] = useState<string | null>(null);
  const [customServings, setCustomServings] = useState(2);
  const [cookingTime, setCookingTime] = useState(30);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string | null>(null);

  const { saveRecipeData, loading, error } = useRecipeGeneration();

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedIngredients.length > 0;
      case 2:
        return selectedMeal !== null;
      case 3:
        return selectedMethod !== null;
      case 4:
        return selectedPortionSize !== null;
      case 5:
        return cookingTime >= 5;
      case 6:
        return true; // Preferences are optional
      case 7:
        return selectedSkillLevel !== null;
      default:
        return false;
    }
  };

  const handleNext = async () => {
    if (currentStep === journeySteps.length) {
      // Save data to Firestore before showing registration modal
      const success = await saveRecipeData({
        ingredients: selectedIngredients,
        mealType: selectedMeal || '',
        cookingMethod: selectedMethod || '',
        portionSize: selectedPortionSize || '',
        customServings: selectedPortionSize === 'custom' ? customServings : undefined,
        cookingTime,
        dietaryPreferences: selectedPreferences,
        skillLevel: selectedSkillLevel || ''
      });

      if (success) {
        onComplete();
      }
    } else {
      setCurrentStep(current => current + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      onBack();
    } else {
      setCurrentStep(current => current - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Steps Progress */}
        <StepGrid steps={journeySteps} currentStep={currentStep} />

        {/* Main Content Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-8 mt-8">
          <div className="p-8">
            {/* Step Content */}
            {/* ... (existing step content) ... */}

            {error && (
              <div className="mt-4 p-4 bg-red-50 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}
          </div>

          {/* Navigation Footer */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl flex items-center justify-between">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentStep === 1 ? 'Exit' : 'Previous Step'}
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed() || loading}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                canProceed() && !loading
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {loading ? 'Processing...' : currentStep === journeySteps.length ? 'Generate Recipe' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}