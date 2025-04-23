
'use client';

import React from 'react';
import { Game } from '@/components/Game';
import { Toaster } from '@/components/ui/toaster';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-star-wars-black text-star-wars-yellow">
      <h1 className="text-4xl font-bold mb-4">Star Wordle</h1>
      <Game />
      <Toaster />
    </div>
  );
};

export default Home;
