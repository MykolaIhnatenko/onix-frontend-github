import React from 'react';
import { useSelector } from 'react-redux';

import IStore from '../../store/interfaces/IStore';
import { IScreenSizes } from '../../store/app/interfaces/IApp';
import { getSocialLinks } from '../../layout/Footer/data/getFooterData';
import ImageComponent from '../Image/Image';
import SocialNetworkLink from '../../layout/Footer/components/common/SocialNetworkLink';
import { CONTACT_COMPANY, HR_EMAIL } from '../../constants/constants';

import CompanyLocationMap from '@/images/singleCareer/companyInfoAndLocation/img_company_location@2x.webp';
import CompanyLocationMapTablets from '@/images/singleCareer/companyInfoAndLocation/img_company_location_tablets@2x.webp';
import CompanyLocationMapMobile from '@/images/singleCareer/companyInfoAndLocation/img_company_location_mobile@2x.webp';

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
    <div className="relative max-w-[530px] w-full bg-black screen-lg:max-w-full">
      <div className="p-[30px] screen-md:p-[30px_0]">
        <div className="mb-[30px]">
          <p className="text-[18px] font-[400] leading-[24px] text-white font-generalSans">(066) 29-36-512</p>
          <p className="text-[18px] font-[400] leading-[24px] text-white font-generalSans">(068) 99-62-876</p>
        </div>
        <a
          href={`mailto:${HR_EMAIL}`}
          rel="noreferrer nofollow"
          className="text-[14px] font-[400] leading-[20px] text-white underline font-generalSans"
        >
          {HR_EMAIL}
        </a>
        <div className="flex gap-[10px] mt-[30px] mb-[30px]">
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
        <p className="text-[14px] font-[400] leading-[18px] text-white max-w-[330px] mb-[10px] font-generalSans">
          {CONTACT_COMPANY.CITY}
        </p>
        <p className="text-[14px] font-[400] leading-[18px] text-white max-w-[330px] mb-0 font-generalSans">
          {CONTACT_COMPANY.ADDRESS}
        </p>
      </div>
      <ImageComponent
        alt="Company Location Map"
        className="w-full h-fit object-cover max-h-[610px]"
        src={getImage().map}
      />
    </div>
  );
}

export default CompanyInfoAndLocation;
