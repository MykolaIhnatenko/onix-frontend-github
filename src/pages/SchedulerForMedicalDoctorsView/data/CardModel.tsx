import Icon from '../../../assets/icon';
import { IModelsSectionData } from '../../../components/ModelsSection/interfaces/IModelsSection';
import Consultation from '@/images/scheduleDoctor/img_Consultation.webp';
import ConsultationTablet from '@/images/scheduleDoctor/img_ConsultationTablet.webp';
import ConsultationMobile from '@/images/scheduleDoctor/img_ConsultationMobile.webp';
import Doctor from '@/images/scheduleDoctor/img_Doctor.webp';
import DoctorTablet from '@/images/scheduleDoctor/img_DoctorTablet.webp';
import DoctorMobile from '@/images/scheduleDoctor/img_DoctorMobile.webp';

const cardModel: IModelsSectionData[] = [
  {
    id: 1,
    icon: <Icon.DoctorConsultation />,
    title: ' ',
    text: 'Clinic and other administrators who need to manage doctors, patients, and\u00A0house calls',
    bg: Consultation,
    bgTablet: ConsultationTablet,
    bgMobile: ConsultationMobile,
  },
  {
    id: 2,
    icon: <Icon.Doctor />,
    title: ' ',
    text: `Physicians who need to manage their scheduled house calls, drive to each patient’s
      facility using the optimal route, and access patient information on\u00A0a mobile device`,
    bg: Doctor,
    bgTablet: DoctorTablet,
    bgMobile: DoctorMobile,
  },
];

export default cardModel;
