import React from 'react';
import { Scissors, Layers, Save } from 'lucide-react';

const StemChopper: React.FC = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Stem Chopper</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">AI Stem Isolation</h3>
          <div className="flex items-center space-x-2">
            <Scissors size={24} className="text-red-400" />
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
              Isolate Stems
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Stem Recomposition</h3>
          <div className="flex items-center space-x-2">
            <Layers size={24} className="text-blue-400" />
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
              Rearrange Stems
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Custom Stem Library</h3>
        <div className="flex space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center">
            <Save size={18} className="mr-2" />
            Save to Library
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded flex items-center">
            <Layers size={18} className="mr-2" />
            Browse Library
          </button>
        </div>
      </div>
    </div>
  );
};

export default StemChopper;