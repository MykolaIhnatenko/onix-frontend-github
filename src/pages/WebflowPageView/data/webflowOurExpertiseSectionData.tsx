import IOurExpertiseSection from '../../../components/OurExpertiseSection/interfaces/IOurExpertiseSection';
import webflowOurExpertiseSectionContentData from './webflowOurExpertiseSectionContentData';

const webflowOurExpertiseSectionData = (isMobile: boolean): IOurExpertiseSection => ({
  title: 'What our Webflow design process looks like',
  firstText: 'As a website design and development company, we ensure a well-defined and '
    + 'streamlined approach that allows us to bring your website vision to life in a truly custom and extraordinary ',
  data: webflowOurExpertiseSectionContentData(isMobile),
});

export default webflowOurExpertiseSectionData;
