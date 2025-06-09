import { useAppSelector } from '../../../../hook/reduxToolkit';
import ImageComponent from '../../../../components/Image/Image';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/InnerVRMainSection.module.scss';

const logo = '/static/images/Pages/InnerVR/mainSection/img_logo@2x.webp';
const womanMobile = '/static/images/Pages/InnerVR/mainSection/img_woman_mobile@2x.webp';
const womanTablet = '/static/images/Pages/InnerVR/mainSection/img_woman_tablet@2x.webp';
const woman = '/static/images/Pages/InnerVR/mainSection/img_woman@2x.webp';

function InnerVRMainSection() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      background: woman,
    };
    if (isMDDevice) {
      bg.background = womanTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = womanMobile;
    }
    return bg;
  };

  return (
    <section className={styles.mainSection}>
      <div className={styles.mainInner}>
        {getBackground().background && (
        <div className={styles.bg}>
          <ImageComponent
            src={getBackground().background}
            alt="woman"
            fill
            sizes="100vw"
            priority
          />
        </div>
        )}
        <div className={styles.container}>
          <ImageComponent
            src={logo}
            width={165}
            height={40}
            alt="logo"
            className={styles.logo}
          />
          <VRARPageAppearAnimation tag="h1">
            InnerVR: creating an Oculus VR meditation game.
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation tag="p">
            Learn how Onix helped to build
            <br />
            {' '}
            a VR meditation app
          </VRARPageAppearAnimation>
        </div>
      </div>
    </section>
  );
}

export default InnerVRMainSection;
