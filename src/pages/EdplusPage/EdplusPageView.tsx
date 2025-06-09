import EdplusMainSection from './components/EdplusMainSection';
import EdplusAboutCompany from './components/EdplusAboutCompany';
import EdplusCaseStudy from './components/EdplusCaseStudy';
import EdplusMobileApplications from './components/EdplusMobileApplications';
import EdplusUniqueFeatures from './components/EdplusUniqueFeatures';
import EdplusResult from './components/EdplusResult';
import IEdplusPageView from './interfaces/IEdplusPageView';
import { muktaVaaniFont } from '../../fonts/MainFonts';

import styles from './sass/edplus.module.scss';

function EdplusPageView({ videoClicked, handleOnCLick }: IEdplusPageView) {
  return (
    <div className={`${styles.edplus} ${muktaVaaniFont.variable}`}>

      <EdplusMainSection />
      <EdplusCaseStudy />
      <EdplusAboutCompany
        videoClicked={videoClicked}
        handleOnCLick={handleOnCLick}
      />
      <EdplusMobileApplications />
      <EdplusUniqueFeatures />
      <EdplusResult />
    </div>
  );
}

export default EdplusPageView;
