import React from 'react';
import EducationalExperience from './components/EducationalExperience';
import GenInfoSection from './components/GenInfoSection';
import PracticalExperience from './components/PracticalExperience';
import './styles/App.css';

export default function App() {
  return (
    <main className="flex">
      <GenInfoSection />
      <EducationalExperience />
      <PracticalExperience />
    </main>
  );
}
