import React from 'react';
import { usePoints, SCHOOL_COLORS, Course } from '@/context/PointsContext';
import ColorBox from '@/components/common/ColorBox';

const getSchoolPreposition = (schoolName: string): string => {
  if (schoolName === 'Politécnica') return '';
  if (schoolName === 'Indústria Criativa') return 'DA';
  return 'DE';
};

const StepSchoolCourses: React.FC = () => {
  const { school, courses, selectCourse, setStep, registerInteraction } = usePoints();
  const color = SCHOOL_COLORS[school?.name ?? ''] || '#008FD5';
  const isDireito = school?.name === 'Direito';

  const handleCourseSelect = async (course: Course) => {
    await registerInteraction(course.id);
    selectCourse(course);
  };

  const schoolTitle = school?.name ? (
    <>
      ESCOLA {getSchoolPreposition(school.name)}<br />
      <span className="text-2xl font-bold" style={{ color }}>{school.name.toUpperCase()}</span>
    </>
  ) : '';

  return (
    <div style={{width: '100%'}} className="relative ml-18 mr-18 mb-12">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg text-center">
        <h2 className="text-lg mb-1" style={{ color: '#194db2' }}>Parabéns!<br />Você tem afinidade com a</h2>
        <h1 className="text-xl font-medium mb-2" style={{ color }}>{schoolTitle}</h1>
        <p className="text-lg text-gray-600 mb-4">Clique no seu curso de interesse e conheça algumas profissões que você poderá seguir.</p>
        <div className={`${isDireito ? 'flex justify-center' : 'grid grid-cols-2'} gap-4 w-full mb-4`}>
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className={!isDireito && index === courses.length - 1 && courses.length % 2 !== 0 ? 'col-span-2 flex justify-center' : ''}
            >
              <ColorBox
                color={color}
                textWeight="bold"
                textSize="text-base"
                label={course.name}
                width={isDireito ? 'w-128' : index === courses.length - 1 && courses.length % 2 !== 0 ? 'w-1/2' : 'w-full'}
                height="h-12"
                onClick={() => handleCourseSelect(course)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-11/12 max-w-xs">
        <ColorBox
          color="#194db2"
          textColor="#3498db"
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