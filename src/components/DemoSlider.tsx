import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const slides = [
  {
    title: 'Teacher Dashboard',
    short: 'Teacher Dashboard',
    description:
      'A comprehensive dashboard designed for teachers to monitor and track all students in their classroom. Get real-time insights into student progress, engagement levels, and learning outcomes across all financial modules.',
    image: '/assets/teacher-dashboard',
    features: ['Student progress tracking', 'Classroom overview', 'Performance analytics', 'Engagement metrics']
  },
  {
    title: 'Financial DNA Report',
    short: 'Financial DNA',
    description:
      'Generated at the end of every month based on student gameplay, this comprehensive report provides a complete financial profile summary. It analyzes student behavior patterns and financial decision-making skills.',
    image: '/assets/financial-dna',
    features: ['Monthly behavior analysis', 'Financial profile summary', 'Decision pattern insights', 'Personalized recommendations']
  },
  {
    title: 'Life Simulation Gameplay',
    short: 'Life Simulation',
    description:
      'Immersive life simulation covering all major financial decisions throughout life. Students navigate real-world scenarios from budgeting and investing to major purchases, loans, and retirement planning.',
    image: '/assets/life-simulation',
    features: ['Life-stage scenarios', 'Major financial decisions', 'Real-world simulations', 'Comprehensive financial planning']
  },
  {
    title: 'Student Dashboard',
    short: 'Student Dashboard',
    description:
      'Personalized student dashboard where learners can track their progress, view achievements, and continue their financial learning journey. Gamified elements keep students engaged and motivated.',
    image: '/assets/student-dashboard',
    features: ['Progress tracking', 'Achievement system', 'Learning path visualization', 'Gamified experience']
  }
];

export default function DemoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const demo = document.getElementById('demo');
      if (!demo) return;
      const rect = demo.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
      if (!inView) return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = slides[currentSlide];

  return (
    <section id="demo" className="py-20 bg-white border-b border-gray-200 scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Product Tour
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Demo: Experience FinSim in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our interactive demo to see how FinSim transforms financial education through engaging gameplay
          </p>
        </div>

        {/* Thumbnail tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
          {slides.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setCurrentSlide(index)}
              aria-current={index === currentSlide}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {item.short}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Side */}
            <div key={`copy-${currentSlide}`} className="p-8 lg:p-12 flex flex-col justify-center animate-slide-fade">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Demo {currentSlide + 1} of {slides.length}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">{slide.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{slide.description}</p>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {slide.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  aria-label="Previous demo"
                  className="p-2.5 rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next demo"
                  className="p-2.5 rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="hidden sm:inline text-sm text-gray-400 ml-2">
                  Arrow keys to browse &middot; scroll the preview to see the full screen
                </span>
              </div>
            </div>

            {/* Image Side */}
            <div className="bg-slate-100 p-8 lg:p-12 flex items-center justify-center">
              <div
                key={`img-${currentSlide}`}
                className="w-full rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/5 overflow-hidden animate-slide-fade"
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="relative">
                  <div className="demo-scroll aspect-[16/10] overflow-y-auto overscroll-contain bg-white">
                    <picture>
                      <source srcSet={`${slide.image}.webp`} type="image/webp" />
                      <img
                        src={`${slide.image}.png`}
                        alt={`FinSim ${slide.title} screen`}
                        loading="lazy"
                        className="block w-full h-auto"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 p-6 bg-slate-50 border-t border-gray-200">
            {slides.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to ${item.short}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
