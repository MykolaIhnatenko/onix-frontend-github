import JakartaTitle from 'components/JakartaTitle/JakartaTitle';
import PageContainer from 'components/PageContainer/PageContainer';
import VRARContent from 'components/VRARContent/VRARContent';
import { useAppSelector } from 'hook/reduxToolkit';
import NumbersBlockRow from 'pages/MainPage/components/NumbersBlock/NumbersBlockRow';
import { numbersBlockRowData, numbersBlockRowDataMobile } from 'pages/MainPage/data/numbersBlockRowData';

function NumbersBlock() {
  const {
    screenSizes: {
      isMDDevice, isSMDevice, isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;
  return (
    <PageContainer className="py-[100px] screen-lg:py-[80px] screen-md:py-[60px] bg-white">
      <VRARContent>
        <JakartaTitle className="pb-[60px] screen-lg:pb-[40px] screen-md:pb-[30px]">
          Trusted by clients worldwide
        </JakartaTitle>
      </VRARContent>
      <NumbersBlockRow data={isMobile ? numbersBlockRowDataMobile : numbersBlockRowData} />
    </PageContainer>
  );
}

export default NumbersBlock;
