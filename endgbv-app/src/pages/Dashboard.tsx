import React from 'react';
import { useAuthStore } from '../stores/authStore';
import { useResourceStore } from '../stores/resourceStore';

export default function Dashboard(): React.ReactElement {
  const { user, updatePreferences } = useAuthStore();
  const { incidents } = useResourceStore();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">📊 Your Dashboard</h1>
        <p className="text-gray-600">Track your reports, resources, and recovery journey.</p>
      </div>

      {/* User Profile Card */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Welcome, {user?.name || 'Friend'}!</h2>
        <p className="text-blue-100 mb-4">{user?.isAnonymous ? '🔒 Anonymous' : user?.email}</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition">
          Edit Profile
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: 'Reports Filed', value: incidents.length, icon: '📝' },
          { label: 'Resources Viewed', value: '12', icon: '📖' },
          { label: 'Support Group Attended', value: '3', icon: '👥' },
          { label: 'Days Safe', value: '18', icon: '🛡️' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Incidents */}
      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">📝 Your Reports</h2>
        {incidents.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">You haven't filed any reports yet.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
              File Your First Report
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-800">{incident.type}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      incident.severity === 'critical'
                        ? 'bg-red-100 text-red-800'
                        : incident.severity === 'high'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {incident.severity}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{incident.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-gray-500">Status: {incident.status}</span>
                  <span className="text-gray-500">Resources matched: {incident.supportResourcesMatched.length}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Safety Plan */}
      <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-300">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">📋 Your Safety Plan</h2>
        <p className="text-gray-700 mb-6">Your personalized safety plan keeps you prepared and safe.</p>
        <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-700 transition">
          View or Update Safety Plan
        </button>
      </div>

      {/* Support Network */}
      <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-300">
        <h2 className="text-2xl font-bold text-purple-600 mb-6">👥 Your Support Network</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">Recent Connections</p>
            <p className="text-gray-600 text-sm">You haven't connected with peer matches yet.</p>
          </div>
        </div>
        <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition">
          Find Peer Support
        </button>
      </div>

      {/* Preferences */}
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">⚙️ Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">Dark Mode</p>
              <p className="text-sm text-gray-600">Easier on the eyes</p>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={user?.preferences.theme === 'dark'}
                onChange={(e) =>
                  updatePreferences({
                    ...user!.preferences,
                    theme: e.target.checked ? 'dark' : 'light',
                  })
                }
                className="w-5 h-5"
              />
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-white rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">Notifications</p>
              <p className="text-sm text-gray-600">Updates about resources and support</p>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={user?.preferences.notificationsEnabled}
                onChange={(e) =>
                  updatePreferences({
                    ...user!.preferences,
                    notificationsEnabled: e.target.checked,
                  })
                }
                className="w-5 h-5"
              />
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-white rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">Share Anonymously</p>
              <p className="text-sm text-gray-600">Your posts won't show your identity</p>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={user?.preferences.shareAnonymously}
                onChange={(e) =>
                  updatePreferences({
                    ...user!.preferences,
                    shareAnonymously: e.target.checked,
                  })
                }
                className="w-5 h-5"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
