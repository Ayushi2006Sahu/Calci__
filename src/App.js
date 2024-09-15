


import React, { useState, useEffect, useRef } from 'react'; // Keep 'useRef' as it's being used below
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [crushName, setCrushName] = useState('');
  const [loveScore, setLoveScore] = useState(null);
  const [songUrl, setSongUrl] = useState('');
  const audioRef = useRef(null);  // Using 'useRef' to track audio element

  // Play song based on songUrl and stop any previously playing audio
  useEffect(() => {
    if (songUrl) {
      // Stop the previous song if it was playing
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;  // Reset audio to the start
      }
      
      // Create and play new audio
      const newAudio = new Audio(songUrl);
      newAudio.play();
      audioRef.current = newAudio;  // Set the ref to the current audio
    }
  }, [songUrl]);

  const calculateLove = () => {
    if (name && crushName) {
      const score = Math.floor(Math.random() * 100) + 1;
      setLoveScore(score);

      // Set different songs based on the love score
      if (score > 75) {
        setSongUrl('songs/falak.mp3');  // Replace with actual high love score song URL
      } else if (score > 50) {
        setSongUrl('/songs/Tauba Tauba - Bad News _ Punjabi Song.mp3');  // Replace with actual medium love score song URL
      } else {
        setSongUrl('/songs/Tere Naina.mp3');  // Replace with actual low love score song URL
      }
    } else {
      alert('Please enter both names');
    }
  };
  const backgroundImageStyle = {
    backgroundImage: `url('/images/Image.webp')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={backgroundImageStyle}>
    <div className="love-container">
      <h1>Love Calculator</h1>

      {/* Card */}
      <div className="card">
        <div className="card-body">
          <label>Your Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
          />

          <label>Crush Name:</label>
          <input 
            type="text" 
            value={crushName} 
            onChange={(e) => setCrushName(e.target.value)} 
            placeholder="Enter crush name" 
          />

          <button onClick={calculateLove}>Calculate Love</button>
        </div>
      </div>

      {loveScore !== null && (
        <div className="result-container">
          <h2>Your Love Score: {loveScore}%</h2>
          {songUrl && <div className="song-playing">🎶 A song is playing... 🎶</div>}
        </div>
      )}

      {/* The animated image and heart emoji */}
     

      <div className="love-emoji">❤️</div>
    </div>
    </div>
  );
};

export default App;

