import React from 'react';

interface ColorBoxProps {
  color: string;
  textColor?: string;
  textWeight?: 'normal' | 'bold' | '600' | '700' | '800' | '900';
  label: string;
  onClick?: () => void;
  width?: string;
  height?: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ 
  color, 
  textColor = 'text-white',
  label, 
  textWeight = 'bold',
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