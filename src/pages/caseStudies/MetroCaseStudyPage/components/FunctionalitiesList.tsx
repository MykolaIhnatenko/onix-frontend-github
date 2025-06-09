import CardItem from './CardItem';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import functionalities from '../data/functionalities';

import styles from '../sass/functionalitiesList.module.scss';

function FunctionalitiesList() {
  return (
    <div>
      {functionalities.map(({
        image, imagePosition, title, description,
      }) => (
        <VRARContent key={title} className={styles.functionalityItemContainer}>
          <CardItem
            cardView="functionality"
            image={image}
            imagePosition={imagePosition}
            imageHeight={200}
            imageWidth={200}
          >
            <>
              <h3 className={styles.functionalityItemTitle}>
                {title}
              </h3>
              <p className={styles.functionalityItemText}>
                {description}
              </p>
            </>
          </CardItem>
        </VRARContent>
      ))}
    </div>
  );
}

export default FunctionalitiesList;
