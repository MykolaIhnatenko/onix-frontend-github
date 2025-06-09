import Ellipse from './Ellipse';
import { useAppSelector } from '../../../hook/reduxToolkit';
import JSAPageContainer from './JSAPageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../components/Image/Image';
import JSAText from './JSAText';
import BlueSpan from './BlueSpan';
import screens from '@/images/JamesSmith/aboutSection/img_screens.webp';
import screensTablet from '@/images/JamesSmith/aboutSection/img_screensTablet.webp';

import styles from '../sass/JSAAboutSection.module.scss';

function JSAAboutSection() {
  const { isSMDevice, isXSDevice, isMDDevice } = useAppSelector((state) => state.app.screenSizes);
  const isSmallDevice = isXSDevice || isSMDevice || isMDDevice;

  return (
    <JSAPageContainer className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.bigEllipse}>
          <Ellipse color="pink" />
        </div>
        <VRARContent className={styles.description}>
          <JSAText tag="p" variant="fs16">
            Business Context
          </JSAText>
          <JSAText tag="h2" variant="fs38">
            The James Smith Academy is a
            <BlueSpan> unique online training platform </BlueSpan>
            built on the method of a famous fitness coach and author James Smith.
          </JSAText>
          <JSAText>
            JSA provides members with all the tools they need to reach and sustain their fitness goals.
            The app offers hundreds of educational videos, personalized exercise programs, and daily workouts led
            by a famous trainer.
            <br />
            <br />
            When the client reached Onix, he requested us to help with a few small tasks. But after starting our
            collaboration, the client was impressed by our expertise and knowledge in the sports industry, so we
            continued our partnership to improve the app&apos;s overall functionality and add new killer features
            to JSA. We devised several ideas on how this project could improve performance and user experience
            and started our new collaboration.
          </JSAText>
        </VRARContent>
        <div className={styles.picture}>
          <ImageComponent
            src={isSmallDevice ? screensTablet : screens}
            width={isSmallDevice ? 466 : 676}
            height={isSmallDevice ? 488 : 718}
            alt="screens"
            sizes="100vw"
          />
        </div>
      </div>
    </JSAPageContainer>
  );
}

export default JSAAboutSection;
