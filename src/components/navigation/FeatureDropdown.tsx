import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Utensils,
  Scale,
  CalendarDays,
  ChefHat,
  Brain,
  History
} from 'lucide-react';

const subMenuItems = [
  {
    label: 'Culinary',
    description: 'Expert cooking techniques and tips',
    icon: Utensils,
    href: '/features/culinary',
  },
  {
    label: 'Demo Recipe',
    description: 'View AI generated recipe example',
    icon: ChefHat,
    href: '/features/demo-recipe',
  },
  {
    label: 'Demo Macro Recipe',
    description: 'View AI generated macro recipe',
    icon: Brain,
    href: '/features/demo-macro-recipe',
  },
  {
    label: 'Demo Meal Planner',
    description: 'View sample meal plan',
    icon: CalendarDays,
    href: '/features/demo-meal-planner',
  },
  {
    label: 'Demo Meal Plan History',
    description: 'View meal plan history',
    icon: History,
    href: '/features/demo-meal-planner-historic',
  },
  {
    label: 'Macro',
    description: 'Nutritional tracking and analysis',
    icon: Scale,
    href: '/features/macro',
  },
  {
    label: 'Macro Meal Plan History',
    description: 'View macro meal plan history',
    icon: History,
    href: '/features/macro-meal-plan-history',
  },
  {
    label: 'Meal',
    description: 'Weekly meal planning tools',
    icon: CalendarDays,
    href: '/features/meal',
  },
];

export default function FeatureDropdown() {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="absolute left-0 mt-1 w-80 bg-white rounded-xl shadow-lg py-3 z-50">
          {subMenuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-start gap-3 px-4 py-3 hover:bg-orange-50 transition-colors"
            >
              <item.icon className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <div className="font-medium text-gray-900">{item.label}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}