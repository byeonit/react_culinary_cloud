import React from 'react';
import GuideCategories from '../components/guides/GuideCategories';
import FeaturedGuide from '../components/guides/FeaturedGuide';
import GuidesList from '../components/guides/GuidesList';
import TipOfTheDay from '../components/guides/TipOfTheDay';

export default function Guides() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cooking Guides & Techniques</h1>
          <p className="text-xl text-gray-600">Master the art of cooking with our expert-crafted guides</p>
        </div>
        
        <FeaturedGuide />
        <GuideCategories />
        <GuidesList />
        <TipOfTheDay />
      </div>
    </div>
  );
}