import VRARContent from '../../../components/VRARContent/VRARContent';
import EdplusMobileApplicationsCard from './EdplusMobileApplicationsCard';
import EdplusText from './EdplusText';
import Icon from '../../../assets/icon';
import mobileApplicationDescription from '../data/mobileApplicationDescription';
import mobileApplicationCards from '../data/mobileApplicationCards';

import styles from '../sass/edplusMobileApplications.module.scss';

function EdplusMobileApplications() {
  return (
    <div className={styles.mobileApplications}>
      <div className={styles.edplusWrap}>
        <div className={styles.titleBlock}>
          <VRARContent>
            <h2 className={styles.edplusTitleStyle}>
              EdPlus Mobile Applications
            </h2>
          </VRARContent>
          <VRARContent>
            <p className={styles.edplusTextStyle}>
              EdPlus offers 150+ topics to learn, 5,000+ videos to watch,
              and new content is being added daily. For example:
            </p>
          </VRARContent>
        </div>
        <div className={styles.boxList}>
          {mobileApplicationCards.map(({
            id,
            icon,
            content,
          }) => (
            <EdplusMobileApplicationsCard
              key={id}
              icon={icon}
              content={content}
            />
          ))}
        </div>
        <div className={styles.description}>
          {mobileApplicationDescription.map(({ id, content }) => (
            <VRARContent key={id}>
              <EdplusText content={content} />
            </VRARContent>
          ))}
        </div>
      </div>
      <div className={styles.abstractImage}>
        <Icon.IconEdplusAbstraction />
      </div>
    </div>
  );
}

export default EdplusMobileApplications;
