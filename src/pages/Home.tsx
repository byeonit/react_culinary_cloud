import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FeaturesShowcase from '../components/FeaturesShowcase';
import RecipeShowcase from '../components/RecipeShowcase';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/pricing/Pricing';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturesShowcase />
      <RecipeShowcase />
      <Testimonials />
      <Pricing />
    </main>
  );
}