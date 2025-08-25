import Image1 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolution1@2x.webp';
import Image2 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolution2@2x.webp';
import Image3 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolution3@2x.webp';
import Image4 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolution4@2x.webp';
import ImageTablet1 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolutionTablet1@2x.webp';
import ImageTablet2 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolutionTablet2@2x.webp';
import ImageTablet3 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolutionTablet3@2x.webp';
import ImageTablet4 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolutionTablet4@2x.webp';
import ImageMobile1 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolutionMobile1@2x.webp';
import ImageMobile2 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolutionMobile2@2x.webp';
import ImageMobile3 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolutionMobile3@2x.webp';
import ImageMobile4 from '@/images/hydraCase/ourSolutionVirtualBlock/img_ourSolutionMobile4@2x.webp';

const styles = 'font-ibmPlexMono font-normal text-[18px]/[26px] screen-md:text-[16px]/[24px]';

const ourSolutionVirtualData = [
  {
    id: 1,
    img: Image1,
    imgTablet: ImageTablet1,
    imgMobile: ImageMobile1,
    title: 'Passport',
    text: (
      <p className={styles}>
        <span className="block mb-[30px] screen-md:mb-[20px]">
          Passport is the first step in establishing a company&apos;s SSO (Single Sign-On)
          system. It serves as a centralized platform for collecting and managing employees&apos; data.
        </span>
        <span className="block mb-[30px] screen-md:mb-[20px]">
          Access to other company resources is granted through this system, ensuring seamless and secure authentication.
        </span>
        <span className="block">
          One of its key advantages is that disabling a user in Passport automatically revokes access
          to all company resources, enhancing security and simplifying access management.
        </span>
      </p>
    ),
  },
  {
    id: 2,
    img: Image2,
    imgTablet: ImageTablet2,
    imgMobile: ImageMobile2,
    title: 'Projects',
    text: (
      <p className={styles}>
        <span className="block mb-[30px] screen-md:mb-[20px]">
          The Projects system is a comprehensive tool for managing projects and tracking work hours within a company.
        </span>
        <span className="block mb-[30px] screen-md:mb-[20px]">
          It centralizes key processes such as vacation management, reporting, employee
          records, timesheets, and salary calculations.
        </span>
        <span className="block">
          This system ensures accurate time tracking, simplifies payroll processing, and
          provides clear insights into project progress.
        </span>
      </p>
    ),
  },
  {
    id: 3,
    img: Image3,
    imgTablet: ImageTablet3,
    imgMobile: ImageMobile3,
    title: 'Help',
    text: (
      <p className={styles}>
        <span className="block mb-[30px] screen-md:mb-[20px]">
          The Help system serves as the internal Hydra Wikipedia, providing a structured repository of
          articles, information, and instructions on how to use Hydra effectively.
        </span>
        <span className="block mb-[30px] screen-md:mb-[20px]">
          It acts as a go-to resource for employees, offering guidance on system functionalities,
          best practices, and troubleshooting tips.
        </span>
        <span className="block">
          Whether new users need onboarding support or experienced team members seek specific details,
          the Help system ensures easy access to essential knowledge.
        </span>
      </p>
    ),
  },
  {
    id: 4,
    img: Image4,
    imgTablet: ImageTablet4,
    imgMobile: ImageMobile4,
    title: 'BI Platform',
    text: (
      <p className={styles}>
        <span className="block mb-[30px] screen-md:mb-[20px]">
          The BI Platform enables real-time analytics by integrating data from Hydra (HR & projects),
          Pipedrive (sales), and Xero (finance).
        </span>
        <span className="block mb-[30px] screen-md:mb-[20px]">
          It automates reporting, eliminating manual effort and providing instant KPIs
          like revenue, expenses, and work hours.
        </span>
        <span className="block">
          Management gains accurate insights to monitor operations, track finances, and optimize strategies.
        </span>
      </p>
    ),
  },
];

export default ourSolutionVirtualData;
