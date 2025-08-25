import ContentText from '../../../components/ContentText/ContentText';
import { ITrustUsDataBlock } from '../../MachineLearningPageView/interfaces/ITrustUsBlock';

const devopsSolutionsTrustUsBlockDataFirst: ITrustUsDataBlock = {
  title: 'DevOps services we provide',
  subtitle: (
    <ContentText
      tag="p"
      className={`px-[15px] pb-[40px] pr-0 z-[2] relative !m-0 max-w-[720px] 
      min-md:pl-[30px] min-md:mb-[60px] 
      min-lg:mb-[80px] min-lg:pl-[70px] 
      min-xxxl:pl-[80px] 
      screen-lg:pb-[30px] screen-lg:max-w-[680px] 
      screen-md:pb-[40px] screen-md:pr-[15px]`}
    >
      We offer a full spectrum of professional DevOps services that allows you easily make a transition
      from traditional infrastructure to automated and optimized in-house workflows.
    </ContentText>
  ),
  lastCardTitle: 'Let\'s bring your development and operations together to ensure fast IT deployment!',
  btnTitle: 'Talk to our experts',
  dropBlockTitleVariant: 'mashineLearning',
};

export default devopsSolutionsTrustUsBlockDataFirst;
