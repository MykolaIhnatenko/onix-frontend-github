import useWindowSize from '../../../hook/useWindowSize';
import { LG_DEVICE, MD_DEVICE } from '../../../constants/constants';
import ImageComponent from '../../../components/Image/Image';

const basePath = '/static/images/Pages/Travelbid';
const logo = `${basePath}/mainSection/logotype.svg`;

function Logo() {
  const { width } = useWindowSize();

  const getDimensions = () => {
    if (width < MD_DEVICE) {
      return { width: 257, height: 40 };
    }
    if (width <= LG_DEVICE) {
      return { width: 309, height: 48 };
    }
    return { width: 360, height: 56 };
  };

  return (
    <ImageComponent
      src={logo}
      width={getDimensions().width}
      height={getDimensions().height}
      quality={95}
      alt="Travelbid logo"
    />
  );
}

export default Logo;
