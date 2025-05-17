"use client"
import React from 'react';
import Background from '@/components/common/Background';
import { PointsProvider, usePoints } from '@/context/PointsContext';
import StepSelectPoints from '@/components/steps/StepSelectPoints';
import StepSchoolCourses from '@/components/steps/StepSchoolCourses';
import StepProfessions from '@/components/steps/StepProfessions';
import StepQRCode from '@/components/steps/StepQRCode';
import StepTiebreaker from '@/components/steps/StepTiebreaker';

const MainContent = () => {
  const { step } = usePoints();
  if (step === 0) return <StepSelectPoints />;
  if (step === 1.5) return <StepTiebreaker />;
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
