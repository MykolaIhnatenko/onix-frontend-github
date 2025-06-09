import OurSolutionsImg1 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutions1@2x.webp';
import OurSolutionsImg2 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutions2@2x.webp';
import OurSolutionsImg3 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutions3@2x.webp';
import OurSolutionsImg4 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutions4@2x.webp';
import OurSolutionsImg5 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutions5@2x.webp';
import OurSolutionsImg6 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutions6@2x.webp';
import OurSolutionsImgTablet1 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsTablet1@2x.webp';
import OurSolutionsImgTablet2 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsTablet2@2x.webp';
import OurSolutionsImgTablet3 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsTablet3@2x.webp';
import OurSolutionsImgTablet4 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsTablet4@2x.webp';
import OurSolutionsImgTablet5 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsTablet5@2x.webp';
import OurSolutionsImgTablet6 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsTablet6@2x.webp';
import OurSolutionsImgMobile1 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsMobile1@2x.webp';
import OurSolutionsImgMobile2 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsMobile2@2x.webp';
import OurSolutionsImgMobile3 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsMobile3@2x.webp';
import OurSolutionsImgMobile4 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsMobile4@2x.webp';
import OurSolutionsImgMobile5 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsMobile5@2x.webp';
import OurSolutionsImgMobile6 from '@/images/healthcareProviderPortalCaseStudy/ourSolutions/img_ourSolutionsMobile6@2x.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Provider Onboarding Online Form',
    text: `Now, healthcare providers who want to join the client’s network can be quickly
      onboarded online without back-and-forth emails and phone calls.`,
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Provider Self-Service Features',
    text: `The system enables healthcare providers to easily submit, track, and manage
      case referrals, claims, and payments.`,
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Provider Look-Up for Referrals',
    text: `A user-friendly physician look-up module enables providers to find specialists
      that are geographically close or within the client’s state-wide network easily and quickly.`,
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Integrated Chat with History',
    text: [
      `A chat feature was integrated into the\u00A0web app's key areas so that healthcare providers
      could ask questions and make requests, and the support could resolve queries faster.`,
      `The chat is contextual: depending on where the provider is in the app, the\u00A0chat summons the correct
      department. Furthermore, chats are saved, allowing users to continue conversations where they left off.`,
    ],
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    id: 5,
    title: 'Claims and Referrals Automation',
    text: `The system automatically checks claims and referrals against strictly defined parameters and enters them
      into the\u00A0client’s EHR, saving the support team’s time and speeding up submissions.`,
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
  {
    id: 6,
    title: 'Claims and Referrals Dashboard',
    text: `This user-friendly dashboard enables the\u00A0client’s claims team to review
      questionable claims and referrals.`,
    img: OurSolutionsImg6,
    imgTablet: OurSolutionsImgTablet6,
    imgMobile: OurSolutionsImgMobile6,
  },
];

export default ourSolutionsData;
