import ContentText from '../../../components/ContentText/ContentText';
import { IIndustrySection } from '../../../components/IndustrySection/interfaces/IIndustrySection';
import MainTitle from '../../../components/MainTitle/MainTitle';
import healthcareIndustryData from './healthcareIndustryData.json';

const healthcareIndustrySectionData: IIndustrySection = {
  sectionTitle: (
    <MainTitle tag="h2" className="min-md:!text-[50px] min-md:!leading-[64px]">
      Technologies We Use
    </MainTitle>
  ),
  firstText: (
    <ContentText
      tag="p"
      className="p-[40px_0_0] !text-[18px] !leading-[26px] !m-0 min-md:p-[40px_0_0]"
    >
      As a healthcare software development company Onix assists institutions of all sizes and specialties in
      embracing digital transformations fueled by cutting-edge technologies such as data science, blockchain,
      Cloud, VR/AR/MR, and more. We aim to empower you to implement advanced digital healthcare solutions
      that optimize patient data recording and healthcare data management.
    </ContentText>
  ),
  secondText: (
    <ContentText
      tag="p"
      className="p-[40px_0_60px] !text-[18px] !leading-[26px] !m-0"
    >
      Here is a table listing Onix&apos;s technologies for healthcare software development services:
    </ContentText>
  ),
  data: healthcareIndustryData,
};

export default healthcareIndustrySectionData;
