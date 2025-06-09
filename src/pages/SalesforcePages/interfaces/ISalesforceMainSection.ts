import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface ISalesforceMainSectionProps {
  mainBg: StaticImageData,
  title: ReactNode,
  description: string,
  classes?: string,
}

export default ISalesforceMainSectionProps;
