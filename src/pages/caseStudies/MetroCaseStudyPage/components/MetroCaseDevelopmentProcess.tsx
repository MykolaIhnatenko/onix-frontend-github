import ImageComponent from '../../../../components/Image/Image';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import { muktaVaaniFont } from '../../../../fonts/MainFonts';

import SwiftIcon from '@/images/caseStudiesPage/MetroCaseStudyPage/img_swiftIcon.webp';
import KotlinIcon from '@/images/caseStudiesPage/MetroCaseStudyPage/img_kotlinIcon.webp';
import DjangoIcon from '@/images/caseStudiesPage/MetroCaseStudyPage/img_djangoIcon.webp';
import styles from '../sass/metroCaseDevelopmentProcess.module.scss';

function MetroCaseDevelopmentProcess() {
  return (
    <div className={`${styles.mainContainer} ${muktaVaaniFont.variable}`}>
      <VRARContent>
        <h2 className={styles.contentTitle}>
          The development process and technology stack
        </h2>
      </VRARContent>
      <VRARContent className={styles.contentTextContainer}>
        <p>
          All functionalities of the wholesale shopping app were developed
          by Onix in close cooperation with the client: they would give an
          idea, and we would develop the concept and implement it.
        </p>
        <p>
          To attract new customers, we decided to launch an MVP version
          first. The basic functionality included: registration, customer
          card, list of stores, and advertising brochures.
        </p>
        <p>
          Then, we began to build up the functionality, adding one by one:
          the product barcode scanner, shopping list, linking stores, push
          notifications, vouchers, and the products catalog.
        </p>
        <p>
          The native mobile apps for Apple and Android devices were coded in Swift and Kotlin, respectively.
        </p>
        <p>
          Building the admin panel for the marketing department, Onix’s
          developers used the Django (Python) web framework.
        </p>
        <p>
          The business logic relating to the registration of new users
          was implemented on the client-side in compliance with the company’s internal policies.
        </p>
      </VRARContent>
      <VRARContent className={styles.contentImagesContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.innerImageContainer}>
            <ImageComponent
              src={SwiftIcon}
              alt="swiftIcon"
              width={65}
              height={65}
            />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.innerImageContainer}>
            <ImageComponent
              src={KotlinIcon}
              alt="kotlinIcon"
              width={65}
              height={65}
            />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.innerImageContainer}>
            <ImageComponent
              src={DjangoIcon}
              alt="djangoIcon"
              width={65}
              height={65}
            />
          </div>
        </div>
      </VRARContent>
    </div>
  );
}

export default MetroCaseDevelopmentProcess;
