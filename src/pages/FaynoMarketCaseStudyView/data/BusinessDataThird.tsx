import ContentText from 'components/ContentText/ContentText';

const spanStyle = 'font-semibold';

const BusinessDataThird = {
  upTitle: '[ Results ]',
  title: (
    <>
      In the first year of operation, the mobile apps helped Fayno Market raise the number of receipts by
      {' '}
      <span className={spanStyle}>6.6 million,</span>
      {' '}
      accrued bonuses by
      {' '}
      <span className={spanStyle}>7&nbsp;million,</span>
      {' '}
      redeemed bonuses by
      {' '}
      <span className={spanStyle}>7.3 million,</span>
      {' '}
      and the sales by
      {' '}
      <span className={spanStyle}>₴1 billion.</span>
      {' '}
    </>
  ),
  subTitle: (
    <>
      Over three years, the Fayno Market app has seen
      {' '}
      <span className={spanStyle}>over 300,000 downloads.</span>
    </>
  ),
  firstText: (
    <ContentText tag="p" marginAbsent>
      Currently, the app serves
      {' '}
      <span className={spanStyle}>26,000 users daily</span>
      {' '}
      and 97,000 monthly. 81% use the Android version,
      and 19% use the iOS app. The app enjoys an excellent
      {' '}
      <span className={spanStyle}>Day 1 retention rate of 39.7%.</span>
    </ContentText>
  ),
  secondText: `Continuous communication with the client and user feedback
    monitoring facilitates continuous app improvement.`,
};

export default BusinessDataThird;
