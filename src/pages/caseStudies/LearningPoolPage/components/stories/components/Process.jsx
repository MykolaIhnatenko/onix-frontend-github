import PropTypes from 'prop-types';

import InViewAnimation from '../../InViewAnimation';
import ImageComponent from '../../../../../../components/Image/Image';

import styles from '../../../sass/DevelopmentProcessStory.module.scss';

function Process({ process }) {
  return (
    <div className={styles.process} key={process.imgSrc}>
      <div className={styles.imageWrapper}>
        <InViewAnimation down>
          <ImageComponent
            src={process.imgSrc}
            alt="process 5"
            width={50}
            height={50}
          />
        </InViewAnimation>
      </div>
      <div className={styles.text}>
        <InViewAnimation down>
          <p>
            {process.text}
          </p>
        </InViewAnimation>
      </div>
    </div>
  );
}

Process.propTypes = {
  process: PropTypes.shape({
    imgSrc: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Process;
