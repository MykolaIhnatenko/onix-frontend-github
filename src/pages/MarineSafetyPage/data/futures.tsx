import styles from '../sass/MarineSafety.module.scss';

const futures = [
  {
    subtitle: 'Scalability',
    texts: ['The safety system is scalable. It can have:'],
    isUnderlined: true,
    children: (
      <>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <span className={styles.smallCircle} />
            <p className={styles.itemText}>
              A main mobile device tracking the signal directly from up to six beacons (this is
              sufficient for vessels up to 40ft)
            </p>
          </li>
          <li className={styles.listItem}>
            <span className={styles.smallCircle} />
            <p className={styles.itemText}>
              A 5V USB hub tracking up to 15 beacons (suitable for vessels up to
              50ft);
            </p>
          </li>
          <li className={styles.listItem}>
            <span className={styles.smallCircle} />
            <p className={styles.itemText}>
              A 12V wired hub tracking up to 15 beacons and acting as an engine
              kill switch in case of an incident.
            </p>
          </li>
        </ul>
        <div className={styles.biggerTextContainer}>
          <p className={styles.biggerText}>
            When the mobile app is connected to the hubs, it allows greater
            control over the beacons that are being tracked.
          </p>
        </div>
      </>
    ),
  },
  {
    subtitle: 'Safe storage',
    texts: [
      'The system stores the time of an incident and all location data required by the rescue services.',
      'If a prompt recovery is not possible, the system automatically inputs the '
      + 'coordinates into a VHF MOB (man overboard) script to aid in transferring '
      + 'concise information to the emergency services.',
    ],
    isUnderlined: true,
    children: (<div className={styles.semicircle} />),
  },
  {
    subtitle: (
      <>
        Emergency
        <br />
        communication
      </>
    ),
    texts: [
      'For those sailing, hiking, or traveling solo, the app’s eponymous mode promotes safety as well.',
      'The person enters an emergency contact in the app and places their mobile device securely'
      + ' somewhere on the boat. In MOB situations, it will automatically send an SMS with incident '
      + 'GPS coordinates to the emergency contact’s mobile phone.',
    ],
  },
];

export default futures;
