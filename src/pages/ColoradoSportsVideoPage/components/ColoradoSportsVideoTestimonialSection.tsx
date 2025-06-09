import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/coloradoSportsVideoTestimonialSection.module.scss';

function ColoradoSportsVideoTestimonialSection() {
  return (
    <div className={styles.testimonialSection}>
      <div className={`${styles.container} coloradoContainer`}>
        <div className="cardContainer">
          <VRARContent>
            <p className={`${styles.sectionTitle} sectionTitle`}>Client Testimonial</p>
          </VRARContent>
          <VRARContent>
            <p className="testimonialText">
              <span>“We retained Onix to </span>
              improve the company’s website
              <span> as we expand to other states. </span>
              They were very good at understanding my requirements
              <span> and offered </span>
              different solutions to our needs.
              <span> We needed to </span>
              automate most of the backend of the website,
              <span> and </span>
              they did a fabulous job.
              <br />
              <br />
              <span>They are </span>
              very organized and diligent in the entire process,
              <span>
                {' '}
                and communication with them was seamless.
                {' '}
              </span>
              I’m so pleased
              <span> with the work they did that </span>
              I plan to continue working with Onix as my company continues to grow.”
            </p>
          </VRARContent>
          <VRARContent>
            <p className={styles.sectionTitle}>
              Heberto Limas-Villers
              <br />
              President of Colorado Sports Video
            </p>
          </VRARContent>
        </div>
      </div>
    </div>
  );
}

export default ColoradoSportsVideoTestimonialSection;
