import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import IndustryData from './IndustryData.json';
import { IIndustrySection } from '../../../components/IndustrySection/interfaces/IIndustrySection';

const industrySectionData: IIndustrySection = {
  sectionTitle: (
    <MainTitle tag="h2" className="min-md:!text-[50px] min-md:!leading-[64px]">
      Industry-Specific iOS Development
    </MainTitle>
  ),
  firstText: (
    <ContentText
      marginAbsent
      tag="p"
      className="p-[40px_0_60px] !text-[18px] !leading-[26px] m-0 min-md:p-[40px_0_80px]"
    >
      In today&apos;s fast-paced world, iOS app development is becoming increasingly important across all major
      industries. From the education sector, where mobile applications help to enhance the learning process,
      to healthcare, where apps are used for remote patient monitoring, the power of custom iOS app development
      is undeniable. Let&apos;s look at the top industries we work in.
    </ContentText>
  ),
  data: IndustryData,
};

export default industrySectionData;
