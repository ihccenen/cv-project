import React from 'react';
import EducationalExperience from './components/EducationalExperience';
import GenInfoSection from './components/GenInfoSection';
import PracticalExperience from './components/PracticalExperience';

export default function App() {
  return (
    <main>
      <GenInfoSection />
      <EducationalExperience />
      <PracticalExperience />
    </main>
  );
}
