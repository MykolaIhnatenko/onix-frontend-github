import { IApp } from '../app/interfaces/IApp';
import { IHome } from '../home/interfaces/IHome';
import { IContactForm } from '../app/contactForm/interfaces/IContactForm';
import { IBlogs } from '../blogs/interfaces/IBlogs';
import { ILeavingForm } from '../app/leavingForm/interfaces/ILeavingForm';
import { ISubscribeForm } from '../app/subscribeForm/interfaces/ISubscribeForm';
import { ISubscribeMainForm } from '../app/subscribeMainForm/interfaces/ISubscribeForm';
import { IDownloadForm } from '../app/downloadForm/interfaces/IDownloadForm';
import { ITrainingSimulatorSlice } from '../interactiveTrainingSimulator/reducer';
import { ICareers } from '../careers/interfaces/ICareers';
import ICursorFollower from '../cursorFollower/interfaces/ICursorFollower';
import ICaseStudySelector from '../caseStudySelector/interfaces/ICaseStudySelector';
import IDesignPortfolio from 'store/designPortfolio/interfaces/IDesignPortfolio';
import { IBracketology } from '../app/bracketology/interfaces/IBracketology';
import IVideoFullScreenSlice from 'store/app/videoFullScreenSlice/interfaces/IVideoFullScreenSlice';
import IActiveVideoSlice from '../app/activeVideoSlice/interfaces/IActiveVideoSlice';

interface IStore {
  app: IApp,
  home: IHome,
  contactForm: IContactForm,
  blogs: IBlogs,
  videoFullScreen: IVideoFullScreenSlice,
  activeVideo: IActiveVideoSlice,
  leavingForm: ILeavingForm,
  subscribeForm: ISubscribeForm,
  subscribeFormMain: ISubscribeMainForm,
  downloadForm: IDownloadForm,
  trainingSimulatorSlice: ITrainingSimulatorSlice,
  careers: ICareers,
  cursorFollower: ICursorFollower,
  caseStudySelector: ICaseStudySelector,
  designPortfolio: IDesignPortfolio
  bracketology: IBracketology,
}

export default IStore;
