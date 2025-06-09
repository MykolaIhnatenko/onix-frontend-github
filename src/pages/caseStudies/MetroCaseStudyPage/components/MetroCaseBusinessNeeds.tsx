import MobileInHandImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_mobileInHandImage.webp';
import MobileImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_mobileImage.webp';
import MetroMap from '@/images/caseStudiesPage/MetroCaseStudyPage/img_metroMap.webp';
import FilledContactUs from './FilledContactUs';
import ImageComponent from '../../../../components/Image/Image';
import Icon from '../../../../assets/icon';
import { muktaVaaniFont } from '../../../../fonts/MainFonts';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import IPageStatus from '../../../../interfaces/IPageStatus';
import { ButtonType } from 'constants/enums';

import styles from '../sass/metroCaseBusinessNeeds.module.scss';

function MetroCaseBusinessNeeds({ saleUrl }: IPageStatus) {
  return (
    <div className={`${styles.mainContainer} ${muktaVaaniFont.variable}`}>
      {!saleUrl && (
        <VRARContent className={styles.linkWrapper}>
          <FilledContactUs
            imageSrc={MobileImage}
            imageWidth={264}
            imageHeight={214}
            idBtn={ButtonType.CASE}
          >
            <h2 className={styles.contactUsText}>
              Are you interested in shopping mobile application development too?
              <br />
              Please don’t hesitate to share your plans and needs with
              Onix’s team — we are here to turn ideas into reality!
            </h2>
          </FilledContactUs>
        </VRARContent>
      )}
      <div className={styles.mainContentContainer}>
        <div className={styles.innerContainer}>
          <VRARContent>
            <h2 className={styles.contentTitle}>
              The client
              <br />
              and their business needs
            </h2>
          </VRARContent>
          <VRARContent className={styles.contentTextWrapper}>
            <p className={styles.contentText}>
              METRO C&C is an international company specializing in wholesale
              grocery retail. Their target audience includes both individuals
              who regularly shop for their personal needs and legal entities
              making bulk purchases for hotels, restaurants, and catering.
            </p>
            <p className={styles.contentText}>
              The company initiated the project as part of their long-term
              strategy to digitize the current offline customer processes.
              Namely, they are striving to make shopping more convenient for the customers.
            </p>
          </VRARContent>
          <VRARContent className={styles.metroMapWrapper}>
            <ImageComponent
              src={MetroMap}
              alt="metroMap"
              width={730}
              height={462}
              quality={100}
              sizes="(max-width: 450px) 50vw, 100vw"
            />
          </VRARContent>
          <VRARContent className={styles.metroListContainer}>
            <p className={styles.metroListTitle}>
              METRO C&C envisioned a branded mobile application that would:
            </p>
            <div className={styles.metroListItem}>
              <div className={styles.metroListItemIcon}>
                <Icon.IconShop />
              </div>
              <p className={styles.metroListItemText}>
                Facilitate the physical process of shopping at METRO stores
              </p>
            </div>
            <div className={styles.metroListItem}>
              <div className={styles.metroListItemIcon}>
                <Icon.IconNotebook />
              </div>
              <p className={styles.metroListItemText}>
                Facilitate the work of the chain’s marketing departments
              </p>
            </div>
            <div className={styles.metroListItem}>
              <div className={styles.metroListItemIcon}>
                <Icon.IconGear />
              </div>
              <p className={styles.metroListItemText}>
                Pave the way for eventual online sales
              </p>
            </div>
          </VRARContent>
        </div>
      </div>
      <div className={styles.subContentContainer}>
        <div className={styles.innerContainer}>
          <VRARContent className={styles.flexContainer}>
            <div className={styles.subContentImageWrapper}>
              <ImageComponent
                src={MobileInHandImage}
                alt="mobileInHandImage"
                width={540}
                height={609}
                quality={100}
                sizes="(max-width: 450px) 50vw, 100vw"
              />
            </div>
            <div className={styles.subContentTextWrapper}>
              <p className={styles.subContentText}>
                For example, one of the functionalities enables
                customers to shift from plastic customer cards
                to virtual ones. People just download the free
                app and use their mobile phones at the cash
                desk to make the purchases.
              </p>
              <p className={styles.subContentText}>
                Besides an effective solution to their business needs,
                METRO C&C was looking for a reliable software development partner that would:
              </p>
              <ul className={styles.subContentList}>
                <li>
                  <Icon.IconCheck className={styles.icon} />
                  <p>support them in every possible way</p>
                </li>
                <li>
                  <Icon.IconCheck className={styles.icon} />
                  <p>help them with any technical issues</p>
                </li>
                <li>
                  <Icon.IconCheck className={styles.icon} />
                  <p>ensure a transparent cooperation and development process</p>
                </li>
              </ul>
              <p className={styles.subContentTextResult}>
                METRO C&C considered ten candidates for the job.
                Onix’s team made a good impression during the
                project requirements discussion, demonstrating
                competence from the onset. Thus, Onix won
                the tender and our cooperation began.
              </p>
            </div>
          </VRARContent>
        </div>
      </div>
    </div>
  );
}

export default MetroCaseBusinessNeeds;
