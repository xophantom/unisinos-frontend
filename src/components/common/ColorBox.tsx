 
import React from 'react';

interface ColorBoxProps {
  color: string;
  textColor?: string;
  textWeight?: string;
  label: string;
  onClick?: () => void;
  width?: string;
  height?: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ 
  color, 
  textColor = 'text-blue-800',
  label, 
  textWeight = 'font-bold',
  onClick,
  width = 'w-40',
  height = 'h-22'
}) => {

  return (
    <button
      className={`
        ${width} 
        ${height} 
        rounded-2xl 
        flex 
        font-bold
        items-center 
        justify-center 
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
      style={{ backgroundColor: color, color: textColor, fontWeight: textWeight }}
      onClick={onClick}

    >
      {label}
    </button>
  );
};

export default ColorBox; 