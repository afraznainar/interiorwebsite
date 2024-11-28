import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Space Into a 
              <span className="block text-gray-600">Masterpiece</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Experience luxury interior design that perfectly balances aesthetics and functionality. 
              Let's create spaces that inspire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowForm(true)}
                type="button"
                className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                type="button"
                className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
              alt="Modern living room"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {showForm && (
        <ContactForm onClose={() => setShowForm(false)} />
      )}
    </section>
  );
}