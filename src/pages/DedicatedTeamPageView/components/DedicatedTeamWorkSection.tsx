import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import CardsBlock from '../../../components/CardsBlock/CardsBlock';
import workData from '../data/workData.json';
import DedicatedTeamWorkBg from '@/images/dedicatedTeamPage/img_work@2x.webp';
import DedicatedTeamWorkBgTablet from '@/images/dedicatedTeamPage/img_work_tablet@2x.webp';
import DedicatedTeamWorkBgMobile from '@/images/dedicatedTeamPage/img_work_mobile@2x.webp';
import ImageComponent from '../../../components/Image/Image';
import { ButtonPathVariant, ButtonType, CardBlockVariant } from '../../../constants/enums';

import styles from '../sass/dedicatedTeamWorkSecion.module.scss';

function DedicatedTeamWorkSection() {
  return (
    <section className={styles.workSection}>
      <ImageComponent
        src={DedicatedTeamWorkBgTablet}
        alt="TrustUsBackground"
        fill
        className={styles.bgTablet}
      />
      <PageContainer className={styles.container}>
        <MainTitle tag="h2">
          How a dedicated software
          <br />
          team works at Onix
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          Need to scale your team, add specific expertise or accelerate the product development process?
          Let’s start tight-knit cooperation in 5 simple steps:
        </ContentText>
      </PageContainer>
      <CardsBlock
        idBtn={ButtonType.LAND3}
        data={workData}
        bg={DedicatedTeamWorkBg}
        mobileBg={DedicatedTeamWorkBgMobile}
        dropBlockTitle={(
          <>
            Tell us more about your product idea and we&apos;ll form
            {' '}
            <span className="inline_block">a team</span>
            {' '}
            that perfectly
            fits your business needs!
          </>
        )}
        dropBlockBtnTitle="Get a 100% dedicated team"
        variant={CardBlockVariant.DEDICATED_TEAM}
        classes={{
          dropBlock: `min-md:!flex min-md:!justify-between min-md:!items-stretch min-md:!flex-[0_1_50%] min-md:!h-auto 
          min-md:!p-[28px_20px_20px_15px] min-xl:!flex-[0_1_33.33333%] min-xl:!p-[25px]`,
          dropBlockBg: 'min-md:!hidden',
          dropBlockTitle: `!text-white min-md:!text-[30px] min-md:!leading-[40px] min-md:!text-left
          min-md:!max-w-[332px] min-md:!mx-0 min-xl:!text-[40px] min-xl:!leading-[56px] min-xl:!max-w-[400px]
          min-xl:!text-left`,
          buttonWrapper: `min-md:!max-w-[346px] min-md:!ml-[3px] min-lg:!max-w-[420px]
          min-xl:!mr-0`,
          button: 'screen-md:!p-[16px_8px_16px_8px]',
          cardClasses: {
            card: 'min-xl:[&:nth-of-type(4)]:!border-b-2 min-md:[&:nth-of-type(5)]:!border-b-2',
          },
        }}
        dropBlockBtnVariant={ButtonPathVariant.CALCULATE}
      />
    </section>
  );
}

export default DedicatedTeamWorkSection;
