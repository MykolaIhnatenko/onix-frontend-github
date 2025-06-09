import StridistGrayCard from './StridistGrayCard';
import IBenefitsCardProps from '../interfaces/IBenefitsCard';

import styles from '../sass/benefitsCard.module.scss';

function BenefitsCard({ id, title, content }: IBenefitsCardProps) {
  return (
    <div className={styles.wrapper}>
      <StridistGrayCard key={id} type="benefits">
        {title}
        {content}
      </StridistGrayCard>
    </div>
  );
}
export default BenefitsCard;
