import { Recipe } from '../../types/recipe';

export const breakfastRecipes: Recipe[] = [
  {
    id: 'eggs-benedict',
    title: 'Classic Eggs Benedict',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7',
    category: 'Breakfast',
    time: '30 min',
    servings: 4,
    difficulty: 'Intermediate',
    ingredients: [
      'English muffins',
      'Canadian bacon',
      'Fresh eggs',
      'Butter',
      'Egg yolks',
      'Lemon juice',
      'White vinegar',
      'Fresh chives'
    ],
    instructions: [
      'Prepare hollandaise sauce',
      'Toast English muffins',
      'Cook Canadian bacon',
      'Poach eggs',
      'Assemble components',
      'Top with hollandaise'
    ],
    nutritionFacts: {
      calories: 480,
      protein: 24,
      carbs: 28,
      fat: 32
    }
  },
  {
    id: 'acai-bowl',
    title: 'Tropical Açaí Bowl',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733',
    category: 'Breakfast',
    time: '15 min',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      'Açaí puree',
      'Banana',
      'Mixed berries',
      'Granola',
      'Honey',
      'Coconut flakes',
      'Chia seeds',
      'Almond milk'
    ],
    instructions: [
      'Blend açaí with banana',
      'Add almond milk',
      'Pour into bowls',
      'Top with fruits',
      'Add granola and seeds',
      'Drizzle with honey'
    ],
    nutritionFacts: {
      calories: 320,
      protein: 8,
      carbs: 52,
      fat: 12
    }
  },
  {
    id: 'shakshuka',
    title: 'Middle Eastern Shakshuka',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733',
    category: 'Breakfast',
    time: '35 min',
    servings: 4,
    difficulty: 'Intermediate',
    ingredients: [
      'Eggs',
      'Tomatoes',
      'Bell peppers',
      'Onions',
      'Garlic',
      'Cumin',
      'Paprika',
      'Fresh herbs'
    ],
    instructions: [
      'Sauté vegetables',
      'Add spices and tomatoes',
      'Create wells for eggs',
      'Poach eggs in sauce',
      'Garnish with herbs',
      'Serve with bread'
    ],
    nutritionFacts: {
      calories: 280,
      protein: 16,
      carbs: 18,
      fat: 18
    }
  },
  {
    id: 'french-toast',
    title: 'Brioche French Toast',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
    category: 'Breakfast',
    time: '25 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'Brioche bread',
      'Eggs',
      'Heavy cream',
      'Vanilla extract',
      'Cinnamon',
      'Maple syrup',
      'Fresh berries',
      'Butter'
    ],
    instructions: [
      'Make egg mixture',
      'Soak bread slices',
      'Heat griddle',
      'Cook until golden',
      'Add toppings',
      'Serve with syrup'
    ],
    nutritionFacts: {
      calories: 420,
      protein: 12,
      carbs: 48,
      fat: 22
    }
  },
  {
    id: 'breakfast-burrito',
    title: 'Loaded Breakfast Burrito',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f',
    category: 'Breakfast',
    time: '30 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'Large tortillas',
      'Scrambled eggs',
      'Breakfast sausage',
      'Hash browns',
      'Cheese',
      'Avocado',
      'Salsa',
      'Hot sauce'
    ],
    instructions: [
      'Cook sausage',
      'Prepare eggs',
      'Warm tortillas',
      'Layer ingredients',
      'Roll burritos',
      'Toast until sealed'
    ],
    nutritionFacts: {
      calories: 520,
      protein: 24,
      carbs: 42,
      fat: 32
    }
  },
  {
    id: 'overnight-oats',
    title: 'Berry Almond Overnight Oats',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2',
    category: 'Breakfast',
    time: '10 min + overnight',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      'Rolled oats',
      'Almond milk',
      'Greek yogurt',
      'Mixed berries',
      'Sliced almonds',
      'Maple syrup',
      'Chia seeds',
      'Vanilla extract'
    ],
    instructions: [
      'Mix oats with liquids',
      'Add yogurt and seeds',
      'Refrigerate overnight',
      'Top with berries',
      'Add nuts and syrup',
      'Stir and enjoy'
    ],
    nutritionFacts: {
      calories: 340,
      protein: 14,
      carbs: 52,
      fat: 12
    }
  },
  {
    id: 'english-breakfast',
    title: 'Full English Breakfast',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666',
    category: 'Breakfast',
    time: '45 min',
    servings: 2,
    difficulty: 'Intermediate',
    ingredients: [
      'Bacon rashers',
      'Sausages',
      'Black pudding',
      'Baked beans',
      'Mushrooms',
      'Tomatoes',
      'Eggs',
      'Sourdough toast'
    ],
    instructions: [
      'Cook bacon and sausages',
      'Prepare mushrooms and tomatoes',
      'Make baked beans',
      'Fry eggs',
      'Toast bread',
      'Plate all components'
    ],
    nutritionFacts: {
      calories: 850,
      protein: 42,
      carbs: 45,
      fat: 52
    }
  },
  {
    id: 'protein-pancakes',
    title: 'Banana Protein Pancakes',
    image: 'https://images.unsplash.com/photo-1575853121743-60c24f0a7502',
    category: 'Breakfast',
    time: '20 min',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      'Protein powder',
      'Ripe bananas',
      'Egg whites',
      'Oat flour',
      'Almond milk',
      'Baking powder',
      'Cinnamon',
      'Greek yogurt'
    ],
    instructions: [
      'Mash bananas',
      'Mix dry ingredients',
      'Combine wet ingredients',
      'Cook pancakes',
      'Prepare toppings',
      'Serve warm'
    ],
    nutritionFacts: {
      calories: 320,
      protein: 28,
      carbs: 42,
      fat: 8
    }
  },
  {
    id: 'mediterranean-breakfast',
    title: 'Mediterranean Breakfast Plate',
    image: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2',
    category: 'Breakfast',
    time: '25 min',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      'Pita bread',
      'Hummus',
      'Cucumber',
      'Cherry tomatoes',
      'Kalamata olives',
      'Feta cheese',
      'Za\'atar',
      'Extra virgin olive oil'
    ],
    instructions: [
      'Warm pita bread',
      'Slice vegetables',
      'Arrange components',
      'Crumble feta',
      'Drizzle with oil',
      'Sprinkle za\'atar'
    ],
    nutritionFacts: {
      calories: 380,
      protein: 14,
      carbs: 42,
      fat: 22
    }
  },
  {
    id: 'breakfast-smoothie-bowl',
    title: 'Green Goddess Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55',
    category: 'Breakfast',
    time: '15 min',
    servings: 1,
    difficulty: 'Easy',
    ingredients: [
      'Spinach',
      'Frozen mango',
      'Banana',
      'Avocado',
      'Plant-based milk',
      'Granola',
      'Hemp seeds',
      'Coconut flakes'
    ],
    instructions: [
      'Blend smoothie base',
      'Adjust thickness',
      'Pour into bowl',
      'Add toppings',
      'Arrange artfully',
      'Serve immediately'
    ],
    nutritionFacts: {
      calories: 420,
      protein: 12,
      carbs: 58,
      fat: 18
    }
  }
];