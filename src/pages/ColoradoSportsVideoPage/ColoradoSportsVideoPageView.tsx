import { useAppSelector } from '../../hook/reduxToolkit';
import ColoradoSportsVideoPurposeSection from './components/ColoradoSportsVideoPurposeSection';
import ColoradoSportsVideoMainSection from './components/ColoradoSportsVideoMainSection';
import ColoradoSportsVideoBusinessSection from './components/ColoradoSportsVideoBusinessSection';
import ColoradoSportsVideoNeedSection from './components/ColoradoSportsVideoNeedSection';
import ColoradoSportsVideoRequirementsSection from './components/ColoradoSportsVideoRequirementsSection';
import ColoradoSportsVideoTechnologySection from './components/ColoradoSportsVideoTechnologySection';
import ColoradoSportsVideoResultSection from './components/ColoradoSportsVideoResultSection';
import ColoradoSportsVideoTestimonialSection from './components/ColoradoSportsVideoTestimonialSection';
import ColoradoSportsVideoProjectsSection from './components/ColoradoSportsVideoProjectsSection';
import ColoradoSportsVideoContactUsSection from './components/ColoradoSportsVideoContactUsSection';
import ColoradoSportsVideoCarousels from './components/ColoradoSportsVideoCarousels';
import ColoradoSportsVideoOurSolutionsSection from './components/ColoradoSportsVideoOurSolutionsSection';
import { firstContactUsContent, secondContactUsContent } from './data/contactUsData';
import SatoshiFont from '../../fonts/SatoshiFont';
import IColoradoView from './interfaces/IColoradoView';
import { MD_DEVICE } from '../../constants/constants';
import { ButtonType } from 'constants/enums';

import styles from './sass/coloradoSportsVideoPageView.module.scss';

function ColoradoSportsVideoPageView({ projects, saleUrl }: IColoradoView) {
  const { screenWidth } = useAppSelector((state) => state.app.screenSizes);
  const isNotSmallDevice = screenWidth >= MD_DEVICE;

  return (
    <div className={`${styles.coloradoSportsVideo} ${SatoshiFont.variable}`}>
      {isNotSmallDevice && <ColoradoSportsVideoCarousels />}
      <ColoradoSportsVideoMainSection />
      <ColoradoSportsVideoPurposeSection />
      <div className={styles.doubleSection}>
        <ColoradoSportsVideoBusinessSection />
        <div className={styles.rightCol}>
          <ColoradoSportsVideoNeedSection />
          <ColoradoSportsVideoRequirementsSection />
        </div>
      </div>
      {!saleUrl && (
        <ColoradoSportsVideoContactUsSection content={firstContactUsContent} idBtn={ButtonType.CASE} />
      )}
      <ColoradoSportsVideoOurSolutionsSection />
      <ColoradoSportsVideoTechnologySection />
      <ColoradoSportsVideoResultSection />
      <ColoradoSportsVideoTestimonialSection />
      {projects && <ColoradoSportsVideoProjectsSection projects={projects} />}
      {!saleUrl && (
        <ColoradoSportsVideoContactUsSection content={secondContactUsContent} idBtn={ButtonType.CASE2} />
      )}
    </div>
  );
}

export default ColoradoSportsVideoPageView;
