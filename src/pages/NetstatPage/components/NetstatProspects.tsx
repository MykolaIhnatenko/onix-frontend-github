import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

import NetstatAnimationH2 from './NetstatAnimationH2';
import NetstatAnimationText from './NetstatAnimationText';
import NetstatAnimationBlock from './NetstatAnimationBlock';
import ImageComponent from '../../../components/Image/Image';
import IPageStatus from '../../../interfaces/IPageStatus';
import { useAppSelector } from 'hook/reduxToolkit';

import AppstoreDownloadBtn2x from '@/images/NetstatPage/img_download-btn@2x.webp';
import ProspectsIphone from '@/images/NetstatPage/img_netstat-iphone@2x.webp';
import ProspectsIphoneTablet from '@/images/NetstatPage/img_netstat-iphone-tablet@2x.webp';
import ProspectsIphoneMobile from '@/images/NetstatPage/img_netstat-iphone-mobile@2x.webp';
import netstatStyles from '../sass/netstat.module.scss';

function NetstatProspects({ saleUrl }: IPageStatus) {
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -30%',
    triggerOnce: true,
  });

  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      iphone: ProspectsIphone,
    };
    if (isMDDevice || isSMDevice) {
      bg.iphone = ProspectsIphoneTablet;
    } else if (isXSDevice) {
      bg.iphone = ProspectsIphoneMobile;
    }
    return bg;
  };

  return (
    <div className={netstatStyles.netstat_prospects} ref={ref}>
      <div className={netstatStyles.netstat_container}>
        <div className={netstatStyles.netstat_prospects_content}>
          <ImageComponent
            src={getBackground().iphone}
            alt="prospects-iphone"
            width={200}
            height={200}
          />
          <div className={netstatStyles.netstat_prospects_textblock}>
            <NetstatAnimationH2
              className={netstatStyles.netstat_subheader}
              duration={500}
              delay={300}
              inView={inView}
            >
              Prospects for Netstat
            </NetstatAnimationH2>
            <NetstatAnimationText duration={500} delay={600} inView={inView}>
              The market offers a wide range of network scanner software that
              can help solve almost any use case. However, the free Netstat is
              worth a try due to its simple and useful features, accessibility,
              and ease-of-use.
            </NetstatAnimationText>
            {!saleUrl && (
            <NetstatAnimationBlock
              className={netstatStyles.netstat_downloadBtn}
              duration={700}
              delay={1000}
              inView={inView}
            >
              <Link href="https://apps.apple.com/us/app/netstat/id1491729464">
                <ImageComponent
                  src={AppstoreDownloadBtn2x}
                  alt="download-btn"
                  width={145}
                  height={48}
                />
              </Link>
            </NetstatAnimationBlock>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetstatProspects;
