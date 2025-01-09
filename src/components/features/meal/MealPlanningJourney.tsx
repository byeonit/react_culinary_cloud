import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { journeySteps } from './config/journeySteps';
import StepGrid from './steps/StepGrid';
import StepHeader from './steps/StepHeader';
import BMICalculator from './steps/BMICalculator';
import GoalSelector from './steps/GoalSelector';
import ActivitySelector from './steps/ActivitySelector';
import DietaryPreferences from './steps/DietaryPreferences';
import { useMealPlanGeneration } from '../../../hooks/useMealPlanGeneration';

interface MealPlanningJourneyProps {
  onBack: () => void;
  onComplete: () => void;
}

export default function MealPlanningJourney({ onBack, onComplete }: MealPlanningJourneyProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [bmiData, setBmiData] = useState({ height: 0, weight: 0, bmi: 0 });
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [activityLevel, setActivityLevel] = useState<string | null>(null);
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);

  const { saveMealPlanData, loading, error } = useMealPlanGeneration();

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bmiData.bmi > 0;
      case 2:
        return selectedGoal !== null;
      case 3:
        return activityLevel !== null;
      case 4:
        return true; // Dietary preferences are optional
      default:
        return false;
    }
  };

  const handleNext = async () => {
    if (currentStep === journeySteps.length) {
      // Save data to Firestore before showing registration modal
      const success = await saveMealPlanData({
        bmiData,
        selectedGoal,
        activityLevel,
        dietaryPreferences
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
            <h2 className="text-xl font-semibold text-gray-900">Meal Plan Creation</h2>
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
                  title="Let's Calculate Your BMI"
                  description="This helps us create a more personalized meal plan"
                />
                <BMICalculator
                  data={bmiData}
                  onChange={setBmiData}
                />
              </>
            )}

            {currentStep === 2 && (
              <>
                <StepHeader
                  currentStep={currentStep}
                  totalSteps={journeySteps.length}
                  title="What's Your Goal?"
                  description="Help us understand what you want to achieve"
                />
                <GoalSelector
                  selectedGoal={selectedGoal}
                  onSelect={setSelectedGoal}
                />
              </>
            )}

            {currentStep === 3 && (
              <>
                <StepHeader
                  currentStep={currentStep}
                  totalSteps={journeySteps.length}
                  title="Your Activity Level"
                  description="Tell us about your typical daily activity"
                />
                <ActivitySelector
                  selectedLevel={activityLevel}
                  onSelect={setActivityLevel}
                />
              </>
            )}

            {currentStep === 4 && (
              <>
                <StepHeader
                  currentStep={currentStep}
                  totalSteps={journeySteps.length}
                  title="Dietary Preferences"
                  description="Let us know about any dietary restrictions"
                />
                <DietaryPreferences
                  selectedPreferences={dietaryPreferences}
                  onPreferencesChange={setDietaryPreferences}
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
                  ? 'bg-green-500 text-white hover:bg-green-600'
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