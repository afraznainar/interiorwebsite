import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function TestimonialsPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Stories</h1>
            <p className="text-xl text-gray-600">
              Hear what our clients say about their experience with ELITE DZYNZ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}