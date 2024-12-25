import { Scale, Clock, Target, Dumbbell } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const journeySteps: JourneyStep[] = [
  {
    icon: Scale,
    title: 'Set Macros',
    description: 'Define your macro goals'
  },
  {
    icon: Clock,
    title: 'Meal Selection',
    description: 'Choose your meal type'
  },
  {
    icon: Target,
    title: 'Dietary Needs',
    description: 'Specify dietary preferences'
  },
  {
    icon: Dumbbell,
    title: 'Generate Plan',
    description: 'Create your meal plan'
  }
];