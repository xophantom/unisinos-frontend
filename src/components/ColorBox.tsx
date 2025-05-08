/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface ColorBoxProps {
  color: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color, label, selected, onClick }) => {
  return (
    <button
      className={`w-40 h-22 rounded-2xl flex items-center justify-center font-bold text-white text-2xl shadow-md transition-all border-4 border-transparent`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ColorBox; 