import React from 'react';
import { usePoints } from '@/context/PointsContext';

const StepFeedback: React.FC = () => {
  const { reset } = usePoints();

  return (
    <div className="w-full max-w-xs mx-auto bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg text-center">
      <h2 className="text-xl font-bold text-green-600 mb-2">Sucesso!</h2>
      <p className="mb-4">Seus pontos foram enviados com sucesso.<br/>Em breve você verá o resultado aqui.</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full font-semibold"
        onClick={reset}
      >
        Voltar para o início
      </button>
    </div>
  );
};

export default StepFeedback; 