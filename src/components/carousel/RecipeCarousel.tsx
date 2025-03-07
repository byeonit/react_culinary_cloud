import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarouselButton from './CarouselButton';
import { recipes } from '../../data/recipes';

export default function RecipeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const recipesPerPage = 3;
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const nextSlide = () => {
    setCurrentIndex((current) => 
      current + recipesPerPage >= recipes.length ? 0 : current + recipesPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((current) => 
      current - recipesPerPage < 0 ? recipes.length - recipesPerPage : current - recipesPerPage
    );
  };

  const visibleRecipes = recipes.slice(currentIndex, currentIndex + recipesPerPage);

  return (
    <div className="relative">
      <CarouselButton direction="left" onClick={prevSlide} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleRecipes.map((recipe) => (
          <div 
            key={recipe.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-orange-500">{recipe.category}</span>
                <span className="text-sm text-gray-500">{recipe.time}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <Link 
                to={`/recipe/${recipe.id}`}
                className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center gap-1"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <CarouselButton direction="right" onClick={nextSlide} />
      
      <div className="flex justify-center mt-8 gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * recipesPerPage)}
            className={`w-2 h-2 rounded-full transition-all ${
              Math.floor(currentIndex / recipesPerPage) === index
                ? 'bg-orange-500 w-4'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}