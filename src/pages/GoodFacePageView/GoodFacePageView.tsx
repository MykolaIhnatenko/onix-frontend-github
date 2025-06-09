import GoodFaceMainSection from './components/GoodFaceMainSection';
import GoodFaceForSection from './components/GoodFaceForSection';
import GoodFaceResultSection from './components/GoodFaceResultSection';
import GoodFaceBenefitsSection from './components/GoodFaceBenefitsSection';
import GoodFaceContactUsSection from './components/GoodFaceContactUsSection';
import GoodFaceBusinessSection from './components/GoodFaceBusinessSection';
import GoodFaceProductSection from './components/GoodFaceProductSection';
import GoodFaceSolutionsSection from './components/GoodFaceSolutionsSection';
import GoodFaceEffortSection from './components/GoodFaceEffortSection';
import GoodFaceTechnologySection from './components/GoodFaceTechnologySection';
import GoodFaceLastSection from './components/GoodFaceLastSection';
import contactUs2ContentData from './data/contactUs2ContentData';
import contactUs1ContentData from './data/contactUs1ContentData';
import SatoshiFont from '../../fonts/SatoshiFont';
import PlayfairDisplayFont from '../../fonts/PlayfairDisplayFont';
import IPageStatus from 'interfaces/IPageStatus';
import { ButtonType } from 'constants/enums';

import styles from './sass/goodFacePageView.module.scss';

function GoodFacePageView({ saleUrl }: IPageStatus) {
  return (
    <div className={`${styles.goodFace} ${PlayfairDisplayFont.variable} ${SatoshiFont.variable}`}>
      <GoodFaceMainSection />
      <GoodFaceForSection />
      <GoodFaceResultSection />
      <GoodFaceBenefitsSection />
      {!saleUrl && (
        <GoodFaceContactUsSection
          idBtn={ButtonType.CASE}
          bg={contactUs1ContentData.bg}
          bgMobile={contactUs1ContentData.bgMobile}
          title={contactUs1ContentData.title}
          btnTitle={contactUs1ContentData.btnTitle}
        />
      )}
      <GoodFaceBusinessSection />
      <GoodFaceProductSection />
      <GoodFaceSolutionsSection />
      <GoodFaceEffortSection />
      <GoodFaceTechnologySection />
      <GoodFaceLastSection />
      {!saleUrl && (
        <GoodFaceContactUsSection
          idBtn={ButtonType.CASE2}
          btnTitle={contactUs2ContentData.btnTitle}
          bg={contactUs2ContentData.bg}
          bgMobile={contactUs2ContentData.bgMobile}
          title={contactUs2ContentData.title}
          type="second"
        />
      )}
    </div>
  );
}

export default GoodFacePageView;
