import { useAppSelector } from 'hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import BigNumberCard from '../../../components/BigNumberCard/BigNumberCard';
import cardsData from '../data/cardData';
import { BigNumberCardVariant } from '../../../constants/enums';
import KeyBokBgLarge from '@/images/keyBokPage/cards/img_cardsBgLarge.webp';
import KeyBokBgDesktop from '@/images/keyBokPage/cards/img_cardsBg.webp';
import KeyBokBgTablet from '@/images/keyBokPage/cards/img_cardsBgTablet.webp';
import KeyBokBgMobile from '@/images/keyBokPage/cards/img_cardsBgMobile.webp';

import styles from '../sass/bigCard.module.scss';

function KeybokBigCardBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      screenWidth,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    if (screenWidth >= 1920) {
      return KeyBokBgLarge;
    }

    if (isMDDevice || isSMDevice) {
      return KeyBokBgTablet;
    }

    if (isXSDevice) {
      return KeyBokBgMobile;
    }

    return KeyBokBgDesktop;
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground()}
          alt="trust_us_bg"
          sizes="100vw"
          quality={92}
        />
      </div>
      <PageContainer className={styles.container}>
        <VRARContent>
          <MainTitle className={styles.title}>
            Benefits of Keybok
          </MainTitle>
        </VRARContent>
        <div className={styles.list}>
          {cardsData.map(({ id, title }) => (
            <BigNumberCard
              key={id}
              id={id}
              title={title}
              variant={BigNumberCardVariant.KEY_BOK}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default KeybokBigCardBlock;
