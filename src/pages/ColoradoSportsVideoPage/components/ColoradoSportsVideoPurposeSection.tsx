import ColoradoSportVideo from './ColoradoSportsVideo';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/coloradoSportsVideoPurposeSection.module.scss';

function ColoradoSportsVideoPurposeSection() {
  return (
    <section className={styles.purposeSection}>
      <div className={`${styles.container} coloradoContainer`}>
        <div className={`${styles.purposeCard} cardContainer`}>
          <div className={styles.mobileCard}>
            <VRARContent>
              <h2>
                Coaches and parents hang onto every youth sports memory,
                <span>
                  {' '}
                  whether it be a game-winning shot or touchdown, and what better way to
                  {' '}
                </span>
                preserve those memories than with a professional video?
              </h2>
            </VRARContent>
            <ColoradoSportVideo videoClass="mobile" />
            <VRARContent>
              <p className="fs16">
                Colorado Sports Video specializes in recording and editing youth and sports events, so you can relive
                those special moments for years to come.
                <br />
                <br />
                It helps to create the best videos in the industry and capture any outdoor sport (soccer, lacrosse,
                rugby, football, field hockey) or indoor sport (basketball, volleyball, ice hockey cheer).
              </p>
            </VRARContent>
          </div>
          <ColoradoSportVideo videoClass="desk" />
        </div>
      </div>
    </section>
  );
}

export default ColoradoSportsVideoPurposeSection;
