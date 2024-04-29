import React, { useState } from "react";
import "./flipcard.css";

export default function FlipCArd() {
  const cardFront = "Welcome to GFG.";
  const cardBack = "Computer Science Portal.";
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <h1 className="geeks font-bold text-2xl">Hello to HomelyStay</h1>
      <div className="container">
        <div
          className={`flip-card w-11/12 sm:w-1/2 rounded-xl border-2 border-blue-400 h-96 ${
            isFlipped ? "flipped" : ""
          }`}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card-content">
                {cardFront}
                <div className="card   shadow-md">
                
                    <img
                      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                
                 
                </div>
              </div>
              <button className="flip-button" onClick={handleFlip}>
                Flip
              </button>
            </div>
            <div className="flip-card-back">
              <div className="card-content">{cardBack}
              <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
              </div>
              <button className="flip-button" onClick={handleFlip}>
                Flip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
