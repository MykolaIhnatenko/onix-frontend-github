import HealthcareExpertise1 from '@/images/healthcare/expertise/img_expertise_1@2x.webp';
import HealthcareExpertise2 from '@/images/healthcare/expertise/img_expertise_2@2x.webp';
import HealthcareExpertise3 from '@/images/healthcare/expertise/img_expertise_3@2x.webp';
import HealthcareExpertise4 from '@/images/healthcare/expertise/img_expertise_4@2x.webp';
import HealthcareExpertise5 from '@/images/healthcare/expertise/img_expertise_5@2x.webp';
import HealthcareExpertise6 from '@/images/healthcare/expertise/img_expertise_6@2x.webp';
import { IStickySliderData } from 'components/StickySlider/interfaces/IStickySliderItem';

const StickySliderData: IStickySliderData[] = [
  {
    id: 1,
    number: '01',
    title: 'Improved Efficiency',
    text: 'Our software streamlines administrative tasks, automates processes, and '
      + 'enhances workflow management, increasing efficiency.',
    image: HealthcareExpertise1,
  },
  {
    id: 2,
    number: '02',
    title: 'Enhanced Patient Care',
    text: 'We develop custom software solutions that enable easy access to patient records, appointment '
      + 'scheduling, and personalized treatment plans, improving patient care and outcomes.',
    image: HealthcareExpertise2,
  },
  {
    id: 3,
    number: '03',
    title: 'Cost Savings',
    text: 'By reducing paperwork, streamlining processes, and optimizing resource allocation, our software '
      + 'solutions help healthcare businesses achieve significant cost savings.',
    image: HealthcareExpertise3,
  },
  {
    id: 4,
    number: '04',
    title: 'Enhanced Data Management',
    text: 'Our software enables secure storage, easy retrieval, and efficient management of patient data, '
      + 'ensuring its accuracy and integrity.',
    image: HealthcareExpertise4,
  },
  {
    id: 5,
    number: '05',
    title: 'Improved Decision-Making',
    text: 'Through data analytics and reporting features, our software facilitates data-driven insights, '
      + 'empowering healthcare businesses to make informed decisions and improve outcomes.',
    image: HealthcareExpertise5,
  },
  {
    id: 6,
    number: '06',
    title: 'Seamless Collaboration',
    text: 'Our software promotes seamless collaboration among healthcare professionals, enabling secure '
      + 'communication, information sharing, and coordinated care, leading to better patient outcomes.',
    image: HealthcareExpertise6,
  },
];

export default StickySliderData;
