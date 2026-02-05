import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Success from "./components/Success";

// GIF/Photo Imports
import flowerBear from "./flowerBear.gif";
import cryingBear from "./crying.gif";
import beggingBear from "./begging.gif";
import madBear from "./madBear.gif";
import heartBear from "./heart.gif"; 
import pointBear from "./point.gif"; 
import ourPhoto from "./our-photo.jpg"; 

const App = () => {
  const [opened, setOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0); 
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [timeMarried, setTimeMarried] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const iframeRef = useRef(null);

  // Marriage Clock Logic (Dec 11, 2024 @ 9:25 AM)
  useEffect(() => {
    const marriageDate = new Date("2024-12-11T09:25:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now - marriageDate;
      if (diff > 0) {
        setTimeMarried({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / 1000 / 60) % 60),
          secs: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOpenMessage = () => {
    setOpened(true);
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  };

  const handleAccept = () => setAccepted(true);

  const handleReject = () => {
    setNoCount(noCount + 1);
    setYesButtonSize(prev => prev + 0.35);
    const maxWidth = window.innerWidth > 500 ? 140 : 70; 
    const randomX = Math.floor(Math.random() * (maxWidth * 2)) - maxWidth;
    const randomY = Math.floor(Math.random() * 80) - 40; 
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const rejectionGifs = [flowerBear, cryingBear, beggingBear, madBear, heartBear, pointBear];
  const rejectionTexts = ["No", "Are you sure?", "But we've been married since Dec!", "I'm telling your mom! 🏃‍♂️", "Don't do this to me 💔", "Click the green one! 🫠✨"];

  return (
    <div className="App">
      <iframe ref={iframeRef} width="0" height="0" src="https://www.youtube.com/embed/LPeZOE8ZIHI?enablejsapi=1&autoplay=1&mute=1&start=30" allow="autoplay" style={{ display: 'none', position: 'absolute' }}></iframe>

      <div className="App-body">
        {!opened ? (
          <div className="pulse">
            <div className="bebe-tag">Married since 11 Dec 2024</div>
            
            {/* Real-time Clock */}
            <div className="live-clock">
              <div>{timeMarried.days}d</div>
              <div>{timeMarried.hours}h</div>
              <div>{timeMarried.mins}m</div>
              <div className="secs">{timeMarried.secs}s</div>
            </div>

            <div className="photo-frame">
              <img src={ourPhoto} alt="Our First Meeting" className="zoom-animation" />
            </div>

            <h1 className="App-text">The best decision I ever made was "I Do."</h1>
            <button className="App-button btn-yes" onClick={handleOpenMessage}>Unlock Our Memories ❤️</button>
          </div>
        ) : !accepted ? (
          <div className="asking-container">
            <h1 className="App-text">Will you still be my Valentine, Babu?</h1>
            <img src={rejectionGifs[Math.min(noCount, rejectionGifs.length - 1)]} alt="Mood" className="App-gif" />
            
            <div className="button-group">
              <div className="yes-container">
                <button className="App-button btn-yes" style={{ transform: `scale(${yesButtonSize})` }} onClick={handleAccept}>Yes</button>
              </div>
              <button 
                className="App-button btn-no" 
                onClick={handleReject} 
                style={{ transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`, zIndex: 1000 }}
              >
                {rejectionTexts[Math.min(noCount, rejectionTexts.length - 1)]}
              </button>
            </div>
          </div>
        ) : (
          <Success />
        )}
      </div>
    </div>
  );
};

export default App;
          
