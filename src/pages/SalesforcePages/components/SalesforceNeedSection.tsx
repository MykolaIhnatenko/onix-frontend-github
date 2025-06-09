import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ISalesforceNeedSection from '../interfaces/ISalesforceNeedSection';

import styles from '../sass/salesforceNeedSection.module.scss';

function SalesforceNeedSection({ needContent }: ISalesforceNeedSection) {
  return (
    <div className={styles.needSection}>
      <div className={`${styles.container} salesforceContainer`}>
        <VRARContent>
          <h2 className="fs_22">The Onix team needed to:</h2>
        </VRARContent>
        <ul>
          {needContent.map(({ id, img, content }) => (
            <li key={id}>
              <VRARContent>
                <div className={styles.item}>
                  <div className={styles.responsibilityIcon}>
                    <ImageComponent
                      src={img}
                      width={28}
                      height={28}
                      alt="icon"
                    />
                  </div>
                  <p>{content}</p>
                </div>
              </VRARContent>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SalesforceNeedSection;
