import React from 'react';
import { motion } from 'framer-motion';

import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/qaIndustrySection.module.scss';

interface IQAIndustrySectionProps {
  title: React.ReactNode;
  data: {
    id: number;
    number: string;
    text: string;
  }[]
}

const ItemAnimation = { hidden: { y: 150, opacity: 0 }, visible: { y: 0, opacity: 1 } };

function QAIndustrySection({ title, data }: IQAIndustrySectionProps) {
  return (
    <section className={styles.section}>
      <PageContainer className={styles.container}>
        <div className={styles.content}>
          {title}
        </div>
        <ul className={styles.items}>
          {data.map(({ id, number, text }) => (
            <motion.li
              key={id}
              className={styles.item}
              initial="hidden"
              whileInView="visible"
              variants={ItemAnimation}
              viewport={{ amount: 0.2, once: true }}
            >
              <span className={styles.itemNumber}>{number}</span>
              <ContentText tag="p" className={styles.itemText}>
                {text}
              </ContentText>
            </motion.li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}

export default QAIndustrySection;
