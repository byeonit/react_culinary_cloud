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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;