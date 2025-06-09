import MainTitle from '../../../components/MainTitle/MainTitle';
import CardsBlock from '../../../components/CardsBlock/CardsBlock';
import ImageComponent from '../../../components/Image/Image';
import trustUsCardsData from '../data/trustUsCardsData.json';
import { ButtonType } from '../../../constants/enums';
import QADropBlockBg from '@/images/qaServicesPage/img_qa_drop_block.webp';
import DedicatedTeamWorkBgMobile from '@/images/dedicatedTeamPage/img_work_mobile@2x.webp';
import TrustUsBackgroundMobileWebp from '@/images/img_trust_us_mobile_bg@2x.webp';

import styles from '../sass/qaTrustUsBlock.module.scss';

function QATrustUsBlock() {
  return (
    <section className={styles.container}>
      <ImageComponent
        src={TrustUsBackgroundMobileWebp}
        alt="TrustUsBackground"
        fill
      />
      <div className={styles.titleContainer}>
        <MainTitle className={styles.title}>
          Why Choose Onix for QA & Software Testing
        </MainTitle>
      </div>
      <CardsBlock
        idBtn={ButtonType.LAND3}
        data={trustUsCardsData}
        classes={{
          cards: '!border-b-0',
          dropBlock: 'screen-xl:!pt-[90px] screen-lg:!px-[15px] screen-md:!pt-[20px]',
          dropBlockTitle: `!max-w-full screen-xl:!max-w-[743px] screen-lg:!max-w-[743px] screen-lg:!text-[40px]
          screen-lg:!font-medium screen-lg:!leading-[56px]
          screen-md:!pr-[30px] screen-md:!text-[25px] screen-md:!font-medium screen-md:!leading-[35px]`,
          buttonWrapper: 'screen-lg:!w-[320px] screen-md:!w-full',
        }}
        dropBlockTitle="Ensure flawless software performance with our superior QA services!"
        dropBlockBtnTitle="Talk to our expert"
        mobileBg={DedicatedTeamWorkBgMobile}
        dropBlockBg={QADropBlockBg}

      />
    </section>
  );
}

export default QATrustUsBlock;
