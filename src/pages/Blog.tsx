import React, { useState, useMemo } from 'react';
import { recipes } from '../data/recipes';
import SearchBar from '../components/blog/SearchBar';
import CategoryFilter from '../components/blog/CategoryFilter';
import RecipeGrid from '../components/blog/RecipeGrid';
import RecipeCounter from '../components/blog/RecipeCounter';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <RecipeCounter />

        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {filteredRecipes.length > 0 ? (
          <RecipeGrid recipes={filteredRecipes} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No recipes found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}