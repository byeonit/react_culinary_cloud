import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChefHat, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fb923c' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5
        }} />
      </div>

      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Recipe Platform
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Personal
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-orange-500"> Chef Assistant</span>
                <svg className="absolute -bottom-2 w-full h-3 text-orange-100" viewBox="0 0 300 12" fill="currentColor">
                  <path d="M3 12C75 12 150 0 297 0C150 0 75 12 3 12Z" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform ingredients into delicious meals, track nutrition, and plan your meals effortlessly with our AI-powered culinary platform.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link 
                to="/features/culinary"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg shadow-orange-500/20"
              >
                <ChefHat className="w-5 h-5" />
                Start Creating Recipes
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/blog" 
                className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full hover:bg-orange-50 transition-all text-lg font-semibold"
              >
                <Search className="w-5 h-5" />
                Explore Recipes
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '10,000+', label: 'Recipes' },
                { number: '50+', label: 'Cuisines' },
                { number: '100K+', label: 'Active Users' },
                { number: '4.9/5', label: 'User Rating' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
              alt="Cooking Interface"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}