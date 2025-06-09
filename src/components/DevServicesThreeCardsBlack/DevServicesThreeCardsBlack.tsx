import { useAppSelector } from '../../hook/reduxToolkit';
import ImageComponent from '../Image/Image';
import IDevServicesThreeCardsBlack from './interfaces/IDevServicesThreeCardsBlack';
import DevServicesThreeCardsTemplate from 'components/DevServicesThreeCardsTemplate/DevServicesThreeCardsTemplate';
import BgLarge from '../../assets/images/developmentServices/img_devServicesBgLarge.webp';
import Bg from '../../assets/images/developmentServices/img_devServicesBg.webp';
import BgTablet from '../../assets/images/developmentServices/img_devServicesBgTablet.webp';
import BgMobile from '../../assets/images/developmentServices/img_devServicesBgMobile.webp';

function DevServicesThreeCardsBlack({
  title, text, data,
}: IDevServicesThreeCardsBlack) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    if (isXXXLDevice) {
      return BgLarge;
    }
    if (isMDDevice || isSMDevice) {
      return BgTablet;
    }
    if (isXSDevice) {
      return BgMobile;
    }

    return Bg;
  };

  return (
    <section
      className={`relative bg-black pt-[120px] pb-[120px]
        screen-lg:pt-[80px] screen-lg:pb-[80px] screen-md:pb-[60px]`}
    >
      <div className={`absolute top-0 left-0 w-full h-[464px] screen-lg:h-[424px]
        screen-md:h-[361px] after:content-[''] after:absolute after:left-0
        after:bottom-0 after:w-full after:h-[80px]
        after:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_100%)]`}
      >
        <ImageComponent
          src={getBackground()}
          alt="background"
          sizes="100vw"
          quality={92}
          className="w-full h-full object-cover object-left-top"
        />
      </div>
      <DevServicesThreeCardsTemplate
        title={title}
        text={text}
        data={data}
      />
    </section>
  );
}

export default DevServicesThreeCardsBlack;
