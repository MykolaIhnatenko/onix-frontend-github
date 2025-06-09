import expertiseData from '../data/expertiseData';
import 'swiper/css';
import PageContainer from '../../../components/PageContainer/PageContainer';
import DragSlider from '../../../components/DragSlider/DragSlider';

import styles from '../sass/UXExpertise.module.scss';

function UXExpertise() {
  return (
    <div className={styles.expertise}>
      <PageContainer>
        <h2 className={styles.title}>
          Our Expertise Will Help Solve Your Pain
        </h2>
        <div className={styles.description}>
          <p>
            UX audit services solve problems related to the user experience of a website or
            application. It helps identify pain points that users may be experiencing while
            navigating through the site and provides recommendations for improvement.
          </p>
          <p className={styles.commonProblems}>
            Some common problems that design audit and UX audit services can solve:
          </p>
        </div>
      </PageContainer>
      <DragSlider
        data={expertiseData}
        withoutDots
      />
    </div>
  );
}

export default UXExpertise;
