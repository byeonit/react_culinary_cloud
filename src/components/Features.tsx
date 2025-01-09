import React from 'react';
import { ChefHat, Scale, CalendarDays, Sparkles, Brain, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI Recipe Generation',
      description: 'Our advanced AI analyzes your ingredients and preferences to create personalized recipes in seconds.'
    },
    {
      icon: Scale,
      title: 'Smart Nutrition Analysis',
      description: 'Real-time AI-powered tracking of macros and nutrients with personalized recommendations.'
    },
    {
      icon: CalendarDays,
      title: 'Intelligent Meal Planning',
      description: 'AI-optimized weekly meal schedules that adapt to your lifestyle and goals.'
    },
    {
      icon: Sparkles,
      title: 'Dynamic Customization',
      description: 'Recipes and portions automatically adjust based on your dietary needs and preferences.'
    },
    {
      icon: Zap,
      title: 'Real-time Adaptation',
      description: 'Smart suggestions that evolve with your cooking style and nutritional goals.'
    },
    {
      icon: ChefHat,
      title: 'Virtual Chef Assistant',
      description: 'Step-by-step guidance with AI-powered cooking tips and technique recommendations.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            AI-Powered Platform
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Kitchen with
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Artificial Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of cooking with our advanced AI technology that learns your preferences,
            optimizes recipes, and provides personalized culinary guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div 
                key={index} 
                className="relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 transition-all hover:shadow-lg group"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}