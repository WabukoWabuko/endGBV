import React, { useState } from 'react';

export default function Community(): React.ReactElement {
  const [selectedCategory, setSelectedCategory] = useState('stories');
  const [posts] = useState([
    {
      id: 1,
      title: 'How I Recognized the Cycle',
      author: 'Anonymous Survivor',
      category: 'stories',
      excerpt: 'I thought I was alone until I came here. Realizing the cycle of abuse helped me understand I wasn\'t crazy.',
      likes: 45,
      replies: 12,
      isVerified: false,
    },
    {
      id: 2,
      title: 'Resources That Actually Helped Me',
      author: 'Recovery in Progress',
      category: 'resources',
      excerpt: 'Here\'s a list of free resources that made the biggest difference in my healing journey...',
      likes: 82,
      replies: 28,
      isVerified: true,
    },
    {
      id: 3,
      title: 'Should I Call the Police?',
      author: 'Concerned Friend',
      category: 'questions',
      excerpt: 'My friend doesn\'t want to report, but I\'m worried. What should I do?',
      likes: 34,
      replies: 18,
      isVerified: false,
    },
    {
      id: 4,
      title: 'Free Support Group Tonight at 7pm',
      author: 'Community Organizer',
      category: 'events',
      excerpt: 'Join us for our weekly peer support group. All survivors welcome. Online and confidential.',
      likes: 56,
      replies: 22,
      isVerified: true,
    },
  ]);

  const categories = [
    { id: 'stories', label: '📖 Stories', count: 234 },
    { id: 'questions', label: '❓ Questions', count: 456 },
    { id: 'resources', label: '📚 Resources', count: 189 },
    { id: 'events', label: '📅 Events', count: 34 },
    { id: 'support', label: '💬 Support', count: 567 },
  ];

  const filteredPosts = posts.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">💬 Community</h1>
        <p className="text-gray-600">
          Connect with survivors, share stories, find support, and build community together.
        </p>
      </div>

      {/* Create Post Button */}
      <div>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition">
          ✍️ Share Your Story or Ask a Question
        </button>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              selectedCategory === cat.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {cat.label} <span className="text-sm">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  by <span className="font-semibold">{post.author}</span> • {new Date().toLocaleDateString()}
                </p>
              </div>
              {post.isVerified && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  ✓ Verified
                </span>
              )}
            </div>

            <p className="text-gray-700 mb-4">{post.excerpt}</p>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span>👍</span>
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>💬</span>
                <span>{post.replies}</span>
              </div>
              <button className="ml-auto text-purple-600 font-semibold hover:text-purple-700">Read More →</button>
            </div>
          </div>
        ))}
      </div>

      {/* Community Guidelines */}
      <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-300">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">📋 Community Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-3">✓ We Welcome:</h3>
            <ul className="space-y-2">
              {['Sharing experiences and emotions', 'Asking for advice', 'Offering support to others', 'Anonymous posts', 'Different perspectives'].map(
                (item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-3">✗ We Don't Tolerate:</h3>
            <ul className="space-y-2">
              {['Harassment or hate speech', 'Victim blaming', 'Spam or self-promotion', 'Sharing private information', 'Threats or violence'].map(
                (item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Peer Matching */}
      <div className="bg-green-50 p-8 rounded-lg border-2 border-green-300">
        <h2 className="text-2xl font-bold text-green-600 mb-4">👥 Find Your Peer Support Match</h2>
        <p className="text-gray-700 mb-6">
          Connect with someone who has experienced something similar. Our matching algorithm pairs survivors with shared interests and experiences.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
          Find a Peer Support Match
        </button>
      </div>

      {/* Expert Q&A */}
      <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-300">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">🎓 Ask an Expert</h2>
        <p className="text-gray-700 mb-6">
          Our network of verified advocates, counselors, and legal experts are here to answer your questions. Responses are typically provided within 24 hours.
        </p>
        <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-700 transition">
          Ask a Question to Experts
        </button>
      </div>
    </div>
  );
}
