import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CareerInfoBlock from './components/CareerInfoBlock';
import WeOfferBlock from './components/WeOfferBlock';
import ISingleCareerView from './interfaces/ISingleCareerView';
import CareerContactForm from './components/CareerContactForm';
import CareersFormModal from '../Careers/components/CareersFormModal';
import { FormModalVariants } from '../../store/app/contactForm/interfaces/IContactForm';
import { setModalView } from '../../store/app/contactForm/slice';

function SingleCareerView({ career }: ISingleCareerView) {
  const dispatch = useDispatch();
  const { FORM } = FormModalVariants;

  useEffect(() => () => {
    dispatch(setModalView({ modalView: FORM }));
  }, []);

  return (
    <>
      <CareerInfoBlock
        name={career?.attributes?.name}
        description={career?.attributes?.text}
        department={career?.attributes?.departmentType?.data?.attributes?.name}
      />
      <WeOfferBlock />
      <CareerContactForm vacancyName={career?.attributes?.name} />
      <CareersFormModal />
    </>
  );
}

export default SingleCareerView;
