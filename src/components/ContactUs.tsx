import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const EMAIL = 'chitkararajat24@gmail.com';
const PHONE_DISPLAY = '+91 90417 11631';
const PHONE_HREF = 'tel:+919041711631';

export default function ContactUs() {
  const details = [
    {
      icon: Mail,
      title: 'Email',
      lines: [EMAIL],
      note: "We'll respond within 24 hours",
      href: `mailto:${EMAIL}`
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: [PHONE_DISPLAY],
      note: 'Mon-Fri, 11 AM - 6 PM IST',
      href: PHONE_HREF
    },
    {
      icon: MapPin,
      title: 'Office',
      lines: ['Chandigarh, India'],
      note: null,
      href: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      lines: ['Monday - Friday: 11:00 AM - 6:00 PM', 'Saturday: 11:00 AM - 2:00 PM'],
      note: 'Closed on Sundays and Public Holidays',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white scroll-animate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to get started with financial literacy education? Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-on-scroll">
          {/* Contact details */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.map((item) => {
              const content = (
                <>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-gray-600 text-sm break-words">
                        {line}
                      </p>
                    ))}
                    {item.note && <p className="text-xs text-gray-500 mt-1">{item.note}</p>}
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-4 bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-md transition-all"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white rounded-xl border border-gray-200 p-5"
                >
                  {content}
                </div>
              );
            })}
          </div>

          {/* Quick response */}
          <div className="lg:col-span-2 bg-slate-50 rounded-2xl border border-gray-200 p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Response</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              For immediate assistance or to schedule a demo, call us directly or send an email. Our team is ready to
              help you implement financial literacy in your institution.
            </p>

            <div className="space-y-3 mt-auto">
              <a
                href={`mailto:${EMAIL}?subject=FinSim%20Enquiry`}
                className="block text-center w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Email
              </a>
              <a
                href={PHONE_HREF}
                className="block text-center w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Call Now
              </a>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-900">
                <strong>Pro tip:</strong> Mention &ldquo;Financial Literacy Program&rdquo; when calling for faster
                assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
