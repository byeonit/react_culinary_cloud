import React from 'react';

interface StepHeaderProps {
  currentStep: number;
  totalSteps: number;
  title: string;
  description?: string;
}

export default function StepHeader({ currentStep, totalSteps, title, description }: StepHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          <span>Step {currentStep}</span>
          <span className="text-blue-400">/</span>
          <span className="text-blue-500">{totalSteps}</span>
        </div>
        <div className="h-px flex-1 bg-gray-200" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
      {description && (
        <p className="text-gray-600">{description}</p>
      )}
    </div>
  );
}