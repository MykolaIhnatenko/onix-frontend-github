import technologies from '../data/technologiesData.json';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ITechnologies from '../interfaces/ITechnologies';

import styles from '../sass/coloradoSportsVideoTechnologySection.module.scss';

function ColoradoSportsVideoTechnologySection() {
  return (
    <section className={styles.technologySection}>
      <div className={`${styles.container} coloradoContainer`}>
        <div className={`${styles.technologiesCard} cardContainer`}>
          <div className={styles.titles}>
            <VRARContent>
              <p className={`${styles.sectionTitle} sectionTitle`}>Core Technology Stack We&nbsp;Use</p>
            </VRARContent>
            <VRARContent>
              <h2>
                The technology stack we choose is scalable, secure, and flexible
                <span> to adapt to the </span>
                changing needs of our clients and their business needs.
              </h2>
            </VRARContent>
          </div>
          <div className={styles.listBlock}>
            {Object.keys(technologies)
              .map((technology, i) => (
                <VRARContent key={[technology, i].join('_')} className={styles.list}>
                  <h3>{technology}</h3>
                  <ul>
                    {technologies[technology as keyof ITechnologies].map((item, index) => (
                      <li className="fs18" key={[item, index].join('_')}><p>{item}</p></li>
                    ))}
                  </ul>
                </VRARContent>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColoradoSportsVideoTechnologySection;
