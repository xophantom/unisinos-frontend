import React from 'react';
import { usePoints, SCHOOL_COLORS } from '@/context/PointsContext';

const StepSchoolCourses: React.FC = () => {
  const { school, courses, selectCourse, setStep } = usePoints();
  const color = SCHOOL_COLORS[school?.name ?? ''] || '#008FD5';

  return (
    <div style={{width: '70%'}} className="relative ml-24 mr-24">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg text-center">
        <h2 className="text-lg font-semibold mb-1" style={{ color }}>Parabéns!<br />Você tem afinidade com a</h2>
        <h1 className="text-xl font-medium mb-2" style={{ color }}>ESCOLA DE<br />
          <span className="text-2xl font-bold" style={{ color }}>{school?.name?.toUpperCase()}</span></h1>
        <p className="text-lg text-gray-600 mb-4">Clique para ver os cursos referente a essa Escola:</p>
        <div className="grid grid-cols-2 gap-2 w-full mb-4">
          {courses.map((course) => (
            <button
              key={course.id}
              className="text-white rounded-full px-2 py-2 text-xs font-semibold transition w-full"
              style={{ backgroundColor: color }}
              onClick={() => selectCourse(course)}
            >
              {course.name}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-11/12 max-w-xs">
        <button
          className="w-full px-4 py-2 text-white rounded-full font-semibold"
          style={{ backgroundColor: color }}
          onClick={() => setStep(0)}
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default StepSchoolCourses; 