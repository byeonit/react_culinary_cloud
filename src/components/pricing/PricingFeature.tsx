import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeatureProps {
  text: string;
  included: boolean;
}

export default function PricingFeature({ text, included }: PricingFeatureProps) {
  return (
    <li className="flex items-center gap-2">
      <Check className={`w-5 h-5 ${included ? 'text-orange-500' : 'text-gray-300'}`} />
      <span className={included ? 'text-gray-700' : 'text-gray-400'}>{text}</span>
    </li>
  );
}