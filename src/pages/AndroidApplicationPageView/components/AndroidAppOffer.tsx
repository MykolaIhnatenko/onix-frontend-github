import CallToActionComponent from '../../../components/CallToActionBlock/CallToActionComponent';
import useBackground from '../../../hook/useBackground';
import IconsContent from '../../../components/IconsContent/IconsContent';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import { ButtonType } from '../../../constants/enums';
import androidAppIconsContentData from '../data/androidAppIconsContentData';
import androidAppNumberBlockData from '../data/androidAppNumberBlockData';

import AndroidAppOfferBg from '@/images/androidApplication/offerBlock/img_androidAppOfferBg@2x.webp';
import AndroidAppOfferTabletBg from '@/images/androidApplication/offerBlock/img_androidAppOfferTabletBg@2x.webp';
import AndroidAppOfferMobileBg from '@/images/androidApplication/offerBlock/img_androidAppOfferMobileBg@2x.webp';
import styles from '../sass/androidAppOffer.module.scss';

function AndroidAppOffer() {
  const background = useBackground(AndroidAppOfferBg, AndroidAppOfferTabletBg, AndroidAppOfferMobileBg);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <MainTitle className={styles.pageTitle}>
          We offer Android apps for any device
        </MainTitle>
        <div className={styles.content}>
          <IconsContent
            data={androidAppIconsContentData}
            classes={{
              container: '!p-0 screen-lg:!gap-0 screen-md:!gap-y-[40px] screen-md:!gap-x-0',
              containerItem: '!min-w-[auto] !max-w-[none]',
              iconContainer: `!w-[162px] !h-[162px] !border !border-black !mx-auto !p-[50px]
                !flex !justify-center !items-center !rounded-[1000px]
                screen-lg:!w-[126px] screen-lg:!h-[126px] screen-lg:!p-[40px]`,
              title: '!text-[24px] !leading-[34px] screen-lg:!text-[20px] screen-lg:!leading-[34px]',
              containerItemWrapper: 'screen-md:!w-1/2',
            }}
          />
        </div>
        <CallToActionComponent
          id={ButtonType.LAND}
          withButton
          buttonType="primary"
          title="Let's transform your unstructured ideas into a viable Android&nbsp;application!"
          btnText="Get Android experts"
          tag="h2"
          classes={{
            cta: `
              !text-black !bg-white !pt-0 pb-[20px] screen-lg:!p-[0_0_24px]
              screen-md:!p-[0_15px_14px] screen-sm:!p-[0_0_14px]
            `,
            background: 'after:!content-none',
            title: `
              !max-w-[756px] !text-black !text-center !mx-auto !text-[36px] !leading-[46px] 
              screen-lg:!text-[30px] screen-lg:!leading-[40px] screen-lg:!w-full 
              screen-md:!text-[24px] screen-md:!leading-[35px] screen-md:!pb-[20px]
            `,
            btn: 'mx-auto',
          }}
        />
        <NumbersBlock data={androidAppNumberBlockData} />
      </div>
      <div className={styles.background}>
        {background && (
          <ImageComponent
            src={background}
            fill
            sizes="100vw"
            alt="background"
          />
        )}
      </div>
    </div>
  );
}

export default AndroidAppOffer;
