import IInteractiveContent from '../interfaces/IInteractiveContent';
import InteractiveContentItem from './InteractiveContentItem';

import styles from '../sass/InteractiveContent.module.scss';

function InteractiveContent({ content, classes, variant }: IInteractiveContent) {
  return (
    <div className={styles[classes]}>
      {content.map(({ id, text }) => (
        <InteractiveContentItem
          key={id}
          text={text}
          variant={variant}
        />
      ))}
    </div>
  );
}

export default InteractiveContent;
