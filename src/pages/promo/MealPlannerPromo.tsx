import React from 'react';
import { CalendarDays, Sparkles, ChevronRight, Scale, Brain, Clock, Heart, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MealPlannerPromo() {
  const features = [
    {
      title: "AI-Powered Planning",
      description: "Let our AI create personalized weekly meal plans based on your preferences and nutritional needs.",
      icon: Brain
    },
    {
      title: "Smart Scheduling",
      description: "Efficiently organize your meals with intelligent scheduling that adapts to your lifestyle.",
      icon: CalendarDays
    },
    {
      title: "Nutrition Balance",
      description: "Ensure balanced nutrition across all your meals with smart nutrient distribution.",
      icon: Scale
    }
  ];

  const steps = [
    {
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      title: "Calculate Your BMI",
      description: "Start with a personalized assessment of your nutritional needs."
    },
    {
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      title: "Set Your Goals",
      description: "Define your health and fitness objectives for targeted meal planning."
    },
    {
      image: "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a",
      title: "Specify Preferences",
      description: "Tell us about your dietary preferences and restrictions."
    },
    {
      image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7",
      title: "Get Your Plan",
      description: "Receive a complete meal plan tailored to your needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Meal Planning
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Personal
            <span className="text-green-500"> Meal Planning Assistant</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take the guesswork out of healthy eating with our intelligent meal planning system. Get personalized weekly meal plans that fit your lifestyle and goals.
          </p>
          <Link
            to="/features/meal"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg"
          >
            Start Planning
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-green-500" />
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
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Save Time",
                description: "Eliminate meal planning stress with automated weekly schedules"
              },
              {
                icon: Heart,
                title: "Eat Healthier",
                description: "Ensure balanced nutrition across all your meals"
              },
              {
                icon: ChefHat,
                title: "Variety & Taste",
                description: "Discover new recipes while enjoying your favorites"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Showcase */}
        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Smart Features for Better Planning</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our intelligent meal planning system adapts to your needs and preferences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Flexible Scheduling",
                description: "Adjust meal times to fit your daily routine"
              },
              {
                title: "Smart Substitutions",
                description: "Easy ingredient swaps based on availability"
              },
              {
                title: "Portion Control",
                description: "Automatic serving size adjustments"
              },
              {
                title: "Shopping Lists",
                description: "Automated grocery lists for easy shopping"
              },
              {
                title: "Meal Prep Guides",
                description: "Efficient cooking and prep instructions"
              },
              {
                title: "Progress Tracking",
                description: "Monitor your healthy eating journey"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/features/meal"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg"
          >
            Start Your Meal Plan Now
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}