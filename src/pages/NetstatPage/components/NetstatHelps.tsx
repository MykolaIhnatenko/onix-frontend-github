import React from 'react';
import { useInView } from 'react-intersection-observer';

import NetstatAnimationText from './NetstatAnimationText';
import NetstatAnimationH2 from './NetstatAnimationH2';
import ImageComponent from '../../../components/Image/Image';
import { useAppSelector } from '../../../hook/reduxToolkit';
import NetstatAnimationBlock from './NetstatAnimationBlock';

import Bg from '@/images//NetstatPage/img_netstat-helps-bg.webp';
import BgMobile from '@/images//NetstatPage/img_netstat-helps-bg-mobile.webp';
import netstatStyles from '../sass/netstat.module.scss';

function NetstatHelps() {
  const { isSMDevice, isXSDevice } = useAppSelector((state) => state.app.screenSizes);
  const isMobile = isXSDevice || isSMDevice;

  const [ref, inView] = useInView({
    rootMargin: '200% 0px -30%',
    triggerOnce: true,
  });

  return (
    <div className={netstatStyles.netstat_helps}>
      <ImageComponent
        src={isMobile ? BgMobile : Bg}
        fill
        sizes="100vw"
        className={netstatStyles.helpsImage}
        alt="office"
      />
      <div className={netstatStyles.netstat_container}>
        <div className={netstatStyles.netstat_helps_content} ref={ref}>
          <NetstatAnimationH2 className={netstatStyles.netstat_subheader} duration={500} inView={inView}>
            How Netstat helps
          </NetstatAnimationH2>
          <NetstatAnimationText duration={500} delay={300} inView={inView}>
            The network scanner app lets you know, among other things:
          </NetstatAnimationText>
          <NetstatAnimationBlock duration={500} delay={300} inView={inView}>
            <ul className={netstatStyles.netstat_list}>
              <li>
                <p>
                  why the network is not working or if the site connection is unstable;
                </p>
              </li>
              <li>
                <p>
                  whether the Internet connection fails because of home hardware or a provider or because
                  a host isn’t working at the moment;
                </p>
              </li>
              <li>
                <p>
                  the device and IP address of everyone who is using your Wi-Fi;
                </p>
              </li>
              <li>
                <p>
                  whether unauthorized persons are using or stealing your Wi-Fi.
                </p>
              </li>
            </ul>
          </NetstatAnimationBlock>
        </div>
      </div>
    </div>
  );
}

export default NetstatHelps;
