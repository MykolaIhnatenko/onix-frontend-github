import MetroCaseAppDesign from './components/MetroCaseAppDesign';
import MetroCaseBusinessNeeds from './components/MetroCaseBusinessNeeds';
import MetroCaseDevelopmentProcess from './components/MetroCaseDevelopmentProcess';
import MetroCaseFeatures from './components/MetroCaseFeatures';
import MetroCaseFunctionalities from './components/MetroCaseFunctionalities';
import MetroCaseIntro from './components/MetroCaseIntro';
import MetroCaseProjectBeginning from './components/MetroCaseProjectBeginning';
import MetroCaseResult from './components/MetroCaseResult';
import IPageStatus from '../../../interfaces/IPageStatus';

function MetroCaseStudyPageView({ saleUrl }: IPageStatus) {
  return (
    <>
      <MetroCaseIntro saleUrl={saleUrl} />
      <MetroCaseBusinessNeeds saleUrl={saleUrl} />
      <MetroCaseProjectBeginning />
      <MetroCaseFunctionalities saleUrl={saleUrl} />
      <MetroCaseFeatures />
      <MetroCaseDevelopmentProcess />
      <MetroCaseAppDesign />
      <MetroCaseResult saleUrl={saleUrl} />
    </>
  );
}

export default MetroCaseStudyPageView;
