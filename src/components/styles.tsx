'use client';

import React from 'react';

const styles = () => {
  return (
    <style jsx>{`
      .keyboard-key {
        width: 3rem;
        height: 4rem;
        margin: 0.25rem;
        border-radius: 0.375rem;
        font-weight: bold;
        font-size: 1.125rem;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        border: none;
        outline: none;
      }

      .enter-key {
        width: 5rem;
      }

      .backspace-key {
        width: 5rem;
      }

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
    `}</style>
  );
};

export default styles;

