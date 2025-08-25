import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import CallToActionComponent from 'components/CallToActionBlock/CallToActionComponent';
import ReferralBonus from './components/ReferralBonus';
import ReferralProgram from './components/ReferralProgram';
import Achievements from './components/Achievements';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import mainScreenData from './data/mainScreenData.json';
import MainBlockWith1TextBtn from 'components/MainBlockWith1TextBtn/MainBlockWith1TextBtn';

import RightImage from '@/images/bonus/img_rightImage@2x.webp';
import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';

function BonusPageView() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      mainScreen: IndustriesMainBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.mainScreen = IndustriesMainBgTablet;
    } else if (isXSDevice) {
      bg.mainScreen = IndustriesMainBgMobile;
    }
    return bg;
  };

  return (
    <>
      <MainBlockWith1TextBtn
        pageTitle={mainScreenData.pageTitle}
        pageText={mainScreenData.pageText}
        btnText={mainScreenData.btnText}
        rightImg={RightImage}
        backgroundImg={getBackground().mainScreen}
        isMobile={isXSDevice || isSMDevice || isMDDevice}
      />
      <CallToActionComponent
        title="It's a Win-Win Opportunity!"
        content={(
          <>
            At Onix, we value the power of word-of-mouth referrals.
            {' '}
            <span className="inline_block">By recommending</span>
            {' '}
            our company to your network, you&apos;re helping others discover
            our services and earning rewards for yourself!
          </>
        )}
        classes={{
          cta: '!bg-white !p-[120px_0] screen-lg:!p-[80px_30px_120px] screen-md:!p-[60px_15px_80px]',
          background: 'after:!content-none',
          title: `!max-w-[1078px] !pb-[40px] !text-black !text-[36px] !leading-[46px] screen-lg:!max-w-[708px]
          screen-md:!text-[25px] screen-md:!leading-[35px]`,
          content: `!max-w-[700px] !text-black !pb-0 min-md:!text-[18px] !leading-[26px] screen-md:!text-[16px]
          screen-md:!leading-[24px]`,
        }}
      />
      <ReferralBonus />
      <ReferralProgram />
      <Achievements />
      <CallToActionComponent
        title="Join our referral program and create a win-win scenario for everyone involved!"
        withButton
        btnText="Join our program"
        classes={{
          cta: '!p-[120px_70px_160px] screen-lg:!p-[120px_30px] screen-md:!p-[80px_15px]',
          background: 'after:!content-none',
          title: '!max-w-[1078px] !pb-[40px] screen-lg:!max-w-[708px]',
        }}
      />
    </>
  );
}

export default BonusPageView;
