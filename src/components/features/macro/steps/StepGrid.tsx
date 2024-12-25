import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StepGridProps {
  steps: Step[];
  currentStep: number;
}

export default function StepGrid({ steps, currentStep }: StepGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {steps.map((step, index) => {
        const isActive = currentStep === index + 1;
        const Icon = step.icon;

        return (
          <div
            key={index}
            className={`p-4 rounded-xl border-2 transition-all ${
              isActive
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-gray-50 opacity-60'
            }`}
          >
            <Icon className={`w-6 h-6 mb-2 ${
              isActive ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <h3 className={`font-medium mb-1 ${
              isActive ? 'text-gray-900' : 'text-gray-500'
            }`}>
              {step.title}
            </h3>
            <p className={`text-sm ${
              isActive ? 'text-gray-600' : 'text-gray-400'
            }`}>
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}