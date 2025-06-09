import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/rebrandingBlock.module.scss';

const fitnessCoachingRebrandingBlockData = {
  blockTitle: 'Rebranding process',
  firstText: (
    <ContentText className={styles.text} tag="p">
      Initially, the fitness platform had an orange-black color scheme. We decided to revitalize its visual identity.
      <span className={styles.spanPadding} />
      {' '}
      One of the key changes involved altering the color scheme, transitioning from the previous dark orange theme
      to an elegant combination of black and green.
    </ContentText>
  ),
  secondText: (
    <ContentText className={styles.text} tag="p">
      The color black signifies sophistication and strength, while green symbolizes vitality and growth, perfectly
      reflecting the platform&apos;s focus on health and wellness.
      <span className={styles.spanPadding} />
      {' '}
      By rebranding the fitness platform and changing the color scheme to black and green, we successfully
      rejuvenated its image, creating a more appealing and engaging user experience.
    </ContentText>
  ),
  secondTitle: 'After rebranding, the fitness platform witnessed remarkable results:',
  data: [
    {
      id: '01',
      title: 'A threefold increase in subscription purchases',
    },
    {
      id: '02',
      title: 'Expanding the platform\'s user base organically',
    },
    {
      id: '03',
      title: 'Increased level of loyalty',
    },
  ],
};

export default fitnessCoachingRebrandingBlockData;
