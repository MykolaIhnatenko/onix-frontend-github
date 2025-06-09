import HaasReedMore from './HaasReedMore';
import ImageComponent from '../../../components/Image/Image';
import testimonialContent from '../data/testimonialContent';
import HaasText from './HaasText';
import background from '@/images/haas/testimonialSection/img_testimonial-bg@2x.webp';
import photo from '@/images/haas/testimonialSection/img_photo@2x.webp';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from '../sass/HaasTestimonialSection.module.scss';

function HaasTestimonialSection() {
  return (
    <PageContainer tag="section" className={`${styles.testimonialSection}`}>
      <div className={styles.imgContainer}>
        <ImageComponent
          sizes="100vw"
          src={background}
          alt="background"
          fill
        />
      </div>
      <div className={styles.testimonial}>
        <HaasText tag="h2" variant="title">Testimonial</HaasText>
        <div className={styles.card}>
          <div className={styles.photoBlock}>
            <div className={styles.photo}>
              <ImageComponent
                src={photo}
                width={96}
                height={96}
                alt="photo"
              />
            </div>
            <div className={styles.position}>
              <HaasText tag="p" className={styles.name}>Justin Zimmerman</HaasText>
              <HaasText tag="p" className={styles.positionName}>CEO Company</HaasText>
            </div>
          </div>
          <HaasText tag="p" variant="testimonialText">
            Onix and Haas Automation have been working together for five years. Onix provides us with exceptional
            resources to help meet our demand for iOS and Android development.  Their technical team goes out of
            their way to share information and to help train our in-house developers, raising the efficiency of our
            entire mobile development team.
            <br />
            <br />
          </HaasText>
          <HaasReedMore content={testimonialContent} />
        </div>
      </div>
    </PageContainer>
  );
}

export default HaasTestimonialSection;
