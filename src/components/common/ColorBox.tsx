import React from 'react';

interface ColorBoxProps {
  color: string;
  textColor?: string;
  textWeight?: 'normal' | 'bold';
  label: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  selected?: boolean;
}

const ColorBox: React.FC<ColorBoxProps> = ({ 
  color, 
  textColor = 'text-white',
  label, 
  textWeight = 'bold',
  onClick,
  width = 'w-40',
  height = 'h-22',
  selected = false
}) => {
  const isHexColor = textColor?.startsWith('#');
  
  const textColorStyle = isHexColor ? { color: textColor } : {};
  const textColorClass = !isHexColor ? textColor : '';

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
        ${textColorClass}
        shadow-md 
        transition-all 
        duration-150 
        ease-in-out 
        border-4 
        ${selected ? 'border-white' : 'border-transparent'}
        active:scale-95
        active:opacity-80
        hover:opacity-90
        hover:scale-[1.02]
      `}
      style={{ backgroundColor: color, fontWeight: textWeight, ...textColorStyle }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ColorBox; 