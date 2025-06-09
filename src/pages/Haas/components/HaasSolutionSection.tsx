import { useState } from 'react';

import ImageComponent from '../../../components/Image/Image';
import solutionContent from '../data/solutionContent';
import solutionAccordionContent from '../data/solutionAccordionContent';
import HaasText from './HaasText';
import phoneFrame from '@/images/haas/solutionSection/img_phone.webp';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from '../sass/HaasSolutionSection.module.scss';

function HaasSolutionSection() {
  const [activeId, setActiveId] = useState(1);

  const onClickHandler = (id: number) => setActiveId(id);

  return (
    <PageContainer className={styles.solution}>
      <div className={styles.container}>
        <HaasText tag="h2" variant="title" className={styles.title}>Solution</HaasText>
        <HaasText tag="p" variant="fs16_24" className={styles.subTitle}>
          The state-of-the-art features of Haas app. See how we provided development solutions aligned with our
          client&apos;s goals, budget, and time.
        </HaasText>
        <div className={styles.accordionBlock}>
          <div className={styles.carousel}>
            <div className={styles.frame}>
              <ImageComponent
                src={phoneFrame}
                width={349}
                height={700}
                quality={98}
                sizes="100vw"
                alt="phone-frame"
              />
              <div className={styles.mockups}>
                {solutionContent.map(({ id, src }) => (
                  <div
                    className={activeId === id ? styles.active : styles.mockup}
                    key={id}
                  >
                    <ImageComponent
                      src={src}
                      width={311}
                      height={668}
                      quality={98}
                      sizes="100vw"
                      alt="mockup"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ul className={styles.accordion}>
            {solutionAccordionContent.map(({ id, question, answer }) => (
              <li
                className={`${styles.item} ${activeId === id ? styles.active : ''}`}
                key={id}
              >
                <div
                  className={styles.question}
                  onClick={() => onClickHandler(id)}
                  role="presentation"
                  tabIndex={-1}
                >
                  <HaasText tag="h3">
                    {question}
                  </HaasText>
                  <span className={styles.plus} />
                </div>
                <div className={styles.answer}>
                  <div className={styles.answerInner}>
                    <HaasText variant="fs16_24">{answer}</HaasText>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}

export default HaasSolutionSection;
