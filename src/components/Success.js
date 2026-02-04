import React from "react";
import kisses from "../kisses.gif";

const Success = () => {
  const startDate = new Date(2021, 11, 7); // Dec 7, 2021
  const today = new Date();
  const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  return (
    <div className="App-success" style={{ animation: 'slideUp 1s ease' }}>
      <img className="App-gif" src={kisses} alt="Kisses" />
      
      <h2 style={{ color: "#ff4d6d", fontSize: "2.2rem", marginBottom: '5px' }}>
        Let's go, Bro! 👊❤️
      </h2>

      <div className="days-counter">
        <span className="days-count-number">{daysTogether} Days</span>
        <p style={{fontSize: '15px', color: '#888', letterSpacing: '1px'}}>
          OF BEING INSEPARABLE
        </p>
      </div>

      <div style={{ fontSize: "1.1rem", color: "#444", margin: "20px 0" }}>
        <p>You inspire me every single day. ⭐</p>
        <p>Grateful for how you care for me, Sweety. ✨</p>
      </div>

      <div style={{ borderTop: "1px solid #eee", paddingTop: "20px", marginTop: "20px" }}>
        <p style={{ fontSize: "0.7rem", color: "#aaa", textTransform: "uppercase" }}>Since</p>
        <p style={{ fontSize: "1.1rem", color: "#666" }}>Dec 7, 2021 • 7:00 PM</p>
        
        {/* PERSONAL SIGNATURE */}
        <p style={{ 
          color: "#ff4d6d", 
          fontSize: "1.6rem", 
          marginTop: "25px", 
          opacity: "0.9" 
        }}>
          Yours Forever ❤️
        </p>
      </div>
    </div>
  );
};

export default Success;
