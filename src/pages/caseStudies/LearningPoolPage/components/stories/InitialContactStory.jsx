import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import InViewAnimation from '../InViewAnimation';
import ImageComponent from '../../../../../components/Image/Image';
import { useAppSelector } from '../../../../../hook/reduxToolkit';
import PageLinks from 'constants/PageLinks';

import styles from '../../sass/InitialContactStory.module.scss';

const basePath = '/static/images/Pages/LearningPoolPage';
const map = `${basePath}/img_map.webp`;
const mapVideo = '/static/video/map.mp4';

function InitialContactStory({ saleUrl }) {
  const {
    isLGDevice, isXLDevice, isXXLDevice, isXXXLDevice, isMDDevice,
  } = useAppSelector((state) => state.app.screenSizes);
  const isNotMobile = isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice || isMDDevice;

  return (
    <div className={styles.storyOne}>
      <div className={styles.content}>
        <InViewAnimation down>
          <span className={styles.number}>01.</span>
        </InViewAnimation>
        <InViewAnimation down>
          <h2 className={styles.heading}>Initial contact and onboarding</h2>
        </InViewAnimation>
      </div>
      <div className={styles.content}>
        <InViewAnimation down>
          <div className={styles.imageWrapper}>
            {isNotMobile
              ? (
                <video
                  autoPlay
                  muted
                  loop
                  src={mapVideo}
                  playsInline
                >
                  <track kind="captions" />
                </video>
              )
              : (
                <ImageComponent
                  src={map}
                  width={440}
                  height={530}
                  sizes="(max-width: 450px) 50vw, 100vw"
                  alt="map"
                />
              )}
          </div>
        </InViewAnimation>
        <div className={styles.text}>
          <InViewAnimation down>
            <p>
              Learning Pool&apos;s CTO Mark Lynch and Onix&apos;s
              {' '}
              {!saleUrl ? (
                <Link
                  prefetch={false}
                  href={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
                  legacyBehavior
                >
                  eLearning software development team
                </Link>
              ) : (
                <>eLearning software development team</>
              )}
              {' '}
              began communication on an IT job platform where Learning Pool was looking for contractors.
              The company was experiencing rapid growth and a large influx of customers, and
              therefore had a growing need for software developers. It wasn&apos;t practical to
              open
              new offices and recruit the right staff quickly in the UK, so they decided to
              outsource a part of the software development tasks.
            </p>
          </InViewAnimation>
          <InViewAnimation down>
            <p>
              Onix&apos;s ‘scouting group&apos; included three full-stack web developers and a
              project
              manager who acted as Learning Pool&apos;s eyes and ears in Ukraine. The team&apos;s
              primary
              goal was to build a relationship with the existing UK team, understand the project
              details, and proceed to the proper development as soon as possible. The PM had to
              facilitate the process and ensure a high level of quality.
            </p>
          </InViewAnimation>
          <InViewAnimation down>
            <p>
              Before the first
              {' '}
              {!saleUrl ? (

                <Link
                  prefetch={false}
                  href={PageLinks.LMS_DEVELOPMENT_SERVICES}
                  legacyBehavior
                >
                  team of LMS developers
                </Link>
              ) : (
                <>team of LMS developers</>
              )}
              {' '}
              were able to start, Onix specialists went
              through a testing period that lasted six months. Learning Pool was looking for a
              long-term outsourcing partner, so they were keenly interested in all Onix&apos;s
              processes. Our managers walked them through every aspect, from the hiring procedure
              to the criteria for employee promotion, and from time management to learning process
              monitoring.
            </p>
          </InViewAnimation>
        </div>
      </div>
    </div>
  );
}

InitialContactStory.propTypes = {
  saleUrl: PropTypes.bool,
};

InitialContactStory.defaultProps = {
  saleUrl: undefined,
};

export default InitialContactStory;
