import { useState } from 'react';

import Icon from '../../../assets/icon';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { IOnixStoryMapAccordionItem, IOnixStoryOurClientsAcordion } from '../interfaces/IOnixStoryMapItem';

import styles from '../sass/onixStoryOurClientsAccordion.module.scss';

function OnixStoryOurClientsAccordion({ data }: IOnixStoryOurClientsAcordion) {
  const [localActiveId, setActiveId] = useState(0);

  const onOpen = (index: number) => {
    setActiveId(index === localActiveId ? -1 : index);
  };

  const compareFn = (a: IOnixStoryMapAccordionItem, b: IOnixStoryMapAccordionItem) => parseInt(b.number)
  - parseInt(a.number);

  const sortContentByNumber = (content: IOnixStoryMapAccordionItem[]) => [...content].sort(compareFn);

  return (
    <div className={styles.container}>
      {data.map(({ title, content }, index) => (
        <div key={[title, index].join('_')} className={styles.accordionItem}>
          <div
            className={styles.accordionHeader}
            onClick={() => onOpen(index)}
            role="presentation"
          >
            <MainTitle className={styles.title}>
              {title}
            </MainTitle>
            <Icon.IconOnixStoryArrow className={`${styles.icon} ${localActiveId === index ? styles.open : ''}`} />
          </div>
          <div className={`${styles.content} ${localActiveId === index ? styles.open : ''}`}>
            {sortContentByNumber(content).map(({ country, flag, number }) => (
              <div key={[country, index].join('_')} className={styles.contentItem}>
                <div className={styles.contentTitleContainer}>
                  {flag}
                  <MainTitle className={styles.contentTitle}>
                    {country}
                  </MainTitle>
                </div>
                <MainTitle className={styles.number}>
                  {number}
                </MainTitle>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OnixStoryOurClientsAccordion;
