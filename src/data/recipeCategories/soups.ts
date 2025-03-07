import { Recipe } from '../../types/recipe';

export const soupRecipes: Recipe[] = [
  // ... existing soups ...
  {
    id: 'thai-coconut-soup',
    title: 'Thai Coconut Soup (Tom Kha)',
    image: 'https://images.unsplash.com/photo-1562114808-b4b33cf60f4f',
    category: 'Soups',
    time: '40 min',
    servings: 4,
    difficulty: 'Intermediate',
    ingredients: [
      'Coconut milk',
      'Lemongrass',
      'Galangal',
      'Kaffir lime leaves',
      'Mushrooms',
      'Cherry tomatoes',
      'Thai chilies',
      'Fish sauce'
    ],
    instructions: [
      'Simmer aromatics',
      'Add coconut milk',
      'Cook mushrooms',
      'Season to taste',
      'Add tomatoes',
      'Garnish with cilantro'
    ],
    nutritionFacts: {
      calories: 260,
      protein: 8,
      carbs: 14,
      fat: 22
    }
  },
  {
    id: 'lentil-soup',
    title: 'Mediterranean Lentil Soup',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    category: 'Soups',
    time: '50 min',
    servings: 6,
    difficulty: 'Easy',
    ingredients: [
      'Red lentils',
      'Carrots',
      'Onion',
      'Cumin',
      'Vegetable broth',
      'Spinach',
      'Lemon juice',
      'Olive oil'
    ],
    instructions: [
      'Sauté vegetables',
      'Add lentils and spices',
      'Simmer until tender',
      'Add spinach',
      'Season with lemon',
      'Drizzle with oil'
    ],
    nutritionFacts: {
      calories: 240,
      protein: 12,
      carbs: 36,
      fat: 6
    }
  },
  {
    id: 'gazpacho',
    title: 'Spanish Gazpacho',
    image: 'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb',
    category: 'Soups',
    time: '20 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'Ripe tomatoes',
      'Cucumber',
      'Red pepper',
      'Garlic',
      'Olive oil',
      'Sherry vinegar',
      'Bread',
      'Fresh herbs'
    ],
    instructions: [
      'Chop vegetables',
      'Blend until smooth',
      'Add bread and oil',
      'Season well',
      'Chill thoroughly',
      'Garnish and serve'
    ],
    nutritionFacts: {
      calories: 160,
      protein: 3,
      carbs: 18,
      fat: 9
    }
  },
  {
    id: 'pho',
    title: 'Vietnamese Pho',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43',
    category: 'Soups',
    time: '180 min',
    servings: 6,
    difficulty: 'Advanced',
    ingredients: [
      'Beef bones',
      'Rice noodles',
      'Bean sprouts',
      'Star anise',
      'Cinnamon',
      'Ginger',
      'Fish sauce',
      'Fresh herbs'
    ],
    instructions: [
      'Make bone broth',
      'Toast spices',
      'Cook noodles',
      'Prepare garnishes',
      'Assemble bowls',
      'Serve hot'
    ],
    nutritionFacts: {
      calories: 380,
      protein: 28,
      carbs: 42,
      fat: 14
    }
  },
  {
    id: 'borscht',
    title: 'Ukrainian Borscht',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    category: 'Soups',
    time: '90 min',
    servings: 8,
    difficulty: 'Intermediate',
    ingredients: [
      'Beets',
      'Cabbage',
      'Potatoes',
      'Carrots',
      'Beef',
      'Sour cream',
      'Dill',
      'Bay leaves'
    ],
    instructions: [
      'Prepare vegetables',
      'Cook beef',
      'Add beets',
      'Simmer together',
      'Season well',
      'Serve with cream'
    ],
    nutritionFacts: {
      calories: 320,
      protein: 18,
      carbs: 32,
      fat: 16
    }
  }
];