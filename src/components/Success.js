import React from "react";
import kisses from "../kisses.gif";

const Success = () => {
  const startDate = new Date(2021, 11, 7); // Dec 7, 2021
  const daysTogether = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24));

  return (
    <div className="App-success">
      <img className="App-gif" src={kisses} alt="Kisses" />
      <h2 style={{ color: "#ff4d6d", fontSize: "2.2rem" }}>Let's go, Bro! 👊❤️</h2>
      
      <div className="days-counter">
        <span className="days-count-number">{daysTogether} Days</span>
        <p style={{fontSize: '14px', color: '#888', margin: '5px 0 0'}}>of amazing memories together</p>
      </div>

      <div style={{ color: "#444", margin: "20px 0", fontSize: "1.1rem" }}>
        <p>You inspire me every single day. ⭐</p>
        <p>Grateful for how you care for me, Sweety. ✨</p>
      </div>

      <div style={{ borderTop: "1px solid #eee", paddingTop: "20px", marginTop: "20px" }}>
         <p style={{ fontSize: "1.1rem", color: "#666", fontWeight: "bold" }}>Dec 7, 2021 • 7:00 PM</p>
         <p style={{ color: "#ff4d6d", fontSize: "1.6rem", marginTop: "15px" }}>Yours Forever ❤️</p>
      </div>
    </div>
  );
};

export default Success;
