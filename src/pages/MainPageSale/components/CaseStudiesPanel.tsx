import { useState } from 'react';
import { useSelector } from 'react-redux';

import ICaseStudiesPanel from '../interfaces/ICaseStudiesPanel';
import Icons from '../../../assets/icon';
import MainTitle from 'components/MainTitle/MainTitle';
import IStore from 'store/interfaces/IStore';
import ICaseStudySelector from 'store/caseStudySelector/interfaces/ICaseStudySelector';
import { IApp } from 'store/app/interfaces/IApp';
import { FILTERS_VARIANT } from 'constants/constants';
import useScrollBlocked from 'hook/useScrollBlocked';
import ModalPortal from './ModalPortal';
import FiltersView from './FiltersView';

import styles from '../sass/caseStudiesPanel.module.scss';

function CaseStudiesPanel({
  technologiesList, selectFilterHandle, typeFilterHandle,
}: ICaseStudiesPanel) {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const {
    tag,
    technology,
  } = useSelector<IStore, ICaseStudySelector>((state) => state?.caseStudySelector);
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isXSDevice || isSMDevice;
  const openCheck = (name: string) => open && technology === name;

  const openHandle = (name: string) => {
    if (name === technology) {
      if (open) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    } else {
      setOpen(true);
      typeFilterHandle(name);
    }
  };
  useScrollBlocked(openModal);
  const getClassName = (name: string) => (tag === `All ${name}` ? styles.active : '');

  const getActiveStyles = () => (open ? styles.active : styles.activeClose);

  return (
    <div className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.container}>
          {isMobile ? (
            <button
              className={styles.filters}
              onClick={() => setOpenModal(true)}
              type="button"
            >
              <Icons.IconFilters />
              <MainTitle
                tag="span"
                className={`${styles.filtersTitle} ${technology !== FILTERS_VARIANT.SEE_ALL ? styles.active : ''}`}
              >
                Filters
              </MainTitle>
            </button>
          ) : (
            <button
              className={`${styles.seeAllbtn} ${technology === FILTERS_VARIANT.SEE_ALL ? styles.active : ''}`}
              onClick={() => typeFilterHandle(FILTERS_VARIANT.SEE_ALL)}
              type="button"
            >
              <MainTitle tag="span" className={styles.seeAllbtnTitle}>See All</MainTitle>
            </button>
          )}
          {isMobile && technology !== FILTERS_VARIANT.SEE_ALL && (
            <button
              className={`${styles.clearAllBtn} ${technology === FILTERS_VARIANT.SEE_ALL ? styles.active : ''}`}
              onClick={() => typeFilterHandle(FILTERS_VARIANT.SEE_ALL)}
              type="button"
            >
              <MainTitle tag="span" className={styles.clearAllBtnTitle}>Clear all</MainTitle>
            </button>
          )}
          <div className={styles.technologies}>
            {technologiesList?.data && technologiesList?.data?.map(({ id, attributes }) => (
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
      </div>
      <ModalPortal
        technologiesList={technologiesList}
        selectFilterHandle={selectFilterHandle}
        setOpenModal={setOpenModal}
        open={open}
        openHandle={openHandle}
        openModal={openModal}
        tag={tag}
        technology={technology}
      />
    </div>
  );
}

export default CaseStudiesPanel;
