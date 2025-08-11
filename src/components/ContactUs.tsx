import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-200 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Ready to get started with financial literacy education? Reach out to us through any of the channels below.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">info@financialliteracy.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM IST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Office</h4>
                <p className="text-gray-600">123 Education Street</p>
                <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Business Hours</h4>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-sm text-gray-500">Closed on Sundays and Public Holidays</p>
              </div>
            </div>
          </div>

          {/* Quick Response Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response</h3>
            <p className="text-gray-600 mb-6">
              For immediate assistance or to schedule a demo, please call us directly or send us an email. 
              Our team is ready to help you implement financial literacy in your institution.
            </p>
            
            <div className="space-y-4">
              <button 
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => window.open('mailto:info@financialliteracy.com', '_blank')}
              >
                Send Email
              </button>
              
              <button 
                className="w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                onClick={() => window.open('tel:+919876543210', '_blank')}
              >
                Call Now
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Pro Tip:</strong> Mention "Financial Literacy Program" when calling for faster assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 