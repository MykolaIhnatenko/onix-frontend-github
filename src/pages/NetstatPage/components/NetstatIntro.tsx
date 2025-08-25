import { useInView } from 'react-intersection-observer';

import NetstatAnimationH3 from './NetstatAnimationH2';
import NetstatAnimationBlock from './NetstatAnimationBlock';
import ImageComponent from '../../../components/Image/Image';

import IntroScreensImg2x from '@/images/NetstatPage/img_introduction-screens2x.webp';
import netstatStyles from '../sass/netstat.module.scss';

function NetstatIntro() {
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -30%',
    triggerOnce: true,
  });

  return (
    <div className={netstatStyles.netstat_intro} ref={ref}>
      <div className={netstatStyles.netstat_container}>
        <div className={netstatStyles.netstat_intro_bg}>
          <div className={netstatStyles.netstat_intro_content}>
            <NetstatAnimationH3 className={netstatStyles.netstat_subheader} duration={500} inView={inView}>
              Introduction
            </NetstatAnimationH3>
            <div className={netstatStyles.netstat_intro_text_wrapper}>
              <NetstatAnimationBlock
                className={netstatStyles.netstat_intro_text_left}
                duration={500}
                delay={300}
                inView={inView}
              >
                <p>
                  This network scanner app development project is Onix’ first foray into the realm of
                  utility apps, and namely network monitoring software. Such software is typically used
                  in order to:
                </p>
                <ul className={`${netstatStyles.netstat_list} ${netstatStyles.first} ${netstatStyles.withoutMargin}`}>
                  <li>
                    <p>- understand a network from a node-by-node perspective</p>
                  </li>
                  <li>
                    <p>- discover active devices on the network</p>
                  </li>
                  <li>
                    <p>- get critical insights into the devices and performance</p>
                  </li>
                  <li>
                    <p>- follow the traffic moving between the active devices</p>
                  </li>
                  <li>
                    <p>- identify available network services</p>
                  </li>
                  <li>
                    <p>- discover and recognize any filtering systems in place</p>
                  </li>
                  <li>
                    <p>- see what operating systems are being used</p>
                  </li>
                  <li>
                    <p>- determine the overall health of the network</p>
                  </li>
                </ul>
              </NetstatAnimationBlock>
              <NetstatAnimationBlock
                className={netstatStyles.netstat_intro_text_right}
                duration={500}
                delay={600}
                inView={inView}
              >
                <p>
                  Regular monitoring/scanning helps ensure the healthy
                  functioning of networks and connected devices at enterprises,
                  banks, and government agencies. However, scanning with
                  specialized tools is essential for any network with a
                  significant number of devices or with multiple subnets. Manual
                  management may be difficult, inefficient, and expose the
                  system to security risks. Data found by network scanner
                  software reveals a wide range of critical network information
                  and helps to manage and maintain the system, troubleshoot
                  issues and pinpoint problems, discover points that might be
                  vulnerable, and protect the network from attacks.
                </p>
              </NetstatAnimationBlock>
            </div>
          </div>
        </div>
      </div>
      <div className={`${netstatStyles.netstat_intro_screens} ${netstatStyles.netstat_container}`}>
        <div className={netstatStyles.screens}>
          <ImageComponent
            src={IntroScreensImg2x}
            alt="screens"
            width={662}
            height={500}
            quality={100}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}

export default NetstatIntro;
