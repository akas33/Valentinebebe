import React, { useState, useRef } from "react";
import "./App.css";
import Success from "./components/Success";

// GIF/Photo Imports
import flowerBear from "./flowerBear.gif";
import cryingBear from "./crying.gif";
import beggingBear from "./begging.gif";
import heartBear from "./heart.gif"; 
import madBear from "./madBear.gif";
import pointBear from "./point.gif"; 
import ourPhoto from "./our-photo.jpg"; 

const App = () => {
  const [opened, setOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0); 
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const iframeRef = useRef(null);

  // THIS IS THE KEY: Play music when she clicks "Open"
  const handleOpenMessage = () => {
    setOpened(true);
    if (iframeRef.current) {
      // We force the iframe to reload with autoplay=1
      const currentSrc = iframeRef.current.src;
      iframeRef.current.src = currentSrc.replace("autoplay=0", "autoplay=1");
    }
  };

  const handleAccept = () => {
    setAccepted(true);
    if (window.confetti) {
      window.confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    }
  };

  const handleReject = () => {
    setNoCount(noCount + 1);
    setYesButtonSize(yesButtonSize + 0.45);
    const randomX = Math.floor(Math.random() * 260) - 130;
    const randomY = Math.floor(Math.random() * 260) - 130;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const rejectionGifs = [flowerBear, cryingBear, beggingBear, madBear, heartBear, pointBear];
  const rejectionTexts = [
    "No", 
    "Are you sure, Bebe? 🥺", 
    "But it's been since 2021! 😲", 
    "I'm telling your mom! 🏃‍♂️", 
    "Don't do this to me, Bro... 💔", 
    "Wrong button, click green! 👉"
  ];

  return (
    <div className="App">
      {/* THE PLAYER STAYS HERE ALWAYS 
         It starts at the Welcome Page and never stops 
      */}
      <iframe 
        ref={iframeRef} 
        width="0" 
        height="0" 
        src="https://www.youtube.com/embed/LPeZOE8ZIHI?enablejsapi=1&autoplay=0&start=34&loop=1&playlist=LPeZOE8ZIHI" 
        allow="autoplay" 
        style={{ display: 'none', position: 'absolute' }}>
      </iframe>

      <div className="App-body">
        {!opened ? (
          /* WELCOME PAGE */
          <div className="pulse">
            <div className="bebe-tag">Established 2021</div>
            <img src={ourPhoto} alt="Us" className="App-photo" />
            <h1 className="App-text">I've been keeping a secret since 2021...</h1>
            <button className="App-button btn-yes" onClick={handleOpenMessage}>
                Open the Letter ❤️
            </button>
          </div>
        ) : !accepted ? (
          /* ASKING PAGE */
          <div className="asking-container">
            <h1 className="App-text">Will you be my Valentine?</h1>
            <img 
              src={rejectionGifs[Math.min(noCount, rejectionGifs.length - 1)]} 
              alt="Bear" 
              className="App-gif" 
            />
            <div className="button-group">
              <button 
                className="App-button btn-yes" 
                style={{ transform: `scale(${yesButtonSize})`, position: 'relative', zIndex: 10 }} 
                onClick={handleAccept}
              >
                Yes
              </button>
              <button 
                className="App-button btn-no" 
                onClick={handleReject} 
                onMouseEnter={handleReject}
                style={{ 
                    transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`, 
                    position: 'relative',
                    zIndex: 999 
                }}
              >
                {rejectionTexts[Math.min(noCount, rejectionTexts.length - 1)]}
              </button>
            </div>
          </div>
        ) : (
          /* SUCCESS PAGE */
          <Success />
        )}
      </div>
    </div>
  );
};

export default App;
