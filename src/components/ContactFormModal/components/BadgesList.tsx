import { FieldArray, FieldArrayRenderProps, FormikProvider } from 'formik';
import { motion } from 'framer-motion';

import Badge from './Badge';
import badges from '../data/Badges';
import { IContactFormBadges } from '../interfaces/IContactFormBadges';

import styles from '../sass/badges.module.scss';

function BadgesList({ formik }: IContactFormBadges) {
  const fieldArrayRender = ({ push, remove }: FieldArrayRenderProps) => {
    const onChangeHandler = (value: string) => {
      const projects = formik.values.project;

      if (projects.includes(value)) {
        const index = projects.indexOf(value);
        remove(index);
      } else push(value);
    };

    return (
      <div className={styles.wrapper}>
        <motion.div
          className={styles.badgesContainer}
        >
          <motion.div
            className={styles.badges}
          >
            {badges.map(({ id, text, name }) => (
              <Badge
                key={id}
                text={text}
                name={name}
                onChangeHandler={onChangeHandler}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  };

  return (
    <FormikProvider value={formik}>
      <FieldArray
        name="project"
        render={fieldArrayRender}
      />
    </FormikProvider>
  );
}

export default BadgesList;
