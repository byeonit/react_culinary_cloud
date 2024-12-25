import { Recipe } from '../../types/recipe';
import { mainCourseRecipes } from './mainCourse';
import { appetizerRecipes } from './appetizers';
import { dessertRecipes } from './desserts';
import { asianRecipes } from './asian';
import { mexicanRecipes } from './mexican';
import { breakfastRecipes } from './breakfast';
import { italianRecipes } from './italian';
import { veganRecipes } from './vegan';
import { soupRecipes } from './soups';

// Combine all recipes into one array
export const allRecipes: Recipe[] = [
  ...mainCourseRecipes,
  ...appetizerRecipes,
  ...dessertRecipes,
  ...asianRecipes,
  ...mexicanRecipes,
  ...breakfastRecipes,
  ...italianRecipes,
  ...veganRecipes,
  ...soupRecipes
];

// Export individual categories for specific use cases
export {
  mainCourseRecipes,
  appetizerRecipes,
  dessertRecipes,
  asianRecipes,
  mexicanRecipes,
  breakfastRecipes,
  italianRecipes,
  veganRecipes,
  soupRecipes
};