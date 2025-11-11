import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-6">
        <div className="text-9xl font-bold text-gray-300">404</div>
        <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
        <p className="text-xl text-gray-600 max-w-md">
          We couldn't find what you were looking for. Let's get you back on track.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate('/crisis-tools')}
            className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition"
          >
            Get Help Now
          </button>
        </div>
      </div>
    </div>
  );
}
