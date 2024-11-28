import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The attention to detail and understanding of our vision was exceptional. They transformed our house into a dream home.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'Professional, creative, and efficient. Our office space now perfectly reflects our company culture.',
    rating: 5
  },
  {
    name: 'Emma Williams',
    role: 'Property Developer',
    content: 'Their expertise in modern design and space optimization has added significant value to our properties.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Stories</h2>
          <p className="text-xl text-gray-600">
            Hear what our clients say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}