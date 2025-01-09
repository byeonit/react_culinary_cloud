import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface RecipeGenerationData {
  userId: string;
  generatedBy: string;
  ingredients: string[];
  mealType: string;
  cookingMethod: string;
  portionSize: string;
  customServings?: number;
  cookingTime: number;
  dietaryPreferences: string[];
  skillLevel: string;
}

export const recipeService = {
  async saveRecipeGenerationData(data: Omit<RecipeGenerationData, 'timestamp'>) {
    try {
      const sanitizedData = {
        userId: data.userId,
        generatedBy: data.generatedBy || 'guest',
        ingredients: Array.isArray(data.ingredients) ? data.ingredients : [],
        mealType: String(data.mealType || ''),
        cookingMethod: String(data.cookingMethod || ''),
        portionSize: String(data.portionSize || ''),
        customServings: data.customServings ? Number(data.customServings) : null,
        cookingTime: Number(data.cookingTime || 0),
        dietaryPreferences: Array.isArray(data.dietaryPreferences) ? data.dietaryPreferences : [],
        skillLevel: String(data.skillLevel || ''),
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'recipeGenerations'), sanitizedData);
      return docRef.id;
    } catch (error) {
      console.error('Error saving recipe generation data:', error);
      throw error;
    }
  }
};