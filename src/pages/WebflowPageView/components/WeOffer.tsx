import useBackground from '../../../hook/useBackground';
import CallToActionComponent from '../../../components/CallToActionBlock/CallToActionComponent';
import IconsContent from '../../../components/IconsContent/IconsContent';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import ButtonTypes from '../../../constants/ButtonTypes';
import webflowIconsContentData from '../data/webflowIconsContentData';
import webflowNumberData from '../data/webflowNumberData';
import { ButtonType } from '../../../constants/enums';
import WebflowWeOfferMobilebg from '@/images/webflowPage/weOffer/img_we_offer_mobile_bg@2x.webp';
import WebflowWeOfferbg from '@/images/webflowPage/weOffer/img_we_offer_bg@2x.webp';
import WebflowWeOfferTabletbg from '@/images/webflowPage/weOffer/img_we_offer_tablet_bg@2x.webp';

import styles from '../sass/weOffer.module.scss';

function WeOffer() {
  const background = useBackground(WebflowWeOfferbg, WebflowWeOfferTabletbg, WebflowWeOfferMobilebg);

  return (
    <div className={styles.container}>
      {background && (
        <div className={styles.background}>
          <ImageComponent
            src={background}
            alt="background"
            sizes="100vw"
          />
        </div>
      )}
      <div className={styles.containerContent}>
        <div className={styles.content}>
          <MainTitle className={styles.title}>
            Whether you&apos;re launching a new product, promoting a special offer, or generating leads,
            our Webflow web design services will leave a memorable impression and drive conversions.
          </MainTitle>
          <IconsContent
            data={webflowIconsContentData}
            classes={{
              container: `!p-0 !gap-[60px] screen-xl:!gap-0 screen-lg:!p-0 screen-lg:!gap-0
                screen-md:!p-0 screen-md:!gap-[40px_0] screen-md:!flex-row screen-md:!items-center`,
              containerItemWrapper: `screen-lg:!min-w-[154px] screen-lg:!max-w-[154px]
                screen-md:!min-w-[50%] screen-md:!max-w-[50%]`,
              containerItem: `!min-w-auto !max-w-[none] screen-lg:!min-w-[154px] screen-lg:!max-w-[154px]
                screen-md:!min-w-[125px] screen-md:!max-w-[125px] screen-md:!mx-auto`,
              iconContainer: `!mx-auto !flex !justify-center !items-center !rounded-[1000px] !border !border-black
                !min-w-[162px] !max-w-[162px] !p-[50px]
                screen-lg:!w-[126px] screen-lg:!p-[39.5px] screen-lg:!min-w-[auto] screen-lg:!max-w-[none]
                screen-md:!w-[126px] screen-md:!p-[39.5px] screen-md:!min-w-[auto] screen-md:!max-w-[none]`,
              title: `!min-w-[250px] !max-w-[250px] !text-[24px] !leading-[34px]
                screen-lg:!min-w-[auto] screen-lg:!max-w-[none] screen-lg:!text-[20px] screen-lg:!leading-[28px]
                screen-md:!text-[20px] screen-md:!leading-[28px]`,
            }}
          />
        </div>
        <CallToActionComponent
          id={ButtonType.LAND2}
          withButton
          title="Speed up your web design process by up to 85% with the Webflow no&#8209;code&nbsp;platform!"
          btnText="ASK for a consultation"
          buttonType={ButtonTypes.PRIMARY}
          classes={{
            cta: `!bg-white !p-[0_70px] min-xxxl:!p-[0_80px] screen-lg:!p-[0_30px] screen-md:!p-[0_15px]
            screen-sm:!p-[0]`,
            background: 'after:!hidden',
            title: `!max-w-[756px] !pb-[40px] !text-[36px] !leading-[46px] !text-black
            screen-lg:!max-w-[708px] screen-lg:!text-[30px] screen-lg:!leading-[40px] screen-md:!pb-[30px]
            screen-md:!text-[24px] screen-md:!leading-[35px]`,
          }}
        />
        <NumbersBlock
          data={webflowNumberData}
          classes={{
            table: `!mt-0 !p-[96px_70px_0] min-xxxl:!p-[96px_80px_0]
              screen-lg:!p-[140px_0_0] screen-md:!p-[60px_0_0]`,
          }}
        />
      </div>
    </div>
  );
}

export default WeOffer;
