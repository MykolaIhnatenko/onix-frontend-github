import Icon from '../../../assets/icon';
import { ISecurityStandards, ISecurityStandardsItem } from '../../../components/SecurityStandards/interfaces/ISecurityStandards';

import HealthcareSecurityStandardsImg1 from '@/images/healthcare/securityStandards/img_securityStandardsImg1@2x.webp';
import HealthcareSecurityStandardsImg2 from '@/images/healthcare/securityStandards/img_securityStandardsImg2@2x.webp';
import HealthcareSecurityStandardsImg3 from '@/images/healthcare/securityStandards/img_securityStandardsImg3@2x.webp';
import HealthcareSecurityStandardsBg from '@/images/healthcare/securityStandards/img_securityStandardsBg@2x.webp';

const healthcareSecurityStandardsContent: ISecurityStandardsItem[] = [
  {
    id: 1,
    icon: <Icon.IconSecurityStandards1 />,
    image: HealthcareSecurityStandardsImg1,
    title: 'Health Information Privacy Standards',
    text: 'We thoroughly understand essential privacy standards such as GDPR, HIPAA, and HITECH. '
      + 'Incorporating these standards into our development processes ensures that patient '
      + 'information remains secure and confidential.',
    background: HealthcareSecurityStandardsBg,
  },
  {
    id: 2,
    icon: <Icon.IconSecurityStandards2 />,
    image: HealthcareSecurityStandardsImg2,
    title: 'Experience with Healthcare Standards',
    text: 'Our team is well-versed in healthcare standards, including HL7, FHIR, CDA, DICOM, ICD, '
      + 'and ICPC-2. This knowledge enables seamless interoperability, data exchange, and integration '
      + 'with existing healthcare systems.',
    background: HealthcareSecurityStandardsBg,
  },
  {
    id: 3,
    icon: <Icon.IconSecurityStandards3 />,
    image: HealthcareSecurityStandardsImg3,
    title: 'Compliance with Certifications',
    text: 'We are committed to maintaining the highest quality and security standards. Our compliance '
      + 'with ISO 9001, ISO 27001, and SOC2 certifications further validates our dedication to delivering '
      + 'secure and reliable healthcare software solutions.',
    background: HealthcareSecurityStandardsBg,
  },
];

const healthcareSecurityStandardsData: ISecurityStandards = {
  pageTitle: 'Healthcare Software Security Standards and Certifications We Encompass',
  data: healthcareSecurityStandardsContent,
};

export default healthcareSecurityStandardsData;
