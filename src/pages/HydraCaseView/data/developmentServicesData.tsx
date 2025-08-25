import { IDevelopmentServicesItemData } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

const styles = 'font-ibmPlexMono font-normal text-[18px]/[26px] screen-md:text-[16px]/[24px] screen-md:flex';
const contentData: IDevelopmentServicesItemData[] = [
  {
    id: 1,
    number: '01',
    title: 'Employees',
    content: (
      <>
        <p className={`${styles} mb-[5px]`}>
          <span className="mr-[10px]">﹂</span>
          <span>Enhanced time tracking</span>
        </p>
        <p className={`${styles} mb-[5px]`}>
          <span className="mr-[10px]">﹂</span>
          <span>Reduced admin work</span>
        </p>
        <p className={`${styles}`}>
          <span className="mr-[10px]">﹂</span>
          <span>Accurate billable hours</span>
        </p>
      </>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Project Managers',
    content: (
      <>
        <p className={`${styles} mb-[5px]`}>
          <span className="mr-[10px]">﹂</span>
          <span>Simplified work-hour verification</span>
        </p>
        <p className={`${styles} mb-[5px]`}>
          <span className="mr-[10px]">﹂</span>
          <span>Seamless project tracking</span>
        </p>
        <p className={`${styles} mb-[5px]`}>
          <span className="mr-[10px]">﹂</span>
          <span>Faster invoicing</span>
        </p>
        <p className={`${styles} flex`}>
          <span className="mr-[10px]">﹂</span>
          <span>Fewer invoicing errors and faster payments</span>
        </p>
      </>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Finance & Accounting',
    content: (
      <>
        <p className={`${styles} mb-[5px]`}>
          <span className="mr-[10px]">﹂</span>
          <span>Automated payroll and billing</span>
        </p>
        <p className={`${styles} mb-[5px]`}>
          <span className="mr-[10px]">﹂</span>
          <span>Error-free invoicing</span>
        </p>
        <p className={`${styles}`}>
          <span className="mr-[10px]">﹂</span>
          <span>Real-time financial insights</span>
        </p>
      </>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Sales & Marketing Teams',
    content: (
      <>
        <p className={`${styles} mb-[5px]`}>
          <span className="mr-[10px]">﹂</span>
          <span>CRM integration</span>
        </p>
        <p className={`${styles} mb-[5px]`}>
          <span className="mr-[10px]">﹂</span>
          <span>Efficient deal management</span>
        </p>
        <p className={`${styles}`}>
          <span className="mr-[10px]">﹂</span>
          <span>Improved customer experience</span>
        </p>
      </>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Executives',
    content: (
      <>
        <p className={`${styles} mb-[5px]`}>
          <span className="mr-[10px]">﹂</span>
          <span>Data-driven insights</span>
        </p>
        <p className={`${styles} mb-[5px]`}>
          <span className="mr-[10px]">﹂</span>
          <span>Scalable operations</span>
        </p>
        <p className={`${styles}`}>
          <span className="mr-[10px]">﹂</span>
          <span>Cost efficiency</span>
        </p>
      </>
    ),
  },
];

export default contentData;
