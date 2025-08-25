import { IDevelopmentServicesWhite } from './interfaces/IDevelopmentServicesWhite';
import { useAppSelector } from '../../hook/reduxToolkit';
import DevelopmentServicesTemplate from 'components/DevelopmentServicesTemplate/DevelopmentServicesTemplate';
import { XXXL_DEVICE } from '../../constants/constants';

import BgWhiteLarge from '@/images/developmentServicesWhite/img_devServicesWhiteLarge.webp';
import BgWhite from '@/images/developmentServicesWhite/img_devServicesWhite.webp';
import BgWhiteTablet from '@/images/developmentServicesWhite/img_devServicesWhiteTablet.webp';
import BgWhiteMobile from '@/images/developmentServicesWhite/img_devServicesWhiteMobile.webp';

function DevelopmentServicesWhite({
  upTitle, title, description, data, withoutBackground, accordionOnMobile, classes,
  customBackground, backgroundWithAccordion,
}: IDevelopmentServicesWhite) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      screenWidth,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    if (screenWidth >= XXXL_DEVICE) {
      return BgWhiteLarge;
    }

    if (isMDDevice) {
      return BgWhiteTablet;
    }

    if (isXSDevice || isSMDevice) {
      return BgWhiteMobile;
    }

    return BgWhite;
  };

  return (
    <DevelopmentServicesTemplate
      upTitle={upTitle}
      title={title}
      description={description}
      background={getBackground()}
      customBackground={customBackground}
      data={data}
      withoutBackground={withoutBackground}
      accordionOnMobile={accordionOnMobile}
      isMobile={isXSDevice || isSMDevice}
      backgroundWithAccordion={backgroundWithAccordion}
      classes={classes}
    />
  );
}

export default DevelopmentServicesWhite;
