import React, { useState } from 'react';

export default function Prevention(): React.ReactElement {
  const [selectedCategory, setSelectedCategory] = useState('warning-signs');

  const categories = [
    { id: 'warning-signs', label: '⚠️ Warning Signs' },
    { id: 'safety-tips', label: '🛡️ Safety Tips' },
    { id: 'recovery', label: '💚 Recovery Resources' },
    { id: 'ally-guide', label: '🤝 For Allies' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">📚 Learn & Prevent</h1>
        <p className="text-gray-600">
          Education, prevention resources, and guides for survivors and allies.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              selectedCategory === cat.id
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Warning Signs */}
      {selectedCategory === 'warning-signs' && (
        <div className="space-y-6">
          <div className="bg-red-50 p-8 rounded-lg border-2 border-red-300">
            <h2 className="text-2xl font-bold text-red-600 mb-6">Early Warning Signs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Controlling Behavior',
                  signs: [
                    'Monitoring your location constantly',
                    'Checking your phone or emails without permission',
                    'Controlling who you see or spend time with',
                    'Making decisions for you',
                  ],
                },
                {
                  title: 'Emotional Manipulation',
                  signs: [
                    'Making you feel worthless or stupid',
                    'Blaming you for their abusive behavior',
                    'Using your children as leverage',
                    'Threatening to harm themselves if you leave',
                  ],
                },
                {
                  title: 'Physical Aggression',
                  signs: [
                    'Pushing, slapping, or hitting',
                    'Throwing objects at you',
                    'Destroying your belongings',
                    'Driving recklessly to frighten you',
                  ],
                },
                {
                  title: 'Financial Control',
                  signs: [
                    'Controlling all bank accounts and finances',
                    'Preventing you from working',
                    'Running up debt in your name',
                    'Demanding to know how you spend money',
                  ],
                },
              ].map((category, i) => (
                <div key={i} className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-600 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.signs.map((sign, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                        <span className="text-gray-700">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Safety Tips */}
      {selectedCategory === 'safety-tips' && (
        <div className="space-y-6">
          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Safety Planning Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '🏠',
                  title: 'At Home',
                  tips: [
                    'Know your exits and have a bag packed',
                    'Keep important documents accessible',
                    'Memorize your emergency numbers',
                    'Have a safe code word with trusted friends',
                  ],
                },
                {
                  icon: '📱',
                  title: 'Digital Safety',
                  tips: [
                    'Use a safe email account',
                    'Clear your browser history',
                    'Use private browsing mode',
                    'Keep devices in a safe place',
                  ],
                },
                {
                  icon: '👥',
                  title: 'Social Support',
                  tips: [
                    'Maintain connection with trusted friends',
                    'Don\'t isolate yourself',
                    'Build your support network',
                    'Share your location with one trusted person',
                  ],
                },
                {
                  icon: '⚡',
                  title: 'Emergency Preparedness',
                  tips: [
                    'Know where to go if you need to leave',
                    'Have money hidden away',
                    'Know multiple escape routes',
                    'Practice your safety plan regularly',
                  ],
                },
              ].map((section, i) => (
                <div key={i} className="bg-white p-6 rounded-lg">
                  <h3 className="text-3xl mb-3">{section.icon}</h3>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recovery */}
      {selectedCategory === 'recovery' && (
        <div className="space-y-6">
          <div className="bg-green-50 p-8 rounded-lg border-2 border-green-300">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Recovery Journey</h2>
            <div className="space-y-6">
              {[
                {
                  phase: 'Immediate Aftermath',
                  content: 'Focus on physical safety, medical care if needed, and connecting with support. This is not the time to make major decisions.',
                },
                {
                  phase: 'Processing',
                  content: 'Work with counselors to process trauma, identify patterns, and begin healing. Therapy and support groups are valuable.',
                },
                {
                  phase: 'Rebuilding',
                  content: 'Gradually regain independence, rebuild self-esteem, and establish healthy relationships and routines.',
                },
                {
                  phase: 'Thriving',
                  content: 'Integrate your experience into your identity, help others, and build a fulfilling life forward.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-green-600">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{item.phase}</h4>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Ally Guide */}
      {selectedCategory === 'ally-guide' && (
        <div className="space-y-6">
          <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-300">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">How to Support a Survivor</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">DO:</h3>
                <ul className="space-y-2">
                  {[
                    'Listen without judgment',
                    'Believe them',
                    'Respect their timeline for recovery',
                    'Help them access resources and safety planning',
                    'Check in regularly',
                    'Respect their confidentiality',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">DON'T:</h3>
                <ul className="space-y-2">
                  {[
                    'Judge them for staying or going back',
                    'Press them to report to police',
                    'Minimize their experience',
                    'Blame them for the abuse',
                    'Make decisions for them',
                    'Confront the abuser directly',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
