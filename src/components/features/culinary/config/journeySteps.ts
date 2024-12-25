import { ChefHat, Clock, Heart, Flame, Scale, Timer, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const journeySteps: JourneyStep[] = [
  {
    icon: ChefHat,
    title: 'Select Ingredients',
    description: 'Choose what you have'
  },
  {
    icon: Clock,
    title: 'Choose Meal',
    description: 'Pick your meal type'
  },
  {
    icon: Flame,
    title: 'Cooking Method',
    description: 'Select how you want to cook'
  },
  {
    icon: Scale,
    title: 'Portion Size',
    description: 'Set number of servings'
  },
  {
    icon: Timer,
    title: 'Time Available',
    description: 'How much time you have'
  },
  {
    icon: Heart,
    title: 'Preferences',
    description: 'Dietary requirements'
  },
  {
    icon: Utensils,
    title: 'Skill Level',
    description: 'Your cooking expertise'
  }
];