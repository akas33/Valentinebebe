import React, { useState, useRef } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";
import ourPhoto from "./our-photo.jpg"; 

const App = () => {
  const [opened, setOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [yesButtonSize, setYesButtonSize] = useState(1);
  
  const iframeRef = useRef(null);

  const handleOpenMessage = () => {
    setOpened(true);
    // This sends a command to the hidden YouTube player to play immediately
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  };

  const handleAccept = () => setAccepted(true);

  const handleReject = () => {
    setRejected(true);
    setYesButtonSize(yesButtonSize + 0.4);
    const rejectionTexts = [
      "Are you sure, Bebe? 🥺",
      "But it's been since 2021! 😲",
      "Don't do this to me, Bro... 💔",
      "Think of the memories! ✨",
      "Bebe, please?? ⭐",
      "Wrong button, try the green one! 😂",
      "I'm gonna tell your mom! 🏃‍♂️",
    ];
    setNoButtonText(rejectionTexts[Math.floor(Math.random() * rejectionTexts.length)]);
  };

  return (
    <div className="App">
      {/* HIDDEN PLAYER: Loaded immediately, but silent until click */}
      <iframe
        ref={iframeRef}
        width="0" height="0"
        src="https://www.youtube.com/embed/LPeZOE8ZIHI?enablejsapi=1&autoplay=0&start=24&loop=1&playlist=LPeZOE8ZIHI"
        allow="autoplay"
        style={{ display: 'none' }}
        title="Music"
      ></iframe>

      {!opened ? (
        /* WELCOME SCREEN */
        <div className="App-body pulse">
          <div className="bebe-tag">Strictly for Bebe</div>
          <img src={ourPhoto} alt="Us in 2021" className="App-photo" />
          <h1 className="App-text">I've been keeping a secret since 2021...</h1>
          <button className="App-button" onClick={handleOpenMessage}>
            Open the Letter ❤️
          </button>
        </div>
      ) : (
        /* PROPOSAL OR SUCCESS SCREEN */
        <div className="App-body">
          {!accepted ? (
            <Asking
              gif={rejected ? madBear : flowerBear}
              handleAccept={handleAccept}
              handleReject={handleReject}
              noButtonText={noButtonText}
              yesButtonSize={yesButtonSize}
            />
          ) : (
            <Success />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
