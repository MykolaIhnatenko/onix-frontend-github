import Link from 'next/link';

import ImageComponent from '../../../../components/Image/Image';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import MainTitle from '../../../../components/MainTitle/MainTitle';
import ContentText from '../../../../components/ContentText/ContentText';
import digitalHealthcareProvedIcons from '../data/digitalHealthcareProvedIcons';
import IGatherGroupProvide from '../interfaces/IGatherGroupProvide';

import styles from '../sass/gatherGroupProvideSection.module.scss';

function GatherGroupProvideSection({ saleUrl }: IGatherGroupProvide) {
  return (
    <section className={styles.provideSection}>
      <div className={styles.container}>
        <VRARContent>
          <ContentText className={styles.upTitle} tag="p">
            [ Design solutions provided by Onix ]
          </ContentText>
        </VRARContent>
        <VRARContent>
          <MainTitle>
            Achieving great results together!
          </MainTitle>
        </VRARContent>
        <div className={styles.contentContainer}>
          <VRARContent className={styles.textBlock}>
            <ContentText className={`${styles.text} ${styles.textFirst}`} tag="p">
              Today there are already six applications based on this digital health white-label
              solution.
              {!saleUrl && <> You can see these apps in Google Play and App Store.</>}
            </ContentText>
          </VRARContent>
          {!saleUrl && digitalHealthcareProvedIcons && (
            <VRARContent className={styles.linksBlock}>
              {digitalHealthcareProvedIcons.map(({
                id, src, alt, href,
              }) => (
                <Link
                  key={id}
                  href={href}
                  className={styles.link}
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <ImageComponent
                    src={src}
                    width={120}
                    height={40}
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                    alt={alt}
                  />
                </Link>
              ))}
            </VRARContent>
          )}
          <VRARContent className={styles.textBlock}>
            <ContentText
              tag="p"
              className={`
                ${styles.text} ${styles.textSecond} ${saleUrl ? styles.saleTextSecond : ''}
              `}
            >
              The Onix team successfully completed the product&apos;s feasibility study, did all background
              work required for successful MVP development, and after the app release, the product moved under
              Onix support.
              <br />
              <br />
              Now our specialists work on changes and updates based on the customers&apos;
              needs and users&apos; feedback.
            </ContentText>
          </VRARContent>
        </div>
      </div>
    </section>
  );
}
export default GatherGroupProvideSection;
