import { Recipe } from '../../types/recipe';

export const mexicanRecipes: Recipe[] = [
  {
    id: 'chiles-rellenos',
    title: 'Chiles Rellenos',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7',
    category: 'Mexican',
    time: '60 min',
    servings: 4,
    difficulty: 'Advanced',
    ingredients: [
      'Poblano peppers',
      'Oaxaca cheese',
      'Eggs',
      'Flour',
      'Tomato sauce',
      'Onion',
      'Garlic',
      'Mexican oregano'
    ],
    instructions: [
      'Roast and peel peppers',
      'Stuff with cheese',
      'Prepare batter',
      'Fry peppers',
      'Make sauce',
      'Serve hot'
    ],
    nutritionFacts: {
      calories: 380,
      protein: 18,
      carbs: 24,
      fat: 26
    }
  },
  {
    id: 'pozole-rojo',
    title: 'Pozole Rojo',
    image: 'https://images.unsplash.com/photo-1562059390-a761a084768e',
    category: 'Mexican',
    time: '180 min',
    servings: 8,
    difficulty: 'Advanced',
    ingredients: [
      'Hominy',
      'Pork shoulder',
      'Dried chilies',
      'Garlic',
      'Onion',
      'Mexican oregano',
      'Cabbage',
      'Radishes'
    ],
    instructions: [
      'Cook pork until tender',
      'Prepare chile sauce',
      'Cook hominy',
      'Combine ingredients',
      'Simmer together',
      'Serve with garnishes'
    ],
    nutritionFacts: {
      calories: 420,
      protein: 32,
      carbs: 38,
      fat: 22
    }
  },
  {
    id: 'elote',
    title: 'Mexican Street Corn',
    image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d',
    category: 'Mexican',
    time: '25 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'Corn on the cob',
      'Mayonnaise',
      'Mexican crema',
      'Cotija cheese',
      'Chili powder',
      'Lime',
      'Cilantro',
      'Butter'
    ],
    instructions: [
      'Grill corn',
      'Mix mayo and crema',
      'Coat corn',
      'Add cheese',
      'Season with chili',
      'Garnish with lime'
    ],
    nutritionFacts: {
      calories: 280,
      protein: 8,
      carbs: 32,
      fat: 16
    }
  }
];