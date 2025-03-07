import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import FeatureDropdown from './navigation/FeatureDropdown';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
          >
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-800">
              MealChronicle
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {!isHome && (
              <Link
                to="/"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
            )}
            <FeatureDropdown />
            <Link to="/blog" className="text-gray-600 hover:text-orange-500">
              Recipes
            </Link>
            <a
              href={isHome ? '#testimonials' : '/'}
              className="text-gray-600 hover:text-orange-500"
            >
              Testimonials
            </a>
            <a
              href={isHome ? '#pricing' : '/'}
              className="text-gray-600 hover:text-orange-500"
            >
              Pricing
            </a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
