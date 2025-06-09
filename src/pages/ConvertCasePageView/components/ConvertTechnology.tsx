import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ITechnology from '../interfaces/ITechnology';
import TechContent from './TechContent';

import styles from '../sass/technology.module.scss';

function ConvertTechnology({ data }: ITechnology) {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <VRARContent>
          <MainTitle className={styles.title}>
            Core technology stack we&nbsp;used
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <TechContent data={data} />
        </VRARContent>
      </div>
    </div>
  );
}

export default ConvertTechnology;
