import React from 'react';

const projects = [
  {
    title: 'Modern Minimalist Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Urban Loft Design',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Tech Startup Office',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Luxury Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">
            Explore our portfolio of thoughtfully designed spaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3]">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8">
                  <span className="text-white/80 text-sm uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-2xl font-semibold text-white mt-2">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}