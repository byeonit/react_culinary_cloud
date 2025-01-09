import React from 'react';
import PricingCard from './PricingCard';

export default function Pricing() {
  const pricingTiers = [
    {
      name: 'Guest Account',
      price: 'Free',
      description: 'Perfect for exploring our platform and basic features',
      buttonText: 'Get Started',
      features: [
        'Browse public recipes',
        'Basic search functionality',
        'View community discussions',
        'Save up to 5 favorite recipes',
        'Access to basic cooking tips'
      ]
    },
    {
      name: 'Basic Account',
      price: 'Free',
      description: 'Enhanced features for registered users',
      buttonText: 'Create Account',
      features: [
        'All Guest features',
        'Create and share recipes',
        'Join cooking communities',
        'Save up to 50 favorite recipes',
        'Basic meal planning tools'
      ]
    },
    {
      name: 'Pro Account',
      price: '$9.99',
      description: 'Advanced features for serious home cooks',
      buttonText: 'Go Pro',
      highlighted: true,
      features: [
        'All Basic features',
        'Advanced recipe organization',
        'Automatic shopping lists',
        'Nutritional analysis',
        'Ad-free experience',
        'Premium video tutorials'
      ]
    },
    {
      name: 'Expert Account',
      price: '$24.99',
      description: 'Professional tools for culinary experts',
      buttonText: 'Upgrade to Expert',
      features: [
        'All Pro features',
        'Recipe scaling tools',
        'Professional recipe templates',
        'Kitchen inventory management',
        'Priority customer support',
        'Access to expert workshops'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Plan</h2>
          <p className="text-xl text-gray-600">
            From casual cooks to culinary experts, we have a plan that's right for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}