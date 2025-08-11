import React from 'react';
import { Check, Star, Users, Building } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Classroom",
      price: "Free",
      period: "per month",
      originalPrice: "₹3,000",
      description: "Perfect for individual teachers and small classrooms",
      icon: Users,
      features: [
        "Up to 30 students",
        "Core financial modules",
        "Basic reporting",
        "Email support",
        "Student progress tracking",
        "Curriculum guides"
      ],
      popular: false,
      promotional: true
    },
    {
      name: "School",
      price: "₹10,000",
      period: "per month",
      description: "Ideal for schools and departments",
      icon: Building,
      features: [
        "Up to 200 students",
        "All financial modules",
        "Advanced analytics",
        "Priority support",
        "Teacher training",
        "Custom branding",
        "Integration support",
        "Bulk student management"
      ],
      popular: true
    },
    {
      name: "District",
      price: "Custom",
      period: "pricing",
      description: "For large institutions and districts",
      icon: Star,
      features: [
        "Unlimited students",
        "All premium features",
        "Dedicated support",
        "Custom development",
        "API access",
        "Advanced integrations",
        "Professional training",
        "Success manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your institution's needs. All plans include our core financial literacy curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll stagger-children">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in-up ${
                plan.popular ? 'border-blue-600 scale-105' : 'border-gray-200 hover:border-blue-300'
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    plan.popular ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-blue-600' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    {plan.promotional ? (
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                          <span className="text-gray-600">{plan.period}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          <span className="line-through">{plan.originalPrice}</span> per month
                        </div>
                        <div className="text-xs text-green-600 font-semibold mt-1">
                          🎉 Limited Time Offer!
                        </div>
                      </div>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
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
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We work with large educational institutions to create tailored financial literacy programs. 
              Contact our team to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Us
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
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
        </div>
      </div>
    </section>
  );
}
