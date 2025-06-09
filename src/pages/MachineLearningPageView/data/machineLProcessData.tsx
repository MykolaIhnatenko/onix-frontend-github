import MainTitle from '../../../components/MainTitle/MainTitle';
import { IProcessAccordionItem, IProcessImage } from '../../MainPage/interfaces/IProcess';
import ContentText from '../../../components/ContentText/ContentText';
import ProcessMachineImgMobileWebp1 from '@/images/machineLearning/processBlock/img_mobile_1@2x.webp';
import ProcessMachineImgMobileWebp2 from '@/images/machineLearning/processBlock/img_mobile_2@2x.webp';
import ProcessMachineImgMobileWebp3 from '@/images/machineLearning/processBlock/img_mobile_3@2x.webp';
import ProcessMachineImgMobileWebp4 from '@/images/machineLearning/processBlock/img_mobile_4@2x.webp';
import ProcessMachineImgMobileWebp5 from '@/images/machineLearning/processBlock/img_mobile_5@2x.webp';
import ProcessMachineImgTabletWebp1 from '@/images/machineLearning/processBlock/img_tablet_1@2x.webp';
import ProcessMachineImgTabletWebp2 from '@/images/machineLearning/processBlock/img_tablet_2@2x.webp';
import ProcessMachineImgTabletWebp3 from '@/images/machineLearning/processBlock/img_tablet_3@2x.webp';
import ProcessMachineImgTabletWebp4 from '@/images/machineLearning/processBlock/img_tablet_4@2x.webp';
import ProcessMachineImgTabletWebp5 from '@/images/machineLearning/processBlock/img_tablet_5@2x.webp';
import ProcessMachineImgWebp1 from '@/images/machineLearning/processBlock/img_1@2x.webp';
import ProcessMachineImgWebp2 from '@/images/machineLearning/processBlock/img_2@2x.webp';
import ProcessMachineImgWebp3 from '@/images/machineLearning/processBlock/img_3@2x.webp';
import ProcessMachineImgWebp4 from '@/images/machineLearning/processBlock/img_4@2x.webp';
import ProcessMachineImgWebp5 from '@/images/machineLearning/processBlock/img_5@2x.webp';

export const machineLProcessImages: IProcessImage[] = [
  {
    id: 1,
    src: ProcessMachineImgWebp1,
    srcTablet: ProcessMachineImgTabletWebp1,
    srcBigDesk: ProcessMachineImgWebp1,
  },
  {
    id: 2,
    src: ProcessMachineImgWebp2,
    srcTablet: ProcessMachineImgTabletWebp2,
    srcBigDesk: ProcessMachineImgWebp2,
  },
  {
    id: 3,
    src: ProcessMachineImgWebp3,
    srcTablet: ProcessMachineImgTabletWebp3,
    srcBigDesk: ProcessMachineImgWebp3,
  },
  {
    id: 4,
    src: ProcessMachineImgWebp4,
    srcTablet: ProcessMachineImgTabletWebp4,
    srcBigDesk: ProcessMachineImgWebp4,
  },
  {
    id: 5,
    src: ProcessMachineImgWebp5,
    srcTablet: ProcessMachineImgTabletWebp5,
    srcBigDesk: ProcessMachineImgWebp5,
  },
];

const classNumber = 'min-w-[35px] screen-xl:min-w-[30px] screen-md:min-w-[25px]';
const classTitle = 'flex gap-[16px] min-md:gap-[20px]';
export const machineLProcessAccordionData: IProcessAccordionItem[] = [
  {
    id: 1,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>01</span>
        <h3>Discovery</h3>
      </div>
    ),
    content: ['Analyze your business goals', 'Discuss desired results', 'Plan a strategy',
      'Create a project roadmap', 'Estimate development costs and timeframes'],
    src: ProcessMachineImgMobileWebp1,
  },
  {
    id: 2,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>02</span>
        <h3>Data collection</h3>
      </div>
    ),
    content: ['Collect  and structure input data', 'Identify usable data sources for ML model training'],
    src: ProcessMachineImgMobileWebp2,
  },
  {
    id: 3,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>03</span>
        <h3>Data preparation</h3>
      </div>
    ),
    content: ['Refine and organize data for accurate model development', 'Select model type and toolset'],
    src: ProcessMachineImgMobileWebp3,
  },
  {
    id: 4,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>04</span>
        <h3>Modeling and evaluation</h3>
      </div>
    ),
    content: ['Create the model', 'Evaluate model performance', 'Fine-tune the model to optimize its performance'],
    src: ProcessMachineImgMobileWebp4,
  },
  {
    id: 5,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>05</span>
        <h3>Integration and production</h3>
      </div>
    ),
    content: ['Integrate the model into the existing environment', 'Deploy ML solution to the production environment',
      'Monitor model performance metrics to ensure efficiency'],
    src: ProcessMachineImgMobileWebp5,
  },
];

export const machineLProcessBlockContent = {
  title: '[ Our software development process ]',
  subtitle: (
    <MainTitle
      className="px-[15px] !mb-[30px] normal-case min-md:px-0 min-lg:max-w-[1033px] min-md:!mb-[40px]"
    >
      Our approach to providing custom Machine Learning development services
    </MainTitle>
  ),
  firstText: (
    <ContentText
      marginAbsent
      tag="p"
      className="!pb-[40px] !mb-[30px] max-w-[540px] min-md:!mb-0 min-lg:max-w-[630px] min-xxxl:max-w-[710px]
       screen-lg:!pb-[40px] screen-md:!p-[0_15px]"
    >
      We work closely with you to understand your needs and develop a solution
      tailored to your business goals. Our experts strive to provide the best
      possible outcome while ensuring maximum customer satisfaction.
    </ContentText>
  ),
  secondText: (
    <div className="min-md:ml-auto pb-[60px] max-w-[540px] min-lg:max-w-[630px] min-lg:pb-[40px]
     min-xxxl:max-w-[710px] screen-md:p-[0_15px_40px]"
    >
      <ContentText
        marginAbsent
        tag="p"
        className="max-w-[540px] min-lg:max-w-[630px] min-xxxl:max-w-[710px]"
      >
        Our software development model is fully transparent and&nbsp;efficient
        since we use the agile approach to manage the development process.
      </ContentText>
    </div>
  ),
};
