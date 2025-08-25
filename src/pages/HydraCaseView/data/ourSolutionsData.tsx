import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

import OurSolutionsImg1 from '@/images/hydraCase/ourSolutions/img_ourSolutions1.webp';
import OurSolutionsImg2 from '@/images/hydraCase/ourSolutions/img_ourSolutions2.webp';
import OurSolutionsImg3 from '@/images/hydraCase/ourSolutions/img_ourSolutions3.webp';
import OurSolutionsImg4 from '@/images/hydraCase/ourSolutions/img_ourSolutions4.webp';
import OurSolutionsImg5 from '@/images/hydraCase/ourSolutions/img_ourSolutions5.webp';
import OurSolutionsImg6 from '@/images/hydraCase/ourSolutions/img_ourSolutions6.webp';
import OurSolutionsImgTablet1 from '@/images/hydraCase/ourSolutions/img_ourSolutionsTablet1.webp';
import OurSolutionsImgTablet2 from '@/images/hydraCase/ourSolutions/img_ourSolutionsTablet2.webp';
import OurSolutionsImgTablet3 from '@/images/hydraCase/ourSolutions/img_ourSolutionsTablet3.webp';
import OurSolutionsImgTablet4 from '@/images/hydraCase/ourSolutions/img_ourSolutionsTablet4.webp';
import OurSolutionsImgTablet5 from '@/images/hydraCase/ourSolutions/img_ourSolutionsTablet5.webp';
import OurSolutionsImgTablet6 from '@/images/hydraCase/ourSolutions/img_ourSolutionsTablet6.webp';
import OurSolutionsImgMobile1 from '@/images/hydraCase/ourSolutions/img_ourSolutionsMobile1.webp';
import OurSolutionsImgMobile2 from '@/images/hydraCase/ourSolutions/img_ourSolutionsMobile2.webp';
import OurSolutionsImgMobile3 from '@/images/hydraCase/ourSolutions/img_ourSolutionsMobile3.webp';
import OurSolutionsImgMobile4 from '@/images/hydraCase/ourSolutions/img_ourSolutionsMobile4.webp';
import OurSolutionsImgMobile5 from '@/images/hydraCase/ourSolutions/img_ourSolutionsMobile5.webp';
import OurSolutionsImgMobile6 from '@/images/hydraCase/ourSolutions/img_ourSolutionsMobile6.webp';

const styles = 'font-ibmPlexMono font-normal text-[18px]/[26px] screen-md:text-[16px]/[24px]';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    title: 'Automated time tracking and verification',
    id: 1,
    text: (
      <p className={styles}>
        Previously, developers logged hours manually, leading to errors and inefficiencies.
        Hydra ERP introduced a seamless time-tracking system that integrates directly with
        project management tools. This automation significantly reduced verification time and ensured data accuracy.
        <span className="mt-[20px] flex flex-col screen-md:mt-[15px]">
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Employees log working hours directly in Hydra ERP</span>
          </span>
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Automatic synchronization with JIRA for real-time tracking</span>
          </span>
          <span className="flex">
            <span className="mr-[10px]">﹂</span>
            <span>Project managers can verify and approve logged hours effortlessly</span>
          </span>
        </span>
      </p>
    ),
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    title: 'Seamless invoice generation and payroll management',
    id: 2,
    text: (
      <p className={styles}>
        Manual salary calculations and invoicing were time-consuming and prone to errors. With Hydra ERP,
        payroll management and invoice generation became automated, ensuring accuracy and efficiency.
        <span className="mt-[20px] flex flex-col screen-md:mt-[15px]">
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>
              Automated payroll calculations for different salary types, including base salary, bonuses,
              corrections, loan balances, and information about sole trader
            </span>
          </span>
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Error detection system that highlights anomalies in entered data</span>
          </span>
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Seamless integration with Xero for real-time financial tracking</span>
          </span>
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Automated invoice generation based on verified work hours and predefined rules</span>
          </span>
          <span className="flex">
            <span className="mr-[10px]">﹂</span>
            <span>One-click payroll processing with direct email notifications to employees</span>
          </span>
        </span>
      </p>
    ),
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    title: 'CRM and project management integration',
    id: 3,
    text: (
      <p className={styles}>
        Managing client data, contracts, and sales pipelines across separate systems caused delays and
        inconsistencies. Hydra ERP created a centralized and synchronized approach to sales and project management.
        <span className="mt-[20px] flex flex-col screen-md:mt-[15px]">
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Pipedrive CRM integration for seamless client and deal management</span>
          </span>
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Automatic creation of projects, tasks, and agreements from sales deals</span>
          </span>
          <span className="flex">
            <span className="mr-[10px]">﹂</span>
            <span>Real-time synchronization of sales and development workflows</span>
          </span>
        </span>
      </p>
    ),
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    title: 'Real-time business insights and reporting',
    id: 4,
    text: (
      <p className={styles}>
        Without a unified dashboard, tracking project status and financial health was challenging. Hydra ERP
        introduced a comprehensive reporting system that offers real-time insights.
        <span className="mt-[20px] flex flex-col screen-md:mt-[15px]">
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Centralized dashboard displaying workload, project progress, and financial data</span>
          </span>
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Automated financial reporting and revenue tracking</span>
          </span>
          <span className="flex">
            <span className="mr-[10px]">﹂</span>
            <span>Enhanced data transparency across departments</span>
          </span>
        </span>
      </p>
    ),
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    title: 'Vacation tracking system',
    id: 5,
    text: (
      <p className={styles}>
        This feature simplifies time-off management by allowing employees to request vacation, sick leave,
        or day off while viewing their remaining vacation days. Managers approve requests, ensuring smooth
        workflow management, and colleagues can see when others are on leave for better planning.
        <br className="screen-md:hidden" />
        <br className="screen-md:hidden" />
        <span className="hidden screen-md:block screen-md:pt-[20px]" />
        Additionally, vacation tracking integrates with payroll systems, ensuring accurate salary
        calculations by automatically tracking employee absences.
        <span className="mt-[20px] flex flex-col screen-md:mt-[15px]">
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Encourages better time-off planning and transparency</span>
          </span>
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Simplifies the leave request process and enhances clarity</span>
          </span>
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Ensures efficient scheduling and workflow management</span>
          </span>
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Enhances team coordination and planning</span>
          </span>
          <span className="flex">
            <span className="mr-[10px]">﹂</span>
            <span>Ensures accurate wage calculation and reduces payroll errors</span>
          </span>
        </span>
      </p>
    ),
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
  {
    title: 'Scalable and future-ready architecture',
    id: 6,
    text: (
      <p className={styles}>
        As Onix continued to grow, it needed a system capable of handling multiple projects and teams without
        added administrative overhead. Hydra ERP was designed for long-term scalability.
        <span className="mt-[20px] flex flex-col screen-md:mt-[15px]">
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Handles increasing workloads with minimal manual effort</span>
          </span>
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Reduces human errors by automating repetitive tasks</span>
          </span>
          <span className="flex">
            <span className="mr-[10px]">﹂</span>
            <span>Seamless integration with third-party tools (JIRA, Xero, Pipedrive)</span>
          </span>
        </span>
      </p>
    ),
    img: OurSolutionsImg6,
    imgTablet: OurSolutionsImgTablet6,
    imgMobile: OurSolutionsImgMobile6,
  },
];

export default ourSolutionsData;
