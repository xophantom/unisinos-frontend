"use client"
import React from 'react';
import Background from '@/components/Background';
import { PointsProvider, usePoints } from '@/context/PointsContext';
import StepSelectPoints from '@/components/StepSelectPoints';
import StepSchoolCourses from '@/components/StepSchoolCourses';
import StepProfessions from '@/components/StepProfessions';
import StepQRCode from '@/components/StepQRCode';

const MainContent = () => {
  const { step } = usePoints();
  if (step === 0) return <StepSelectPoints />;
  if (step === 1) return <StepSchoolCourses />;
  if (step === 2) return <StepProfessions />;
  if (step === 3) return <StepQRCode />;
  return null;
};

export default function Home() {
  return (
    <PointsProvider>
      <Background>
        <MainContent />
      </Background>
    </PointsProvider>
  );
}
