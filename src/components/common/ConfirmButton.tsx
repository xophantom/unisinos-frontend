import React from 'react';

interface ConfirmButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      className="w-full py-3 rounded-full bg-pink-500 text-white font-bold text-lg mt-6 shadow-lg transition-opacity disabled:bg-pink-200"
      onClick={onClick}
      disabled={disabled}
    >
      Confirmar
    </button>
  );
};

export default ConfirmButton; 