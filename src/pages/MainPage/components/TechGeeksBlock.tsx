import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import mainAccordionData from '../data/accordionData';
import ImageComponent from '../../../components/Image/Image';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import { ButtonType } from '../../../constants/enums';
import TechGeeksBackground from '@/images/mainPage/img_techGeeksBackground.webp';
import TechGeeksBackgroundMobile from '@/images/mainPage/img_techGeeksBackgroundMobile.webp';
import TechGeeksBackgroundLeftMobile from '@/images/mainPage/img_techGeeksBackgroundLeftMobile.webp';
import TechGeeksBackgroundLeftTablet from '@/images/mainPage/img_techGeeksBackgroundLeftTablet.webp';
import TechGeeksBackgroundTablet from '@/images/mainPage/img_techGeeksBackgroundTablet.webp';
import AccordionBlack from 'components/AccordionBlack/AccordionBlack';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import styles from '../sass/techGeeksBlock.module.scss';

function TechGeeksBlock() {
  const router = useRouter();
  const {
    screenSizes: {
      isLGDevice,
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const dispatch = useDispatch();

  const getBackground = () => {
    const bg: { Main: StaticImageData | string; LeftSection: StaticImageData | string } = {
      Main: TechGeeksBackground,
      LeftSection: '',
    };
    if (isLGDevice) {
      bg.Main = TechGeeksBackgroundTablet;
      bg.LeftSection = '';
    } else if (isMDDevice) {
      bg.Main = TechGeeksBackgroundTablet;
      bg.LeftSection = TechGeeksBackgroundLeftTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.Main = TechGeeksBackgroundMobile;
      bg.LeftSection = TechGeeksBackgroundLeftMobile;
    }
    return bg;
  };

  const showContactForm = () => dispatch(setShowContactForm({ showContactForm: true }));

  return (
    <div className={`d-flex d-row z-1 ${styles.container}`}>
      <div
        className={`d-flex d-col ${styles.leftCol}`}
      >
        {getBackground().LeftSection && (
          <ImageComponent
            src={getBackground().LeftSection}
            alt="background"
            fill
            priority
            sizes="(max-width: 768px) 80vw, (min-width: 768px) 66vw"
            quality={100}
            className={styles.leftColBg}
          />
        )}
        <div className="d-flex d-col">
          <MainTitle tag="h1" capitalize className={styles.mainTitle}>
            tech geeks
            <br className={styles.hideSpace} />
            {' '}
            who&nbsp;keep your business
            <br className={styles.hideSpace} />
            {' '}
            Moving&nbsp;forward
          </MainTitle>
          <ContentText tag="p" className={`d-flex d-self-align-end ${styles.alignEndText}`}>
            We are a full-cycle software development company that helps you visualize your
            software development expectations and deliver predictable results.
          </ContentText>
        </div>
        <div className={styles.bottomBlock}>
          <ContentText tag="p" className={styles.bottomText}>
            Flexible and transparent development. Predictable results. No bureaucracy.
          </ContentText>
          <ButtonPrimary
            id={ButtonType.LAND}
            onClick={showContactForm}
            text="Speak to our expert"
            styleContainer={styles.contactBtn}
          />
        </div>
      </div>
      <div
        className={`d-flex d-col ${styles.rightCol}`}
      >
        <div className={styles.content}>
          <ContentText tag="p" className={styles.focusText}>
            [ We are focused on ]
          </ContentText>
          <AccordionBlack
            data={mainAccordionData(router)}
            activeFirst
            openByHover
            classes={{
              accordionItemTitle: '!px-0',
              accordionItemContent: '!px-0',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TechGeeksBlock;
