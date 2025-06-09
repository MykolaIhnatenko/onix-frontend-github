import IBudgies from '../interfaces/IBudgies';
import BadgeItem from './BadgeItem';
import SelectedBadgeItem from './SelectedBadgeItem';
import { BADGE_TYPE } from '../../../constants/constants';

import styles from '../sass/Budgies.module.scss';

function Budgies({
  resetSpecialistValue, resetTechnologyValue, setDuration, setDomains, specialists,
  technologies, duration, currentDomain,
}: IBudgies) {
  return (
    <div className={styles.technologiesBlock}>
      {
        Object.keys(specialists).map((specialist) => (
          !!specialists[specialist as keyof typeof specialists] && (
            <SelectedBadgeItem
              typeBadge={BADGE_TYPE.SPECIALIST}
              item={specialists[specialist as keyof typeof specialists]}
              itemCounter={specialist}
              closeBadge={() => resetSpecialistValue(specialist as keyof typeof specialists)}
              key={[specialists[specialist as keyof typeof specialists], specialist].join('_')}
            />
          )
        ))
      }
      {
        Object.keys(technologies).map((direction) => (
          Object.keys(technologies[direction as keyof typeof technologies]).map((technology) => (
            !!technologies[direction as keyof typeof technologies][technology] && (
              <SelectedBadgeItem
                typeBadge={BADGE_TYPE.TECHNOLOGY}
                item={technologies[direction as keyof typeof technologies][technology]}
                itemCounter={technology}
                closeBadge={() => resetTechnologyValue(technology, direction as keyof typeof technologies)}
                key={[technologies[direction as keyof typeof technologies][technology], technology].join('_')}
              />
            )
          ))
        ))
      }
      {currentDomain && (
      <BadgeItem
        typeBadge={BADGE_TYPE.DOMAIN}
        item={currentDomain}
        closeBadge={() => setDomains('')}
      />
      )}
      {duration && (
      <BadgeItem
        typeBadge={BADGE_TYPE.DURATION}
        item={duration}
        closeBadge={() => setDuration('')}
      />
      )}
    </div>
  );
}

export default Budgies;
