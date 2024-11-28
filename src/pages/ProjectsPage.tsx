import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import CategoryFilter from '../components/CategoryFilter';
import { projects, categories } from '../data/projects';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
            <p className="text-xl text-gray-600">
              Explore our portfolio of thoughtfully designed spaces
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}