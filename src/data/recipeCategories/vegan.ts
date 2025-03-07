import { Recipe } from '../../types/recipe';

export const veganRecipes: Recipe[] = [
  {
    id: 'quinoa-buddha-bowl',
    title: 'Rainbow Quinoa Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'Vegan',
    time: '30 min',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      'Quinoa',
      'Sweet potato',
      'Kale',
      'Chickpeas',
      'Avocado',
      'Tahini',
      'Lemon juice',
      'Mixed seeds'
    ],
    instructions: [
      'Cook quinoa',
      'Roast sweet potatoes',
      'Massage kale',
      'Season chickpeas',
      'Make tahini sauce',
      'Assemble bowl'
    ],
    nutritionFacts: {
      calories: 420,
      protein: 15,
      carbs: 52,
      fat: 22
    }
  },
  {
    id: 'mushroom-risotto',
    title: 'Creamy Mushroom Risotto',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
    category: 'Vegan',
    time: '45 min',
    servings: 4,
    difficulty: 'Intermediate',
    ingredients: [
      'Arborio rice',
      'Mixed mushrooms',
      'Vegetable stock',
      'Nutritional yeast',
      'White wine',
      'Shallots',
      'Garlic',
      'Fresh thyme'
    ],
    instructions: [
      'Sauté mushrooms',
      'Toast rice',
      'Add wine',
      'Gradually add stock',
      'Stir in yeast',
      'Season and serve'
    ],
    nutritionFacts: {
      calories: 380,
      protein: 12,
      carbs: 58,
      fat: 14
    }
  },
  {
    id: 'cauliflower-tacos',
    title: 'Crispy Cauliflower Tacos',
    image: 'https://images.unsplash.com/photo-1464219222984-216ebffaaf85',
    category: 'Vegan',
    time: '40 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'Cauliflower',
      'Corn tortillas',
      'Avocado',
      'Red cabbage',
      'Lime',
      'Cilantro',
      'Mexican spices',
      'Cashew cream'
    ],
    instructions: [
      'Season cauliflower',
      'Roast until crispy',
      'Prepare toppings',
      'Make cashew cream',
      'Warm tortillas',
      'Assemble tacos'
    ],
    nutritionFacts: {
      calories: 320,
      protein: 10,
      carbs: 42,
      fat: 16
    }
  },
  {
    id: 'lentil-shepherd-pie',
    title: 'Lentil Shepherd\'s Pie',
    image: 'https://images.unsplash.com/photo-1619894991209-9f9694be045a',
    category: 'Vegan',
    time: '60 min',
    servings: 6,
    difficulty: 'Intermediate',
    ingredients: [
      'Green lentils',
      'Potatoes',
      'Carrots',
      'Peas',
      'Mushrooms',
      'Plant milk',
      'Vegetable stock',
      'Fresh herbs'
    ],
    instructions: [
      'Cook lentils',
      'Prepare mashed potatoes',
      'Sauté vegetables',
      'Layer ingredients',
      'Bake until golden',
      'Rest before serving'
    ],
    nutritionFacts: {
      calories: 380,
      protein: 16,
      carbs: 62,
      fat: 8
    }
  },
  {
    id: 'chocolate-mousse',
    title: 'Aquafaba Chocolate Mousse',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3',
    category: 'Vegan',
    time: '20 min',
    servings: 4,
    difficulty: 'Intermediate',
    ingredients: [
      'Aquafaba',
      'Dark chocolate',
      'Sugar',
      'Vanilla extract',
      'Salt',
      'Cocoa powder',
      'Berries',
      'Mint leaves'
    ],
    instructions: [
      'Whip aquafaba',
      'Melt chocolate',
      'Fold together',
      'Chill mixture',
      'Add toppings',
      'Serve cold'
    ],
    nutritionFacts: {
      calories: 220,
      protein: 4,
      carbs: 28,
      fat: 12
    }
  }
];