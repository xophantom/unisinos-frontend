import React from 'react';
import { usePoints, SCHOOL_COLORS } from '@/context/PointsContext';
import ColorBox from '@/components/common/ColorBox';

const StepTiebreaker = () => {
  const { schoolMatches, setSchool, setCourses, setStep } = usePoints();

  const handleSchoolSelect = (schoolMatch: typeof schoolMatches[0]) => {
    setSchool(schoolMatch.school);
    setCourses(schoolMatch.courses);
    setStep(1);
  };

  return (
    <div style={{width: '70%'}} className="relative ml-24 mr-24">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
          Escolha uma Escola
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Identificamos um empate entre algumas escolas. Por favor, escolha a escola que mais te interessa:
        </p>
        <div className="flex flex-col items-center space-y-4">
          {schoolMatches.map((match) => (
            <ColorBox
              key={match.school.id}
              color={SCHOOL_COLORS[match.school.name]}
              label={match.school.name}
              onClick={() => handleSchoolSelect(match)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepTiebreaker; 