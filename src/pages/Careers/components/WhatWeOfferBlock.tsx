import React from 'react';
import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import whatWeOfferInfos from '../data/careersWhatWeOfferData';

import CareersWhatWeOfferBg from '@/images/careers/whatWeOffer/img_WhatWeOffer.webp';
import CareersWhatWeOfferBgTablets from '@/images/careers/whatWeOffer/img_WhatWeOfferTablet.webp';
import CareersWhatWeOfferBgMobile from '@/images/careers/whatWeOffer/img_WhatWeOfferMobile.webp';
import styles from '../sass/WhatWeOfferBlock.module.scss';

function WhatWeOfferBlock() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: CareersWhatWeOfferBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = CareersWhatWeOfferBgTablets;
    } else if (isXSDevice) {
      bg.background = CareersWhatWeOfferBgMobile;
    }
    return bg;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        />
      </div>
      <MainTitle className={styles.heading} tag="h2">
        What we offer:
      </MainTitle>
      <div className={styles.cardsContainer}>
        {whatWeOfferInfos.map(({ text, icon }) => (
          <div key={text} className={styles.card}>
            {icon}
            <p className={styles.cardText}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeOfferBlock;
