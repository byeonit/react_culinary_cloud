import React from 'react';
import { ChefHat, Sparkles, ChevronRight, Utensils, Brain, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CulinaryPromo() {
  const features = [
    {
      title: "AI Recipe Generation",
      description: "Transform your available ingredients into delicious meals with our advanced AI recipe generator.",
      icon: Brain
    },
    {
      title: "Smart Cooking Assistant",
      description: "Get step-by-step guidance and real-time cooking tips tailored to your skill level.",
      icon: ChefHat
    },
    {
      title: "Time-Optimized Cooking",
      description: "Create meals that fit your schedule with intelligent cooking time management.",
      icon: Clock
    }
  ];

  const steps = [
    {
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
      title: "Select Your Ingredients",
      description: "Tell us what ingredients you have available in your kitchen."
    },
    {
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      title: "Choose Your Preferences",
      description: "Specify your dietary needs and cooking preferences."
    },
    {
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
      title: "Get AI-Generated Recipes",
      description: "Receive personalized recipes optimized for your ingredients and preferences."
    },
    {
      image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf",
      title: "Start Cooking",
      description: "Follow our detailed instructions and expert tips to create your meal."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Recipe Generation
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Personal
            <span className="text-orange-500"> AI Chef Assistant</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform any ingredients into delicious meals with our AI-powered culinary platform. Get personalized recipes and expert cooking guidance.
          </p>
          <Link
            to="/features/culinary"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg"
          >
            Start Creating Recipes
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cuisine Types */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-8">Explore Global Cuisines</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                name: "Italian"
              },
              {
                image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
                name: "Asian"
              },
              {
                image: "https://images.unsplash.com/photo-1464219222984-216ebffaaf85",
                name: "Mexican"
              },
              {
                image: "https://images.unsplash.com/photo-1539755530862-00f623c00f52",
                name: "Mediterranean"
              }
            ].map((cuisine, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img 
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold">{cuisine.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the future of cooking with our AI-powered culinary assistant
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Utensils,
                title: "Recipe Customization",
                description: "Adapt recipes to your dietary needs and preferences"
              },
              {
                icon: Brain,
                title: "Smart Learning",
                description: "AI that learns your taste and cooking style"
              },
              {
                icon: ChefHat,
                title: "Expert Guidance",
                description: "Professional cooking tips and techniques"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/features/culinary"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg"
          >
            Start Creating Recipes Now
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}