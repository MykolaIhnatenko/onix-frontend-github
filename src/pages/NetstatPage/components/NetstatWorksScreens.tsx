import ImageComponent from '../../../components/Image/Image';

import WorksScreens2x from '@/images/NetstatPage/img_works-screen@2x.webp';
import netstatStyles from '../sass/netstat.module.scss';

function NetstatWorksScreens() {
  return (
    <div className={`${netstatStyles.netstat_works_wrapper} ${netstatStyles.netstat_container}`}>
      <div className={`${netstatStyles.netstat_works_screens} ${netstatStyles.screens}`}>
        <div className={netstatStyles.netstat_works_screens_container}>
          <ImageComponent
            src={WorksScreens2x}
            alt="works-screens"
            width={1148}
            height={404}
            quality={100}
            sizes="100vw"
          />
          <p>
            A clean and clear visual design supports a simple, intuitive, and
            straightforward user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NetstatWorksScreens;
