import React from 'react';
import { usePoints } from '@/context/PointsContext';
import { QRCodeSVG } from 'qrcode.react';

const StepQRCode: React.FC = () => {
  const { reset, school } = usePoints();

  return (
    <div style={{width: '70%'}} className="relative ml-24 mr-24">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg text-center">
        <p className="text-xl font-medium mb-4" style={{ color: '#194db2' }}>
          Leia o QR Code e Comece Seu Caminho Aqui Na Unisinos:
        </p>
        <div className="w-60 h-60 bg-indigo-900 rounded-xl mx-auto mb-2 flex items-center justify-center">
          <QRCodeSVG
            value={school?.url || 'https://www.unisinos.br'}
            size={200}
            level="H"
            includeMargin={false}
            bgColor="#312c85"
            fgColor="#ffffff"
          />
        </div>
        <span className="text-gray-600 text-lg mb-4">Bom evento!</span>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-11/12 max-w-xs">
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-full font-semibold"
          onClick={reset}
        >
          Finalizar
        </button>
      </div>
    </div>
  );
};

export default StepQRCode; 