import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const EMAIL = 'chitkararajat24@gmail.com';
const PHONE_DISPLAY = '+91 90417 11631';
const PHONE_HREF = 'tel:+919041711631';
const DEMO_URL = 'https://finsim-navy.vercel.app/#/';

export default function Footer() {
  const productLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Demo', href: '#demo' },
    { label: 'Try the Demo', href: DEMO_URL, external: true }
  ];

  const supportLinks = [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Email Support', href: `mailto:${EMAIL}` },
    { label: 'Call Us', href: PHONE_HREF }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/Group 3 (1).png"
                alt=""
                width={32}
                height={32}
                className="w-8 h-8 rounded bg-white p-0.5"
              />
              <span className="text-2xl font-bold">FinSim</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transforming financial education through engaging simulation games. Empowering students with the
              knowledge, skills, and confidence to make smart financial decisions.
            </p>
            <div className="space-y-3">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="break-all">{EMAIL}</span>
              </a>
              <a href={PHONE_HREF} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Chandigarh, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FinSim. All rights reserved.
          </p>
          <a href={`mailto:${EMAIL}`} className="text-gray-500 hover:text-white transition-colors text-sm">
            Questions? Get in touch
          </a>
        </div>
      </div>
    </footer>
  );
}
