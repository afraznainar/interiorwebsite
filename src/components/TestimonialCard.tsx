import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialType } from '../types/testimonial';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="grid md:grid-cols-2">
        <div className="aspect-[4/3] md:aspect-auto">
          <img 
            src={testimonial.image}
            alt={`Project for ${testimonial.name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <Quote className="h-8 w-8 text-gray-300 mb-4" />
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-6">{testimonial.content}</p>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
            <p className="text-gray-500 text-sm mt-1">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}