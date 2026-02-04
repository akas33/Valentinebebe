import React from "react";
import kisses from "../kisses.gif";

const Success = () => (
  <div className="App-success" style={{ textAlign: 'center', padding: '20px' }}>
    {/* Inkem Inkem Inkem Kaavaale - Starts exactly at 24 seconds */}
    <iframe 
      width="0" height="0" 
      src="https://www.youtube.com/embed/LPeZOE8ZIHI?autoplay=1&start=24" 
      frameBorder="0" 
      allow="autoplay" 
      style={{ display: 'none' }}>
    </iframe>

    <img className="App-gif" src={kisses} alt="Kisses" style={{ maxWidth: '250px', borderRadius: '20px' }} />
    
    <h2 style={{ color: "#ff4d6d", fontSize: "2rem" }}>Let's go, Bro! 👊❤️✨⭐</h2>

    <div style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#444", margin: "20px 0" }}>
      <p>You are the one who <strong>inspires me</strong> every single day. ⭐</p>
      <p>I’m so grateful for how you <strong>care for me</strong>, Sweety. ✨</p>
      <p style={{ fontWeight: "bold", color: "#ff4d6d", marginTop: "15px" }}>
        Can't wait for another Valentine's with you! 👊✨❤️⭐
      </p>
    </div>

    <div style={{ marginTop: "40px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
      <p style={{ margin: 0, fontSize: "0.7rem", color: "#888", textTransform: "uppercase" }}>
        Since you said yes on
      </p>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#555", marginTop: "5px" }}>
        December 7, 2021 • 7:00 PM
      </p>
    </div>
  </div>
);

export default Success;
