import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function DemoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Teacher Dashboard",
      description: "A comprehensive dashboard designed for teachers to monitor and track all students in their classroom. Get real-time insights into student progress, engagement levels, and learning outcomes across all financial modules.",
      image: "/assets/Frame 20 (1).png",
      features: ["Student progress tracking", "Classroom overview", "Performance analytics", "Engagement metrics"]
    },
    {
      title: "Financial DNA Report",
      description: "Generated at the end of every month based on student gameplay, this comprehensive report provides a complete financial profile summary. It analyzes student behavior patterns and financial decision-making skills.",
      image: "/assets/Frame 24 (1).png",
      features: ["Monthly behavior analysis", "Financial profile summary", "Decision pattern insights", "Personalized recommendations"]
    },
    {
      title: "Life Simulation Gameplay",
      description: "Immersive life simulation covering all major financial decisions throughout life. Students navigate real-world scenarios from budgeting and investing to major purchases, loans, and retirement planning.",
      image: "/assets/Frame 21 (2).png",
      features: ["Life-stage scenarios", "Major financial decisions", "Real-world simulations", "Comprehensive financial planning"]
    },
    {
      title: "Student Dashboard",
      description: "Personalized student dashboard where learners can track their progress, view achievements, and continue their financial learning journey. Gamified elements keep students engaged and motivated.",
      image: "/assets/Frame 20 (1).png",
      features: ["Progress tracking", "Achievement system", "Learning path visualization", "Gamified experience"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="demo" className="py-20 bg-gray-50 scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience FinSim in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our interactive demo to see how FinSim transforms financial education through engaging gameplay
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                  Demo {currentSlide + 1} of {slides.length}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {slides[currentSlide].description}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {slides[currentSlide].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4">
                {/* Removed Try Interactive Demo button */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-pulse">
                  <Play className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 p-6 bg-gray-50">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
