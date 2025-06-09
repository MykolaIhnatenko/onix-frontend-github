import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/AdoricCaseView.module.scss';

const basePath = '/static/images/Pages/AdoricCasePage';

const features = [
  {
    icon: `${basePath}/icons/ic_resize.svg`,
    width: 74,
    height: 80,
    title: 'A graphic editor',
    delay: 0,
  },
  {
    icon: `${basePath}/icons/ic_devices.svg`,
    width: 80,
    height: 80,
    title: 'All devices support',
    delay: 100,
  },
  {
    icon: `${basePath}/icons/ic_ruler.svg`,
    width: 80,
    height: 80,
    title: 'Easy-to-use measuring tools',
    delay: 200,
  },
  {
    icon: `${basePath}/icons/ic_line-graph.svg`,
    width: 80,
    height: 80,
    title: 'Advanced Analytics',
    delay: 300,
  },
  {
    icon: `${basePath}/icons/ic_targeting.svg`,
    width: 80,
    height: 80,
    title: 'Lift tests and goals',
    delay: 400,
  },
  {
    icon: `${basePath}/icons/ic_testing.svg`,
    width: 76,
    height: 80,
    title: 'A/B testing',
    delay: 500,
  },
  {
    icon: `${basePath}/icons/ic_email.svg`,
    width: 80,
    height: 57,
    title: 'Mailing service integrations',
    delay: 600,
  },
  {
    icon: `${basePath}/icons/ic_image.svg`,
    width: 80,
    height: 78,
    title: '8,000 free graphic elements',
    delay: 700,
  },
];

function UserFlow() {
  return (
    <section className={`${styles.artItem} ${styles.colorScreen}`}>
      <div className="col l12">
        <VRARPageAppearAnimation>
          <h2 className={`${styles.contentHeaderPrimary} ${styles.center}`}>
            User flow
          </h2>
        </VRARPageAppearAnimation>
        <VRARPageAppearAnimation>
          <p>
            To start working with the service, it is necessary to place an activation code on
            all pages of your
            website and the rest of work will be completed through Adoric. This tool sets up
            a marketing campaign based on more than 30 possible settings.
          </p>
          <p className={`${styles.center} ${styles.center}`}>
            The main features of Adoric include:
          </p>
        </VRARPageAppearAnimation>
      </div>
      <div className={`${styles.featuresBlock} col big l12`}>
        {features.map(({
          icon, title, width, height, delay,
        }) => (
          <VRARPageAppearAnimation
            key={title}
            classes={styles.fCell}
            delay={delay}
          >
            <div className={styles.inner}>
              <div className={styles.icon}>
                <ImageComponent
                  src={icon}
                  alt={title}
                  width={width}
                  height={height}
                  sizes="100vw"
                />
              </div>
              <h3>{title}</h3>
            </div>
          </VRARPageAppearAnimation>
        ))}
      </div>
    </section>
  );
}

export default UserFlow;
