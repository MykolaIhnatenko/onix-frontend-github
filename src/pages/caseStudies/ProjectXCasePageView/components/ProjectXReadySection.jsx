import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import ImageComponent from '../../../../components/Image/Image';
import { readyLogos } from '../data/ProjectXData';
import { setShowContactForm } from '../../../../store/app/contactForm/slice';

import styles from '../sass/ProjectXReadySection.module.scss';

const readyGirl = '/static/images/Pages/ProjectX/readySection/img_ready_girl@2x.webp';
const readyGirlMobile = '/static/images/Pages/ProjectX/readySection/img_ready_girl_mobile.webp';
const readyCirclesBg = '/static/images/Pages/ProjectX/readySection/img_ready_circles@2x.webp';

function ProjectXReadySection({ isTablet }) {
  const dispatch = useDispatch();
  return (
    <section className={styles.readySection}>
      <div className={styles.readyGirlImg}>
        <ImageComponent
          className={styles.img}
          src={isTablet ? readyGirlMobile : readyGirl}
          width={isTablet ? 768 : 1238}
          height={isTablet ? 656 : 960}
          sizes="100vw"
          alt="girl"
        />
      </div>
      <div className={styles.readyCirclesBg}>
        <ImageComponent
          src={readyCirclesBg}
          width={496}
          height={640}
          layout="intrinsic"
          alt="circles"
        />
      </div>
      <div className={`${styles.container} container`}>
        <h3 className={styles.title}>
          Ready to modernize your fitness business by leveraging top-tier technologies?
        </h3>
        <div className={styles.btnBlock}>
          <div
            className="btn btnContactModal"
            role="presentation"
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          >
            Get in touch with us
          </div>
        </div>
        <div className={styles.solutionsBlock}>
          <h2>Solutions we provide</h2>
          <h3 className="fs_20">
            The top-level requirement was to create a well-structured fitness platform, where users can
            get access to a number of Project X features according to their membership type.
          </h3>
          <p>
            The client already had a site on WordPress, and we needed to achieve better performance and
            extend the platform functionality. However, to provide the best solutions to the client&apos;s
            business challenges, using WordPress was not practical. Thus, we offered another tech stack
            that would guarantee high-quality product operation. Moreover, our
            {' '}
            <Link
              prefetch={false}
              href={{
                pathname: '/sports-and-fitness-development-services',
                query: { salesChannel: 'Project X Case' },
              }}
            >
              sports app development team
            </Link>
            {' '}
            decided to implement reliable third-party services to add extra vital features:
          </p>
          <div className={styles.logoBlock}>
            {readyLogos.map(({
              id, src, content, widthImg, heightImg,
            }) => (
              <div className={styles.logoItem} key={id}>
                <div className={styles.readyImgContainer}>
                  <ImageComponent
                    src={src}
                    className={styles.img}
                    width={widthImg}
                    height={heightImg}
                    sizes="100vw"
                    alt="logo"
                  />
                </div>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

ProjectXReadySection.propTypes = {
  isTablet: PropTypes.bool.isRequired,
};

export default ProjectXReadySection;
