import React from 'react';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Home Chef & Food Blogger",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "CulinaryCloud transformed how I organize my recipes. The meal planning feature saves me hours each week, and I've discovered so many amazing recipes from the community!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Busy Parent & Cooking Enthusiast",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      content: "As a working parent, this app is a lifesaver. The shopping list feature and quick recipes section help me prepare healthy meals for my family despite my busy schedule.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Culinary Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "The step-by-step instructions and video guides have helped me master new techniques. It's like having a cooking school in your pocket!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">Join thousands of happy home cooks who love using CulinaryCloud</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}