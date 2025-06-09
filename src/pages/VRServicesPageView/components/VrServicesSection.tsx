import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import CardsBlock from '../../../components/CardsBlock/CardsBlock';
import VRServicesData from '../data/vrServicesData.json';
import { ButtonType } from '../../../constants/enums';
import VRTrustUsBackground from '@/images/vrServicesPage/img_trust_us_bg.webp';

import styles from '../sass/vrServicesSection.module.scss';

function VRServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          AR and VR Development Services We Offer
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          We provide a full range of AR & VR software development services to help your business ideas thrive.
          <br />
          <br />
          The Onix team builds exceptional virtual reality systems that deliver the best possible user experience
          and while beating out your competitors!
        </ContentText>
      </PageContainer>
      <CardsBlock
        idBtn={ButtonType.LAND2}
        dropBlockText="Talk to our experts from the VR team and get a free consultation."
        dropBlockTitle="Have an AR/VR app idea but are unsure where to start?"
        dropBlockBtnTitle="Get a consultation"
        data={VRServicesData}
        classes={{
          dropBlock: `min-xl:!flex-[0_1_66.6666%] !p-[30px] screen-md:!p-[30px_15px] screen-xxl:!h-[550px]
          screen-xl:!h-[384px] screen-md:!h-[360px] screen-sm:!h-[420px]`,
          dropBlockBg: '!opacity-0',
          dropBlockTitle: `!text-[36px] !max-w-[667px] !leading-[1.28] screen-xl:!pb-[90px] screen-lg:!text-start
          screen-lg:!m-0 screen-md:!pb-[55px] screen-md:!text-[25px] screen-md:!leading-[1.4]`,
          dropBlockText: `!text-white !m-0 min-lg:!mx-auto min-xl:!mx-0 !pb-[30px] !text-[20px] !font-normal
          min-lg:!text-center min-xl:!text-start !leading-[1.4] !max-w-[496px] screen-xl:!max-w-[667px]
          screen-lg:!max-w-[496px] screen-md:!pb-[20px] screen-md:!text-[16px] screen-md:!leading-[1.5]`,
          buttonWrapper: `screen-xl:!max-w-[538px] screen-xl:!m-auto screen-lg:!m-0 screen-lg:!max-w-[538px]
          screen-md:!mt-[15px] screen-md:!min-h-[56px] screen-md:!flex screen-md:!items-center screen-md:!bg-white`,
          button: '!max-w-[538px] screen-lg:!max-w-[538px] screen-md:!text-center screen-md:!p-[6px_50px]',
          cardClasses: {
            card: `screen-xxl:!h-[550px] screen-xl:!h-[384px] screen-lg:!h-[540px] screen-md:!h-[360px]
            screen-sm:!h-[420px] [&:nth-child(7)]:!border-b-0 [&:nth-child(8)]:!border-b-0
            [&:nth-child(10)]:!border-b-[2px] screen-xl:[&:nth-child(10)]:!border-b-0`,
            title: `!text-[36px] !leading-[1.13] screen-lg:!text-[24px] screen-lg:!leading-[1.33] screen-md:!text-[20px]
            screen-md:!leading-[1.3]`,
            boxText: `min-md:!pr-[0] screen-xxl:!text-[18px] screen-xxl:!leading-[1.33]
            screen-xl:!text-[16px] screen-xl:!leading-[1.5]
            screen-md:!text-[14px] screen-md:!leading-[1.43]`,
          },
        }}
        bg={VRTrustUsBackground}
      />
    </section>
  );
}

export default VRServicesSection;
