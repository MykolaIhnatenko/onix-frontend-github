import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/salesforceOurSolutionsSection.module.scss';

function SalesforceOurSolutionsSection({ classes = '', content }: { classes?: string, content: string }) {
  return (
    <div className={`${styles.ourSolutionsSection} ${styles[classes]}`}>
      <div className={`${styles.container} salesforceContainer`}>
        <VRARContent>
          <h2>Our solutions</h2>
        </VRARContent>
        <VRARContent>
          <p>
            {content}
          </p>
        </VRARContent>
      </div>
    </div>
  );
}

SalesforceOurSolutionsSection.defaultProps = {
  classes: '',
};
export default SalesforceOurSolutionsSection;
