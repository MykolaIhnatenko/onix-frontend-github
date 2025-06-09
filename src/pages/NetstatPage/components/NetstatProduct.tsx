import { useInView } from 'react-intersection-observer';

import NetstatAnimationH2 from './NetstatAnimationH2';
import NetstatAnimationText from './NetstatAnimationText';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ProductIcons from '@/images//NetstatPage/img_product-working-icon.webp';

import netstatStyles from '../sass/netstat.module.scss';

function NetstatProduct() {
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -30%',
    triggerOnce: true,
  });

  return (
    <div className={`${netstatStyles.netstat_product} ${netstatStyles.netstat_container}`} ref={ref}>
      <NetstatAnimationH2 className={netstatStyles.netstat_subheader} duration={500} inView={inView}>
        Product and its working principle
      </NetstatAnimationH2>
      <NetstatAnimationText duration={500} delay={300} inView={inView}>
        Netstat is a network scanner iOS application that automatically
        discovers and locates devices connected to the network by analyzing the
        Wi-Fi. Among the key features of the network scanner, IP address and
        port scanning should be mentioned first.
      </NetstatAnimationText>
      <NetstatAnimationText duration={500} delay={600} inView={inView}>
        The app relies on what is called active scanning – sending a ping to
        each device on the network and awaiting a response. The responses are
        then analyzed to detect any inconsistencies or vulnerabilities. For IP
        networks, pings are usually sent to every possible IP address. The
        response, if any, determines each one’s status. Netstat uses ping,
        tracert, device, and port scan utilities to provide a basic view of what
        is happening across your network to help you detect and resolve errors
        quickly and easily.
      </NetstatAnimationText>
      <VRARContent>
        <div className={netstatStyles.productIcons}>
          <ImageComponent
            src={ProductIcons}
            width={529}
            height={82}
            sizes="(max-width: 450px) 50vw, 100vw"
            alt="product-icons"
          />
        </div>
      </VRARContent>
    </div>
  );
}

export default NetstatProduct;
