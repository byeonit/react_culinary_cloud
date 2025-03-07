import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Utensils,
  Scale,
  CalendarDays,
  ChefHat,
  Brain,
  History,
  ShoppingCart
} from 'lucide-react';

const menuItems = [
  {
    icon: Utensils,
    title: 'Culinary AI',
    description: 'Transform ingredients into delicious meals with AI-powered recipe generation',
    href: '/features/culinary',
    subItems: [
      { title: 'Recipe Generator', href: '/features/demo-recipe' },
      { title: 'Feature Overview', href: '/promo/culinary' }
    ]
  },
  {
    icon: Scale,
    title: 'Macro Tracker',
    description: 'Track your nutrition goals with smart macro planning and analysis',
    href: '/features/macro',
    subItems: [
      { title: 'Macro Calculator', href: '/features/demo-macro-recipe' },
      { title: 'Feature Overview', href: '/promo/macro' }
    ]
  },
  {
    icon: CalendarDays,
    title: 'Meal Planner',
    description: 'Create personalized meal plans based on your preferences',
    href: '/features/meal',
    subItems: [
      { title: 'Demo Planner', href: '/features/demo-meal-planner' },
      { title: 'Feature Overview', href: '/promo/meal-planner' }
    ]
  },
  {
    icon: ShoppingCart,
    title: 'Shopping Planner',
    description: 'Manage your inventory and create smart shopping lists',
    href: '/features/shopping',
    subItems: [
      { title: 'Inventory Manager', href: '/features/inventory' },
      { title: 'Shopping Lists', href: '/features/shopping-lists' }
    ]
  },
  {
    icon: History,
    title: 'Meal History',
    description: 'View and manage your past meal plans and recipes',
    href: '/features/demo-meal-planner-historic'
  },
  {
    icon: Brain,
    title: 'Macro History',
    description: 'Track your progress and analyze your nutrition data',
    href: '/features/macro-meal-plan-history'
  }
];

export default function FeatureDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveItem(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-gray-600 hover:text-orange-500 transition-colors py-2">
        Features
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-[800px] bg-white rounded-xl shadow-lg p-6 z-50">
          <div className="grid grid-cols-2 gap-4">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveItem(item.title)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <Link
                  to={item.href}
                  className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                      
                      {item.subItems && activeItem === item.title && (
                        <div className="mt-3 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              className="block text-sm text-gray-600 hover:text-orange-500 py-1"
                            >
                              {subItem.title} →
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}