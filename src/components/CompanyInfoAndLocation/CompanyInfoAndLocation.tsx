import React from 'react';
import { useSelector } from 'react-redux';

import IStore from '../../store/interfaces/IStore';
import { IScreenSizes } from '../../store/app/interfaces/IApp';
import { getSocialLinks } from '../../layout/Footer/data/getFooterData';
import ImageComponent from '../Image/Image';
import SocialNetworkLink from '../../layout/Footer/components/common/SocialNetworkLink';
import CompanyLocationMap from '@/images/singleCareer/companyInfoAndLocation/img_company_location@2x.webp';
import CompanyLocationMapTablets from '@/images/singleCareer/companyInfoAndLocation/img_company_location_tablets@2x.webp';
import CompanyLocationMapMobile from '@/images/singleCareer/companyInfoAndLocation/img_company_location_mobile@2x.webp';
import { CONTACT_COMPANY, HR_EMAIL } from '../../constants/constants';

import styles from './sass/CompanyInfoAndLocation.module.scss';

function CompanyInfoAndLocation() {
  const {
    isMDDevice,
    isSMDevice,
    isXSDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);

  const getImage = () => {
    const images = {
      map: CompanyLocationMap,
    };
    if (isMDDevice) {
      images.map = CompanyLocationMapTablets;
    } else if (isSMDevice || isXSDevice) {
      images.map = CompanyLocationMapMobile;
    }
    return images;
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoBlock}>
        <div className={styles.phoneNumbers}>
          <p>(066) 29-36-512</p>
          <p>(068) 99-62-876</p>
        </div>
        <a href={`mailto:${HR_EMAIL}`} className={styles.email} rel="noreferrer nofollow">
          {HR_EMAIL}
        </a>
        <div className={styles.mediaContainer}>
          {getSocialLinks().map(({
            href, component, id, label,
          }) => (
            <SocialNetworkLink
              key={id}
              href={href}
              component={component}
              label={label}
            />
          ))}
        </div>
        <p className={styles.addressText}>
          {CONTACT_COMPANY.CITY}
        </p>
        <p className={styles.addressText}>
          {CONTACT_COMPANY.ADDRESS}
        </p>
      </div>
      <ImageComponent className={styles.mapImage} src={getImage().map} />
    </div>
  );
}

export default CompanyInfoAndLocation;
