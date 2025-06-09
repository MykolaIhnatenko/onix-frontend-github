import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';
import { useState } from 'react';

import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import NationalHolidaysMainBlock from './components/NationalHolidaysMainBlock';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { INationalHolidays } from '../../interfaces/INationalHolidays';
import WebflowCATTellUsTabletBg from '@/images/webflowPage/callToAction/img_webflow_cat_tell_us_tablet_bg.webp';
import TellUsAboutSM from '@/images/img_tell_us_about_sm.webp';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';

function NationalHolidaysPageView({ data }: { data: INationalHolidays[] }) {
  const [yearSelector, setYearSelector] = useState(true);
  const onYearSelector = (selector: boolean) => {
    setYearSelector(selector);
  };

  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      tellUs: TellUsAboutLG,
    };
    if (isMDDevice) {
      bg.tellUs = WebflowCATTellUsTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.tellUs = TellUsAboutSM;
    }
    return bg;
  };

  return (
    <>
      <NationalHolidaysMainBlock
        onClick={onYearSelector}
        selector={yearSelector}
        holidays={data}
      />
      <CallToActionComponent
        background={getBackground().tellUs}
        withButton
        title={(
          <>
            Tell us about your product idea and let the&nbsp;magic&nbsp;unfold.
          </>
      )}
        btnText="Speak to Our Expert"
      />
    </>
  );
}

export default NationalHolidaysPageView;
