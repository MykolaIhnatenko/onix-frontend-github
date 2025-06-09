import PropTypes from 'prop-types';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Head from 'next/head';

import ImageComponent from '../../../components/Image/Image';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import JumpingMen from '../components/JumpingMen/JumpingMen';

import styles from './sass/FitnessAppView.module.scss';

const basePath = '/static/images/Pages/FitnessApp';
const fitnessMaxK = `${basePath}/img_fitness_Max_K.webp`;
const fitnessMaxK2x = `${basePath}/img_fitness_Max_K@2x.webp`;
const fitnessAndrew = `${basePath}/img_fitness_Andrew_K.webp`;
const fitnessAndrew2x = `${basePath}/img_fitness_Andrew_K@2x.webp`;
const fitnessMaxH = `${basePath}/img_fitness_Max_H.webp`;
const fitnessMaxH2x = `${basePath}/img_fitness_Max_H@2x.webp`;
const fitnessMaxB = `${basePath}/img_fitness_Max_B.webp`;
const fitnessMaxB2x = `${basePath}/img_fitness_Max_B@2x.webp`;
const planning = `${basePath}/ic_planning.svg`;
const developmentAndTesting = `${basePath}/ic_development_and_testing.svg`;
const releaseAndMaintenance = `${basePath}/ic_release_and_maintenance.svg`;
const runningWoman = `${basePath}/running_woman.gif`;
const manCup = `${basePath}/man_cup.gif`;
const manTablet = `${basePath}/man_tablet.gif`;

