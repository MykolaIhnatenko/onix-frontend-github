import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';

import Icon1 from '@/images/vyraCasePage/developmentServices/img_icon1.webp';
import Icon2 from '@/images/vyraCasePage/developmentServices/img_icon2.webp';
import Icon3 from '@/images/vyraCasePage/developmentServices/img_icon3.webp';
import styles from '../sass/vyraDevelopmentServices.module.scss';

const developmentCardData = [
  {
    id: 1,
    icon: <ImageComponent className={styles.icon} src={Icon1} alt="icon" />,
    title: <MainTitle tag="h3" className={styles.cardTitle}>Employees</MainTitle>,
    text: (
      <ContentText marginAbsent className={styles.cardText} tag="p">
        the people within an organization who are required to complete sustainability training.
      </ContentText>
    ),

  },
  {
    id: 2,
    icon: <ImageComponent className={styles.icon} src={Icon2} alt="icon" />,
    title: <MainTitle tag="h3" className={styles.cardTitle}>Customers</MainTitle>,
    text: (
      <ContentText marginAbsent className={styles.cardText} tag="p">
        the biggest supporters of an organization that need to see authentic sustainability.
      </ContentText>
    ),

  },
  {
    id: 3,
    icon: <ImageComponent className={styles.icon} src={Icon3} alt="icon" />,
    title: <MainTitle tag="h3" className={styles.cardTitle}>Suppliers</MainTitle>,
    text: (
      <ContentText marginAbsent className={styles.cardText} tag="p">
        the key stakeholders in a supply chain that need to reach the standards for training and engagement.
      </ContentText>
    ),
  },
];

export default developmentCardData;
