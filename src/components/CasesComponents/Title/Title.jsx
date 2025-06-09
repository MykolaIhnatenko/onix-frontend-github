import PropTypes from 'prop-types';

import { ibmPlexMono } from '../../../fonts/MainFonts';

import styles from './sass/Title.module.scss';

function Title({ children, className, tag: Tag }) {
  return (
    <Tag className={`${styles.title} ${className} ${ibmPlexMono.variable}`}>
      {children}
    </Tag>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  tag: PropTypes.string,
};

Title.defaultProps = {
  className: undefined,
  tag: 'h2',
};

export default Title;
