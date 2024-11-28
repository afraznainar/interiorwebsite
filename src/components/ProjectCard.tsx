import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function ProjectCard({ title, category, image, description }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="aspect-[4/3]">
        <img 
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop';
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <div className="p-8">
          <span className="text-white/80 text-sm uppercase tracking-wider">{category}</span>
          <h3 className="text-2xl font-semibold text-white mt-2">{title}</h3>
          <p className="text-white/90 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}