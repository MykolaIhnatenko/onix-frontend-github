import MainTitle from '../../../components/MainTitle/MainTitle';
import ISoftwareProductBlock from '../../../components/SoftwareProductBlock/interfaces/ISoftwareProductBlock';
import devopsSolutionsSoftwareProductContentData from './devopsSolutionsSoftwareProductContentData';

const devopsSolutionsSoftwareProductData: ISoftwareProductBlock = {
  mainText: (
    <MainTitle className={`
      !max-w-full screen-xxl:!max-w-[1070px] screen-md:!w-full screen-md:!max-w-[610px] pb-[40px] screen-lg:pb-0
      `}
    >
      What we offer
    </MainTitle>
  ),
  data: devopsSolutionsSoftwareProductContentData,
};

export default devopsSolutionsSoftwareProductData;
