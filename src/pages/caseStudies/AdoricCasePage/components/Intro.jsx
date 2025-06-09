import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/AdoricCaseView.module.scss';

const basePath = '/static/images/Pages/AdoricCasePage';
const men = `${basePath}/img_men.webp`;

function Intro() {
  return (
    <section className={styles.artItem}>
      <div className={styles.projectContext}>
        <div className="col l12">
          <VRARPageAppearAnimation>
            <h2 className={`${styles.contentHeaderPrimary} ${styles.center}`}>
              Introduction
            </h2>
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation>
            <p>
              Initially our customer,
              <span className={styles.colorBlue}>
                      &nbsp;Tal Revivo
              </span>
              , approached Onix with a
              simple short-term task of fixing bugs on
              a website. But as Onix team began to work on Adoric, we learned more about the
              project, got deeper
              into the idea of this marketing tool and together with the customer we came to a
              decision of
              rebuilding the website from scratch.
            </p>
          </VRARPageAppearAnimation>
        </div>
        <div className={`col l12 big ${styles.pm0}`}>
          <VRARPageAppearAnimation classes={styles.projectReview}>
            <div className={styles.inner}>
              <div className={styles.reviewText}>
                <p>
                  <strong>
                    “I have initially reached out to Onix to fix
                    the plugin for WordPress. But after discussions
                    and considerations their team proposed to create
                    a full service website”
                  </strong>
                </p>
                <p className={styles.postText}>
                  —Tal Revivo, CEO and founder of Adoric
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <ImageComponent
                  src={men}
                  alt="Tal Revivo"
                  width={145}
                  height={208}
                />
              </div>
              <p className={styles.postText}>
                —Tal Revivo, CEO and founder of Adoric
              </p>
            </div>
          </VRARPageAppearAnimation>
        </div>
        <div className="col l12">
          <VRARPageAppearAnimation>
            <p>
              We knew that there were similar marketing software products existing on the market.
              But for Adoric
              we
              have successfully instilled a distinctive feature that allows to create and
              intuitively and easily
              manage marketing campaigns on the Adoric website, where no coding skills are
              required. The product
              consists of two major tools combined into one marketing system - an editor that
              creates lightboxes
              and
              an extensive analytics system that reflects marketing efficiency (shows conversion
              difference if
              Adoric capabilities are used and without it).
            </p>
          </VRARPageAppearAnimation>
        </div>
      </div>
    </section>
  );
}

export default Intro;
