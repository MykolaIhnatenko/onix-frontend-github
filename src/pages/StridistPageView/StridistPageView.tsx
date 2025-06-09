import StridistMainSection from './components/StridistMainSection';
import StridistGraySection from './components/StridistGraySection';
import StridistResponsibilitiesSection from './components/StridistResponsibilitiesSection';
import StridistContactUsSection from './components/StridistContactUsSection';
import StridistForUsersSection from './components/StridistForUsersSection';
import RunningString from './components/RunningString';
import StridistRealizationSection from './components/StridistRealizationSection';
import StridistDesignSolutionsSection from './components/StridistDesignSolutionsSection';
import StridistTechnologySection from './components/StridistTechnologySection';
import StridistTestimonialSection from './components/StridistTestimonialSection';
import StridistResultSection from './components/StridistResultSection';
import StridistBenefitsSection from './components/StridistBenefitsSection';
import StridistValueSection from './components/StridistValueSection';
import { ButtonType } from 'constants/enums';
import businessChallengeContent from './data/businessChallengeContent';
import approachContent from './data/approachContent';
import BusinessChallenge from '@/images/StridistPage/img_business-challenge@2x.webp';
import Approach from '@/images/StridistPage/img_approach@2x.webp';
import IPageStatus from '../../interfaces/IPageStatus';
import SatoshiFont from '../../fonts/SatoshiFont';

import styles from './sass/stridistPageView.module.scss';

function StridistPageView({ saleUrl }: IPageStatus) {
  return (
    <div className={`${styles.stridist} stridist ${SatoshiFont.variable}`}>
      <StridistMainSection />
      <StridistGraySection
        sectionContent={businessChallengeContent}
        img={BusinessChallenge}
        cardType="businessChallengeContent"
        type="business"
        saleUrl={saleUrl}
      />
      <StridistResponsibilitiesSection />
      <StridistBenefitsSection />
      {!saleUrl && (
        <StridistContactUsSection type="" idBtn={ButtonType.CASE}>
          <div className={styles.contactUsTitleBlock}>
            <h2 className={`${styles.contactUsTitle}`}>
              Use our expertise&nbsp;
              to&nbsp;digitalize
              your&nbsp;fitness business and grow fast!
            </h2>
          </div>
        </StridistContactUsSection>
      )}
      <StridistGraySection
        img={Approach}
        sectionContent={approachContent}
        type="approach"
        cardType="businessChallengeContent approach"
        saleUrl={saleUrl}
      />
      <StridistForUsersSection />
      <RunningString title="Technical realization" type="leftAnimation" />
      <StridistRealizationSection />
      <RunningString title="Onix design solutions" type="rightAnimation" />
      <StridistDesignSolutionsSection />
      <RunningString title="Technology used to build Stridist" type="leftAnimation" />
      <StridistTechnologySection />
      <StridistTestimonialSection />
      <StridistResultSection />
      <StridistValueSection />
      {!saleUrl && (
        <StridistContactUsSection idBtn={ButtonType.CASE2} type="lastSection">
          <div className={styles.contactUsTitleBlock}>
            <h2 className={styles.contactUsSecondTitle}>
              Have a project in mind?
              <br />
              Let’s start tight-knit cooperation!
            </h2>
          </div>
        </StridistContactUsSection>
      )}
    </div>
  );
}

export default StridistPageView;
