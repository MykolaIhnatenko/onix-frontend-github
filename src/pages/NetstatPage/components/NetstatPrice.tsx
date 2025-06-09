import { useInView } from 'react-intersection-observer';
import { StaticImageData } from 'next/image';

import NetstatAnimationH2 from './NetstatAnimationH2';
import NetstatAnimationText from './NetstatAnimationText';
import NetstatAnimationBlock from './NetstatAnimationBlock';
import ImageComponent from '../../../components/Image/Image';
import PriceImg2x from '@/images/NetstatPage/img_netstat-price-img2x.webp';
import PriceImgMobile2x from '@/images/NetstatPage/img_netstat-price-img-mobile2x.webp';
import PriceFrame2x from '@/images/NetstatPage/img_price-frame@2x.webp';
import { useAppSelector } from 'hook/reduxToolkit';

import netstatStyles from '../sass/netstat.module.scss';

function NetstatPrice() {
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -30%',
    triggerOnce: true,
  });

  const { screenSizes: { isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      price: PriceImg2x,
    };
    if (isSMDevice || isXSDevice) {
      bg.price = PriceImgMobile2x;
    }
    return bg;
  };

  return (
    <div className={netstatStyles.netstat_price}>
      <div className={netstatStyles.netstat_container}>
        <ImageComponent
          src={getBackground().price}
          alt="price-img"
          className={netstatStyles.netstat_price_img}
          width={1304}
          height={696}
          quality={100}
          sizes="(max-width: 450px) 50vw, 100vw"
        />
        <div className={`${netstatStyles.netstat_price_content} ${netstatStyles.shadowed_background}`} ref={ref}>
          <div className={netstatStyles.netstat_price_wrapper}>
            <div className={netstatStyles.netstat_price_text}>
              <NetstatAnimationH2 className={netstatStyles.netstat_subheader} duration={500} inView={inView}>
                Price
              </NetstatAnimationH2>
              <NetstatAnimationText duration={500} delay={300} inView={inView}>
                We have made the network device scanner app free to&nbsp;download. It will rely on in-app purchases:
                users can block ads on Netstat for a fee through the Settings&nbsp;tab.
              </NetstatAnimationText>
            </div>
          </div>
          <NetstatAnimationBlock
            className={`${netstatStyles.netstat_price_frame} ${netstatStyles.shadowed_background}`}
            duration={500}
            delay={600}
            inView={inView}
          >
            <ImageComponent
              src={PriceFrame2x}
              alt="price-frame"
              width={195}
              height={222}
              sizes="(max-width: 450px) 50vw, 100vw"
            />
          </NetstatAnimationBlock>
        </div>
      </div>
    </div>
  );
}

export default NetstatPrice;
