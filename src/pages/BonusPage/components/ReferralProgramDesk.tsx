import referralProgramDataDesk from '../data/referralProgramDataDesk.json';

import styles from '../sass/bonusReferralProgram.module.scss';

function ReferralProgramDesk() {
  return (
    <>
      {referralProgramDataDesk.map((item, index) => (
        <div
          key={['DeskBonusReferralProgramId', index].join('_')}
          className={styles.deskContentItem}
        >
          {item.map(({ content }, i) => (
            <div key={['deskTextItem', i].join('_')} className={styles.deskTextContainer}>
              {index === 0 ? (
                <h3 className={styles.deskText}>
                  {content}
                </h3>
              ) : (
                <p className={styles.deskText}>
                  {content}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default ReferralProgramDesk;
