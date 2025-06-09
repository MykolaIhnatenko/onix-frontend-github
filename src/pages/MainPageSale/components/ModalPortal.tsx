import React from 'react';
import { AnimatePresence } from 'framer-motion';

import CaseStudiesPanelModal from './CaseStudiesPanelModal';
import ICaseStudiesPanelModal from '../interfaces/ICaseStudiesPanelModal';
import ClientOnlyPortal from 'components/ClientOnlyPortal/ClientOnlyPortal';

function ModalPortal({
  openModal,
  technologiesList,
  selectFilterHandle,
  setOpenModal,
  open,
  openHandle,
  tag,
  technology,
}: ICaseStudiesPanelModal) {
  return (
    <ClientOnlyPortal selector="#modal">
      <AnimatePresence initial={false}>
        {openModal && (
        <CaseStudiesPanelModal
          technologiesList={technologiesList}
          selectFilterHandle={selectFilterHandle}
          setOpenModal={setOpenModal}
          open={open}
          openHandle={openHandle}
          openModal={openModal}
          tag={tag}
          technology={technology}
        />
        )}
      </AnimatePresence>
    </ClientOnlyPortal>
  );
}

export default ModalPortal;
