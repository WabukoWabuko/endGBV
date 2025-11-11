import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

export default function Header(): React.ReactElement {
  const { user, logout } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/resources', label: 'Resources' },
    { path: '/crisis-tools', label: 'Crisis Tools' },
    { path: '/prevention', label: 'Learn' },
    { path: '/community', label: 'Community' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 font-extrabold text-2xl hover:opacity-90 transition">
            <div className="bg-gradient-to-r from-brand-500 to-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">🛡️</div>
            <span className="text-gray-800">EndGBV</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:opacity-90 transition font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            {/* Emergency Hotline Button */}
            <a
              href="tel:1-800-799-7233"
              className="hotline flex items-center gap-2"
            >
              📞 1-800-799-7233
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl text-gray-600 hover:opacity-90 transition"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4 border-t pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition text-gray-700"
            >
              Logout
            </button>
          </nav>
        )}
      </div>

      {/* Info Bar */}
      <div className="bg-gray-50 px-4 py-2 text-center text-sm text-gray-600">
        <p>
          🔒 Your information is secure and confidential. You can browse anonymously.
        </p>
      </div>
    </header>
  );
}
