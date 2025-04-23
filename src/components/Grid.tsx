
import React from 'react';
import { Tile } from './Tile';

interface GridProps {
  guesses: string[];
  currentGuess: string;
  targetWord: string;
}

export const Grid = ({ guesses, currentGuess, targetWord }: GridProps) => {
  const rows = Array(6).fill('');
  const allGuesses = [...guesses, currentGuess];

  for (let i = 0; i < allGuesses.length; i++) {
    rows[i] = allGuesses[i];
  }

  return (
    <div className="grid gap-1 mb-4">
      {rows.map((row, i) => (
        <div key={i} className="flex justify-center gap-1">
          {Array(targetWord.length).fill('').map((_, j) => {
            const letter = row[j] || '';
            let state = 'default';

            if (i < guesses.length) {
              if (letter === targetWord[j]) {
                state = 'green';
              } else if (targetWord.includes(letter)) {
                state = 'yellow';
              } else {
                state = 'gray';
              }
            }

            return (
              <Tile key={j} letter={letter} state={state} />
            );
          })}
        </div>
      ))}
    </div>
  );
};
