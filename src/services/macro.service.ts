import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface MacroGenerationData {
  userId: string;
  generatedBy: string;
  macroGoals: {
    protein: number;
    carbs: number;
    fats: number;
    calories: number;
    fitnessGoal: string;
  };
  selectedMeal: string | null;
  selectedPreferences: string[];
  selectedDuration: string | null;
}

export const macroService = {
  async saveMacroGenerationData(data: Omit<MacroGenerationData, 'timestamp'>) {
    try {
      const sanitizedData = {
        userId: data.userId,
        generatedBy: data.generatedBy || 'guest',
        macroGoals: {
          protein: Number(data.macroGoals.protein),
          carbs: Number(data.macroGoals.carbs),
          fats: Number(data.macroGoals.fats),
          calories: Number(data.macroGoals.calories),
          fitnessGoal: String(data.macroGoals.fitnessGoal)
        },
        selectedMeal: data.selectedMeal,
        selectedPreferences: Array.isArray(data.selectedPreferences) ? data.selectedPreferences : [],
        selectedDuration: data.selectedDuration,
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'macroGenerations'), sanitizedData);
      return docRef.id;
    } catch (error) {
      console.error('Error saving macro generation data:', error);
      throw error;
    }
  }
};