function FitnessAppView({
  blockInView,
  scrollToView,
  cardHoverEffect,
  cardMouseLeave,
}) {
  const designersCardShowClassName = (blockInView === 'designersTeam');
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <meta name="robots" content="nofollow" />
      </Head>
      <div className={styles.articleContainer}>
        <article className={styles.fitnessApp}>
          <div className={styles.articleContent}>
            <div className={styles.workInsideBanner}>
              <div className={styles.workInsideBannerBg}>
                <div className={styles.workInsideBannerContent}>
                  <h1>
                    <span className={styles.animationTextHeader}>
                      We know how great UI/UX fitness app design looks
                    </span>
                  </h1>
                  <div className={styles.animationFadeInBlock}>
                    <p className={styles.mainScreenParagraph}>
                      The niche of fitness apps is highly profitable due to high user retention and
                      app engagement
                      rates. However, it’s also super-competitive because fitness apps have become one
                      of the most
                      popular app categories over the past few years, and users tend to stick
                      to one fitness app they like.
                    </p>
                    <div className={styles.boldText}>
                      Do you want to implement your fitness app idea with no pain and risk?
                      <br />
                      Ask for a free consultation from our team of design experts.
                    </div>
                  </div>
                  <button
                    className={`${styles.redButton} btnContactModal
                                ${styles.animationFadeInBlock} ${styles.scrollToContactForm}`}
                    type="button"
                    name="Button 1"
                    onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                  >
                    GET A FREE PROTOTYPE
                  </button>
                </div>
              </div>
              <JumpingMen />
              <button
                type="button"
                onClick={scrollToView}
                className={styles.scrollButton}
              >
                scroll
              </button>
            </div>
            <div className={`${styles.bannersInner} col big l12`}>
              <h2 className={`${styles.contentHeaderPrimary} ${styles.center} js-entryBlock`}>
                What you need to know about fitness apps
              </h2>
              <div className={styles.stats}>
                <div className={styles.statsCalendar}>
                  <div className={styles.statsGraph}>
                    <div className={styles.statsGraphAnimate}>
                      <svg width="397" height="93" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            x1="11%"
                            y1="28.708%"
                            x2="83.608%"
                            y2="36.648%"
                            id="a"
                          >
                            <stop stopColor="#3023AE" offset="0%" />
                            <stop stopColor="#c86dd700" stopOpacity="0" offset="100%" />
                          </linearGradient>
                        </defs>
                        <path
                          className={styles.path}
                          d="M239 1507.187l10.457 9.573 8.447-4.572 6.336 11.278v-6.706l10.56 6.706
                              6.863-6.706 8.448 15.24 10.559-19.812 5.28 4.572 5.807-4.572 10.56 4.572
                              10.031-12.801H357.163l11.087-6.096h23.759l9.503 6.096 9.504-6.096h26.398l10.56
                              6.096 6.863-9.754 8.447 3.658 11.088-8.534h6.335l6.336-4.267 7.92 4.267
                              7.391-4.267 7.92-9.144 9.503-14.02 13.2-6.706 6.335-6.096 5.808
                              23.164h6.863l4.752-6.705 15.311 10.363 5.28-10.363 8.447 6.705 6.864-23.164
                              4.752 12.801 6.335-12.801 7.92 6.096 5.28-6.096h6.335l3.696-6.096 7.92
                              6.096h9.503l7.391-6.096 3.168 6.096h10.56L675 1443"
                          transform="translate(-237 -1441)"
                          stroke="url(#a)"
                          strokeWidth="3.5"
                          fill="none"
                          fillRule="evenodd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.statsSummary}>
                  <h4>
                    According to statistical studies about fitness and health apps
                    held by Statista and Flurry, in&nbsp;
                    {(new Date()).getFullYear()}
                    -
                    {(new Date()).getFullYear() + 1}
                    :
                  </h4>
                  <ul>
                    <li>More than 250,000 apps are available for download</li>
                    <li>
                      75% of fitness app users open their apps twice a week and 25% of users
                      access fitness apps 10 times a week
                    </li>
                    <li>
                      More than 75 million unique fitness app users were reported in the U.S. in
                      May 2018
                    </li>
                    <li>The total number of fitness app users will reach 350 million by 2022</li>
                    <li>Wearables lead the fitness app market with 13% taken by Fitbit</li>
                    <li>Currently, the average revenue per fitness app user is US $10.97</li>
                    <li>96% of app users stick to using only one app</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${styles.bannersInner} col big l12`}>
              <h2 className={`${styles.contentHeaderPrimary} ${styles.center} js-entryBlock`}>
                What are some types of fitness apps?
              </h2>
              <p className={styles.center}>
                With its almost $4 trillion worth, the fitness app industry offers a wide choice of
                mobile apps for
                the gym, running training, yoga, home workouts, and healthy eating.
              </p>
              <div className={styles.appTypes}>
                <div className={styles.appTypesBlock}>
                  <div className={styles.appTypesText}>
                    <h3>01</h3>
                    <h4>Amateur apps</h4>
                    <p>
                      Such apps often focus on a specific type of fitness activity that would be
                      easy for a
                      beginner to do on a daily basis to stay healthy.
                    </p>
                  </div>
                  <div className={styles.runningWoman}>
                    <ImageComponent
                      src={runningWoman}
                      alt="running"
                      width={496}
                      height={496}
                    />
                  </div>
                </div>
                <div className={styles.appTypesBlock}>
                  <div className={styles.appTypesText}>
                    <h3>02</h3>
                    <h4>Professional apps</h4>
                    <p>
                      These apps present complex workout routines with detailed tracking.
                      Their design requires a deep understanding of fitness and needs of athletes.
                    </p>
                  </div>
                  <div className={styles.manCup}>
                    <ImageComponent
                      src={manCup}
                      alt="man_cup"
                      width={483}
                      height={483}
                    />
                  </div>
                </div>
                <div className={styles.appTypesBlock}>
                  <div className={styles.appTypesText}>
                    <h3>03</h3>
                    <h4>Wellbeing apps</h4>
                    <p>
                      They help monitor daily activities and suggest ways to improve a user’s
                      diet to become stronger and healthier.
                    </p>
                  </div>
                  <div className={styles.manTablet}>
                    <ImageComponent
                      src={manTablet}
                      alt="man_tablet"
                      width={499}
                      height={499}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.bannersInner} col big l12`}>
              <div className={styles.contactBlock}>
                <h3 className={styles.contentHeaderPrimary}>
                  We can help you plan your
                  app
                  design
                </h3>
                <p>
                  Are you a fitness studio or a nutritionist who has developed a weight loss diet?
                  Maybe you’re a
                  fitness startup that needs an app’s design prior to starting your search to find an
                  investor?
                  <span className={styles.dBlock} />
                  You’ve come to the right place! Onix’ design team is ready to provide you a free
                  consultation,
                  create a free low-fidelity prototype and get your design done in just a few weeks.
                </p>
                <button
                  className={`${styles.redButton} btnContactModal ${styles.redButtonContact} 
                  ${styles.redButtonBig} ${styles.scrollToContactForm}`}
                  type="button"
                  name="Button 2"
                  onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                >
                  LET’S DISCUSS YOUR APP IDEA
                </button>
              </div>
            </div>
            <div className={`${styles.bannersInner} col big l12`}>
              <h2 className={`${styles.contentHeaderPrimary} ${styles.center} js-entryBlock`}>
                How we make an excellent UI/UX
                <br />
                for a fitness app
              </h2>
              <div className={styles.uiUx}>
                <div className={styles.uiUxBlock}>
                  <div className={`${styles.uiUxImage} ${styles.uiUxImageCustom}`} />
                  <h4>Customization</h4>
                  <p>
                    The app’s interface should tailor the content to the needs of different user
                    groups (level of
                    preparedness or possible disabilities) and adjust it to their preferences and
                    specific goals.
                  </p>
                </div>
                <div className={styles.uiUxBlock}>
                  <div className={`${styles.uiUxImage} ${styles.uiUxImageNav}`} />
                  <h4>Clear navigation </h4>
                  <p>
                    A user needs to take action fast, be able to work with the app straightforward.
                    A good design
                    provides workout or menu information in one tap, so a user immediately feels at
                    home.
                  </p>
                </div>
                <div className={styles.uiUxBlock}>
                  <div className={`${styles.uiUxImage} ${styles.uiUxImageTrack}`} />
                  <h4>Convenient tracking</h4>
                  <p>
                    Recent routine stats should be made available in an instant. Data from wearables
                    should be
                    displayed to give an immediate understanding of the progress and new
                    achievements.
                  </p>
                </div>
                <div className={styles.uiUxBlock}>
                  <div className={`${styles.uiUxImage} ${styles.uiUxImageTech}`} />
                  <h4>Hardware integration</h4>
                  <p>
                    The best UX is achieved when the app can be integrated with wearables and
                    fitness bands. Easy
                    data logging and enabled fitness progression add to the app’s key fitness
                    features.
                  </p>
                </div>
              </div>
              <div className={styles.uiIxBottom}>
                <div className={styles.whiteBottom}>
                  Test your app idea with the help of our fitness app design experts
                </div>
                <button
                  className={`${styles.redButton} 
                              ${styles.animationFadeInBlock} btnContactModal ${styles.scrollToContactForm}`}
                  type="button"
                  name="Button 3"
                  onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                >
                  GET A FREE PROTOTYPE
                </button>
              </div>
            </div>
            <div className={`${styles.bannersInner} col big l12`}>
              <h2 className={`${styles.contentHeaderPrimary} ${styles.center} js-entryBlock`}>
                Check our fitness apps design
                <br />
                case studies
              </h2>
              <div className={styles.examples}>
                <Link
                  href={{
                    pathname: '/healthy-freelancer-case',
                    query: { salesChannel: 'Fitness app landing' },
                  }}
                  legacyBehavior
                >
                  <div className={styles.examplesFreelancer}>
                    <div className={styles.examplesImage} />
                    <h3>Healthy Freelancer</h3>
                    <h6>Wellbeing</h6>
                    <span>View project</span>
                  </div>
                </Link>
                <Link
                  href={{
                    pathname: '/liftsync-case',
                    query: { salesChannel: 'Fitness app landing' },
                  }}
                  legacyBehavior
                >
                  <div className={styles.examplesLiftsync}>
                    <div className={styles.examplesImage} />
                    <h3>LiftSync</h3>
                    <h6>Professional fitness</h6>
                    <span>View project</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.loFi}>
              <div className={`${styles.bannersInner} col big l12`}>
                <h2 className={`${styles.contentHeaderPrimary} ${styles.center} js-entryBlock`}>
                  Why you need a low-fidelity
                  <br />
                  prototype for your app
                </h2>
                <p className={styles.center}>
                  Once you discuss a fitness app idea with our designers, we’ll prepare a lo-fi
                  prototype,
                  a fast and easy way to check and test the app’s concept. Creating it is free and
                  helps
                  resolving such issues, as determining the app’s audience, key functionality and user
                  flow.
                  Once you’ve got a low-fidelity app, you’ll have clearer expectations about your
                  fitness app.
                </p>
                <div className={styles.loFiWrapper}>
                  <div className={styles.loFiImg} />
                  <div className={styles.loFiInfo}>
                    <div className={styles.loFiInfoBlock}>
                      <h4>How does a lo-fi prototype look like?</h4>
                      <ul>
                        <li>
                          — Basic shapes are used to visualize the app’s design of screens
                        </li>
                        <li>
                          — Content is limited and includes only key ideas that explain the
                          user flow
                        </li>
                        <li>
                          — Basic explanations accompany the flow to provide extra detail as
                          to what a user
                          will be able to do with the app
                        </li>
                      </ul>
                    </div>
                    <div className={styles.loFiInfoBlock}>
                      <h4>Why preparing a lo-fi prototype will help you test your app’s idea?</h4>
                      <ul>
                        <li>
                          — It’s a fast way of experimenting with several ideas without having
                          to design and
                          develop the app
                        </li>
                        <li>
                          — You receive assistance from experts that will suggest the best way
                          to
                          implement your fitness app concept
                        </li>
                        <li>
                          — Lo-fi prototypes can be used as a project documentation and
                          reference for
                          future iterations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.whiteBottom}>
                  If you’re looking to deliver an outstanding user experience with your fitness app
                  design,
                  our team will readily help you with consulting assistance and prepare a free lo-fi
                  prototype.
                </div>
                <button
                  className={`${styles.redButton} ${styles.animationFadeInBlock}
                              ${styles.redButtonBig} btnContactModal ${styles.scrollToContactForm}`}
                  type="button"
                  name="Button 4"
                  onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                >
                  LET’S DISCUSS YOUR APP IDEA
                </button>
              </div>
            </div>
            <div className={styles.helpBlock}>
              <div className={`${styles.bannersInner} col big l12`}>
                <h2 className={`${styles.contentHeaderPrimary} ${styles.center} js-entryBlock`}>
                  How our team can help you
                  <br />
                  create a fitness app
                </h2>
                <div className={styles.appTypes}>
                  <div className={styles.appTypesBlock}>
                    <div className={`${styles.appTypesImage} ${styles.appTypesImageFitnessAppDesign}`} />
                    <div className={styles.appTypesText}>
                      <h4>Fitness app design</h4>
                      <p>
                        You’ve got an idea for an app? We can help you with its implementation
                        by creating wireframes, interactive prototypes and delivering an
                        outstanding
                        UI/UX design for a fitness app that would be fun to use.
                      </p>
                    </div>
                  </div>
                  <div className={styles.appTypesBlock}>
                    <div className={`${styles.appTypesImage} ${styles.appTypesImageFitnessAppRedesign}`} />
                    <div className={styles.appTypesText}>
                      <h4>Fitness app redesign</h4>
                      <p>
                        You’ve already got an existing fitness application, but you feel it
                        needs to be refreshed
                        and polished? Our designers’ team will conduct an audit to provide you
                        with new ideas of how
                        your app can be improved and what features or interface changes can make
                        it user-friendly
                        and easier to use.
                      </p>
                    </div>
                  </div>
                  <div className={styles.appTypesBlock}>
                    <div className={`${styles.appTypesImage} ${styles.appTypesImageFitnessAppDevelopment}`} />
                    <div className={styles.appTypesText}>
                      <h4>Fitness app development</h4>
                      <p>
                        You’ve got a fresh design for your app and need a team to code it and
                        bring to life?
                        Onix has a team of iOS and Android developers and QAs that will
                        take care of the design and will help you launch it.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.whiteBottom}>
                  Our team offers a full cycle fitness app development, from a prototype to app launch
                </div>
                <button
                  className={`${styles.redButton} ${styles.redButtonBook}
                              ${styles.redButtonBig} btnContactModal ${styles.scrollToContactForm}`}
                  type="button"
                  name="Button 5"
                  onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                >
                  LET’S DISCUSS YOUR APP IDEA
                </button>
              </div>
            </div>
            <div className={styles.designProcess}>
              <div className={`${styles.bannersInner} col big l12`}>
                <h2 className={`${styles.contentHeaderPrimary} ${styles.center} js-entryBlock`}>
                  See how our design process looks like
                </h2>
                <div className={styles.designProcessNav}>
                  <input
                    type="radio"
                    name="designProcess"
                    id="designProcess--1"
                    defaultChecked="checked"
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="designProcess--1">
                    <h5>Strategy</h5>
                    <p>Сonsultation and learning</p>
                  </label>
                  <div className={styles.designProcessNavContent} data-target="designProcess--1">
                    <h5>Сonsultation and learning about your objectives </h5>
                    <p>
                      We set an accurate understanding of your business goals,
                      consider user needs and determine a fundamental strategy.
                    </p>
                  </div>
                  <input type="radio" name="designProcess" id="designProcess--2" />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="designProcess--2">
                    <h5>Research</h5>
                    <p>Generating ideas and design concept</p>
                  </label>
                  <div className={styles.designProcessNavContent} data-target="designProcess--2">
                    <h5>Generating ideas and design concept</h5>
                    <p>
                      Our UI/UX designers collaborate with you and conduct a research
                      and task audit that reveal information gaps and preplan the workflow.
                    </p>
                  </div>
                  <input type="radio" name="designProcess" id="designProcess--3" />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="designProcess--3">
                    <h5>UX</h5>
                    <p>Crafting design users will enjoy</p>
                  </label>
                  <div className={styles.designProcessNavContent} data-target="designProcess--3">
                    <h5>Crafting design users will enjoy</h5>
                    <p>
                      At this stage, we evaluate the concept and UX presentation
                      and decide together with you about the future design and user experience.
                    </p>
                  </div>
                  <input type="radio" name="designProcess" id="designProcess--4" />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="designProcess--4">
                    <h5>UI</h5>
                    <p>Creating an engaging mobile user experience</p>
                  </label>
                  <div className={styles.designProcessNavContent} data-target="designProcess--4">
                    <h5>Creating an engaging mobile user experience</h5>
                    <p>
                      We take advantage of Sketch, Photoshop, Invision, Adobe Illustrator
                      to come up with an awesome design that corresponds to fresh and smart
                      trends.
                    </p>
                  </div>
                  <input type="radio" name="designProcess" id="designProcess--5" />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="designProcess--5">
                    <h5>Development</h5>
                    <p>Turning design into something real and living</p>
                  </label>
                  <div className={styles.designProcessNavContent} data-target="designProcess--5">
                    <h5>Turning design into something real and living</h5>
                    <p>
                      Our developers’ team will help you put your design
                      into production and make it a fully-functioning product.
                    </p>
                  </div>
                </div>
                <div className={styles.btnCenter}>
                  <button
                    className={`${styles.redButton} 
                                ${styles.animationFadeInBlock} btnContactModal ${styles.scrollToContactForm}`}
                    type="button"
                    name="Button 6"
                    onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                  >
                    GET A FREE PROTOTYPE
                  </button>
                </div>
                <div className={`${styles.designersTeam} designersTeam`}>
                  <h2 className={`${styles.contentHeaderPrimary} ${styles.center} js-entryBlock`}>
                    Meet the designers’ team of
                    Onix
                  </h2>
                  <p className={styles.center}>
                    We’ve got more than 7 years of experience in web and mobile design, branding,
                    and e-commerce design. We don’t just agree to customer requests, we examine your
                    ideas and
                    carefully craft every project facet.
                  </p>
                  <ul className={styles.designers}>
                    <li
                      className={styles.hoverEffectContainer}
                      onMouseMove={cardHoverEffect}
                      onMouseLeave={cardMouseLeave}
                      onFocus={() => {
                      }}
                    >
                      <div className={`${styles.designerCard} designerCard`}>
                        <div className={`${styles.animationCard} ${designersCardShowClassName ? styles.show : ''}`}>
                          <ImageComponent
                            src={fitnessMaxK}
                            srcSet={`${fitnessMaxK2x} 2x`}
                            alt="Max Kamenschikov"
                            width={355}
                            height={355}
                          />
                          <h4>Max Kamenschikov</h4>
                          <span>Art Director</span>
                        </div>
                      </div>
                    </li>
                    <li
                      className={styles.hoverEffectContainer}
                      onMouseMove={cardHoverEffect}
                      onMouseLeave={cardMouseLeave}
                      onFocus={() => {
                      }}
                    >
                      <div className={`${styles.designerCard} designerCard`}>
                        <div className={`${styles.animationCard}${designersCardShowClassName ? styles.show : ''}`}>
                          <ImageComponent
                            src={fitnessAndrew}
                            srcSet={`${fitnessAndrew2x} 2x`}
                            alt="Andrew Kreitor"
                            width={355}
                            height={355}
                          />
                          <h4>Andrew Kreitor</h4>
                          <span>Motion Designer</span>
                        </div>
                      </div>
                    </li>
                    <li
                      className={styles.hoverEffectContainer}
                      onMouseMove={cardHoverEffect}
                      onMouseLeave={cardMouseLeave}
                      onFocus={() => {
                      }}
                    >
                      <div className={`${styles.designerCard} designerCard`}>
                        <div className={`${styles.animationCard} ${designersCardShowClassName ? styles.show : ''}`}>
                          <ImageComponent
                            src={fitnessMaxH}
                            srcSet={`${fitnessMaxH2x} 2x`}
                            alt="Max Honcharov"
                            width={355}
                            height={355}
                          />
                          <h4>Max Honcharov</h4>
                          <span>UI/UX Designer</span>
                        </div>
                      </div>
                    </li>
                    <li
                      className={styles.hoverEffectContainer}
                      onMouseMove={cardHoverEffect}
                      onMouseLeave={cardMouseLeave}
                      onFocus={() => {
                      }}
                    >
                      <div className={`${styles.designerCard} designerCard`}>
                        <div className={`${styles.animationCard} ${designersCardShowClassName ? styles.show : ''}`}>
                          <ImageComponent
                            src={fitnessMaxB}
                            srcSet={`${fitnessMaxB2x} 2x`}
                            alt="Max Belevtsov"
                            width={355}
                            height={355}
                          />
                          <h4>Max Belevtsov</h4>
                          <span>Illustrator</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.canDevelop}>
              <div className={`${styles.bannersInner} col big l12`}>
                <h2 className={`${styles.contentHeaderPrimary} ${styles.center} js-entryBlock`}>
                  We can develop a fitness app for you
                </h2>
                <p className={styles.center}>
                  Onix team can help you develop a feature-rich fitness app that contains videos,
                  images and 3D models and considers different user groups and levels of
                  difficulty (from beginners to professional athletes).
                </p>
                <p className={styles.center}>
                  Our services include the development of workout and logbook applications, nutrition
                  and fitness tracking apps that are suitable for gym and home use, for athletes and personal
                  fitness instructors. We can create fitness tracking apps that integrate with
                  wearable devices and measure fitness progress.
                </p>
                <div className={styles.canDevelopWrapper}>
                  <div className={styles.canDevelopItem}>
                    <ImageComponent
                      src={planning}
                      alt="planning"
                      width={100}
                      height={100}
                    />
                    <p>Planning</p>
                    <span>
                      At this stage, our team of developers study the documentation and supporting materials,
                      including the design of your future fitness app. It is when we estimate the time and
                      budget for the app development.
                    </span>
                  </div>
                  <div className={styles.canDevelopItem}>
                    <ImageComponent
                      src={developmentAndTesting}
                      alt="developmentAndTesting"
                      width={100}
                      height={100}
                    />
                    <p>Development and testing</p>
                    <span>
                      At Onix, we rely on Agile software development model that ensures efficient
                      coding and testing that help save your time and budget.
                    </span>
                  </div>
                  <div className={styles.canDevelopItem}>
                    <ImageComponent
                      src={releaseAndMaintenance}
                      alt="releaseAndMaintenance"
                      width={100}
                      height={100}
                    />
                    <p>Release and maintenance</p>
                    <span>
                      We will prepare your app for submission and approval procedures so it goes through the launch
                      quickly and easily. Once the app becomes available on an app store, we will help
                      collect analytics and monitor the app’s performance to avoid possible crashes.
                    </span>
                  </div>
                </div>
                <div className={styles.whiteBottom}>
                  Got an idea for an awesome fitness app?
                  <br />
                  Give it a go and delegate work to the professionals!
                </div>
                <button
                  className={`${styles.redButton} ${styles.redButtonBook}
                             ${styles.redButtonBig} ${styles.scrollToContactForm} btnContactModal`}
                  type="button"
                  name="Button 7"
                  onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                >
                  LET’S DISCUSS YOUR APP IDEA
                </button>
              </div>
            </div>
            <div />
          </div>
        </article>
      </div>
      <div className="mainContainer container" />

    </>
  );
}

FitnessAppView.defaultProps = {
  blockInView: '',
};

FitnessAppView.propTypes = {
  blockInView: PropTypes.string,
  scrollToView: PropTypes.func.isRequired,
  cardHoverEffect: PropTypes.func.isRequired,
  cardMouseLeave: PropTypes.func.isRequired,
};

export default FitnessAppView;
