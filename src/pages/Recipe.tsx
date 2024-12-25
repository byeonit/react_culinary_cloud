import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { recipes } from '../data/recipes';
import RecipeHeader from '../components/recipe/RecipeHeader';
import RecipeContent from '../components/recipe/RecipeContent';

export default function Recipe() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);
  
  if (!recipe) {
    return <Navigate to="/" replace />;
  }

  return (
    <main>
      <RecipeHeader recipe={recipe} />
      <RecipeContent recipe={recipe} />
    </main>
  );
}