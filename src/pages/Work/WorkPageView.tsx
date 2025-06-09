import { useSelector } from 'react-redux';

import WorkMainSection from './components/WorkMainSection';
import ProjectsSection from './components/ProjectsSection';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import IWork from './interfaces/IWork';
import { IScreenSizes } from '../../store/app/interfaces/IApp';
import IStore from '../../store/interfaces/IStore';
import ModalLayout from '../../layout/ModalLayout/ModalLayout';
import FilterMenuMobile from '../../components/FilterMenuMobile/FilterMenuMobile';

import styles from './sass/workPage.module.scss';

function WorkPageView({
  typeFilter, typeFilterHandle, technologiesList,
  selectFilter, filters, selectFilterHandle, listProjects,
  openModal, openModalHandle, isLoading,
}: IWork) {
  const {
    isSMDevice, isXSDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);
  const isMobile = isXSDevice || isSMDevice;
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <WorkMainSection
          typeFilter={typeFilter}
          typeFilterHandle={typeFilterHandle}
          technologiesList={technologiesList}
        />
        <ProjectsSection
          filters={filters}
          typeFilter={typeFilter}
          selectFilter={selectFilter}
          listProjects={listProjects}
          selectFilterHandle={selectFilterHandle}
          isLoading={isLoading}
        />
        <CallToActionComponent
          background={TellUsAboutLG}
          withButton
          title="Want to begin a project that requires a&nbsp;tailored&nbsp;solution?"
          btnText="Get started now"
          classes={{
            cta: '!p-[200px_70px] screen-lg:!p-[77px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: 'after:!hidden',
            title: `!max-w-[860px] !pb-[60px] screen-lg:!max-w-[690px] screen-lg:!pb-[50px] screen-md:!pb-[30px]
            screen-md:!max-w-full`,
          }}
        />
      </div>
      {isMobile && openModal && (
        <ModalLayout>
          <FilterMenuMobile
            title={typeFilter.split('All')[0] || ''}
            openModalHandle={openModalHandle}
            filters={filters}
            selectFilter={selectFilter}
            selectFilterHandle={selectFilterHandle}
          />
        </ModalLayout>
      )}
    </div>
  );
}

export default WorkPageView;
