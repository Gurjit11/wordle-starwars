'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Grid } from './Grid';
import { Keyboard } from './Keyboard';
import { LevelComplete } from './LevelComplete';
import { GameOver } from './GameOver';
import { WORDS } from '@/lib/words';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const MAX_GUESSES = 6;

interface GameProps {
  initialLevel?: number;
}

export const Game: React.FC<GameProps> = ({ initialLevel = 0 }) => {
  const [level, setLevel] = useState(initialLevel);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [revealedWord, setRevealedWord] = useState('');
  const [usedLetters, setUsedLetters] = useState<{[key: string]: string}>({});
  const targetWord = WORDS[level];
  const { toast } = useToast();
  const [hint, setHint] = useState<string | null>(null);
  const [hintUsed, setHintUsed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Generate a hint for the current level
    const generateHint = () => {
      // Simple hint: the first letter of the word
      setHint(WORDS[level].charAt(0));
    };

    generateHint();
    setHintUsed(false);
  }, [level]);

  const handleLetter = useCallback((letter: string) => {
    if (currentGuess.length < targetWord.length) {
      setCurrentGuess(prevGuess => prevGuess + letter);
    }
  }, [currentGuess, targetWord]);

  const handleDelete = useCallback(() => {
    setCurrentGuess(prevGuess => prevGuess.slice(0, -1));
  }, []);

  const handleGuess = useCallback(() => {
    if (currentGuess.length !== targetWord.length) {
       toast({
        title: "Not enough letters",
        description: "Your guess must be " + targetWord.length + " letters long.",
      });
      return;
    }

    if (guesses.includes(currentGuess)) {
        toast({
          title: "Already guessed",
          description: "You already guessed that word.",
        });
        return;
      }

    setGuesses(prevGuesses => [...prevGuesses, currentGuess]);

    let newUsedLetters = {...usedLetters};
    for (let i = 0; i < targetWord.length; i++) {
        const letter = currentGuess[i];
        if (targetWord[i] === letter) {
            newUsedLetters[letter] = "green";
        } else if (
            targetWord.includes(letter) &&
            newUsedLetters[letter] !== "green"
        ) {
            newUsedLetters[letter] = "yellow";
        } else if (!newUsedLetters[letter]) {
            newUsedLetters[letter] = "gray";
        }
    }

    setUsedLetters(newUsedLetters);
    

    if (currentGuess === targetWord) {
      setIsLevelComplete(true);
      toast({
        title: "Level Complete!",
        description: "Advancing to the next level...",
      });
    } else if (guesses.length + 1 >= MAX_GUESSES) {
      setIsGameOver(true);
      setRevealedWord(targetWord);
    }

    setCurrentGuess('');
  }, [currentGuess, guesses, targetWord, guesses.length, usedLetters, toast]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isLevelComplete || isGameOver) return;

      const letter = event.key.toUpperCase();
      if (letter === 'ENTER') {
        handleGuess();
      } else if (letter === 'BACKSPACE') {
        handleDelete();
      } else if (/^[A-Z]$/.test(letter)) {
        handleLetter(letter);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, isLevelComplete, isGameOver, handleGuess, handleDelete, handleLetter]);

  useEffect(() => {
    if (isLevelComplete) {
      const timer = setTimeout(() => {
        if (level < WORDS.length - 1) {
          setLevel(prevLevel => prevLevel + 1);
          setGuesses([]);
          setCurrentGuess('');
          setIsLevelComplete(false);
          setUsedLetters({});
        } else {
          setIsGameWon(true);
          setIsGameOver(true);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLevelComplete, level]);

  

  const handleRetryLevel = () => {
    setGuesses([]);
    setCurrentGuess('');
    setIsGameOver(false);
    setRevealedWord('');
    setUsedLetters({});
    setHintUsed(false);
  };

  const handleRestartGame = () => {
    setLevel(0);
    setGuesses([]);
    setCurrentGuess('');
    setIsGameOver(false);
    setIsGameWon(false);
    setIsLevelComplete(false);
    setRevealedWord('');
    setUsedLetters({});
    setHintUsed(false);
  };

  const handleUseHint = () => {
    setHintUsed(true);
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mb-2">Level: {level + 1}</p>
      <Grid guesses={guesses} currentGuess={currentGuess} targetWord={targetWord} />
      <div className="flex gap-4 mb-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" disabled={hintUsed}>
              Hint
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                Using a hint will make the game easier. Are you sure you want to use a hint?
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center justify-center">
                {!hintUsed && hint ? `The first letter is: ${hint}` : "No hint available."}
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" onClick={handleUseHint}>
                Use Hint
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Keyboard
        handleLetter={handleLetter}
        handleDelete={handleDelete}
        handleGuess={handleGuess}
        usedLetters={usedLetters}
        disabled={isLevelComplete || isGameOver}
      />

      {isLevelComplete && (
        <LevelComplete level={level} guesses={guesses} />
      )}

      {isGameOver && (
        <GameOver
          revealedWord={revealedWord}
          onRetryLevel={handleRetryLevel}
          onRestartGame={handleRestartGame}
          isGameWon={isGameWon}
        />
      )}
    </div>
  );
};
