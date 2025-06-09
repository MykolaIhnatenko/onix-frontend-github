import Icon from '../../../assets/icon';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/stridistTestimonialCard.module.scss';

function StridistTestimonialCard() {
  return (
    <VRARContent className={styles.card}>
      <Icon.IconQuotes
        className={styles.icon}
        width={110}
        height={80}
      />
      <p className={styles.text}>
        We’ve had a fantastic experience working with the team at Onix. They’ve delivered the vision we
        had for our platform. Communication has been great, they go the extra mile to make sure
        <br />
        work is done to a high standard and delivered on time.
        <br />
        It’s been a pleasure to have them on board highly recommend them.
      </p>
      <h4 className="author">Sukh Sidhu, Chief Executive Officer</h4>
    </VRARContent>
  );
}

export default StridistTestimonialCard;
