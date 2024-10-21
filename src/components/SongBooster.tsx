import React from 'react';
import { Volume2, Zap } from 'lucide-react';

const SongBooster: React.FC = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Song Booster</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Dynamic EQ & Compression</h3>
          <div className="flex items-center space-x-2">
            <Zap size={24} className="text-yellow-400" />
            <input type="range" className="w-full" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Volume Normalization</h3>
          <div className="flex items-center space-x-2">
            <Volume2 size={24} className="text-blue-400" />
            <input type="range" className="w-full" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Loudness & Presence Control</h3>
        <div className="flex space-x-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            Club Boost
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
            Radio Boost
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Custom
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongBooster;