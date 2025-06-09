import React from 'react';

import HeroSection from './components/HeroSection';
import ProblemToSolveSection from './components/ProblemToSolveSection';
import SolutionSection from './components/SolutionSection';
import KillerFutureSection from './components/KillerFutureSection';
import FuturesSection from './components/FuturesSection';
import ProjectSection from './components/ProjectSection';
import TechnicalChallenges from './components/TechnicalChallenges';
import ResultSection from './components/ResultSection';
import IPageStatus from '../../interfaces/IPageStatus';
import { muktaVaaniFont } from '../../fonts/MainFonts';

import styles from './sass/MarineSafety.module.scss';

function MarineSafetyView({ saleUrl }: IPageStatus) {
  return (
    <div className={`${styles.marineSafetyContainer} ${muktaVaaniFont.variable}`}>
      <HeroSection />
      <ProblemToSolveSection />
      <SolutionSection />
      <KillerFutureSection />
      <FuturesSection />
      <ProjectSection saleUrl={saleUrl} />
      <TechnicalChallenges saleUrl={saleUrl} />
      <ResultSection />
    </div>
  );
}

export default MarineSafetyView;
