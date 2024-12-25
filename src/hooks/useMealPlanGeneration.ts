import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { mealService, MealPlanGenerationData } from '../services/meal.service';

export function useMealPlanGeneration() {
  const { user, signInAnonymously } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveMealPlanData = async (data: Omit<MealPlanGenerationData, 'userId' | 'timestamp'>) => {
    try {
      setLoading(true);
      setError(null);

      // Ensure we have a user
      let currentUser = user;
      if (!currentUser) {
        currentUser = await signInAnonymously();
      }

      if (!currentUser) {
        throw new Error('Failed to authenticate user');
      }

      // Save the meal plan generation data
      await mealService.saveMealPlanGenerationData({
        ...data,
        userId: currentUser.uid
      });

      return true;
    } catch (err) {
      console.error('Error saving meal plan data:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while saving your meal plan preferences');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    saveMealPlanData,
    loading,
    error
  };
}