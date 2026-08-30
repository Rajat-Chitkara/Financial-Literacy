import React from 'react';
import { Brain, Target, Users, BarChart3, X, Check } from 'lucide-react';

export default function Overview() {
  const features = [
    {
      icon: Brain,
      title: 'Financial Knowledge',
      description: 'Comprehensive curriculum covering budgeting, investing, loans, and financial planning fundamentals.'
    },
    {
      icon: Target,
      title: 'Financial Behavior',
      description: 'Develop healthy financial habits through simulated real-world scenarios and decision-making exercises.'
    },
    {
      icon: Users,
      title: 'Financial Attitude',
      description: 'Build confidence and positive attitudes towards money management and financial responsibility.'
    },
    {
      icon: BarChart3,
      title: 'Financial Skills',
      description: 'Practice practical skills like budgeting, investment analysis, and financial goal setting.'
    }
  ];

  const outcomes = [
    { value: '85%', label: 'Student Engagement' },
    { value: '92%', label: 'Knowledge Retention' },
    { value: '78%', label: 'Behavior Improvement' },
    { value: '96%', label: 'Teacher Satisfaction' }
  ];

  const traditional = [
    { term: 'Passive Learning', detail: 'Students listen but do not actively engage' },
    { term: 'Abstract Concepts', detail: 'Financial concepts remain theoretical' },
    { term: 'Limited Retention', detail: 'Information is quickly forgotten' },
    { term: 'No Real Practice', detail: 'Students cannot practice decision-making safely' }
  ];

  const finsim = [
    { term: 'Active Participation', detail: 'Students make decisions and see consequences' },
    { term: 'Real-World Application', detail: 'Practical scenarios mirror actual financial situations' },
    { term: 'Enhanced Memory', detail: 'Learning through experience creates lasting memories' },
    { term: 'Safe Environment', detail: 'Risk-free practice builds confidence' }
  ];

  const research = [
    { value: '75%', color: 'text-green-600', label: 'Higher retention rate with interactive learning' },
    { value: '3x', color: 'text-blue-600', label: 'More engagement than traditional methods' },
    { value: '90%', color: 'text-purple-600', label: 'Students prefer gamified learning' }
  ];

  return (
    <section id="overview" className="py-20 bg-slate-50 border-b border-gray-200 scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            The Four Pillars
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FinSim addresses the four pillars of financial literacy through interactive simulation and gamification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll stagger-children">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-6 text-center hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why it matters */}
        <div className="mt-20 bg-blue-600 rounded-2xl p-8 md:p-12 text-white animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Financial Literacy Matters</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Studies show that students with strong financial literacy are more likely to make informed financial
                decisions, avoid debt, and build wealth throughout their lives. FinSim makes this critical education
                engaging and effective.
              </p>
              <div className="space-y-3">
                {[
                  'Improved financial decision-making skills',
                  'Better preparation for adult financial responsibilities',
                  'Increased confidence in money management'
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-200 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-blue-500 rounded-xl overflow-hidden animate-counter">
              {outcomes.map((outcome) => (
                <div key={outcome.label} className="bg-blue-600 p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-1">{outcome.value}</div>
                  <div className="text-blue-100 text-sm">{outcome.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traditional vs FinSim */}
        <div className="mt-20 animate-on-scroll">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Gamified Learning Beats Traditional Financial Education
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Research shows that interactive, gamified learning significantly outperforms traditional lecture-based
              education. FinSim leverages these proven methodologies to create lasting financial literacy.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 md:p-8 animate-slide-in-left">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-600" />
                </span>
                Traditional Learning
              </h4>
              <div className="space-y-5">
                {traditional.map((item) => (
                  <div key={item.term}>
                    <p className="font-medium text-gray-900">{item.term}</p>
                    <p className="text-gray-600 text-sm mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* centre divider */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center">
              <span className="text-xs font-bold text-gray-400 uppercase">vs</span>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 md:p-8 animate-slide-in-right">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </span>
                FinSim Interactive
              </h4>
              <div className="space-y-5">
                {finsim.map((item) => (
                  <div key={item.term}>
                    <p className="font-medium text-gray-900">{item.term}</p>
                    <p className="text-gray-600 text-sm mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8">
            <h4 className="text-center text-lg font-semibold text-gray-900 mb-8">Research-Backed Results</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-counter">
              {research.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600 max-w-xs mx-auto">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
