import { IPartnerSliderData } from '../../../components/PartnerSection/interfaces/IPartnerSection';
import Icons from '../../../assets/icon';
import TransparentCard from '../../../components/TransparentCard/TransparentCard';
import { TransparentCardVariant } from 'constants/enums';

import HealthcarePartnerSectionItemBg1 from '@/images/healthcare/partnerSection/img_partnerSectionItemBg1.webp';
import HealthcarePartnerSectionItemBg2 from '@/images/healthcare/partnerSection/img_partnerSectionItemBg2.webp';
import HealthcarePartnerSectionItemBg3 from '@/images/healthcare/partnerSection/img_partnerSectionItemBg3.webp';
import HealthcarePartnerSectionItemBg4 from '@/images/healthcare/partnerSection/img_partnerSectionItemBg4.webp';
import HealthcarePartnerSectionItemBg5 from '@/images/healthcare/partnerSection/img_partnerSectionItemBg5.webp';
import HealthcarePartnerSectionItemBg6 from '@/images/healthcare/partnerSection/img_partnerSectionItemBg6.webp';
import HealthcarePartnerSectionItemBg7 from '@/images/healthcare/partnerSection/img_partnerSectionItemBg7.webp';
import HealthcarePartnerSectionItemMobileBg1 from '@/images/healthcare/partnerSection/img_partnerSectionItemMobileBg1.webp';
import HealthcarePartnerSectionItemMobileBg2 from '@/images/healthcare/partnerSection/img_partnerSectionItemMobileBg2.webp';
import HealthcarePartnerSectionItemMobileBg3 from '@/images/healthcare/partnerSection/img_partnerSectionItemMobileBg3.webp';
import HealthcarePartnerSectionItemMobileBg4 from '@/images/healthcare/partnerSection/img_partnerSectionItemMobileBg4.webp';
import HealthcarePartnerSectionItemMobileBg5 from '@/images/healthcare/partnerSection/img_partnerSectionItemMobileBg5.webp';
import HealthcarePartnerSectionItemMobileBg6 from '@/images/healthcare/partnerSection/img_partnerSectionItemMobileBg6.webp';
import HealthcarePartnerSectionItemMobileBg7 from '@/images/healthcare/partnerSection/img_partnerSectionItemMobileBg7.webp';
import styles from '../../../components/TransparentCard/sass/transparentCard.module.scss';

const healthcarePartnerSliderData: IPartnerSliderData[] = [
  {
    id: 1,
    content: (
      <TransparentCard
        bgMobile={HealthcarePartnerSectionItemMobileBg1}
        bgTablet={HealthcarePartnerSectionItemBg1}
        bg={HealthcarePartnerSectionItemBg1}
        text="We develop secure, user-friendly electronic health record (EHR) systems that
         enable seamless patient information management."
        icon={<Icons.IconPartnerSliderHealthcare1 className={styles.icon} />}
        title="Electronic Health Records"
        variant={TransparentCardVariant.HEALTHCARE}
      />
    ),
  },
  {
    id: 2,
    content: (
      <TransparentCard
        bgMobile={HealthcarePartnerSectionItemMobileBg2}
        bgTablet={HealthcarePartnerSectionItemBg2}
        bg={HealthcarePartnerSectionItemBg2}
        text="Our telemedicine solutions facilitate remote consultations, video conferencing,
         and virtual care, extending access to healthcare services."
        icon={<Icons.IconPartnerSliderHealthcare2 className={styles.icon} />}
        title="Telemedicine Solutions"
        variant={TransparentCardVariant.HEALTHCARE}
      />
    ),
  },
  {
    id: 3,
    content: (
      <TransparentCard
        bgMobile={HealthcarePartnerSectionItemMobileBg3}
        bgTablet={HealthcarePartnerSectionItemBg3}
        bg={HealthcarePartnerSectionItemBg3}
        text="We create intuitive and feature-rich mobile apps that empower patients to manage
         their health, access medical information, and track progress."
        icon={<Icons.IconPartnerSliderHealthcare3 className={styles.icon} />}
        title="Mobile Health Applications"
        variant={TransparentCardVariant.HEALTHCARE}
      />
    ),
  },
  {
    id: 4,
    content: (
      <TransparentCard
        bgMobile={HealthcarePartnerSectionItemMobileBg4}
        bgTablet={HealthcarePartnerSectionItemBg4}
        bg={HealthcarePartnerSectionItemBg4}
        text="Our solutions enable secure and interoperable exchange of patient data among
         healthcare providers, improving care coordination and outcomes."
        icon={<Icons.IconPartnerSliderHealthcare4 className={styles.icon} />}
        title="Health Information Exchange"
        variant={TransparentCardVariant.HEALTHCARE}
      />
    ),
  },
  {
    id: 5,
    content: (
      <TransparentCard
        bgMobile={HealthcarePartnerSectionItemMobileBg5}
        bgTablet={HealthcarePartnerSectionItemBg5}
        bg={HealthcarePartnerSectionItemBg5}
        text="We develop robust practice management systems that streamline administrative
         tasks, appointment scheduling, billing, and revenue management."
        icon={<Icons.IconPartnerSliderHealthcare5 className={styles.icon} />}
        title="Practice Management Systems"
        variant={TransparentCardVariant.HEALTHCARE}
      />
    ),
  },
  {
    id: 6,
    content: (
      <TransparentCard
        bgMobile={HealthcarePartnerSectionItemMobileBg6}
        bgTablet={HealthcarePartnerSectionItemBg6}
        bg={HealthcarePartnerSectionItemBg6}
        text="Our software solutions leverage data analytics and AI algorithms to support clinical
         decisions, aiding healthcare professionals in diagnosis and treatment planning."
        icon={<Icons.IconPartnerSliderHealthcare6 className={styles.icon} />}
        title="Clinical Decision Support"
        variant={TransparentCardVariant.HEALTHCARE}
      />
    ),
  },
  {
    id: 7,
    content: (
      <TransparentCard
        bgMobile={HealthcarePartnerSectionItemMobileBg7}
        bgTablet={HealthcarePartnerSectionItemBg7}
        bg={HealthcarePartnerSectionItemBg7}
        text="We offer advanced analytics solutions that transform raw healthcare data into actionable
         insights, enabling organizations to make data-driven decisions and improve outcomes."
        icon={<Icons.IconPartnerSliderHealthcare7 className={styles.icon} />}
        title="Health Data Analytics"
        variant={TransparentCardVariant.HEALTHCARE}
      />
    ),
  },
];

export default healthcarePartnerSliderData;
