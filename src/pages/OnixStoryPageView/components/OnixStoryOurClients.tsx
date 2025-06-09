import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import OnixStoryMap from '../../../assets/images/onixStory/ourClients/img_onixStoryMap@2x.webp';
import OnixStoryMapTablet from '../../../assets/images/onixStory/ourClients/img_onixStoryMapTablet@2x.webp';
import OnixStoryMapMobile from '../../../assets/images/onixStory/ourClients/img_onixStoryMapMobile@2x.webp';
import OnixStoryOurClientsBg from '../../../assets/images/onixStory/ourClients/img_map_bg.webp';
import OnixStoryOurClientsMobile from '../../../assets/images/onixStory/ourClients/img_map_bg_mobile.webp';
import OnixStoryOurClientsTablet from '../../../assets/images/onixStory/ourClients/img_map_bg_tablet.webp';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import onixStoryMapContentData from '../data/onixStoryMapContentData';
import OnixStoryMapItem from './OnixStoryMapItem';
import OnixStoryOurClientsAccordion from './OnixStoryOurClientsAccordion';
import onixStoryMapAccordionData from '../data/onixStoryMapAccordionData';

import styles from '../sass/onixStoryOurClients.module.scss';

function OnixStoryOurClients() {
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: OnixStoryOurClientsBg,
      map: OnixStoryMap,
    };
    if (isMDDevice) {
      bg.background = OnixStoryOurClientsTablet;
      bg.map = OnixStoryMapTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = OnixStoryOurClientsMobile;
      bg.map = OnixStoryMapMobile;
    }
    return bg;
  };

  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  return (
    <section className={styles.section}>
      <ImageComponent src={getBackground().background} alt="background" fill className={styles.background} />
      <div className={styles.content}>
        <MainTitle>
          Onix and international clients
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          Since Onix’s website launch, the company has been serving customers worldwide.
          Over two decades, we have established long-lasting partnerships with clients in Europe,
          the Middle East, East Asia, Australia, the US, and South America. Our geographic market keeps expanding!
        </ContentText>
      </div>
      <div className={styles.mapContainer}>
        <div className={styles.mapImage}>
          <ImageComponent
            src={getBackground().map}
            fill
            className={styles.mapImage}
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          />
        </div>
        {isMobile ? (
          <OnixStoryOurClientsAccordion data={onixStoryMapAccordionData} />
        ) : (
          <div className={styles.animationContainer}>
            {onixStoryMapContentData.map(({
              title, top, left, content, variant,
            }) => (
              <OnixStoryMapItem
                key={[title, top].join('_')}
                title={title}
                top={top}
                left={left}
                content={content}
                variant={variant}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default OnixStoryOurClients;
