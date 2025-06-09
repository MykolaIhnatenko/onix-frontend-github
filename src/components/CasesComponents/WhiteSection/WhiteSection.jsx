import PropTypes from 'prop-types';

import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import Text from '../Text/Text';
import VRARPageAppearAnimation from '../../VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from './sass/WhiteSection.module.scss';

function WhiteSection({
  title, subtitle, boldText, lastBoldText, firstText, lastText,
}) {
  return (
    <section className={styles.whiteSection}>
      <div className={`${styles.container}`}>
        <VRARPageAppearAnimation>
          <Title>
            {title}
          </Title>
        </VRARPageAppearAnimation>
        <VRARPageAppearAnimation>
          <Subtitle className={styles.subtitleText}>
            {subtitle}
          </Subtitle>
        </VRARPageAppearAnimation>
        {boldText && (
        <VRARPageAppearAnimation classes={styles.subtitleContainer}>
          <h4>
            {boldText}
          </h4>
        </VRARPageAppearAnimation>
        )}
        <div className={styles.textBlock}>
          <VRARPageAppearAnimation classes={styles.textContainer}>
            <Text className={styles.text}>
              {firstText}
            </Text>
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation classes={styles.textContainer}>
            <Text className={styles.text}>
              {lastText}
            </Text>
          </VRARPageAppearAnimation>
        </div>
        {lastBoldText && (
        <VRARPageAppearAnimation classes={styles.subtitleContainer}>
          <h4>
            {lastBoldText}
          </h4>
        </VRARPageAppearAnimation>
        )}
      </div>
    </section>
  );
}

WhiteSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  boldText: PropTypes.string,
  lastBoldText: PropTypes.string,
  firstText: PropTypes.string.isRequired,
  lastText: PropTypes.string.isRequired,
};

WhiteSection.defaultProps = {
  boldText: undefined,
  lastBoldText: undefined,
};

export default WhiteSection;
