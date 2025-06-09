import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ContentText from '../ContentText/ContentText';
import ImageComponent from '../Image/Image';
import MainTitle from '../MainTitle/MainTitle';
import { firstColun, secondColun } from './data/CaseStudiesSeeAllCasesData';
import PageLinks from '../../constants/PageLinks';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import ImageBg from '@/images/caseStudies/seAllCases/img_caseStudiesSeeAllCasesBg@2x.webp';
import ImageBgTablet from '@/images/caseStudies/seAllCases/img_caseStudiesSeeAllCasesBgTablet@2x.webp';
import ImageBgMobile from '@/images/caseStudies/seAllCases/img_caseStudiesSeeAllCasesBgMobile@2x.webp';
import IPageStatus from '../../interfaces/IPageStatus';
import LinkButtonPrimary from 'components/UI/LinkButtonPrimary/LinkButtonPrimary';

import styles from './sass/caseStudiesSeeAllCases.module.scss';

function CaseStudiesSeeAllCases({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: ImageBg,
    };
    if (isMDDevice) {
      bg.background = ImageBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = ImageBgMobile;
    }
    return bg;
  };

  return (
    <div className={styles.blockContainer}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <MainTitle tag="h3" className={styles.title}>
            Explore our works
          </MainTitle>
          <ContentText tag="p" className={styles.text}>
            Click here to immerse yourself in a world of exceptional web design. Our portfolio
            awaits, showcasing our finest works.
          </ContentText>
          <LinkButtonPrimary
            styleContainer={styles.btn}
            text="View case studies"
            path={saleUrl ? '/' : PageLinks.CASE_STUDIES}
          />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageColum}>
            {firstColun && firstColun.map((item, index) => (
              <div
                key={[item, index].join('_')}
                className={styles.imageContainer}
              >
                <ImageComponent
                  src={item}
                  alt="image"
                  sizes="100vw"
                  quality={80}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          <div className={styles.imageColum}>
            {secondColun && secondColun.map((item, index) => (
              <div
                key={[item, index].join('_')}
                className={styles.imageContainer}
              >
                <ImageComponent
                  src={item}
                  alt="image"
                  sizes="100vw"
                  quality={80}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudiesSeeAllCases;
