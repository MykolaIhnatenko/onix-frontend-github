import ContentText from 'components/ContentText/ContentText';

import styles from '../sass/ChallangesInfo.module.scss';

const challengesInfoData = [
  {
    title: 'Dynamic Redesign',
    desc: (
      <>
        <ContentText marginAbsent tag="p">
          We redesigned the online bank for kids to enhance the app&apos;s usability.
          {' '}
          <br />
          <br />
          {' '}
          The new dynamic interface aesthetic captures users’ attention.
          A bold color palette creates a visually stimulating experience.
        </ContentText>
        <ul className={styles.list}>
          <li className={styles.itemList}>
            <ContentText marginAbsent className={`${styles.text} ${styles.symbolMargin}`} tag="p">﹂</ContentText>
            <ContentText marginAbsent className={styles.text} tag="p">
              Orange buttons add a playful and energetic touch, encouraging interaction.
            </ContentText>
          </li>
          <li className={styles.itemList}>
            <ContentText marginAbsent className={`${styles.text} ${styles.symbolMargin}`} tag="p">﹂</ContentText>
            <ContentText marginAbsent className={styles.text} tag="p">
              Dark blue and yellow accents in the menu and interface enhance visual appeal
              and differentiate functionalities.
            </ContentText>
          </li>
        </ul>
        <ContentText marginAbsent tag="p" className="min-lg:!mt-[30px]">
          Vibrant colors make navigation user-friendly and the app visually appealing.
        </ContentText>
      </>
    ),
  },
  {
    title: 'Identity Verification',
    desc: (
      <ContentText marginAbsent tag="p">
        KYC (Know Your Customer) procedures ensure the security of user accounts and transactions and
        compliance with regulatory requirements.
        {' '}
        <br />
        <br />
        {' '}
        Users input personal details like name, birth date, address, and contacts during registration.
        Our KYC process involves additional steps, such as document verification. Users upload government
        IDs like passports or driver&apos;s licenses, which are cross-checked with databases to prevent fraud.
      </ContentText>
    ),
  },
  {
    title: 'Payment Integration',
    desc: (
      <>
        <ContentText marginAbsent tag="p">
          Our approach ensures smooth integration of payment functionalities into the kids&apos; banking app.
        </ContentText>
        <ul className={styles.list}>
          <li className={styles.itemList}>
            <ContentText marginAbsent className={`${styles.text} ${styles.symbolMargin}`} tag="p">﹂</ContentText>
            <ContentText marginAbsent className={styles.text} tag="p">
              We analyzed the payment processor&apos;s capabilities and our app&apos;s infrastructure.
            </ContentText>
          </li>
          <li className={styles.itemList}>
            <ContentText marginAbsent className={`${styles.text} ${styles.symbolMargin}`} tag="p">﹂</ContentText>
            <ContentText marginAbsent className={styles.text} tag="p">
              We prioritized integration for account linking and balance inquiries.
            </ContentText>
          </li>
          <li className={styles.itemList}>
            <ContentText marginAbsent className={`${styles.text} ${styles.symbolMargin}`} tag="p">﹂</ContentText>
            <ContentText marginAbsent className={styles.text} tag="p">
              We added transaction processing for bills and online purchases.
            </ContentText>
          </li>
        </ul>
        <ContentText marginAbsent tag="p" className="min-lg:!mt-[30px]">
          Iterative approach helps control the integration process, foresee challenges,
          and deliver a reliable payment solution for online banking for kids.
        </ContentText>
      </>
    ),
  },
  {
    title: 'Parental Dashboard',
    desc: (
      <ContentText marginAbsent tag="p">
        We built a comprehensive and intuitive interface for parents to monitor their expenses and
        their children&apos;s in the banking application. This feature offers transparency and control over
        family finances, empowering parents to oversee their children&apos;s spending habits and guide them
        toward responsible financial management.
      </ContentText>
    ),
  },
  {
    title: 'Savings',
    desc: (
      <>
        <ContentText marginAbsent tag="p">
          Saving Spots makes saving fun and develops healthy financial habits.
          Kids allocate funds for specific goals and learn the value of money management.
          With the app they can:
        </ContentText>
        <ul className={styles.list}>
          <li className={styles.itemList}>
            <ContentText marginAbsent className={`${styles.text} ${styles.symbolMargin}`} tag="p">﹂</ContentText>
            <ContentText marginAbsent className={styles.text} tag="p">
              Create multiple accounts for different savings goals.
            </ContentText>
          </li>
          <li className={styles.itemList}>
            <ContentText marginAbsent className={`${styles.text} ${styles.symbolMargin}`} tag="p">﹂</ContentText>
            <ContentText marginAbsent className={styles.text} tag="p">
              Personalize each account with unique names.
            </ContentText>
          </li>
          <li className={styles.itemList}>
            <ContentText marginAbsent className={`${styles.text} ${styles.symbolMargin}`} tag="p">﹂</ContentText>
            <ContentText marginAbsent className={styles.text} tag="p">
              Allocate funds from the main account to savings goals.
            </ContentText>
          </li>
          <li className={styles.itemList}>
            <ContentText marginAbsent className={`${styles.text} ${styles.symbolMargin}`} tag="p">﹂</ContentText>
            <ContentText marginAbsent className={styles.text} tag="p">
              Track progress visually to stay motivated.
            </ContentText>
          </li>
          <li className={styles.itemList}>
            <ContentText marginAbsent className={`${styles.text} ${styles.symbolMargin}`} tag="p">﹂</ContentText>
            <ContentText marginAbsent className={styles.text} tag="p">
              Withdraw funds upon reaching savings goals.
            </ContentText>
          </li>
          <li className={styles.itemList}>
            <ContentText marginAbsent className={`${styles.text} ${styles.symbolMargin}`} tag="p">﹂</ContentText>
            <ContentText marginAbsent className={styles.text} tag="p">
              Learn financial skills through hands-on saving.
            </ContentText>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Admin Tool',
    desc: (
      <ContentText marginAbsent tag="p">
        We provided our client with a powerful tool to manage and oversee the
        operations of the banking solution. This feature allows administrators to
        handle various tasks efficiently, including addressing user issues, managing
        accounts, and administering bonuses and rewards.
      </ContentText>
    ),
  },
];

export default challengesInfoData;
