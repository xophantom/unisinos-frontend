import React from "react";
import { SCHOOL_COLORS, usePoints } from "@/context/PointsContext";
import ColorBox from "@/components/common/ColorBox";

const StepProfessions: React.FC = () => {
  const { selectedCourse, setStep, school } = usePoints();
  const color = SCHOOL_COLORS[school?.name ?? ''] || '#008FD5';


  if (!selectedCourse) return null;

  return (
    <div style={{ width: "70%" }} className="relative ml-24 mr-24">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg text-center">
        <p className="text-lg mb-2 " style={{ color: "#194db2" }}>
        Aqui estão algumas carreiras que
        você poderá seguir ao se formar em
          <span className="block font-bold" style={{ color: "#194db2" }}>
            {selectedCourse.name}:
          </span>
        </p>
        <div className="flex flex-col gap-4 w-full mb-4">
          {selectedCourse.professions.map((prof, idx) => (
            <ColorBox
              key={prof.id}
              color="#E5E7EB"
              textColor="#194db2"
              textWeight="normal"
              label={`${idx + 1}- ${prof.name}`}
              width="w-full"
              height="h-12"
            />
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-11/12">
        <div className="flex justify-center gap-8 w-full">
          <ColorBox
            color="#194db2"
            textColor="#3498db"
            label="Voltar"
            width="w-60"
            height="h-12"
            onClick={() => setStep(1)}
          />
          <ColorBox
            color={color}
            textColor="#ffffff"
            label="Quero saber mais!"
            width="w-90"
            height="h-12"
            onClick={() => setStep(3)}
          />
        </div>
      </div>
    </div>
  );
};

export default StepProfessions;
