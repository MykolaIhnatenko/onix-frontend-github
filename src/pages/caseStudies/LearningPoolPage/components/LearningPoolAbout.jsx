import React from 'react';

import InViewAnimation from './InViewAnimation';

import styles from '../sass/LearningPoolAbout.module.scss';

function LearningPoolAbout() {
  return (
    <section className={styles.about}>
      <InViewAnimation down>
        <p>
          Founded in 2006, Learning Pool creates educational content and technology solutions for public
          and private sector customers and learners around the world. The solutions include traditional
          Learning Management Systems (LMS), next-generation Learning Experience Platforms (LXP), the
          world&apos;s most installed Learning Record Store (LRS), agile learning content development
          tools,
          nearly 600 off-the-shelf e-learning modules, and award-winning custom content development.
        </p>
      </InViewAnimation>
    </section>
  );
}

export default LearningPoolAbout;
