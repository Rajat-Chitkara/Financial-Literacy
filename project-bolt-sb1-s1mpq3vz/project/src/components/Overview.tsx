import React from 'react';
import { Brain, Target, Users, BarChart3 } from 'lucide-react';

export default function Overview() {
  const features = [
    {
      icon: Brain,
      title: "Financial Knowledge",
      description: "Comprehensive curriculum covering budgeting, investing, loans, and financial planning fundamentals."
    },
    {
      icon: Target,
      title: "Financial Behavior",
      description: "Develop healthy financial habits through simulated real-world scenarios and decision-making exercises."
    },
    {
      icon: Users,
      title: "Financial Attitude",
      description: "Build confidence and positive attitudes towards money management and financial responsibility."
    },
    {
      icon: BarChart3,
      title: "Financial Skills",
      description: "Practice practical skills like budgeting, investment analysis, and financial goal setting."
    }
  ];

  return (
    <section id="overview" className="py-20 bg-white scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FinSim addresses the four pillars of financial literacy through interactive simulation and gamification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll stagger-children">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <feature.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Financial Literacy Matters
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Studies show that students with strong financial literacy are more likely to make informed financial decisions, 
                avoid debt, and build wealth throughout their lives. FinSim makes this critical education engaging and effective.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Improved financial decision-making skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Better preparation for adult financial responsibilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Increased confidence in money management</span>
                </div>
              </div>
            </div>
            <div className="text-center animate-counter">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">85%</div>
                  <div className="text-blue-100">Student Engagement</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">92%</div>
                  <div className="text-blue-100">Knowledge Retention</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">78%</div>
                  <div className="text-blue-100">Behavior Improvement</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">96%</div>
                  <div className="text-blue-100">Teacher Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="mt-20 bg-white rounded-2xl border border-gray-200 p-8 md:p-12 animate-on-scroll">
         <div className="text-center mb-12">
           <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
             Why Interactive Learning is Better than Traditional
           </h3>
           <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
             Research shows that interactive, gamified learning significantly outperforms traditional lecture-based education. 
             FinSim leverages these proven methodologies to create lasting financial literacy.
           </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
             <h4 className="text-xl font-semibold text-gray-900 mb-6">Traditional Learning Challenges</h4>
             <div className="space-y-4 animate-slide-in-left">
               <div className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                 <div>
                   <span className="font-medium text-gray-900">Passive Learning:</span>
                   <span className="text-gray-600 ml-1">Students listen but don't actively engage</span>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                 <div>
                   <span className="font-medium text-gray-900">Abstract Concepts:</span>
                   <span className="text-gray-600 ml-1">Financial concepts remain theoretical</span>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                 <div>
                   <span className="font-medium text-gray-900">Limited Retention:</span>
                   <span className="text-gray-600 ml-1">Information is quickly forgotten</span>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                 <div>
                   <span className="font-medium text-gray-900">No Real Practice:</span>
                   <span className="text-gray-600 ml-1">Students can't practice decision-making safely</span>
                 </div>
               </div>
             </div>
           </div>

           <div>
             <h4 className="text-xl font-semibold text-gray-900 mb-6">FinSim Interactive Advantages</h4>
             <div className="space-y-4 animate-slide-in-right">
               <div className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                 <div>
                   <span className="font-medium text-gray-900">Active Participation:</span>
                   <span className="text-gray-600 ml-1">Students make decisions and see consequences</span>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                 <div>
                   <span className="font-medium text-gray-900">Real-World Application:</span>
                   <span className="text-gray-600 ml-1">Practical scenarios mirror actual financial situations</span>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                 <div>
                   <span className="font-medium text-gray-900">Enhanced Memory:</span>
                   <span className="text-gray-600 ml-1">Learning through experience creates lasting memories</span>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                 <div>
                   <span className="font-medium text-gray-900">Safe Environment:</span>
                   <span className="text-gray-600 ml-1">Risk-free practice builds confidence</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 animate-on-scroll">
           <div className="text-center">
             <h5 className="text-lg font-semibold text-gray-900 mb-3">Research-Backed Results</h5>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-counter">
               <div>
                 <div className="text-2xl font-bold text-green-600 mb-1">75%</div>
                 <div className="text-sm text-gray-600">Higher retention rate with interactive learning</div>
               </div>
               <div>
                 <div className="text-2xl font-bold text-blue-600 mb-1">3x</div>
                 <div className="text-sm text-gray-600">More engagement than traditional methods</div>
               </div>
               <div>
                 <div className="text-2xl font-bold text-purple-600 mb-1">90%</div>
                 <div className="text-sm text-gray-600">Students prefer gamified learning</div>
               </div>
             </div>
           </div>
         </div>
       </div>
    </section>
  );
}