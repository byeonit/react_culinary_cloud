import { Recipe } from '../../types/recipe';

export const dessertRecipes: Recipe[] = [
  {
    id: 'tiramisu',
    title: 'Classic Italian Tiramisu',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    category: 'Desserts',
    time: '40 min',
    servings: 8,
    difficulty: 'Intermediate',
    ingredients: [
      'Ladyfinger cookies',
      'Mascarpone cheese',
      'Strong coffee',
      'Eggs',
      'Sugar',
      'Cocoa powder',
      'Vanilla extract',
      'Dark chocolate'
    ],
    instructions: [
      'Prepare strong coffee and let cool',
      'Beat egg yolks with sugar',
      'Mix in mascarpone',
      'Dip ladyfingers in coffee',
      'Layer cookies and cream',
      'Dust with cocoa powder'
    ],
    nutritionFacts: {
      calories: 380,
      protein: 7,
      carbs: 35,
      fat: 24
    }
  },
  {
    id: 'creme-brulee',
    title: 'French Crème Brûlée',
    image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3',
    category: 'Desserts',
    time: '50 min',
    servings: 6,
    difficulty: 'Advanced',
    ingredients: [
      'Heavy cream',
      'Vanilla bean',
      'Egg yolks',
      'Sugar',
      'Salt',
      'Extra sugar for topping'
    ],
    instructions: [
      'Heat cream with vanilla',
      'Whisk egg yolks and sugar',
      'Temper eggs with hot cream',
      'Bake in water bath',
      'Chill thoroughly',
      'Caramelize sugar topping'
    ],
    nutritionFacts: {
      calories: 420,
      protein: 4,
      carbs: 28,
      fat: 32
    }
  },
  {
    id: 'matcha-cheesecake',
    title: 'Japanese Matcha Cheesecake',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc',
    category: 'Desserts',
    time: '70 min',
    servings: 8,
    difficulty: 'Advanced',
    ingredients: [
      'Cream cheese',
      'Matcha powder',
      'Eggs',
      'White chocolate',
      'Heavy cream',
      'Cookie crust',
      'Sugar',
      'Vanilla extract'
    ],
    instructions: [
      'Prepare cookie crust',
      'Beat cream cheese until smooth',
      'Add matcha and sugar',
      'Fold in melted chocolate',
      'Bake in water bath',
      'Cool gradually'
    ],
    nutritionFacts: {
      calories: 360,
      protein: 6,
      carbs: 32,
      fat: 22
    }
  },
  {
    id: 'pavlova',
    title: 'Classic Pavlova',
    image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c',
    category: 'Desserts',
    time: '120 min',
    servings: 8,
    difficulty: 'Advanced',
    ingredients: [
      'Egg whites',
      'Caster sugar',
      'Cornstarch',
      'White vinegar',
      'Vanilla extract',
      'Heavy cream',
      'Fresh berries',
      'Passion fruit'
    ],
    instructions: [
      'Whip egg whites until soft peaks',
      'Gradually add sugar',
      'Fold in cornstarch and vinegar',
      'Shape and bake slowly',
      'Cool in oven',
      'Top with cream and fruit'
    ],
    nutritionFacts: {
      calories: 280,
      protein: 3,
      carbs: 45,
      fat: 10
    }
  },
  {
    id: 'opera-cake',
    title: 'French Opera Cake',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2',
    category: 'Desserts',
    time: '180 min',
    servings: 12,
    difficulty: 'Advanced',
    ingredients: [
      'Almond sponge cake',
      'Coffee syrup',
      'Dark chocolate',
      'Coffee buttercream',
      'Chocolate ganache',
      'Almond meal',
      'Eggs',
      'Sugar'
    ],
    instructions: [
      'Bake almond sponge layers',
      'Prepare coffee syrup',
      'Make buttercream',
      'Create chocolate ganache',
      'Layer components',
      'Chill and glaze'
    ],
    nutritionFacts: {
      calories: 450,
      protein: 8,
      carbs: 48,
      fat: 28
    }
  },
  {
    id: 'mango-sticky-rice',
    title: 'Thai Mango Sticky Rice',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b',
    category: 'Desserts',
    time: '45 min',
    servings: 4,
    difficulty: 'Intermediate',
    ingredients: [
      'Glutinous rice',
      'Coconut milk',
      'Palm sugar',
      'Ripe mangoes',
      'Salt',
      'Toasted sesame seeds',
      'Pandan leaves',
      'Coconut cream'
    ],
    instructions: [
      'Soak and steam sticky rice',
      'Prepare coconut sauce',
      'Cook rice with sauce',
      'Slice fresh mangoes',
      'Arrange and garnish',
      'Top with coconut cream'
    ],
    nutritionFacts: {
      calories: 320,
      protein: 4,
      carbs: 52,
      fat: 12
    }
  },
  {
    id: 'churros',
    title: 'Spanish Churros with Chocolate',
    image: 'https://images.unsplash.com/photo-1624371414361-e670edf4698d',
    category: 'Desserts',
    time: '40 min',
    servings: 6,
    difficulty: 'Intermediate',
    ingredients: [
      'Water',
      'Butter',
      'Flour',
      'Eggs',
      'Sugar',
      'Cinnamon',
      'Dark chocolate',
      'Heavy cream'
    ],
    instructions: [
      'Prepare choux pastry',
      'Pipe into hot oil',
      'Fry until golden',
      'Coat in cinnamon sugar',
      'Make chocolate sauce',
      'Serve warm'
    ],
    nutritionFacts: {
      calories: 340,
      protein: 5,
      carbs: 42,
      fat: 18
    }
  }
];