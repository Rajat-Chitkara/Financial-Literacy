import React from 'react';
import { Play, Users, TrendingUp, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Make Finance Learning
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Fun</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            FinSim is a comprehensive financial simulation game that transforms how students learn about money. 
            We tackle financial knowledge, behavior, attitude, and skills through engaging gameplay.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up-delay">
  <button
    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
    onClick={() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    Contact Us
  </button>
  <a
    href="https://quiet-sprinkles-0c1ef8.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
  >
    Try Demo
  </a>
</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-stagger-in">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Schools & Colleges</h3>
              <p className="text-gray-600">Designed specifically for educational institutions to enhance financial literacy curriculum</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-World Skills</h3>
              <p className="text-gray-600">Practical financial skills that students can apply in their daily lives and future careers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Engaging Gameplay</h3>
              <p className="text-gray-600">Gamified learning experience that keeps students motivated and engaged</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
