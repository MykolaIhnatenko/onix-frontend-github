import { useState } from 'react';

import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';
import auditData from '../data/auditData.json';
import MainTitle from '../../../components/MainTitle/MainTitle';

import styles from '../sass/UXAuditServicesSection.module.scss';

function UXAuditServicesSection() {
  const [active, setActive] = useState(1);
  return (
    <section className={styles.industrySection}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Design Audit Services We Offer
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          A UX audit offers a comprehensive evaluation of the user experience of
          a website or application. It provides an expert analysis of the site&apos;s usability,
          accessibility, and overall user engagement. Some standard services offered by a UX
          audit include:
        </ContentText>
        <ul className={styles.items}>
          {auditData.map(({ id, title, text }) => (
            <li
              key={id}
              className={`${styles.item} ${active === id ? styles.active : ''}`}
              onClick={() => setActive(id)}
              aria-hidden="true"
            >
              <div className={styles.itemTitle}>
                <span>
                  0
                  {id}
                </span>
                <h3 className={`${styles.titleText} unsetText`}>
                  {title}
                </h3>
              </div>
              <ContentText tag="p" className={styles.itemText}>
                {text}
              </ContentText>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}

export default UXAuditServicesSection;
