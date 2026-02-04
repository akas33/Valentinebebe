import React from "react";

const Asking = ({ gif, altText, handleAccept, handleReject, noButtonText, yesButtonSize }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <img className="App-gif" src={gif} alt={altText} style={{ maxWidth: '200px', borderRadius: '20px' }} />
    
    <p className="App-text" style={{ fontSize: "1.3rem", margin: "20px 0" }}>
      Hello Sweety, will you be my Valentine, Bro? 👊❤️✨
    </p>
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
      <button 
        className="App-button" 
        onClick={handleAccept} 
        style={{ 
          transform: `scale(${yesButtonSize})`, 
          backgroundColor: "#4CAF50", color: "white", padding: "12px 30px", 
          borderRadius: "25px", border: "none", fontWeight: "bold", transition: "0.3s"
        }}
      >
        Yes
      </button>

      <button 
        className="App-button" 
        onClick={handleReject} 
        style={{ 
          backgroundColor: "#f44336", color: "white", padding: "8px 20px", 
          borderRadius: "20px", border: "none", fontSize: "0.8rem",
          marginTop: yesButtonSize > 1.5 ? "20px" : "0px"
        }}
      >
        {noButtonText}
      </button>
    </div>
  </div>
);

export default Asking;
