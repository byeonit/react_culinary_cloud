import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { recipeService, RecipeGenerationData } from '../services/recipe.service';

export function useRecipeGeneration() {
  const { user, signInAnonymously } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveRecipeData = async (data: Omit<RecipeGenerationData, 'userId' | 'timestamp'>) => {
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

      // Save the recipe generation data
      await recipeService.saveRecipeGenerationData({
        ...data,
        userId: currentUser.uid
      });

      return true;
    } catch (err) {
      console.error('Error saving recipe data:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while saving your recipe preferences');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    saveRecipeData,
    loading,
    error
  };
}