import React from 'react';
import { usePoints } from '@/context/PointsContext';

const StepQRCode: React.FC = () => {
  const { reset } = usePoints();

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg text-center">
      <p className="text-blue-700 font-semibold mb-4">Leia o QR Code e Comece Seu Caminho Aqui Na Unisinos:</p>
      <div className="w-40 h-40 bg-indigo-900 rounded-xl mx-auto mb-2 flex items-center justify-center">
        {/* QRCODE */}
      </div>
      <span className="text-gray-600 text-sm mb-4">Bom evento!</span>
      <button
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-full font-semibold"
        onClick={reset}
      >
        Finalizar
      </button>
    </div>
  );
};

export default StepQRCode; 