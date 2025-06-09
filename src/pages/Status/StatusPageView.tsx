import ImageComponent from '../../components/Image/Image';
import mainBg from '../../assets/images/Status/background.jpg';
import MarkdownComponent from '../SingleBlog/components/MarkdownComponent';
import IOnixStatusPage from '../../interfaces/IStatusPage';

import styles from './sass/status.module.scss';

function StatusPageView({ pageData }:{ pageData:IOnixStatusPage | undefined }) {
  const {
    attributes: {
      title = '',
      titleMessage = '',
      data: content = '',
    } = {},
  } = pageData || {};

  return (
    <>
      <div className={styles.main}>
        <ImageComponent
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          src={mainBg}
          alt="Sales force"
        />
        <div className={styles.overlay} />
        <div className="col l12">
          <h1>{title}</h1>
          <p className={styles.titleMessage}>{titleMessage}</p>
        </div>
      </div>
      <div className={`col l12 ${styles.content}`}>
        <MarkdownComponent html={content} />
        <div className={styles.blueGradient} />
        <div className={styles.yellowGradient} />
      </div>
    </>
  );
}

export default StatusPageView;
