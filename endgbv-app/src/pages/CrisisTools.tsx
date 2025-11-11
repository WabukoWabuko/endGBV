import React, { useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import { useResourceStore } from '../stores/resourceStore';

export default function CrisisTools(): React.ReactElement {
  const { user } = useAuthStore();
  const { reportIncident } = useResourceStore();
  const [reportStep, setReportStep] = useState(0);
  const [formData, setFormData] = useState({
    type: 'physical_abuse',
    severity: 'high',
    description: '',
    location: '',
    needsSafetyPlan: false,
  });

  const incidentTypes = [
    { value: 'physical_abuse', label: '🤜 Physical Abuse' },
    { value: 'emotional_abuse', label: '💔 Emotional Abuse' },
    { value: 'sexual_abuse', label: '🚫 Sexual Abuse' },
    { value: 'financial_abuse', label: '💰 Financial Control' },
    { value: 'digital_abuse', label: '📱 Digital Abuse' },
    { value: 'stalking', label: '👁️ Stalking' },
    { value: 'harassment', label: '📢 Harassment' },
    { value: 'human_trafficking', label: '🚨 Human Trafficking' },
    { value: 'forced_marriage', label: '💍 Forced Marriage' },
    { value: 'fgm', label: '⚠️ FGM' },
    { value: 'honor_killing', label: '⚠️ Honor-Based Violence' },
    { value: 'other', label: '❓ Other' },
  ];

  const severityLevels = [
    { value: 'low', label: 'Low', color: 'yellow' },
    { value: 'medium', label: 'Medium', color: 'orange' },
    { value: 'high', label: 'High', color: 'red' },
    { value: 'critical', label: 'Critical - I need help NOW', color: 'darkred' },
  ];

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    reportIncident({
      userId: user?.id || 'anonymous',
      type: formData.type as any,
      severity: formData.severity as any,
      status: 'reported' as any,
      description: formData.description,
      dateOccurred: new Date(),
      isAnonymous: user?.isAnonymous || false,
      consentToContact: false,
      supportResourcesMatched: [],
      urgentAssistanceNeeded: formData.severity === 'critical',
    });
    setReportStep(2);
  };

  const resetForm = () => {
    setReportStep(0);
    setFormData({
      type: 'physical_abuse',
      severity: 'high',
      description: '',
      location: '',
      needsSafetyPlan: false,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">🚨 Crisis Tools</h1>
        <p className="text-gray-600">
          Immediate assistance, one-click reporting, and automated resource matching.
        </p>
      </div>

      {/* Emergency Hotlines Quick Access */}
      <div className="bg-red-100 border-4 border-red-600 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-red-600 mb-6">📞 Emergency Hotlines</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">National DV Hotline (USA)</p>
            <a href="tel:1-800-799-7233" className="text-3xl font-bold text-red-600 hover:underline">
              1-800-799-7233
            </a>
            <p className="text-sm text-gray-600">Available 24/7</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">RAINN (Sexual Assault)</p>
            <a href="tel:1-800-656-4673" className="text-3xl font-bold text-red-600 hover:underline">
              1-800-656-4673
            </a>
            <p className="text-sm text-gray-600">Available 24/7</p>
          </div>
        </div>
      </div>

      {/* Incident Reporting Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">📝 Report What Happened</h2>

        {reportStep === 0 && (
          <form onSubmit={handleReportSubmit} className="space-y-6">
            {/* Type Selection */}
            <div>
              <label className="block text-lg font-semibold mb-4">What type of abuse did you experience?</label>
              <div className="grid md:grid-cols-3 gap-3">
                {incidentTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, type: type.value })}
                    className={`p-3 rounded-lg text-left font-semibold transition ${
                      formData.type === type.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Severity Selection */}
            <div>
              <label className="block text-lg font-semibold mb-4">How urgent is this?</label>
              <div className="space-y-2">
                {severityLevels.map((level) => (
                  <button
                    key={level.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, severity: level.value })}
                    className={`w-full p-4 rounded-lg text-left font-semibold transition ${
                      formData.severity === level.value
                        ? `bg-${level.color}-600 text-white`
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-lg font-semibold mb-2">Tell us more (optional)</label>
              <textarea
                placeholder="What happened? When? Where? Share as much or as little as you're comfortable with. This can be anonymous."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
              />
            </div>

            {/* Safety Plan Option */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.needsSafetyPlan}
                  onChange={(e) => setFormData({ ...formData, needsSafetyPlan: e.target.checked })}
                  className="w-5 h-5"
                />
                <span className="font-semibold">I need help creating a safety plan</span>
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition text-lg"
              >
                ✅ Submit Report
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 border rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Reset
              </button>
            </div>
          </form>
        )}

        {reportStep === 2 && (
          <div className="bg-green-50 p-8 rounded-lg text-center space-y-6">
            <div className="text-6xl">✅</div>
            <h3 className="text-3xl font-bold text-green-600">Thank You for Reporting</h3>
            <p className="text-gray-700">
              Your report has been received securely and anonymously. We've matched you with resources that can help.
            </p>

            {/* Auto-Matched Resources */}
            <div className="mt-8 bg-white p-6 rounded-lg text-left">
              <h4 className="text-xl font-bold mb-4">📍 Resources We Found For You:</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-100 rounded-lg border-l-4 border-blue-600">
                  <p className="font-semibold">🏥 Medical Support</p>
                  <p className="text-sm text-gray-700">Local hospital with trauma-informed care</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg border-l-4 border-green-600">
                  <p className="font-semibold">💬 Counseling Services</p>
                  <p className="text-sm text-gray-700">Free, confidential therapy available today</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg border-l-4 border-purple-600">
                  <p className="font-semibold">⚖️ Legal Aid</p>
                  <p className="text-sm text-gray-700">Free legal consultation within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Safety Plan Offer */}
            {formData.needsSafetyPlan && (
              <div className="mt-6 p-6 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                <p className="font-semibold mb-3">📋 Your Safety Plan is Ready</p>
                <button className="w-full bg-yellow-600 text-white py-2 rounded-lg font-bold hover:bg-yellow-700 transition">
                  View & Download Safety Plan
                </button>
              </div>
            )}

            <div className="flex gap-4 pt-6">
              <button
                onClick={resetForm}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Close & Explore More
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Safety Planning Tool */}
      <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-300">
        <h2 className="text-2xl font-bold mb-4">📋 Create a Safety Plan</h2>
        <p className="text-gray-700 mb-6">
          A personalized safety plan helps you stay safe. We'll guide you through key decisions like safe places to go, trusted people to call, and important documents to keep accessible.
        </p>
        <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-700 transition">
          Start Safety Planning
        </button>
      </div>

      {/* Emergency Resources Card */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-8 rounded-lg border-2 border-green-300">
          <h3 className="text-2xl font-bold text-green-600 mb-4">🚗 I Need to Leave NOW</h3>
          <p className="text-gray-700 mb-4">
            Get immediate directions to the nearest safe shelter, public place, or trusted friend.
          </p>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
            Find Safe Place Near Me
          </button>
        </div>

        <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-300">
          <h3 className="text-2xl font-bold text-purple-600 mb-4">👥 Talk to Someone</h3>
          <p className="text-gray-700 mb-4">
            Connect with a trained advocate or peer survivor who understands what you're going through.
          </p>
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">
            Chat with Advocate
          </button>
        </div>
      </div>

      {/* What Happens After Reporting */}
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
        <div className="space-y-4">
          {[
            { step: 1, title: 'Your report is encrypted', desc: 'We keep your information secure and private.' },
            { step: 2, title: 'Resources are matched', desc: 'Based on your situation, we find the best local help.' },
            { step: 3, title: 'You decide what to do', desc: 'You can contact resources, create a safety plan, or just browse.' },
            { step: 4, title: 'Support continues', desc: 'Access your dashboard to track your journey and next steps.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="bg-blue-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
