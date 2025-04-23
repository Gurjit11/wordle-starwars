
import React from 'react';

interface TileProps {
  letter: string;
  state: 'default' | 'green' | 'yellow' | 'gray';
}

const colorMap = {
  default: 'bg-transparent border-2 border-gray-500',
  green: 'bg-green-500 text-white',
  yellow: 'bg-yellow-500 text-black',
  gray: 'bg-gray-500 text-white',
};

export const Tile = ({ letter, state }: TileProps) => {
  const style = colorMap[state];

  return (
    <div className={`w-12 h-12 rounded-md border-2 text-2xl font-bold flex items-center justify-center uppercase ${style}`}>
      {letter}
    </div>
  );
};
