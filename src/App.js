import './App.css';
import React, { useState } from "react";
import WelcomeComp from './components/WelcomComp';
import HappyComp from './components/HappyComp';

function App() {

  const hearts = Array.from({ length: 20 });

  const [showHappyCard, setShowHappyCard] = useState(false);

  const [celebrate, setCelebrate] = useState(false);
  const colors = ['#FF007F', '#FFD700', '#FF4500', '#00E5FF', '#7000FF'];

  // Create 50 ribbons for a full-screen continuous effect
  const ribbonCount = 50;


  const onAccept = (data) => {
    setShowHappyCard(true);
    setCelebrate(true);
  }



  return (
    <div className="App">
      {!celebrate && <div className="hearts-container">
        {hearts.map((_, i) => (
          <span
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`, // Random horizontal start
              animationDelay: `${Math.random() * 5}s`, // Random start time
              fontSize: `${Math.random() * 20 + 10}px`, // Random size
            }}
          >
            ❤️
          </span>
        ))}
      </div>}


      {celebrate && (
        <div className="falling-container">
          {[...Array(ribbonCount)].map((_, i) => (
            <div
              key={i}
              className="spring-ribbon"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                // Randomizing speed and delay makes the "continuous" loop look natural
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `-${Math.random() * 10}s`, // Negative delay starts them mid-fall
                opacity: Math.random() * 0.7 + 0.3,
                transform: `scale(${Math.random() * 0.5 + 0.5})`
              }}
            />
          ))}
        </div>
      )}


      {!showHappyCard && <WelcomeComp accept={onAccept} />}
      {showHappyCard && <HappyComp />}
    </div>
  );
}

export default App;
