import { Scale, Target, Activity, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const journeySteps: JourneyStep[] = [
  {
    icon: Scale,
    title: 'BMI Calculator',
    description: 'Calculate your BMI'
  },
  {
    icon: Target,
    title: 'Set Goals',
    description: 'Define your objectives'
  },
  {
    icon: Activity,
    title: 'Activity Level',
    description: 'Your daily activity'
  },
  {
    icon: Utensils,
    title: 'Preferences',
    description: 'Dietary preferences'
  }
];