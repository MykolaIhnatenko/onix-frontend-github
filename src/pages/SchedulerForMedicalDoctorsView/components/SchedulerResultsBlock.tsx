import { StaticImageData } from 'next/image';

import ImageComponent from 'components/Image/Image';
import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from '../sass/schedulerResultsBlock.module.scss';

function SchedulerResultsBlock({ background }: { background: StaticImageData }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <ImageComponent
          src={background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <PageContainer className={styles.content}>
        <MainTitle className={styles.title}>
          UX/UI design
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          The design was prepared by Onix’s designers who studied EHR and CRM systems and
          navigation/delivery applications as a reference. Sketch was used to make the
          wireframes, and upon the client’s approval, high-fidelity interactive prototypes
          were created in Invision.
        </ContentText>
        <ContentText tag="p" className={styles.text}>
          Simplicity was the client’s main requirement. This not only saved on the budget for
          the user interface design but provided the basis for an excellent user experience.
          The resulting minimalist interface makes it easier for administrators and doctors
          to focus on their tasks. There are no showy colors or other fancy elements that might
          divert attention when doctors need to quickly access and perceive important medical
          information and directions.
        </ContentText>
      </PageContainer>
    </div>
  );
}

export default SchedulerResultsBlock;
