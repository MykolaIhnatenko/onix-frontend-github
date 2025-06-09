import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import CeraGRFont from '../../../fonts/CeraGRFont';
import PoppinsFont from '../../../fonts/PoppinsFont';
import Image from '../../../components/Image/Image';
import CoreTech from './components/CoreTech';
import HeaderInfo from './components/HeaderInfo';
import Solutions from './components/Solutions';
import VRARPageAppearAnimation from '../../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import SolutionsListStrip from './components/SolutionsListStrip';
import ResultBody from './components/ResultBody';
import PageLinks from 'constants/PageLinks';

import styles from './sass/MiPaddle.module.scss';

const imgPath = '/static/images/Pages/MiPaddle';
const headerMobileBg = `${imgPath}/headerMobileBg.jpg`;
const dimBg = `${imgPath}/onixNeededBg.jpg`;
const videoHeader = '/static/video/headerBg1.mp4';
const resultsBg = '/static/video/resultsBg1.mp4';
const resultsMobileBg = `${imgPath}/resultsMobileBg.jpg`;
const tenisPlayer = `${imgPath}/tenisPlayer2x.jpg`;
const arrowBg = `${imgPath}/arrowBg@2x.png`;
const icon = `${imgPath}/yellowArrow.svg`;

function MiPaddleCaseStudyView({
  headerInfoContent, solutionList, coreTechList, neededList, solutionsList2, path, saleUrl,
}) {
  const {
    screenSizes: {
      isXXXLDevice, isXXLDevice, isXLDevice, isAlbumBig, isSMDevice, isMDDevice,
    },
  } = useSelector((state) => state?.app);
  const isNotMobile = isAlbumBig || isXXXLDevice || isXXLDevice || isXLDevice || isSMDevice || isMDDevice;

  return (
    <div className={`${styles.miPaddleWr} ${PoppinsFont.variable} ${CeraGRFont.variable}`}>
      <section className={styles.miPaddleHeader}>
        {isNotMobile
          ? (
            <video
              autoPlay
              muted
              loop
              src={videoHeader}
              playsInline
            >
              <track kind="captions" />
            </video>
          )
          : <Image className={styles.headerMobileBg} priority fill src={headerMobileBg} alt="MiPaddle" />}
        <div className={`${styles.headContainer} MiPaddleContainer`}>
          <div className={styles.miPaddleHeaderText}>
            <VRARPageAppearAnimation triggerOnce>
              <h1>MiPaddle Mobile App & Website Development For Paddle Tennis Enthusiasts</h1>
            </VRARPageAppearAnimation>
            <VRARPageAppearAnimation delay={400} triggerOnce>
              <p>
                How Onix as a
                {' '}
                {!saleUrl ? (
                  <Link
                    prefetch={false}
                    href={`${path}${PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}`}
                    legacyBehavior
                  >
                    sports software development agency
                  </Link>
                ) : (
                  <>
                    sports software development agency
                  </>
                )}
                {' '}
                developed a custom mobile app & website for paddle tennis fans to improve their playing skills,
                track progress, and share common interests with the community
              </p>
            </VRARPageAppearAnimation>
          </div>
          {isNotMobile && <HeaderInfo headerInfoContent={headerInfoContent} isNotMobile={isNotMobile} />}
        </div>
      </section>
      <section className={styles.challengesWr}>
        <div className="MiPaddleContainer">
          <VRARPageAppearAnimation offset={-4} triggerOnce>
            <p>
              In this case study, we describe how Onix developers worked on the website and mobile app to  transfer
              playing experience of the founders and their pro community to people who want to learn from the paddle
              tennis professionals.
            </p>
          </VRARPageAppearAnimation>
          <HeaderInfo headerInfoContent={headerInfoContent} />
          <div className={styles.challengesDescr}>
            <div className={styles.challengesDescrText}>
              <VRARPageAppearAnimation delay={200} triggerOnce>
                <h2>Challenges</h2>
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation triggerOnce>
                <p style={PoppinsFont.style}>
                  Paddle tennis is a sport that brings people together. It&apos;s a game that can be enjoyed by people
                  of all ages and abilities, and it&apos;s a great way to stay active and social. Particularly this
                  encouraged
                  Mikk and Mark, our clients and the app founders, to create a truly interactive and spiritual app for
                  paddle tennis fans. The app idea was created by two friends who bonded over their love of paddle
                  tennis and teaching. They saw a need for an easy way for people to connect, find paddle partners,
                  and be a part of a like-minded community.
                  <br />
                  <br />
                  The client came to Onix by the recommendation of their friends, also our client. The
                  founder of MiPaddle requested our team to create a paddle tennis website, Android and iOS apps, and
                  Admin
                  Panel for content management
                </p>
              </VRARPageAppearAnimation>
            </div>
            <div className={styles.challengesBg}>
              <VRARPageAppearAnimation classes={styles.arrowBg} delay={800} duration={500} triggerOnce>
                <div className={styles.arrowBgImg}>
                  <Image
                    width={828}
                    height={1270}
                    src={arrowBg}
                    alt="arrow"
                    sizes="(max-width: 650px) 20vw, 50vw"
                  />
                </div>
              </VRARPageAppearAnimation>
              <div className={styles.tenisPlayer}>
                <VRARPageAppearAnimation classes={styles.tenisPlayerImg} delay={200} triggerOnce>
                  <Image
                    fill
                    src={tenisPlayer}
                    alt="tenis player"
                    quality={50}
                    sizes="(max-width: 767px) 40vw, 50vw"
                  />
                </VRARPageAppearAnimation>
              </div>
            </div>
          </div>
          <div className={styles.onixNeededWr}>
            <Image
              src={dimBg}
              className={styles.dim}
              width={750}
              height={616}
              sizes="(max-width: 767px) 40vw, 50vw"
              alt="Background"
            />
            <h3>The Onix team needed to:</h3>
            <ul>
              {neededList.map(({ id, text }) => (
                <li key={id}>
                  <Image
                    src={icon}
                    className={styles.arrowIcon}
                    alt="icon"
                    width={7}
                    height={10}
                  />
                  <p className={styles.neededListItem}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.solutionsWr}>
        <div className={`${styles.solutionContainer} MiPaddleContainer`}>
          <VRARPageAppearAnimation>
            <h2>Our solutions</h2>
          </VRARPageAppearAnimation>
          <div className={styles.solutionListTop}>
            <div className={styles.solutionList}>
              <ul>
                {solutionsList2.map(({ id, text }) => (
                  <li key={id}>
                    <SolutionsListStrip />
                    <VRARPageAppearAnimation triggerOnce>
                      <p>
                        {text}
                      </p>
                    </VRARPageAppearAnimation>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Solutions solutionList={solutionList} />
      </section>
      <CoreTech coreTechList={coreTechList} />
      <section className={styles.resultsWr}>
        <div className={styles.resultsHeader}>
          {isNotMobile ? (
            <video
              autoPlay
              muted
              loop
              src={resultsBg}
              playsInline
            >
              <track kind="captions" />
            </video>
          ) : (
            <Image fill src={resultsMobileBg} alt="results" />
          )}
          <div className="MiPaddleContainer">
            <VRARPageAppearAnimation classes={styles.results} triggerOnce>
              <VRARPageAppearAnimation delay={400} triggerOnce>
                <h2>Results</h2>
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation delay={200} triggerOnce>
                <p>
                  MiPaddle isn’t just a tennis teaching app with educational videos about how to improve your
                  skills in paddle tennis. It’s a community of like-minded people who would like to share common
                  interests and track the progress of their play. Now, MiPaddle users can follow the latest
                  community news, speak with each other on a forum, and learn from the professional coaches all
                  in one place. This makes MiPaddle not just an ordinary project but one big community of paddle
                  tennis pros and amateurs.
                </p>
              </VRARPageAppearAnimation>
            </VRARPageAppearAnimation>
          </div>
        </div>
        {!saleUrl && <ResultBody /> }
      </section>
    </div>

  );
}

MiPaddleCaseStudyView.propTypes = {
  headerInfoContent: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  solutionList: PropTypes.shape({}).isRequired,
  coreTechList: PropTypes.shape({}).isRequired,
  neededList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  solutionsList2: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  path: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  saleUrl: PropTypes.bool,
};

export default MiPaddleCaseStudyView;
