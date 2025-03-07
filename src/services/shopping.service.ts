import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface ShoppingPlannerData {
  userId: string;
  generatedBy: string;
  spaces: {
    fridge: {
      items: Array<{
        name: string;
        quantity: number;
        unit: string;
        category: string;
        expiryDate?: string;
        addedDate: string;
      }>;
    };
    pantry: {
      items: Array<{
        name: string;
        quantity: number;
        unit: string;
        category: string;
        expiryDate?: string;
        addedDate: string;
      }>;
    };
    freezer: {
      items: Array<{
        name: string;
        quantity: number;
        unit: string;
        category: string;
        expiryDate?: string;
        addedDate: string;
      }>;
    };
  };
  categories: Array<{
    id: string;
    name: string;
    itemCount: number;
  }>;
}

export const shoppingService = {
  async saveShoppingPlannerData(data: Omit<ShoppingPlannerData, 'timestamp'>) {
    try {
      const sanitizedData = {
        userId: data.userId,
        generatedBy: data.generatedBy || 'guest',
        spaces: {
          fridge: { items: data.spaces.fridge.items || [] },
          pantry: { items: data.spaces.pantry.items || [] },
          freezer: { items: data.spaces.freezer.items || [] }
        },
        categories: data.categories || [],
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'shoppingPlanners'), sanitizedData);
      return docRef.id;
    } catch (error) {
      console.error('Error saving shopping planner data:', error);
      throw error;
    }
  }
};