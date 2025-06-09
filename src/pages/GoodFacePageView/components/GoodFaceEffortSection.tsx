import GoodFaceEffortListItem from './GoodFaceEffortListItem';
import effortContentData from '../data/effortContentData';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/goodFaceEffortSection.module.scss';

function GoodFaceEffortSection() {
  return (
    <section className={styles.effortSection}>
      <div className="effortContainer container">
        <VRARContent>
          <h2>
            We made a great effort to
            <br />
            provide the following
            <span> solutions:</span>
          </h2>
        </VRARContent>
        <ul>
          {effortContentData.map(({
            id,
            icon,
            title,
            text,
          }) => (
            <GoodFaceEffortListItem key={id} text={text} icon={icon} title={title} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GoodFaceEffortSection;
