import React from 'react';
import Header from './Header';
import ColorBox from './ColorBox';
import ConfirmButton from './ConfirmButton';
import { usePoints } from '@/context/PointsContext';

const colorOptions = [
  { color: '#ED174C' }, // Escola de Direito
  { color: '#008FD5' }, // Escola de Gestão e Negócios 
  { color: '#9ACA3C' }, // Escola de Saúde
  { color: '#00A79D' }, // Escola Politécnica
  { color: '#F58220' }, // Escola de Humanidades:
  { color: '#D01481' }, // Escola da Industria Criativa
];

const StepSelectPoints: React.FC = () => {
  const { points, setPoints, maxPoints, setStep } = usePoints();
  const totalPoints = points.reduce((acc, val) => acc + val, 0);

  const handleBoxClick = (idx: number) => {
    if (totalPoints < maxPoints) {
      setPoints((points: number[]) => {
        const updated = [...points];
        updated[idx] += 1;
        return updated;
      });
    }
  };

  const handleClear = () => setPoints(Array(colorOptions.length).fill(0));

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-4xl p-6 flex flex-col items-center shadow-lg">
      <Header />
      <p className="text-center text-gray-700 text-base mb-4">
        Informe qual a cor da caixa que você escolheu:
      </p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {colorOptions.map((opt, idx) => (
          <ColorBox
            key={idx}
            color={opt.color}
            label={points[idx] > 0 ? `${points[idx]}x` : ''}
            selected={points[idx] > 0}
            onClick={() => handleBoxClick(idx)}
          />
        ))}
      </div>
      <button
        className="text-xs text-blue-500 underline mb-2"
        onClick={handleClear}
        type="button"
      >
        Limpar pontos
      </button>
      <ConfirmButton onClick={() => setStep(1)} disabled={totalPoints !== maxPoints} />
    </div>
  );
};

export default StepSelectPoints; 