import PropTypes from 'prop-types';

import styles from '../sass/FAQsItem.module.scss';

function FAQsItem({
  itemId, title, children, onItemClick, enableItem,
}) {
  return (
    <div className={styles.itemContainer}>
      <div
        className={styles.headerContainer}
        onClick={() => onItemClick(itemId)}
        role="presentation"
      >
        <div className={styles.title}>{title}</div>
        {
          enableItem === itemId
            ? <div className={styles.openIcon} />
            : <div className={styles.closeIcon} />
        }
      </div>
      {enableItem === itemId && <div className={styles.contentContainer}>{children}</div>}
    </div>
  );
}

FAQsItem.propTypes = {
  itemId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onItemClick: PropTypes.func.isRequired,
  enableItem: PropTypes.number,
};

FAQsItem.defaultProps = {
  enableItem: null,
};

export default FAQsItem;
