import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import api from '@/lib/axios';
import { getTotemId } from '@/lib/totemId';

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
  quality: string;
  isActive: boolean;
}

interface SchoolMatch {
  school: School;
  colorCount: number;
  percentage: number;
  courses: Course[];
}

interface ColorAnalysis {
  schools: SchoolMatch[];
  colorDistribution: Record<string, number>;
  percentageDistribution: Record<string, number>;
  hasTie: boolean;
}

export const SCHOOL_COLORS: Record<string, string> = {
  'Direito': '#ED174C',
  'Gestão e Negócios': '#008FD5',
  'Saúde': '#9ACA3C',
  'Politécnica': '#00A79D',
  'Humanidades': '#F58220',
  'Indústria Criativa': '#D01481',
};

export const COLOR_LABELS = [
  'vermelho',        // Direito
  'azul',            // Gestão e Negócios
  'verde claro',     // Saúde
  'verde',           // Politécnica
  'laranja',         // Humanidades
  'rosa',            // Indústria Criativa
];

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
  analyzeColors: () => Promise<void>;
  loading: boolean;
  error: string | null;
  totemId: string;
  setTotemId: (id: string) => void;
  schoolMatches: SchoolMatch[];
  setSchoolMatches: React.Dispatch<React.SetStateAction<SchoolMatch[]>>;
  hasTie: boolean;
  setHasTie: React.Dispatch<React.SetStateAction<boolean>>;
  setSchool: (school: School | null) => void;
  setCourses: (courses: Course[]) => void;
}

const PointsContext = createContext<PointsContextProps | undefined>(undefined);

const MAX_POINTS = 7;
const COLOR_COUNT = 6;

export const PointsProvider = ({ children }: { children: ReactNode }) => {
  const [points, setPoints] = useState<number[]>(Array(COLOR_COUNT).fill(0));
  const [step, setStep] = useState(0); 
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [school, setSchool] = useState<School | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totemId, setTotemId] = useState('');
  const [schoolMatches, setSchoolMatches] = useState<SchoolMatch[]>([]);
  const [hasTie, setHasTie] = useState(false);

  useEffect(() => {
    const initTotemId = async () => {
      const id = await getTotemId();
      setTotemId(id);
    };
    initTotemId();
  }, []);

  const reset = () => {
    setPoints(Array(COLOR_COUNT).fill(0));
    setStep(0);
    setSelectedCourse(null);
    setSchool(null);
    setCourses([]);
    setError(null);
    setSchoolMatches([]);
    setHasTie(false);
  };

  const selectCourse = (course: Course) => {
    setSelectedCourse(course);
    setStep(2);
  };

  const analyzeColors = async () => {
    setLoading(true);
    setError(null);
    try {
      const colors: string[] = points.flatMap((count, idx) => Array(count).fill(COLOR_LABELS[idx]));
      const body = {
        colors,
      };
      const response = await api.post<ColorAnalysis>(`/totem/${totemId}/analyze-colors`, body);
      setSchoolMatches(response.data.schools);
      setHasTie(response.data.hasTie);
      
      if (!response.data.hasTie && response.data.schools.length > 0) {
        setSchool(response.data.schools[0].school);
        setCourses(response.data.schools[0].courses);
        setStep(1);
      } else if (response.data.hasTie) {
        setStep(1.5); 
      }
    } catch {
      setError('Erro ao analisar as cores. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PointsContext.Provider value={{
      points,
      setPoints,
      maxPoints: MAX_POINTS,
      step,
      setStep,
      reset,
      school,
      courses,
      selectedCourse,
      selectCourse,
      analyzeColors,
      loading,
      error,
      totemId,
      setTotemId,
      schoolMatches,
      setSchoolMatches,
      hasTie,
      setHasTie,
      setSchool,
      setCourses,
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