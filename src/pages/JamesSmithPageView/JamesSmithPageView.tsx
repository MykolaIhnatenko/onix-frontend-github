import HeeboFont from '../../fonts/HeeboFont';
import SatoshiFont from '../../fonts/SatoshiFont';
import { IJSAPageView } from './interfaces/IJSAPageView';
import JSAMainSection from './components/JSAMainSection';
import JSAAboutSection from './components/JSAAboutSection';
import JSAResponsibleSection from './components/JSAResponsibleSection';
import JSAContactUs from './components/JSAContactUs';
import JSASolutionsSection from './components/JSASolutionsSection';
import JSAStackSection from './components/JSAStackSection';
import JSATestimonialSection from './components/JSATestimonialSection';
import JSAOtherProjectsSection from './components/JSAOtherProjectsSection';
import BlueSpan from './components/BlueSpan';
import { ButtonType } from 'constants/enums';

import styles from './sass/JamesSmithPageView.module.scss';

function JamesSmithPageView({ projects, saleUrl }: IJSAPageView) {
  return (
    <div className={`${styles.sectionsWrapper} ${HeeboFont.variable} ${SatoshiFont.variable}`}>
      <JSAMainSection />
      <JSAAboutSection />
      <JSAResponsibleSection />
      {!saleUrl && (
        <JSAContactUs
          title={(
            <>
              Ready to modernize your fitness business
              <br className={styles.hideTablet} />
              <BlueSpan> by leveraging best-in-class </BlueSpan>
              technologies?
            </>
          )}
          idBtn={ButtonType.CASE}
        />
      )}
      <JSASolutionsSection />
      <JSAStackSection />
      <JSATestimonialSection saleUrl={saleUrl} />
      {projects && <JSAOtherProjectsSection projects={projects} />}
      {!saleUrl && (
        <JSAContactUs
          title={(
            <>
              Looking for
              {' '}
              <BlueSpan>
                a trusted technology
              </BlueSpan>
              <br className={styles.showMobile} />
              <BlueSpan>
                partner
              </BlueSpan>
              <br className={styles.hideMobile} />
              <BlueSpan> to build a custom </BlueSpan>
              sports & fitness solution?
            </>
          )}
          idBtn={ButtonType.CASE2}
          className={styles.contactUsSecond}
        />
      )}
    </div>
  );
}

export default JamesSmithPageView;
