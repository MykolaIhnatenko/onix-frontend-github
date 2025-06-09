import { IDevelopmentServicesBlack } from './interfaces/IDevelopmentServicesBlack';
import { useAppSelector } from '../../hook/reduxToolkit';
import DevelopmentServicesTemplate from 'components/DevelopmentServicesTemplate/DevelopmentServicesTemplate';
import { XXXL_DEVICE } from '../../constants/constants';
import BgBlackLarge from '@/images/developmentServicesBlack/img_devServicesBlackLarge.webp';
import BgBlack from '@/images/developmentServicesBlack/img_devServicesBlack.webp';
import BgBlackTablet from '@/images/developmentServicesBlack/img_devServicesBlackTablet.webp';
import BgBlackMobile from '@/images/developmentServicesBlack/img_devServicesBlackMobile.webp';

function DevelopmentServicesBlack({
  upTitle, title, description, subTitle, data, withoutBackground, classes, customBackground,
}: IDevelopmentServicesBlack) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isLGDevice,
      screenWidth,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    if (screenWidth >= XXXL_DEVICE) {
      return BgBlackLarge;
    }

    if (isLGDevice || isSMDevice) {
      return BgBlackTablet;
    }

    if (isXSDevice) {
      return BgBlackMobile;
    }

    return BgBlack;
  };

  return (
    <DevelopmentServicesTemplate
      upTitle={upTitle}
      title={title}
      description={description}
      subTitle={subTitle}
      background={getBackground()}
      customBackground={customBackground}
      data={data}
      withoutBackground={withoutBackground}
      isMobile={isXSDevice || isSMDevice}
      classes={classes}
      blackTheme
    />
  );
}

export default DevelopmentServicesBlack;
