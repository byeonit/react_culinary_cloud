import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface MealPlanGenerationData {
  userId: string;
  generatedBy: string;
  bmiData: {
    height: number;
    weight: number;
    bmi: number;
  };
  selectedGoal: string | null;
  activityLevel: string | null;
  dietaryPreferences: string[];
}

export const mealService = {
  async saveMealPlanGenerationData(data: Omit<MealPlanGenerationData, 'timestamp'>) {
    try {
      const sanitizedData = {
        userId: data.userId,
        generatedBy: data.generatedBy || 'guest',
        bmiData: {
          height: Number(data.bmiData.height),
          weight: Number(data.bmiData.weight),
          bmi: Number(data.bmiData.bmi)
        },
        selectedGoal: data.selectedGoal,
        activityLevel: data.activityLevel,
        dietaryPreferences: Array.isArray(data.dietaryPreferences) ? data.dietaryPreferences : [],
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'mealPlanGenerations'), sanitizedData);
      return docRef.id;
    } catch (error) {
      console.error('Error saving meal plan generation data:', error);
      throw error;
    }
  }
};