import PhotowhyMainSection from './components/PhotowhyMainSection';
import PhotowhyRedSection from './components/PhotowhyRedSection';
import PhotowhyAboutSection from './components/PhotowhyAboutSection';
import PhotowhyInterfacesSection from './components/PhotowhyInterfacesSection';
import PhotowhyFuturesSection from './components/PhotowhyFuturesSection';
import PhotowhyAboutProjectSection from './components/PhotowhyAboutProjectSection';
import PhotowhyPhotoSection from './components/PhotowhyPhotoSection';
import PhotowhySolutionsSection from './components/PhotowhySolutionsSection';
import PhotowhyResultSection from './components/PhotowhyResultSection';
import PhotowhyLastSection from './components/PhotowhyLastSection';
import PhotowhyButtonSection from './components/PhotowhyButtonSection';
import { muktaVaaniFont } from '../../fonts/MainFonts';
import IPhotowhyCase from './interfaces/IPhotowhyCase';

import styles from './sass/photowhyCasePageView.module.scss';

function PhotowhyCasePageView({
  isMinDesktop, isMobile, cellSpacing, saleUrl,
}:IPhotowhyCase) {
  return (
    <div className={`${styles.photowhy} ${muktaVaaniFont.variable}`}>
      <PhotowhyMainSection
        isMobile={isMobile}
        cellSpacing={cellSpacing}
      />
      <PhotowhyRedSection />
      <PhotowhyAboutSection />
      <PhotowhyInterfacesSection />
      <PhotowhyFuturesSection isMinDesktop={isMinDesktop} />
      <PhotowhyAboutProjectSection saleUrl={saleUrl} />
      <PhotowhyPhotoSection />
      <PhotowhySolutionsSection saleUrl={saleUrl} />
      <PhotowhyResultSection isMobile={isMobile} />
      <PhotowhyLastSection />
      {!saleUrl && <PhotowhyButtonSection />}
    </div>
  );
}

export default PhotowhyCasePageView;
