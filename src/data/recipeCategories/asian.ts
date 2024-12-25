import { Recipe } from '../../types/recipe';

export const asianRecipes: Recipe[] = [
  {
    id: 'ramen-bowl',
    title: 'Tonkotsu Ramen',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e',
    category: 'Asian',
    time: '180 min',
    servings: 4,
    difficulty: 'Advanced',
    ingredients: [
      'Pork bones',
      'Ramen noodles',
      'Chashu pork',
      'Soft-boiled eggs',
      'Green onions',
      'Nori',
      'Bamboo shoots',
      'Garlic oil'
    ],
    instructions: [
      'Prepare pork bone broth',
      'Cook chashu pork',
      'Marinate eggs',
      'Cook noodles',
      'Assemble bowls',
      'Add toppings'
    ],
    nutritionFacts: {
      calories: 550,
      protein: 32,
      carbs: 58,
      fat: 24
    }
  },
  {
    id: 'pad-see-ew',
    title: 'Thai Pad See Ew',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92',
    category: 'Asian',
    time: '30 min',
    servings: 4,
    difficulty: 'Intermediate',
    ingredients: [
      'Wide rice noodles',
      'Chinese broccoli',
      'Chicken or tofu',
      'Dark soy sauce',
      'Oyster sauce',
      'Eggs',
      'Garlic',
      'White pepper'
    ],
    instructions: [
      'Prepare noodles',
      'Stir-fry garlic',
      'Cook protein',
      'Add vegetables',
      'Season and toss',
      'Add eggs'
    ],
    nutritionFacts: {
      calories: 420,
      protein: 24,
      carbs: 52,
      fat: 16
    }
  },
  {
    id: 'korean-bbq',
    title: 'Korean BBQ Short Ribs',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733',
    category: 'Asian',
    time: '60 min',
    servings: 6,
    difficulty: 'Intermediate',
    ingredients: [
      'Beef short ribs',
      'Soy sauce',
      'Asian pear',
      'Sesame oil',
      'Garlic',
      'Ginger',
      'Brown sugar',
      'Green onions'
    ],
    instructions: [
      'Prepare marinade',
      'Marinate ribs',
      'Prepare grill',
      'Grill ribs',
      'Rest meat',
      'Garnish and serve'
    ],
    nutritionFacts: {
      calories: 480,
      protein: 36,
      carbs: 12,
      fat: 32
    }
  }
];