import { useMemo } from 'react';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import IndustriesResultsItem from './IndustriesResultsItem';
import resultsData from '../data/resultsData.json';
import { MD_DEVICE, XL_DEVICE } from '../../../constants/constants';
import CallToActionComponent from '../../../components/CallToActionBlock/CallToActionComponent';
import { ButtonPathVariant } from '../../../constants/enums';
import { useAppSelector } from 'hook/reduxToolkit';

import IndustriesResultsDesktopBg from '@/images/industriesPage/img_results_desk_bg@2x.webp';
import IndustriesResultsMobileBg from '@/images/industriesPage/img_results_mobile_bg@2x.webp';
import styles from '../sass/industriesResultsSecion.module.scss';

function IndustriesResultsSection() {
  const { screenSizes: { screenWidth } } = useAppSelector((state) => state.app);

  const background = useMemo(() => {
    let imgSrc;

    if (screenWidth < MD_DEVICE) {
      imgSrc = IndustriesResultsMobileBg;
    }
    if (screenWidth > XL_DEVICE) {
      imgSrc = IndustriesResultsDesktopBg;
    }

    return imgSrc;
  }, [screenWidth]);

  return (
    <section className={styles.resultsSection}>
      {background && (
      <div className={styles.bgContainer}>
        <ImageComponent
          src={background}
          fill
          sizes="100vw"
          alt="figures"
        />
      </div>
      )}
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          We guarantee tangible results
          in the shortest time
        </MainTitle>
        <ul className={styles.items}>
          {resultsData.map(({ id, title, text }) => (
            <IndustriesResultsItem
              key={id}
              id={id}
              title={title}
              text={text}
            />
          ))}
        </ul>
        <CallToActionComponent
          withButton
          buttonPathVariant={ButtonPathVariant.CALCULATE}
          title="How much does it cost to hire a dedicated team to build a&nbsp;top&#8209;tier&nbsp;solution?"
          btnText="Calculate now"
          content="Specify the number of experts and technologies you need and get an approximate
           cost for your&nbsp;project!"
          classes={{
            cta: '!bg-transparent !p-[120px_0] screen-md:!p-[80px_0]',
            background: 'after:hidden',
            title: '!max-w-[1078px] !pb-[40px] screen-xl:!max-w-[708px] screen-md:!pb-[30px]',
            content: `!max-w-[667px] !pb-[40px] screen-md:!pb-[30px] screen-md:!text-[16px]
            screen-md:!leading-[24px] screen-md:!max-w-full`,
          }}
        />
      </PageContainer>
    </section>
  );
}

export default IndustriesResultsSection;
