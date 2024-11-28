import React from 'react';
import { Home, Paintbrush, Sofa, Building } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Residential Design',
    description: 'Complete home interior design solutions tailored to your lifestyle and preferences.'
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: 'Commercial Spaces',
    description: 'Professional design services for offices, retail spaces, and commercial properties.'
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: 'Renovation',
    description: 'Transform your existing space with our expert renovation and redesign services.'
  },
  {
    icon: <Sofa className="h-8 w-8" />,
    title: 'Custom Furniture',
    description: 'Bespoke furniture design and manufacturing to perfectly fit your space.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive interior design solutions for every space and style
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-gray-900 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}