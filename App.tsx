
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { SoundOnIcon, SoundOffIcon } from './components/icons';

const App: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // This effect handles the initial play attempt.
  // Browsers often require user interaction to play audio with sound.
  // Starting muted is a common workaround.
  useEffect(() => {
    const audioEl = audioRef.current;
    if (audioEl) {
      audioEl.play().catch(error => {
        // Autoplay was prevented. User must interact to enable sound.
        console.log("Audio autoplay was prevented by the browser. User interaction is required.");
      });
    }
  }, []);

  const toggleMute = () => {
    const audioEl = audioRef.current;
    if (audioEl) {
      const currentlyMuted = !audioEl.muted;
      audioEl.muted = currentlyMuted;
      setIsMuted(currentlyMuted);
      // If we are unmuting and the audio was paused by the browser, play it.
      if (!currentlyMuted && audioEl.paused) {
        audioEl.play();
      }
    }
  };

  return (
    <div className="text-[#EAEAEA] overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-4 md:px-8 lg:px-16">
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
      </main>
      <Contact />

      <audio ref={audioRef} src="audio\style-h2h.mp3" autoPlay loop muted />
      
      <button 
        onClick={toggleMute} 
        className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-[#303632]/80 backdrop-blur-sm hover:bg-[#404642] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#242825] focus:ring-[#9EB991]"
        aria-label={isMuted ? "Unmute background audio" : "Mute background audio"}
      >
        {isMuted ? <SoundOffIcon className="w-6 h-6 text-white" /> : <SoundOnIcon className="w-6 h-6 text-white" />}
      </button>
    </div>
  );
};

export default App;