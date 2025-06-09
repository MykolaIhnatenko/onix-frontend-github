import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useAppSelector } from '../../hook/reduxToolkit';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import OnixStoryOurClients from './components/OnixStoryOurClients';
import OnixStoryOurAdvantages from './components/OnixStoryOurAdvantages';
import OnixStoryOurWay from './components/OnixStoryOurWay';
import OnixStoryCEO from './components/OnixStoryCEO';
import OnixStoryMainBlock from './components/OnixStoryMainBlock';
import OnixStoryOurValues from './components/OnixStoryOurValues';
import OnixStoryOurExecutiveTeam from './components/OnixStoryOurExecutiveTeam';
import OnixStoryClientsSay from './components/OnixStoryClientsSay';
import OnixStoryVideo from './components/OnixStoryVideo';
import ButtonTypes from '../../constants/ButtonTypes';
import PageLinks from '../../constants/PageLinks';
import { ButtonType } from 'constants/enums';
import OnixStoryCallBg from '@/images/onixStory/callToAction/img _onix_call_bg.webp';
import OnixStoryCallMobile from '@/images/onixStory/callToAction/img _onix_call_mobile.webp';
import OnixStoryCallTablet from '@/images/onixStory/callToAction/img _onix_call_tablet.webp';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';

function OnixStoryPageView() {
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);
  const router = useRouter();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = { callToAction: OnixStoryCallBg };
    if (isMDDevice || isSMDevice) {
      bg.callToAction = OnixStoryCallTablet;
    } else if (isXSDevice) {
      bg.callToAction = OnixStoryCallMobile;
    }
    return bg;
  };

  return (
    <>
      <OnixStoryMainBlock />
      <OnixStoryOurWay />
      <OnixStoryCEO />
      <OnixStoryOurAdvantages />
      <OnixStoryClientsSay setActiveVideo={setActiveVideo} activeVideo={activeVideo} />
      <OnixStoryOurValues />
      <OnixStoryVideo setActiveVideo={setActiveVideo} activeVideo={activeVideo} />
      <OnixStoryOurExecutiveTeam />
      <AchievementsBlock
        title="Our awards and recognition"
      />
      <OnixStoryOurClients />
      <CallToActionComponent
        id={ButtonType.LAND}
        title="Need a tailored software&nbsp;solution?"
        withButton
        buttonType={ButtonTypes.PRIMARY}
        btnText="GET STARTED NOW"
        classes={{
          cta: `!bg-white !p-[120px_70px] screen-lg:!p-[30px_30px_80px] 
            screen-md:!p-[60px_30px_60px] screen-sm:!p-[60px_15px_60px]`,
          background: 'after:!hidden',
          title: `!text-black !max-w-full !text-center !pb-[56px] 
            screen-md:!max-w-full`,
          btn: 'screen-lg:!max-w-[330px]',
        }}
      />
      <CallToActionComponent
        background={getBackground().callToAction}
        title="Join our growing&nbsp;team"
        content="Onix’s projects involve web and mobile app design and development, AR and VR technologies,
        AI, ML, and more. If you are a tech enthusiast, quick learner, and team player, you are more than&nbsp;welcome!"
        withButton
        btnText="WE HIRE"
        onClick={() => router.push(PageLinks.CAREERS)}
        classes={{
          cta: `!p-[122px_70px] screen-lg:!p-[80px_30px]
            screen-md:!p-[60px_30px] screen-sm:!p-[60px_15px]`,
          background: `after:!bg-gradient-to-b after:!from-transparent after:!to-black
            after:!to-[100%] after:!bottom-0 min-lg:after:!h-[110px]`,
          content: `!max-w-[945px] !m-[0_auto] !pb-[56px] !text-center screen-lg:!max-w-[708px]
            screen-md:!text-[18px] screen-md:!leading-[26px] screen-md:!pb-[30px]`,
        }}
      />
    </>
  );
}
export default OnixStoryPageView;
