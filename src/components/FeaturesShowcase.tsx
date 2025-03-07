import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Scale, CalendarDays, ArrowRight } from 'lucide-react';

export default function FeaturesShowcase() {
  const features = [
    {
      title: "AI Recipe Assistant",
      icon: Brain,
      color: "purple",
      description: "Our advanced AI analyzes your ingredients and preferences to generate personalized recipes instantly.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      benefits: [
        "Smart ingredient analysis",
        "Real-time recipe generation",
        "Personalized recommendations"
      ],
      link: "/features/culinary"
    },
    {
      title: "Smart Nutrition AI",
      icon: Scale,
      color: "blue",
      description: "Advanced AI-powered system for precise nutrition tracking and optimization.",
      image: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
      benefits: [
        "AI-powered macro analysis",
        "Real-time nutrition insights",
        "Smart goal optimization"
      ],
      link: "/features/macro"
    },
    {
      title: "Intelligent Meal Planning",
      icon: CalendarDays,
      color: "indigo",
      description: "AI-driven meal planning that adapts to your preferences and schedule.",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d",
      benefits: [
        "Dynamic meal scheduling",
        "Smart grocery lists",
        "Automated prep guides"
      ],
      link: "/features/meal"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Powered by Advanced AI
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Tools for Your
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Diet Objectives</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of cooking with our AI-powered platform that learns, adapts, and helps you achieve your nutritional goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              purple: {
                light: 'bg-purple-50',
                border: 'border-purple-100',
                text: 'text-purple-600',
                hover: 'hover:border-purple-300',
                icon: 'bg-purple-100',
                gradient: 'from-purple-500 to-purple-600'
              },
              blue: {
                light: 'bg-blue-50',
                border: 'border-blue-100',
                text: 'text-blue-600',
                hover: 'hover:border-blue-300',
                icon: 'bg-blue-100',
                gradient: 'from-blue-500 to-blue-600'
              },
              indigo: {
                light: 'bg-indigo-50',
                border: 'border-indigo-100',
                text: 'text-indigo-600',
                hover: 'hover:border-indigo-300',
                icon: 'bg-indigo-100',
                gradient: 'from-indigo-500 to-indigo-600'
              }
            }[feature.color];

            return (
              <div 
                key={index}
                className={`rounded-2xl border ${colorClasses.border} overflow-hidden transition-all ${colorClasses.hover} group`}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-90 flex items-center justify-center`}>
                    <div className="text-white">
                      <Icon className="w-12 h-12 mb-2 mx-auto" />
                      <div className="text-lg font-semibold">{feature.title}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className={`w-1.5 h-1.5 rounded-full ${colorClasses.text}`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={feature.link}
                    className={`inline-flex items-center gap-2 text-sm font-medium ${colorClasses.text} hover:gap-3 transition-all`}
                  >
                    Try {feature.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}