import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src="/public/assets/image 12.png"
              alt="FinSim Logo"
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold text-gray-900">FinSim</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-gray-700 hover:text-blue-600 transition-colors">Overview</a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">Demo</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <a href="#overview" className="block py-2 text-gray-700 hover:text-blue-600">Overview</a>
            <a href="#demo" className="block py-2 text-gray-700 hover:text-blue-600">Demo</a>
            <a href="#pricing" className="block py-2 text-gray-700 hover:text-blue-600">Pricing</a>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-2"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
