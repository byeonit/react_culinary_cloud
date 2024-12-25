import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { macroService, MacroGenerationData } from '../services/macro.service';

export function useMacroGeneration() {
  const { user, signInAnonymously } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveMacroData = async (data: Omit<MacroGenerationData, 'userId' | 'timestamp'>) => {
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

      // Save the macro generation data
      await macroService.saveMacroGenerationData({
        ...data,
        userId: currentUser.uid
      });

      return true;
    } catch (err) {
      console.error('Error saving macro data:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while saving your macro preferences');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    saveMacroData,
    loading,
    error
  };
}