/**
 * Main App Component - Router setup and global state initialization
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
import { useResourceStore } from './stores/resourceStore';

// Pages
import Home from './pages/Home';
import Resources from './pages/Resources';
import CrisisTools from './pages/CrisisTools';
import Prevention from './pages/Prevention';
import Community from './pages/Community';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Layout
import Header from './components/Header';
import Footer from './components/Footer';

// global styles imported in main.tsx (src/index.css)

export default function App(): React.ReactElement {
  const { registerAnonymous } = useAuthStore();
  const { fetchResources, fetchHotlines } = useResourceStore();

  // Initialize with anonymous user and load data on mount
  useEffect(() => {
    const initializeApp = async () => {
      try {
        await registerAnonymous();
        await fetchResources();
        await fetchHotlines();
      } catch (error) {
        console.error('Initialization error:', error);
      }
    };

    initializeApp();
  }, [registerAnonymous, fetchResources, fetchHotlines]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/crisis-tools" element={<CrisisTools />} />
            <Route path="/prevention" element={<Prevention />} />
            <Route path="/community" element={<Community />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
