import { motion } from 'framer-motion';

import Icons from '../../../assets/icon';
import MainTitle from 'components/MainTitle/MainTitle';
import ICaseStudiesPanelModal from '../interfaces/ICaseStudiesPanelModal';
import FiltersView from './FiltersView';

import styles from '../sass/caseStudiesPanel.module.scss';

function CaseStudiesPanelModal({
  openModal, setOpenModal, technologiesList, openHandle, open, technology, tag, selectFilterHandle,
}: ICaseStudiesPanelModal) {
  const getActiveStyles = () => (open ? '' : styles.activeClose);
  const openCheck = (name: string) => open && technology === name;
  const getClassName = (name: string) => (tag === `All ${name}` ? styles.active : '');

  return (
    <motion.div
      className={styles.modal}
      initial="collapsed"
      animate={openModal ? 'open' : 'collapsed'}
      exit="collapsed"
      variants={{
        open: { height: '100svh', overflow: 'auto' },
        collapsed: { height: 0, overflow: 'hidden' },
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.modalContent}>
        <button
          className={styles.close}
          onClick={() => setOpenModal(false)}
          type="button"
        >
          <Icons.IconClose className={styles.icon} />
        </button>
        <MainTitle tag="span" className={styles.modalTitle}>Filters</MainTitle>
        <div className={styles.technologiesList}>
          {technologiesList.data && technologiesList.data.map(({ id, attributes }) => (
            <FiltersView
              key={id}
              id={id}
              attributes={attributes}
              technology={technology}
              openHandle={openHandle}
              openCheck={openCheck}
              selectFilterHandle={selectFilterHandle}
              tag={tag}
              getActiveStyles={getActiveStyles}
              getClassName={getClassName}
              styles={styles}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default CaseStudiesPanelModal;
