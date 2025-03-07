import React from 'react';
import { Scale, Brain, ChevronRight, Sparkles, Target, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MacroPromo() {
  const features = [
    {
      title: "Smart Macro Tracking",
      description: "Set and monitor your daily macronutrient targets with precision. Our AI helps you stay on track with your nutrition goals.",
      icon: Scale
    },
    {
      title: "Personalized Recommendations",
      description: "Get AI-powered suggestions for meals that perfectly match your macro requirements and dietary preferences.",
      icon: Brain
    },
    {
      title: "Goal-Based Planning",
      description: "Whether you're building muscle, losing weight, or maintaining, our system adapts to your specific fitness goals.",
      icon: Target
    }
  ];

  const steps = [
    {
      image: "https://raw.githubusercontent.com/byeonit/react_culinary_cloud/main/public/step1.png",
      title: "Set Your Macro Goals",
      description: "Define your daily macronutrient targets and fitness objectives with our intuitive calculator."
    },
    {
      image: "https://raw.githubusercontent.com/byeonit/react_culinary_cloud/main/public/step2.png",
      title: "Choose Meal Types",
      description: "Select your preferred meal distribution throughout the day with recommended macro splits."
    },
    {
      image: "https://raw.githubusercontent.com/byeonit/react_culinary_cloud/main/public/step3.png",
      title: "Customize Preferences",
      description: "Specify your dietary needs and restrictions for perfectly tailored meal plans."
    },
    {
      image: "https://raw.githubusercontent.com/byeonit/react_culinary_cloud/main/public/step4.png",
      title: "Generate Your Plan",
      description: "Get your personalized meal plan optimized for your goals and preferences."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Macro Tracking
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your Nutrition with
            <span className="text-blue-500"> Intelligent Macro Planning</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take control of your nutrition with our advanced macro tracking system. Let our AI help you achieve your fitness goals through precise macro management.
          </p>
          <Link
            to="/features/macro"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg"
          >
            Start Your Journey
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-500" />
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
                    className="w-full rounded-lg shadow-md"
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-8">Achieve Your Fitness Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "Muscle Gain",
                description: "Optimize protein intake and caloric surplus for maximum muscle growth"
              },
              {
                icon: Scale,
                title: "Weight Loss",
                description: "Create the perfect caloric deficit while maintaining essential nutrients"
              },
              {
                icon: Target,
                title: "Performance",
                description: "Fine-tune your macro ratios for peak athletic performance"
              }
            ].map((goal, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <goal.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/features/macro"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg"
          >
            Try Macro Planning Now
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}