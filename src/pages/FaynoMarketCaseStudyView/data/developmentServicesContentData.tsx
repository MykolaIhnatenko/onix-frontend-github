import IDevServicesThreeCardsData from 'components/DevServicesThreeCardsTemplate/interfaces/IDevServicesThreeCardsData';
import Icon1 from '../../../assets/images/faynoMarket/devServices/img_icon1.webp';
import Icon2 from '../../../assets/images/faynoMarket/devServices/img_icon2.webp';
import Icon3 from '../../../assets/images/faynoMarket/devServices/img_icon3.webp';

const developmentServicesContentData: IDevServicesThreeCardsData[] = [
  {
    id: 1,
    icon: Icon1,
    text: 'Programming a native iOS application',
  },
  {
    id: 2,
    icon: Icon2,
    text: 'Developing a native Android application',
  },
  {
    id: 3,
    icon: Icon3,
    text: 'Building a database for customer activity data',
  },
];

export default developmentServicesContentData;
