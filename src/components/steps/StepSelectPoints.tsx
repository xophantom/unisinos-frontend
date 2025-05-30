import React from 'react';
import Header from '../common/Header';
import ColorBox from '../common/ColorBox';
import ConfirmButton from '../common/ConfirmButton';
import { usePoints } from '@/context/PointsContext';

const colorOptions = [
  { color: '#ED174C' }, // Direito
  { color: '#008FD5' }, // Gestão e Negócios 
  { color: '#9ACA3C' }, // Saúde
  { color: '#00A79D' }, // Politécnica
  { color: '#F58220' }, // Humanidades
  { color: '#D01481' }, // Indústria Criativa
];

const StepSelectPoints: React.FC = () => {
  const { points, setPoints, maxPoints, analyzeColors, loading, error } = usePoints();
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
    <div style={{width: '70%'}} className="relative ml-24 mr-24">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg">
        <Header />
        <p className="text-center text-gray-700 text-lg mb-4">
          Informe qual a cor da caixa que você escolheu:
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {colorOptions.map((opt, idx) => (
            <ColorBox
              key={idx}
              color={opt.color}
              label={points[idx] > 0 ? `${points[idx]}x` : ''}
              onClick={() => handleBoxClick(idx)}
            />
          ))}
        </div>
        <button
          className="text-xs text-blue-500 underline mb-12"
          onClick={handleClear}
          type="button"
          disabled={loading}
        >
          Limpar pontos
        </button>

        {loading && <span className="text-xs text-gray-500 mt-2">Analisando afinidade...</span>}
        {error && <span className="text-xs text-red-500 mt-2">{error}</span>}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-11/12 max-w-xs">
        <ConfirmButton onClick={analyzeColors} disabled={totalPoints !== maxPoints || loading} />
      </div>
    </div>
  );
};

export default StepSelectPoints; 