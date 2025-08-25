import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import NetstatAnimationBlock from './NetstatAnimationBlock';
import NetstatAnimationText from './NetstatAnimationText';
import ImageComponent from '../../../components/Image/Image';
import IPageStatus from '../../../interfaces/IPageStatus';

import NetstatLogo2x from '@/images/NetstatPage/img_netstat-logo@2x.webp';
import AppstoreDownloadBtn2x from '@/images/NetstatPage/img_download-btn@2x.webp';
import Office from '@/images/NetstatPage/img_netstat-office@2x.webp';
import netstatStyles from '../sass/netstat.module.scss';

function NetstatMainScreen({ saleUrl }: IPageStatus) {
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -30%',
    triggerOnce: true,
  });

  const logoControls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    if (inView) {
      logoControls.start({
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: 0.6,
        },
      }).catch(() => {});
      titleControls.start({
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: 0.9,
        },
      }).catch(() => {});
    }
  }, [inView, logoControls, titleControls]);

  return (
    <NetstatAnimationBlock className={netstatStyles.netstat_mainscreen} ref={ref} duration={500} inView={inView}>
      <div className={netstatStyles.mainImage}>
        <ImageComponent
          src={Office}
          sizes="(max-width: 450px) 50vw, 100vw"
          priority
          alt="office"
        />
      </div>
      <div className={`${netstatStyles.netstat_container} ${netstatStyles.netstat_mainscreen_content}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={logoControls}
          className={netstatStyles.netstat_logo}
        >
          <ImageComponent
            src={NetstatLogo2x}
            alt="netstat-logo"
            width={111}
            height={111}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={titleControls}
          className={netstatStyles.titleBox}
        >
          Netstat — Network Scanner App Development
        </motion.h1>
        <div className={netstatStyles.netstat_logo_subtext}>
          <NetstatAnimationText duration={300} delay={1100} inView={inView}>
            Network device scanning app to&nbsp;locate active devices
          </NetstatAnimationText>
          <NetstatAnimationText duration={300} delay={1300} inView={inView}>
            In this network scanner app development case study, we explain how you can locate and scan
            all devices on the network connected to your Wi-Fi and identify them. Download Netstat and
            protect your network.
          </NetstatAnimationText>
        </div>
        {!saleUrl && (
          <NetstatAnimationBlock
            className={netstatStyles.netstat_downloadBtn}
            duration={300}
            delay={1100}
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
    </NetstatAnimationBlock>
  );
}

export default NetstatMainScreen;
