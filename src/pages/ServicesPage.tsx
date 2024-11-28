import React from 'react';
import { Home, Paintbrush, Sofa, Building, Ruler, PenTool, Palette, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Residential Design',
    description: 'Complete home interior design solutions tailored to your lifestyle and preferences.',
    features: ['Space Planning', 'Color Consultation', 'Furniture Selection', 'Lighting Design']
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: 'Commercial Spaces',
    description: 'Professional design services for offices, retail spaces, and commercial properties.',
    features: ['Office Layout', 'Retail Design', 'Corporate Branding', 'Ergonomic Solutions']
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: 'Renovation',
    description: 'Transform your existing space with our expert renovation and redesign services.',
    features: ['Kitchen Remodeling', 'Bathroom Updates', 'Space Optimization', 'Material Selection']
  },
  {
    icon: <Sofa className="h-8 w-8" />,
    title: 'Custom Furniture',
    description: 'Bespoke furniture design and manufacturing to perfectly fit your space.',
    features: ['Custom Design', 'Material Selection', 'Manufacturing', 'Installation']
  },
  {
    icon: <Ruler className="h-8 w-8" />,
    title: 'Space Planning',
    description: 'Optimize your space for maximum functionality and flow.',
    features: ['Layout Design', 'Traffic Flow', 'Zoning', 'Accessibility']
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: '3D Visualization',
    description: 'Realistic 3D renderings to help you visualize your space before construction.',
    features: ['3D Modeling', 'Virtual Tours', 'Material Visualization', 'Lighting Simulation']
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'Color Consultation',
    description: 'Expert color schemes that create the perfect atmosphere for your space.',
    features: ['Color Psychology', 'Paint Selection', 'Material Coordination', 'Lighting Impact']
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Lighting Design',
    description: 'Strategic lighting solutions that enhance both function and ambiance.',
    features: ['Natural Light', 'Artificial Lighting', 'Mood Setting', 'Energy Efficiency']
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive interior design solutions for every space and style
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-gray-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}