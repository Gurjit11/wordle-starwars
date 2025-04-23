'use client';

import React from 'react';

const styles = () => {
  return (
    <style jsx>{`

      .level-complete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        text-align: center;
        z-index: 10;
      }

      .game-over-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        text-align: center;
        z-index: 10;
      }
      .fade-in {
        animation: fadeIn 2s;
      }

      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }

      .star-wars-text {
        font-family: 'Arial Black', sans-serif;
        text-transform: uppercase;
        font-size: 3rem;
        letter-spacing: 0.2rem;
        color: #ffe81f;
        text-shadow: 0 0 5px #c1b300, 0 0 10px #c1b300, 0 0 20px #c1b300;
      }
    `}</style>
  );
};

export default styles;
