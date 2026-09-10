import React from 'react';
import { Users, TrendingUp, Award, Sparkles, ArrowRight, LineChart } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-blue-50 border-b border-gray-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left animate-slide-up">
            <span className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Financial literacy for schools &amp; colleges
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Make Financial Literacy
              <span className="text-blue-600"> Fun </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              FinSim is a comprehensive financial simulation game that transforms how students learn about money.
              We tackle financial knowledge, behavior, attitude, and skills through engaging gameplay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up-delay">
              <a
                href="https://finsim-navy.vercel.app/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Try for Free
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-300 hover:text-blue-700 transition-all transform hover:scale-105 shadow-sm"
                onClick={scrollToContact}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right: teacher dashboard preview */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/5 overflow-hidden">
              {/* browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-gray-400 font-medium truncate">
                  finsimlabs.com/teacher-dashboard
                </span>
              </div>
              <picture>
                <source srcSet="/assets/teacher-dashboard.webp" type="image/webp" />
                <img
                  src="/assets/teacher-dashboard.png"
                  width={886}
                  height={556}
                  fetchPriority="high"
                  alt="FinSim teacher dashboard showing student progress tracking, classroom overview and performance analytics"
                  className="block w-full h-auto"
                />
              </picture>
            </div>

            {/* floating stat card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-xl shadow-xl ring-1 ring-gray-900/5 px-5 py-4">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <LineChart className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">Student progress</p>
                <p className="text-xs text-gray-500">Tracked in real time</p>
              </div>
            </div>
          </div>
        </div>

        {/* feature row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 lg:mt-24 animate-stagger-in">
          <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-200 p-5 text-left">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">For Schools &amp; Colleges</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Designed specifically for educational institutions to enhance financial literacy curriculum</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/70 backdrop-blur rounded-xl border border-gray-100 p-5 text-left">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Real-World Skills</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Practical financial skills that students can apply in their daily lives and future careers</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/70 backdrop-blur rounded-xl border border-gray-100 p-5 text-left">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Engaging Gameplay</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Gamified learning experience that keeps students motivated and engaged</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
