import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Upload } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Audio Player</h2>
      <div className="mb-4">
        <label htmlFor="file-upload" className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <Upload className="mr-2" />
          <span>Upload Track</span>
        </label>
        <input id="file-upload" type="file" className="hidden" accept="audio/*" />
      </div>
      <div className="flex justify-center items-center space-x-4">
        <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
          <SkipBack size={24} />
        </button>
        <button
          className="p-4 bg-pink-500 rounded-full hover:bg-pink-600"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause size={32} /> : <Play size={32} />}
        </button>
        <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
          <SkipForward size={24} />
        </button>
      </div>
      <div className="mt-4">
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-pink-500 h-2 rounded-full w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;