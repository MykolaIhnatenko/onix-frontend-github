import img_medicalTablet from '@/images/booking/img_medicalTablet.webp';
import img_medicalMobile from '@/images/booking/img_medicalMobile.webp';
import img_misterBAndBTablet from '@/images/booking/img_misterBAndBTablet.webp';
import img_misterBAndBMobile from '@/images/booking/img_misterBAndBMobile.webp';
import img_travelBidMobile from '@/images/booking/img_travelBidMobile.webp';
import img_travelBidTablet from '@/images/booking/img_travelBidTablet.webp';
import misterBAndB from '@/images/booking/img_misterB&B.webp';
import medical from '@/images/booking/img_medical.webp';
import travelBid from '@/images/booking/img_travelBid.webp';
import { IOurCaseStudiesData } from 'components/OurCaseStudies/interfaces/IOurCaseStudies';
import PageLinks from 'constants/PageLinks';

const cardStudies: IOurCaseStudiesData[] = [
  {
    id: '01',
    title: 'TravelBid',
    descLeft: 'UI/UX Design',
    descRight: 'Web development',
    images: {
      image: travelBid,
      imageTablet: img_travelBidTablet,
      imageMobile: img_travelBidMobile,
    },
    url: PageLinks.TRAVELBID_CASE_STUDY,
  },
  {
    id: '02',
    title: 'Mister B&B',
    descLeft: 'Mobile development',
    descRight: 'Web development',
    images: {
      image: misterBAndB,
      imageTablet: img_misterBAndBTablet,
      imageMobile: img_misterBAndBMobile,
    },
    url: PageLinks.MISTERBNB_CASE_STUDY,
  },
  {
    id: '03',
    title: 'Scheduler for medical doctors & clinic administrators',
    descLeft: 'UI/UX Design',
    descRight: 'Web development',
    images: {
      image: medical,
      imageTablet: img_medicalTablet,
      imageMobile: img_medicalMobile,
    },
    url: PageLinks.SCHEDULER_FOR_MEDICAL_DOCTORS_CASE,
  },
];

export default cardStudies;
