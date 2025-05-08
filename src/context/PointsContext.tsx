import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipos
interface Profession {
  id: number;
  name: string;
  description: string | null;
}

interface Course {
  id: number;
  name: string;
  description: string | null;
  professions: Profession[];
}

interface School {
  id: number;
  name: string;
  color: string;
  url: string;
  isActive: boolean;
}

interface PointsContextProps {
  points: number[];
  setPoints: React.Dispatch<React.SetStateAction<number[]>>;
  maxPoints: number;
  step: number;
  setStep: (step: number) => void;
  reset: () => void;
  school: School | null;
  courses: Course[];
  selectedCourse: Course | null;
  selectCourse: (course: Course) => void;
}

const PointsContext = createContext<PointsContextProps | undefined>(undefined);

const MAX_POINTS = 7;
const COLOR_COUNT = 6;

// MOCK: dados da API
const MOCK_DATA = {
  school: {
    id: 3,
    name: 'Saúde',
    color: 'verde claro',
    url: 'https://www.unisinos.br/escolas/saude',
    isActive: true,
  },
  courses: [
    {
      id: 53,
      name: 'Biomedicina',
      description: null,
      professions: [
        { id: 261, name: 'Biomédico', description: null },
        { id: 262, name: 'Pesquisador em Biomedicina', description: null },
        { id: 263, name: 'Analista Clínico', description: null },
        { id: 264, name: 'Especialista em Análises Clínicas', description: null },
        { id: 265, name: 'Consultor em Biomedicina', description: null },
      ],
    },
    {
      id: 54,
      name: 'Educação Física',
      description: null,
      professions: [
        { id: 266, name: 'Professor de Educação Física', description: null },
        { id: 267, name: 'Personal Trainer', description: null },
        { id: 268, name: 'Preparador Físico', description: null },
        { id: 269, name: 'Fisioterapeuta Esportivo', description: null },
        { id: 270, name: 'Gestor Esportivo', description: null },
      ],
    },
    // ...adicione mais cursos se quiser
  ],
};

export const SCHOOL_COLORS: Record<string, string> = {
  'Direito': '#ED174C',
  'Gestão e Negócios': '#008FD5',
  'Saúde': '#9ACA3C',
  'Politécnica': '#00A79D',
  'Humanidades': '#F58220',
  'Indústria Criativa': '#D01481',
};

export const PointsProvider = ({ children }: { children: ReactNode }) => {
  const [points, setPoints] = useState<number[]>(Array(COLOR_COUNT).fill(0));
  const [step, setStep] = useState(0); // 0 = seleção, 1 = escola/cursos, 2 = profissões, 3 = QRCode
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const reset = () => {
    setPoints(Array(COLOR_COUNT).fill(0));
    setStep(0);
    setSelectedCourse(null);
  };

  const selectCourse = (course: Course) => {
    setSelectedCourse(course);
    setStep(2);
  };

  return (
    <PointsContext.Provider value={{
      points,
      setPoints,
      maxPoints: MAX_POINTS,
      step,
      setStep,
      reset,
      school: MOCK_DATA.school,
      courses: MOCK_DATA.courses,
      selectedCourse,
      selectCourse,
    }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = () => {
  const context = useContext(PointsContext);
  if (!context) throw new Error('usePoints deve ser usado dentro de PointsProvider');
  return context;
}; 