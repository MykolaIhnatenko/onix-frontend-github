import OurSolutionsImg1 from '../../../assets/images/scheduleDoctor/feature/img_image1@2x.webp';
import OurSolutionsImgTablet1 from '../../../assets/images/scheduleDoctor/feature/img_image1Tablet@2x.webp';
import OurSolutionsImgMobile1 from '../../../assets/images/scheduleDoctor/feature/img_image1Mobile@2x.webp';
import OurSolutionsImg2 from '../../../assets/images/scheduleDoctor/feature/img_image2@2x.webp';
import OurSolutionsImgTablet2 from '../../../assets/images/scheduleDoctor/feature/img_image2Tablet@2x.webp';
import OurSolutionsImgMobile2 from '../../../assets/images/scheduleDoctor/feature/img_image2Mobile@2x.webp';
import OurSolutionsImg3 from '../../../assets/images/scheduleDoctor/feature/img_image3@2x.webp';
import OurSolutionsImgTablet3 from '../../../assets/images/scheduleDoctor/feature/img_image3Tablet@2x.webp';
import OurSolutionsImgMobile3 from '../../../assets/images/scheduleDoctor/feature/img_image3Mobile@2x.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';
import ItemList from 'components/ItemList/ItemList';
import ItemText from 'components/ItemText/ItemText';

const ourSolutionsContentData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Admin panel for the clinic staff',
    text: [
      `This web application combines mini-CRM (customer relationship management)
      and\u00A0protected health information (PHI) functions.`,
      `The patient information enters the system in two ways: from EHR, and if a patient
      is not on EHR, administrators add them manually. All patient data is encrypted on the server.`,
      'The administrators manage the patients’ information and create schedules for the doctors.',
    ],
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Progressive web application (PWA) for doctors',
    text: [
      `The doctors use the PWA on mobile devices in lieu of a native mobile application.
      It provides info about scheduled house calls and allows doctors to retrieve each
      patient’s history and past house calls data.`,
      'A Scheduler integrated with Google Maps facilitates the doctor’s travel to each patient’s location.',
    ],
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Killer feature: Scheduler',
    text: (
      <>
        <ItemList
          listTitle={`Administrators plan the doctors’ house calls, and a scheduling algorithm
            builds the doctors’ daily routes based on multiple factors:`}
          list={[
            'The frequency of prescribed house calls, e.g., biweekly or every Tuesday',
            'The doctor’s working time (limited to 12 patients per day)',
            'The location of each patient',
            'The patients’ information',
            'Distances between patients',
          ]}
          withAnimate
        />
        <ItemText
          content={`The algorithm is integrated with Google Maps to determine the optimal route to each
            patient’s facility. The PWA also can cache information and ensure uninterrupted
            work even when the network signal is poor.`}
          withAnimate
          marginBottomAbsent
        />
      </>
    ),
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
];

export default ourSolutionsContentData;
