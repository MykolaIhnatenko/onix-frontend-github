import PropTypes from 'prop-types';

import { generalSans } from '../../../fonts/MainFonts';

import styles from './sass/Subtitle.module.scss';

function Subtitle({ children, className, tag: Tag }) {
  return (
    <Tag className={`${styles.subtitle} ${className} ${generalSans.variable}`}>
      {children}
    </Tag>
  );
}

Subtitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  tag: PropTypes.string,
};

Subtitle.defaultProps = {
  className: undefined,
  tag: 'h3',
};

export default Subtitle;
