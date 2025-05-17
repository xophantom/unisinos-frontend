/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

interface ColorBoxProps {
  color: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
  width?: string;
  height?: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ 
  color, 
  label, 
  selected, 
  onClick,
  width = 'w-40',
  height = 'h-22'
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <button
      className={`
        ${width} 
        ${height} 
        rounded-2xl 
        flex 
        items-center 
        justify-center 
        font-bold 
        text-white 
        text-2xl 
        shadow-md 
        transition-all 
        duration-150 
        ease-in-out 
        border-4 
        border-transparent
        active:scale-95
        active:opacity-80
        hover:opacity-90
        hover:scale-[1.02]
      `}
      style={{ backgroundColor: color }}
      onClick={onClick}
      onMouseDown={handlePressIn}
      onMouseUp={handlePressOut}
      onMouseLeave={handlePressOut}
      onTouchStart={handlePressIn}
      onTouchEnd={handlePressOut}
    >
      {label}
    </button>
  );
};

export default ColorBox; 