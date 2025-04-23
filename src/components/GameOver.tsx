
import React from 'react';
import { Button } from '@/components/ui/button';

interface GameOverProps {
  revealedWord: string;
  onRetryLevel: () => void;
  onRestartGame: () => void;
  isGameWon: boolean;
}

export const GameOver = ({ revealedWord, onRetryLevel, onRestartGame, isGameWon }: GameOverProps) => {
  return (
    <div className="game-over-overlay">
      <h2>{isGameWon ? 'You Won The Game!' : 'Game Over'}</h2>
      {!isGameWon && <p>The word was: {revealedWord}</p>}
      <div className="flex gap-2">
        <Button variant="outline" onClick={onRetryLevel}>Retry Level</Button>
        <Button variant="outline" onClick={onRestartGame}>Restart Game</Button>
      </div>
    </div>
  );
};
