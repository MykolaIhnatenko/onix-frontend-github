import PropTypes from 'prop-types';

import { ibmPlexMono } from '../../../fonts/MainFonts';

import styles from './sass/Text.module.scss';

function Text({ children, className, tag: Tag }) {
  return (
    <Tag className={`${styles.text} ${className} ${ibmPlexMono.variable}`}>
      {children}
    </Tag>
  );
}

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  tag: PropTypes.string,
};

Text.defaultProps = {
  className: undefined,
  tag: 'p',
};

export default Text;
