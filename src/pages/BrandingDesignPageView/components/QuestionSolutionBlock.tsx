import React from 'react';

import { IQuestionSolutionBlockProps } from '../interfaces/IQuestionSolutionBlock';

import styles from '../sass/questionSolutionBlock.module.scss';

function QuestionSolutionBlock({ data }: IQuestionSolutionBlockProps) {
  return (
    <section>
      <div className={styles.container}>
        {data.title}
        <div className={styles.rowsBlock}>
          {data.rows.map(({ id, content }) => (
            <React.Fragment key={id}>{content}</React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuestionSolutionBlock;
