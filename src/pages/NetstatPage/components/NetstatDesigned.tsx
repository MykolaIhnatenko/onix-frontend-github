import { useInView } from 'react-intersection-observer';
import { StaticImageData } from 'next/image';

import NetstatAnimationText from './NetstatAnimationText';
import NetstatAnimationH2 from './NetstatAnimationH2';
import ImageComponent from '../../../components/Image/Image';
import { useAppSelector } from 'hook/reduxToolkit';

import DesignedBg2x from '@/images/NetstatPage/img_background-designed2x.webp';
import DesignedScreens2x from '@/images/NetstatPage/img_designed-screens2x.webp';
import DesignedScreensTablet2x from '@/images/NetstatPage/img_designed-screens-tablet2x.webp';
import DesignedScreensMobile2x from '@/images/NetstatPage/img_designed-screens-mobile2x.webp';
import netstatStyles from '../sass/netstat.module.scss';

function NetstatDesigned() {
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -30%',
    triggerOnce: true,
  });

  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      screens: DesignedScreens2x,
    };
    if (isMDDevice) {
      bg.screens = DesignedScreensTablet2x;
    } else if (isXSDevice || isSMDevice) {
      bg.screens = DesignedScreensMobile2x;
    }
    return bg;
  };

  return (
    <div className={netstatStyles.netstat_designed}>
      <ImageComponent
        className={netstatStyles.netstat_designed_img}
        src={DesignedBg2x}
        alt="netstat-designed-bg"
        width={1629}
        height={869}
        quality={100}
        sizes="(max-width: 450px) 50vw, 100vw"
      />
      <div className={netstatStyles.netstat_designed_text} ref={ref}>
        <div className={netstatStyles.shadowed_background}>
          <NetstatAnimationH2 className={netstatStyles.netstat_subheader} duration={500} inView={inView}>
            Who is Netstat designed for?
          </NetstatAnimationH2>
          <NetstatAnimationText duration={500} delay={300} inView={inView}>
            The network scanner app development may prove invaluable for individuals seeking effective
            management of their IP addresses and devices, particularly within expansive networks.
            Netstat’s lean functionality and ease-of-use make it especially good for beginner techs
            and organizations without sufficient IT support or experience in network monitoring.
          </NetstatAnimationText>
          <NetstatAnimationText duration={500} delay={600} inView={inView}>
            Network monitoring is essential but not always feasible. Imagine your network devices are
            down, the administrator in charge is out, and there’s an angry boss demanding to find out
            what happened. It’s days like that which Netstat may help save by scanning all devices on
            the network and indicating what is wrong and where to look first. Later, you may utilize
            a more robust tool, but for the moment, Netstat can provide clues in a pinch.
          </NetstatAnimationText>
          <NetstatAnimationText duration={700} delay={1000} inView={inView}>
            We developed this network device scanner app for iPhone, iPad, and iPod Touch.
            It helps identify problems when a laptop or desktop PC is unavailable.
            This means that Netstat can be of use to professional network administrators as well.
          </NetstatAnimationText>
        </div>
      </div>
      <div className={netstatStyles.netstat_designed_screens}>
        <div className={netstatStyles.screens}>
          <ImageComponent
            src={getBackground().screens}
            alt="designed-screens"
            width={730}
            height={429}
            quality={100}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}

export default NetstatDesigned;
