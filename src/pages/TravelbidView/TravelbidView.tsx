import Icon from '../../assets/icon';
import MulishFont from '../../fonts/MulishFont';
import PoppinsFont from '../../fonts/PoppinsFont';
import {
  bookingPlatform1, bookingPlatform2, bookingPlatform3, bookingPlatform4,
} from './data/bookingPlatform';
import VRARContent from 'components/VRARContent/VRARContent';
import ITravelbidView from './interfaces/ITravelbidView';
import ImageComponent from '../../components/Image/Image';
import MainSection from './components/MainSection';
import DesignProcessSection from './components/DesignProcessSection';
import Offer from './components/Offer';
import MobileDesignSection from './components/MobileDesignSection';
import BeginningSlider from './components/BeginningSlider/BeginningSlider';
import ProblemsSection from './components/ProblemsSection';
import { ButtonType } from 'constants/enums';
import { useAppSelector } from 'hook/reduxToolkit';

import ResultsSmallPicture from '@/images/travelbid/img_results-small-picture.webp';
import ResultsBigPicture from '@/images/travelbid/img_results-big-picture.webp';
import styles from './sass/TravelbidView.module.scss';

function TravelbidView({ saleUrl }: ITravelbidView) {
  const { isXSDevice, isSMDevice, isMDDevice } = useAppSelector((state) => state.app.screenSizes);

  const isMobileAndTablet = isXSDevice || isSMDevice || isMDDevice;

  return (
    <div className={`${styles.travelbid} ${PoppinsFont.variable} ${MulishFont.variable}`}>
      <MainSection saleUrl={saleUrl} />
      <ProblemsSection />
      <section className={`${styles.offerSection} offerSection`}>
        {!saleUrl && (
          <Offer
            text="Do you wish to develop a travel booking system for your business or others?
            Reliable software developers are just one click away!"
            idBtn={ButtonType.CASE2}
          />
        )}
      </section>
      <section className={styles.beginning}>
        <VRARContent className={styles.introRow}>
          <h2>
            Beginning of the&nbsp;
            <br />
            travel booking portal development
          </h2>
          <p>
            The client provided Onix with the software requirement specification (SRS) document.
            The creation of the UX/UI design began with carefully studying the client’s requirements
            and references.
            <br />
            <br />
            Immediately after that, the designers analyzed the major players in the market, such as Airbnb,
            Booking.com, trivago, and others. Their task was to make the future app’s user flow as straightforward
            and convenient as possible.
            <span className={styles.blurBg} />
          </p>
        </VRARContent>
        <VRARContent>
          <h3 className={styles.coloredHeader}>
            This information helped the&nbsp;
            <span>
              designer create
              <br />
              the user flow, wireframes, and then a clickable prototype
            </span>
              &nbsp;of the website.
            <br />
            <br />
            The designer came up with&nbsp;
            <span>
              several smart solutions
            </span>
              &nbsp;that make the&nbsp;
            <span>
              interface&nbsp;
              <br />
              user-friendlier:
            </span>
          </h3>
        </VRARContent>
      </section>
      <section
        id="beginningSlider"
        className={`${styles.beginningSlider} beginningSliderSection`}
      >
        <BeginningSlider />
      </section>
      <DesignProcessSection isMobile={isMobileAndTablet} />
      <section className={styles.logoDesign}>
        <VRARContent className={styles.introRow}>
          <h2>
            Logo Design&nbsp;
            <br />
            for the platform
          </h2>
          <p>
            After minor changes, the client finally approved the UI design of the travel booking app and
            requested a logo for the platform. At first, he wanted a generic sign suitable for a travel
            business. However, we convinced the client that the new service deserved a unique logo to
            make it recognizable.
          </p>
        </VRARContent>
        <VRARContent className={styles.designDescription}>
          <h3 className={styles.coloredHeader}>
            <span>
              The designer created many concepts of the logo, playing around with the idea of flights,
              planes, and birds, and presented each on the home page layout and with different backgrounds
            </span>
            &nbsp;before the client accepted the sign that pleased him, suited the business, and fit in with the
            style of the platform.
            <span>
              &nbsp;It’s basically a combination of a stylized plane and the initial “t” from TravelBid.
            </span>
          </h3>
        </VRARContent>
        <div className={styles.logoWrapper}>
          <div className={styles.currentLogo}>
            <span className={styles.blurBgLogo} />
            <Icon.IconTravelBidLogotype className={styles.icon} />
          </div>
          <div className={styles.planeLogo}>
            <Icon.IconTravelBidPlaneLogo className={styles.icon} />
          </div>
          <div className={styles.bLogo}>
            <Icon.IconTravelBidLogo className={styles.icon} />
          </div>
        </div>
      </section>
      <MobileDesignSection isMobile={isMobileAndTablet} />
      <section className={styles.bookingPlatform}>
        <VRARContent className={styles.bookingPlatformFlex}>
          <h2 className={styles.bookingPlatformMainTitle}>The travel booking platform development process</h2>
          <p className={styles.bookingPlatformSubTitle}>
            After the design stage, Onix proceeded to build
            {' '}
            <span>the travel booking system.</span>
          </p>
        </VRARContent>
        <VRARContent className={styles.bookingPlatformItemFlex}>
          <div className={styles.bookingPlatformItem}>
            <h3 className={styles.bookingPlatformItemTitle}>
              The development team included 4 specialists:
            </h3>
            <ul>
              {bookingPlatform1.map(({ icon, text }) => (
                <li key={text} className={styles.bookingPlatformListItem}>
                  {icon}
                  <p className={styles.bookingPlatformListText}>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.bookingPlatformItem}>
            <h3 className={styles.bookingPlatformItemTitle}>
              The development process comprised 3 steps:
            </h3>
            <ul>
              {bookingPlatform2.map(({ icon, text }) => (
                <li key={text} className={styles.bookingPlatformListItem}>
                  {icon}
                  <p className={styles.bookingPlatformListText}>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </VRARContent>
        <VRARContent className={`${styles.bookingPlatformItemFlex} ${styles.withoutPadding}`}>
          <div className={styles.bookingPlatformItem}>
            <h3 className={styles.bookingPlatformItemTitle}>
              The chosen SCRUM project management implied
            </h3>
            <ul>
              {bookingPlatform3.map(({ icon, text }) => (
                <li key={text} className={styles.bookingPlatformListItem}>
                  {icon}
                  <p className={styles.bookingPlatformListText}>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.bookingPlatformItem}>
            <h3 className={styles.bookingPlatformItemTitle}>
              The tools used by the team included
            </h3>
            <ul>
              {bookingPlatform4.map(({ icon, text }) => (
                <li key={text} className={styles.bookingPlatformListItem}>
                  {icon}
                  <p className={styles.bookingPlatformListText}>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </VRARContent>
        <p className={styles.bookingPlatformText}>
          <span>The development was completed in 3.5 months.</span>
          <br />
          Thanks to a
          {' '}
          <span>clear list of product requirements and Agile project management,</span>
          {' '}
          the team delivered the planned features in a
          {' '}
          <span>timely manner</span>
          , with few change requests from the client.
        </p>
      </section>
      <section className={styles.result}>
        <div className={styles.blurBgTop} />
        <VRARContent className={styles.introRow}>
          <h2>
            Travel booking portal development technology stack
          </h2>
          <ul>
            <li>
              <div className={styles.iconWrapper}>
                <Icon.IconTravelBidCheckIcon className={styles.icon} />
              </div>
              <p>
                Onix&apos;s developers programmed the platform&apos;s front-end and back-end
                applications using Vue.js and Node.js, respectively.
              </p>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <Icon.IconTravelBidCheckIcon className={styles.icon} />
              </div>
              <p>
                They had to use some&nbsp;
                <strong>JavaScript libraries</strong>
                &nbsp;and integrate them into Vue.js to build a mobile-friendly front-end.
              </p>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <Icon.IconTravelBidCheckIcon className={styles.icon} />
              </div>
              <p>
                The server infrastructure was set up on the client&apos;s&nbsp;
                <strong>AWS</strong>
                &nbsp;account.
              </p>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <Icon.IconTravelBidCheckIcon className={styles.icon} />
              </div>
              <p>
                <strong>socket.io</strong>
                &nbsp;was used for real-time messaging. In case an extraordinary number of messages are sent
                simultaneously, a queue is formed if the server doesn&apos;t process other requests.
              </p>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <Icon.IconTravelBidCheckIcon className={styles.icon} />
              </div>
              <p>
                <strong>Stripe</strong>
                &nbsp;and&nbsp;
                <strong>PayPal</strong>
                &nbsp;were integrated to support online payments.
              </p>
            </li>
          </ul>
        </VRARContent>
        <div className={styles.imagesWrapper}>
          <div className={styles.smallPhone}>
            <ImageComponent
              src={ResultsSmallPicture}
              alt="Travelbid Results Small Picture"
              width={250}
              height={542}
            />
          </div>
          <div className={styles.bigPhone}>
            <ImageComponent
              sizes="100vw"
              alt="Travelbid Results Big Picture"
              src={ResultsBigPicture}
              width={880}
              height={480}
            />
          </div>
        </div>
        <div className={styles.resultDescriptions}>
          <h2>Result and prospects</h2>
          <p>
            <strong>TravelBid was launched in June 2022. </strong>
            <br />
            <strong>
              Soon, the platform counted 14K+ service&nbsp;providers and was adding up to 5K new users monthly.
            </strong>
          </p>
          <div className={styles.blurBgBottom} />
        </div>
      </section>
      <section className={`${styles.offerSection} ${!saleUrl ? styles.offerSectionSecond : ''}`}>
        {!saleUrl && (
          <Offer
            text="Do you need to develop a custom travel booking platform?
            Reliable software developers are just one click away!"
            idBtn={ButtonType.CASE3}
          />
        )}
      </section>
    </div>
  );
}

export default TravelbidView;
