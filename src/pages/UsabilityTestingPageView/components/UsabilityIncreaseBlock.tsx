import { useSelector } from 'react-redux';

import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARContent from '../../../components/VRARContent/VRARContent';
import IUsabilityIncreaseBlock from '../interfaces/IUsabilityIncreaseBlock';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import styles from '../sass/usabilityIncreaseBlock.module.scss';

function UsabilityIncreaseBlock({
  blockTitle, businessContextBlockData, data, subText, background,
}: IUsabilityIncreaseBlock) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isSMDevice || isXSDevice;
  return (
    <div className={styles.conteiner}>
      <div className={styles.background}>
        <ImageComponent
          src={background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <div className={styles.contentContainer}>
        <BusinessContext
          title={businessContextBlockData.title}
          leftContent={businessContextBlockData.leftContent}
          rightContent={businessContextBlockData.rightContent}
          classes={{ section: '!pt-0 pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]' }}
        />
        <VRARContent className={styles.content}>
          <VRARContent className={styles.blockTitleContainer}>
            <MainTitle className={styles.blockTitle} tag="h3">
              {blockTitle}
            </MainTitle>
          </VRARContent>
          <div className={styles.contentItems}>
            {data.map(({ title, cards }) => (
              <VRARContent key={title} className={styles.contentItem}>
                <VRARContent className={styles.contentTitleContainer}>
                  <MainTitle className={styles.contentTitle} tag="p">
                    {title}
                  </MainTitle>
                </VRARContent>
                <div className={styles.cards}>
                  {cards.map(({ cardTitle, cardImg, cardImgMobile }) => (
                    <VRARContent key={cardTitle} className={styles.card}>
                      <VRARContent className={styles.cardTitleContainer}>
                        <MainTitle className={styles.cardTitle} tag="p">
                          {cardTitle}
                        </MainTitle>
                      </VRARContent>
                      <VRARContent className={styles.cardImg}>
                        <ImageComponent
                          src={isMobile ? cardImgMobile : cardImg}
                          alt="card Img"
                          sizes="100vw"
                        />
                      </VRARContent>
                    </VRARContent>
                  ))}
                </div>
              </VRARContent>
            ))}
          </div>
        </VRARContent>
        <VRARContent>
          <MainTitle className={styles.subText} tag="p">
            {subText}
          </MainTitle>
        </VRARContent>
      </div>
    </div>
  );
}

export default UsabilityIncreaseBlock;
