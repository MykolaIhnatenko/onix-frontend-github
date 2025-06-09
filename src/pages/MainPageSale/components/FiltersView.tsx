import { motion } from 'framer-motion';

import MainTitle from 'components/MainTitle/MainTitle';
import Icons from '../../../assets/icon';
import IFiltersView from '../interfaces/IFiltersView';

function FiltersView({
  id, attributes, technology, openHandle, openCheck, selectFilterHandle, tag, getActiveStyles, getClassName, styles,
}: IFiltersView) {
  return (
    <div className={styles.technologiesListContiner}>
      <button
        key={id}
        className={`${styles.technologiesItem} ${technology === attributes?.name ? getActiveStyles() : ''}`}
        onClick={() => openHandle(attributes?.name)}
        type="button"
      >
        <MainTitle tag="span" className={styles.technologiesItemTitle}>
          {attributes?.name}
        </MainTitle>
        <div className={styles.technologiesItemIconContainer}>
          <Icons.IconChevron className={styles.technologiesItemIcon} />
        </div>
      </button>
      <motion.div
        className={styles.tagFilters}
        initial="collapsed"
        animate={openCheck(attributes?.name) ? 'open' : 'collapsed'}
        exit="collapsed"
        variants={{
          open: { height: 'auto' },
          collapsed: { height: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.tagFilterBar}>
          <button
            key={[id, attributes?.name].join('_')}
            className={`${styles.tagFilterItem} ${getClassName(attributes?.name)}`}
            onClick={() => selectFilterHandle(`All ${attributes?.name}`)}
            type="button"
          >
            <Icons.IconDone className={styles.tagFilterItemIcon} />
            <span className={styles.btnText}>
              All
              {' '}
              {attributes?.name}
            </span>
          </button>
          {attributes?.tags?.data?.length > 0 && [...attributes.tags.data]
            .sort((a, b) => a?.attributes?.name.localeCompare(b?.attributes?.name))
            .map((item) => (
              <button
                key={[item.id, item?.attributes?.name].join('_')}
                className={`${styles.tagFilterItem} ${tag === item?.attributes?.name ? styles.active : ''}`}
                onClick={() => selectFilterHandle(item?.attributes?.name)}
                type="button"
              >
                <Icons.IconDone className={styles.tagFilterItemIcon} />
                <span className={styles.btnText}>{item?.attributes?.name}</span>
              </button>
            ))}
        </div>
      </motion.div>
    </div>
  );
}

export default FiltersView;
