export interface Recipe {
  id: string;
  title: string;
  image: string;
  category: string;
  time: string;
  servings: number;
  difficulty: 'Easy' | 'Intermediate' | 'Advanced';
  ingredients: string[];
  instructions: string[];
  nutritionFacts?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}