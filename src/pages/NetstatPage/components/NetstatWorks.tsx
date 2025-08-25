import { useInView } from 'react-intersection-observer';
import { StaticImageData } from 'next/image';

import NetstatAnimationH2 from './NetstatAnimationH2';
import NetstatAnimationBlock from './NetstatAnimationBlock';
import ImageComponent from '../../../components/Image/Image';
import { useAppSelector } from 'hook/reduxToolkit';

import WorksPhone from '@/images/NetstatPage/img_netstat-works-phone@2x.webp';
import WorksPhoneTablet from '@/images/NetstatPage/img_netstat-works-phone-tablet@2x.webp';
import WorksPhoneMobile from '@/images/NetstatPage/img_netstat-works-phone-mobile@2x.webp';
import netstatStyles from '../sass/netstat.module.scss';

function NetstatWorks() {
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -30%',
    triggerOnce: true,
  });

  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      worksPhone: WorksPhone,
    };
    if (isMDDevice || isSMDevice) {
      bg.worksPhone = WorksPhoneTablet;
    } else if (isXSDevice) {
      bg.worksPhone = WorksPhoneMobile;
    }
    return bg;
  };

  return (
    <div className={`${netstatStyles.netstat_works} ${netstatStyles.netstat_container}`} ref={ref}>
      <div className={netstatStyles.netstat_works_content}>
        <ImageComponent
          src={getBackground().worksPhone}
          alt="netstat-works-phone"
          sizes="100vw"
          width={100}
          height={100}
        />
        <div className={netstatStyles.netstat_works_wrapper}>
          <div className={netstatStyles.netstat_works_content_textblock}>
            <NetstatAnimationH2
              className={netstatStyles.netstat_subheader}
              duration={500}
              delay={300}
              inView={inView}
            >
              How Netstat works
            </NetstatAnimationH2>
            <NetstatAnimationBlock duration={500} delay={600} inView={inView}>
              <p>
                The application’s tab bar currently contains two sections: Tools and
                Settings. The Tools let you access all the app’s features:
              </p>
              <ul className={netstatStyles.netstat_list}>
                <li>
                  <p>
                    discovery, identification, and scanning of devices on the network
                  </p>
                </li>
                <li>
                  <p>
                    devices’ IPs, DNS, NetBIOS name, and other information about the
                    network
                  </p>
                </li>
                <li>
                  <p>
                    identification of each network user’s IP address and geolocation
                  </p>
                </li>
                <li>
                  <p>
                    device ping tools
                  </p>
                </li>
                <li>
                  <p>
                    routing to a device or a website
                  </p>
                </li>
                <li>
                  <p>
                    scanning of the open ports on the network’s devices
                  </p>
                </li>
                <li>
                  <p>
                    download and upload speed testing
                  </p>
                </li>
                <li>
                  <p>
                    network scanning history
                  </p>
                </li>
              </ul>
            </NetstatAnimationBlock>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetstatWorks;
