import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Guides from './pages/Guides';
import Recipe from './pages/Recipe';
import Blog from './pages/Blog';
import Culinary from './pages/features/Culinary';
import Macro from './pages/features/Macro';
import Meal from './pages/features/Meal';
import Shopping from './pages/features/Shopping';
import ShoppingLists from './pages/features/ShoppingLists';
import DemoCulinaryRecipe from './pages/features/DemoCulinaryRecipe';
import DemoMacroRecipe from './pages/features/DemoMacroRecipe';
import DemoMealPlanner from './pages/features/DemoMealPlanner';
import DemoMealPlanHistoric from './pages/features/DemoMealPlanHistoric';
import MacroMealPlanHistory from './pages/features/MacroMealPlanHistory';
import MacroPromo from './pages/promo/MacroPromo';
import CulinaryPromo from './pages/promo/CulinaryPromo';
import MealPlannerPromo from './pages/promo/MealPlannerPromo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="guides" element={<Guides />} />
          <Route path="recipe/:id" element={<Recipe />} />
          <Route path="blog" element={<Blog />} />
          <Route path="features/culinary" element={<Culinary />} />
          <Route path="features/macro" element={<Macro />} />
          <Route path="features/meal" element={<Meal />} />
          <Route path="features/shopping" element={<Shopping />} />
          <Route path="features/shopping/lists" element={<ShoppingLists />} />
          <Route path="features/demo-recipe" element={<DemoCulinaryRecipe />} />
          <Route path="features/demo-macro-recipe" element={<DemoMacroRecipe />} />
          <Route path="features/demo-meal-planner" element={<DemoMealPlanner />} />
          <Route path="features/demo-meal-planner-historic" element={<DemoMealPlanHistoric />} />
          <Route path="features/macro-meal-plan-history" element={<MacroMealPlanHistory />} />
          <Route path="promo/macro" element={<MacroPromo />} />
          <Route path="promo/culinary" element={<CulinaryPromo />} />
          <Route path="promo/meal-planner" element={<MealPlannerPromo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;