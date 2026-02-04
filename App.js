import React, { useState } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";

const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [yesButtonSize, setYesButtonSize] = useState(1);

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleReject = () => {
    setRejected(true);
    setYesButtonSize(yesButtonSize + 0.4); // Button grows faster
    
    const rejectionTexts = [
      "Are you sure, Bebe? 🥺",
      "But it's been since 2021! 😲",
      "Don't do this to me, Bro... 💔",
      "Think of the memories! ✨",
      "Bebe, please?? ⭐",
      "Wrong button, try the green one! 😂",
      "I'm gonna tell your mom! 🏃‍♂️",
    ];

    const randomIndex = Math.floor(Math.random() * rejectionTexts.length);
    setNoButtonText(rejectionTexts[randomIndex]);
  };

  return (
    <div className="App">
      <div className="App-body">
        {!accepted ? (
          <Asking
            gif={rejected ? madBear : flowerBear}
            altText="Cute Bears"
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={noButtonText}
            yesButtonSize={yesButtonSize}
          />
        ) : (
          <Success />
        )}
      </div>
    </div>
  );
};

export default App;

