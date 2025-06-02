import React from 'react';
import { SCHOOL_COLORS, usePoints } from '@/context/PointsContext';
import { QRCodeSVG } from 'qrcode.react';
import ColorBox from '../common/ColorBox';

const StepQRCode: React.FC = () => {
  const { reset, school } = usePoints();
  const color = SCHOOL_COLORS[school?.name ?? ''] || '#008FD5';

  return (
    <div style={{width: '70%'}} className="relative ml-24 mr-24 mb-18">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg text-center">
        <p className="text-xl font-bold mb-4" style={{ color: '#194db2' }}>
          Leia o QR Code e Comece Seu Caminho na Unisinos:
        </p>
          <QRCodeSVG
            value={school?.url || 'https://www.unisinos.br'}
            size={230}
            level="H"
            includeMargin={false}
            bgColor="#000000"
            fgColor="#ffffff"
            className="p-2"
          />
        <span className="text-gray-600 text-2xl mb-8 mt-8">Bom evento!</span>
      </div>


      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-11/12 max-w-xs">
        <ColorBox
          textColor="#ffffff"
          color={color}
          label="Finalizar"
          width="w-full"
          height="h-12"
          onClick={() => reset()}
        />
      </div>
    </div>
  );
};

export default StepQRCode; 