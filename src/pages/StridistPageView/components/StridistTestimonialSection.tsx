import StridistTestimonialCard from './StridistTestimonialCard';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/stridistTestimonialSection.module.scss';

function StridistTestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      <div className={`${styles.container} stridistContainer`}>
        <VRARContent>
          <h2 className="testimonialTitle">Testimonial</h2>
        </VRARContent>
        <StridistTestimonialCard />
      </div>
    </section>
  );
}

export default StridistTestimonialSection;
