import { Recipe } from '../../types/recipe';

export const appetizerRecipes: Recipe[] = [
  {
    id: 'bruschetta',
    title: 'Classic Tomato Bruschetta',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f',
    category: 'Appetizers',
    time: '20 min',
    servings: 6,
    difficulty: 'Easy',
    ingredients: [
      'Baguette slices',
      'Ripe tomatoes',
      'Fresh basil',
      'Garlic cloves',
      'Extra virgin olive oil',
      'Balsamic vinegar',
      'Sea salt',
      'Black pepper'
    ],
    instructions: [
      'Toast baguette slices',
      'Dice tomatoes and drain excess liquid',
      'Chop basil and garlic',
      'Mix tomatoes with oil and seasonings',
      'Top bread with mixture',
      'Drizzle with balsamic'
    ],
    nutritionFacts: {
      calories: 120,
      protein: 3,
      carbs: 15,
      fat: 6
    }
  },
  {
    id: 'spring-rolls',
    title: 'Vietnamese Spring Rolls',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    category: 'Appetizers',
    time: '30 min',
    servings: 8,
    difficulty: 'Intermediate',
    ingredients: [
      'Rice paper wrappers',
      'Rice vermicelli',
      'Shrimp',
      'Fresh herbs',
      'Bean sprouts',
      'Carrots',
      'Lettuce',
      'Peanut sauce'
    ],
    instructions: [
      'Cook vermicelli and shrimp',
      'Prepare vegetables',
      'Soften rice paper',
      'Layer ingredients',
      'Roll tightly',
      'Serve with peanut sauce'
    ],
    nutritionFacts: {
      calories: 150,
      protein: 8,
      carbs: 22,
      fat: 4
    }
  },
  {
    id: 'hummus',
    title: 'Creamy Hummus',
    image: 'https://images.unsplash.com/photo-1590379492966-e076d8f84c2d',
    category: 'Appetizers',
    time: '15 min',
    servings: 8,
    difficulty: 'Easy',
    ingredients: [
      'Chickpeas',
      'Tahini',
      'Lemon juice',
      'Garlic',
      'Olive oil',
      'Cumin',
      'Paprika',
      'Salt'
    ],
    instructions: [
      'Drain chickpeas',
      'Blend with tahini and garlic',
      'Add lemon juice and seasonings',
      'Stream in olive oil',
      'Garnish with paprika',
      'Serve with pita'
    ],
    nutritionFacts: {
      calories: 180,
      protein: 6,
      carbs: 20,
      fat: 10
    }
  },
  {
    id: 'gyoza',
    title: 'Japanese Gyoza',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb',
    category: 'Appetizers',
    time: '45 min',
    servings: 6,
    difficulty: 'Intermediate',
    ingredients: [
      'Gyoza wrappers',
      'Ground pork',
      'Cabbage',
      'Garlic chives',
      'Ginger',
      'Sesame oil',
      'Soy sauce',
      'Rice vinegar'
    ],
    instructions: [
      'Prepare filling',
      'Fill and fold dumplings',
      'Heat pan with oil',
      'Pan-fry until crispy',
      'Steam until cooked',
      'Serve with dipping sauce'
    ],
    nutritionFacts: {
      calories: 220,
      protein: 12,
      carbs: 25,
      fat: 9
    }
  },
  {
    id: 'spanakopita',
    title: 'Greek Spanakopita',
    image: 'https://images.unsplash.com/photo-1632323091845-f636f89749fa',
    category: 'Appetizers',
    time: '60 min',
    servings: 8,
    difficulty: 'Intermediate',
    ingredients: [
      'Phyllo dough',
      'Spinach',
      'Feta cheese',
      'Onions',
      'Eggs',
      'Dill',
      'Butter',
      'Olive oil'
    ],
    instructions: [
      'Sauté spinach and onions',
      'Mix with feta and eggs',
      'Layer phyllo sheets',
      'Fill and fold',
      'Brush with butter',
      'Bake until golden'
    ],
    nutritionFacts: {
      calories: 260,
      protein: 8,
      carbs: 28,
      fat: 14
    }
  }
];