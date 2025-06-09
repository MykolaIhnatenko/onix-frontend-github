import { useSelector } from 'react-redux';

import IAnimationCreatorData from '../interfaces/IAnimationCreatorData';
import Background from '@/images/AdoricCase/img_BackgroundBottom.webp';
import BackgroundTablet from '@/images/AdoricCase/img_BackgroundBottomTablet.webp';
import BackgroundMobile from '@/images/AdoricCase/img_BackgroundBottomMobile.webp';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import ImageComponent from '../../../components/Image/Image';
import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import VRARContentText from 'components/VRARContentText/VRARContentText';

import styles from '../sass/AnimationCreatorData.module.scss';

function AnimationCreatorData({ title, listPerformance, desc }: IAnimationCreatorData) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg = {
      background: Background,
    };
    if (isMDDevice) {
      bg.background = BackgroundTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = BackgroundMobile;
    }
    return bg;
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="image"
          sizes="100vw"
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.titleBox}>
          <VRARMainTitle title={title} />
        </div>
        <div className={styles.content}>
          <div className={styles.listBox}>
            {listPerformance.map((item, index) => (
              <div
                key={[item, index].join('_')}
                className={styles.item}
              >
                <VRARMainTitle
                  tag="span"
                  title={`0${index + 1}`}
                  classes={{ title: '!text-[40px]/[48px] screen-md:!text-[32px]/[40px]' }}
                />
                <VRARContentText
                  tag="p"
                  text={item}
                  classes={{ text: '!text-[24px]/[32px] screen-md:!text-[18px]/[26px] min-lg:text-end' }}
                />
              </div>
            ))}
          </div>
          <div className={styles.descBox}>
            <VRARMainTitle
              tag="p"
              title={desc}
              classes={{ title: '!text-[32px]/[48px] screen-lg:!text-[30px]/[40px] screen-md:!text-[20px]/[28px]' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimationCreatorData;
