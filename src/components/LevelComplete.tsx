
import React from 'react';

interface LevelCompleteProps {
  level: number;
}

export const LevelComplete = ({ level }: LevelCompleteProps) => {
  return (
    <div className="level-complete-overlay">
      <h2>Level Complete!</h2>
      <p>Congratulations, you completed level {level + 1}.</p>
      <p>Advancing to the next level...</p>
    </div>
  );
};
