'use client';

import React, {useState} from 'react';
import {Game} from '@/components/Game';
import {Toaster} from '@/components/ui/toaster';
import {Button} from '@/components/ui/button';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {useRouter} from 'next/navigation';

const Home = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState(false);
  const router = useRouter();

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(parseInt(level));
  };

  return (
    <div className="flex z-10 flex-col items-center justify-center min-h-screen py-2 bg- text-star-wars-yellow">
      {!gameStarted ? (
        <div className="fade-in">
          <h1 className="text-4xl font-bold mb-4 star-wars-text">Star Wordle</h1>
          <div className="mb-4">
            <Select onValueChange={handleLevelChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Level"/>
              </SelectTrigger>
              <SelectContent>
                {Array.from({length: 10}, (_, i) => (
                  <SelectItem key={i} value={i.toString()}>Level {i + 1}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleStartGame} className="bg-star-wars-yellow hover:bg-star-wars-light-blue w-full text-star-wars-black">
            Start Game
          </Button>
        </div>
      ) : (
        <Game initialLevel={selectedLevel}/>
      )}
      <Toaster/>
    </div>
  );
};

export default Home;
