import React from 'react';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import BDNumberBlock from './BDNumberBlock';
import CallToActionComponent from '../../../components/CallToActionBlock/CallToActionComponent';
import ImageComponent from '../../../components/Image/Image';
import useBackground from '../../../hook/useBackground';
import bdNumbersData from '../data/statisticsNumberData';
import ButtonTypes from '../../../constants/ButtonTypes';
import { ButtonType } from 'constants/enums';
import BDStatisticsMobile from '@/images/brandingDesign/img_bd_statistics_mobile.webp';
import BDStatisticsTablet from '@/images/brandingDesign/img_bd_statistics_tablet.webp';
import BDStatisticsDesk from '@/images/brandingDesign/img_bd_statistics_desk.webp';

import styles from '../sass/statisticsBlock.module.scss';

function StatisticsBlock() {
  const background = useBackground(BDStatisticsDesk, BDStatisticsTablet, BDStatisticsMobile);

  return (
    <section className={styles.section}>
      {background && (
        <ImageComponent
          className={styles.bgImage}
          src={background}
          alt="MainBackground"
          fill
        />
      )}
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          In today&apos;s brand-driven world, having a good product is not enough!
        </MainTitle>
        <BDNumberBlock data={bdNumbersData} />
        <CallToActionComponent
          id={ButtonType.LAND2}
          withButton
          title="Let your brand speak louder with our unique branding design&nbsp;solution!"
          btnText="Ask for a consultation"
          buttonType={ButtonTypes.PRIMARY}
          tag="h2"
          classes={{
            cta: '!bg-transparent !text-black !m-0 !p-[80px_0_0] screen-md:p-[80px_15px_0] screen-sm:!p-[80px_0_0]',
            background: 'after:!hidden',
            title: `!text-black !text-[36px] !leading-[46px] !max-w-[756px] screen-lg:!text-[30px]
            screen-lg:!leading-[40px] screen-md:!text-[25px] screen-md:!leading-[35px] screen-md:!max-w-none`,
          }}
        />
      </PageContainer>
    </section>
  );
}

export default StatisticsBlock;
