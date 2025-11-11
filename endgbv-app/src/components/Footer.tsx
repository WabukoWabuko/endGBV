import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-slate-900 text-gray-200 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              EndGBV
            </h3>
            <p className="text-sm leading-relaxed">
              Supporting survivors of gender-based violence with resources, community, and automated crisis response.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/resources" className="hover:text-white transition">
                  Find Help
                </Link>
              </li>
              <li>
                <Link to="/crisis-tools" className="hover:text-white transition">
                  Crisis Tools
                </Link>
              </li>
              <li>
                <Link to="/prevention" className="hover:text-white transition">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-white transition">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Hotlines */}
          <div>
            <h4 className="text-white font-bold mb-4">Hotlines</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:1-800-799-7233" className="hover:text-white transition">
                  National DV: 1-800-799-7233
                </a>
              </li>
              <li>
                <a href="tel:1-800-656-4673" className="hover:text-white transition">
                  RAINN: 1-800-656-4673
                </a>
              </li>
              <li>
                <a href="tel:1-844-888-FREE" className="hover:text-white transition">
                  Trafficking: 1-844-888-FREE
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#accessibility" className="hover:text-white transition">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Call to Action */}
          <div className="card mb-8 text-center">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">In Crisis?</h3>
            <p className="mb-4 text-gray-600">Call 1-800-799-7233 or text "START" to 88788</p>
            <button className="btn-primary">
              Get Help Now
            </button>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">&copy; 2024 EndGBV. All rights reserved. Empowering survivors globally.</p>
            <div className="flex items-center gap-4">
              <p>Follow us:</p>
              <div className="flex gap-3">
                <a href="#" className="hover:text-white transition">
                  Facebook
                </a>
                <a href="#" className="hover:text-white transition">
                  Twitter
                </a>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
