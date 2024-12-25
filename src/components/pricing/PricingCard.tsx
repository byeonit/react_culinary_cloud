import React from 'react';
import PricingFeature from './PricingFeature';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

export default function PricingCard({ name, price, description, features, highlighted, buttonText }: PricingTier) {
  return (
    <div className={`p-8 rounded-2xl ${
      highlighted 
        ? 'bg-orange-50 border-2 border-orange-500 shadow-xl' 
        : 'bg-white border border-gray-200 shadow-md'
    }`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Free' && <span className="text-gray-600">/month</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <PricingFeature 
            key={index} 
            text={feature} 
            included={true} 
          />
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
        highlighted
          ? 'bg-orange-500 text-white hover:bg-orange-600'
          : 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50'
      }`}>
        {buttonText}
      </button>
    </div>
  );
}