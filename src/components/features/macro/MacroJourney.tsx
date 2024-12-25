import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { journeySteps } from './config/journeySteps';
import StepGrid from './steps/StepGrid';
import StepHeader from './steps/StepHeader';
import MacroGoalsSelector from './steps/MacroGoalsSelector';
import MealTypeSelector from './steps/MealTypeSelector';
import DietarySelector from './steps/DietarySelector';
import PlanDurationSelector from './steps/PlanDurationSelector';
import { useMacroGeneration } from '../../../hooks/useMacroGeneration';

interface MacroJourneyProps {
  onBack: () => void;
  onComplete: () => void;
}

export default function MacroJourney({ onBack, onComplete }: MacroJourneyProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [macroGoals, setMacroGoals] = useState({
    protein: 0,
    carbs: 0,
    fats: 0,
    calories: 0,
    fitnessGoal: ''
  });
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const { saveMacroData, loading, error } = useMacroGeneration();

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return macroGoals.protein > 0 && macroGoals.carbs > 0 && macroGoals.fats > 0;
      case 2:
        return selectedMeal !== null;
      case 3:
        return true; // Dietary preferences are optional
      case 4:
        return selectedDuration !== null;
      default:
        return false;
    }
  };

  const handleNext = async () => {
    if (currentStep === journeySteps.length) {
      // Save data to Firestore before showing registration modal
      const success = await saveMacroData({
        macroGoals,
        selectedMeal,
        selectedPreferences,
        selectedDuration
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
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Nutrition Plan Creation</h2>
            <div className="text-sm text-gray-600">
              Step {currentStep} of {journeySteps.length}
            </div>
          </div>
          <StepGrid steps={journeySteps} currentStep={currentStep} />
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-8">
          {/* Step Content */}
          <div className="p-8">
            {currentStep === 1 && (
              <>
                <StepHeader
                  currentStep={currentStep}
                  totalSteps={journeySteps.length}
                  title="Set Your Macro Goals"
                  description="Define your daily macronutrient targets"
                />
                <MacroGoalsSelector
                  goals={macroGoals}
                  onChange={setMacroGoals}
                />
              </>
            )}

            {currentStep === 2 && (
              <>
                <StepHeader
                  currentStep={currentStep}
                  totalSteps={journeySteps.length}
                  title="Choose Meal Types"
                  description="Select your preferred meal distribution"
                />
                <MealTypeSelector
                  selectedMeal={selectedMeal}
                  onSelect={setSelectedMeal}
                />
              </>
            )}

            {currentStep === 3 && (
              <>
                <StepHeader
                  currentStep={currentStep}
                  totalSteps={journeySteps.length}
                  title="Dietary Preferences"
                  description="Set your dietary restrictions and preferences"
                />
                <DietarySelector
                  selectedPreferences={selectedPreferences}
                  onPreferencesChange={setSelectedPreferences}
                />
              </>
            )}

            {currentStep === 4 && (
              <>
                <StepHeader
                  currentStep={currentStep}
                  totalSteps={journeySteps.length}
                  title="Generate Your Meal Plan"
                  description="Choose how long you'd like your personalized meal plan to be"
                />
                <PlanDurationSelector
                  selectedDuration={selectedDuration}
                  onSelect={setSelectedDuration}
                />
              </>
            )}

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
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {loading ? 'Processing...' : currentStep === journeySteps.length ? 'Generate Plan' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}