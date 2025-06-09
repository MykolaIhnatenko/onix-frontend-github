import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import IPhone1 from '../../../assets/images/convertCasePage/killer/img_iPhone_1@2x.webp';
import IPhone2 from '../../../assets/images/convertCasePage/killer/img_iPhone_2@2x.webp';
import IPhone3 from '../../../assets/images/convertCasePage/killer/img_iPhone_3@2x.webp';
import IPhone4 from '../../../assets/images/convertCasePage/killer/img_iPhone_4@2x.webp';

import styles from '../sass/killerFeaturesBlock.module.scss';

const killerSliderData = [
  {
    id: 1,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Easy card deposits
      </MainTitle>),
    img: IPhone1,
    text: (
      <ContentText className={styles.text} tag="p">
        Users can deposit money quickly and securely through their debit or credit cards.
        <span className={styles.textPadding} />
        They simply have to enter their card details and indicate their deposit amount. This eliminates manual
        transactions.
      </ContentText>
    ),
  },
  {
    id: 2,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Convenient currency exchange
      </MainTitle>),
    img: IPhone2,
    text: (
      <ContentText className={styles.text} tag="p">
        With this feature, users can easily transact in different currencies while knowing they
        are getting the best exchange rate.
        <span className={styles.textPadding} />
        Users can easily open a “currency account” and start financial operations immediately.
        <span className={styles.textPadding} />
        It allows people to eliminate manual paperwork associated with traditional currency exchanges,
        such as filling out forms or dealing with long waits at banks.
      </ContentText>
    ),
  },
  {
    id: 3,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Quick money sending and receiving
      </MainTitle>),
    img: IPhone3,
    text: (
      <ContentText className={styles.text} tag="p">
        Users can send or receive funds instantly and securely track transactions over time.
        The user simply chooses another app&apos;s user and indicates an amount they want to send. Money comes
        to the other user&apos;s currency account, which they can use at once.
      </ContentText>),
  },
  {
    id: 4,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Handy transaction history
      </MainTitle>),
    img: IPhone4,
    text: (
      <ContentText className={styles.text} tag="p">
        Users can easily monitor their spending or income over time.
        <span className={styles.textPadding} />
        This feature gives users greater visibility into their finances, enabling them to identify
        patterns or make more informed decisions about managing their money.
      </ContentText>),
  },
];

export default killerSliderData;
