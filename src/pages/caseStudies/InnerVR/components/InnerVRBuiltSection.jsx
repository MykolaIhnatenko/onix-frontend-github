import { useEffect, useState } from 'react';

import InnerVRCard from './InnerVRCard';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import { builtAccordionContent } from '../data/InnerVRData';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/InnerVRBuiltSection.module.scss';

const arrow = '/static/images/Pages/InnerVR/builtSection/ic_arrow.svg';
function InnerVRBuiltSection() {
  const [activeItemId, setActiveItemId] = useState(0);

  const toggleAccordionItem = (id) => setActiveItemId(id === activeItemId ? 0 : id);

  useEffect(() => {
    toggleAccordionItem(builtAccordionContent[0].id);
  }, []);

  return (
    <section className={styles.builtSection}>
      <div className="containerInnerVR pt">
        <InnerVRCard>
          <div className="dFlex">
            <div className={`${styles.left} leftFlex`}>
              <VRARPageAppearAnimation tag="p" classes="title">
                How InnerVR was built
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation tag="h2" classes={`${styles.subtitle} subtitle`}>
                The development of InnerVR Beta resulted in a visually stunning and optimized VR meditation app,
                showcasing innovative solutions and capturing the essence of relaxation and engagement.
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation tag="p" classes="text">
                The development of InnerVR Beta took 6 months.
              </VRARPageAppearAnimation>
            </div>
            <div className={`${styles.right} rightFlex`}>
              <ul className={styles.accordion}>
                {builtAccordionContent.map(({ id, question, answer }) => (
                  <li
                    className={`${styles.item} ${activeItemId === id ? styles.active : ''}`}
                    key={id}
                  >
                    <div
                      className={styles.question}
                      onClick={() => toggleAccordionItem(id)}
                      onKeyDown={() => toggleAccordionItem(id)}
                      role="button"
                      tabIndex="-1"
                    >
                      <h3 className="pink2 borderTitle">
                        {question}
                      </h3>
                      <div className={`${styles.arrow} ${activeItemId === id ? styles.rotate : ''}`}>
                        <ImageComponent
                          src={arrow}
                          width={20}
                          height={12}
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div className={styles.answer}>
                      <div className={styles.answerInner}>
                        <p className="text">{answer}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </InnerVRCard>
      </div>
    </section>
  );
}

export default InnerVRBuiltSection;
