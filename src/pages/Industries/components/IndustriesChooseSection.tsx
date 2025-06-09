import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import IndustriesDropBlockBg from '@/images/industriesPage/img_industries_drop_block_bg@2x.webp';
import TrustUsBackgroundMobileWebp from '@/images/img_trust_us_mobile_bg@2x.webp';
import CardsBlock from '../../../components/CardsBlock/CardsBlock';
import chooseData from '../data/chooseData.json';
import { CardBlockVariant } from '../../../constants/enums';

import styles from '../sass/industriesChooseSecion.module.scss';

function IndustriesChooseSection() {
  return (
    <section className={styles.chooseSection}>
      <div className={styles.bgMobile}>
        <ImageComponent
          src={TrustUsBackgroundMobileWebp}
          alt="TrustUsBackground"
          fill
        />
      </div>
      <PageContainer className={styles.container}>
        <MainTitle tag="h2">
          Why choose Onix
        </MainTitle>
      </PageContainer>
      <CardsBlock
        data={chooseData}
        dropBlockTitle="Let's ignite your vision and make it shine!"
        dropBlockBtnTitle="Talk to Our Expert"
        dropBlockBg={IndustriesDropBlockBg}
        variant={CardBlockVariant.INDUSTRIES}
        classes={{
          cards: '!border-b-0',
          dropBlock: 'min-md:!p-[80px_30px_86px_30px] min-lg:!p-[30px]',
          dropBlockBg: 'overflow-hidden min-md:!absolute min-md:!top-0 min-md:!left-0 min-md:!w-full min-md:!h-[100%]',
          dropBlockTitle: 'min-md:!mx-auto min-md:!pb-[40px] min-md:!max-w-[450px] min-xl:!pb-0 min-xl:!max-w-full',
        }}
      />
    </section>
  );
}

export default IndustriesChooseSection;
