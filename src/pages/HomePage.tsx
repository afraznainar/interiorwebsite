import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}