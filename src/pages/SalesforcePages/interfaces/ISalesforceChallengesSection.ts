import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

interface ISalesforceChallengesSectionProps {
  content: ReactNode,
  picture: StaticImageData,
  shadowColor: string,
  classes?: string,
  boxShadowClass?: string,
}
export default ISalesforceChallengesSectionProps;
