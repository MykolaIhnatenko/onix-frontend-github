import Card from './Card';
import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import BracketologyPageContainer from './BracketologyPageContainer';
import BracketologyText from './BracketologyText';
import mobileBg from '@/images/bracketology/resultSection/img_bg_mobile.webp';
import Icons from '../../../assets/icon';

import styles from '../sass/BracketologyResultSection.module.scss';

const resultVideo = '/static/video/bracketology-result-video.mp4';

function BracketologyResultSection() {
  const {
    isSMDevice, isMDDevice, isLGDevice,
    isXLDevice, isXXLDevice, isXXXLDevice,
  } = useAppSelector((state) => state?.app.screenSizes);
  const isNotMobile = isSMDevice || isMDDevice || isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice;

  return (
    <section className={styles.resultSection}>
      <BracketologyPageContainer className={styles.container}>
        <Card cardVariant="resultCard">
          <BracketologyText tag="h2" variant="title">Result and prospects</BracketologyText>
          <BracketologyText tag="p" variant="text">
            Within 7 months, Onix’s team completed the daunting task of migrating a working application to AWS
            and delivered a completely repackaged design for the project, transforming the old Bach Bracket
            website and application into an up-to-date innovative platform.
          </BracketologyText>
          <BracketologyText tag="p" variant="text" className={styles.paragraph}>
            The client liked the improved interface and appreciated the constant smooth communication between
            the teams.
          </BracketologyText>
        </Card>
        <div className={styles.resultVideoBlock}>
          <Card cardVariant="resultAposCard" wrapperVariant="resultAposWrapper">
            <div className={styles.resultContent}>
              <Icons.IconBracketologyApos className={styles.apos} />
              <BracketologyText tag="p" variant="text">
                They always went above and beyond and really viewed themselves as an extension of our company’s team.
              </BracketologyText>
            </div>
            <BracketologyText tag="p" variant="text" className={styles.author}>Jonah Fialkow, CEO</BracketologyText>
          </Card>
          <div className={styles.resultVideo}>
            {isNotMobile
              ? (
                <video
                  autoPlay
                  muted
                  loop
                  src={resultVideo}
                >
                  <track kind="captions" src={resultVideo} />
                </video>
              )
              : <ImageComponent src={mobileBg} width={336} height={336} alt="CEO" />}
          </div>
        </div>
        <Card cardVariant="resultCard" wrapperVariant="resultWrapper">
          <BracketologyText tag="p" variant="text">
            Having migrated to AWS and monitored the load, Onix’s team reduced the capacity of servers
            and services, cutting the costs from around $800 per month down to nearly $450.
          </BracketologyText>
          <BracketologyText tag="p" variant="text">
            In the new Docker and AWS-supported environment, we have achieved greater flexibility and productivity.
            Servers don’t require manual scaling any longer and automatically adjust to rises and falls in the
            load on the memory or processor. Hosting bills have also decreased.
          </BracketologyText>
          <BracketologyText tag="p" variant="text">
            The new degree of control, such as login via SSH, has made problem detection and fixing much easier.
          </BracketologyText>
          <BracketologyText tag="p" variant="text">
            Most importantly, the platform retained the ability to support the entire audience of all
            available shows at the same time.
          </BracketologyText>
          <BracketologyText tag="p" variant="text">
            The architecture was built in such a way that the extension to new shows will take only 3-4 weeks,
            including all necessary preparations.
          </BracketologyText>
          <BracketologyText tag="p" variant="text">
            This ability will come in handy as Bracketology plans to add two new reality TV shows – Survivor
            and The Voice – in 2022.
          </BracketologyText>
          <BracketologyText tag="p" variant="text">
            Onix is happy to have contributed to the project’s growth and hopes to continue the collaboration.
          </BracketologyText>
        </Card>
      </BracketologyPageContainer>
    </section>
  );
}

export default BracketologyResultSection;
