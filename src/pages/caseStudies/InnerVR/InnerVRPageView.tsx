import InnerVRMainSection from './components/InnerVRMainSection';
import InnerVRAboutSection from './components/InnerVRAboutSection';
import InnerVRProblemSection from './components/InnerVRProblemSection';
import InnerVRWorksSection from './components/InnerVRWorksSection';
import InnerVRMeditationsSection from './components/InnerVRMeditationsSection';
import InnerVRContactUsSection from './components/InnerVRContactUsSection';
import InnerVRWorldsSection from './components/InnerVRWorldsSection';
import InnerVRProjectSection from './components/InnerVRProjectSection';
import InnerVRChallengesSection from './components/InnerVRChallengesSection';
import InnerVRTeamAndStackSection from './components/InnerVRTeamAndStackSection';
import InnerVRBuiltSection from './components/InnerVRBuiltSection';
import InnerVRTestimonialSection from './components/InnerVRTestimonialSection';
import InnerVRSolutionsSection from './components/InnerVRSolutionsSection';
import IPageStatus from '../../../interfaces/IPageStatus';
import SatoshiFont from '../../../fonts/SatoshiFont';
import { ButtonType } from 'constants/enums';

import styles from './sass/InnerVRPageView.module.scss';

function InnerVRPageView({ saleUrl }: IPageStatus) {
  return (
    <div className={`${styles.innerVR} ${SatoshiFont.variable}`}>
      <InnerVRMainSection />
      <InnerVRAboutSection />
      <InnerVRProblemSection />
      <InnerVRWorksSection />
      <InnerVRMeditationsSection saleUrl={saleUrl} />
      {!saleUrl && <InnerVRContactUsSection idBtn={ButtonType.CASE} />}
      <InnerVRWorldsSection />
      <InnerVRProjectSection />
      <InnerVRChallengesSection />
      <InnerVRTeamAndStackSection />
      <InnerVRBuiltSection />
      <InnerVRTestimonialSection />
      <InnerVRSolutionsSection />
      {!saleUrl && <InnerVRContactUsSection idBtn={ButtonType.CASE2} />}
    </div>
  );
}

export default InnerVRPageView;
