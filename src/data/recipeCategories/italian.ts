import { Recipe } from '../../types/recipe';

export const italianRecipes: Recipe[] = [
  {
    id: 'risotto-milanese',
    title: 'Risotto alla Milanese',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826a07f',
    category: 'Italian',
    time: '45 min',
    servings: 4,
    difficulty: 'Intermediate',
    ingredients: [
      'Arborio rice',
      'Saffron threads',
      'White wine',
      'Chicken stock',
      'Parmesan cheese',
      'Butter',
      'Onion',
      'Olive oil'
    ],
    instructions: [
      'Toast rice in butter',
      'Add wine and reduce',
      'Gradually add hot stock',
      'Infuse with saffron',
      'Stir in cheese and butter',
      'Rest before serving'
    ],
    nutritionFacts: {
      calories: 420,
      protein: 12,
      carbs: 58,
      fat: 18
    }
  },
  {
    id: 'osso-buco',
    title: 'Osso Buco alla Milanese',
    image: 'https://images.unsplash.com/photo-1544359355-354a8f4ab4a9',
    category: 'Italian',
    time: '180 min',
    servings: 6,
    difficulty: 'Advanced',
    ingredients: [
      'Veal shanks',
      'White wine',
      'Vegetables',
      'Tomatoes',
      'Gremolata',
      'Broth',
      'Herbs',
      'Polenta'
    ],
    instructions: [
      'Brown veal shanks',
      'Sauté vegetables',
      'Add wine and reduce',
      'Simmer with broth',
      'Prepare gremolata',
      'Serve with polenta'
    ],
    nutritionFacts: {
      calories: 580,
      protein: 42,
      carbs: 28,
      fat: 32
    }
  },
  {
    id: 'pesto-pasta',
    title: 'Linguine al Pesto',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    category: 'Italian',
    time: '25 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'Linguine pasta',
      'Fresh basil',
      'Pine nuts',
      'Garlic',
      'Parmesan cheese',
      'Olive oil',
      'Salt',
      'Black pepper'
    ],
    instructions: [
      'Make fresh pesto',
      'Cook pasta al dente',
      'Reserve pasta water',
      'Toss with pesto',
      'Adjust consistency',
      'Top with cheese'
    ],
    nutritionFacts: {
      calories: 460,
      protein: 14,
      carbs: 52,
      fat: 24
    }
  },
  {
    id: 'saltimbocca',
    title: 'Saltimbocca alla Romana',
    image: 'https://images.unsplash.com/photo-1547928576-b822bc410bdf',
    category: 'Italian',
    time: '30 min',
    servings: 4,
    difficulty: 'Intermediate',
    ingredients: [
      'Veal cutlets',
      'Prosciutto',
      'Sage leaves',
      'White wine',
      'Butter',
      'Olive oil',
      'Flour',
      'Stock'
    ],
    instructions: [
      'Prepare veal cutlets',
      'Layer with prosciutto and sage',
      'Dredge in flour',
      'Pan-fry until golden',
      'Make wine sauce',
      'Serve immediately'
    ],
    nutritionFacts: {
      calories: 380,
      protein: 32,
      carbs: 8,
      fat: 24
    }
  },
  {
    id: 'ribollita',
    title: 'Tuscan Ribollita',
    image: 'https://images.unsplash.com/photo-1547928760-3b28490bb37f',
    category: 'Italian',
    time: '90 min',
    servings: 6,
    difficulty: 'Intermediate',
    ingredients: [
      'Stale bread',
      'Cannellini beans',
      'Kale',
      'Vegetables',
      'Tomatoes',
      'Herbs',
      'Olive oil',
      'Parmesan'
    ],
    instructions: [
      'Sauté vegetables',
      'Add beans and tomatoes',
      'Simmer with herbs',
      'Layer with bread',
      'Bake until crusty',
      'Drizzle with olive oil'
    ],
    nutritionFacts: {
      calories: 320,
      protein: 12,
      carbs: 42,
      fat: 14
    }
  }
];