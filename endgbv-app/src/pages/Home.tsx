import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20 rounded-lg shadow-lg">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">You Are Not Alone</h1>
          <p className="text-xl mb-8">
            EndGBV provides immediate support, resources, and community for survivors of gender-based violence. Get help in seconds, not hours.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/crisis-tools')}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              🚨 I Need Help Now
            </button>
            <button
              onClick={() => navigate('/resources')}
              className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition"
            >
              Find Resources
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid md:grid-cols-4 gap-6">
        {[
          { label: 'Hotlines Available', value: '24/7' },
          { label: 'Resources', value: '500+' },
          { label: 'Languages', value: '20+' },
          { label: 'Support Available', value: 'Anonymous' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Main Actions */}
      <section className="grid md:grid-cols-3 gap-6">
        <div
          onClick={() => navigate('/crisis-tools')}
          className="bg-red-50 p-8 rounded-lg border-2 border-red-200 cursor-pointer hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-bold text-red-600 mb-4">🚨 Crisis Tools</h3>
          <p className="text-gray-700">One-click reporting, emergency contacts, and immediate safety planning.</p>
        </div>

        <div
          onClick={() => navigate('/resources')}
          className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200 cursor-pointer hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-4">📍 Find Resources</h3>
          <p className="text-gray-700">Locate nearby hotlines, shelters, legal aid, and counseling services.</p>
        </div>

        <div
          onClick={() => navigate('/prevention')}
          className="bg-green-50 p-8 rounded-lg border-2 border-green-200 cursor-pointer hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-bold text-green-600 mb-4">📚 Learn & Prevent</h3>
          <p className="text-gray-700">Understanding warning signs and prevention strategies for allies.</p>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-200">
        <h2 className="text-2xl font-bold mb-4">⚠️ Warning Signs of Abuse</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {[
            'Controlling behavior & isolation',
            'Excessive jealousy',
            'Intimidation or threats',
            'Physical violence',
            'Emotional humiliation',
            'Financial control',
            'Forced sexual activity',
            'Monitoring location/phone',
          ].map((sign, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{sign}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Community Section */}
      <section className="bg-purple-50 p-8 rounded-lg border-2 border-purple-200">
        <h2 className="text-2xl font-bold mb-4">💬 Join Our Community</h2>
        <p className="text-gray-700 mb-4">
          Connect with other survivors, share stories, and find peer support in our anonymous community forums.
        </p>
        <button
          onClick={() => navigate('/community')}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition"
        >
          Visit Community
        </button>
      </section>
    </div>
  );
}
