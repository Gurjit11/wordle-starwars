
import React, { useCallback } from 'react';

interface KeyboardProps {
  handleLetter: (letter: string) => void;
  handleDelete: () => void;
  handleGuess: () => void;
  usedLetters: { [key: string]: string };
  disabled?: boolean;
}

export const Keyboard = ({ handleLetter, handleDelete, handleGuess, usedLetters, disabled }: KeyboardProps) => {
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'];

  const getKeyStyle = useCallback((letter: string) => {
    return usedLetters[letter] ? `bg-${usedLetters[letter]-500} text-white` : 'bg-gray-200 text-black';
  }, [usedLetters]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        {row1.map(letter => (
          <button
            key={letter}
            className={`keyboard-key ${getKeyStyle(letter)}`}
            onClick={() => handleLetter(letter)}
            disabled={disabled}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="flex">
        {row2.map(letter => (
          <button
            key={letter}
            className={`keyboard-key ${getKeyStyle(letter)}`}
            onClick={() => handleLetter(letter)}
            disabled={disabled}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="flex">
        {row3.map(button => {
          if (button === 'ENTER') {
            return (
              <button
                key={button}
                className="keyboard-key enter-key bg-green-500 text-white"
                onClick={handleGuess}
                disabled={disabled}
              >
                {button}
              </button>
            );
          } else if (button === 'BACKSPACE') {
            return (
              <button
                key={button}
                className="keyboard-key backspace-key bg-gray-400 text-white"
                onClick={handleDelete}
                disabled={disabled}
              >
                Delete
              </button>
            );
          } else {
            return (
              <button
                key={button}
                className={`keyboard-key ${getKeyStyle(button)}`}
                onClick={() => handleLetter(button)}
                disabled={disabled}
              >
                {button}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};
