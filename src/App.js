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
  const [timeMarried, setTimeMarried] = useState({ totalHours: 0, mins: 0, secs: 0 });
  const iframeRef = useRef(null);

  // Updated Marriage Clock: Hours, Minutes, Seconds (From Dec 11, 2024 @ 9:25 AM)
  useEffect(() => {
    const marriageDate = new Date("2024-12-11T09:25:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now - marriageDate;

      if (diff > 0) {
        setTimeMarried({
          totalHours: Math.floor(diff / (1000 * 60 * 60)), // Calculated as total hours
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
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
    }
  };

  const handleAccept = () => {
    setAccepted(true);
    if (window.confetti) {
      window.confetti({ 
        particleCount: 150, 
        spread: 70, 
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff', '#ffccd5']
      });
    }
  };

  const handleReject = () => {
    setNoCount(noCount + 1);
    setYesButtonSize(prev => prev + 0.35);
    const maxWidth = window.innerWidth > 500 ? 140 : 70; 
    const randomX = Math.floor(Math.random() * (maxWidth * 2)) - maxWidth;
    const randomY = Math.floor(Math.random() * 80) - 40; 
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const rejectionGifs = [flowerBear, cryingBear, beggingBear, madBear, heartBear, pointBear];
  const rejectionTexts = ["No", "Are you sure, Sweety? 🥺", "But we've been since 2021! 😲", "I'm telling your mom! 🏃‍♂️", "Don't do this to me 💔", "Click the green one! 🫠✨"];

  return (
    <div className="App">
      <iframe ref={iframeRef} width="0" height="0" src="https://www.youtube.com/embed/LPeZOE8ZIHI?enablejsapi=1&autoplay=1&mute=1&start=30&loop=1&playlist=LPeZOE8ZIHI" allow="autoplay" style={{ display: 'none', position: 'absolute' }}></iframe>

      <div className="App-body">
        {!opened ? (
          <div className="pulse">
            {/* Clock in the tag now shows Hours, Minutes, Seconds */}
            <div className="bebe-tag">
              Married: {timeMarried.totalHours}h {timeMarried.mins}m {timeMarried.secs}s
            </div>
            
            <div className="photo-frame">
              <img src={ourPhoto} alt="Us" className="zoom-animation" />
            </div>
            
            <h1 className="App-text">I've been keeping a secret since 2021...</h1>
            <button className="App-button btn-yes" onClick={handleOpenMessage}>Open ❤️</button>
          </div>
        ) : !accepted ? (
          <div className="asking-container">
            <h1 className="App-text">Will you still be my Valentine, Sweety?</h1>
            <img src={rejectionGifs[Math.min(noCount, rejectionGifs.length - 1)]} alt="Mood" className="App-gif" />
            
            <div className="button-group">
              <div className="yes-container">
                <button className="App-button btn-yes" style={{ transform: `scale(${yesButtonSize})` }} onClick={handleAccept}>Yes</button>
              </div>
              <button 
                className="App-button btn-no" 
                onClick={handleReject} 
                onMouseEnter={handleReject}
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
