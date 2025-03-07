import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { shoppingService, ShoppingPlannerData } from '../services/shopping.service';

export function useShoppingPlanner() {
  const { user, signInAnonymously } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveShoppingPlannerData = async (data: Omit<ShoppingPlannerData, 'userId' | 'timestamp'>) => {
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

      // Save the shopping planner data
      await shoppingService.saveShoppingPlannerData({
        ...data,
        userId: currentUser.uid
      });

      return true;
    } catch (err) {
      console.error('Error saving shopping planner data:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while saving your shopping planner');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    saveShoppingPlannerData,
    loading,
    error
  };
}