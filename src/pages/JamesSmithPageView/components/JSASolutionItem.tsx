import Ellipse from './Ellipse';
import { IJSASolutionItem } from '../interfaces/IJSASolutionItem';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import JSAText from './JSAText';

import styles from '../sass/JSASolutionItem.module.scss';

function SolutionItem({ item, isSmallDevice }: IJSASolutionItem) {
  const {
    id, description, picture, title, width, height,
  } = item;
  const itemStyles = styles[`solutionItem${id}`];
  const ellipses = [
    ...(id === 0 && !isSmallDevice ? ([{ color: 'pink', classes: styles.ellipseTopInFirstBlock }]) : []),
    ...(id === 0 && !isSmallDevice ? ([{ color: 'pink', classes: styles.ellipseBottomInFirstBlock }]) : []),
    ...(id === 1 && !isSmallDevice ? ([{ color: 'pink', classes: styles.ellipseTopInSecondBlock }]) : []),
    ...(id === 1 && !isSmallDevice ? ([{ color: 'pink', classes: styles.ellipseBottomInSecondBlock }]) : []),
    ...(id === 2 && !isSmallDevice ? ([{ color: 'pink', classes: styles.ellipseTopInThirdBlock }]) : []),
  ];

  return (
    <div className={`${styles.solutionItem} ${itemStyles}`}>
      {ellipses.map(({ classes, color }) => (
        <div key={classes} className={classes}>
          <Ellipse color={color} />
        </div>
      ))}
      <ImageComponent
        src={picture}
        width={width}
        height={height}
        alt="Screen"
        sizes="100vw"
        quality={100}
      />
      <VRARContent className={styles.solutionItemDescription}>
        <JSAText tag="h3" className={styles.solutionItemTitle}>
          {title}
        </JSAText>
        <JSAText>
          {description}
        </JSAText>
      </VRARContent>
    </div>
  );
}

export default SolutionItem;
