import OpacityAnimation from '../../caseStudies/ProjectXCasePageView/components/OpacityAnimation';
import ContactUs from './ContactUs';
import Logo from './Logo';
import IMainSection from '../interfaces/IMainSection';
import VRARContent from 'components/VRARContent/VRARContent';
import Icon from '../../../assets/icon';
import { ButtonType } from 'constants/enums';

import styles from '../sass/TravelbidView.module.scss';

const iconsBlockContent = [
  {
    id: 1,
    icon: <Icon.IconTravelBidWorld />,
    header: 'Industry',
    description: 'Travel and Booking',
  },
  {
    id: 2,
    icon: <Icon.IconTravelBidPeople />,
    header: 'Team size',
    description: '8 Specialists',
  },
  {
    id: 3,
    icon: <Icon.IconTravelBidLocation />,
    header: 'Location',
    description: 'Cyprus',
  },
];

function MainSection({ saleUrl }: IMainSection) {
  return (
    <section className={`${styles.mainSection} mainSection`}>
      <div className={styles.description}>
        <Logo />
        <VRARContent>
          <h1>
            {'Travel booking platform'.split('').map((letter, index) => (
              <span key={[letter, index].join('_')}>{letter}</span>
            ))}
            <br />
            <span className={styles.titleInnerBlock}>
              {'development case study'.split('').map((letter, index) => (
                <span key={[letter, index].join('_')}>{letter}</span>
              ))}
            </span>
          </h1>
          <p>
            Sharing Onix’s experience in building a travel booking system
          </p>
          <br />
          <p>
            TravelBid is a platform where travelers can book a hotel room or holiday home, order an airport
            transfer, or rent a car in Cyprus. Instead of using traditional booking engines like
            Booking.com or Expedia, they can enter their trip details on TravelBid and within minutes get direct
            offers from over 14K local businesses.
          </p>
        </VRARContent>
        <div className={styles.contactUsWrapper}>
          {!saleUrl ? <ContactUs idBtn={ButtonType.CASE} /> : (<div className={styles.contactUsStub} />)}
        </div>
      </div>
      <div className={styles.iconBlock}>
        {iconsBlockContent.map((item) => (
          <OpacityAnimation key={item.id} classes={styles.tile}>
            <div className={styles.pinkCircle}>
              {item.icon}
            </div>
            <div className={styles.tileHeader}>{item.header}</div>
            <div className={styles.tileDescription}>{item.description}</div>
          </OpacityAnimation>
        ))}
      </div>
      <div className={styles.bgWrapper}>
        <Icon.IconTravelBidBackground />
      </div>
    </section>
  );
}

export default MainSection;
