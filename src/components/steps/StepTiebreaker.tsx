import React from "react";
import { usePoints, SCHOOL_COLORS } from "@/context/PointsContext";
import ColorBox from "@/components/common/ColorBox";

const StepTiebreaker = () => {
  const { schoolMatches, setSchool, setCourses, setStep } = usePoints();

  const handleSchoolSelect = (schoolMatch: (typeof schoolMatches)[0]) => {
    setSchool(schoolMatch.school);
    setCourses(schoolMatch.courses);
    setStep(1);
  };

  return (
    <div style={{ width: "70%" }} className="relative ml-24 mr-24">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg">
        <h1
          className="text-2xl font-bold text-center"
          style={{ color: "#194db2" }}
        >
          Descubra a característica que mais representa você:
        </h1>

        <p className="text-center text-gray-600 mb-8">
        Leia com atenção e escolha o que mais combina com o seu jeito de pensar, agir e se expressar.
        </p>
        
        <div className="flex flex-col items-center space-y-4">
          {schoolMatches.map((match) => (
            <ColorBox
              key={match.school.id}
              width="w-150"
              height="h-20"
              color={SCHOOL_COLORS[match.school.name]}
              label={match.school.quality}
              onClick={() => handleSchoolSelect(match)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepTiebreaker;
