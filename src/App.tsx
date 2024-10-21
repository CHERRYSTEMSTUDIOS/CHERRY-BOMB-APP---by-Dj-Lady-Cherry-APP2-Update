import React, { useState } from 'react';
import { Music, Zap, Scissors, Upload } from 'lucide-react';
import AudioPlayer from './components/AudioPlayer';
import SongBooster from './components/SongBooster';
import RemixEngine from './components/RemixEngine';
import StemChopper from './components/StemChopper';

function App() {
  const [activeTab, setActiveTab] = useState('player');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white flex flex-col">
      <header className="p-4 bg-black bg-opacity-50 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-pink-500">CHERRY BOMB</h1>
        <nav className="flex space-x-4">
          <button
            className={`p-2 rounded-full ${activeTab === 'player' ? 'bg-pink-500' : 'bg-gray-700'}`}
            onClick={() => setActiveTab('player')}
          >
            <Music size={24} />
          </button>
          <button
            className={`p-2 rounded-full ${activeTab === 'booster' ? 'bg-pink-500' : 'bg-gray-700'}`}
            onClick={() => setActiveTab('booster')}
          >
            <Zap size={24} />
          </button>
          <button
            className={`p-2 rounded-full ${activeTab === 'remix' ? 'bg-pink-500' : 'bg-gray-700'}`}
            onClick={() => setActiveTab('remix')}
          >
            <Music size={24} />
          </button>
          <button
            className={`p-2 rounded-full ${activeTab === 'chopper' ? 'bg-pink-500' : 'bg-gray-700'}`}
            onClick={() => setActiveTab('chopper')}
          >
            <Scissors size={24} />
          </button>
        </nav>
      </header>
      <main className="flex-grow p-8">
        {activeTab === 'player' && <AudioPlayer />}
        {activeTab === 'booster' && <SongBooster />}
        {activeTab === 'remix' && <RemixEngine />}
        {activeTab === 'chopper' && <StemChopper />}
      </main>
      <footer className="p-4 bg-black bg-opacity-50 text-center">
        <p>&copy; 2023 CHERRY BOMB Music App</p>
      </footer>
    </div>
  );
}

export default App;