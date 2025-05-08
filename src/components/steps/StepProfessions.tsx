import React from 'react';
import { usePoints } from '@/context/PointsContext';

const StepProfessions: React.FC = () => {
  const { selectedCourse, setStep } = usePoints();

  if (!selectedCourse) return null;

  return (
    <div style={{width: '70%'}} className="relative ml-24 mr-24">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg text-center">
        <p className="text-lg mb-2 " style={{ color: '#194db2' }}>
          Aqui estão algumas das profissões que você poderá exercer se formando na graduação de
          <span className="block font-bold" style={{ color: '#194db2' }}>{selectedCourse.name}:</span>
        </p>
        <div className="flex flex-col gap-2 w-full mb-4">
          {selectedCourse.professions.map((prof, idx) => (
            <div
              key={prof.id}
              className="bg-gray-200 rounded-full px-2 py-2 text-base font-medium  w-full"
              style={{ color: '#194db2' }}
            >
              {idx + 1}- {prof.name}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-11/12 max-w-xs">
        <div className="flex gap-2 w-full">
          <button
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-full font-semibold"
            onClick={() => setStep(1)}
          >
            Voltar
          </button>
          <button
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-full font-semibold"
            onClick={() => setStep(3)}
          >
            Quero saber mais!
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepProfessions; 