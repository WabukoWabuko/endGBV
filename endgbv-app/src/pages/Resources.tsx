import React, { useState, useEffect } from 'react';
import type { Resource, Hotline } from '../types';
import { useResourceStore } from '../stores/resourceStore';

export default function Resources(): React.ReactElement {
  const { resources, hotlines, fetchResources, fetchHotlines, filterResourcesByType } = useResourceStore();
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchResources();
    fetchHotlines();
  }, []);

  const resourceTypes = ['all', 'hotline', 'shelter', 'legal', 'counseling', 'medical'];
  const filteredResources = selectedType === 'all'
    ? resources
    : filterResourcesByType(selectedType as any);

  const searchedResources = filteredResources.filter(
    (r) =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Find Resources</h1>
        <p className="text-gray-600">
          Discover safe, verified resources including hotlines, shelters, counseling, and legal aid.
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Search resources by name or keyword..."
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {resourceTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedType === type
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {searchedResources.map((resource: Resource) => (
          <div key={resource.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-800">{resource.name}</h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {resource.type}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{resource.description}</p>

            {/* Languages */}
            <div className="mb-3">
              <span className="text-sm font-semibold text-gray-700">Languages:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {resource.languages.map((lang) => (
                  <span key={lang} className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="mb-4">
              <span className="text-yellow-500">⭐ {resource.ratings}/5</span>
              <span className="text-gray-500 text-sm ml-2">{resource.verified ? '✓ Verified' : 'Unverified'}</span>
            </div>

            {/* Contact */}
            <div className="flex gap-2">
              {resource.phone && (
                <a
                  href={`tel:${resource.phone}`}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-700 transition text-center"
                >
                  📞 Call
                </a>
              )}
              {resource.website && (
                <a
                  href={resource.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-700 transition text-center"
                >
                  🌐 Visit
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Hotlines Section */}
      <div className="mt-12 border-t-4 pt-8">
        <h2 className="text-3xl font-bold mb-6">National Hotlines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {hotlines.map((hotline: Hotline) => (
            <div key={hotline.id} className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
              <h3 className="text-2xl font-bold text-red-600 mb-2">{hotline.name}</h3>
              <p className="text-gray-700 mb-4">{hotline.description}</p>
              <a
                href={`tel:${hotline.number}`}
                className="text-3xl font-bold text-red-600 hover:underline"
              >
                📞 {hotline.number}
              </a>
              <p className="text-sm text-gray-600 mt-2">{hotline.availability}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
