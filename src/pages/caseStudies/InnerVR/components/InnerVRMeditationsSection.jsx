import PropTypes from 'prop-types';

import InnerVRCard from './InnerVRCard';
import InnerVRBorder from './InnerVRBorder';
import InnerVRNumberListItem from './InnerVRNumbetListItem';
import InnerVRMeditationsItem from './InnerVRMeditationsItem';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import { meditations, meditationsList } from '../data/InnerVRData';

import styles from '../sass/InnerVRMeditationsSection.module.scss';

function InnerVRMeditationsSection({ saleUrl }) {
  return (
    <section className={`${styles.meditationsSection} ${saleUrl ? styles.saleContainer : ''} `}>
      <div className="containerInnerVR pt">
        <InnerVRCard>
          <div className={`${styles.listBlock} dFlex`}>
            <div className={`${styles.left} leftFlex`}>
              <VRARPageAppearAnimation tag="p" classes="title">
                Types of meditations
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation tag="h2" classes={`${styles.subtitle} subtitle`}>
                InnerVR Beta offers several types of meditations, each built around a topic, such as
                “Body Meditations”, “Loving Kindness”, or “Morning Move”.
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation tag="p" classes={`${styles.text} text`}>
                On each topic, players can choose from at least three individual meditations, e.g., Body 1,
                Body 2, and Body 3.
              </VRARPageAppearAnimation>
            </div>
            <div className={`${styles.right} rightFlex`}>
              <ul className={styles.list}>
                {meditationsList.map(({
                  id,
                  title,
                  text,
                }) => (
                  <InnerVRNumberListItem
                    key={id}
                    text={text}
                    title={title}
                    id={id}
                  />
                ))}
              </ul>
            </div>
          </div>
          <InnerVRBorder />
          <div className={styles.imagesBlock}>
            {meditations.map(({
              id,
              text,
              img,
              imgMobile,
              imgTablet,
            }) => (
              <InnerVRMeditationsItem
                key={id}
                img={img}
                imgTablet={imgTablet}
                imgMobile={imgMobile}
                id={id}
                text={text}
              />
            ))}
          </div>
        </InnerVRCard>
      </div>
    </section>
  );
}
InnerVRMeditationsSection.propTypes = {
  // eslint-disable-next-line react/require-default-props
  saleUrl: PropTypes.bool,
};
export default InnerVRMeditationsSection;
