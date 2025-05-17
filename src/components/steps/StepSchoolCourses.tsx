import React from 'react';
import { usePoints, SCHOOL_COLORS } from '@/context/PointsContext';
import ColorBox from '@/components/common/ColorBox';

const getSchoolPreposition = (schoolName: string): string => {
  if (schoolName === 'Politécnica') return '';
  if (schoolName === 'Indústria Criativa') return 'DA';
  return 'DE';
};

const StepSchoolCourses: React.FC = () => {
  const { school, courses, selectCourse, setStep } = usePoints();
  const color = SCHOOL_COLORS[school?.name ?? ''] || '#008FD5';
  const isDireito = school?.name === 'Direito';

  const schoolTitle = school?.name ? (
    <>
      ESCOLA {getSchoolPreposition(school.name)}<br />
      <span className="text-2xl font-bold" style={{ color }}>{school.name.toUpperCase()}</span>
    </>
  ) : '';

  return (
    <div style={{width: '70%'}} className="relative ml-24 mr-24">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg text-center">
        <h2 className="text-lg font-semibold mb-1" style={{ color }}>Parabéns!<br />Você tem afinidade com a</h2>
        <h1 className="text-xl font-medium mb-2" style={{ color }}>{schoolTitle}</h1>
        <p className="text-lg text-gray-600 mb-4">Clique no seu curso de interesse e conheça algumas profissões que você poderá seguir.</p>
        <div className={`${isDireito ? 'flex justify-center' : 'grid grid-cols-2'} gap-4 w-full mb-4`}>
          {courses.map((course) => (
            <ColorBox
              key={course.id}
              color={color}
              label={course.name}
              width={isDireito ? 'w-128' : 'w-full'}
              height="h-12"
              onClick={() => selectCourse(course)}
            />
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-11/12 max-w-xs">
        <ColorBox
          color={color}
          label="Voltar"
          width="w-full"
          height="h-12"
          onClick={() => setStep(0)}
        />
      </div>
    </div>
  );
};

export default StepSchoolCourses; 