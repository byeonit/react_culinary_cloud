import { useState } from 'react';
import { authService } from '../services/auth.service';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerWithEmail = async (email: string, password: string, name: string) => {
    try {
      setLoading(true);
      setError(null);
      
      await authService.registerWithEmail(email, password, name);
      return true;
    } catch (err) {
      console.error('Registration error:', err);
      setError(err instanceof Error ? err.message : 'Failed to create account');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signInAnonymously = async () => {
    try {
      return await authService.signInAnonymously();
    } catch (error) {
      console.error('Error signing in anonymously:', error);
      throw error;
    }
  };

  return {
    registerWithEmail,
    signInAnonymously,
    loading,
    error
  };
}