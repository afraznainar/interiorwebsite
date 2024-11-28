import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Home className="h-8 w-8 text-gray-900" />
            <span className="ml-2 text-xl font-semibold text-gray-900">ELITE DZYNZ</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-gray-600 hover:text-gray-900 ${location.pathname === '/' ? 'text-gray-900' : ''}`}>
              Home
            </Link>
            <Link to="/services" className={`text-gray-600 hover:text-gray-900 ${location.pathname === '/services' ? 'text-gray-900' : ''}`}>
              Services
            </Link>
            <Link to="/projects" className={`text-gray-600 hover:text-gray-900 ${location.pathname === '/projects' ? 'text-gray-900' : ''}`}>
              Projects
            </Link>
            <Link to="/testimonials" className={`text-gray-600 hover:text-gray-900 ${location.pathname === '/testimonials' ? 'text-gray-900' : ''}`}>
              Testimonials
            </Link>
            <Link to="/contact" className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Services</Link>
            <Link to="/projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</Link>
            <Link to="/testimonials" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Testimonials</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}